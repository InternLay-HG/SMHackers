import os
import hashlib
from dotenv import load_dotenv
from flask import Flask, request, jsonify
from flask_cors import CORS  # Importing CORS from flask_cors

from PyPDF2 import PdfReader
import cassio

from langchain_google_genai import ChatGoogleGenerativeAI, GoogleGenerativeAIEmbeddings
from langchain.vectorstores.cassandra import Cassandra
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain.schema import Document
from langchain.chains import RetrievalQA

# Load environment variables from .env
load_dotenv()

# Configuration
GOOGLE_API_KEY = os.getenv("GOOGLE_API_KEY")
ASTRA_DB_APPLICATION_TOKEN = os.getenv("ASTRA_DB_APPLICATION_TOKEN")
ASTRA_DB_ID = os.getenv("ASTRA_DB_ID")
PDF_PATH = os.getenv("PDF_PATH", "book.pdf")
HASH_FILE = os.getenv("HASH_FILE", "doc_hash.txt")
PORT = int(os.getenv("PORT", 5000))

# Initialize Astra DB (Cassandra) connection
cassio.init(token=ASTRA_DB_APPLICATION_TOKEN, database_id=ASTRA_DB_ID)

# Initialize embeddings and LLM with Google Gemini models
embedding = GoogleGenerativeAIEmbeddings(
    model="models/embedding-001",  # valid embedding model
    google_api_key=GOOGLE_API_KEY
)
llm = ChatGoogleGenerativeAI(
    model="gemini-1.5-pro",           
    google_api_key=GOOGLE_API_KEY
)

vectorstore = Cassandra(
    embedding=embedding,
    table_name="medical_docs",
    session=None, 
)

def read_pdf(path: str) -> str:
    reader = PdfReader(path)
    raw_text = ""
    for page in reader.pages:
        text = page.extract_text()
        if text:
            raw_text += text
    return raw_text


def compute_hash(text: str) -> str:
    return hashlib.sha256(text.encode()).hexdigest()


def load_previous_hash(file_path: str) -> str | None:
    if os.path.exists(file_path):
        with open(file_path, "r") as f:
            return f.read().strip()
    return None


def save_hash(file_path: str, h: str):
    with open(file_path, "w") as f:
        f.write(h)


def index_documents():
    raw = read_pdf(PDF_PATH)
    current_hash = compute_hash(raw)
    prev_hash = load_previous_hash(HASH_FILE)

    if current_hash == prev_hash:
        print("[INFO] No changes detected in PDF, skipping indexing.")
        return

    # Split text into chunks
    splitter = RecursiveCharacterTextSplitter(chunk_size=1000, chunk_overlap=100)
    chunks = splitter.split_text(raw)
    docs = [Document(page_content=chunk, metadata={"source": os.path.basename(PDF_PATH)}) for chunk in chunks]

    # Add to vector store
    vectorstore.add_documents(docs)
    save_hash(HASH_FILE, current_hash)
    print(f"[INFO] Indexed {len(docs)} document chunks.")


# Index documents at startup
index_documents()

# Build a RetrievalQA chain for question-answering
doc_retriever = vectorstore.as_retriever()
qa_chain = RetrievalQA.from_chain_type(
    llm=llm,
    chain_type="stuff",
    retriever=doc_retriever
)

# Create Flask app
app = Flask(__name__)

# Enable CORS for the entire app (allows cross-origin requests)
CORS(app, origins=["http://localhost:5173"])
@app.route('/', methods=['GET'])
def health_check():
    return jsonify({"status": "ok"})

@app.route('/query', methods=['POST'])
def query_endpoint():
    # Expecting JSON with the main question in the 'question' field
    data = request.get_json()
    if not data or "question" not in data:
        return jsonify({"error": "Missing 'question' field in the request body"}), 400

    user_q = data["question"]

    try:
        answer = qa_chain.run(user_q)
        return jsonify({"query": user_q, "answer": answer})
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=PORT, debug=True)

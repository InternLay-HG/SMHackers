import { useEffect, useRef, useState } from "react";
import axios from "axios";

export function ChatApp() {
    const [activeMessage, setActive] = useState("");
    const [messages, setMessages] = useState([
        {
            text: "Hi there! Ask me anything about your medical book.",
            isSent: true,
        },
    ]);

    const messagesContainerRef = useRef(null);
    const messagesEndRef = useRef(null);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    const handleSendMessage = async () => {
        const text = activeMessage.trim();
        if (!text) return;

        setMessages((prev) => [...prev, { text, isSent: false }]);
        setActive("");

        try {
            const response = await axios.post("http://127.0.0.1:5000/query", {
                question: text,
            });

            const answer = response.data.answer;

            setMessages((prev) => [
                ...prev,
                { text, isSent: false },
                { text: answer, isSent: true },
            ]);
        } catch (err) {
            console.error("Error fetching answer:", err);
            setMessages((prev) => [
                ...prev,
                { text, isSent: true, error: true, text: "Something went wrong." },
            ]);
        }
    };

    return (
        <div className="h-screen w-full bg-back-green flex flex-col items-center justify-center px-4 py-8">
            <div className="w-full max-w-4xl h-full bg-[#f0f8f5] rounded-xl shadow-md flex flex-col">
                <div className="w-full py-4 px-6 bg-back-green rounded-t-xl text-white text-xl font-bold">
                    Chat with Your Book 📖
                </div>

                <div className="w-full h-5/6 bg-[#60af9522] rounded-b-xl flex flex-col">
                    {/* Chat history */}
                    <div
                        ref={messagesContainerRef}
                        className="p-4 space-y-2 overflow-y-auto flex-1 flex flex-col"
                    >
                        {messages.map((message, index) => (
                            <div
                                key={index}
                                className={`p-2 rounded-lg shadow max-w-[70%] ${
                                    message.isSent
                                        ? "bg-white text-black self-start"
                                        : "bg-[#7cc4b3] text-white self-end"
                                }`}
                                style={{
                                    textAlign: message.isSent ? "left" : "right",
                                }}
                            >
                                {message.text}
                            </div>
                        ))}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Message input */}
                    <div className="w-full h-[60px] px-4 py-2 flex bg-[#f6fffb] border-t-2">
                        <input
                            type="text"
                            className="flex-grow h-full bg-white rounded-lg p-4 border-2 border-back-green focus:outline-none"
                            placeholder="Type a message..."
                            value={activeMessage}
                            onChange={(e) => setActive(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                    handleSendMessage();
                                }
                            }}
                        />
                        <button
                            className="ml-2 bg-[#C1DCC2] p-2 rounded-full border-2 border-back-green shadow"
                            onClick={handleSendMessage}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                                stroke="currentColor"
                                className="w-6 h-6 text-black"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M8 16l-4-4m0 0l4-4m-4 4h16"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

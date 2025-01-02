import { Header } from '../components/header';
import { useState } from 'react';

export const NurseUpload = () => {
    const [title, setTitle] = useState("");
    const [file, setFile] = useState(null); 

    const submitFile = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("title", title);
        formData.append("file", file);
        console.log(title,file);
    };

    return (
        <div>
            <Header />
            <div className='bg-[#F6FFFBC7] flex-col'>
                <form onSubmit={submitFile}>
                    <div>
                        <h4>PDF Name</h4>
                        <input 
                            onChange={(e) => setTitle(e.target.value)} 
                            type='text' 
                            placeholder='PDF Title' 
                        />
                    </div>
                    <div>
                        <input 
                            onChange={(e) => setFile(e.target.files[0])}  
                            type='file' 
                        />
                    </div>
                    <div>
                        <button type='submit'>Upload</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

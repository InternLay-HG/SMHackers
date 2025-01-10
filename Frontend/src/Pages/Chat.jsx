import React, { useState, useRef, useEffect } from "react";
import { Header } from "../components/header";

export const ChatApp = () => {
    const [messages, setMessages] = useState([]);
    const [activeMessage, setActive] = useState("");
    const messagesEndRef = useRef(null);

    const handleSendMessage = () => {
        if (activeMessage.trim()) {
            setMessages((prevMessages) => [...prevMessages, activeMessage]);
            setActive("");
        }
    };
    useEffect(() => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [messages]);

    return (
        <div className="w-screen h-screen bg-basic-green">
            <Header />
            <div className="w-screen h-[90%] justify-items-center">
                <div className="h-[80%] w-5/6 border-2 border-back-green rounded-xl mt-[70px] shadow-lg shadow-back-green opacity-50">
                    <div className="w-full h-1/6 bg-[#E3F0AF] rounded-t-xl px-8 py-4 shadow-lg border-b-1 border-black">
                        Chatting To:
                    </div>

                    <div className="w-full h-5/6 bg-[#FBF6E9] rounded-b-xl relative">
                        {/* Messages container */}
                        <div className="p-4 space-y-2 overflow-y-auto max-h-full">
                            {messages.map((message, index) => (
                                <div
                                    key={index}
                                    className="bg-white p-2 rounded-lg shadow"
                                >
                                    {message}
                                </div>
                            ))}
                            {/* Invisible element to scroll into view */}
                            <div ref={messagesEndRef}></div>
                        </div>
                        <div className="absolute w-[90%] bottom-5 left-[65px] flex items-center">
                            <input
                                type="text"
                                className="w-full h-[52px] bg-[#C1DCC2] rounded-lg p-4 border-2 border-back-green focus:outline-none"
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
        </div>
    );
};

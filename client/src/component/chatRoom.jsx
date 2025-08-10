import React from "react";

export function Chatroom(){
    return (
        <div className="flex flex-col h-screen">
            <div className="m-2">
            <div>
                <strong>Message 1</strong>
            </div>
            <div>
                <strong>Message 2</strong>
            </div>
            </div>
            <form className="flex items-center mt-auto mb-3">
            <input
                type="text"
                className="flex-grow rounded-lg bg-gray-100 py-3 px-4 focus:outline-none m-2"
                placeholder="Type your message..."
            />
            <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 ml-4 rounded focus:outline-none focus:shadow-outline mr-6"
            >
                Send
            </button>
            </form>
        </div>
    );
}
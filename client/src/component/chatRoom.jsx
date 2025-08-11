import React, { useState } from "react";

export function Chatroom() {
  return (
    <div className="flex flex-col h-screen bg-[#353541]">
      <div className="m-2">
        <div>
          <strong>Sample message</strong>
        </div>
        <div>
          <strong>Another sample message</strong>
        </div>
      </div>
      <form className="flex items-center mt-auto mb-3">
        <select
          name="option"
          className="
            absolute ml-4
            bg-[#353541] 
            text-white 
            py-2 px-3 
            rounded-md 
            "
            >
          <option hidden>+</option>
          <option value="1">gg</option>
          <option value="2">gg</option>
          <option value="3">gg</option>
        </select>

        <input
          type="text"
          className="
          flex-grow 
          rounded-lg 
          bg-[#3f414e] 
          text-white
          py-3 px-20 
          m-2
          border border-gray-600
          focus:outline-none 
          focus:ring-2 
          focus:ring-blue-500
          placeholder-gray-400
          "
          placeholder="Type..."
        />
        <button
          type="submit"
          className="bg-blue-500 mr-3 hover:bg-blue-700 text-white font-bold py-3 px-6 ml-4 rounded focus:outline-none focus:shadow-outline"
        >
          Send
        </button>
      </form>
    </div>
  );
}
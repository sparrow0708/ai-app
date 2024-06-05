'use client';

import { useChat } from 'ai/react';

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit, data } = useChat();
  return (
    <div className="flex flex-col w-full  h-screen mx-auto bg-white shadow-lg rounded-lg">
      <div className="flex-1 p-4 overflow-y-auto">
        {data && <pre className="p-4 bg-gray-100 rounded">{JSON.stringify(data, null, 2)}</pre>}
        {messages.map(m => (
          <div key={m.id} className={`p-2 my-2 rounded ${m.role === 'user' ? 'bg-blue-500 text-white self-end' : 'bg-gray-200 text-gray-900 self-start'}`}>
            <span className="font-bold">{m.role === 'user' ? 'User: ' : 'AI: '}</span>
            <span>{m.content}</span>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="flex items-center p-4 border-t border-gray-300">
        <input
          className="flex-1 p-2 mr-2 border border-gray-300 rounded shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={input}
          placeholder="Say something..."
          onChange={handleInputChange}
        />
        <button type="submit" className="px-4 py-2 font-bold text-white bg-blue-500 rounded shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
          Send
        </button>
      </form>
    </div>
  );
}

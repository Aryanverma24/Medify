import { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export default function Support() {
  const [messages, setMessages] = useState([
    {
      role: "bot",
      text: "Hi 👋 I'm Medify AI. I'm here to help you feel calm and supported. What's on your mind?",
    },
  ]);

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userText = input;

    const userMessage = { role: "user", text: userText };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const res = await axios.post(`${API_BASE_URL}/chat`, {
        message: userText,
      });

      const botReply = {
        role: "bot",
        text: res.data.reply || "I'm here for you 💚",
      };

      setMessages((prev) => [...prev, botReply]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { role: "bot", text: "Something went wrong. Try again." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen flex flex-col bg-gradient-to-br from-green-50 via-white to-emerald-50">

      {/* HEADER (fixed height) */}
      <div className="shrink-0 p-3 border-b bg-white">
        <h1 className="text-2xl font-bold text-emerald-700">
          Medify AI Support 
        </h1>
        <p className="text-gray-500 text-sm">
          Talk freely. I'm here to help you relax, reflect, and feel better.
        </p>
      </div>

      {/* CHAT AREA (ONLY THIS SCROLLS) */}
      <div className="flex-1 overflow-y-auto p-3 space-y-4">
        {messages.map((msg, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`flex ${
              msg.role === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-[70%] px-4 py-3 rounded-2xl text-sm shadow
              ${
                msg.role === "user"
                  ? "bg-emerald-500 text-white rounded-br-none"
                  : "bg-white text-gray-700 rounded-bl-none border"
              }`}
            >
              {msg.text}
            </div>
          </motion.div>
        ))}

        {loading && (
          <div className="text-gray-500 text-sm animate-pulse">
            Medify AI is thinking...
          </div>
        )}
      </div>

      {/* INPUT (ALWAYS FIXED AT BOTTOM) */}
      <div className="shrink-0 p-4 bg-white border-t flex gap-3">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Share what's on your mind..."
          className="flex-1 border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-400"
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />

        <button
          onClick={sendMessage}
          disabled={loading}
          className="bg-emerald-600 text-white px-6 py-3 rounded-xl hover:bg-emerald-700 disabled:opacity-50"
        >
          Send
        </button>
      </div>
    </div>
  );
}
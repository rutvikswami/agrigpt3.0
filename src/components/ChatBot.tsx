import React, { useState, useEffect, useRef } from "react";
import { MessageCircle, Mic, Send } from "lucide-react";

// Define message type
interface Message {
  sender: "user" | "bot";
  text: string;
}

export function ChatBot() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [messages, setMessages] = useState<Message[]>([
    { sender: "bot", text: "Hello! I'm your AgriGPT assistant. How can I help you with farming today?" },
  ]);
  const [input, setInput] = useState<string>("");
  const [isListening, setIsListening] = useState<boolean>(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  // Auto-scroll to latest message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Function to send a message to Mistral via Ollama
  const sendMessage = async () => {
    if (!input.trim()) return;
  
    const userMessage: Message = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
  
    try {
      const response = await fetch("http://localhost:5000/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: input }), // Send question to backend
      });
  
      const data = await response.json();
      const botMessage: Message = { sender: "bot", text: data.answer };
  
      setMessages((prev) => [...prev, botMessage]);
  
      // Speak out the bot's response
      speakText(botMessage.text);
    } catch (error) {
      console.error("Error:", error);
      const errorMessage: Message = { sender: "bot", text: "Error connecting to the AI server." };
      setMessages((prev) => [...prev, errorMessage]);
  
      speakText(errorMessage.text);
    }
  };
  

  // Function to handle voice input
  const handleVoiceInput = () => {
    const SpeechRecognition =
      (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

    if (!SpeechRecognition) {
      console.error("Speech Recognition is not supported in this browser.");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";
    recognition.interimResults = false;
    recognition.continuous = false;

    setIsListening(true);
    recognition.start();

    recognition.onresult = (event: SpeechRecognitionEvent) => {
      if (event.results.length > 0) {
        const transcript = event.results[0][0].transcript;
        setInput(transcript); // ✅ Sets text in input field (but does NOT send automatically)
      }
    };

    recognition.onerror = (event: any) => {
      console.error("Speech recognition error:", event.error);
      setIsListening(false);
    };

    recognition.onend = () => {
      setIsListening(false);
    };
  };

  // Function to speak text using Text-to-Speech
  const speakText = (text: string) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US";
    utterance.rate = 1.0;
    utterance.pitch = 1.0;
    speechSynthesis.speak(utterance);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-green-600 hover:bg-green-700 text-white rounded-full p-4 shadow-lg transition-all"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      )}

      {isOpen && (
        <div className="bg-white rounded-lg shadow-xl w-[380px] h-[500px] flex flex-col">
          <div className="p-4 bg-green-600 text-white rounded-t-lg flex justify-between items-center">
            <h3 className="font-semibold">AgriGPT Assistant</h3>
            <button onClick={() => setIsOpen(false)} className="hover:bg-green-700 rounded-full p-1">
              ✕
            </button>
          </div>

          <div className="flex-1 p-4 overflow-y-auto">
            {messages.map((msg, index) => (
              <div key={index} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"} mb-2`}>
                <div className={`p-3 rounded-lg max-w-[80%] ${msg.sender === "user" ? "bg-green-500 text-white" : "bg-blue-200 text-black"}`}>
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-4 border-t">
            <div className="flex items-center gap-2">
              <button onClick={handleVoiceInput} className="relative p-2 hover:bg-gray-100 rounded-full">
                <Mic className={`w-5 h-5 text-green-600 transition-transform ${isListening ? "animate-pulse" : ""}`} />
              </button>
              <input
                type="text"
                placeholder="Type your message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()} // ✅ Press Enter to send
                className="flex-1 border rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
              />
              <button onClick={sendMessage} className="p-2 hover:bg-gray-100 rounded-full">
                <Send className="w-5 h-5 text-green-600" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

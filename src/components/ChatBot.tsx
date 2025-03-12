import React, { useState, useEffect, useRef } from "react";
import { MessageCircle, Mic, Send, Volume2, StopCircle } from "lucide-react";
import { franc } from "franc-min";
import { cn } from "../lib/utils";

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
  const [activeVoiceIndex, setActiveVoiceIndex] = useState<number | null>(null);  // Track active voice button
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  // Modified scrollToBottom function
  const scrollToBottom = (toTop = false) => {
    if (toTop) {
      messagesEndRef.current?.parentElement?.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const stopOutput = () => {
    if (speechSynthesis.speaking) {
      speechSynthesis.cancel();
      setActiveVoiceIndex(null);  // Reset active button
    }
  };

  const detectLanguage = (text: string) => {
    const langCode = franc(text);
    switch (langCode) {
      case "hin":
        return "hi-IN";
      case "kan":
        return "kn-IN";
      case "tam":
        return "ta-IN";
      case "tel":
        return "te-IN";
      default:
        return "en-US";
    }
  };

  const handleVoiceInput = () => {
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert("Voice recognition is not supported in this browser.");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = "";
    recognition.interimResults = false;

    setIsListening(true);
    recognition.start();

    recognition.onresult = (event: SpeechRecognitionEvent) => {
      const transcript = event.results[0][0].transcript;
      setInput(transcript);
    };

    recognition.onerror = () => setIsListening(false);
    recognition.onend = () => setIsListening(false);
  };

  const speakText = (text: string, index: number) => {
    if (speechSynthesis.speaking) speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = detectLanguage(text);
    utterance.voice = speechSynthesis.getVoices().find(voice => voice.lang === "kn-IN") || null;

    setActiveVoiceIndex(index);

    // Scroll to the starting of the message whose voice output is generated
    const messageElement = document.getElementById(`message-${index}`);
    messageElement?.scrollIntoView({ behavior: "smooth", block: "start" });

    speechSynthesis.speak(utterance);
    utterance.onend = () => setActiveVoiceIndex(null);
  };


  const handleVoiceOutput = (text: string, index: number) => {
    if (activeVoiceIndex === index) {
      stopOutput();  // Stop if same button is clicked
    } else {
      speakText(text, index);  // Speak if different button is clicked
    }
  };

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage: Message = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    try {
      const response = await fetch("https://agriai-dzht.onrender.com/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: input }),
      });

      const data = await response.json();
      const answer = data?.answer?.trim() || "Sorry, I couldn't find an answer.";
      setMessages((prev) => [...prev, { sender: "bot", text: answer }]);
    } catch {
      setMessages((prev) => [...prev, { sender: "bot", text: "Error connecting to the AI server." }]);
    }
  };

  return (
    <div className="fixed bottom-0 right-0 z-50 p-4 sm:p-6 md:bottom-4 md:right-4">
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-green-600 hover:bg-green-700 text-white rounded-full p-3 shadow-lg transition-all duration-200 flex items-center gap-2"
        >
          <MessageCircle className="w-5 h-5" />
          <span className="hidden sm:inline text-sm font-medium">Chat with AgriGPT</span>
        </button>
      )}

      {isOpen && (
        <div className="fixed inset-0 sm:relative">
          <div className="absolute inset-0 bg-black/20 sm:hidden" onClick={() => setIsOpen(false)} />
          <div className="absolute bottom-0 right-0 left-0 sm:relative bg-white rounded-t-2xl sm:rounded-2xl shadow-xl w-full sm:w-[380px] h-[80vh] sm:h-[600px] flex flex-col">
            <div className="flex items-center justify-between px-4 py-3 bg-green-600 text-white rounded-t-2xl">
              <h3 className="font-semibold text-sm">AgriGPT Assistant</h3>
              <button onClick={() => setIsOpen(false)} className="hover:bg-green-700 rounded-full p-1 transition-colors">
                ✕
              </button>
            </div>

            <div className="flex-1 p-4 overflow-y-auto">
              {messages.map((msg, index) => (
                <div key={index} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"} mb-2`}>
                  <div className="relative max-w-[80%]">
                    <div className={`p-2 rounded-lg ${msg.sender === "user" ? "bg-green-500 text-white" : "bg-gray-100 text-gray-800"}`}>
                      {msg.text}
                    </div>
                    {msg.sender === "bot" && (
                      <button
                        className="absolute bottom-0 right-[-30px]"
                        onClick={() => handleVoiceOutput(msg.text, index)}
                      >
                        {activeVoiceIndex === index ? (
                          <StopCircle className="w-5 h-5 text-red-600" />
                        ) : (
                          <Volume2 className="w-5 h-5 text-green-600" />
                        )}
                      </button>
                    )}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            <div className="p-4 border-t flex items-center gap-2">
              <button
                onClick={handleVoiceInput}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                aria-label="Voice input"
              >
                <Mic className={`w-5 h-5 text-green-600 ${isListening ? "animate-pulse" : ""}`} />
              </button>
              <div className="flex-1 relative">
                <input
                  type="text"
                  placeholder="Type your message..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                  className="w-full px-4 py-2 text-sm border rounded-full focus:outline-none focus:ring-2 focus:ring-green-600 pr-10"
                />
                <button onClick={sendMessage} className="absolute right-1 top-1/2 -translate-y-1/2 p-1.5 hover:bg-gray-100 rounded-full transition-colors">
                  <Send className="w-4 h-4 text-green-600" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

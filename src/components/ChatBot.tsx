import React, { useState, useEffect, useRef } from "react";
import { MessageCircle, Mic, Send, Volume2, StopCircle } from "lucide-react";
import { franc } from "franc-min";

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
  const [speechSynthesisActive, setSpeechSynthesisActive] = useState<boolean>(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const chatContainerRef = useRef<HTMLDivElement | null>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const stopOutput = () => {
    if (speechSynthesis.speaking) {
      speechSynthesis.cancel();
      setSpeechSynthesisActive(false);
    }
  };

  // Detect language with improved support for Kannada
  const detectLanguage = (text: string) => {
    const langCode = franc(text);
    switch (langCode) {
      case "hin":
        return "hi-IN";  // Hindi
      case "kan":
        return "kn-IN";  // Kannada
      case "tam":
        return "ta-IN";  // Tamil
      case "tel":
        return "te-IN";  // Telugu
      default:
        return "en-US";   // Default to English
    }
  };

  // Enhanced voice input handling for Kannada
  const handleVoiceInput = () => {
    const SpeechRecognition =
      (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Voice recognition is not supported in this browser.");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = "kn-IN";  // Force Kannada for testing
    recognition.interimResults = false;

    setIsListening(true);
    recognition.start();

    recognition.onresult = (event: SpeechRecognitionEvent) => {
      const transcript = event.results[0][0].transcript;
      setInput(transcript);
    };

    recognition.onerror = (error) => {
      console.error("Recognition error:", error);
      setIsListening(false);
    };
    recognition.onend = () => setIsListening(false);
  };

  // Enhanced speech synthesis for Kannada
  const speakText = (text: string) => {
    if (speechSynthesis.speaking) speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = detectLanguage(text);  // Set language based on text
    utterance.voice = speechSynthesis.getVoices().find(voice => voice.lang === "kn-IN") || null;

    if (!utterance.voice) {
      console.warn("Kannada voice not found, using default.");
    }

    speechSynthesis.speak(utterance);
    setSpeechSynthesisActive(true);

    utterance.onend = () => setSpeechSynthesisActive(false);
  };

  const handleVoiceOutput = (text: string) => {
    speakText(text);
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

      if (!response.ok) throw new Error(`Server error: ${response.statusText}`);

      const data = await response.json();
      const answer = data?.answer?.trim() || "Sorry, I couldn't find an answer.";
      const botMessage: Message = { sender: "bot", text: answer };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      const botMessage: Message = {
        sender: "bot",
        text: "Error connecting to the AI server.",
      };
      setMessages((prev) => [...prev, botMessage]);
    }
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
            <button
              onClick={() => {
                setIsOpen(false);
                stopOutput();
              }}
              className="hover:bg-green-700 rounded-full p-1"
            >
              ✕
            </button>
          </div>

          <div ref={chatContainerRef} className="flex-1 p-4 overflow-y-auto">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"} mb-2 items-end`}
              >
                <div className="relative max-w-[80%]">
                  <div
                    className={`p-3 rounded-lg ${
                      msg.sender === "user"
                        ? "bg-green-500 text-white"
                        : "bg-blue-200 text-black"
                    }`}
                  >
                    {msg.text}
                  </div>
                  {msg.sender === "bot" && (
                    <button
                      className="absolute bottom-0 right-[-30px] text-green-600 hover:text-green-800"
                      onClick={() => handleVoiceOutput(msg.text)}
                    >
                      <Volume2 className="w-5 h-5" />
                    </button>
                  )}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-4 border-t flex items-center gap-2">
            <button onClick={handleVoiceInput} className="p-2 hover:bg-gray-100 rounded-full">
              <Mic className={`w-5 h-5 text-green-600 ${isListening ? "animate-pulse" : ""}`} />
            </button>
            <input
              type="text"
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              className="flex-1 border rounded-full px-4 py-2 focus:outline-none"
            />
            <button onClick={sendMessage} className="p-2 hover:bg-gray-100 rounded-full">
              <Send className="w-5 h-5 text-green-600" />
            </button>
            {speechSynthesisActive && (
              <button onClick={stopOutput} className="p-2 hover:bg-gray-100 rounded-full">
                <StopCircle className="w-5 h-5 text-red-600" />
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

import React, { useState, useEffect, useRef } from "react";
import { MessageCircle, Mic, Send, Volume2, StopCircle, X } from "lucide-react";
import { franc } from "franc-min";

interface Message {
  sender: "user" | "bot";
  text: string;
}

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: "bot",
      text: "🌿 Hello! I'm AgriGPT, your personal farming assistant. I can chat casually or answer any questions about agriculture, farming, weather, crops, soil, irrigation, fertilizers, pests, livestock, government schemes, or even about this platform. How can I help you today?",
    },
  ]);

  const [input, setInput] = useState("");
  const [isListening, setIsListening] = useState(false);
  const [activeVoiceIndex, setActiveVoiceIndex] = useState<number | null>(null);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const scrollToBottom = () =>
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  // Detect language for TTS
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

  // -------------------------
  // VOICE INPUT LOGIC
  // -------------------------
  const handleVoiceInput = () => {
    const SpeechRecognition =
      (window as any).SpeechRecognition ||
      (window as any).webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Voice recognition not supported in this browser.");
      return;
    }

    const recognition = new SpeechRecognition();

    // IMPORTANT: interimResults = true allows the user to see text AS they speak
    recognition.interimResults = true;
    recognition.continuous = false;
    recognition.lang = "en-US"; // Default to English, can be made dynamic

    setIsListening(true);
    recognition.start();

    recognition.onresult = (event: any) => {
      // Create a single string from the results so far
      const transcript = Array.from(event.results)
        .map((result: any) => result[0].transcript)
        .join("");

      // Update input state in real-time
      setInput(transcript);
    };

    recognition.onend = () => setIsListening(false);

    recognition.onerror = (event: any) => {
      console.error("Speech recognition error", event.error);
      setIsListening(false);
    };
  };

  // -------------------------
  // VOICE OUTPUT LOGIC
  // -------------------------
  const speakText = (text: string, index: number) => {
    if (speechSynthesis.speaking) speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = detectLanguage(text);
    // Attempt to find a matching voice for the detected language
    utterance.voice =
      speechSynthesis.getVoices().find((v) => v.lang === utterance.lang) ||
      null;

    setActiveVoiceIndex(index);

    document.getElementById(`message-${index}`)?.scrollIntoView({
      behavior: "smooth",
    });

    speechSynthesis.speak(utterance);

    utterance.onend = () => setActiveVoiceIndex(null);
    utterance.onerror = () => setActiveVoiceIndex(null);
  };

  const handleVoiceOutput = (text: string, index: number) => {
    if (activeVoiceIndex === index) {
      speechSynthesis.cancel();
      setActiveVoiceIndex(null);
    } else {
      speakText(text, index);
    }
  };

  // -------------------------
  // SEND MESSAGE (GEMINI API)
  // -------------------------
  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage: Message = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);

    const query = input.trim();
    setInput("");
    setIsTyping(true);

    try {
      const res = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${
          import.meta.env.VITE_GEMINI_API_KEY
        }`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [
              {
                role: "user",
                parts: [
                  {
                    text: `
You are AgriGPT, a professional agriculture AI assistant.

You may answer questions about:
✔ Crops, soil, fertilizers, pests, irrigation 
✔ Livestock, weather, organic farming 
✔ Farming economics, market trends 
✔ Government schemes 
✔ Information about this platform (AgriGPT, features, voice support, analytics, multilingual system, mission, etc.)

❌ Politely refuse questions unrelated to agriculture or the platform.

Use friendly, helpful language.

Conversation history:
${messages
  .map((m) => `${m.sender === "user" ? "User" : "Bot"}: ${m.text}`)
  .join("\n")}

User input: ${query}
                    `,
                  },
                ],
              },
            ],
          }),
        }
      );

      const data = await res.json();

      const answer =
        data?.candidates?.[0]?.content?.parts?.[0]?.text?.trim() ||
        "🌱 Sorry, I couldn’t find an answer. Please ask something related to agriculture.";

      setMessages((prev) => [...prev, { sender: "bot", text: answer }]);
    } catch (err) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: "⚠ Sorry! I’m having trouble connecting to the AI service. Please try again later.",
        },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed bottom-0 right-0 z-50 p-4 sm:p-6 font-sans">
      {/* Floating Open Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-green-600 hover:bg-green-700 text-white rounded-full p-3 shadow-lg flex items-center gap-2 transition-transform hover:scale-105"
        >
          <MessageCircle className="w-6 h-6" />
          <span className="hidden sm:inline text-sm font-medium">
            Chat with AgriGPT
          </span>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed inset-0 sm:relative z-50 flex items-end sm:items-auto justify-end">
          {/* Mobile Overlay */}
          <div
            className="absolute inset-0 bg-black/20 sm:hidden"
            onClick={() => setIsOpen(false)}
          />

          <div className="bg-white rounded-t-2xl sm:rounded-2xl shadow-2xl w-full sm:w-[380px] h-[85vh] sm:h-[600px] flex flex-col relative z-10 animate-in slide-in-from-bottom-5 duration-300">
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-green-600 text-white rounded-t-2xl shadow-md">
              <div className="flex items-center gap-2">
                <div className="bg-white/20 p-1.5 rounded-lg backdrop-blur-sm">
                  <MessageCircle className="w-4 h-4" />
                </div>
                <h3 className="font-semibold text-sm tracking-wide">
                  AgriGPT Assistant
                </h3>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="hover:bg-green-700/50 rounded-full p-1 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 p-4 overflow-y-auto bg-gray-50/80 space-y-4 scrollbar-thin scrollbar-thumb-gray-200">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  id={`message-${index}`}
                  className={`flex ${
                    msg.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`relative max-w-[85%] ${
                      msg.sender === "user" ? "text-right" : "text-left"
                    }`}
                  >
                    <div
                      className={`px-4 py-3 rounded-2xl text-sm leading-relaxed shadow-sm ${
                        msg.sender === "user"
                          ? "bg-green-600 text-white rounded-tr-none"
                          : "bg-white border border-gray-100 text-gray-800 rounded-tl-none"
                      }`}
                    >
                      {msg.text}
                    </div>

                    {/* TTS Button (Only for Bot) */}
                    {msg.sender === "bot" && (
                      <button
                        className="absolute -right-8 bottom-0 p-1.5 hover:bg-gray-100 rounded-full transition-colors"
                        onClick={() => handleVoiceOutput(msg.text, index)}
                        title="Read aloud"
                      >
                        {activeVoiceIndex === index ? (
                          <StopCircle className="w-4 h-4 text-red-500 animate-pulse" />
                        ) : (
                          <Volume2 className="w-4 h-4 text-gray-400 hover:text-green-600" />
                        )}
                      </button>
                    )}
                  </div>
                </div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <div className="flex items-center gap-2 text-gray-400 text-xs ml-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-bounce" />
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-bounce [animation-delay:-.3s]" />
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-bounce [animation-delay:-.5s]" />
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-3 border-t bg-white rounded-b-2xl">
              <div
                className={`flex items-center gap-2 p-1.5 border rounded-full transition-all duration-300 ${
                  isListening
                    ? "border-green-500 ring-2 ring-green-100 shadow-lg"
                    : "border-gray-200 focus-within:border-green-300 focus-within:ring-2 focus-within:ring-green-50"
                }`}
              >
                {/* Voice Button with Animation */}
                <button
                  onClick={handleVoiceInput}
                  className={`relative p-2 rounded-full transition-all duration-300 group ${
                    isListening
                      ? "bg-red-50 text-red-500"
                      : "hover:bg-gray-100 text-gray-500"
                  }`}
                  title="Speak"
                >
                  {isListening && (
                    <span className="absolute inset-0 rounded-full bg-red-400 opacity-20 animate-ping" />
                  )}
                  <Mic
                    className={`w-5 h-5 ${
                      isListening
                        ? "animate-pulse"
                        : "group-hover:text-green-600"
                    }`}
                  />
                </button>

                <input
                  type="text"
                  placeholder={isListening ? "Listening..." : "Ask AgriGPT..."}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                  className="flex-1 bg-transparent text-sm focus:outline-none px-2 py-1 text-gray-700 placeholder:text-gray-400"
                />

                <button
                  onClick={sendMessage}
                  disabled={!input.trim()}
                  className={`p-2 rounded-full transition-all duration-200 ${
                    input.trim()
                      ? "bg-green-600 text-white hover:bg-green-700 shadow-md transform hover:scale-105 active:scale-95"
                      : "bg-gray-100 text-gray-300 cursor-not-allowed"
                  }`}
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>

              <div className="text-center mt-2">
                <span className="text-[10px] text-gray-400 font-medium">
                  Powered by Gemini AI
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

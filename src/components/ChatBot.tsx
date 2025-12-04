import React, { useState, useEffect, useRef } from "react";
import {
  MessageCircle,
  Mic,
  Send,
  Volume2,
  StopCircle,
  X,
  Globe,
  ChevronDown,
} from "lucide-react";

interface Message {
  sender: "user" | "bot";
  text: string;
}

const LANGUAGES = [
  { code: "en-US", name: "English", label: "English" },
  { code: "hi-IN", name: "Hindi", label: "हिंदी" },
  { code: "kn-IN", name: "Kannada", label: "ಕನ್ನಡ" },
  { code: "ta-IN", name: "Tamil", label: "தமிழ்" },
  { code: "te-IN", name: "Telugu", label: "తెలుగు" },
  { code: "mr-IN", name: "Marathi", label: "मराठी" },
  { code: "gu-IN", name: "Gujarati", label: "ગુજરાતી" },
  { code: "bn-IN", name: "Bengali", label: "বাংলা" },
  { code: "ml-IN", name: "Malayalam", label: "മലയാളം" },
  { code: "pa-IN", name: "Punjabi", label: "ਪੰਜਾਬੀ" },
];

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: "bot",
      text: "🌿 Hello! I'm AgriGPT. I can speak multiple languages. Select your language from the top menu and ask me anything about farming!",
    },
  ]);

  const [input, setInput] = useState("");
  const [isListening, setIsListening] = useState(false);
  const [activeVoiceIndex, setActiveVoiceIndex] = useState<number | null>(null);
  const [isTyping, setIsTyping] = useState(false);
  const [selectedLang, setSelectedLang] = useState(LANGUAGES[0]); // Default English
  const [showLangMenu, setShowLangMenu] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const scrollToBottom = () =>
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  // Helper: Simple regex-based script detection to replace 'franc'
  const detectScriptLang = (text: string) => {
    if (/[\u0900-\u097F]/.test(text)) return "hi-IN"; // Devanagari (Hindi/Marathi)
    if (/[\u0980-\u09FF]/.test(text)) return "bn-IN"; // Bengali
    if (/[\u0A80-\u0AFF]/.test(text)) return "gu-IN"; // Gujarati
    if (/[\u0B80-\u0BFF]/.test(text)) return "ta-IN"; // Tamil
    if (/[\u0C00-\u0C7F]/.test(text)) return "te-IN"; // Telugu
    if (/[\u0C80-\u0CFF]/.test(text)) return "kn-IN"; // Kannada
    if (/[\u0D00-\u0D7F]/.test(text)) return "ml-IN"; // Malayalam
    return null;
  };

  // Detect language code for TTS
  const getTTSLang = (text: string) => {
    // 1. Try to detect script
    const detected = detectScriptLang(text);

    // 2. Special handling for Marathi vs Hindi (both share Devanagari)
    if (detected === "hi-IN" && selectedLang.code === "mr-IN") {
      return "mr-IN";
    }

    // 3. If detected, return it. Otherwise fallback to UI selection or English
    return detected || selectedLang.code || "en-US";
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

    recognition.interimResults = true;
    recognition.continuous = false;

    // CRITICAL: Set the language to what the user selected
    // This tells the browser to listen for this specific language
    recognition.lang = selectedLang.code;

    setIsListening(true);
    recognition.start();

    recognition.onresult = (event: any) => {
      const transcript = Array.from(event.results)
        .map((result: any) => result[0].transcript)
        .join("");
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

    // Determine language: strictly try to match the text content
    const langCode = getTTSLang(text);
    utterance.lang = langCode;

    // Try to get a native voice for that language
    const voices = speechSynthesis.getVoices();
    // Priority: Exact match -> Parent language match (e.g., hi-IN matches hi)
    const preferredVoice =
      voices.find((v) => v.lang === langCode) ||
      voices.find((v) => v.lang.startsWith(langCode.split("-")[0]));

    if (preferredVoice) {
      utterance.voice = preferredVoice;
    }

    setActiveVoiceIndex(index);

    // Scroll to message being read
    document.getElementById(`message-${index}`)?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });

    utterance.onend = () => setActiveVoiceIndex(null);
    utterance.onerror = () => setActiveVoiceIndex(null);

    speechSynthesis.speak(utterance);
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
      // NOTE: Ensure you have your API key in .env as VITE_GEMINI_API_KEY
      const apiKey = import.meta.env.VITE_GEMINI_API_KEY || "";

      const res = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`,
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

USER CONTEXT:
- Selected Input Language: ${selectedLang.name} (${selectedLang.code})
- User Query: "${query}"

INSTRUCTIONS:
1. Respond in the language "${
                      selectedLang.name
                    }" unless the user explicitly asks for English.
2. If the user query is in a mix of languages (e.g., Hinglish), reply in the same mixed style or pure ${
                      selectedLang.name
                    } for clarity.
3. Keep answers concise, helpful, and friendly.

Domain Knowledge:
✔ Crops, soil, fertilizers, pests, irrigation 
✔ Livestock, weather, organic farming 
✔ Farming economics, market trends 
✔ Government schemes 
✔ Information about this platform

Context History:
${messages
  .slice(-5)
  .map((m) => `${m.sender}: ${m.text}`)
  .join("\n")}
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
        "🌱 I apologize, but I am currently unable to process that request.";

      setMessages((prev) => [...prev, { sender: "bot", text: answer }]);
    } catch (err) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: "⚠ Network Error. Please check your connection.",
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
          <span className="hidden sm:inline text-sm font-medium">AgriGPT</span>
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
            <div className="flex flex-col bg-green-600 text-white rounded-t-2xl shadow-md transition-all duration-300">
              <div className="flex items-center justify-between px-4 py-3">
                <div className="flex items-center gap-2">
                  <div className="bg-white/20 p-1.5 rounded-lg backdrop-blur-sm">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <h3 className="font-semibold text-sm tracking-wide">
                    AgriGPT
                  </h3>
                </div>
                <div className="flex items-center gap-2">
                  {/* Language Selector Toggle */}
                  <button
                    onClick={() => setShowLangMenu(!showLangMenu)}
                    className="flex items-center gap-1 bg-green-700/50 hover:bg-green-700 px-2 py-1 rounded text-xs transition-colors border border-green-500/30"
                    title="Change Language"
                  >
                    <Globe className="w-3 h-3" />
                    <span>{selectedLang.label}</span>
                    <ChevronDown
                      className={`w-3 h-3 transition-transform ${
                        showLangMenu ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="hover:bg-green-700/50 rounded-full p-1 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Language Menu Dropdown */}
              {showLangMenu && (
                <div className="px-4 pb-3 grid grid-cols-3 gap-2 animate-in fade-in slide-in-from-top-2">
                  {LANGUAGES.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setSelectedLang(lang);
                        setShowLangMenu(false);
                      }}
                      className={`text-[11px] py-1.5 rounded border text-center transition-all ${
                        selectedLang.code === lang.code
                          ? "bg-white text-green-700 border-white font-bold shadow-sm"
                          : "border-green-500/30 text-green-100 hover:bg-green-700 hover:border-green-400"
                      }`}
                    >
                      {lang.label}
                    </button>
                  ))}
                </div>
              )}
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
                  title={
                    isListening
                      ? `Listening in ${selectedLang.name}...`
                      : `Tap to speak in ${selectedLang.name}`
                  }
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
                  placeholder={
                    isListening
                      ? `Listening (${selectedLang.name})...`
                      : "Ask anything..."
                  }
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

              <div className="flex justify-between items-center mt-2 px-1">
                <span className="text-[10px] text-gray-400 font-medium flex items-center gap-1">
                  <Globe className="w-3 h-3" />
                  {selectedLang.name} Mode Active
                </span>
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

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export function FAQ() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 sm:mb-8">Frequently Asked Questions</h1>
      
      <div className="space-y-4">
        {faqData.map((category, index) => (
          <div key={index} className="space-y-3 sm:space-y-4">
            <h2 className="text-lg sm:text-xl font-semibold text-green-700 mt-4 sm:mt-6 mb-2 sm:mb-3">
              {category.category}
            </h2>
            {category.questions.map((faq, faqIndex) => (
              <FAQItem key={faqIndex} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border rounded-lg">
      <button
        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-left flex justify-between items-center hover:bg-gray-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-medium text-gray-900 text-sm sm:text-base pr-2">{question}</span>
        {isOpen ? (
          <ChevronUp className="w-4 h-4 text-gray-500 flex-shrink-0" />
        ) : (
          <ChevronDown className="w-4 h-4 text-gray-500 flex-shrink-0" />
        )}
      </button>
      {isOpen && (
        <div className="px-3 sm:px-4 py-2.5 sm:py-3 border-t">
          <p className="text-gray-600 text-sm sm:text-base">{answer}</p>
        </div>
      )}
    </div>
  );
}

const faqData = [
  {
    category: "General Questions",
    questions: [
      {
        question: "What is AgriGPT?",
        answer: "AgriGPT is an AI-powered agricultural assistant that provides farmers with real-time support and farming insights using Google's Gemini AI technology. It offers personalized recommendations and access to comprehensive agricultural knowledge."
      },
      {
        question: "What is Smart Farming?",
        answer: "Smart Farming is the application of modern information and communication technologies (ICT) to agriculture. It involves using technologies like AI, IoT sensors, drones, and data analytics to optimize farming operations, improve crop yields, reduce resource waste, and make more informed decisions. This includes automated irrigation systems, precision agriculture, real-time monitoring of crop health, and predictive analytics for weather and market conditions."
      },
      {
        question: "Is AgriGPT available in multiple languages?",
        answer: "Yes, AgriGPT supports multiple languages to make agricultural knowledge accessible to farmers worldwide. The platform currently supports English, Hindi, Spanish, French, and Mandarin."
      },
      {
        question: "How accurate is the AI assistant?",
        answer: "AgriGPT uses Google's advanced Gemini AI technology and is trained on verified agricultural data. While highly accurate, we recommend using it as a supplementary tool alongside traditional farming knowledge and expert advice."
      }
    ]
  },
  {
    category: "Technical Support",
    questions: [
      {
        question: "How do I use the voice recognition feature?",
        answer: "Click the microphone icon in the chat interface to activate voice recognition. Speak clearly, and the AI will process your query and respond both in text and voice format."
      },
      {
        question: "Can I access AgriGPT offline?",
        answer: "Currently, AgriGPT requires an internet connection for real-time AI processing and access to up-to-date agricultural information."
      }
    ]
  },
  {
    category: "Agricultural Support",
    questions: [
      {
        question: "How can I get information about government schemes?",
        answer: "You can find information about government schemes in the dedicated section on our homepage, or ask our AI assistant about specific schemes. All information is regularly updated and verified."
      },
      {
        question: "Does AgriGPT provide weather forecasts?",
        answer: "Yes, AgriGPT integrates with weather services to provide accurate forecasts and agricultural weather advisories for better crop planning."
      }
    ]
  }
];
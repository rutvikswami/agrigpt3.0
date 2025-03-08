import { Bot, Globe2, Users2 } from 'lucide-react';

export function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
      {/* Hero Section */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-gray-900">About AgriGPT</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          AgriGPT is an AI-powered agricultural platform designed to revolutionize farming through intelligent insights and real-time assistance using advanced language models.
        </p>
      </section>

      {/* Key Features */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center space-y-4">
          <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
            <Bot className="w-8 h-8 text-green-600" />
          </div>
          <h3 className="text-xl font-semibold">AI-Powered Assistant</h3>
          <p className="text-gray-600">
            Our advanced AI chatbot provides instant, accurate responses to your farming queries, powered by Google's Gemini technology.
          </p>
        </div>
        <div className="text-center space-y-4">
          <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
            <Globe2 className="w-8 h-8 text-green-600" />
          </div>
          <h3 className="text-xl font-semibold">Multilingual Support</h3>
          <p className="text-gray-600">
            Break language barriers with support for multiple languages, making agricultural knowledge accessible to all.
          </p>
        </div>
        <div className="text-center space-y-4">
          <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
            <Users2 className="w-8 h-8 text-green-600" />
          </div>
          <h3 className="text-xl font-semibold">Expert Knowledge</h3>
          <p className="text-gray-600">
            Access verified agricultural information and expert insights to make informed farming decisions.
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="bg-green-50 rounded-2xl p-8 md:p-12">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
          <p className="text-lg text-gray-700">
            To empower farmers worldwide with cutting-edge AI technology and comprehensive agricultural knowledge, promoting sustainable farming practices and improving agricultural productivity.
          </p>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-center">Powered By</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {technologies.map((tech, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="font-semibold text-lg mb-2">{tech.name}</h3>
              <p className="text-gray-600">{tech.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

const technologies = [
  {
    name: "Google Gemini",
    description: "Advanced language model for accurate and contextual responses"
  },
  {
    name: "Voice Recognition",
    description: "Natural voice interaction for hands-free operation"
  },
  {
    name: "Real-time Analytics",
    description: "Up-to-date insights and recommendations"
  },
  {
    name: "Smart Algorithms",
    description: "Intelligent data processing for precise agricultural insights"
  }
];
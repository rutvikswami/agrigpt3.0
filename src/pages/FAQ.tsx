import { useState } from 'react';
import { ChevronDown, ChevronUp, Phone, MessageCircle, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function FAQ() {
  const { language } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      questionEn: "What is AgriGPT and how can it help me?",
      questionHi: "AgriGPT क्या है और यह मेरी कैसे मदद कर सकता है?",
      answerEn: "AgriGPT is a free AI assistant designed specifically for Indian farmers. It helps you with farming advice, weather information, crop guidance, pest control, government schemes, and market prices. You can ask questions in Hindi, Tamil, Telugu, and other Indian languages.",
      answerHi: "AgriGPT भारतीय किसानों के लिए बनाया गया एक मुफ्त AI सहायक है। यह खेती की सलाह, मौसम की जानकारी, फसल मार्गदर्शन, कीट नियंत्रण, सरकारी योजनाओं और बाजार भावों में मदद करता है। आप हिंदी, तमिल, तेलुगु और अन्य भारतीय भाषाओं में सवाल पूछ सकते हैं।"
    },
    {
      questionEn: "Is AgriGPT really free? Are there any hidden charges?",
      questionHi: "क्या AgriGPT वाकई मुफ्त है? कोई छुपी हुई फीस तो नहीं?",
      answerEn: "Yes, AgriGPT is completely free for all farmers. There are no hidden charges, no subscription fees, and no premium plans. You only need internet connection on your mobile phone. Our mission is to help farmers, not make money from them.",
      answerHi: "जी हाँ, AgriGPT सभी किसानों के लिए बिल्कुल मुफ्त है। कोई छुपी हुई फीस नहीं, कोई सब्सक्रिप्शन फीस नहीं, और कोई प्रीमियम प्लान नहीं। आपको बस अपने मोबाइल फोन पर इंटरनेट कनेक्शन चाहिए। हमारा मिशन किसानों की मदद करना है, उनसे पैसा बनाना नहीं।"
    },
    {
      questionEn: "How do I ask questions to AgriGPT?",
      questionHi: "मैं AgriGPT से सवाल कैसे पूछूं?",
      answerEn: "It's very easy! Click the green chat button at the bottom right of your screen. You can type your question or use the microphone button to speak. Ask anything like 'How to grow tomatoes?' or 'What fertilizer for wheat?' AgriGPT understands farming language.",
      answerHi: "बहुत आसान है! अपने स्क्रीन के नीचे दाएं कोने में हरे रंग के चैट बटन पर क्लिक करें। आप अपना सवाल टाइप कर सकते हैं या माइक बटन दबाकर बोल सकते हैं। कुछ भी पूछें जैसे 'टमाटर कैसे उगाएं?' या 'गेहूं के लिए कौन सा खाद?' AgriGPT खेती की भाषा समझता है।"
    },
    {
      questionEn: "Can I use voice to talk to AgriGPT?",
      questionHi: "क्या मैं AgriGPT से आवाज में बात कर सकता हूं?",
      answerEn: "Yes! AgriGPT supports voice input in multiple Indian languages. Click the microphone button in the chat and speak your question clearly. This is especially helpful if you're not comfortable with typing.",
      answerHi: "हाँ! AgriGPT कई भारतीय भाषाओं में आवाज इनपुट को सपोर्ट करता है। चैट में माइक बटन दबाएं और अपना सवाल साफ़-साफ़ बोलें। यह उन लोगों के लिए विशेष रूप से उपयोगी है जो टाइपिंग में सहज नहीं हैं।"
    },
    {
      questionEn: "Which crops does AgriGPT know about?",
      questionHi: "AgriGPT किन फसलों के बारे में जानता है?",
      answerEn: "AgriGPT knows about all major Indian crops including rice, wheat, maize, cotton, sugarcane, tomatoes, potatoes, onions, chilies, pulses (dal), and many more vegetables and fruits. It also knows about regional crops specific to different states.",
      answerHi: "AgriGPT सभी प्रमुख भारतीय फसलों के बारे में जानता है जिसमें धान, गेहूं, मक्का, कपास, गन्ना, टमाटर, आलू, प्याज, मिर्च, दालें, और कई अन्य सब्जियां और फल शामिल हैं। यह विभिन्न राज्यों की क्षेत्रीय फसलों के बारे में भी जानता है।"
    },
    {
      questionEn: "How accurate is the weather information?",
      questionHi: "मौसम की जानकारी कितनी सटीक है?",
      answerEn: "AgriGPT provides reliable weather forecasts specifically useful for farming decisions. It tells you about rainfall, temperature, humidity, and wind patterns. However, always cross-check with local sources and your own observation for critical farming decisions.",
      answerHi: "AgriGPT खेती के फैसलों के लिए विशेष रूप से उपयोगी मौसम पूर्वानुमान प्रदान करता है। यह आपको बारिश, तापमान, नमी, और हवा के पैटर्न के बारे में बताता है। हालांकि, महत्वपूर्ण खेती के फैसलों के लिए हमेशा स्थानीय स्रोतों और अपने अवलोकन से दोबारा जांच करें।"
    },
    {
      questionEn: "Can AgriGPT help with government schemes and subsidies?",
      questionHi: "क्या AgriGPT सरकारी योजनाओं और सब्सिडी में मदद कर सकता है?",
      answerEn: "Yes! AgriGPT provides information about PM-Kisan, crop insurance, fertilizer subsidies, and other government schemes. It also gives you direct links to official websites and helpline numbers like Kisan Call Center (1800-180-1551).",
      answerHi: "हाँ! AgriGPT PM-किसान, फसल बीमा, उर्वरक सब्सिडी, और अन्य सरकारी योजनाओं की जानकारी प्रदान करता है। यह आपको आधिकारिक वेबसाइटों के डायरेक्ट लिंक और किसान कॉल सेंटर (1800-180-1551) जैसे हेल्पलाइन नंबर भी देता है।"
    },
    {
      questionEn: "What if AgriGPT doesn't understand my question?",
      questionHi: "अगर AgriGPT मेरा सवाल नहीं समझता तो क्या करूं?",
      answerEn: "Try asking your question in simpler words or different way. You can also call the Kisan Call Center at 1800-180-1551 for free expert advice, or contact your local agriculture officer or Krishi Vigyan Kendra.",
      answerHi: "अपना सवाल आसान शब्दों में या अलग तरीके से पूछने की कोशिश करें। आप मुफ्त विशेषज्ञ सलाह के लिए 1800-180-1551 पर किसान कॉल सेंटर पर भी कॉल कर सकते हैं, या अपने स्थानीय कृषि अधिकारी या कृषि विज्ञान केंद्र से संपर्क कर सकते हैं।"
    },
    {
      questionEn: "Can I use AgriGPT without internet?",
      questionHi: "क्या मैं बिना इंटरनेट के AgriGPT इस्तेमाल कर सकता हूं?",
      answerEn: "No, AgriGPT needs internet connection to work because it connects to AI servers for answers. However, even slow 2G/3G connection works fine. For offline help, you can call the toll-free Kisan Call Center.",
      answerHi: "नहीं, AgriGPT को काम करने के लिए इंटरनेट कनेक्शन चाहिए क्योंकि यह जवाबों के लिए AI सर्वर से जुड़ता है। हालांकि, धीमा 2G/3G कनेक्शन भी ठीक काम करता है। ऑफलाइन मदद के लिए, आप टॉल-फ्री किसान कॉल सेंटर पर कॉल कर सकते हैं।"
    },
    {
      questionEn: "Is my personal information safe with AgriGPT?",
      questionHi: "क्या AgriGPT के साथ मेरी व्यक्तिगत जानकारी सुरक्षित है?",
      answerEn: "Yes, your privacy is safe. AgriGPT doesn't store your personal information or location permanently. Your conversations are used only to provide better farming advice. No phone numbers, addresses, or personal details are saved.",
      answerHi: "हाँ, आपकी गोपनीयता सुरक्षित है। AgriGPT आपकी व्यक्तिगत जानकारी या स्थान को स्थायी रूप से संग्रहीत नहीं करता। आपकी बातचीत का उपयोग केवल बेहतर खेती सलाह प्रदान करने के लिए किया जाता है। कोई फोन नंबर, पता, या व्यक्तिगत विवरण सेव नहीं किया जाता।"
    }
  ];

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-6">❓</div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {language === 'hi' ? 'अक्सर पूछे जाने वाले सवाल' : 'Frequently Asked Questions'}
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {language === 'hi' 
              ? 'AgriGPT के बारे में आपके सभी सवालों के जवाब यहाँ मिलेंगे'
              : 'Find answers to all your questions about AgriGPT here'
            }
          </p>
        </div>

        {/* Quick Help Section */}
        <div className="bg-green-50 rounded-lg p-6 mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            {language === 'hi' ? 'तुरंत मदद चाहिए?' : 'Need Immediate Help?'}
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            <button 
              onClick={() => {
                const chatButton = document.querySelector('[data-chatbot-trigger]') as HTMLButtonElement;
                chatButton?.click();
              }}
              className="flex items-center gap-3 p-3 bg-white rounded-lg hover:bg-gray-50 transition-colors"
            >
              <MessageCircle className="w-5 h-5 text-green-600" />
              <div className="text-left">
                <div className="font-medium text-gray-900">
                  {language === 'hi' ? 'AI से बात करें' : 'Chat with AI'}
                </div>
                <div className="text-sm text-gray-600">
                  {language === 'hi' ? 'तुरंत जवाब पाएं' : 'Get instant answers'}
                </div>
              </div>
            </button>
            
            <a 
              href="tel:18001801551"
              className="flex items-center gap-3 p-3 bg-white rounded-lg hover:bg-gray-50 transition-colors"
            >
              <Phone className="w-5 h-5 text-blue-600" />
              <div className="text-left">
                <div className="font-medium text-gray-900">
                  {language === 'hi' ? 'फोन करें' : 'Call Helpline'}
                </div>
                <div className="text-sm text-gray-600">1800-180-1551</div>
              </div>
            </a>
            
            <a 
              href="/about"
              className="flex items-center gap-3 p-3 bg-white rounded-lg hover:bg-gray-50 transition-colors"
            >
              <Globe className="w-5 h-5 text-purple-600" />
              <div className="text-left">
                <div className="font-medium text-gray-900">
                  {language === 'hi' ? 'और जानें' : 'Learn More'}
                </div>
                <div className="text-sm text-gray-600">
                  {language === 'hi' ? 'AgriGPT के बारे में' : 'About AgriGPT'}
                </div>
              </div>
            </a>
          </div>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-lg font-medium text-gray-900 pr-4">
                  {language === 'hi' ? faq.questionHi : faq.questionEn}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-gray-500 shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500 shrink-0" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600 text-base leading-relaxed">
                    {language === 'hi' ? faq.answerHi : faq.answerEn}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Still Have Questions */}
        <div className="bg-green-600 text-white rounded-lg p-8 text-center mt-12">
          <h2 className="text-2xl font-bold mb-4">
            {language === 'hi' ? 'अभी भी कोई सवाल है?' : 'Still Have Questions?'}
          </h2>
          <p className="text-lg mb-6">
            {language === 'hi'
              ? 'हम यहाँ आपकी मदद के लिए हैं। AgriGPT AI से बात करें या हमसे संपर्क करें।'
              : 'We\'re here to help you. Chat with AgriGPT AI or contact us directly.'
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => {
                const chatButton = document.querySelector('[data-chatbot-trigger]') as HTMLButtonElement;
                chatButton?.click();
              }}
              className="bg-white text-green-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              {language === 'hi' ? 'AI से बात करें' : 'Chat with AI'}
            </button>
            <a 
              href="tel:18001801551"
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors"
            >
              📞 {language === 'hi' ? 'कॉल करें' : 'Call'} 1800-180-1551
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
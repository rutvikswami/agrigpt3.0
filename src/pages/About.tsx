import { Users, Target, Award, Heart, Sprout, Globe, Phone, FileText, Tractor } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { t } from '../i18n/translations';

export function About() {
  const { language } = useLanguage();
  
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="text-6xl mb-6">🌾</div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {language === 'hi' ? 'AgriGPT के बारे में' : 'About AgriGPT'}
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {language === 'hi' 
              ? 'भारतीय किसानों के लिए AI-संचालित कृषि सहायक - आपकी भाषा में, आपके खेत के लिए'
              : 'AI-powered farming assistant for Indian farmers - In your language, for your farm'
            }
          </p>
        </div>

        {/* Mission Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              {language === 'hi' ? 'हमारा मिशन' : 'Our Mission'}
            </h2>
            <p className="text-gray-600 mb-6 text-lg">
              {language === 'hi' 
                ? 'AgriGPT का मकसद है भारत के हर किसान को आधुनिक तकनीक की मदद से बेहतर खेती करने में सहायता करना। हम चाहते हैं कि हर किसान को अपनी भाषा में सही सलाह मिले।'
                : 'AgriGPT aims to help every Indian farmer achieve better yields through modern technology. We want every farmer to get the right advice in their own language.'
              }
            </p>
            <p className="text-gray-600 text-lg">
              {language === 'hi'
                ? 'हमारा AI सिस्टम आपको मौसम, फसल, मिट्टी, कीट नियंत्रण, और सरकारी योजनाओं के बारे में तुरंत जानकारी देता है।'
                : 'Our AI system provides instant information about weather, crops, soil, pest control, and government schemes.'
              }
            </p>
          </div>
          <div className="bg-green-100 rounded-lg p-8 text-center">
            <Heart className="w-16 h-16 text-green-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {language === 'hi' ? 'किसानों के लिए बना' : 'Made for Farmers'}
            </h3>
            <p className="text-gray-600 text-lg">
              {language === 'hi'
                ? 'भारतीय खेती की समस्याओं को समझकर बनाया गया'
                : 'Built understanding Indian farming challenges'
              }
            </p>
          </div>
        </div>

        {/* What We Do */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-12">
          <div className="text-center mb-8">
            <Tractor className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900">
              {language === 'hi' ? 'हम क्या करते हैं' : 'What We Do'}
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-4">
              <Phone className="w-8 h-8 text-green-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">
                {language === 'hi' ? 'AI सलाहकार' : 'AI Advisor'}
              </h3>
              <p className="text-sm text-gray-600">
                {language === 'hi' 
                  ? 'आपके सवालों का तुरंत जवाब। आवाज या टाइप करके पूछें - हिंदी, तमिल, तेलुगु में'
                  : 'Instant answers to your questions. Ask by voice or text in Hindi, Tamil, Telugu'
                }
              </p>
            </div>
            <div className="text-center p-4">
              <Globe className="w-8 h-8 text-green-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">
                {language === 'hi' ? 'मौसम अपडेट' : 'Weather Updates'}
              </h3>
              <p className="text-sm text-gray-600">
                {language === 'hi'
                  ? 'आपके खेत के लिए सटीक मौसम की जानकारी। कब सिंचाई करें, कब न करें'
                  : 'Accurate weather information for your farm. When to irrigate, when not to'
                }
              </p>
            </div>
            <div className="text-center p-4">
              <FileText className="w-8 h-8 text-green-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">
                {language === 'hi' ? 'सरकारी योजनाएं' : 'Govt Schemes'}
              </h3>
              <p className="text-sm text-gray-600">
                {language === 'hi'
                  ? 'PM-किसान, फसल बीमा, सब्सिडी की जानकारी। सीधे लिंक और फोन नंबर'
                  : 'PM-Kisan, crop insurance, subsidy info. Direct links and phone numbers'
                }
              </p>
            </div>
          </div>
        </div>

        {/* Why Choose AgriGPT */}
        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
            {language === 'hi' ? 'AgriGPT क्यों चुनें?' : 'Why Choose AgriGPT?'}
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start gap-4">
              <div className="bg-green-500 rounded-full p-2">
                <Sprout className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">
                  {language === 'hi' ? 'सरल उपयोग' : 'Easy to Use'}
                </h3>
                <p className="text-sm text-gray-600">
                  {language === 'hi'
                    ? 'मोबाइल फोन पर आसान। बड़े बटन, साफ लिखावट, आवाज की सुविधा'
                    : 'Easy on mobile phone. Large buttons, clear text, voice support'
                  }
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-green-500 rounded-full p-2">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">
                  {language === 'hi' ? 'मुफ्त सेवा' : 'Free Service'}
                </h3>
                <p className="text-sm text-gray-600">
                  {language === 'hi'
                    ? 'कोई पैसा नहीं लगता। सिर्फ इंटरनेट चाहिए। किसानों के लिए बिल्कुल मुफ्त'
                    : 'No cost involved. Just need internet. Completely free for farmers'
                  }
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-green-500 rounded-full p-2">
                <Users className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">
                  {language === 'hi' ? 'भारतीय फसलें' : 'Indian Crops'}
                </h3>
                <p className="text-sm text-gray-600">
                  {language === 'hi'
                    ? 'धान, गेहूं, मक्का, दाल, सब्जी - सभी भारतीय फसलों की जानकारी'
                    : 'Rice, wheat, maize, pulses, vegetables - all Indian crop information'
                  }
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-green-500 rounded-full p-2">
                <Target className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">
                  {language === 'hi' ? '24/7 उपलब्ध' : '24/7 Available'}
                </h3>
                <p className="text-sm text-gray-600">
                  {language === 'hi'
                    ? 'दिन-रात कभी भी सवाल पूछें। तुरंत जवाब मिलता है'
                    : 'Ask questions anytime day or night. Get instant answers'
                  }
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* How to Use */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
            {language === 'hi' ? 'कैसे इस्तेमाल करें' : 'How to Use'}
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">1</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                {language === 'hi' ? 'भाषा चुनें' : 'Choose Language'}
              </h3>
              <p className="text-sm text-gray-600">
                {language === 'hi'
                  ? 'ऊपर 🌐 बटन दबाकर अपनी भाषा चुनें'
                  : 'Click 🌐 button above to choose your language'
                }
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">2</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                {language === 'hi' ? 'सवाल पूछें' : 'Ask Questions'}
              </h3>
              <p className="text-sm text-gray-600">
                {language === 'hi'
                  ? 'AI चैटबॉट से खेती के बारे में कुछ भी पूछें'
                  : 'Ask AI chatbot anything about farming'
                }
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">3</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                {language === 'hi' ? 'सलाह पाएं' : 'Get Advice'}
              </h3>
              <p className="text-sm text-gray-600">
                {language === 'hi'
                  ? 'तुरंत अपनी भाषा में विशेषज्ञ सलाह मिलती है'
                  : 'Get instant expert advice in your language'
                }
              </p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-green-600 text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">
            {language === 'hi' ? 'मदद चाहिए?' : 'Need Help?'}
          </h2>
          <p className="text-lg mb-6">
            {language === 'hi'
              ? 'AgriGPT AI से बात करें या किसान कॉल सेंटर पर कॉल करें'
              : 'Chat with AgriGPT AI or call Kisan Call Center'
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/#chat"
              className="bg-white text-green-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              {language === 'hi' ? 'AI से बात करें' : 'Chat with AI'}
            </a>
            <a 
              href="tel:18001801551"
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors"
            >
              📞 1800-180-1551
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
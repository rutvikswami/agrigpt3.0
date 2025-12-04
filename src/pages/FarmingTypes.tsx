import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';
import { useState } from 'react';
import { farmingTypesData } from '../data/farmingTypes';
import { useLanguage } from '../contexts/LanguageContext';

export function FarmingTypes() {
  const { language } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');

  const filteredTypes = farmingTypesData.filter(type =>
    type.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    type.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <div className="text-center mb-8 sm:mb-12">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3">
          {language === 'hi' ? 'खेती के प्रकार' : 'Types of Farming'}
        </h1>
        <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
          {language === 'hi' 
            ? 'विभिन्न खेती के तरीकों को देखें और अपनी कृषि आवश्यकताओं के लिए सही तरीका खोजें'
            : 'Explore different farming methods and find the perfect approach for your agricultural needs'
          }
        </p>
        
        {/* Search Bar */}
        <div className="max-w-md mx-auto mt-4 sm:mt-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <input
              type="text"
              placeholder={language === 'hi' ? 'खेती के प्रकार खोजें...' : 'Search farming types...'}
              className="w-full pl-9 pr-4 py-2 text-sm border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {filteredTypes.map((type, index) => (
          <Link
            key={index}
            to={`/farming-types/${type.slug}`}
            className="group"
          >
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
              <div
                className="h-32 sm:h-40 bg-cover bg-center transform group-hover:scale-105 transition-transform duration-300"
                style={{ backgroundImage: `url(${type.image})` }}
              />
              <div className="p-4">
                <h3 className="text-base sm:text-lg font-semibold mb-2 group-hover:text-green-600 transition-colors">
                  {type.name}
                </h3>
                <p className="text-sm text-gray-600 line-clamp-2 mb-3">{type.description}</p>
                
                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="text-xs">
                    <span className="text-gray-500">Investment Level:</span>
                    <div className="font-medium text-gray-900">{type.investmentLevel}</div>
                  </div>
                  <div className="text-xs">
                    <span className="text-gray-500">Time to Market:</span>
                    <div className="font-medium text-gray-900">{type.timeToMarket}</div>
                  </div>
                </div>

                <div className="mt-3 text-green-600 text-sm font-medium group-hover:text-green-700">
                  {language === 'hi' ? 'और जानें →' : 'Learn more →'}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Help Section */}
      <div className="bg-blue-50 rounded-lg p-6 mt-12 text-center">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          {language === 'hi' ? 'कौन सी खेती आपके लिए सही है?' : 'Which Farming Method is Right for You?'}
        </h2>
        <p className="text-gray-700 mb-6">
          {language === 'hi'
            ? 'अगर आप confused हैं कि कौन सी खेती करें, तो AgriGPT AI से पूछें। यह आपकी जमीन, पानी, और budget के हिसाब से सलाह देगा।'
            : 'If you are confused about which farming method to choose, ask AgriGPT AI. It will advise based on your land, water, and budget.'
          }
        </p>
        <button 
          onClick={() => {
            const chatButton = document.querySelector('[data-chatbot-trigger]') as HTMLButtonElement;
            chatButton?.click();
          }}
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
        >
          {language === 'hi' ? 'AI से सलाह लें' : 'Get AI Advice'}
        </button>
      </div>
    </div>
  );
}
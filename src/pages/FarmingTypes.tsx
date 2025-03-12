import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';
import { useState } from 'react';
import { farmingTypesData } from '../data/farmingTypes';

export function FarmingTypes() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredTypes = farmingTypesData.filter(type =>
    type.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    type.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <div className="text-center mb-8 sm:mb-12">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3">Types of Farming</h1>
        <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
          Explore different farming methods and find the perfect approach for your agricultural needs
        </p>
        
        {/* Search Bar */}
        <div className="max-w-md mx-auto mt-4 sm:mt-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <input
              type="text"
              placeholder="Search farming types..."
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
                  Learn more →
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
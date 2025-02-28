import { Link } from 'react-router-dom';
import { farmingTypesData } from '../data/farmingTypes';

export function FarmingTypes() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Types of Farming</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Explore different farming methods and find the perfect approach for your agricultural needs.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {farmingTypesData.map((type, index) => (
          <Link key={index} to={`/farming-types/${type.slug}`} className="group">
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div
                className="h-48 bg-cover bg-center transform group-hover:scale-105 transition-transform duration-300"
                style={{ backgroundImage: `url(${type.image})` }}
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-green-600 transition-colors">
                  {type.name}
                </h3>
                <p className="text-gray-600 line-clamp-2">{type.description}</p>
                
                {/* Quick Stats */}
                <div className="mt-4 grid grid-cols-2 gap-4">
                  <div className="text-sm">
                    <span className="text-gray-500">Investment Level:</span>
                    <div className="font-medium text-gray-900">{type.investmentLevel}</div>
                  </div>
                  <div className="text-sm">
                    <span className="text-gray-500">Time to Market:</span>
                    <div className="font-medium text-gray-900">{type.timeToMarket}</div>
                  </div>
                </div>
                
                <div className="mt-4 text-green-600 text-sm font-medium group-hover:text-green-700">
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
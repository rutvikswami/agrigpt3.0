import { useParams, Link } from 'react-router-dom';
import { ChevronLeft, ArrowRight, Home, Sprout, DollarSign, Users } from 'lucide-react';
import { farmingTypesData } from '../data/farmingTypes';

export function FarmingTypeDetail() {
  const { type } = useParams();
  const farmingType = farmingTypesData.find(t => t.slug === type);

  if (!farmingType) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
        <div className="text-center">
          <h1 className="text-2xl sm:text-4xl font-bold text-gray-900">Farming Type Not Found</h1>
          <Link to="/farming-types" className="text-green-600 hover:text-green-700 mt-4 inline-block">
            ← Back to Farming Types
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div
        className="h-[250px] sm:h-[300px] md:h-[400px] bg-cover bg-center relative"
        style={{ backgroundImage: `url(${farmingType.image})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <div className="text-center text-white">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-4">{farmingType.name}</h1>
            <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto">{farmingType.description}</p>
          </div>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
        <div className="flex items-center space-x-2 text-xs sm:text-sm text-gray-600 overflow-x-auto whitespace-nowrap">
          <Link to="/" className="hover:text-green-600">
            <Home className="w-3 h-3 sm:w-4 sm:h-4" />
          </Link>
          <span>/</span>
          <Link to="/farming-types" className="hover:text-green-600">Types of Farming</Link>
          <span>/</span>
          <span className="text-gray-900">{farmingType.name}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8 sm:space-y-12">
            {/* Overview */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Overview</h2>
              <div className="prose max-w-none">
                {farmingType.overview.map((paragraph, index) => (
                  <p key={index} className="text-sm sm:text-base text-gray-600 mb-4">{paragraph}</p>
                ))}
              </div>
            </section>

            {/* Requirements */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Requirements</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {farmingType.requirements.map((req, index) => (
                  <div key={index} className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
                    <h3 className="font-semibold text-base sm:text-lg mb-2">{req.title}</h3>
                    <p className="text-sm sm:text-base text-gray-600">{req.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Marketing Strategies */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Marketing Strategies</h2>
              <div className="space-y-4 sm:space-y-6">
                {farmingType.marketing.map((strategy, index) => (
                  <div key={index} className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
                    <h3 className="font-semibold text-base sm:text-lg mb-2">{strategy.channel}</h3>
                    <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">{strategy.description}</p>
                    <ul className="list-disc list-inside text-sm sm:text-base text-gray-600 space-y-1">
                      {strategy.tips.map((tip, tipIndex) => (
                        <li key={tipIndex}>{tip}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6 sm:space-y-8">
            {/* Quick Stats */}
            <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-semibold mb-4">Quick Facts</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <DollarSign className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 mr-2" />
                  <div>
                    <div className="text-xs sm:text-sm text-gray-500">Investment Level</div>
                    <div className="text-sm sm:text-base font-medium">{farmingType.investmentLevel}</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Users className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 mr-2" />
                  <div>
                    <div className="text-xs sm:text-sm text-gray-500">Labor Requirements</div>
                    <div className="text-sm sm:text-base font-medium">{farmingType.laborRequirements}</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Sprout className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 mr-2" />
                  <div>
                    <div className="text-xs sm:text-sm text-gray-500">Time to Market</div>
                    <div className="text-sm sm:text-base font-medium">{farmingType.timeToMarket}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Government Schemes */}
            <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-semibold mb-4">Government Support</h3>
              <div className="space-y-3 sm:space-y-4">
                {farmingType.governmentSchemes.map((scheme, index) => (
                  <a
                    key={index}
                    href={scheme.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-3 sm:p-4 border rounded-lg hover:bg-green-50 transition-colors"
                  >
                    <div className="font-medium text-green-600 text-sm sm:text-base mb-1">{scheme.name}</div>
                    <p className="text-xs sm:text-sm text-gray-600">{scheme.description}</p>
                    <div className="text-green-600 text-xs sm:text-sm mt-2 flex items-center">
                      Learn more <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1" />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
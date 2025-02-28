import { useParams, Link } from 'react-router-dom';
import { ChevronLeft, ArrowRight, Home, Sprout, DollarSign, Users } from 'lucide-react';
import { farmingTypesData } from '../data/farmingTypes';

export function FarmingTypeDetail() {
  const { type } = useParams();
  const farmingType = farmingTypesData.find(t => t.slug === type);

  if (!farmingType) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900">Farming Type Not Found</h1>
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
        className="h-[400px] bg-cover bg-center relative"
        style={{ backgroundImage: `url(${farmingType.image})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">{farmingType.name}</h1>
            <p className="text-xl max-w-3xl mx-auto">{farmingType.description}</p>
          </div>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <Link to="/" className="hover:text-green-600">
            <Home className="w-4 h-4" />
          </Link>
          <span>/</span>
          <Link to="/farming-types" className="hover:text-green-600">Types of Farming</Link>
          <span>/</span>
          <span className="text-gray-900">{farmingType.name}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Overview */}
            <section>
              <h2 className="text-3xl font-bold mb-6">Overview</h2>
              <div className="prose max-w-none">
                {farmingType.overview.map((paragraph, index) => (
                  <p key={index} className="text-gray-600 mb-4">{paragraph}</p>
                ))}
              </div>
            </section>

            {/* Requirements */}
            <section>
              <h2 className="text-3xl font-bold mb-6">Requirements</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {farmingType.requirements.map((req, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="font-semibold text-lg mb-2">{req.title}</h3>
                    <p className="text-gray-600">{req.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Marketing Strategies */}
            <section>
              <h2 className="text-3xl font-bold mb-6">Marketing Strategies</h2>
              <div className="space-y-6">
                {farmingType.marketing.map((strategy, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="font-semibold text-lg mb-2">{strategy.channel}</h3>
                    <p className="text-gray-600 mb-4">{strategy.description}</p>
                    <ul className="list-disc list-inside text-gray-600">
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
          <div className="space-y-8">
            {/* Quick Stats */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4">Quick Facts</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <DollarSign className="w-5 h-5 text-green-600 mr-2" />
                  <div>
                    <div className="text-sm text-gray-500">Investment Level</div>
                    <div className="font-medium">{farmingType.investmentLevel}</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Users className="w-5 h-5 text-green-600 mr-2" />
                  <div>
                    <div className="text-sm text-gray-500">Labor Requirements</div>
                    <div className="font-medium">{farmingType.laborRequirements}</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Sprout className="w-5 h-5 text-green-600 mr-2" />
                  <div>
                    <div className="text-sm text-gray-500">Time to Market</div>
                    <div className="font-medium">{farmingType.timeToMarket}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Government Schemes */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4">Government Support</h3>
              <div className="space-y-4">
                {farmingType.governmentSchemes.map((scheme, index) => (
                  <a
                    key={index}
                    href={scheme.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-4 border rounded-lg hover:bg-green-50 transition-colors"
                  >
                    <div className="font-medium text-green-600 mb-1">{scheme.name}</div>
                    <p className="text-sm text-gray-600">{scheme.description}</p>
                    <div className="text-green-600 text-sm mt-2 flex items-center">
                      Learn more <ArrowRight className="w-4 h-4 ml-1" />
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
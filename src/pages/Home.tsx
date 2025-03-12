import { Plane as Plant, Droplets, Sun, Wind, Leaf, Wheat, ExternalLink } from 'lucide-react';

export function Home() {
  return (
    <div className="space-y-8 sm:space-y-12 pb-8 sm:pb-12">
      {/* Hero Section */}
      <section 
        className="relative h-[300px] sm:h-[400px] md:h-[500px] flex items-center justify-center px-4"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="text-center text-white space-y-3 sm:space-y-4">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold px-4">Welcome to AgriGPT</h1>
          <p className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto px-4">
            Your AI-powered farming assistant, providing comprehensive agricultural insights and real-time support
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-6 sm:mb-8">Smart Farming Solutions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          <FeatureCard
            icon={<Plant className="w-5 h-5 sm:w-6 sm:h-6" />}
            title="Crop Management"
            description="Get personalized recommendations for crop selection and management based on your local conditions."
            externalLink="https://www.fao.org/agriculture/crops/en/"
            externalLinkText="FAO Crop Resources"
          />
          <FeatureCard
            icon={<Droplets className="w-5 h-5 sm:w-6 sm:h-6" />}
            title="Irrigation Planning"
            description="Optimize your water usage with smart irrigation scheduling and monitoring."
            externalLink="https://www.nrcs.usda.gov/programs-initiatives/eqip-environmental-quality-incentives/eqip-irrigation-water-management"
            externalLinkText="USDA Irrigation Management"
          />
          <FeatureCard
            icon={<Sun className="w-5 h-5 sm:w-6 sm:h-6" />}
            title="Weather Insights"
            description="Access detailed weather forecasts and climate analysis for better planning."
            externalLink="https://www.accuweather.com/en/agriculture-weather"
            externalLinkText="AccuWeather Agriculture"
          />
          <FeatureCard
            icon={<Wind className="w-5 h-5 sm:w-6 sm:h-6" />}
            title="Pest Control"
            description="Identify and manage pests effectively with AI-powered detection and treatment suggestions."
            externalLink="https://www.epa.gov/safepestcontrol/integrated-pest-management-ipm-principles"
            externalLinkText="EPA Pest Management"
          />
          <FeatureCard
            icon={<Leaf className="w-5 h-5 sm:w-6 sm:h-6" />}
            title="Sustainable Practices"
            description="Learn about eco-friendly farming methods and sustainable agriculture techniques."
            externalLink="https://www.fao.org/sustainability/en/"
            externalLinkText="FAO Sustainability"
          />
          <FeatureCard
            icon={<Wheat className="w-5 h-5 sm:w-6 sm:h-6" />}
            title="Market Intelligence"
            description="Stay updated with market trends, prices, and demand forecasts for your crops."
            externalLink="https://www.fas.usda.gov/data"
            externalLinkText="USDA Market Data"
          />
        </div>
      </section>

      {/* Government Schemes Section */}
      <section className="bg-green-50 py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-6 sm:mb-8">Government Schemes</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {governmentSchemes.map((scheme, index) => (
              <SchemeCard key={index} {...scheme} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ 
  icon, 
  title, 
  description, 
  externalLink,
  externalLinkText
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string; 
  externalLink: string;
  externalLinkText: string;
}) {
  return (
    <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="text-green-600 mb-3">{icon}</div>
      <h3 className="text-base sm:text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm sm:text-base text-gray-600 mb-3">{description}</p>
      <div>
        <a 
          href={externalLink}
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-xs sm:text-sm"
        >
          {externalLinkText} <ExternalLink className="ml-1 w-3 h-3 sm:w-4 sm:h-4" />
        </a>
      </div>
    </div>
  );
}

function SchemeCard({ title, description, link }: { title: string; description: string; link: string }) {
  return (
    <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <h3 className="text-base sm:text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm sm:text-base text-gray-600 mb-3">{description}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-green-600 hover:text-green-700 font-medium text-xs sm:text-sm"
      >
        Learn More →
      </a>
    </div>
  );
}

const governmentSchemes = [
  {
    title: "PM-KISAN",
    description: "Direct income support of ₹6,000 per year to eligible farmer families.",
    link: "https://pmkisan.gov.in/"
  },
  {
    title: "Soil Health Card Scheme",
    description: "Provides information on soil health and recommendations for fertilizers.",
    link: "https://soilhealth.dac.gov.in/"
  },
  {
    title: "PM Fasal Bima Yojana",
    description: "Crop insurance scheme to protect farmers against crop failure.",
    link: "https://pmfby.gov.in/"
  }
];
import { Plane as Plant, Droplets, Sun, Wind, Leaf, Wheat, ExternalLink } from 'lucide-react';

export function Home() {
  return (
    <div className="space-y-16 pb-16">
      {/* Hero Section */}
      <section 
        className="relative h-[500px] flex items-center justify-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="text-center text-white space-y-4">
          <h1 className="text-5xl font-bold">Welcome to AgriGPT</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Your AI-powered farming assistant, providing comprehensive agricultural insights and real-time support
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Smart Farming Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Plant className="w-8 h-8" />}
            title="Crop Management"
            description="Get personalized recommendations for crop selection and management based on your local conditions."
            externalLink="https://www.fao.org/agriculture/crops/en/"
            externalLinkText="FAO Crop Resources"
          />
          <FeatureCard
            icon={<Droplets className="w-8 h-8" />}
            title="Irrigation Planning"
            description="Optimize your water usage with smart irrigation scheduling and monitoring."
            externalLink="https://www.nrcs.usda.gov/programs-initiatives/eqip-environmental-quality-incentives/eqip-irrigation-water-management"
            externalLinkText="USDA Irrigation Management"
          />
          <FeatureCard
            icon={<Sun className="w-8 h-8" />}
            title="Weather Insights"
            description="Access detailed weather forecasts and climate analysis for better planning."
            externalLink="https://www.accuweather.com/en/agriculture-weather"
            externalLinkText="AccuWeather Agriculture"
          />
          <FeatureCard
            icon={<Wind className="w-8 h-8" />}
            title="Pest Control"
            description="Identify and manage pests effectively with AI-powered detection and treatment suggestions."
            externalLink="https://www.epa.gov/safepestcontrol/integrated-pest-management-ipm-principles"
            externalLinkText="EPA Pest Management"
          />
          <FeatureCard
            icon={<Leaf className="w-8 h-8" />}
            title="Sustainable Practices"
            description="Learn about eco-friendly farming methods and sustainable agriculture techniques."
            externalLink="https://www.fao.org/sustainability/en/"
            externalLinkText="FAO Sustainability"
          />
          <FeatureCard
            icon={<Wheat className="w-8 h-8" />}
            title="Market Intelligence"
            description="Stay updated with market trends, prices, and demand forecasts for your crops."
            externalLink="https://www.fas.usda.gov/data"
            externalLinkText="USDA Market Data"
          />
        </div>
      </section>

      {/* Government Schemes Section */}
      <section className="bg-green-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Government Schemes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="text-green-600 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div>
        <a 
          href={externalLink}
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
        >
          {externalLinkText} <ExternalLink className="ml-1 w-3 h-3" />
        </a>
      </div>
    </div>
  );
}

function SchemeCard({ title, description, link }: { title: string; description: string; link: string }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-green-600 hover:text-green-700 font-medium"
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
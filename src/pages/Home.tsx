import { useEffect, useState } from "react";
import { ChevronRight, Users, BarChart3, Zap, Sprout, Leaf, TrendingUp, MessageCircle, ExternalLink, Sun } from "lucide-react";
import { useLanguage } from '../contexts/LanguageContext';
import { t } from '../i18n/translations';
import { QuickActions } from '../components/farmer/QuickActions';
import { WeatherWidget } from '../components/farmer/WeatherWidget';
import { GovernmentLinks } from '../components/farmer/GovernmentLinks';

export function Home() {
  const { language } = useLanguage();
  const [typedText, setTypedText] = useState("");
  const [schemes, setSchemes] = useState<Array<{title: string; subtitle: string; description: string; link?: string}>>([]);
  const [loading, setLoading] = useState(true);
  
  const fullText = t('welcomeSubtitle', language);

  useEffect(() => {
    let index = 0;
    setTypedText(""); // Reset when language changes
    
    // Add small delay to prevent blank screen during language switch
    const startDelay = setTimeout(() => {
      const timer = setInterval(() => {
        if (index < fullText.length) {
          setTypedText(fullText.substring(0, index + 1));
          index++;
        } else {
          clearInterval(timer);
        }
      }, 50);
      
      return () => clearInterval(timer);
    }, 100);

    return () => clearTimeout(startDelay);
  }, [fullText]);

  useEffect(() => {
    async function fetchSchemes() {
      try {
        const res = await fetch(
          `https://api.data.gov.in/resource/cef25fe2-9231-4128-8aec-2c948fedd43f?api-key=579b464db66ec23bdd000001cdd3946e44ce4aad7209ff7b23ac571b&format=json&limit=100`
        );
        const data = await res.json();

        const parsedSchemes = (data.records || [])
          .filter((item: Record<string, string>) => item.QueryType === "Government Schemes")
          .slice(0, 6)
          .map((item: Record<string, string>) => ({
            title: item.QueryText || "Government Scheme",
            subtitle: `${item.Crop || "General"} | ${
              item.StateName || "Unknown"
            }, ${item.DistrictName || "Unknown"}`,
            description: item.KccAns || "No answer provided.",
            link: "https://pmkisan.gov.in", 
          }));

        setSchemes(parsedSchemes);
      } catch (err) {
        console.error("Error fetching schemes:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchSchemes();
  }, []);

  const startChat = () => {
    const chatButton = document.querySelector('[data-chatbot-trigger]') as HTMLButtonElement;
    chatButton?.click();
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 via-green-100 to-emerald-50 py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 sm:mb-8">
              {t('welcomeTitle', language)} <span className="text-green-600">AgriGPT</span>
            </h1>
            <div className="min-h-[3rem] sm:min-h-[4rem] mb-6 sm:mb-8">
              <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-4xl mx-auto">
                {typedText}
                <span className="animate-pulse">|</span>
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={startChat}
                className="bg-green-600 hover:bg-green-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-medium text-base sm:text-lg flex items-center justify-center gap-2 transition-colors"
              >
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                {t('chatWithAI', language)}
              </button>
              <a 
                href="/about"
                className="border-2 border-green-600 text-green-600 hover:bg-green-50 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-medium text-base sm:text-lg transition-colors inline-flex items-center justify-center"
              >
                {t('learnMore', language)}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Farmer Dashboard Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Quick Actions */}
            <div className="lg:col-span-2">
              <QuickActions />
            </div>
            
            {/* Weather Widget */}
            <div className="weather-widget">
              <WeatherWidget />
            </div>
          </div>
          
          <div className="mt-6">
            <GovernmentLinks />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-6 sm:mb-8">
            Smart Farming Features
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <FeatureCard
              icon={<Sprout className="w-6 h-6 sm:w-8 sm:h-8 text-green-600" />}
              title={t('aiAssistant', language)}
              description={t('aiAssistantDesc', language)}
            />
            <FeatureCard
              icon={<Sun className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-600" />}
              title={t('weatherUpdates', language)}
              description={t('weatherUpdatesDesc', language)}
            />
            <FeatureCard
              icon={<Leaf className="w-6 h-6 sm:w-8 sm:h-8 text-green-500" />}
              title={t('cropGuidance', language)}
              description={t('cropGuidanceDesc', language)}
            />
            <FeatureCard
              icon={<TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />}
              title={t('marketPrices', language)}
              description={t('marketPricesDesc', language)}
            />
          </div>
        </div>
      </section>

      {/* Government Schemes Section */}
      <section className="schemes-section bg-green-50 py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-6 sm:mb-8">
            {t('schemes', language)} - Government Support
          </h2>

          {loading ? (
            <p className="text-center text-gray-600">{t('loading', language)}</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {schemes.map((scheme, index) => (
                <SchemeCard key={index} {...scheme} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

// Feature card component
function FeatureCard({
  icon,
  title,
  description
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="flex items-center mb-4">
        {icon}
        <h3 className="text-lg font-semibold ml-3">{title}</h3>
      </div>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}

// Scheme card component
function SchemeCard({
  title,
  subtitle,
  description,
  link,
}: {
  title: string;
  subtitle: string;
  description: string;
  link?: string;
}) {
  return (
    <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <h3 className="text-base sm:text-lg font-semibold mb-2 text-green-700">
        {title}
      </h3>
      <p className="text-xs sm:text-sm text-gray-600 mb-3">{subtitle}</p>
      <p className="text-sm text-gray-700 mb-4 line-clamp-3">{description}</p>
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-sm text-green-600 hover:text-green-700 font-medium"
        >
          Learn More <ExternalLink className="w-3 h-3" />
        </a>
      )}
    </div>
  );
}
import React, { useState, useEffect } from 'react';
import { Cloud, Sun, CloudRain, MapPin, Thermometer, Droplets } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { t } from '../../i18n/translations';

interface WeatherData {
  location: string;
  temperature: number;
  condition: string;
  humidity: number;
  forecast: string;
  icon: 'sun' | 'cloud' | 'rain';
}

export const WeatherWidget: React.FC = () => {
  const { language } = useLanguage();
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Mock weather data - in real app, fetch from weather API
    const mockWeather: WeatherData = {
      location: 'Current Location',
      temperature: 28,
      condition: 'Partly Cloudy',
      humidity: 65,
      forecast: 'Light rain expected tomorrow',
      icon: 'cloud'
    };

    setTimeout(() => {
      setWeather(mockWeather);
      setLoading(false);
    }, 1000);
  }, []);

  const getWeatherIcon = (icon: string) => {
    switch (icon) {
      case 'sun': return <Sun className="w-8 h-8 text-yellow-500" />;
      case 'rain': return <CloudRain className="w-8 h-8 text-blue-500" />;
      default: return <Cloud className="w-8 h-8 text-gray-500" />;
    }
  };

  if (loading) {
    return (
      <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6">
        <div className="animate-pulse">
          <div className="h-4 bg-blue-200 rounded w-1/2 mb-4"></div>
          <div className="h-8 bg-blue-200 rounded w-3/4"></div>
        </div>
      </div>
    );
  }

  if (!weather) return null;

  return (
    <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">
          {t('weatherUpdates', language)}
        </h3>
        {getWeatherIcon(weather.icon)}
      </div>
      
      <div className="space-y-3">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <MapPin className="w-4 h-4" />
          <span>{weather.location}</span>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Thermometer className="w-4 h-4 text-red-500" />
            <span className="text-2xl font-bold text-gray-900">
              {weather.temperature}°C
            </span>
          </div>
          
          <div className="flex items-center gap-2 text-sm">
            <Droplets className="w-4 h-4 text-blue-500" />
            <span>{weather.humidity}%</span>
          </div>
        </div>
        
        <div>
          <p className="text-sm font-medium text-gray-900">{weather.condition}</p>
          <p className="text-xs text-gray-600 mt-1">{weather.forecast}</p>
        </div>
      </div>
    </div>
  );
};
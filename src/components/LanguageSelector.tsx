import React from 'react';
import { Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { languages, SupportedLanguage } from '../i18n';

export const LanguageSelector: React.FC = () => {
  const { language, setLanguage, isLoading } = useLanguage();

  return (
    <div className="relative group">
      <button className="flex items-center gap-2 px-3 py-2 text-gray-700 hover:text-green-600 rounded-md" disabled={isLoading}>
        <Globe className="w-4 h-4" />
        <span className="hidden sm:inline">
          {isLoading ? (
            <span className="animate-pulse">Loading...</span>
          ) : (
            languages[language]
          )}
        </span>
        <span className="text-xs">▼</span>
      </button>
      
      <div className="absolute right-0 top-full mt-1 bg-white border rounded-lg shadow-lg py-2 min-w-[150px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
        {Object.entries(languages).map(([code, name]) => (
          <button
            key={code}
            onClick={() => setLanguage(code as SupportedLanguage)}
            className={`w-full text-left px-4 py-2 hover:bg-green-50 transition-colors ${
              language === code ? 'bg-green-100 text-green-700' : 'text-gray-700'
            } ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={isLoading}
          >
            {name}
          </button>
        ))}
      </div>
    </div>
  );
};
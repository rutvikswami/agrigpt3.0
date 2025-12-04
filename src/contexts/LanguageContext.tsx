import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { SupportedLanguage, defaultLanguage, detectLanguage, languages } from '../i18n';

interface LanguageContextType {
  language: SupportedLanguage;
  setLanguage: (lang: SupportedLanguage) => void;
  isLoading: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<SupportedLanguage>(() => {
    try {
      const saved = localStorage.getItem('agrigpt-language');
      const detectedLang = detectLanguage();
      return (saved && Object.keys(languages).includes(saved)) ? (saved as SupportedLanguage) : detectedLang;
    } catch (error) {
      console.warn('Language detection error:', error);
      return defaultLanguage;
    }
  });

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem('agrigpt-language', language);
      
      // Update document lang attribute for accessibility
      document.documentElement.lang = language;
      
      // Trigger Google Translate if available (with safety check)
      if (typeof window !== 'undefined' && language !== 'en' && window.google?.translate) {
        try {
          window.google.translate.TranslateElement({
            pageLanguage: 'en',
            includedLanguages: Object.keys(languages).join(','),
            autoDisplay: false,
          }, 'google_translate_element');
        } catch (translateError) {
          console.warn('Google Translate initialization error:', translateError);
        }
      }
    } catch (error) {
      console.warn('Language context effect error:', error);
    }
  }, [language]);

  const handleLanguageChange = (newLanguage: SupportedLanguage) => {
    setIsLoading(true);
    
    // Small delay to prevent flash
    setTimeout(() => {
      setLanguage(newLanguage);
      setIsLoading(false);
    }, 150);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleLanguageChange, isLoading }}>
      {children}
    </LanguageContext.Provider>
  );
};
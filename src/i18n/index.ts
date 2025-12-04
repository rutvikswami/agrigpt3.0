// Internationalization setup
export const languages = {
  en: 'English',
  hi: 'हिंदी',
  te: 'తెలుగు',
  ta: 'தமிழ்',
  kn: 'ಕನ್ನಡ',
  ml: 'മലയാളം'
} as const;

export type SupportedLanguage = keyof typeof languages;

export const defaultLanguage: SupportedLanguage = 'en';

// Language detection based on browser/system
export const detectLanguage = (): SupportedLanguage => {
  const browserLang = navigator.language.split('-')[0];
  return Object.keys(languages).includes(browserLang) 
    ? browserLang as SupportedLanguage 
    : defaultLanguage;
};
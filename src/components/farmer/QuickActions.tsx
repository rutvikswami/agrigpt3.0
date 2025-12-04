import React from 'react';
import { 
  Cloud, 
  FileText,
  Phone
} from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { t } from '../../i18n/translations';

const quickActions = [
  {
    icon: Cloud,
    key: 'weather' as const,
    href: '#weather',
    color: 'bg-blue-500'
  },
  {
    icon: FileText,
    key: 'schemes' as const,
    href: '#schemes',
    color: 'bg-purple-500'
  },
  {
    icon: Phone,
    key: 'aiAssistant' as const,
    href: '#chat',
    color: 'bg-green-600'
  }
];

export const QuickActions: React.FC = () => {
  const { language } = useLanguage();

  const handleQuickAction = (href: string) => {
    if (href === '#chat') {
      // Trigger chatbot open
      const chatButton = document.querySelector('[data-chatbot-trigger]') as HTMLButtonElement;
      chatButton?.click();
    } else if (href === '#weather') {
      // Scroll to weather widget
      document.querySelector('.weather-widget')?.scrollIntoView({ behavior: 'smooth' });
    } else if (href === '#schemes') {
      // Scroll to schemes section
      document.querySelector('.schemes-section')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        {t('tools', language)} 
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {quickActions.map((action) => {
          const IconComponent = action.icon;
          return (
            <button
              key={action.key}
              onClick={() => handleQuickAction(action.href)}
              className="flex flex-col items-center p-4 rounded-lg hover:bg-gray-50 transition-colors group"
            >
              <div className={`${action.color} p-3 rounded-full mb-2 group-hover:scale-110 transition-transform`}>
                <IconComponent className="w-6 h-6 text-white" />
              </div>
              <span className="text-sm font-medium text-gray-900 text-center">
                {t(action.key, language)}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
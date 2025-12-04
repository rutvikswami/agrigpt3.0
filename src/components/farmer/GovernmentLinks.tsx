import React from 'react';
import { ExternalLink, Globe, Phone, FileText, DollarSign, Truck } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { t } from '../../i18n/translations';

const governmentLinks = [
  {
    title: 'PM-KISAN Portal',
    titleHi: 'पीएम-किसान पोर्टल',
    description: 'Direct income support for farmers',
    descriptionHi: 'किसानों के लिए प्रत्यक्ष आय सहायता',
    url: 'https://pmkisan.gov.in',
    icon: DollarSign,
    color: 'bg-green-500'
  },
  {
    title: 'Kisan Call Center',
    titleHi: 'किसान कॉल सेंटर',
    description: '1800-180-1551 - Free agricultural helpline',
    descriptionHi: '1800-180-1551 - निःशुल्क कृषि हेल्पलाइन',
    url: 'tel:18001801551',
    icon: Phone,
    color: 'bg-blue-500'
  },
  {
    title: 'Soil Health Card',
    titleHi: 'मृदा स्वास्थ्य कार्ड',
    description: 'Check soil health and get fertilizer recommendations',
    descriptionHi: 'मिट्टी की सेहत जांचें और उर्वरक की सिफारिशें पाएं',
    url: 'https://soilhealth.dac.gov.in',
    icon: Globe,
    color: 'bg-amber-500'
  },
  {
    title: 'eNAM Portal',
    titleHi: 'ईनाम पोर्टल',
    description: 'National Agriculture Market - online trading',
    descriptionHi: 'राष्ट्रीय कृषि बाजार - ऑनलाइन व्यापार',
    url: 'https://enam.gov.in',
    icon: Truck,
    color: 'bg-purple-500'
  },
  {
    title: 'Pradhan Mantri Fasal Bima Yojana',
    titleHi: 'प्रधानमंत्री फसल बीमा योजना',
    description: 'Crop insurance scheme for farmers',
    descriptionHi: 'किसानों के लिए फसल बीमा योजना',
    url: 'https://pmfby.gov.in',
    icon: FileText,
    color: 'bg-red-500'
  },
  {
    title: 'Kisan Portal',
    titleHi: 'किसान पोर्टल',
    description: 'One-stop solution for farmers',
    descriptionHi: 'किसानों के लिए एक स्थान समाधान',
    url: 'https://farmer.gov.in',
    icon: Globe,
    color: 'bg-cyan-500'
  }
];

export const GovernmentLinks: React.FC = () => {
  const { language } = useLanguage();

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        {language === 'hi' ? 'सरकारी वेबसाइट लिंक्स' : 'Government Website Links'}
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {governmentLinks.map((link, index) => {
          const IconComponent = link.icon;
          return (
            <a
              key={index}
              href={link.url}
              target={link.url.startsWith('tel:') ? '_self' : '_blank'}
              rel="noopener noreferrer"
              className="flex items-start gap-3 p-4 border rounded-lg hover:bg-gray-50 transition-colors group"
            >
              <div className={`${link.color} p-2 rounded-lg shrink-0`}>
                <IconComponent className="w-5 h-5 text-white" />
              </div>
              
              <div className="flex-1 min-w-0">
                <h4 className="font-medium text-gray-900 group-hover:text-green-600 transition-colors">
                  {language === 'hi' ? link.titleHi : link.title}
                </h4>
                <p className="text-sm text-gray-600 mt-1">
                  {language === 'hi' ? link.descriptionHi : link.description}
                </p>
              </div>
              
              <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-green-600 transition-colors shrink-0 mt-1" />
            </a>
          );
        })}
      </div>
    </div>
  );
};
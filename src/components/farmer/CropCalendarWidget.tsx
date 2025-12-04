import React from 'react';
import { Calendar, Sprout, AlertCircle } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { t } from '../../i18n/translations';

interface CropActivity {
  date: string;
  activity: string;
  crop: string;
  priority: 'high' | 'medium' | 'low';
}

const mockActivities: CropActivity[] = [
  {
    date: 'Today',
    activity: 'Watering',
    crop: 'Tomatoes',
    priority: 'high'
  },
  {
    date: 'Tomorrow',
    activity: 'Fertilizer Application',
    crop: 'Rice',
    priority: 'medium'
  },
  {
    date: 'In 3 days',
    activity: 'Pest Inspection',
    crop: 'Wheat',
    priority: 'high'
  }
];

export const CropCalendarWidget: React.FC = () => {
  const { language } = useLanguage();

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-green-100 text-green-800';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">
          {t('cropCalendar', language)}
        </h3>
        <Calendar className="w-5 h-5 text-green-600" />
      </div>
      
      <div className="space-y-3">
        {mockActivities.map((activity, index) => (
          <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
            <div className="flex-shrink-0">
              {activity.priority === 'high' ? (
                <AlertCircle className="w-5 h-5 text-red-500 mt-0.5" />
              ) : (
                <Sprout className="w-5 h-5 text-green-500 mt-0.5" />
              )}
            </div>
            
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-sm font-medium text-gray-900">
                  {activity.activity}
                </span>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(activity.priority)}`}>
                  {activity.priority}
                </span>
              </div>
              
              <p className="text-sm text-gray-600">
                {activity.crop} • {activity.date}
              </p>
            </div>
          </div>
        ))}
      </div>
      
      <button className="w-full mt-4 px-4 py-2 text-sm font-medium text-green-700 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
        {t('learnMore', language)}
      </button>
    </div>
  );
};
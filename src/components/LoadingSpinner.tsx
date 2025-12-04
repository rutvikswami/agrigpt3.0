import React from 'react';

export const LoadingSpinner: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-16 w-16 border-4 border-green-500 border-t-transparent mx-auto mb-4"></div>
        <p className="text-gray-600">
          भाषा लोड हो रही है... / Loading language...
        </p>
      </div>
    </div>
  );
};
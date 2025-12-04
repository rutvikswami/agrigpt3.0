// Comprehensive farming keywords for fast chatbot responses
export const farmingKeywords = {
  // Crops - फसलें
  crops: [
    'rice', 'wheat', 'corn', 'maize', 'barley', 'sugarcane', 'cotton', 'soybean', 
    'tomato', 'potato', 'onion', 'garlic', 'chili', 'pepper', 'brinjal', 'okra',
    'mango', 'banana', 'apple', 'orange', 'grapes', 'coconut', 'tea', 'coffee',
    'धान', 'गेहूं', 'मक्का', 'जौ', 'गन्ना', 'कपास', 'सोयाबीन', 'टमाटर', 'आलू', 
    'प्याज', 'लहसुन', 'मिर्च', 'बैंगन', 'भिंडी', 'आम', 'केला', 'सेब', 'संतरा', 'अंगूर'
  ],

  // Farming Activities - कृषि गतिविधियां
  activities: [
    'planting', 'sowing', 'harvesting', 'irrigation', 'watering', 'fertilizing', 
    'weeding', 'pruning', 'spraying', 'ploughing', 'tilling', 'transplanting',
    'बुआई', 'रोपाई', 'कटाई', 'सिंचाई', 'पानी', 'खाद', 'उर्वरक', 'निराई', 'छिड़काव', 'जुताई'
  ],

  // Problems - समस्याएं
  problems: [
    'pest', 'disease', 'fungus', 'virus', 'bacteria', 'insect', 'weed', 'drought',
    'flood', 'yellowing', 'wilting', 'spots', 'holes', 'damage', 'dying',
    'कीट', 'रोग', 'फंगस', 'वायरस', 'बैक्टीरिया', 'कीड़े', 'खरपतवार', 'सूखा', 'बाढ़', 
    'पीलापन', 'मुरझाना', 'धब्बे', 'छेद', 'नुकसान', 'मरना'
  ],

  // Soil & Fertilizers - मिट्टी और उर्वरक
  soil: [
    'soil', 'fertilizer', 'manure', 'compost', 'nitrogen', 'phosphorus', 'potassium',
    'NPK', 'organic', 'vermi', 'urea', 'DAP', 'pH', 'nutrients', 'micronutrients',
    'मिट्टी', 'मृदा', 'उर्वरक', 'खाद', 'नाइट्रोजन', 'फास्फोरस', 'पोटाश', 'जैविक', 'कृमि', 'यूरिया'
  ],

  // Weather - मौसम
  weather: [
    'rain', 'sunshine', 'temperature', 'humidity', 'wind', 'storm', 'hail', 'frost',
    'season', 'monsoon', 'summer', 'winter', 'drought', 'flood', 'cyclone',
    'बारिश', 'धूप', 'तापमान', 'नमी', 'हवा', 'तूफान', 'ओला', 'पाला', 'मौसम', 'मानसून', 
    'गर्मी', 'सर्दी', 'सूखा', 'बाढ़', 'चक्रवात'
  ],

  // Equipment - उपकरण
  equipment: [
    'tractor', 'plough', 'harrow', 'seeder', 'sprayer', 'harvester', 'pump',
    'hose', 'tools', 'machinery', 'equipment', 'implement',
    'ट्रैक्टर', 'हल', 'बीजक', 'छिड़काव', 'यंत्र', 'कटाई', 'पंप', 'नली', 'उपकरण', 'मशीन'
  ],

  // Government - सरकारी
  government: [
    'scheme', 'subsidy', 'loan', 'insurance', 'PM-KISAN', 'DBT', 'MSP', 'procurement',
    'support', 'assistance', 'benefit', 'registration', 'application',
    'योजना', 'सब्सिडी', 'ऋण', 'बीमा', 'समर्थन', 'सहायता', 'लाभ', 'पंजीकरण', 'आवेदन'
  ],

  // Markets - बाजार
  market: [
    'price', 'rate', 'mandi', 'market', 'selling', 'buying', 'profit', 'loss',
    'trader', 'commission', 'transport', 'storage', 'warehouse',
    'भाव', 'दर', 'मंडी', 'बाजार', 'बेचना', 'खरीदना', 'लाभ', 'हानि', 'व्यापारी', 'कमीशन', 
    'परिवहन', 'भंडारण', 'गोदाम'
  ]
};

// Quick response templates for common queries
export const quickResponses = {
  weather: {
    en: "Check the weather widget above for current conditions and forecasts for your farming area.",
    hi: "मौसम की जानकारी के लिए ऊपर दिया गया weather widget देखें।"
  },
  schemes: {
    en: "Check government schemes section below or visit PM-KISAN portal for direct income support.",
    hi: "सरकारी योजनाओं के लिए नीचे दिया गया section देखें या PM-KISAN पोर्टल पर जाएं।"
  },
  pest: {
    en: "For pest control, identify the pest first. Use neem-based organic pesticides or contact your local agriculture officer.",
    hi: "कीट नियंत्रण के लिए पहले कीट की पहचान करें। नीम आधारित जैविक कीटनाशक का उपयोग करें।"
  },
  soil: {
    en: "Get soil testing done at your nearest Krishi Vigyan Kendra or visit soilhealth.dac.gov.in for soil health card.",
    hi: "मिट्टी की जांच के लिए नजदीकी कृषि विज्ञान केंद्र जाएं या soilhealth.dac.gov.in पर जाएं।"
  }
};

// Function to detect farming-related queries quickly
export const detectFarmingQuery = (query: string): string | null => {
  const lowerQuery = query.toLowerCase();
  
  // Weather queries
  if (farmingKeywords.weather.some(keyword => lowerQuery.includes(keyword))) {
    return 'weather';
  }
  
  // Scheme queries
  if (farmingKeywords.government.some(keyword => lowerQuery.includes(keyword))) {
    return 'schemes';
  }
  
  // Pest queries
  if (farmingKeywords.problems.some(keyword => lowerQuery.includes(keyword))) {
    return 'pest';
  }
  
  // Soil queries
  if (farmingKeywords.soil.some(keyword => lowerQuery.includes(keyword))) {
    return 'soil';
  }
  
  return null;
};
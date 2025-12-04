import { SupportedLanguage } from '../i18n';

// Function to check if query is agriculture-related using Gemini
export const checkAgricultureRelevance = async (query: string): Promise<{
  isAgricultural: boolean;
  processedQuery: string;
  confidence: number;
}> => {
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
  
  if (!apiKey) {
    return { 
      isAgricultural: true, 
      processedQuery: query, 
      confidence: 0.5 
    };
  }

  try {
    const relevanceCheckPrompt = `
    Analyze this query and determine if it's related to agriculture, farming, crops, livestock, soil, irrigation, weather for farming, government agricultural schemes, or rural farming life.

    Query: "${query}"

    Respond with ONLY a JSON object in this exact format:
    {
      "isAgricultural": true/false,
      "processedQuery": "cleaned and enhanced version of the query for better agricultural context",
      "confidence": 0.0-1.0
    }

    If agricultural: enhance the query with farming context.
    If not agricultural: suggest redirecting to farming topics.
    `;

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: relevanceCheckPrompt }] }],
        }),
      }
    );

    const data = await response.json();
    const result = data?.candidates?.[0]?.content?.parts?.[0]?.text?.trim();
    
    if (result) {
      try {
        const parsed = JSON.parse(result);
        return {
          isAgricultural: parsed.isAgricultural || false,
          processedQuery: parsed.processedQuery || query,
          confidence: parsed.confidence || 0.5
        };
      } catch (parseError) {
        console.warn('Failed to parse AI relevance response:', parseError);
      }
    }
  } catch (error) {
    console.error('Agriculture relevance check failed:', error);
  }

  // Fallback: assume agricultural if contains farming keywords
  const farmingKeywords = [
    'crop', 'farming', 'agriculture', 'soil', 'plant', 'harvest', 'irrigation',
    'fertilizer', 'pest', 'livestock', 'farm', 'cultivation', 'grow', 'seed',
    'फसल', 'खेती', 'कृषि', 'मिट्टी', 'पौधा', 'फसल', 'सिंचाई', 'उर्वरक', 'कीट',
    'పంట', 'వ్యవసాయం', 'మట్టి', 'మొక్క', 'కోత', 'నీటిపారుదల',
    'பயிர்', 'விவசாயம்', 'மண்', 'செடி', 'அறுவடை', 'பாசனம்',
    'ಬೆಳೆ', 'ಕೃಷಿ', 'ಮಣ್ಣು', 'ಸಸ್ಯ', 'ಹೊಸೆತ', 'ನೀರಾವರಿ',
    'വിള', 'കൃഷി', 'മണ്ണ്', 'ചെടി', 'വിളവെടുപ്പ്', 'നനയ്ക്കൽ'
  ];
  
  const isAgricultural = farmingKeywords.some(keyword => 
    query.toLowerCase().includes(keyword.toLowerCase())
  );

  return {
    isAgricultural,
    processedQuery: isAgricultural ? query : `How can I start farming or agriculture? Original query: ${query}`,
    confidence: isAgricultural ? 0.7 : 0.3
  };
};

// Enhanced AI query processor for better farming responses
export const processAgricultureQuery = async (
  query: string, 
  language: SupportedLanguage = 'en'
): Promise<string> => {
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
  
  if (!apiKey) {
    return language === 'hi' 
      ? "क्षमा करें, AI सेवा उपलब्ध नहीं है। कृपया बाद में पुनः प्रयास करें।"
      : "Sorry, AI service is not available. Please try again later.";
  }

  try {
    // First check if query is agriculture-related
    const relevanceCheck = await checkAgricultureRelevance(query);
    
    if (!relevanceCheck.isAgricultural && relevanceCheck.confidence > 0.7) {
      const redirectMessage = {
        hi: "यह सवाल खेती से संबंधित नहीं लगता। कृपया धान, गेहूं, सब्जी, फसल, मिट्टी, सिंचाई, कीट नियंत्रण, या सरकारी योजनाओं के बारे में पूछें।",
        te: "ఈ ప్రశ్న వ్యవసాయానికి సంబంధించినది కాదు. దయచేసి వరి, గోధుమలు, కూరగాయలు, పంటలు, మట్టి, నీటిపారుదల, కీటక నియంత్రణ, లేదా ప్రభుత్వ పథకాల గురించి అడగండి.",
        ta: "இந்த கேள்வி விவசாயத்துடன் தொடர்புடையதாகத் தெரியவில்லை. அரிசி, கோதுமை, காய்கறிகள், பயிர்கள், மண், பாசனம், பூச்சி கட்டுப்பாடு அல்லது அரசு திட்டங்கள் பற்றி கேட்கவும்.",
        kn: "ಈ ಪ್ರಶ್ನೆ ಕೃಷಿಗೆ ಸಂಬಂಧಿಸಿದಂತೆ ತೋರುತ್ತಿಲ್ಲ. ದಯವಿಟ್ಟು ಅಕ್ಕಿ, ಗೋಧಿ, ತರಕಾರಿಗಳು, ಬೆಳೆಗಳು, ಮಣ್ಣು, ನೀರಾವರಿ, ಕೀಟ ನಿಯಂತ್ರಣ, ಅಥವಾ ಸರ್ಕಾರಿ ಯೋಜನೆಗಳ ಬಗ್ಗೆ ಕೇಳಿ.",
        ml: "ഈ ചോദ്യം കൃഷിയുമായി ബന്ധപ്പെട്ടതായി തോന്നുന്നില്ല. ദയവായി അരി, ഗോതമ്പ്, പച്ചക്കറികൾ, വിളകൾ, മണ്ണ്, ജലസേചനം, കീടനിയന്ത്രണം, അല്ലെങ്കിൽ സർക്കാർ പദ്ധതികളെക്കുറിച്ച് ചോദിക്കുക.",
        en: "This question doesn't seem to be related to farming. Please ask about rice, wheat, vegetables, crops, soil, irrigation, pest control, or government schemes."
      };
      
      return redirectMessage[language] || redirectMessage.en;
    }

    // Process the query for agriculture context
    const processedQuery = relevanceCheck.processedQuery;
    
    const enhancedPrompt = `
    You are an expert agricultural advisor for Indian farmers. Answer this farming question clearly and practically.
    
    Language: Respond in ${language === 'hi' ? 'Hindi' : language === 'te' ? 'Telugu' : language === 'ta' ? 'Tamil' : language === 'kn' ? 'Kannada' : language === 'ml' ? 'Malayalam' : 'English'}
    
    Question: ${processedQuery}
    
    Guidelines:
    - Give practical, actionable advice for Indian farming conditions
    - Include specific steps where applicable
    - Mention seasonal considerations if relevant
    - Suggest government schemes if applicable
    - Keep language simple and farmer-friendly
    - Use local farming terminology
    - Limit response to 200 words maximum
    
    Focus on: crops suitable for India, soil types, irrigation methods, organic farming, pest control, weather patterns, market prices, and government support schemes.
    `;

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: enhancedPrompt }] }],
        }),
      }
    );

    const data = await response.json();
    const answer = data?.candidates?.[0]?.content?.parts?.[0]?.text?.trim();
    
    if (answer) {
      return answer;
    } else {
      throw new Error('No response from AI');
    }

  } catch (error) {
    console.error('AI query processing failed:', error);
    
    const errorMessages = {
      hi: "क्षमा करें, अभी AI सेवा में समस्या है। कृपया किसान कॉल सेंटर 1800-180-1551 पर कॉल करें या बाद में पुनः प्रयास करें।",
      te: "క్షమించండి, ప్రస్తుతం AI సేవలో సమస్య ఉంది. దయచేసి కిసాన్ కాల్ సెంటర్ 1800-180-1551కి కాల్ చేయండి లేదా తర్వాత మళ్లీ ప్రయత్నించండి.",
      ta: "மன்னிக்கவும், தற்போது AI சேவையில் சிக்கல் உள்ளது. தயவுசெய்து கிசான் கால் சென்டர் 1800-180-1551 ஐ அழைக்கவும் அல்லது பின்னர் மீண்டும் முயற்சிக்கவும்.",
      kn: "ಕ್ಷಮಿಸಿ, ಪ್ರಸ್ತುತ AI ಸೇವೆಯಲ್ಲಿ ಸಮಸ್ಯೆ ಇದೆ. ದಯವಿಟ್ಟು ಕಿಸಾನ್ ಕಾಲ್ ಸೆಂಟರ್ 1800-180-1551 ಗೆ ಕಾಲ್ ಮಾಡಿ ಅಥವಾ ನಂತರ ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ.",
      ml: "ക്ഷമിക്കുക, നിലവിൽ AI സേവനത്തിൽ പ്രശ്നമുണ്ട്. ദയവായി കിസാൻ കോൾ സെന്റർ 1800-180-1551 ലേക്ക് വിളിക്കുക അല്ലെങ്കിൽ പിന്നീട് വീണ്ടും ശ്രമിക്കുക.",
      en: "Sorry, there's currently an issue with the AI service. Please call Kisan Call Center 1800-180-1551 or try again later."
    };
    
    return errorMessages[language] || errorMessages.en;
  }
};
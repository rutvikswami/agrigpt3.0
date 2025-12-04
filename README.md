# AgriGPT - AI-Powered Farming Assistant for Indian Farmers

AgriGPT is a comprehensive farming platform designed specifically for Indian farmers, providing AI-powered assistance, weather updates, crop guidance, and government scheme information in multiple Indian languages.

## 🌾 Features

### Core Features
- **AI Chatbot**: Multilingual AI assistant for farming queries
- **Weather Updates**: Real-time weather forecasts for farming decisions
- **Crop Calendar**: Personalized farming schedules and reminders
- **Market Prices**: Latest market rates for agricultural produce
- **Government Schemes**: Information about agricultural subsidies and programs
- **Quick Actions**: Easy access to essential farming tools

### Farmer-Friendly Design
- **Multilingual Support**: Available in 10+ Indian languages including Hindi, Telugu, Tamil, Kannada, Malayalam, Gujarati, Marathi, Punjabi, and Bengali
- **Voice Recognition**: Speech-to-text input for farmers with limited literacy
- **Simple Interface**: Large buttons and clear navigation optimized for mobile devices
- **Offline Capabilities**: Core features work with limited internet connectivity

### Translation Support
- **Google Translate Integration**: Automatic page translation for all supported languages
- **Smart Language Detection**: Automatic detection of user's preferred language
- **Cultural Adaptation**: Content adapted for Indian farming practices and local conditions

## 🛠️ Technical Architecture

### New Project Structure
```
agrigpt3.0/
├── src/
│   ├── components/
│   │   ├── farmer/           # Farmer-specific components
│   │   │   ├── QuickActions.tsx
│   │   │   ├── WeatherWidget.tsx
│   │   │   └── CropCalendarWidget.tsx
│   │   ├── LanguageSelector.tsx
│   │   ├── Navbar.tsx
│   │   └── ChatBot.tsx
│   ├── contexts/
│   │   └── LanguageContext.tsx    # Language state management
│   ├── i18n/
│   │   ├── index.ts              # Language configuration
│   │   └── translations.ts       # Translation keys and values
│   ├── pages/
│   │   ├── Home.tsx              # Redesigned farmer dashboard
│   │   ├── About.tsx
│   │   ├── FAQ.tsx
│   │   ├── FarmingTypes.tsx
│   │   └── FarmingTypeDetail.tsx
│   └── data/
│       └── farmingTypes.ts
```

### Key Improvements

#### 1. Internationalization (i18n)
- **Language Context**: React context for language state management
- **Translation System**: Centralized translation with fallback support
- **Dynamic Content**: All UI text dynamically translated
- **Google Translate**: Integrated for comprehensive language support

#### 2. Farmer Dashboard
- **Quick Actions Grid**: Easy access to weather, calendar, prices, tools
- **Weather Widget**: Live weather updates with farming-relevant data
- **Crop Calendar**: Personalized farming schedule with priority indicators
- **Visual Design**: Green color scheme representing agriculture

#### 3. Enhanced Accessibility
- **Large Touch Targets**: Minimum 44px for mobile usability
- **High Contrast Mode**: Support for users with visual impairments
- **Reduced Motion**: Respects user's motion preferences
- **Voice Input**: Speech recognition for hands-free operation

#### 4. Mobile-First Design
- **Responsive Layout**: Optimized for smartphones and tablets
- **Touch-Friendly**: Large buttons and generous spacing
- **Fast Loading**: Optimized images and lazy loading
- **Offline Support**: Core features work without internet

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation
```bash
# Navigate to project directory
cd agrigpt3.0

# Install dependencies
npm install

# Start development server
npm run dev
```

### Environment Variables
Create a `.env` file in the root directory:
```
VITE_GEMINI_API_KEY=your_gemini_api_key_here
```

## 🌍 Language Support

### Supported Languages
- English (en)
- हिंदी (hi) - Hindi
- తెలుగు (te) - Telugu  
- தமிழ் (ta) - Tamil
- ಕನ್ನಡ (kn) - Kannada
- മലയാളം (ml) - Malayalam
- ગુજરાતી (gu) - Gujarati
- मराठी (mr) - Marathi
- ਪੰਜਾਬੀ (pa) - Punjabi
- বাংলা (bn) - Bengali

### Adding New Languages
1. Add language code to `src/i18n/index.ts`
2. Add translations to `src/i18n/translations.ts`
3. Update Google Translate configuration in `index.html`

## 📱 Mobile Features

### Responsive Design
- Adaptive layouts for all screen sizes
- Touch-optimized interface
- Swipe gestures for navigation

### Voice Recognition
- Speech-to-text for chatbot queries
- Multi-language voice support
- Offline voice recognition where possible

### Progressive Web App (PWA) Ready
- Installable on mobile devices
- Offline functionality
- Push notifications for weather alerts

## 🌐 API Integration

### Weather Data
- Real-time weather updates
- 7-day forecasts
- Farming-specific weather parameters

### Government Schemes
- Live data from data.gov.in
- State and district-specific schemes
- Crop-specific subsidies

### Market Prices
- Daily market rates
- Price trend analysis
- Regional price variations

## 🔒 Security & Privacy

### Data Protection
- No sensitive data storage
- Anonymous usage analytics
- Secure API communications

### Privacy Features
- Location data optional
- Voice data processed locally
- No personal information required

## 🤝 Contributing

We welcome contributions from the farming and developer community:

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines
- Follow React best practices
- Ensure mobile responsiveness
- Add translations for new text
- Test on multiple devices
- Consider offline functionality

## 📞 Support

For farmers needing assistance:
- Use the in-app AI chatbot
- Call agricultural helpline: 1800-180-1551
- Visit local agricultural extension office

For technical support:
- Create GitHub issue
- Email: support@agrigpt.com

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Indian Council of Agricultural Research (ICAR)
- Ministry of Agriculture & Farmers Welfare
- Google Translate API
- Weather data providers
- Open source community

---

**Made with ❤️ for Indian Farmers** 🇮🇳
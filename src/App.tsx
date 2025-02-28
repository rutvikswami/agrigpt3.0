import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { ChatBot } from './components/ChatBot';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { FAQ } from './pages/FAQ';
import { FarmingTypes } from './pages/FarmingTypes';
import { FarmingTypeDetail } from './pages/FarmingTypeDetail';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/farming-types" element={<FarmingTypes />} />
            <Route path="/farming-types/:type" element={<FarmingTypeDetail />} />
          </Routes>
        </main>
        <ChatBot />
      </div>
    </Router>
  );
}

export default App
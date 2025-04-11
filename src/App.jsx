import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Herosection from './components/Herosection';
import Keyfeatures from './components/Keyfeatures';
import Footer from './components/Footer';
import Services from './components/Services';
import Aboutuspage from './pages/Aboutuspage';
import Industriespage from './pages/Industriespage';
import Servicepage from './pages/Servicepage';
import Agriculture from './services/Agriculture';
import Medical from './services/Medical';
import Finance from './services/Finance';
import Transport from './services/Transport';
import './styles.css';

function App() {
  const { t } = useTranslation();
  return (
    <Router>
      <div className="bg-gray-100 font-sans">
        <div className="container mx-auto px-4 py-10">
          {/* Navbar stays outside Routes but inside Router */}
          <Navbar />
          
          <Routes>
            {/* Homepage (/) renders all sections */}
            <Route
              path="/"
              element={
                <>
                  <Herosection />
                  <Keyfeatures />
                  <Services />
                  <Footer />
                </>
              }
            />
            
            {/* Other pages */}
            <Route path="/aboutpage" element={<Aboutuspage />} />
            <Route path="/servicepage" element={<Servicepage />} />
            <Route path="/industriespage" element={<Industriespage />} />
            <Route path="/agriculture" element={<Agriculture />} />
            <Route path="/medical" element={<Medical />} />
            <Route path="/finance" element={<Finance />} />
            <Route path="/transport" element={<Transport />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
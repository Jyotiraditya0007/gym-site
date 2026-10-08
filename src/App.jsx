import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import TrialModal from './components/TrialModal';
import ScrollToTop from './components/ScrollToTop';

import Home from './pages/Home';
import About from './pages/About';
import Training from './pages/Training';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

function App() {
  const [trialModalOpen, setTrialModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('Free 3-Day Pass');

  const handleOpenTrial = (service = 'Free 3-Day Pass') => {
    setSelectedService(service);
    setTrialModalOpen(true);
  };

  const handleCloseTrial = () => {
    setTrialModalOpen(false);
  };

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#08090d] text-zinc-100 flex flex-col font-sans selection:bg-lime-400 selection:text-black">
        <ScrollToTop />
        
        {/* Navigation Bar */}
        <Navbar onOpenTrial={handleOpenTrial} />

        {/* Main Content Area */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home onOpenTrial={handleOpenTrial} />} />
            <Route path="/about" element={<About onOpenTrial={handleOpenTrial} />} />
            <Route path="/training" element={<Training onOpenTrial={handleOpenTrial} />} />
            <Route path="/contact" element={<Contact onOpenTrial={handleOpenTrial} />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer onOpenTrial={handleOpenTrial} />

        {/* Global Trial & Class Booking Modal */}
        <TrialModal
          isOpen={trialModalOpen}
          onClose={handleCloseTrial}
          defaultService={selectedService}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;

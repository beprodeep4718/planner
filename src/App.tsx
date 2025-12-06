// useState is imported below with other imports
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import Header from './components/Header';
import CallbackModal from './components/CallbackModal';
import { useState } from 'react';
import ReferralProgram from './components/ReferralProgram';
import IdealStudent from './components/IdealStudent';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen bg-white">
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} onOpenModal={openModal} />
      <Hero />
      <Features />
      <HowItWorks />
      <IdealStudent />
      <ReferralProgram />
      <Pricing />
      <Footer />
      <CallbackModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}

export default App;

import { Menu, X, TrendingUp } from 'lucide-react';
import { useState } from 'react';
import CallbackModal from './CallbackModal';

interface HeaderProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (value: boolean) => void;
  onOpenModal?: () => void;
}

export default function Header({ isMenuOpen, setIsMenuOpen, onOpenModal }: HeaderProps) {
  const [isModalOpen, setIsModalOpen] = useState(false); // keep local menu modal state for legacy

  const openModal = () => {
    if (onOpenModal) return onOpenModal();
    setIsModalOpen(true);
  };
  const closeModal = () => setIsModalOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-to-br from-emerald-500 to-teal-600 p-2 rounded-lg">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              WealthWise
            </span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">
              Features
            </a>
            <a href="#how-it-works" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">
              How It Works
            </a>
            <a href="#reviews" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">
              Reviews
            </a>
            <a href="#pricing" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">
              Pricing
            </a>
            <button
              onClick={openModal}
              className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all"
            >
              Request a Call Back
            </button>
          </nav>

          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <nav className="px-4 py-4 space-y-3">
            <a href="#features" className="block text-gray-700 hover:text-emerald-600 transition-colors font-medium">
              Features
            </a>
            <a href="#how-it-works" className="block text-gray-700 hover:text-emerald-600 transition-colors font-medium">
              How It Works
            </a>
            <a href="#reviews" className="block text-gray-700 hover:text-emerald-600 transition-colors font-medium">
              Reviews
            </a>
            <a href="#pricing" className="block text-gray-700 hover:text-emerald-600 transition-colors font-medium">
              Pricing
            </a>
            <button
              onClick={openModal}
              className="block text-center bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-6 py-2 rounded-full font-semibold"
            >
              Get Started
            </button>
          </nav>
        </div>
      )}

      <CallbackModal isOpen={isModalOpen} onClose={closeModal} />
    </header>
  );
}

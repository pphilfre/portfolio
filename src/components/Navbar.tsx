
import React, { useEffect, useState } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'glassmorphism py-3' : 'py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <a href="#hero" className="text-2xl font-mono font-bold text-white hover-effect">
          <span className="text-cyber-primary">&lt;</span>
          Portfolio
          <span className="text-cyber-primary">/&gt;</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a href="#about" className="text-white/80 hover:text-cyber-primary transition-colors duration-300 hover-effect">
            About
          </a>
          <a href="#projects" className="text-white/80 hover:text-cyber-primary transition-colors duration-300 hover-effect">
            Projects
          </a>
          <a href="#homelab" className="text-white/80 hover:text-cyber-primary transition-colors duration-300 hover-effect">
            Homelab
          </a>
          <a href="#journey" className="text-white/80 hover:text-cyber-primary transition-colors duration-300 hover-effect">
            Journey
          </a>
          <a href="#contact" className="text-white/80 hover:text-cyber-primary transition-colors duration-300 hover-effect">
            Contact
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white hover:text-cyber-primary hover-effect" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden glassmorphism border-t border-white/10 transition-all duration-300 overflow-hidden ${
          mobileMenuOpen ? 'max-h-64 py-4' : 'max-h-0 py-0'
        }`}
      >
        <nav className="flex flex-col space-y-4 px-4">
          <a 
            href="#about" 
            className="text-white/80 hover:text-cyber-primary py-2 transition-colors duration-300"
            onClick={() => setMobileMenuOpen(false)}
          >
            About
          </a>
          <a 
            href="#projects" 
            className="text-white/80 hover:text-cyber-primary py-2 transition-colors duration-300"
            onClick={() => setMobileMenuOpen(false)}
          >
            Projects
          </a>
          <a 
            href="#homelab" 
            className="text-white/80 hover:text-cyber-primary py-2 transition-colors duration-300"
            onClick={() => setMobileMenuOpen(false)}
          >
            Homelab
          </a>
          <a 
            href="#journey" 
            className="text-white/80 hover:text-cyber-primary py-2 transition-colors duration-300"
            onClick={() => setMobileMenuOpen(false)}
          >
            Journey
          </a>
          <a 
            href="#contact" 
            className="text-white/80 hover:text-cyber-primary py-2 transition-colors duration-300"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

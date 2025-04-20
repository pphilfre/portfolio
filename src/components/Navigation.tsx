import React, { useState, useEffect, memo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

// Create memoized Logo component to avoid unnecessary re-renders
const Logo = memo(() => (
  <Link to="/" className="flex items-center">
    <div className="text-cyber-primary font-mono text-xl font-bold relative">
      <span className="cyber-glitch-1">&lt;CG/&gt;</span>
    </div>
  </Link>
));

// Create memoized MenuItem for better performance
const MenuItem = memo(({ to, label, currentPath, toggleMobileMenu }: { 
  to: string; 
  label: string; 
  currentPath: string;
  toggleMobileMenu: () => void;
}) => {
  const isActive = currentPath === to;
  
  return (
    <motion.li 
      className="relative"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
    >
      <Link 
        to={to} 
        className={`py-2 px-4 block hover:text-cyber-primary transition-colors relative ${
          isActive ? 'text-cyber-primary' : 'text-white'
        }`}
        onClick={toggleMobileMenu}
      >
        {label}
        {isActive && (
          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-cyber-primary"></span>
        )}
      </Link>
    </motion.li>
  );
});

const Navigation: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  // Close mobile menu when path changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);
  
  // Only add scroll listener when component mounts
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };
    
    // Passive listener for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  // Memo navigation items to prevent re-rendering
  const navigationItems = [
    { path: '/', label: 'Home' },
    { path: '/projects', label: 'Projects' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-black/80 backdrop-blur-md shadow-lg shadow-cyber-primary/10' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <nav className="flex items-center justify-between py-4">
          <Logo />
          
          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center space-x-1">
            {navigationItems.map(item => (
              <MenuItem 
                key={item.path}
                to={item.path}
                label={item.label}
                currentPath={location.pathname}
                toggleMobileMenu={toggleMobileMenu}
              />
            ))}
          </ul>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMobileMenu}
            className="md:hidden text-white hover:text-cyber-primary focus:outline-none transition-colors"
            aria-label="Toggle menu"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor" 
              className="w-6 h-6"
            >
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </nav>
      </div>
      
      {/* Mobile Menu */}
      <motion.div 
        className={`md:hidden bg-black/95 backdrop-blur-md overflow-hidden`}
        initial={false}
        animate={{ height: mobileMenuOpen ? 'auto' : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className="container mx-auto px-4">
          <ul className="py-4 space-y-1">
            {navigationItems.map(item => (
              <MenuItem 
                key={item.path}
                to={item.path}
                label={item.label}
                currentPath={location.pathname}
                toggleMobileMenu={toggleMobileMenu}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </header>
  );
};

export default memo(Navigation); 
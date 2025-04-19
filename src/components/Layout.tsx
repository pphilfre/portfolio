
import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import CustomCursor from '@/components/CustomCursor';
import { AnimatePresence, motion } from 'framer-motion';

const Layout = () => {
  const location = useLocation();

  useEffect(() => {
    // Scroll to top when route changes
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-[#121212] text-white overflow-x-hidden">
      <CustomCursor />
      <Navbar />
      
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="w-full"
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>
      
      <footer className="py-8 border-t border-cyber-primary/20 text-center text-white/60">
        <div className="container mx-auto px-4">
          <p className="font-mono text-sm">
            &copy; {new Date().getFullYear()} Your Name | Cybersecurity & Homelab Portfolio
          </p>
          <p className="text-xs mt-1">
            Built with React & Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;

import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import { AnimatePresence, motion } from 'framer-motion';
import { useScroll, useTransform } from 'framer-motion';

const Layout = () => {
  const location = useLocation();
  const { scrollYProgress } = useScroll();
  const footerOpacity = useTransform(scrollYProgress, [0.85, 1], [0, 1]);

  useEffect(() => {
    // Scroll to top when route changes
    window.scrollTo(0, 0);
    
    // Load Font Awesome for icons from CDN
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/js/all.min.js';
    script.integrity = 'sha512-GWzVrcGlo0TxTRvz9ttioyYJ+Wwk9Tran4z9kJJdEP61sBQXRC0ecO1a6CGw51mDZnXxVBLAQcBXJPHGKpl5vQ==';
    script.crossOrigin = 'anonymous';
    script.referrerPolicy = 'no-referrer';
    document.head.appendChild(script);
    
    return () => {
      // Clean up
      if (script.parentNode) {
        document.head.removeChild(script);
      }
    };
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-[#121212] text-white overflow-x-hidden">
      <Navbar />
      
      {/* Background scanlines effect */}
      <div className="fixed inset-0 pointer-events-none opacity-10 z-0 scan-line"></div>
      
      {/* Background grid pattern */}
      <div className="fixed inset-0 pointer-events-none opacity-5 z-0"
           style={{
             backgroundImage: 'radial-gradient(rgba(155, 135, 245, 0.6) 1px, transparent 1px), radial-gradient(rgba(155, 135, 245, 0.3) 1px, transparent 1px)',
             backgroundSize: '40px 40px',
             backgroundPosition: '0 0, 20px 20px'
           }}>
      </div>
      
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="w-full relative z-10"
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>
      
      <motion.footer 
        className="py-8 border-t border-cyber-primary/20 text-center text-white/60 relative z-10"
        style={{ opacity: footerOpacity }}
      >
        <div className="container mx-auto px-4">
          <div className="inline-block relative">
            {/* Cyber corner effects */}
            <div className="absolute top-0 left-0 w-[15px] h-[1px] bg-cyber-primary"></div>
            <div className="absolute top-0 left-0 w-[1px] h-[15px] bg-cyber-primary"></div>
            <div className="absolute top-0 right-0 w-[15px] h-[1px] bg-cyber-primary"></div>
            <div className="absolute top-0 right-0 w-[1px] h-[15px] bg-cyber-primary"></div>
            <div className="absolute bottom-0 left-0 w-[15px] h-[1px] bg-cyber-primary"></div>
            <div className="absolute bottom-0 left-0 w-[1px] h-[15px] bg-cyber-primary"></div>
            <div className="absolute bottom-0 right-0 w-[15px] h-[1px] bg-cyber-primary"></div>
            <div className="absolute bottom-0 right-0 w-[1px] h-[15px] bg-cyber-primary"></div>
            
            <p className="font-mono text-sm px-6 py-2">
              &copy; {new Date().getFullYear()} Your Name | Cybersecurity & Homelab Portfolio
            </p>
          </div>
          <p className="text-xs mt-1 digital-text">
            Secure_Connection: Established
          </p>
        </div>
      </motion.footer>
    </div>
  );
};

export default Layout;

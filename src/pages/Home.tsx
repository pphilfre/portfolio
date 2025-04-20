import React, { useEffect, useRef, useState, lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';
import ParticleBackground from '@/components/ParticleBackground';
import HolographicStats from '@/components/HolographicStats';
import Hero from '@/components/Hero';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faShieldAlt, 
  faNetworkWired, 
  faGlobe, 
  faDatabase, 
  faWifi, 
  faUsers 
} from '@fortawesome/free-solid-svg-icons';

// Lazy load CyberGrid to improve initial load time
const CyberGrid = lazy(() => import('@/components/CyberGrid'));

const HomePage: React.FC = () => {
  const serviceRef = useRef<HTMLDivElement>(null);
  const [threeJsError, setThreeJsError] = useState(false);
  
  const { scrollYProgress } = useScroll();
  
  useEffect(() => {
    // Setup error handling for Three.js
    const handleThreeJsError = (event: ErrorEvent) => {
      if (event.message.includes('three') || event.message.includes('THREE') || 
          event.message.includes('WebGL') || event.message.includes('rendering')) {
        console.error('Three.js error detected:', event.message);
        setThreeJsError(true);
      }
    };
    
    window.addEventListener('error', handleThreeJsError);
    
    return () => {
      window.removeEventListener('error', handleThreeJsError);
    };
  }, []);

  // Service items with cybersecurity focus
  const services = [
    {
      icon: faShieldAlt,
      title: "Threat Detection",
      description: "Advanced threat intelligence and detection systems to identify potential security breaches before they occur."
    },
    {
      icon: faNetworkWired,
      title: "Network Security",
      description: "Comprehensive network security solutions including firewalls, intrusion detection, and secure VPN implementations."
    },
    {
      icon: faGlobe,
      title: "Web Security",
      description: "Protect your web applications and data with cutting-edge security measures and regular penetration testing."
    },
    {
      icon: faDatabase,
      title: "Database Security",
      description: "Secure your critical data with robust database security configurations and encryption protocols."
    },
    {
      icon: faWifi,
      title: "Secure Wi-Fi",
      description: "Implementation of secure wireless networks with advanced encryption and authentication protocols."
    },
    {
      icon: faUsers,
      title: "Security Consulting",
      description: "Expert advice and tailored security solutions to meet your organization's specific needs."
    }
  ];

  return (
    <>
      {/* Hero Section - Now using the updated Hero component */}
      <Hero />
      
      {/* Stats Section */}
      <section id="stats" className="py-16 relative">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Performance Metrics
              </h2>
              <p className="text-white/60 max-w-2xl mx-auto">
                Quantifiable results from years of cybersecurity expertise and dedicated client service
              </p>
            </div>
            
            <HolographicStats />
          </motion.div>
        </div>
      </section>
      
      {/* Services Section - Optimized with reduced animations */}
      <section id="services" className="py-16 relative" ref={serviceRef}>
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Cyber Shield Services
              </h2>
              <p className="text-white/60 max-w-2xl mx-auto">
                Comprehensive cybersecurity solutions designed to protect your digital assets
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: Math.min(0.5, index * 0.1) }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="bg-[#121212]/80 border border-cyber-primary/20 backdrop-blur-sm rounded-md p-6 hover:border-cyber-primary/40 transition-all duration-300 group relative overflow-hidden"
                >
                  {/* Service Icon */}
                  <div className="w-12 h-12 bg-cyber-primary/10 rounded-md flex items-center justify-center mb-4 group-hover:bg-cyber-primary/20 transition-all duration-300">
                    <FontAwesomeIcon icon={service.icon} className="text-cyber-primary text-2xl" />
                  </div>
                  
                  {/* Cyber corners - simplified */}
                  <div className="absolute top-0 left-0 w-[15px] h-[1px] bg-cyber-primary"></div>
                  <div className="absolute top-0 left-0 w-[1px] h-[15px] bg-cyber-primary"></div>
                  <div className="absolute top-0 right-0 w-[15px] h-[1px] bg-cyber-primary"></div>
                  <div className="absolute top-0 right-0 w-[1px] h-[15px] bg-cyber-primary"></div>
                  <div className="absolute bottom-0 left-0 w-[15px] h-[1px] bg-cyber-primary"></div>
                  <div className="absolute bottom-0 left-0 w-[1px] h-[15px] bg-cyber-primary"></div>
                  <div className="absolute bottom-0 right-0 w-[15px] h-[1px] bg-cyber-primary"></div>
                  <div className="absolute bottom-0 right-0 w-[1px] h-[15px] bg-cyber-primary"></div>
                  
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyber-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-white/70">
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Call to action */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="bg-gradient-to-r from-cyber-primary/20 to-cyber-primary/5 border border-cyber-primary/30 rounded-xl p-8 md:p-12 text-center relative overflow-hidden"
          >
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Secure Your Digital World?
              </h2>
              <p className="text-white/70 max-w-2xl mx-auto mb-8">
                Contact me today for a comprehensive security assessment and tailored solutions for your organization.
              </p>
              <Link to="/contact" className="cyberpunk-button primary inline-block">
                <span>Get Started</span>
              </Link>
            </div>
            
            {/* Background scan line effect */}
            <div className="scan-line"></div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default HomePage;

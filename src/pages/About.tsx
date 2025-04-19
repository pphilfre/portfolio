
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const AboutPage: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );

    const section = sectionRef.current;
    if (section) {
      const elements = section.querySelectorAll('.reveal');
      elements.forEach((el) => observer.observe(el));
    }

    return () => {
      if (section) {
        const elements = section.querySelectorAll('.reveal');
        elements.forEach((el) => observer.unobserve(el));
      }
    };
  }, []);

  return (
    <section ref={sectionRef} id="about" className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-cyber-primary">&lt;</span> About Me <span className="text-cyber-primary">/&gt;</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <motion.div 
            className="reveal"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="relative">
              <div className="aspect-square overflow-hidden rounded-lg border-2 border-cyber-primary/50 relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5" 
                  alt="Developer Portrait" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-cyber-primary/20 rounded-lg transform translate-x-4 translate-y-4 -z-10"></div>
            </div>
          </motion.div>

          <motion.div 
            className="space-y-6 reveal"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold text-cyber-primary font-mono">Who am I?</h3>
            <p className="text-white/80">
              I'm a cybersecurity professional and homelab enthusiast with a passion for network security, 
              penetration testing, and building secure infrastructures. With over 5 years of experience in 
              the field, I've helped organizations protect their digital assets through effective security
              strategies and technical implementations.
            </p>
            
            <h4 className="text-xl font-bold text-cyber-primary font-mono pt-4">My Expertise</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-cyber-primary mr-2">→</span>
                <span>Network Security & Firewall Configuration</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyber-primary mr-2">→</span>
                <span>Penetration Testing & Vulnerability Assessment</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyber-primary mr-2">→</span>
                <span>Cybersecurity Strategy Implementation</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyber-primary mr-2">→</span>
                <span>Home Lab Architecture & Maintenance</span>
              </li>
            </ul>

            <div className="pt-4">
              <h4 className="text-xl font-bold text-cyber-primary font-mono">My Skills</h4>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="px-3 py-1 bg-cyber-primary/20 text-cyber-primary rounded-full font-mono">Python</span>
                <span className="px-3 py-1 bg-cyber-primary/20 text-cyber-primary rounded-full font-mono">Docker</span>
                <span className="px-3 py-1 bg-cyber-primary/20 text-cyber-primary rounded-full font-mono">Kali Linux</span>
                <span className="px-3 py-1 bg-cyber-primary/20 text-cyber-primary rounded-full font-mono">Wireshark</span>
                <span className="px-3 py-1 bg-cyber-primary/20 text-cyber-primary rounded-full font-mono">pfSense</span>
                <span className="px-3 py-1 bg-cyber-primary/20 text-cyber-primary rounded-full font-mono">Network+</span>
                <span className="px-3 py-1 bg-cyber-primary/20 text-cyber-primary rounded-full font-mono">Security+</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;

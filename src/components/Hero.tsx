import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Hero: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient background similar to the reference image */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0c1a38] via-[#1c0f3a] to-[#1a0726] z-0"></div>
      
      {/* Floating elements similar to reference */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-[15%] left-[10%] w-16 h-16 bg-gradient-to-br from-cyber-primary/20 to-cyber-primary/10 rounded-lg backdrop-blur-md border border-white/10 opacity-70 animate-float" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-[25%] right-[15%] w-20 h-20 bg-gradient-to-br from-cyber-accent/20 to-cyber-accent/10 rounded-lg backdrop-blur-md border border-white/10 opacity-70 animate-float" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute bottom-[20%] left-[15%] w-24 h-24 bg-gradient-to-br from-cyber-red/20 to-cyber-red/10 rounded-lg backdrop-blur-md border border-white/10 opacity-70 animate-float" style={{ animationDelay: '2.1s' }}></div>
        <div className="absolute bottom-[30%] right-[10%] w-16 h-16 bg-gradient-to-br from-cyber-primary/20 to-blue-500/10 rounded-lg backdrop-blur-md border border-white/10 opacity-70 animate-float" style={{ animationDelay: '1s' }}></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-6 z-10 relative">
        <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-16">
          {/* Text content section */}
          <motion.div 
            className="lg:w-1/2 text-center lg:text-left pt-10 lg:pt-0"
            initial={{ opacity: 0, y: 20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg md:text-xl text-cyber-primary mb-2 md:mb-4 font-mono tracking-wider">
              Welcome
            </h4>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white">
              Work. Connect. <br />
              <span className="text-cyber-primary">Succeed</span> 
              <span className="text-white ml-2">-</span>
            </h1>
            <h2 className="text-xl md:text-2xl font-medium text-white/80 mb-8">
              All in One Place.
            </h2>
            <p className="text-white/70 text-lg mb-8 max-w-lg mx-auto lg:mx-0">
              Stay Connected. Collaborate Seamlessly. And Get Work Done Faster With Stack, Whether You're A Small Team Or A Global Enterprise.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <button className="bg-gradient-to-r from-cyber-primary to-[#7b67dd] hover:from-[#a08fee] hover:to-[#8674e1] text-white font-semibold py-3 px-6 rounded-md transition-all duration-300 flex items-center gap-2 group">
                Get Started
                <FontAwesomeIcon icon={faArrowRight} className="ml-1 transform group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button className="bg-transparent hover:bg-white/5 text-white border border-white/20 hover:border-white/40 font-semibold py-3 px-6 rounded-md transition-all duration-300">
                Find Your Subscription
              </button>
            </div>
          </motion.div>
          
          {/* Dashboard image section */}
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, y: 20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="relative">
              {/* Glow effect behind the dashboard */}
              <div className="absolute -inset-4 bg-gradient-to-r from-cyber-primary/20 to-blue-500/20 rounded-xl blur-2xl opacity-70"></div>
              
              {/* Dashboard image placeholder - replace with your actual dashboard image */}
              <div className="bg-[#1E1E2E]/80 backdrop-blur-sm border border-white/10 rounded-xl p-4 shadow-2xl relative overflow-hidden">
                <div className="grid grid-cols-2 gap-3 p-2">
                  <div className="col-span-2 bg-[#272736] rounded-lg p-3">
                    <div className="flex items-center mb-2">
                      <div className="w-3 h-3 rounded-full bg-cyber-primary mr-2"></div>
                      <div className="h-2 w-24 bg-white/20 rounded-full"></div>
                    </div>
                    <div className="flex space-x-2">
                      <div className="h-16 w-1/3 bg-gradient-to-t from-cyber-primary/50 to-cyber-primary/20 rounded-md"></div>
                      <div className="h-16 w-1/3 bg-gradient-to-t from-cyber-accent/50 to-cyber-accent/20 rounded-md"></div>
                      <div className="h-16 w-1/3 bg-gradient-to-t from-cyber-red/50 to-cyber-red/20 rounded-md"></div>
                    </div>
                  </div>
                  <div className="bg-[#272736] rounded-lg p-3">
                    <div className="h-2 w-16 bg-white/20 rounded-full mb-2"></div>
                    <div className="grid grid-cols-4 gap-1">
                      {[...Array(8)].map((_, i) => (
                        <div key={i} className="h-3 w-full bg-white/10 rounded-sm"></div>
                      ))}
                    </div>
                  </div>
                  <div className="bg-[#272736] rounded-lg p-3">
                    <div className="h-2 w-16 bg-white/20 rounded-full mb-2"></div>
                    <div className="flex space-x-1 items-center">
                      <div className="h-8 w-8 rounded-full bg-cyber-primary/30"></div>
                      <div className="h-8 w-8 rounded-full bg-cyber-accent/30"></div>
                      <div className="h-8 w-8 rounded-full bg-cyber-red/30"></div>
                      <div className="h-4 w-4 rounded-full bg-white/30"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

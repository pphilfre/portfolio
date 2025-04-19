
import React, { useEffect } from 'react';
import ParticleBackground from './ParticleBackground';

const Hero: React.FC = () => {
  useEffect(() => {
    // Add typing effect to the tagline
    const taglineElement = document.getElementById('tagline');
    if (!taglineElement) return;
    
    const text = "Cybersecurity & Homelab Enthusiast";
    
    let i = 0;
    const typeWriter = () => {
      if (i < text.length) {
        taglineElement.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 70);
      } else {
        // Add blinking cursor effect after typing
        taglineElement.innerHTML = taglineElement.textContent + '<span class="cursor">|</span>';
        setInterval(() => {
          const cursor = document.querySelector('.cursor');
          if (cursor) {
            cursor.classList.toggle('opacity-0');
          }
        }, 500);
      }
    };
    
    // Small delay before starting typing
    setTimeout(typeWriter, 500);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticleBackground />
      <div className="container mx-auto px-4 md:px-6 z-10 text-center md:text-left">
        <h4 className="text-lg md:text-xl text-cyber-primary mb-2 md:mb-4 font-mono opacity-90 animate-fade-in">
          Hello, I'm
        </h4>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-3 md:mb-5 text-white animate-fade-in glow-text" data-text="Your Name">
          Your Name
        </h1>
        <h2 id="tagline" className="text-xl md:text-2xl text-white/90 font-mono mb-6 md:mb-8 h-8 animate-fade-in"></h2>
        
        <div className="flex flex-wrap gap-4 justify-center md:justify-start animate-fade-in" style={{animationDelay: '1.2s'}}>
          <a href="#projects" className="bg-cyber-primary hover:bg-cyber-secondary text-white font-mono py-3 px-6 rounded-md transition-all duration-300 hover:translate-y-[-3px] hover:shadow-[0_5px_15px_rgba(155,135,245,0.5)] hover-effect">
            View Projects
          </a>
          <a href="#contact" className="bg-transparent hover:bg-cyber-primary/20 text-cyber-primary font-mono py-3 px-6 rounded-md border border-cyber-primary transition-all duration-300 hover:translate-y-[-3px] hover-effect">
            Contact Me
          </a>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-white/50 hover:text-cyber-primary transition-colors duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

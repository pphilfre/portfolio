
import React, { useEffect } from 'react';
import Hero from '@/components/Hero';
import AboutMe from '@/components/AboutMe';
import Projects from '@/components/Projects';
import Homelab from '@/components/Homelab';
import Timeline from '@/components/Timeline';
import Contact from '@/components/Contact';
import Navbar from '@/components/Navbar';
import CustomCursor from '@/components/CustomCursor';

const Index = () => {
  useEffect(() => {
    // Scroll animation for reveal elements
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    };

    const observerOptions = {
      threshold: 0.1,
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => observer.observe(el));

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <main className="min-h-screen bg-[#121212] text-white overflow-x-hidden">
      <CustomCursor />
      <Navbar />
      <Hero />
      <AboutMe />
      <Projects />
      <Homelab />
      <Timeline />
      <Contact />
      
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
    </main>
  );
};

export default Index;

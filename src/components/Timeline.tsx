
import React, { useEffect, useRef } from 'react';

interface MilestoneProps {
  year: string;
  title: string;
  description: string;
  icon: string;
  position: 'left' | 'right';
}

const Milestone: React.FC<MilestoneProps> = ({ year, title, description, icon, position }) => {
  return (
    <div className={`flex ${position === 'right' ? 'flex-row' : 'flex-row-reverse'} mb-12 relative`}>
      {/* Timeline point */}
      <div className="timeline-point absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-cyber-primary rounded-full z-10">
        <div className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyber-primary opacity-30"></div>
      </div>
      
      {/* Content */}
      <div className={`w-1/2 ${position === 'right' ? 'pr-12' : 'pl-12'}`}>
        <div className={`${position === 'right' ? 'text-right' : 'text-left'}`}>
          <span className="inline-block bg-cyber-primary rounded-full px-3 py-1 text-sm font-mono mb-3">
            {year}
          </span>
          <h3 className="text-xl font-mono font-bold mb-2 text-white">{title}</h3>
          <p className="text-white/70">{description}</p>
        </div>
      </div>
      
      {/* Icon box */}
      <div className={`w-1/2 ${position === 'right' ? 'pl-12' : 'pr-12'}`}>
        <div className={`${position === 'right' ? 'flex justify-start' : 'flex justify-end'}`}>
          <div className="w-12 h-12 bg-cyber-primary/20 border border-cyber-primary/50 rounded-lg flex items-center justify-center">
            <span className="text-cyber-primary text-2xl">{icon}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const Timeline: React.FC = () => {
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
    <section ref={sectionRef} id="journey" className="py-20 md:py-28 bg-cyber-dark/50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center reveal">
          <span className="text-cyber-primary">&lt;</span> My Journey <span className="text-cyber-primary">/&gt;</span>
        </h2>
        <p className="text-white/80 text-lg text-center max-w-2xl mx-auto mb-12 reveal">
          Key milestones in my cybersecurity and technology career
        </p>
        
        <div className="timeline-container mt-16 py-10 reveal">
          <Milestone 
            year="2016" 
            title="Started Coding"
            description="Began learning Python and web development, creating small automation tools and websites."
            icon="🖥️" 
            position="right"
          />
          
          <Milestone 
            year="2018" 
            title="CompTIA Security+ Certification"
            description="Earned my first cybersecurity certification and started focusing on network security."
            icon="🔒" 
            position="left"
          />
          
          <Milestone 
            year="2019" 
            title="Built First Homelab"
            description="Set up my first homelab environment with basic virtualization and network segmentation."
            icon="🛠️" 
            position="right"
          />
          
          <Milestone 
            year="2020" 
            title="First Cybersecurity Role"
            description="Landed my first professional position in cybersecurity as a SOC analyst."
            icon="👨‍💼" 
            position="left"
          />
          
          <Milestone 
            year="2021" 
            title="Advanced Homelab Upgrade"
            description="Expanded homelab with Proxmox cluster, enterprise networking, and automated security monitoring."
            icon="📊" 
            position="right"
          />
          
          <Milestone 
            year="2022" 
            title="CISSP Certification"
            description="Achieved CISSP certification and expanded expertise in security architecture."
            icon="🏆" 
            position="left"
          />
          
          <Milestone 
            year="2023" 
            title="Open Source Contributions"
            description="Started contributing to open source security tools and released own GitHub projects."
            icon="🌐" 
            position="right"
          />
        </div>
      </div>
    </section>
  );
};

export default Timeline;

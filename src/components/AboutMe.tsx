
import React, { useEffect, useRef } from 'react';

const AboutMe: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const elementsRef = useRef<HTMLDivElement[]>([]);

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
    <section ref={sectionRef} id="about" className="py-20 md:py-28 relative">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center reveal">
          <span className="text-cyber-primary">&lt;</span> About Me <span className="text-cyber-primary">/&gt;</span>
        </h2>
        
        <div className="flex flex-col md:flex-row gap-10 items-center">
          <div className="w-full md:w-2/5 reveal">
            <div className="relative">
              <div className="aspect-square rounded-xl overflow-hidden border-2 border-cyber-primary p-2 bg-secondary/20">
                <img 
                  src="https://images.unsplash.com/photo-1531297484001-80022131f5a1" 
                  alt="Profile" 
                  className="w-full h-full object-cover rounded-lg" 
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-40 h-40 bg-cyber-primary/10 rounded-full z-[-1] blur-xl"></div>
              <div className="absolute -top-4 -left-4 w-40 h-40 bg-cyber-primary/10 rounded-full z-[-1] blur-xl"></div>
            </div>
          </div>
          
          <div className="w-full md:w-3/5">
            <h3 className="text-2xl font-mono font-bold mb-4 text-cyber-primary reveal">Cybersecurity & Network Specialist</h3>
            <p className="text-lg text-white/90 mb-4 reveal">
              I'm a cybersecurity professional and homelab enthusiast passionate about network security, 
              penetration testing, and building secure infrastructure. With expertise in both offensive and 
              defensive security, I enjoy solving complex security challenges and building robust systems.
            </p>
            <p className="text-lg text-white/90 mb-6 reveal">
              My homelab serves as my personal cybersecurity playground where I experiment with network 
              configurations, security tools, and automation. I'm passionate about sharing knowledge and 
              contributing to the security community through open-source projects and documentation.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mt-6 reveal">
              <div>
                <h4 className="text-lg font-mono font-bold mb-2 text-cyber-primary">Technical Skills</h4>
                <ul className="space-y-1">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-cyber-primary rounded-full mr-2"></span>
                    <span className="text-white/90">Network Security</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-cyber-primary rounded-full mr-2"></span>
                    <span className="text-white/90">Penetration Testing</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-cyber-primary rounded-full mr-2"></span>
                    <span className="text-white/90">Python, Bash</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-cyber-primary rounded-full mr-2"></span>
                    <span className="text-white/90">Docker, Kubernetes</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-mono font-bold mb-2 text-cyber-primary">Certifications</h4>
                <ul className="space-y-1">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-cyber-primary rounded-full mr-2"></span>
                    <span className="text-white/90">CompTIA Security+</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-cyber-primary rounded-full mr-2"></span>
                    <span className="text-white/90">Cisco CCNA</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-cyber-primary rounded-full mr-2"></span>
                    <span className="text-white/90">CEH (Certified Ethical Hacker)</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-cyber-primary rounded-full mr-2"></span>
                    <span className="text-white/90">OSCP (In Progress)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;

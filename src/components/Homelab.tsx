
import React, { useEffect, useRef } from 'react';

const Homelab: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const networkRef = useRef<HTMLDivElement>(null);

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

  // Parallax effect on scroll
  useEffect(() => {
    const handleScroll = () => {
      const network = networkRef.current;
      if (!network) return;
      
      const elements = network.querySelectorAll('.parallax');
      const scrollPosition = window.scrollY;
      
      elements.forEach((el) => {
        const speed = parseFloat((el as HTMLElement).dataset.speed || '0.1');
        (el as HTMLElement).style.transform = `translateY(${scrollPosition * speed}px)`;
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={sectionRef} id="homelab" className="py-20 md:py-28 relative">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center reveal">
          <span className="text-cyber-primary">&lt;</span> Homelab <span className="text-cyber-primary">/&gt;</span>
        </h2>
        <p className="text-white/80 text-lg text-center max-w-2xl mx-auto mb-12 reveal">
          My personal cybersecurity testing environment and network infrastructure lab
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="reveal">
            <h3 className="text-2xl font-mono font-bold mb-4 text-cyber-primary">Network Infrastructure</h3>
            <p className="text-white/80 mb-4">
              My homelab is designed to simulate enterprise-grade network environments for security testing,
              monitoring, and automation. It includes segmented networks, IDS/IPS systems, and multiple VLANs.
            </p>
            
            <h4 className="text-xl font-mono font-bold mt-6 mb-3 text-cyber-primary">Key Components</h4>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start">
                <span className="text-cyber-primary mr-2">→</span>
                <span className="text-white/80">
                  <span className="font-mono text-cyber-primary">pfsense</span> Firewall with IDS/IPS capabilities
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-cyber-primary mr-2">→</span>
                <span className="text-white/80">
                  <span className="font-mono text-cyber-primary">Cisco</span> Managed switches for VLAN segmentation
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-cyber-primary mr-2">→</span>
                <span className="text-white/80">
                  <span className="font-mono text-cyber-primary">Proxmox</span> Virtualization cluster for services and testing
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-cyber-primary mr-2">→</span>
                <span className="text-white/80">
                  <span className="font-mono text-cyber-primary">Security Stack</span> including Suricata, ELK, and Wazuh
                </span>
              </li>
            </ul>
          </div>
          
          <div ref={networkRef} className="relative h-[400px] reveal">
            {/* Network Topology Visualization */}
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Internet Cloud */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 parallax" data-speed="0.05">
                <div className="bg-cyber-primary/10 backdrop-blur-sm border border-cyber-primary/30 rounded-full w-32 h-16 flex items-center justify-center">
                  <span className="text-cyber-primary font-mono text-sm">Internet</span>
                </div>
              </div>
              
              {/* Connection Line */}
              <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-0.5 h-14 bg-gradient-to-b from-cyber-primary/80 to-cyber-primary/30"></div>
              
              {/* Router */}
              <div className="absolute top-28 left-1/2 transform -translate-x-1/2 parallax" data-speed="0.08">
                <div className="bg-cyber-primary/20 backdrop-blur-sm border border-cyber-primary/40 rounded-lg w-28 h-14 flex items-center justify-center animate-pulse-glow">
                  <span className="text-cyber-primary font-mono text-sm">pfsense</span>
                </div>
                {/* Tooltip */}
                <div className="absolute -right-48 top-0 w-44 p-2 bg-black/80 border border-cyber-primary/30 rounded text-xs text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  Firewall, VPN, IDS/IPS
                </div>
              </div>

              {/* Multiple Connection Lines */}
              <div className="absolute top-42 left-1/2 transform -translate-x-1/2 flex space-x-10">
                <div className="w-0.5 h-14 bg-gradient-to-b from-cyber-primary/80 to-cyber-primary/30"></div>
                <div className="w-0.5 h-20 bg-gradient-to-b from-cyber-primary/80 to-cyber-primary/30"></div>
                <div className="w-0.5 h-14 bg-gradient-to-b from-cyber-primary/80 to-cyber-primary/30"></div>
              </div>
              
              {/* Switch */}
              <div className="absolute top-56 left-1/3 transform -translate-x-1/2 parallax" data-speed="0.12">
                <div className="bg-cyber-primary/20 backdrop-blur-sm border border-cyber-primary/40 rounded-lg w-24 h-10 flex items-center justify-center">
                  <span className="text-cyber-primary font-mono text-xs">Switch</span>
                </div>
              </div>
              
              {/* Proxmox Server */}
              <div className="absolute top-60 right-1/3 transform translate-x-1/2 parallax" data-speed="0.1">
                <div className="bg-cyber-primary/20 backdrop-blur-sm border border-cyber-primary/40 rounded-lg w-24 h-14 flex items-center justify-center">
                  <span className="text-cyber-primary font-mono text-xs">Proxmox</span>
                </div>
              </div>
              
              {/* Connection Lines from Switch */}
              <div className="absolute top-66 left-1/3 transform -translate-x-1/2 flex flex-col items-center">
                <div className="w-0.5 h-10 bg-gradient-to-b from-cyber-primary/80 to-cyber-primary/30"></div>
              </div>
              
              {/* Workstations */}
              <div className="absolute bottom-10 left-1/4 transform -translate-x-1/2 flex space-x-16">
                <div className="parallax" data-speed="0.15">
                  <div className="bg-cyber-primary/10 backdrop-blur-sm border border-cyber-primary/20 rounded-lg w-20 h-10 flex items-center justify-center">
                    <span className="text-cyber-primary font-mono text-xs">Kali VM</span>
                  </div>
                </div>
                <div className="parallax" data-speed="0.14">
                  <div className="bg-cyber-primary/10 backdrop-blur-sm border border-cyber-primary/20 rounded-lg w-20 h-10 flex items-center justify-center">
                    <span className="text-cyber-primary font-mono text-xs">NAS</span>
                  </div>
                </div>
                <div className="parallax" data-speed="0.13">
                  <div className="bg-cyber-primary/10 backdrop-blur-sm border border-cyber-primary/20 rounded-lg w-20 h-10 flex items-center justify-center">
                    <span className="text-cyber-primary font-mono text-xs">IOT VLAN</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 reveal">
          <h3 className="text-2xl font-mono font-bold mb-6 text-cyber-primary">Homelab Specs</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-cyber-dark/50 border border-cyber-primary/30 rounded-lg p-6 hover:bg-cyber-primary/10 transition-all duration-300">
              <h4 className="text-xl font-mono font-bold mb-3 text-cyber-primary">Networking</h4>
              <ul className="space-y-2 text-white/80">
                <li>• pfSense firewall (4-core, 8GB RAM)</li>
                <li>• Cisco 3750 Switch (24-port Gigabit)</li>
                <li>• Ubiquiti AP (802.11ac Wave 2)</li>
                <li>• Segmented VLANs for security isolation</li>
              </ul>
            </div>
            
            <div className="bg-cyber-dark/50 border border-cyber-primary/30 rounded-lg p-6 hover:bg-cyber-primary/10 transition-all duration-300">
              <h4 className="text-xl font-mono font-bold mb-3 text-cyber-primary">Compute</h4>
              <ul className="space-y-2 text-white/80">
                <li>• 2x Proxmox Nodes</li>
                <li>• 64GB RAM per node</li>
                <li>• AMD Ryzen CPUs</li>
                <li>• 10TB Network Storage</li>
              </ul>
            </div>
            
            <div className="bg-cyber-dark/50 border border-cyber-primary/30 rounded-lg p-6 hover:bg-cyber-primary/10 transition-all duration-300">
              <h4 className="text-xl font-mono font-bold mb-3 text-cyber-primary">Security Tools</h4>
              <ul className="space-y-2 text-white/80">
                <li>• Suricata IDS/IPS</li>
                <li>• Elastic Stack for SIEM</li>
                <li>• Wazuh security monitoring</li>
                <li>• Kali Linux VM for testing</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Homelab;

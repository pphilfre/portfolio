import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

// Define the stats interface
interface Stat {
  value: string;
  label: string;
  sublabel: string;
}

const stats: Stat[] = [
  {
    value: "350+",
    label: "Happy Customer",
    sublabel: "Satisfaction score of 95%"
  },
  {
    value: "410+",
    label: "Project Done",
    sublabel: "Across various industries"
  },
  {
    value: "88%",
    label: "Uptime Server",
    sublabel: "High availability guarantee"
  },
  {
    value: "168+",
    label: "Network Sensor",
    sublabel: "Global threat monitoring"
  }
];

// Individual holographic stat card component
const StatCard: React.FC<Stat & { delay: number }> = ({ value, label, sublabel, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className="relative bg-[#121212]/80 border border-cyber-primary/20 backdrop-blur-sm rounded-md p-5 overflow-hidden group"
    >
      {/* Scan line effect - applied only when hovered for better performance */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 scan-line pointer-events-none transition-opacity duration-300"></div>
      
      {/* Glowing corner borders */}
      <div className="absolute top-0 left-0 w-[20px] h-[1px] bg-cyber-primary"></div>
      <div className="absolute top-0 left-0 w-[1px] h-[20px] bg-cyber-primary"></div>
      <div className="absolute top-0 right-0 w-[20px] h-[1px] bg-cyber-primary"></div>
      <div className="absolute top-0 right-0 w-[1px] h-[20px] bg-cyber-primary"></div>
      <div className="absolute bottom-0 left-0 w-[20px] h-[1px] bg-cyber-primary"></div>
      <div className="absolute bottom-0 left-0 w-[1px] h-[20px] bg-cyber-primary"></div>
      <div className="absolute bottom-0 right-0 w-[20px] h-[1px] bg-cyber-primary"></div>
      <div className="absolute bottom-0 right-0 w-[1px] h-[20px] bg-cyber-primary"></div>
      
      {/* Hover glow effect */}
      <div className="absolute inset-0 opacity-0 bg-cyber-primary/5 transition-opacity duration-300 group-hover:opacity-100"></div>

      <h3 className="text-3xl md:text-4xl font-bold text-cyber-primary font-mono mb-1 digital-text">{value}</h3>
      <p className="text-sm md:text-base text-white/90 font-medium">{label}</p>
      <p className="text-xs text-white/60 mt-1">{sublabel}</p>
    </motion.div>
  );
};

const HolographicStats: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isHovering = useRef(false);
  const mousePositionRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Throttled mouse tracking with requestAnimationFrame for better performance
    const handleMouseMove = (e: MouseEvent) => {
      mousePositionRef.current = { x: e.clientX, y: e.clientY };
      
      if (!isHovering.current) {
        isHovering.current = true;
        updatePosition();
      }
    };
    
    const handleMouseLeave = () => {
      isHovering.current = false;
      
      // Reset all cards
      const cards = container.querySelectorAll('.stat-card');
      cards.forEach((card) => {
        (card as HTMLElement).style.transform = 'translateX(0) translateY(0) scale(1)';
      });
      
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
    };
    
    // Animated update function
    const updatePosition = () => {
      if (!isHovering.current || !container) return;
      
      const cards = container.querySelectorAll('.stat-card');
      const { left, top, width, height } = container.getBoundingClientRect();
      
      const x = mousePositionRef.current.x - left;
      const y = mousePositionRef.current.y - top;
      
      const moveX = (x - width / 2) / 40;
      const moveY = (y - height / 2) / 40;
      
      cards.forEach((card) => {
        (card as HTMLElement).style.transform = `translateX(${moveX}px) translateY(${moveY}px) scale(1.02)`;
      });
      
      rafRef.current = requestAnimationFrame(updatePosition);
    };
    
    container.addEventListener('mousemove', handleMouseMove, { passive: true });
    container.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
      
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);
  
  return (
    <div 
      ref={containerRef}
      className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 p-4 relative"
    >
      {stats.map((stat, index) => (
        <div key={index} className="stat-card transition-transform duration-300 ease-out">
          <StatCard 
            value={stat.value} 
            label={stat.label} 
            sublabel={stat.sublabel} 
            delay={0.2 + index * 0.1} 
          />
        </div>
      ))}
    </div>
  );
};

export default HolographicStats; 
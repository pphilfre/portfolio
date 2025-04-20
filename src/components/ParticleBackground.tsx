import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
}

const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    // Reduced particle count for better performance
    const maxParticles = 50;
    
    // Set canvas size with device pixel ratio consideration
    const handleResize = () => {
      const pixelRatio = 1; // Force 1:1 pixel ratio for performance
      canvas.width = window.innerWidth * pixelRatio;
      canvas.height = window.innerHeight * pixelRatio;
      ctx.scale(pixelRatio, pixelRatio);
    };
    
    window.addEventListener('resize', handleResize);
    handleResize();

    // Create particles
    const createParticle = (): Particle => {
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 1.5 + 0.5,
        speedX: Math.random() * 0.15 - 0.075,
        speedY: Math.random() * 0.15 - 0.075,
        opacity: Math.random() * 0.3 + 0.1
      };
    };
    
    // Initialize particles
    for (let i = 0; i < maxParticles; i++) {
      particles.push(createParticle());
    }

    // Time tracking for consistent animation speed
    let lastTime = 0;
    
    // Main animation loop
    const render = (timestamp: number) => {
      // Calculate delta time for smooth animation
      const deltaTime = timestamp - lastTime;
      lastTime = timestamp;
      
      // Limit clearing to improve performance
      ctx.fillStyle = 'rgba(18, 18, 18, 0.3)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      particles.forEach((particle, index) => {
        // Update particle position
        particle.x += particle.speedX * (deltaTime || 16);
        particle.y += particle.speedY * (deltaTime || 16);
        
        // Check if particle should be replaced
        if (
          particle.x < 0 || 
          particle.x > canvas.width ||
          particle.y < 0 || 
          particle.y > canvas.height
        ) {
          particles[index] = createParticle();
        }
        
        // Draw the particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(155, 135, 245, ${particle.opacity})`;
        ctx.fill();
      });
      
      // Only draw connections for every other particle to reduce calculations
      for (let i = 0; i < particles.length; i += 2) {
        for (let j = i + 2; j < particles.length; j += 2) {
          const particleA = particles[i];
          const particleB = particles[j];
          const dx = particleA.x - particleB.x;
          const dy = particleA.y - particleB.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(155, 135, 245, ${0.05 * (1 - distance / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particleA.x, particleA.y);
            ctx.lineTo(particleB.x, particleB.y);
            ctx.stroke();
          }
        }
      }
      
      animationFrameId = window.requestAnimationFrame(render);
    };
    
    animationFrameId = window.requestAnimationFrame(render);
    
    return () => {
      window.cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full pointer-events-none z-0" />;
};

export default ParticleBackground; 
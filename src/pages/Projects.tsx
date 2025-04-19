
import React, { useRef } from 'react';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, image, tags, link, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      ref={cardRef}
      className="project-card rounded-lg overflow-hidden transition-all duration-300 h-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
    >
      <div className="h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" 
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-mono font-bold mb-2 text-cyber-primary">{title}</h3>
        <p className="text-white/80 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, i) => (
            <span 
              key={i} 
              className="text-xs bg-cyber-primary/20 text-cyber-primary px-2 py-1 rounded-full font-mono"
            >
              {tag}
            </span>
          ))}
        </div>
        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-cyber-primary font-mono text-sm flex items-center hover:underline hover-effect"
        >
          View Project
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 ml-1">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>
    </motion.div>
  );
};

const ProjectsPage: React.FC = () => {
  // Sample project data
  const projects = [
    {
      title: "Secure Network Monitor",
      description: "A Python-based tool for monitoring network traffic and detecting anomalies using machine learning algorithms.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      tags: ["Python", "Machine Learning", "Network Security"],
      link: "#",
    },
    {
      title: "Docker Security Scanner",
      description: "An automated tool to scan Docker containers for vulnerabilities and security misconfigurations.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      tags: ["Docker", "Security", "Bash", "CI/CD"],
      link: "#",
    },
    {
      title: "Home Intrusion Detection",
      description: "A Raspberry Pi based IDS/IPS system designed for home networks with real-time alerts and logging.",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
      tags: ["Raspberry Pi", "IDS/IPS", "Python", "Linux"],
      link: "#",
    },
    {
      title: "Password Vault",
      description: "Secure, encrypted password manager with zero-knowledge architecture and 2FA integration.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      tags: ["Encryption", "JavaScript", "Security"],
      link: "#",
    },
    {
      title: "Network Topology Visualizer",
      description: "Tool to automatically map and visualize your network infrastructure with security insights.",
      image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b",
      tags: ["Network", "Visualization", "Python"],
      link: "#",
    },
    {
      title: "Secure API Gateway",
      description: "A custom API gateway with advanced security features like rate limiting and JWT auth.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      tags: ["API", "Authentication", "Node.js"],
      link: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 md:py-28 bg-cyber-dark/50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            <span className="text-cyber-primary">&lt;</span> Projects <span className="text-cyber-primary">/&gt;</span>
          </h2>
          <p className="text-white/80 text-lg text-center max-w-2xl mx-auto mb-12">
            A selection of my GitHub projects and homelab builds focused on cybersecurity, 
            automation, and network infrastructure.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsPage;

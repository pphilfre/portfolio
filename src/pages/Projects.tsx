import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// Define a Project interface
export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
  details?: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const { id, title, description, image, tags } = project;

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
        <Link 
          to={`/projects/${id}`}
          className="text-cyber-primary font-mono text-sm flex items-center hover:underline hover-effect"
        >
          View Project
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 ml-1">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      </div>
    </motion.div>
  );
};

// Export the projects data for use in other components
export const projects: Project[] = [
  {
    id: "secure-network-monitor",
    title: "Secure Network Monitor",
    description: "A Python-based tool for monitoring network traffic and detecting anomalies using machine learning algorithms.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    tags: ["Python", "Machine Learning", "Network Security"],
    details: "This advanced network monitoring solution uses Python and TensorFlow to detect unusual patterns in network traffic. Designed with cybersecurity best practices, it provides real-time alerts and comprehensive logging for post-incident analysis."
  },
  {
    id: "docker-security-scanner",
    title: "Docker Security Scanner",
    description: "An automated tool to scan Docker containers for vulnerabilities and security misconfigurations.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    tags: ["Docker", "Security", "Bash", "CI/CD"],
    details: "Built for DevSecOps teams, this scanner integrates with CI/CD pipelines to ensure Docker containers are free from known vulnerabilities and follow security best practices. It generates detailed reports and integrates with popular notification systems."
  },
  {
    id: "home-intrusion-detection",
    title: "Home Intrusion Detection",
    description: "A Raspberry Pi based IDS/IPS system designed for home networks with real-time alerts and logging.",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
    tags: ["Raspberry Pi", "IDS/IPS", "Python", "Linux"],
    details: "This affordable home security solution turns a Raspberry Pi into a powerful intrusion detection system. It monitors network traffic for suspicious activity and can automatically block potential threats, with mobile notifications and a user-friendly dashboard."
  },
  {
    id: "password-vault",
    title: "Password Vault",
    description: "Secure, encrypted password manager with zero-knowledge architecture and 2FA integration.",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    tags: ["Encryption", "JavaScript", "Security"],
    details: "This password manager uses AES-256 encryption and follows zero-knowledge principles, meaning your passwords are never stored in plaintext, even on your device. Features include 2FA, secure password generation, and cross-platform synchronization."
  },
  {
    id: "network-topology-visualizer",
    title: "Network Topology Visualizer",
    description: "Tool to automatically map and visualize your network infrastructure with security insights.",
    image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b",
    tags: ["Network", "Visualization", "Python"],
    details: "This visualization tool automatically discovers all devices on your network and maps their connections, providing an interactive diagram. Security features include vulnerability assessment, unauthorized device detection, and historical comparison."
  },
  {
    id: "secure-api-gateway",
    title: "Secure API Gateway",
    description: "A custom API gateway with advanced security features like rate limiting and JWT auth.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    tags: ["API", "Authentication", "Node.js"],
    details: "This Node.js-based API gateway provides a secure entry point for all your microservices. Features include JWT authentication, rate limiting to prevent DDoS attacks, request validation, and detailed access logs for security audits."
  },
];

const ProjectsPage: React.FC = () => {
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
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsPage;

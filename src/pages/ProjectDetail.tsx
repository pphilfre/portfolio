import React, { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projects, Project } from './Projects';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faCodeBranch, faLock, faServer } from '@fortawesome/free-solid-svg-icons';

const ProjectDetail: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();
  
  // Find the project by ID
  const project = projects.find(p => p.id === projectId);
  
  // If project doesn't exist, redirect to projects page
  useEffect(() => {
    if (!project) {
      navigate('/projects', { replace: true });
    }
  }, [project, navigate]);
  
  if (!project) {
    return null;
  }
  
  // List of similar projects (excluding current)
  const similarProjects = projects
    .filter(p => p.id !== project.id)
    .filter(p => p.tags.some(tag => project.tags.includes(tag)))
    .slice(0, 3);
  
  return (
    <div className="py-20 bg-cyber-dark/50">
      <div className="container mx-auto px-4 md:px-6">
        {/* Back to projects link */}
        <Link to="/projects" className="text-cyber-primary hover:text-cyber-primary/80 mb-8 inline-flex items-center">
          <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
          <span>Back to Projects</span>
        </Link>
        
        {/* Hero section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-6"
        >
          <div className="bg-[#121212]/80 border border-cyber-primary/20 rounded-lg overflow-hidden">
            <div className="h-64 md:h-80 relative">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121212] to-transparent"></div>
              
              {/* Project title overlay */}
              <div className="absolute bottom-0 left-0 p-6">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">
                  {project.title}
                </h1>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span 
                      key={i} 
                      className="text-xs bg-cyber-primary/20 text-cyber-primary px-2 py-1 rounded-full font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Project details */}
            <div className="p-6 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                  <h2 className="text-2xl font-bold text-cyber-primary mb-4">Project Overview</h2>
                  <p className="text-white/80 mb-6 text-lg">{project.description}</p>
                  
                  <h2 className="text-2xl font-bold text-cyber-primary mb-4">Details</h2>
                  <p className="text-white/80 mb-6">{project.details}</p>
                  
                  {/* Key Features */}
                  <h2 className="text-2xl font-bold text-cyber-primary mb-4">Key Features</h2>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                      <FontAwesomeIcon icon={faLock} className="text-cyber-primary mt-1 mr-3" />
                      <span className="text-white/80">Advanced security mechanisms with encryption and authentication</span>
                    </li>
                    <li className="flex items-start">
                      <FontAwesomeIcon icon={faCodeBranch} className="text-cyber-primary mt-1 mr-3" />
                      <span className="text-white/80">Open-source architecture with clear documentation and API references</span>
                    </li>
                    <li className="flex items-start">
                      <FontAwesomeIcon icon={faServer} className="text-cyber-primary mt-1 mr-3" />
                      <span className="text-white/80">Highly scalable infrastructure with cloud deployment options</span>
                    </li>
                  </ul>
                </div>
                
                {/* Sidebar / Project Information */}
                <div className="md:border-l md:border-cyber-primary/20 md:pl-6">
                  <div className="bg-[#181818] rounded-lg p-6 mb-6">
                    <h3 className="text-xl font-bold text-cyber-primary mb-4">Project Information</h3>
                    <div className="space-y-3">
                      <div>
                        <h4 className="text-white/60 text-sm">Project Type</h4>
                        <p className="text-white">{project.tags[0]}</p>
                      </div>
                      <div>
                        <h4 className="text-white/60 text-sm">Technologies</h4>
                        <p className="text-white">{project.tags.join(', ')}</p>
                      </div>
                      <div>
                        <h4 className="text-white/60 text-sm">Status</h4>
                        <p className="text-white">Active Development</p>
                      </div>
                      <div>
                        <h4 className="text-white/60 text-sm">Last Updated</h4>
                        <p className="text-white">June 2023</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Call to Action */}
                  <a 
                    href="https://github.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block w-full py-3 px-4 bg-cyber-primary text-white text-center rounded-lg hover:bg-cyber-primary/90 transition duration-200 mb-6"
                  >
                    View GitHub Repository
                  </a>
                  
                  <a 
                    href="#demo" 
                    className="block w-full py-3 px-4 bg-transparent border border-cyber-primary text-cyber-primary text-center rounded-lg hover:bg-cyber-primary/10 transition duration-200"
                  >
                    Try Live Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Related Projects */}
        {similarProjects.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-white mb-6">Related Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {similarProjects.map((relatedProject, index) => (
                <motion.div 
                  key={relatedProject.id} 
                  className="bg-[#121212]/80 border border-cyber-primary/20 rounded-lg overflow-hidden transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <Link to={`/projects/${relatedProject.id}`}>
                    <div className="h-40 overflow-hidden">
                      <img 
                        src={relatedProject.image} 
                        alt={relatedProject.title} 
                        className="w-full h-full object-cover" 
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-bold text-cyber-primary">{relatedProject.title}</h3>
                      <p className="text-white/70 text-sm mt-1 line-clamp-2">{relatedProject.description}</p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectDetail; 

import React from 'react';
import { toast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Mail, Github, MessageSquare } from "lucide-react";
import { motion } from 'framer-motion';

const ContactPage: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.get('name')}`);
    const body = encodeURIComponent(`Message from: ${formData.get('name')}\nEmail: ${formData.get('email')}\n\n${formData.get('message')}`);
    window.location.href = `mailto:your.email@example.com?subject=${subject}&body=${body}`;
    toast({
      title: "Opening email client",
      description: "Your default email client will open to send the message.",
    });
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            <span className="text-cyber-primary">&lt;</span> Contact Me <span className="text-cyber-primary">/&gt;</span>
          </h2>
          <p className="text-white/80 text-lg text-center max-w-2xl mx-auto mb-12">
            Have a question or want to collaborate? Send me a message!
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <motion.div 
            className="bg-cyber-dark/30 border border-cyber-primary/20 rounded-lg p-8 backdrop-blur-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div 
                className="form-floating-label"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder=" "
                  required
                  className="form-floating-input"
                />
                <label htmlFor="name">Your Name</label>
              </motion.div>

              <motion.div 
                className="form-floating-label"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 }}
              >
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder=" "
                  required
                  className="form-floating-input"
                />
                <label htmlFor="email">Email Address</label>
              </motion.div>

              <motion.div 
                className="form-floating-label"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5 }}
              >
                <textarea
                  id="message"
                  name="message"
                  placeholder=" "
                  required
                  rows={5}
                  className="form-floating-input resize-none"
                ></textarea>
                <label htmlFor="message">Your Message</label>
              </motion.div>

              <motion.div 
                className="pt-4"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.6 }}
                whileHover={{ scale: 1.01 }}
              >
                <Button 
                  type="submit"
                  className="w-full bg-cyber-primary hover:bg-cyber-secondary text-white font-mono py-3 rounded-md transition-all duration-300 relative overflow-hidden group hover-effect animate-pulse-glow"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </motion.div>
            </form>
          </motion.div>

          <motion.div 
            className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
          >
            <motion.div 
              className="text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="w-12 h-12 mx-auto bg-cyber-primary/20 rounded-full flex items-center justify-center mb-3">
                <Mail className="w-6 h-6 text-cyber-primary" />
              </div>
              <h3 className="text-lg font-mono mb-1 text-cyber-primary">Email</h3>
              <p className="text-white/80">your.email@example.com</p>
            </motion.div>

            <motion.div 
              className="text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="w-12 h-12 mx-auto bg-cyber-primary/20 rounded-full flex items-center justify-center mb-3">
                <Github className="w-6 h-6 text-cyber-primary" />
              </div>
              <h3 className="text-lg font-mono mb-1 text-cyber-primary">GitHub</h3>
              <p className="text-white/80">github.com/yourusername</p>
            </motion.div>

            <motion.div 
              className="text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="w-12 h-12 mx-auto bg-cyber-primary/20 rounded-full flex items-center justify-center mb-3">
                <MessageSquare className="w-6 h-6 text-cyber-primary" />
              </div>
              <h3 className="text-lg font-mono mb-1 text-cyber-primary">Discord</h3>
              <p className="text-white/80">username#1234</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;

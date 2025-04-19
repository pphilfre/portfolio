
import React, { useEffect, useRef } from 'react';
import { toast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Mail, Github, MessageSquare } from "lucide-react";

const Contact: React.FC = () => {
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
    <section ref={sectionRef} id="contact" className="py-20 md:py-28 relative">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center reveal">
          <span className="text-cyber-primary">&lt;</span> Contact Me <span className="text-cyber-primary">/&gt;</span>
        </h2>
        <p className="text-white/80 text-lg text-center max-w-2xl mx-auto mb-12 reveal">
          Have a question or want to collaborate? Send me a message!
        </p>

        <div className="max-w-2xl mx-auto">
          <div className="bg-cyber-dark/30 border border-cyber-primary/20 rounded-lg p-8 backdrop-blur-sm reveal">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="form-floating-label">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder=" "
                  required
                  className="form-floating-input"
                />
                <label htmlFor="name">Your Name</label>
              </div>

              <div className="form-floating-label">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder=" "
                  required
                  className="form-floating-input"
                />
                <label htmlFor="email">Email Address</label>
              </div>

              <div className="form-floating-label">
                <textarea
                  id="message"
                  name="message"
                  placeholder=" "
                  required
                  rows={5}
                  className="form-floating-input resize-none"
                ></textarea>
                <label htmlFor="message">Your Message</label>
              </div>

              <div className="pt-4">
                <Button 
                  type="submit"
                  className="w-full bg-cyber-primary hover:bg-cyber-secondary text-white font-mono py-3 rounded-md transition-all duration-300 relative overflow-hidden group hover-effect animate-pulse-glow"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </div>
            </form>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 reveal">
            <div className="text-center">
              <div className="w-12 h-12 mx-auto bg-cyber-primary/20 rounded-full flex items-center justify-center mb-3">
                <Mail className="w-6 h-6 text-cyber-primary" />
              </div>
              <h3 className="text-lg font-mono mb-1 text-cyber-primary">Email</h3>
              <p className="text-white/80">your.email@example.com</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 mx-auto bg-cyber-primary/20 rounded-full flex items-center justify-center mb-3">
                <Github className="w-6 h-6 text-cyber-primary" />
              </div>
              <h3 className="text-lg font-mono mb-1 text-cyber-primary">GitHub</h3>
              <p className="text-white/80">github.com/yourusername</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 mx-auto bg-cyber-primary/20 rounded-full flex items-center justify-center mb-3">
                <MessageSquare className="w-6 h-6 text-cyber-primary" />
              </div>
              <h3 className="text-lg font-mono mb-1 text-cyber-primary">Discord</h3>
              <p className="text-white/80">username#1234</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

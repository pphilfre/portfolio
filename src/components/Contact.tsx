
import React, { useEffect, useRef, useState } from 'react';
import { toast } from "@/components/ui/use-toast";

const Contact: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormState({
        name: '',
        email: '',
        message: ''
      });
    }, 1500);
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
                  value={formState.name}
                  onChange={handleInputChange}
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
                  value={formState.email}
                  onChange={handleInputChange}
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
                  value={formState.message}
                  onChange={handleInputChange}
                  placeholder=" "
                  required
                  rows={5}
                  className="form-floating-input resize-none"
                ></textarea>
                <label htmlFor="message">Your Message</label>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-cyber-primary hover:bg-cyber-secondary text-white font-mono py-3 rounded-md transition-all duration-300 relative overflow-hidden group hover-effect animate-pulse-glow"
                >
                  <span className="relative z-10">
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </span>
                  <span className="absolute bottom-0 left-0 w-full h-0 bg-white/10 group-hover:h-full transition-all duration-300"></span>
                </button>
              </div>
            </form>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 reveal">
            <div className="text-center">
              <div className="w-12 h-12 mx-auto bg-cyber-primary/20 rounded-full flex items-center justify-center mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-cyber-primary">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-mono mb-1 text-cyber-primary">Email</h3>
              <p className="text-white/80">your.email@example.com</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 mx-auto bg-cyber-primary/20 rounded-full flex items-center justify-center mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-cyber-primary">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                </svg>
              </div>
              <h3 className="text-lg font-mono mb-1 text-cyber-primary">GitHub</h3>
              <p className="text-white/80">github.com/yourusername</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 mx-auto bg-cyber-primary/20 rounded-full flex items-center justify-center mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-cyber-primary">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
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

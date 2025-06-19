
import { Mail, Linkedin, Github, ArrowUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <footer className="electric-gradient py-12 border-t border-border text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-4">Shailendra Mishra</h3>
              <p className="text-white/90 mb-4">
                MERN Stack Developer specializing in building scalable web applications 
                that drive business growth and deliver exceptional user experiences.
              </p>
              <div className="flex items-center space-x-4">
                <a 
                  href="mailto:shailendra@example.com"
                  className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center text-white hover:bg-white/30 hover:scale-110 transition-all duration-300"
                >
                  <Mail className="w-5 h-5" />
                </a>
                <a 
                  href="https://linkedin.com/in/shailendramishra"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center text-white hover:bg-white/30 hover:scale-110 transition-all duration-300"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a 
                  href="https://github.com/shailendramishra"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center text-white hover:bg-white/30 hover:scale-110 transition-all duration-300"
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                {quickLinks.map((link, index) => (
                  <Link 
                    key={index}
                    to={link.path}
                    className="block text-white/80 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <div className="space-y-2 text-sm text-white/80">
                <div>Web Development</div>
                <div>API Development</div>
                <div>Frontend Design</div>
                <div>Backend Architecture</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/20">
            <p className="text-sm text-white/80">
              © 2024 Shailendra Mishra. All rights reserved. Built with React, Node.js, and passion.
            </p>
            <Button 
              onClick={scrollToTop}
              size="sm"
              variant="outline"
              className="mt-4 md:mt-0 border-white/30 text-white hover:bg-white/10"
            >
              <ArrowUp className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

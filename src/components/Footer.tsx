
import { Mail, Linkedin, Github, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="gradient-bg py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold text-gradient mb-2">Alex Rivera</h3>
              <p className="text-muted-foreground">
                MERN Stack Developer • Building scalable web applications
              </p>
            </div>

            <div className="flex items-center space-x-6">
              <a 
                href="mailto:alex@example.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a 
                href="https://linkedin.com/in/alexrivera"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://github.com/alexrivera"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <Button 
                onClick={scrollToTop}
                size="sm"
                variant="outline"
                className="ml-4"
              >
                <ArrowUp className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <div className="border-t border-border mt-8 pt-8 text-center">
            <p className="text-sm text-muted-foreground">
              © 2024 Alex Rivera. All rights reserved. Built with React, Node.js, and passion.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

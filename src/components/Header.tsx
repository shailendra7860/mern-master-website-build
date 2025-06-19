
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Testimonials', path: '/testimonials' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-card">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold rainbow-text">
            Shailendra Mishra
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative transition-colors ${
                  isActive(item.path)
                    ? 'text-primary font-semibold'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {item.name}
                {isActive(item.path) && (
                  <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-secondary rounded-full" />
                )}
              </Link>
            ))}
            <Button asChild className="glow-button text-white">
              <Link to="/contact">Get In Touch</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4 glass-card rounded-lg p-4 mt-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block w-full text-left transition-colors ${
                  isActive(item.path)
                    ? 'text-primary font-semibold'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Button asChild className="w-full glow-button text-white">
              <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                Get In Touch
              </Link>
            </Button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;

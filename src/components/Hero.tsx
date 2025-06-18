
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center gradient-bg relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Turning Ideas Into{' '}
            <span className="text-gradient">Scalable Web Apps</span>{' '}
            with MERN Stack
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            I help startups and businesses build reliable, fast, and scalable 
            full-stack web applications that drive growth and success.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              onClick={scrollToContact}
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-lg px-8 py-3"
            >
              Let's Work Together
            </Button>
            <Button 
              onClick={scrollToAbout}
              variant="outline" 
              size="lg" 
              className="border-muted-foreground text-lg px-8 py-3"
            >
              Learn More
            </Button>
          </div>

          {/* Tech Stack Logos */}
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-green-500 rounded-sm flex items-center justify-center text-white font-bold text-sm">M</div>
              <span className="text-sm">MongoDB</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-yellow-400 rounded-sm flex items-center justify-center text-black font-bold text-sm">E</div>
              <span className="text-sm">Express</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-500 rounded-sm flex items-center justify-center text-white font-bold text-sm">R</div>
              <span className="text-sm">React</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-green-600 rounded-sm flex items-center justify-center text-white font-bold text-sm">N</div>
              <span className="text-sm">Node.js</span>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};

export default Hero;


import { useState, useEffect } from 'react';
import { ArrowRight, Code, Users, Zap, Star, Github, Coffee, Clock, Target, Rocket, Award, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Home = () => {
  const [typingText, setTypingText] = useState('');
  const [currentRole, setCurrentRole] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  const roles = [
    'Full-Stack Developer',
    'MERN Stack Expert', 
    'Problem Solver',
    'Code Architect'
  ];

  useEffect(() => {
    const currentRoleText = roles[currentRole];
    let index = 0;
    
    const typeInterval = setInterval(() => {
      if (isTyping) {
        if (index < currentRoleText.length) {
          setTypingText(currentRoleText.slice(0, index + 1));
          index++;
        } else {
          setIsTyping(false);
          setTimeout(() => {
            setIsTyping(true);
            setCurrentRole((prev) => (prev + 1) % roles.length);
            setTypingText('');
            index = 0;
          }, 2000);
        }
      }
    }, 100);

    return () => clearInterval(typeInterval);
  }, [currentRole, isTyping]);

  const recentProjects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack solution with payment integration',
      tech: ['React', 'Node.js', 'MongoDB'],
      image: 'photo-1556742049-0cfed4f6a45d',
      metrics: { users: '10K+', conversion: '+40%' }
    },
    {
      title: 'Task Management SaaS',
      description: 'Real-time collaboration tool',
      tech: ['React', 'Socket.io', 'Express'],
      image: 'photo-1611224923853-80b023f02d71',
      metrics: { users: '500+', productivity: '+35%' }
    },
    {
      title: 'Healthcare Dashboard',
      description: 'HIPAA-compliant patient management',
      tech: ['React', 'Node.js', 'AWS'],
      image: 'photo-1576091160399-112ba8d25d1f',
      metrics: { providers: '10+', efficiency: '+60%' }
    }
  ];

  const stats = [
    { icon: Code, label: 'Projects Completed', value: '50+', color: 'text-primary' },
    { icon: Users, label: 'Happy Clients', value: '30+', color: 'text-secondary' },
    { icon: Coffee, label: 'Cups of Coffee', value: '1000+', color: 'text-accent' },
    { icon: Zap, label: 'Years Experience', value: '5+', color: 'text-orange-500' }
  ];

  const quickWins = [
    {
      icon: Rocket,
      title: 'Fast Delivery',
      description: 'MVP in 2-4 weeks, full project in 2-3 months',
      color: 'from-primary to-secondary'
    },
    {
      icon: Target,
      title: 'Fixed Pricing',
      description: 'No hidden costs, transparent project estimates',
      color: 'from-secondary to-accent'
    },
    {
      icon: Award,
      title: '100% Success Rate',
      description: 'All projects delivered on time and within budget',
      color: 'from-accent to-orange-500'
    },
    {
      icon: TrendingUp,
      title: 'Business Growth',
      description: 'Average 40% increase in client conversion rates',
      color: 'from-orange-500 to-primary'
    }
  ];

  const techStack = [
    { name: 'MongoDB', proficiency: 90, color: 'bg-green-500', icon: 'M' },
    { name: 'Express.js', proficiency: 85, color: 'bg-yellow-400', icon: 'E' },
    { name: 'React.js', proficiency: 95, color: 'bg-blue-500', icon: 'R' },
    { name: 'Node.js', proficiency: 88, color: 'bg-green-600', icon: 'N' },
    { name: 'TypeScript', proficiency: 82, color: 'bg-blue-600', icon: 'T' },
    { name: 'Next.js', proficiency: 78, color: 'bg-black', icon: 'N' }
  ];

  const achievements = [
    { label: 'Client Satisfaction', value: '98%' },
    { label: 'On-Time Delivery', value: '100%' },
    { label: 'Code Quality Score', value: '9.5/10' },
    { label: 'Response Time', value: '<24h' }
  ];

  return (
    <div className="min-h-screen">
      {/* Enhanced Hero Section */}
      <section className="min-h-screen flex items-center justify-center electric-gradient relative overflow-hidden pt-20">
        {/* Animated Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 4 + 2}px`,
                height: `${Math.random() * 4 + 2}px`,
                backgroundColor: ['#00BCD4', '#E91E63', '#8BC34A', '#FF9800'][Math.floor(Math.random() * 4)],
                animationDelay: `${Math.random() * 8}s`,
                animationDuration: `${Math.random() * 3 + 5}s`
              }}
            />
          ))}
        </div>

        {/* Floating Tech Icons */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-16 h-16 bg-primary/20 rounded-lg floating-animation flex items-center justify-center text-white font-bold text-xl">
            {'</>'}
          </div>
          <div className="absolute top-40 right-32 w-12 h-12 bg-secondary/20 rounded-full floating-animation flex items-center justify-center text-white font-bold" style={{ animationDelay: '2s' }}>
            ⚡
          </div>
          <div className="absolute bottom-40 left-32 w-14 h-14 bg-accent/20 rounded-lg floating-animation flex items-center justify-center text-white font-bold text-lg" style={{ animationDelay: '4s' }}>
            🚀
          </div>
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-5xl mx-auto animate-fade-in">
            {/* Availability Status */}
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6 text-white">
              <div className="w-3 h-3 bg-green-400 rounded-full pulse-glow"></div>
              <span className="text-sm font-medium">Available for Projects</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-white">
              Hi, I'm{' '}
              <span className="block text-yellow-300">Shailendra Mishra</span>
              <span className="block text-2xl md:text-4xl mt-4">
                {typingText}
                <span className="border-r-2 border-yellow-300 animate-pulse ml-1"></span>
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              I transform innovative ideas into <span className="font-bold text-yellow-300">scalable web applications</span> that 
              drive business growth and deliver exceptional user experiences.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button asChild size="lg" className="glow-button text-white text-lg px-8 py-3">
                <Link to="/portfolio">
                  View My Work <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button asChild size="lg" className="bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30 text-lg px-8 py-3">
                <Link to="/contact">Start Your Project</Link>
              </Button>
            </div>

            {/* Animated Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className={`w-16 h-16 mx-auto mb-3 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center ${stat.color}`}>
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-white/80">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Enhanced Tech Stack */}
            <div className="flex flex-wrap justify-center items-center gap-4 mb-8">
              {techStack.map((tech, index) => (
                <div key={index} className="tech-badge px-4 py-2 rounded-full">
                  <div className="flex items-center gap-2">
                    <div className={`w-8 h-8 ${tech.color} rounded-sm flex items-center justify-center text-white font-bold text-sm`}>
                      {tech.icon}
                    </div>
                    <div className="text-sm">
                      <div className="font-medium text-white">{tech.name}</div>
                      <div className="text-xs text-white/70">{tech.proficiency}%</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quick Wins Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Why Choose <span className="text-gradient">Me?</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                I deliver results that matter to your business
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {quickWins.map((item, index) => (
                <Card key={index} className="electric-card border-0 text-center hover:scale-105 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center`}>
                      <item.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Achievement Metrics */}
            <div className="grid md:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center p-6 glass-card rounded-lg">
                  <div className="text-3xl font-bold text-gradient mb-2">{achievement.value}</div>
                  <div className="text-sm text-muted-foreground">{achievement.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technology Showcase */}
      <section className="py-20 electric-gradient">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Technology <span className="text-yellow-300">Mastery</span>
              </h2>
              <p className="text-xl text-white/90 max-w-2xl mx-auto">
                Proficiency levels in cutting-edge technologies
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {techStack.map((tech, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-12 h-12 ${tech.color} rounded-lg flex items-center justify-center text-white font-bold`}>
                      {tech.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">{tech.name}</h3>
                      <p className="text-white/70 text-sm">{tech.proficiency}% Proficiency</p>
                    </div>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div 
                      className="bg-yellow-300 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${tech.proficiency}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Projects Preview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Recent <span className="text-gradient">Success Stories</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Real projects with measurable business impact
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {recentProjects.map((project, index) => (
                <Card key={index} className="electric-card border-0 overflow-hidden group tilt-card">
                  <div className="relative overflow-hidden">
                    <img 
                      src={`https://images.unsplash.com/${project.image}?w=400&h=250&fit=crop`}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex gap-2">
                        {Object.entries(project.metrics).map(([key, value]) => (
                          <span key={key} className="px-2 py-1 bg-white/20 backdrop-blur-sm rounded text-white text-xs">
                            {value} {key}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.tech.map((tech, techIndex) => (
                        <span key={techIndex} className="px-2 py-1 bg-gradient-to-r from-primary/20 to-secondary/20 rounded text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <Button variant="outline" size="sm" className="w-full border-primary text-primary hover:bg-primary hover:text-white">
                      View Details
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <Button asChild size="lg" className="glow-button text-white">
                <Link to="/portfolio">
                  View All Projects <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 electric-gradient">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Ready to Build Something <span className="text-yellow-300">Amazing?</span>
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Let's discuss your project and bring your ideas to life with modern web technologies
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-3 font-semibold">
                <Link to="/contact">Start Your Project</Link>
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 text-lg px-8 py-3" asChild>
                <Link to="/portfolio">View Portfolio</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

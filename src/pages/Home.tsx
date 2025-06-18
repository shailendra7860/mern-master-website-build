
import { ArrowRight, Code, Users, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Home = () => {
  const recentProjects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack solution with payment integration',
      tech: ['React', 'Node.js', 'MongoDB'],
      image: 'photo-1556742049-0cfed4f6a45d'
    },
    {
      title: 'Task Management SaaS',
      description: 'Real-time collaboration tool',
      tech: ['React', 'Socket.io', 'Express'],
      image: 'photo-1611224923853-80b023f02d71'
    },
    {
      title: 'Healthcare Dashboard',
      description: 'HIPAA-compliant patient management',
      tech: ['React', 'Node.js', 'AWS'],
      image: 'photo-1576091160399-112ba8d25d1f'
    }
  ];

  const stats = [
    { icon: Code, label: 'Projects Completed', value: '50+' },
    { icon: Users, label: 'Happy Clients', value: '30+' },
    { icon: Zap, label: 'Years Experience', value: '5+' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center gradient-bg relative overflow-hidden pt-20">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl floating-animation"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/10 rounded-full blur-3xl floating-animation" style={{ animationDelay: '3s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/5 rounded-full blur-3xl floating-animation" style={{ animationDelay: '6s' }}></div>
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Crafting Digital{' '}
              <span className="text-gradient">Experiences</span>{' '}
              with MERN Stack
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              I transform innovative ideas into scalable web applications that 
              drive business growth and deliver exceptional user experiences.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button asChild size="lg" className="glass-button text-lg px-8 py-3">
                <Link to="/portfolio">
                  View My Work <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-primary/30 text-lg px-8 py-3 hover:bg-primary/10">
                <Link to="/contact">Start Your Project</Link>
              </Button>
            </div>

            {/* Tech Stack */}
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-70 mb-16">
              <div className="flex items-center gap-2 glass-card px-4 py-2 rounded-full">
                <div className="w-8 h-8 bg-green-500 rounded-sm flex items-center justify-center text-white font-bold text-sm">M</div>
                <span className="text-sm">MongoDB</span>
              </div>
              <div className="flex items-center gap-2 glass-card px-4 py-2 rounded-full">
                <div className="w-8 h-8 bg-yellow-400 rounded-sm flex items-center justify-center text-black font-bold text-sm">E</div>
                <span className="text-sm">Express</span>
              </div>
              <div className="flex items-center gap-2 glass-card px-4 py-2 rounded-full">
                <div className="w-8 h-8 bg-blue-500 rounded-sm flex items-center justify-center text-white font-bold text-sm">R</div>
                <span className="text-sm">React</span>
              </div>
              <div className="flex items-center gap-2 glass-card px-4 py-2 rounded-full">
                <div className="w-8 h-8 bg-green-600 rounded-sm flex items-center justify-center text-white font-bold text-sm">N</div>
                <span className="text-sm">Node.js</span>
              </div>
            </div>

            {/* Stats */}
            <div className="grid md:grid-cols-3 gap-8 max-w-2xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full mx-auto mb-4 flex items-center justify-center">
                    <stat.icon className="w-8 h-8 text-background" />
                  </div>
                  <div className="text-3xl font-bold text-gradient mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Recent Projects Preview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Recent <span className="text-gradient">Projects</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                A glimpse of the latest web applications I've built for clients
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {recentProjects.map((project, index) => (
                <Card key={index} className="neo-card border-0 overflow-hidden group hover:scale-105 transition-all duration-300">
                  <div className="relative overflow-hidden">
                    <img 
                      src={`https://images.unsplash.com/${project.image}?w=400&h=250&fit=crop`}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-1">
                      {project.tech.map((tech, techIndex) => (
                        <span key={techIndex} className="px-2 py-1 bg-muted rounded text-xs text-muted-foreground">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <Button asChild size="lg" className="glass-button">
                <Link to="/portfolio">
                  View All Projects <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;


import { ArrowRight, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Portfolio = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard. Built for a growing retail startup.',
      techStack: ['React.js', 'Node.js', 'MongoDB', 'Stripe API', 'Express.js'],
      image: '/api/placeholder/600/400',
      liveDemo: '#',
      github: '#',
      impact: 'Increased sales by 40% and reduced order processing time by 60%'
    },
    {
      title: 'Task Management SaaS',
      description: 'Collaborative project management tool with real-time updates, team collaboration features, and advanced reporting capabilities.',
      techStack: ['React.js', 'Socket.io', 'Node.js', 'MongoDB', 'JWT'],
      image: '/api/placeholder/600/400',
      liveDemo: '#',
      github: '#',
      impact: 'Improved team productivity by 35% for 500+ active users'
    },
    {
      title: 'Healthcare Dashboard',
      description: 'HIPAA-compliant patient management system with appointment scheduling, medical records, and telemedicine integration.',
      techStack: ['React.js', 'Node.js', 'MongoDB', 'WebRTC', 'AWS'],
      image: '/api/placeholder/600/400',
      liveDemo: '#',
      github: '#',
      impact: 'Streamlined patient care for 10+ healthcare providers'
    },
    {
      title: 'Social Learning Platform',
      description: 'Educational platform with course creation, progress tracking, live streaming, and community features for online learning.',
      techStack: ['React.js', 'Node.js', 'MongoDB', 'Redis', 'AWS S3'],
      image: '/api/placeholder/600/400',
      liveDemo: '#',
      github: '#',
      impact: 'Enabled 1000+ students to learn effectively online'
    },
    {
      title: 'Real Estate CRM',
      description: 'Customer relationship management system for real estate agents with lead tracking, property management, and automated workflows.',
      techStack: ['React.js', 'Express.js', 'MongoDB', 'Nodemailer', 'Mapbox'],
      image: '/api/placeholder/600/400',
      liveDemo: '#',
      github: '#',
      impact: 'Increased lead conversion rate by 50% for real estate agency'
    },
    {
      title: 'Financial Analytics Tool',
      description: 'Data visualization platform for financial analysis with real-time charts, portfolio tracking, and investment insights.',
      techStack: ['React.js', 'D3.js', 'Node.js', 'MongoDB', 'Alpha Vantage API'],
      image: '/api/placeholder/600/400',
      liveDemo: '#',
      github: '#',
      impact: 'Helped investors make data-driven decisions with 99.9% uptime'
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A showcase of successful MERN stack applications I've built for 
              startups and businesses across various industries.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className="bg-card border-border hover:shadow-xl transition-all duration-300 group overflow-hidden"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={`https://images.unsplash.com/${project.image}`}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1">
                    {project.techStack.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-2 py-1 bg-muted rounded text-xs text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="p-3 bg-muted/50 rounded-lg">
                    <p className="text-sm font-medium text-primary mb-1">Impact:</p>
                    <p className="text-sm text-muted-foreground">{project.impact}</p>
                  </div>
                  
                  <div className="flex gap-2 pt-2">
                    <Button 
                      size="sm" 
                      className="flex-1 bg-primary hover:bg-primary/90"
                      asChild
                    >
                      <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                        Live Demo <ArrowRight className="w-4 h-4 ml-1" />
                      </a>
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="px-3"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

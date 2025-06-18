
import { useState } from 'react';
import { ArrowRight, Github, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Portfolio = () => {
  const [filter, setFilter] = useState('all');

  const categories = ['all', 'web-app', 'api', 'frontend', 'full-stack'];

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard. Built for a growing retail startup.',
      techStack: ['React.js', 'Node.js', 'MongoDB', 'Stripe API', 'Express.js'],
      image: 'photo-1556742049-0cfed4f6a45d',
      category: 'full-stack',
      liveDemo: '#',
      github: '#',
      impact: 'Increased sales by 40% and reduced order processing time by 60%',
      features: ['Payment Integration', 'Inventory Management', 'Admin Dashboard', 'Real-time Analytics']
    },
    {
      title: 'Task Management SaaS',
      description: 'Collaborative project management tool with real-time updates, team collaboration features, and advanced reporting capabilities.',
      techStack: ['React.js', 'Socket.io', 'Node.js', 'MongoDB', 'JWT'],
      image: 'photo-1611224923853-80b023f02d71',
      category: 'web-app',
      liveDemo: '#',
      github: '#',
      impact: 'Improved team productivity by 35% for 500+ active users',
      features: ['Real-time Collaboration', 'Advanced Reporting', 'Team Management', 'Task Automation']
    },
    {
      title: 'Healthcare Dashboard',
      description: 'HIPAA-compliant patient management system with appointment scheduling, medical records, and telemedicine integration.',
      techStack: ['React.js', 'Node.js', 'MongoDB', 'WebRTC', 'AWS'],
      image: 'photo-1576091160399-112ba8d25d1f',
      category: 'full-stack',
      liveDemo: '#',
      github: '#',
      impact: 'Streamlined patient care for 10+ healthcare providers',
      features: ['HIPAA Compliance', 'Telemedicine', 'Appointment Scheduling', 'Medical Records']
    },
    {
      title: 'Social Learning Platform',
      description: 'Educational platform with course creation, progress tracking, live streaming, and community features for online learning.',
      techStack: ['React.js', 'Node.js', 'MongoDB', 'Redis', 'AWS S3'],
      image: 'photo-1522202176988-66273c2fd55f',
      category: 'web-app',
      liveDemo: '#',
      github: '#',
      impact: 'Enabled 1000+ students to learn effectively online',
      features: ['Course Creation', 'Progress Tracking', 'Live Streaming', 'Community Features']
    },
    {
      title: 'Real Estate CRM',
      description: 'Customer relationship management system for real estate agents with lead tracking, property management, and automated workflows.',
      techStack: ['React.js', 'Express.js', 'MongoDB', 'Nodemailer', 'Mapbox'],
      image: 'photo-1560518883-ce09059eeffa',
      category: 'full-stack',
      liveDemo: '#',
      github: '#',
      impact: 'Increased lead conversion rate by 50% for real estate agency',
      features: ['Lead Tracking', 'Property Management', 'Automated Workflows', 'Map Integration']
    },
    {
      title: 'Financial Analytics API',
      description: 'RESTful API for financial data analysis with real-time market data, portfolio tracking, and investment insights.',
      techStack: ['Node.js', 'Express.js', 'MongoDB', 'Redis', 'Alpha Vantage API'],
      image: 'photo-1611974789855-9c2a0a7236a3',
      category: 'api',
      liveDemo: '#',
      github: '#',
      impact: 'Helped investors make data-driven decisions with 99.9% uptime',
      features: ['Real-time Data', 'Portfolio Analytics', 'Investment Insights', 'Rate Limiting']
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 gradient-bg">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Featured <span className="text-gradient">Projects</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              A showcase of successful MERN stack applications I've built for 
              startups and businesses across various industries.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={filter === category ? "default" : "outline"}
                  onClick={() => setFilter(category)}
                  className={filter === category ? "glass-button" : "border-primary/30 hover:bg-primary/10"}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1).replace('-', ' ')}
                </Button>
              ))}
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <Card 
                  key={index} 
                  className="neo-card border-0 hover:scale-105 transition-all duration-300 group overflow-hidden"
                >
                  <div className="relative overflow-hidden">
                    <img 
                      src={`https://images.unsplash.com/${project.image}?w=600&h=300&fit=crop`}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" className="glass-button" asChild>
                          <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        </Button>
                        <Button size="sm" variant="outline" className="glass-button" asChild>
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4" />
                          </a>
                        </Button>
                      </div>
                    </div>
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

                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm">Key Features:</h4>
                      <div className="grid grid-cols-2 gap-1">
                        {project.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center gap-1 text-xs text-muted-foreground">
                            <div className="w-1 h-1 bg-primary rounded-full"></div>
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="glass-card p-3 rounded-lg">
                      <p className="text-xs font-medium text-primary mb-1">Impact:</p>
                      <p className="text-xs text-muted-foreground">{project.impact}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredProjects.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No projects found for this category.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;

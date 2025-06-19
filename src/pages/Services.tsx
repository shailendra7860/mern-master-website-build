
import { Code, Briefcase, User, Zap, Shield, Headphones } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: 'Custom Web Application Development',
      description: 'Full-stack MERN applications tailored to your business needs with modern UI/UX and robust backend architecture.',
      features: ['React.js Frontend', 'Node.js Backend', 'MongoDB Database', 'Responsive Design'],
      price: 'From $3,000'
    },
    {
      icon: Briefcase,
      title: 'RESTful API Development',
      description: 'Scalable and secure APIs that power your applications with proper authentication, validation, and documentation.',
      features: ['Express.js APIs', 'JWT Authentication', 'Data Validation', 'API Documentation'],
      price: 'From $1,500'
    },
    {
      icon: User,
      title: 'Frontend UI Development',
      description: 'Modern, responsive user interfaces built with React.js, focusing on performance and user experience.',
      features: ['React Components', 'State Management', 'Responsive Design', 'Performance Optimization'],
      price: 'From $2,000'
    },
    {
      icon: Zap,
      title: 'Backend Architecture',
      description: 'Robust server-side solutions with Node.js, including database design, API development, and deployment.',
      features: ['Node.js Services', 'Database Design', 'Server Architecture', 'Cloud Deployment'],
      price: 'From $2,500'
    },
    {
      icon: Shield,
      title: 'Database Design & Optimization',
      description: 'Efficient MongoDB database schemas and queries optimized for performance and scalability.',
      features: ['Schema Design', 'Query Optimization', 'Data Modeling', 'Performance Tuning'],
      price: 'From $1,000'
    },
    {
      icon: Headphones,
      title: 'Maintenance & Support',
      description: 'Ongoing maintenance, updates, and technical support to keep your applications running smoothly.',
      features: ['Bug Fixes', 'Feature Updates', 'Performance Monitoring', '24/7 Support'],
      price: 'From $500/month'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery Call',
      description: 'We discuss your project requirements, timeline, and goals'
    },
    {
      step: '02',
      title: 'Proposal & Planning',
      description: 'Detailed project proposal with timeline and technical specifications'
    },
    {
      step: '03',
      title: 'Development',
      description: 'Agile development with regular updates and milestone reviews'
    },
    {
      step: '04',
      title: 'Testing & Launch',
      description: 'Thorough testing, deployment, and post-launch support'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 gradient-bg">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl text-yellow-300 md:text-6xl font-bold mb-6">
              Services <span className="">Offered</span>
            </h1>
            <p className="text-xl text-white text-muted-foreground">
              Comprehensive MERN stack development services to bring your ideas to life 
              and scale your business.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pt-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
              {services.map((service, index) => (
                <Card 
                  key={index} 
                  className="neo-card border-0 hover:scale-105 transition-all duration-300 group overflow-hidden"
                >
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="w-6 h-6 text-background" />
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {service.title}
                    </CardTitle>
                    <div className="text-2xl font-bold text-gradient">{service.price}</div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2 text-sm">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button asChild className="w-full glass-button">
                      <Link to="/contact">Get Quote</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 gradient-bg">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl text-yellow-300 md:text-5xl font-bold mb-6">
                Development <span className="">Process</span>
              </h2>
              <p className="text-xl text-white text-muted-foreground max-w-2xl mx-auto">
                A streamlined approach to deliver exceptional results on time and within budget
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((item, index) => (
                <div key={index} className="text-center group">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full mx-auto mb-6 flex items-center justify-center text-background font-bold text-xl group-hover:scale-110 transition-transform duration-300 glow-animation">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-4 group-hover:text-primary text-zinc-900 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm text-white leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button asChild size="lg" className="glow-button">
                <Link to="/contact">Start Your Project</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;


import { Code, Briefcase, User } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: 'Custom Web Application Development',
      description: 'Full-stack MERN applications tailored to your business needs with modern UI/UX and robust backend architecture.',
      features: ['React.js Frontend', 'Node.js Backend', 'MongoDB Database', 'Responsive Design']
    },
    {
      icon: Briefcase,
      title: 'RESTful API Development',
      description: 'Scalable and secure APIs that power your applications with proper authentication, validation, and documentation.',
      features: ['Express.js APIs', 'JWT Authentication', 'Data Validation', 'API Documentation']
    },
    {
      icon: User,
      title: 'Frontend UI Development',
      description: 'Modern, responsive user interfaces built with React.js, focusing on performance and user experience.',
      features: ['React Components', 'State Management', 'Responsive Design', 'Performance Optimization']
    },
    {
      icon: Code,
      title: 'Backend Architecture',
      description: 'Robust server-side solutions with Node.js, including database design, API development, and deployment.',
      features: ['Node.js Services', 'Database Design', 'Server Architecture', 'Cloud Deployment']
    },
    {
      icon: Briefcase,
      title: 'Database Design & Optimization',
      description: 'Efficient MongoDB database schemas and queries optimized for performance and scalability.',
      features: ['Schema Design', 'Query Optimization', 'Data Modeling', 'Performance Tuning']
    },
    {
      icon: User,
      title: 'Maintenance & Support',
      description: 'Ongoing maintenance, updates, and technical support to keep your applications running smoothly.',
      features: ['Bug Fixes', 'Feature Updates', 'Performance Monitoring', '24/7 Support']
    }
  ];

  return (
    <section id="services" className="py-20 gradient-bg">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Services <span className="text-gradient">Offered</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive MERN stack development services to bring your ideas to life 
              and scale your business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="glass-card border-0 hover:scale-105 transition-transform duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-background" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

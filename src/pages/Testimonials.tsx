
import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Founder',
      company: 'TechStart Innovations',
      content: 'Alex built our MVP faster than we imagined. His technical expertise and attention to detail are exceptional. Our platform now serves 10,000+ users seamlessly.',
      avatar: 'photo-1494790108755-2616b612b5bb',
      rating: 5,
      project: 'E-Commerce Platform',
      duration: '3 months'
    },
    {
      name: 'Michael Rodriguez',
      role: 'CTO',
      company: 'GrowthLabs',
      content: 'Working with Alex was a game-changer for our startup. He delivered a scalable solution that grew with us from 100 to 50,000 users without missing a beat.',
      avatar: 'photo-1472099645785-5658abf4ff4e',
      rating: 5,
      project: 'Task Management SaaS',
      duration: '4 months'
    },
    {
      name: 'Emily Thompson',
      role: 'Product Manager',
      company: 'FinanceFlow',
      content: 'Alex\'s ability to understand complex business requirements and translate them into clean, efficient code is remarkable. Highly recommended for any serious project.',
      avatar: 'photo-1438761681033-6461ffad8d80',
      rating: 5,
      project: 'Financial Analytics Tool',
      duration: '6 months'
    },
    {
      name: 'David Park',
      role: 'CEO',
      company: 'HealthTech Solutions',
      content: 'The healthcare dashboard Alex built for us exceeded all expectations. HIPAA compliance, security, and user experience - all handled perfectly.',
      avatar: 'photo-1507003211169-0a1dd7228f2d',
      rating: 5,
      project: 'Healthcare Dashboard',
      duration: '5 months'
    },
    {
      name: 'Lisa Wang',
      role: 'Startup Founder',
      company: 'EduPlatform',
      content: 'From concept to launch, Alex guided us through every step. The learning platform he built now serves thousands of students worldwide.',
      avatar: 'photo-1494790108755-2616b612b5bb',
      rating: 5,
      project: 'Social Learning Platform',
      duration: '4 months'
    },
    {
      name: 'James Miller',
      role: 'Real Estate Broker',
      company: 'PropertyPro',
      content: 'The CRM system transformed our business operations. Lead conversion increased by 50% within the first month of deployment.',
      avatar: 'photo-1472099645785-5658abf4ff4e',
      rating: 5,
      project: 'Real Estate CRM',
      duration: '3 months'
    }
  ];

  const stats = [
    { value: '98%', label: 'Client Satisfaction' },
    { value: '50+', label: 'Projects Completed' },
    { value: '4.9/5', label: 'Average Rating' },
    { value: '100%', label: 'On-Time Delivery' }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 gradient-bg">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Client <span className="text-gradient">Testimonials</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Don't just take my word for it. Here's what my clients say about 
              working with me on their projects.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-gradient mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card 
                  key={index} 
                  className="neo-card border-0 hover:scale-105 transition-all duration-300 group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6 relative">
                    <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/20" />
                    
                    <div className="mb-4">
                      <div className="flex text-primary mb-3">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-current" />
                        ))}
                      </div>
                      <p className="text-muted-foreground leading-relaxed italic">
                        "{testimonial.content}"
                      </p>
                    </div>
                    
                    <div className="flex items-center gap-3 pt-4 border-t border-border">
                      <div className="w-12 h-12 rounded-full overflow-hidden">
                        <img 
                          src={`https://images.unsplash.com/${testimonial.avatar}?w=100&h=100&fit=crop&crop=face`}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold group-hover:text-primary transition-colors">
                          {testimonial.name}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.role} at {testimonial.company}
                        </p>
                      </div>
                    </div>

                    <div className="mt-4 pt-4 border-t border-border/50">
                      <div className="flex justify-between items-center text-xs text-muted-foreground">
                        <span className="glass-card px-2 py-1 rounded">
                          {testimonial.project}
                        </span>
                        <span>{testimonial.duration}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-bg">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Join My <span className="text-gradient">Success Stories?</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's discuss how I can help bring your project to life and deliver 
              the same exceptional results my clients have experienced.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="glass-button text-lg px-8 py-3" asChild>
                <a href="/contact">Start Your Project</a>
              </Button>
              <Button variant="outline" size="lg" className="border-primary/30 text-lg px-8 py-3 hover:bg-primary/10" asChild>
                <a href="/portfolio">View Portfolio</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;


import { User } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Founder',
      company: 'TechStart Innovations',
      content: 'Alex built our MVP faster than we imagined. His technical expertise and attention to detail are exceptional. Our platform now serves 10,000+ users seamlessly.',
      avatar: 'photo-1494790108755-2616b612b5bb'
    },
    {
      name: 'Michael Rodriguez',
      role: 'CTO',
      company: 'GrowthLabs',
      content: 'Working with Alex was a game-changer for our startup. He delivered a scalable solution that grew with us from 100 to 50,000 users without missing a beat.',
      avatar: 'photo-1472099645785-5658abf4ff4e'
    },
    {
      name: 'Emily Thompson',
      role: 'Product Manager',
      company: 'FinanceFlow',
      content: 'Alex\'s ability to understand complex business requirements and translate them into clean, efficient code is remarkable. Highly recommended for any serious project.',
      avatar: 'photo-1438761681033-6461ffad8d80'
    }
  ];

  return (
    <section id="testimonials" className="py-20 gradient-bg">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Client <span className="text-gradient">Testimonials</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Don't just take my word for it. Here's what my clients say about 
              working with me on their projects.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className="glass-card border-0 hover:scale-105 transition-transform duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-6">
                  <div className="mb-4">
                    <div className="flex text-primary mb-2">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-lg">★</span>
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
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role} at {testimonial.company}
                      </p>
                    </div>
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

export default Testimonials;


import { useState } from 'react';
import { Mail, Linkedin, Github, Send, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent successfully!",
        description: "I'll get back to you within 24 hours.",
      });
      setFormData({ name: '', email: '', project: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Let's Build Something <span className="text-gradient">Amazing</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Have an idea? Let's discuss how I can help bring your vision to life 
              with modern web technologies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="electric-card border-0">
              <CardHeader>
                <CardTitle className="text-2xl">Send Me a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                      className="w-full border-primary/30 focus:border-primary"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                      className="w-full border-primary/30 focus:border-primary"
                    />
                  </div>

                  <div>
                    <label htmlFor="project" className="block text-sm font-medium mb-2">
                      Project Brief
                    </label>
                    <Textarea
                      id="project"
                      name="project"
                      value={formData.project}
                      onChange={handleChange}
                      placeholder="Tell me about your project, timeline, and requirements..."
                      required
                      className="w-full min-h-[120px] resize-none border-primary/30 focus:border-primary"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full glow-button text-white"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      'Sending...'
                    ) : (
                      <>
                        Send Message <Send className="w-4 h-4 ml-2" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8">
              <Card className="electric-card border-0">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Get In Touch</h3>
                  <p className="text-muted-foreground mb-6">
                    Ready to start your project? Let's schedule a discovery call 
                    to discuss your requirements and how I can help.
                  </p>
                  
                  <div className="space-y-4">
                    <a 
                      href="mailto:shailendra@example.com"
                      className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                    >
                      <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
                        <Mail className="w-5 h-5 text-white" />
                      </div>
                      shailendra@example.com
                    </a>
                    
                    <a 
                      href="https://linkedin.com/in/shailendramishra"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                    >
                      <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
                        <Linkedin className="w-5 h-5 text-white" />
                      </div>
                      LinkedIn Profile
                    </a>
                    
                    <a 
                      href="https://github.com/shailendramishra"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                    >
                      <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
                        <Github className="w-5 h-5 text-white" />
                      </div>
                      GitHub Profile
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card className="electric-gradient border-0 text-white">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Clock className="w-6 h-6" />
                    <h4 className="text-lg font-semibold">Quick Response Guarantee</h4>
                  </div>
                  <p className="text-white/90 mb-4">
                    I typically respond to all inquiries within 24 hours. For urgent 
                    projects, I'm available for same-day consultation calls.
                  </p>
                  <Button className="w-full bg-white text-primary hover:bg-white/90 font-semibold">
                    Schedule a Call
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

import { useState } from "react";
import { Mail, Linkedin, Github, Send, Clock, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    budget: "",
    timeline: "",
    project: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    var templateParams = {
      time: new Date().toLocaleString(),
      name: formData?.name,
      message: `Hi, my name is ${formData?.name}, contact number ${formData?.contact} and I would like to discuss a project with you. budget:${formData?.budget}, timeline:${formData?.timeline} here are the details: ${formData?.project}.`,
      email: formData?.email,
    };
    emailjs
      .send("service_9bludry", "template_90s186f", templateParams, {
        publicKey: "z4Kjc3kCDC2wIvTxQ",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          toast({
            title: "Message sent successfully!",
            description: "I'll get back to you within 24 hours.",
          });
          setFormData({ name: "", email: "", contact: "", budget: "", timeline: "", project: "" });
          setIsSubmitting(false);
        },
        (error) => {
          console.log("FAILED...", error.text);
          toast({
            title: "Something went wrong!",
            description: "Please try again.",
          });
        }
      );
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "shailendramis01@gmail.com",
      href: "mailto:shailendramis01@gmail.com",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/shailendramishra",
      href: "https://linkedin.com/in/shailendramishra",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/shailendramishra",
      href: "https://github.com/shailu7860",
    },
  ];

  const services = ["Custom Web Application", "API Development", "Frontend Development", "Backend Architecture", "Database Design", "Maintenance & Support"];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 gradient-bg">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl text-main md:text-6xl font-bold mb-6">
              Let's Build Something <span className="text-yellow-300">Amazing</span>
            </h1>
            <p className="text-xl text-white text-muted-foreground">Have an idea? Let's discuss how I can help bring your vision to life with modern web technologies.</p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Contact Form */}
              <div className="lg:col-span-2">
                <Card className="neo-card border-0">
                  <CardHeader>
                    <CardTitle className="text-2xl">Send Me a Message</CardTitle>
                    <p className="text-muted-foreground">Fill out the form below and I'll get back to you within 24 hours.</p>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium mb-2">
                            Your Name *
                          </label>
                          <Input id="name" name="name" type="text" value={formData.name} onChange={handleChange} placeholder="John Doe" required className="glass-card border-border/50" />
                        </div>

                        <div>
                          <label htmlFor="email" className="block text-sm font-medium mb-2">
                            Email Address *
                          </label>
                          <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="john@example.com" required className="glass-card border-border/50" />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="company" className="block text-sm font-medium mb-2">
                            Contact Number
                          </label>
                          <Input id="company" name="company" type="number" value={formData.contact} onChange={handleChange} placeholder="1234567890" className="glass-card border-border/50" />
                        </div>

                        <div>
                          <label htmlFor="budget" className="block text-sm font-medium mb-2">
                            Project Budget
                          </label>
                          <select
                            id="budget"
                            name="budget"
                            value={formData.budget}
                            onChange={handleChange}
                            className="w-full px-3 py-2 glass-card border-border/50 rounded-md bg-background text-foreground"
                          >
                            <option value="">Select budget range</option>
                            <option value="under-5k">Under $5,000</option>
                            <option value="5k-10k">$5,000 - $10,000</option>
                            <option value="10k-25k">$10,000 - $25,000</option>
                            <option value="25k-50k">$25,000 - $50,000</option>
                            <option value="50k-plus">$50,000+</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label htmlFor="timeline" className="block text-sm font-medium mb-2">
                          Project Timeline
                        </label>
                        <select
                          id="timeline"
                          name="timeline"
                          value={formData.timeline}
                          onChange={handleChange}
                          className="w-full px-3 py-2 glass-card border-border/50 rounded-md bg-background text-foreground"
                        >
                          <option value="">Select timeline</option>
                          <option value="asap">ASAP</option>
                          <option value="1-month">Within 1 month</option>
                          <option value="2-3-months">2-3 months</option>
                          <option value="3-6-months">3-6 months</option>
                          <option value="6-plus-months">6+ months</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="project" className="block text-sm font-medium mb-2">
                          Project Description *
                        </label>
                        <Textarea
                          id="project"
                          name="project"
                          value={formData.project}
                          onChange={handleChange}
                          placeholder="Tell me about your project, requirements, and goals..."
                          required
                          className="glass-card border-border/50 min-h-[120px] resize-none"
                        />
                      </div>

                      <Button type="submit" className="w-full glass-button" disabled={isSubmitting} size="lg">
                        {isSubmitting ? (
                          "Sending..."
                        ) : (
                          <>
                            Send Message <Send className="w-4 h-4 ml-2" />
                          </>
                        )}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Info Sidebar */}
              <div className="space-y-6">
                {/* Contact Methods */}
                <Card className="neo-card border-0">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4">Get In Touch</h3>
                    <p className="text-muted-foreground mb-6 text-sm">Ready to start your project? Choose your preferred way to connect.</p>

                    <div className="space-y-4">
                      {contactInfo.map((contact, index) => (
                        <a
                          key={index}
                          href={contact.href}
                          target={contact.href.startsWith("mailto") ? undefined : "_blank"}
                          rel={contact.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                          className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
                        >
                          <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <contact.icon className="w-5 h-5 text-background" />
                          </div>
                          <div>
                            <div className="font-medium text-foreground">{contact.label}</div>
                            <div className="text-sm">{contact.value}</div>
                          </div>
                        </a>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Services List */}
                <Card className="neo-card border-0">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4">Services Available</h3>
                    <div className="space-y-3">
                      {services.map((service, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-primary" />
                          <span className="text-muted-foreground">{service}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Response Time */}
                <Card className="neo-card border-0 bg-gradient-to-br from-primary/10 to-secondary/10">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Clock className="w-6 h-6 text-primary" />
                      <h4 className="text-lg font-semibold">Quick Response</h4>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">I typically respond to all inquiries within 24 hours. For urgent projects, same-day consultation calls are available.</p>
                    <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-background">
                      Schedule a Call
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

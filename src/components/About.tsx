
import { Code, User, Award, Coffee } from 'lucide-react';

const About = () => {
  const techStack = [
    'MongoDB', 'Express.js', 'React.js', 'Node.js', 'TypeScript', 'JavaScript',
    'Next.js', 'Git', 'Docker', 'REST APIs', 'GraphQL', 'AWS', 'Tailwind CSS'
  ];

  const funFacts = [
    { icon: Code, label: 'Lines of Code Written', value: '500K+', color: 'text-primary' },
    { icon: Coffee, label: 'Cups of Coffee', value: '2K+', color: 'text-secondary' },
    { icon: Award, label: 'Projects Delivered', value: '50+', color: 'text-accent' },
    { icon: User, label: 'Happy Clients', value: '30+', color: 'text-orange-500' }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="text-gradient">Me</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Passionate MERN Stack developer with 5+ years of experience building 
              scalable web applications for startups and growing businesses.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="animate-slide-in">
              <div className="electric-card p-8 rounded-2xl">
                <div className="w-32 h-32 bg-gradient-to-br from-primary to-secondary rounded-full mx-auto mb-6 flex items-center justify-center">
                  <User className="w-16 h-16 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-center mb-4">Shailendra Mishra</h3>
                <p className="text-center text-muted-foreground">Full Stack MERN Developer</p>
              </div>
            </div>

            <div className="space-y-6 animate-fade-in">
              <div>
                <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                  <Code className="w-6 h-6 text-primary" />
                  My Story
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  With over 5 years of experience in full-stack development, I specialize in 
                  creating robust, scalable web applications using the MERN stack. My passion 
                  lies in writing clean, maintainable code and delivering solutions that drive 
                  real business value.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  I've helped numerous startups and businesses transform their ideas into 
                  successful digital products, from MVP development to enterprise-scale applications. 
                  My approach combines technical expertise with a deep understanding of business needs.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-semibold mb-4">Tech Stack & Tools</h4>
                <div className="flex flex-wrap gap-2">
                  {techStack.map((tech, index) => (
                    <span 
                      key={index}
                      className="tech-badge px-3 py-1 rounded-full text-sm 
                               transition-colors cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Fun Facts */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {funFacts.map((fact, index) => (
              <div key={index} className="text-center p-6 electric-card rounded-lg">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center ${fact.color}`}>
                  <fact.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-2xl font-bold text-gradient mb-2">{fact.value}</div>
                <div className="text-sm text-muted-foreground">{fact.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

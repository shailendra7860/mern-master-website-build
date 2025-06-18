
import { Code, User } from 'lucide-react';

const About = () => {
  const techStack = [
    'MongoDB', 'Express.js', 'React.js', 'Node.js', 'TypeScript', 'JavaScript',
    'Next.js', 'Git', 'Docker', 'REST APIs', 'GraphQL', 'AWS', 'Tailwind CSS'
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

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in">
              <div className="glass-card p-8 rounded-2xl">
                <div className="w-32 h-32 bg-gradient-to-br from-primary to-secondary rounded-full mx-auto mb-6 flex items-center justify-center">
                  <User className="w-16 h-16 text-background" />
                </div>
                <h3 className="text-2xl font-semibold text-center mb-4">Alex Rivera</h3>
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
                      className="px-3 py-1 bg-muted rounded-full text-sm text-muted-foreground 
                               hover:bg-primary/20 hover:text-primary transition-colors cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

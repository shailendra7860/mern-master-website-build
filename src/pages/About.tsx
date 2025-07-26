
import { Code, User, Award, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const techStack = [
    'MongoDB', 'Express.js', 'React.js', 'Node.js', 'TypeScript', 'JavaScript',
    'Next.js', 'Git', 'Docker', 'REST APIs', 'GraphQL', 'AWS', 'Tailwind CSS'
  ];

  const timeline = [
    {
      year: '2019',
      title: 'Started Web Development Journey',
      description: 'Began learning JavaScript and modern web technologies'
    },
    {
      year: '2020',
      title: 'First Freelance Projects',
      description: 'Completed initial client projects and built portfolio'
    },
    {
      year: '2021',
      title: 'MERN Stack Specialization',
      description: 'Focused on full-stack development with MERN technologies'
    },
    {
      year: '2022',
      title: 'Scaling Client Base',
      description: 'Worked with startups and growing businesses'
    },
    {
      year: '2024',
      title: 'Senior Full-Stack Developer',
      description: 'Leading complex projects and mentoring other developers'
    }
  ];

  const achievements = [
    { icon: Award, label: '50+ Projects', description: 'Successfully delivered' },
    { icon: User, label: '30+ Clients', description: 'Satisfied customers' },
    { icon: Clock, label: '99.9%', description: 'Uptime average' },
    { icon: Code, label: '100K+', description: 'Lines of code' }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 gradient-bg">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl text-yellow-300 mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About <span className="">Me</span>
            </h1>
            <p className="text-xl text-white text-muted-foreground">
              Passionate MERN Stack developer with 5+ years of experience building 
              scalable web applications for startups and growing businesses.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
              <div className="animate-slide-in">
                <div className="neo-card p-8 text-center">
                  <div className="w-52 h-52 bg-gradient-to-br from-primary to-secondary rounded-full mx-auto mb-6 flex items-center justify-center glow-animation">
                    {/* <User className="w-16 h-16 text-background" > */}
                      <img loading='lazy' height={240} width={280} className='rounded-full max-w-250 mix-blend-hard-light ' src='/public/shailendramishraimg.jpeg' alt='user-image'/>
                      {/* </User> */}
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">Shailendra Mishra</h3>
                  <p className="text-muted-foreground">Full Stack MERN Developer</p>
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
              </div>
            </div>

            {/* Achievements */}
            <div className="grid md:grid-cols-4 gap-8 mb-20">
              {achievements.map((achievement, index) => (
                <Card key={index} className="neo-card border-0 text-center hover:scale-105 transition-transform duration-300">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full mx-auto mb-4 flex items-center justify-center">
                      <achievement.icon className="w-8 h-8 text-background" />
                    </div>
                    <div className="text-2xl font-bold text-gradient mb-2">{achievement.label}</div>
                    <div className="text-sm text-muted-foreground">{achievement.description}</div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Tech Stack */}
            <div className="mb-20">
              <h3 className="text-3xl font-bold text-center mb-8">
                Tech Stack & <span className="text-gradient">Tools</span>
              </h3>
              <div className="flex flex-wrap gap-3 justify-center">
                {techStack.map((tech, index) => (
                  <span 
                    key={index}
                    className="px-4 py-2 glass-card rounded-full text-sm text-muted-foreground 
                             hover:bg-primary/20 hover:text-primary transition-all cursor-default
                             hover:scale-110 duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Timeline */}
            <div>
              <h3 className="text-3xl font-bold text-center mb-12">
                Career <span className="text-gradient">Timeline</span>
              </h3>
              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <div key={index} className="flex gap-6 items-start group">
                    <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-background font-bold group-hover:scale-110 transition-transform duration-300">
                      {item.year}
                    </div>
                    <div className="flex-1 glass-card p-6 rounded-lg group-hover:bg-primary/5 transition-colors duration-300">
                      <h4 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

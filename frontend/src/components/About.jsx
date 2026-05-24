import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Cloud, Brain, Database, Terminal, Globe } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { icon: Code2, label: 'Years Experience', value: '2+' },
    { icon: Terminal, label: 'Projects Completed', value: '10+' },
    { icon: Cloud, label: 'Cloud Certifications', value: 'AWS' },
    { icon: Brain, label: 'AI/ML Models', value: '5+' },
  ];

  const highlights = [
    {
      icon: Database,
      title: 'Backend Development',
      description: 'Expert in Django, Flask, FastAPI, and REST API design with JWT authentication and rate limiting.',
    },
    {
      icon: Brain,
      title: 'AI/ML Integration',
      description: 'Production experience with HuggingFace BART, GPT-4, Rasa NLU, and NLP pipelines.',
    },
    {
      icon: Cloud,
      title: 'Cloud & DevOps',
      description: 'AWS EC2 & S3, Docker containerization, Celery async processing, Redis caching.',
    },
    {
      icon: Globe,
      title: 'Government Projects',
      description: 'Delivered enterprise and government-grade software with compliance and auditability.',
    },
  ];

  return (
    <section id="about" className="relative section-padding" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary-400 text-sm font-medium uppercase tracking-wider">About Me</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-space mt-2">
            Professional <span className="gradient-text">Summary</span>
          </h2>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.3 + index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="glass-card p-6 text-center hover-lift"
            >
              <stat.icon className="w-8 h-8 text-primary-400 mx-auto mb-3" />
              <div className="text-3xl font-bold gradient-text mb-1">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bio & Highlights */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold mb-6 font-space">My Journey</h3>
            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>
                Results-driven Python Developer with 2+ years of hands-on experience designing, developing, 
                and deploying scalable web applications using Django and Flask.
              </p>
              <p>
                Demonstrated expertise in REST API development using Django REST Framework (DRF), AI/ML model 
                integration (HuggingFace BART, GPT-4, Rasa NLU), and database optimization across MySQL, 
                PostgreSQL, and SQL Server.
              </p>
              <p>
                Experienced in cloud infrastructure on AWS (EC2, S3), containerization with Docker, and 
                asynchronous processing via Celery and Redis. Consistently delivers government-grade and 
                enterprise-level software on schedule across the full SDLC.
              </p>
              <p>
                Currently working at <span className="text-primary-400 font-medium">Cyfuture India Pvt. Ltd.</span> as a 
                Python Developer, and previously at <span className="text-primary-400 font-medium">Chetu Inc.</span> as a 
                Software Engineer.
              </p>
            </div>
          </motion.div>

          <div className="space-y-6">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                whileHover={{ x: 10 }}
                className="glass-card p-6 flex gap-4 group cursor-pointer"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary-500/10 flex items-center justify-center group-hover:bg-primary-500/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1 group-hover:text-primary-400 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-400">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

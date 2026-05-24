import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Code2, Database, Cloud, Brain, GitBranch, Server, 
  Layout, Cpu, Workflow, Container, Cog, Shield 
} from 'lucide-react';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      title: 'Languages',
      icon: Code2,
      color: 'from-blue-500 to-cyan-500',
      skills: ['Python', 'SQL', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'jQuery'],
    },
    {
      title: 'Frameworks & Libraries',
      icon: Layout,
      color: 'from-green-500 to-emerald-500',
      skills: ['Django', 'Flask', 'Django REST Framework (DRF)', 'FastAPI', 'BeautifulSoup'],
    },
    {
      title: 'AI / ML & NLP',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      skills: ['HuggingFace BART', 'GPT-4', 'OpenAI API', 'Rasa NLU', 'NLP', 'Regex Pipelines', 'Prompt Engineering'],
    },
    {
      title: 'Databases',
      icon: Database,
      color: 'from-yellow-500 to-orange-500',
      skills: ['MySQL', 'PostgreSQL', 'SQL Server', 'Django ORM', 'Stored Procedures'],
    },
    {
      title: 'Cloud & DevOps',
      icon: Cloud,
      color: 'from-sky-500 to-blue-600',
      skills: ['AWS (EC2, S3)', 'Docker', 'Celery', 'Redis', 'Git', 'CI/CD Pipelines'],
    },
    {
      title: 'Architecture & Practices',
      icon: Server,
      color: 'from-red-500 to-rose-500',
      skills: ['OOP', 'DSA', 'Microservices', 'REST API Design', 'SDLC', 'Agile/Scrum', 'Data Normalization'],
    },
  ];

  const proficiencyLevels = [
    { skill: 'Python', level: 95 },
    { skill: 'Django', level: 90 },
    { skill: 'Flask', level: 88 },
    { skill: 'REST API Design', level: 92 },
    { skill: 'AI/ML Integration', level: 85 },
    { skill: 'AWS Cloud', level: 80 },
    { skill: 'Docker', level: 78 },
    { skill: 'PostgreSQL', level: 85 },
  ];

  return (
    <section id="skills" className="relative section-padding" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary-400 text-sm font-medium uppercase tracking-wider">Expertise</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-space mt-2">
            Technical <span className="gradient-text">Skills</span>
          </h2>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="glass-card p-6 hover-lift"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center mb-4`}>
                <category.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold font-space mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.1 }}
                    className="px-3 py-1.5 text-sm rounded-lg bg-white/5 text-gray-300 border border-white/10 hover:border-primary-500/50 hover:text-primary-400 transition-colors cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Proficiency Bars */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="glass-card p-8"
        >
          <h3 className="text-2xl font-bold font-space mb-8 text-center">
            Core <span className="gradient-text">Proficiency</span>
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {proficiencyLevels.map((item, index) => (
              <motion.div
                key={item.skill}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium text-gray-300">{item.skill}</span>
                  <span className="text-sm text-primary-400">{item.level}%</span>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${item.level}%` } : {}}
                    transition={{ duration: 1, delay: 0.6 + index * 0.1, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-primary-500 to-accent-cyan rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

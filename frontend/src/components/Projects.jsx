import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, Github, Layers, Shield, Bot, Database, Truck, Package } from 'lucide-react';
import TiltCard from './TiltCard';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeFilter, setActiveFilter] = useState('All');
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const filters = ['All', 'AI/ML', 'Government', 'Web App', 'Supply Chain'];

  const projects = [
    {
      title: 'Government Grievance Automation Portal',
      category: ['Government', 'AI/ML'],
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      glowColor: 'shadow-orange-500/20',
      tech: ['Python', 'Flask', 'SQL Server', 'HuggingFace BART', 'NLP', 'IMAP'],
      description: 'Production-ready grievance automation platform with IMAP-based email ingestion and intelligent NLP classification pipelines, reducing manual processing effort by 80%.',
      highlights: [
        'Implemented HuggingFace BART transformer model for automated email summarization',
        'Converted unstructured citizen complaints into structured, searchable SQL Server records',
        'Developed Flask web app with full record lifecycle management (intake, validation, assignment, status tracking)',
        'Role-based access control (RBAC) with audit trails',
        'Secured database interactions using parameterized queries and stored procedures',
      ],
      github: '#',
      live: '#',
    },
    {
      title: 'AI Chatbot System',
      category: ['AI/ML'],
      icon: Bot,
      color: 'from-accent-purple to-accent-pink',
      glowColor: 'shadow-purple-500/20',
      tech: ['Python', 'Flask', 'Rasa NLU', 'GPT-4 Mini', 'REST API', 'Docker'],
      description: 'AI-powered domain-specific chatbot combining Rasa NLU for intent recognition with GPT-4 Mini fallback for open-ended Q&A, achieving high accuracy on domain-specific queries.',
      highlights: [
        'Combined Rasa NLU for intent recognition with GPT-4 Mini fallback',
        'Built dynamic document upload module for continuous knowledge base updates',
        'Automated Rasa YAML config generation and retraining pipeline via Flask REST API',
        'Containerized with Docker for scalable deployment',
      ],
      github: '#',
      live: '#',
    },
    {
      title: 'Government Data Collection Application',
      category: ['Government', 'Web App'],
      icon: Database,
      color: 'from-primary-500 to-accent-cyan',
      glowColor: 'shadow-cyan-500/20',
      tech: ['Python', 'Django', 'MySQL', 'REST API', 'JavaScript'],
      description: 'Large-scale multi-ministry data collection platform integrating secure REST APIs from 10+ state and central government departments.',
      highlights: [
        'Integrated secure REST APIs from 10+ state and central government departments',
        'Full encryption and data validation pipelines',
        'Designed administrator training module with role-specific workflows',
        'Adopted by 100+ users across departments, improving onboarding time',
      ],
      github: '#',
      live: '#',
    },
    {
      title: 'Supply Chain Management System (SCMS)',
      category: ['Supply Chain', 'Web App'],
      icon: Truck,
      color: 'from-green-500 to-emerald-500',
      glowColor: 'shadow-green-500/20',
      tech: ['Django', 'PostgreSQL', 'AWS EC2 & S3', 'Docker', 'Celery', 'Redis'],
      description: 'End-to-end SCMS covering procurement, inventory management, distribution logistics, and POS transactions with async processing.',
      highlights: [
        'Developed end-to-end system covering procurement, inventory, distribution, and POS',
        'Integrated Celery + Redis for async processing, boosting system throughput',
        'Containerized with Docker and deployed on AWS EC2',
        'Static assets on S3 with auto-scalable, environment-consistent infrastructure',
        'Zero-downtime deployment strategy',
      ],
      github: '#',
      live: '#',
    },
    {
      title: 'Government Inventory Management System',
      category: ['Government', 'Web App'],
      icon: Package,
      color: 'from-yellow-500 to-amber-500',
      glowColor: 'shadow-yellow-500/20',
      tech: ['Python', 'Django', 'MySQL'],
      description: 'Enhanced Consumable Module with automated monthly consumption limits, configurable multi-level approval workflows, and real-time budget validation.',
      highlights: [
        'Automated monthly consumption limits with configurable thresholds',
        'Multi-level approval workflows with real-time budget validation',
        'Financial audit logs to prevent unauthorized transactions',
        'Real-time inventory tracking and reporting',
      ],
      github: '#',
      live: '#',
    },
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.category.includes(activeFilter));

  return (
    <section id="projects" className="relative section-padding" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.span 
            className="text-primary-400 text-sm font-medium uppercase tracking-wider inline-block"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Portfolio
          </motion.span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-space mt-2">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            A selection of my key projects showcasing expertise in Python development, 
            AI/ML integration, and government/enterprise solutions.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {filters.map((filter) => (
            <motion.button
              key={filter}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                activeFilter === filter
                  ? 'bg-gradient-to-r from-primary-600 to-accent-cyan text-white shadow-lg shadow-primary-500/25'
                  : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10'
              }`}
            >
              {filter}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <TiltCard>
                <div className={`glass-card overflow-hidden transition-all duration-500 ${
                  hoveredIndex === index ? `shadow-2xl ${project.glowColor}` : ''
                }`}>
                  {/* Card Header */}
                  <div className={`h-1.5 bg-gradient-to-r ${project.color}`} />

                  <div className="p-6 lg:p-8">
                    {/* Icon & Title */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-4">
                        <motion.div 
                          className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${project.color} flex items-center justify-center shadow-lg`}
                          whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                          transition={{ duration: 0.5 }}
                        >
                          <project.icon className="w-7 h-7 text-white" />
                        </motion.div>
                        <div>
                          <h3 className="text-xl font-bold font-space text-white group-hover:text-primary-400 transition-colors">
                            {project.title}
                          </h3>
                          <div className="flex gap-2 mt-1">
                            {project.category.map(cat => (
                              <motion.span 
                                key={cat} 
                                className="text-xs px-2 py-0.5 rounded-full bg-white/10 text-gray-400"
                                whileHover={{ scale: 1.1, backgroundColor: "rgba(14, 165, 233, 0.2)" }}
                              >
                                {cat}
                              </motion.span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech, i) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : {}}
                          transition={{ delay: 0.3 + i * 0.05 }}
                          whileHover={{ scale: 1.1, y: -2 }}
                          className="px-3 py-1 text-xs rounded-full bg-primary-500/10 text-primary-400 border border-primary-500/20"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>

                    {/* Highlights */}
                    <ul className="space-y-2 mb-6">
                      {project.highlights.slice(0, 3).map((highlight, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ delay: 0.4 + index * 0.1 + i * 0.1 }}
                          className="flex items-start gap-2 text-sm text-gray-500"
                        >
                          <motion.div
                            whileHover={{ scale: 1.3, rotate: 90 }}
                            transition={{ duration: 0.2 }}
                          >
                            <Layers size={14} className="text-primary-400 flex-shrink-0 mt-1" />
                          </motion.div>
                          <span>{highlight}</span>
                        </motion.li>
                      ))}
                    </ul>

                    {/* Actions */}
                    <div className="flex gap-4">
                      <motion.a
                        href={project.github}
                        whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 text-sm text-gray-300 transition-colors"
                      >
                        <Github size={16} />
                        Code
                      </motion.a>
                      <motion.a
                        href={project.live}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r ${project.color} text-sm text-white transition-all hover:shadow-lg`}
                      >
                        <ExternalLink size={16} />
                        Live Demo
                      </motion.a>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

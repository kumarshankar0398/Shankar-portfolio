import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Calendar, MapPin, ChevronRight } from 'lucide-react';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      company: 'Cyfuture India Pvt. Ltd.',
      location: 'Greater Noida',
      role: 'Python Developer',
      period: 'Oct 2024 – Present',
      type: 'Full-time',
      color: 'from-primary-500 to-accent-cyan',
      achievements: [
        'Independently designed and developed production-grade Python web applications using Django and Flask, reducing delivery timelines by 20% through disciplined SDLC practices and modular architecture.',
        'Automated repetitive business workflows using Python scripting, scheduled tasks, and Celery-based async queues with Redis broker, improving team operational efficiency by 30%.',
        'Integrated AI/ML models including HuggingFace BART and GPT-4 (OpenAI API) into production pipelines, enabling NLP-based automation, intelligent data extraction, and conversational AI features.',
        'Designed and maintained RESTful APIs using Django REST Framework (DRF) with JWT authentication, rate limiting, and versioning — consumed by internal dashboards and third-party clients.',
        'Optimized Python codebase following OOP principles, PEP8 standards, and DRY patterns; reduced average API response time and lowered memory footprint through query optimization and caching strategies.',
        'Managed complete project lifecycle — requirements analysis, system design, development, testing, deployment on AWS — with consistent on-time, on-budget delivery across concurrent projects.',
        'Collaborated with government stakeholders to translate complex compliance requirements into scalable technical solutions meeting security, performance, and auditability standards.',
      ],
    },
    {
      company: 'Chetu Inc.',
      location: 'Noida',
      role: 'Software Engineer',
      period: 'Dec 2021 – Sep 2022',
      type: 'Full-time',
      color: 'from-accent-purple to-accent-pink',
      achievements: [
        'Developed reusable, modular Python and Django components adopted across multiple product lines, reducing cross-project development effort by 25% and improving code maintainability.',
        'Built scalable backend systems with clean architecture ensuring long-term stability, ease of testing, and smooth extensibility for future feature development.',
        'Integrated multiple third-party REST APIs and SDKs into existing platforms, expanding product capabilities and improving end-user workflows.',
        'Participated in Agile/Scrum sprints alongside QA engineers, frontend developers, and product managers, consistently meeting sprint commitments and release deadlines.',
        'Conducted peer code reviews, enforced coding standards and best practices, and contributed to technical documentation and internal knowledge base.',
      ],
    },
  ];

  return (
    <section id="experience" className="relative section-padding" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary-400 text-sm font-medium uppercase tracking-wider">Career Path</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-space mt-2">
            Work <span className="gradient-text">Experience</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-accent-purple to-accent-pink lg:-translate-x-px" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
              className={`relative flex flex-col lg:flex-row gap-8 mb-16 ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-4 lg:left-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-primary-400 to-accent-cyan border-4 border-black lg:-translate-x-2 z-10 mt-6" />

              {/* Content Card */}
              <div className={`ml-12 lg:ml-0 lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="glass-card p-6 lg:p-8 hover-lift"
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${exp.color} text-white mb-3`}>
                        <Briefcase size={14} />
                        {exp.type}
                      </div>
                      <h3 className="text-xl font-bold font-space text-white">{exp.role}</h3>
                      <p className="text-primary-400 font-medium">{exp.company}</p>
                    </div>
                  </div>

                  {/* Meta */}
                  <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-6">
                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin size={14} />
                      {exp.location}
                    </span>
                  </div>

                  {/* Achievements */}
                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.4 + index * 0.2 + i * 0.1 }}
                        className="flex items-start gap-3 text-sm text-gray-400"
                      >
                        <ChevronRight size={16} className="text-primary-400 flex-shrink-0 mt-0.5" />
                        <span>{achievement}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </div>

              {/* Empty space for alternating layout */}
              <div className="hidden lg:block lg:w-1/2" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

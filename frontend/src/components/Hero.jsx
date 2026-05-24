import { motion } from 'framer-motion';
import { ArrowDown, MapPin, Mail, Phone, Sparkles } from 'lucide-react';
import ProfilePicture from './ProfilePicture';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.05, duration: 0.5, type: "spring" },
    }),
  };

  const name = "Shankar Kumar";

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center section-padding pt-32 lg:pt-20">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left order-2 lg:order-1"
          >
            <motion.div variants={itemVariants} className="mb-4">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-sm font-medium">
                <motion.span 
                  className="w-2 h-2 rounded-full bg-primary-400"
                  animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                Available for Opportunities
              </span>
            </motion.div>

            {/* Animated name letter by letter */}
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold font-space mb-4"
            >
              <span className="text-white">Hi, I&apos;m </span>
              <span className="inline-flex flex-wrap">
                {name.split("").map((char, i) => (
                  <motion.span
                    key={i}
                    custom={i}
                    variants={letterVariants}
                    initial="hidden"
                    animate="visible"
                    className={char === " " ? "w-3" : "gradient-text inline-block"}
                    whileHover={{ 
                      scale: 1.2, 
                      rotate: [0, -10, 10, 0],
                      transition: { duration: 0.3 }
                    }}
                  >
                    {char === " " ? " " : char}
                  </motion.span>
                ))}
              </span>
            </motion.h1>

            <motion.div variants={itemVariants} className="mb-4">
              <span className="inline-flex items-center gap-2 text-xl sm:text-2xl text-gray-400 font-light">
                <Sparkles className="w-5 h-5 text-primary-400" />
                Python Developer
                <motion.span
                  className="inline-block w-0.5 h-6 bg-primary-400"
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
              </span>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-gray-500 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed"
            >
              Specializing in <span className="text-primary-400">Django & Flask</span>,{' '}
              <span className="text-accent-purple">REST API</span> Development,{' '}
              <span className="text-accent-cyan">AI/ML Integration</span>, and{' '}
              <span className="text-accent-pink">AWS Cloud</span> Infrastructure. 
              Building scalable, intelligent web applications.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8">
              <motion.a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
                }}
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(14, 165, 233, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-primary-600 to-accent-cyan rounded-full font-medium text-white transition-all"
              >
                Get In Touch
              </motion.a>
              <motion.a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' });
                }}
                whileHover={{ scale: 1.05, borderColor: "rgba(255,255,255,0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border border-white/20 rounded-full font-medium text-white transition-all hover:bg-white/5"
              >
                View Projects
              </motion.a>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-6 justify-center lg:justify-start text-sm text-gray-400">
              <motion.span 
                className="flex items-center gap-2"
                whileHover={{ color: "#0ea5e9", x: 5 }}
              >
                <MapPin size={16} className="text-primary-400" />
                Greater Noida, Delhi NCR
              </motion.span>
              <motion.span 
                className="flex items-center gap-2"
                whileHover={{ color: "#0ea5e9", x: 5 }}
              >
                <Mail size={16} className="text-primary-400" />
                shankarkm1707@gmail.com
              </motion.span>
              <motion.span 
                className="flex items-center gap-2"
                whileHover={{ color: "#0ea5e9", x: 5 }}
              >
                <Phone size={16} className="text-primary-400" />
                +91-9650360813
              </motion.span>
            </motion.div>
          </motion.div>

          {/* Right Content - Portrait Profile Picture */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex justify-center lg:justify-end order-1 lg:order-2"
          >
            <ProfilePicture size="xl" />
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-gray-400"
          >
            <span className="text-sm">Scroll Down</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowDown size={20} />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Send, Mail, Phone, MapPin, Linkedin, Github, CheckCircle, AlertCircle } from 'lucide-react';
import axios from 'axios';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await axios.post('http://localhost:8000/api/contact', formData);
      setStatus({ type: 'success', message: response.data.message });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setStatus({ 
        type: 'error', 
        message: error.response?.data?.detail || 'Something went wrong. Please try again.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'shankarkm1707@gmail.com', href: 'mailto:shankarkm1707@gmail.com' },
    { icon: Phone, label: 'Phone', value: '+91-9650360813', href: 'tel:+919650360813' },
    { icon: MapPin, label: 'Location', value: 'Greater Noida, Delhi NCR', href: '#' },
  ];

  const socialLinks = [
    { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com' },
    { icon: Github, label: 'GitHub', href: 'https://github.com' },
  ];

  return (
    <section id="contact" className="relative section-padding" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary-400 text-sm font-medium uppercase tracking-wider">Get In Touch</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-space mt-2">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Have a project in mind or want to discuss opportunities? 
            I'd love to hear from you. Send me a message!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold font-space mb-6">Contact Information</h3>

            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4 p-4 glass-card hover-lift"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary-500/10 flex items-center justify-center">
                    <info.icon className="w-5 h-5 text-primary-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">{info.label}</p>
                    <p className="text-white font-medium">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Follow Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary-500/20 transition-colors"
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Portfolio Link */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6 }}
              className="mt-8 p-6 glass-card"
            >
              <p className="text-gray-400 text-sm mb-2">Portfolio Website</p>
              <a 
                href="https://shankar-kumarportfolio.netlify.app" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary-400 hover:text-primary-300 transition-colors"
              >
                shankar-kumarportfolio.netlify.app
              </a>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="glass-card p-8">
              <h3 className="text-2xl font-bold font-space mb-6">Send Message</h3>

              <div className="space-y-5">
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-2">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all"
                    placeholder="Project Inquiry"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                {/* Status Message */}
                {status.message && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex items-center gap-2 p-4 rounded-xl ${
                      status.type === 'success' ? 'bg-green-500/10 text-green-400' : 'bg-red-500/10 text-red-400'
                    }`}
                  >
                    {status.type === 'success' ? <CheckCircle size={18} /> : <AlertCircle size={18} />}
                    <span className="text-sm">{status.message}</span>
                  </motion.div>
                )}

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-600 to-accent-cyan rounded-xl font-medium text-white transition-all hover:shadow-lg hover:shadow-primary-500/25 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                    />
                  ) : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

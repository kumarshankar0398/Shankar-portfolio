import { motion } from 'framer-motion';
import { Download, FileText, Eye } from 'lucide-react';

const CVDownload = () => {
  return (
    <section className="relative section-padding">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card p-8 lg:p-12 text-center relative overflow-hidden"
        >
          {/* Background decoration */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-500 via-accent-purple to-accent-cyan" />

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-r from-primary-500 to-accent-cyan mb-6"
          >
            <FileText className="w-10 h-10 text-white" />
          </motion.div>

          <h2 className="text-3xl lg:text-4xl font-bold font-space mb-4">
            Download My <span className="gradient-text">Resume</span>
          </h2>

          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Get a detailed overview of my skills, experience, and projects. 
            Available in PDF format for your convenience.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <motion.a
              href="/cv.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary-600 to-accent-cyan rounded-xl font-medium text-white hover:shadow-lg hover:shadow-primary-500/25 transition-all"
            >
              <Download size={20} />
              Download CV
            </motion.a>

            <motion.a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 px-8 py-4 border border-white/20 hover:border-white/40 rounded-xl font-medium text-white hover:bg-white/5 transition-all"
            >
              <Eye size={20} />
              Preview CV
            </motion.a>
          </div>

          <div className="mt-8 flex items-center justify-center gap-6 text-sm text-gray-500">
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              Last Updated: May 2026
            </span>
            <span>•</span>
            <span>PDF Format</span>
            <span>•</span>
            <span>~2 MB</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CVDownload;

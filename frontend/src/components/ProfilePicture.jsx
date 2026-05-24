import { motion } from 'framer-motion';

const ProfilePicture = ({ size = 'large' }) => {
  const sizeClasses = {
    small: 'w-20 h-28',
    medium: 'w-32 h-44',
    large: 'w-48 h-64 lg:w-56 lg:h-72',
    xl: 'w-56 h-72 lg:w-72 lg:h-96',
  };

  return (
    <motion.div
      className="relative"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1, type: "spring", stiffness: 80 }}
    >
      {/* Outer decorative frame - animated border */}
      <motion.div
        className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-primary-500 via-accent-purple to-accent-pink opacity-60 blur-md"
        animate={{ 
          opacity: [0.4, 0.7, 0.4],
          scale: [1, 1.02, 1],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Main portrait frame */}
      <div className={`relative ${sizeClasses[size]} rounded-[1.5rem] overflow-hidden`}>

        {/* Animated gradient overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        />

        {/* Portrait image */}
        <motion.img
          src="/profile.jpg"
          alt="Shankar Kumar"
          className="w-full h-full object-cover object-top"
          initial={{ scale: 1.2, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          whileHover={{ scale: 1.05 }}
        />

        {/* Corner decorations */}
        <div className="absolute top-3 left-3 w-6 h-6 border-l-2 border-t-2 border-primary-400/60 rounded-tl-lg z-20" />
        <div className="absolute top-3 right-3 w-6 h-6 border-r-2 border-t-2 border-primary-400/60 rounded-tr-lg z-20" />
        <div className="absolute bottom-3 left-3 w-6 h-6 border-l-2 border-b-2 border-primary-400/60 rounded-bl-lg z-20" />
        <div className="absolute bottom-3 right-3 w-6 h-6 border-r-2 border-b-2 border-primary-400/60 rounded-br-lg z-20" />

        {/* Scan line effect */}
        <motion.div
          className="absolute left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary-400 to-transparent z-20"
          animate={{ top: ['0%', '100%', '0%'] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        />

        {/* Name badge at bottom */}
        <motion.div
          className="absolute bottom-4 left-4 right-4 z-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <div className="glass-card px-4 py-2 rounded-xl text-center">
            <p className="text-white font-semibold text-sm">Shankar Kumar</p>
            <p className="text-primary-400 text-xs">Python Developer</p>
          </div>
        </motion.div>
      </div>

      {/* Floating particles around portrait */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-primary-400/40"
          style={{
            top: `${20 + Math.random() * 60}%`,
            left: i % 2 === 0 ? '-12px' : 'calc(100% + 4px)',
          }}
          animate={{
            y: [0, -15, 0],
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            repeat: Infinity,
            delay: i * 0.3,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Rotating ring behind */}
      <motion.div
        className="absolute -inset-6 border border-dashed border-white/10 rounded-[2.5rem]"
        animate={{ rotate: -360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />

      {/* Status indicator */}
      <motion.div
        className="absolute top-4 right-4 w-4 h-4 bg-green-500 rounded-full border-2 border-black z-30"
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <motion.div
          className="absolute inset-0 bg-green-500 rounded-full"
          animate={{ scale: [1, 2], opacity: [0.5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.div>

      {/* Experience badge */}
      <motion.div
        className="absolute -top-3 -right-3 px-3 py-1.5 bg-gradient-to-r from-primary-600 to-accent-cyan rounded-full text-xs font-bold text-white shadow-lg z-30"
        animate={{ 
          y: [0, -4, 0],
          rotate: [0, 3, -3, 0],
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        2+ Years
      </motion.div>
    </motion.div>
  );
};

export default ProfilePicture;

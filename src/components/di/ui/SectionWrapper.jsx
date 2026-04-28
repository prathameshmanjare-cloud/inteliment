import { motion } from 'framer-motion';

const SectionWrapper = ({ children, className = '', id = '', dark = true }) => {
  return (
    <section
      id={id}
      className={`relative overflow-hidden ${dark ? 'bg-navy-900' : 'bg-white'} ${className}`}
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
        className="relative z-10"
      >
        {children}
      </motion.div>
    </section>
  );
};

export default SectionWrapper;

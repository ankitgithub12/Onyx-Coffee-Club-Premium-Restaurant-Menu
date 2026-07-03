import React from 'react';
import { motion } from 'framer-motion';

const SlideUp = ({ children, delay = 0, duration = 0.6, y = 24, className = '' }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y }}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default SlideUp;

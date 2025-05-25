import React from 'react';
import { motion } from 'framer-motion';

const BookCover: React.FC = () => {
  return (
    <motion.div 
      className="relative w-64 h-96 sm:w-80 sm:h-[30rem]"
      whileHover={{ 
        scale: 1.05,
        transition: { duration: 0.5 }
      }}
    >
      <img 
        src="/curled-crystal-cover.png" 
        alt="Curled Crystal Book Cover" 
        className="w-full h-full object-contain drop-shadow-2xl"
      />
    </motion.div>
  );
};

export default BookCover;
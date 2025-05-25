import React from 'react';
import { motion } from 'framer-motion';

const BookCover: React.FC = () => {
  return (
    <motion.div 
      className="relative w-64 h-96 sm:w-80 sm:h-[30rem]"
      whileHover={{ 
        rotateY: 15, 
        scale: 1.05,
        transition: { duration: 0.5 }
      }}
    >
      {/* Book spine */}
      <div className="absolute left-0 top-0 w-6 h-full bg-primary-700 rounded-l-sm shadow-inner transform origin-right"></div>
      
      {/* Book cover */}
      <div className="absolute left-5 top-0 w-full h-full bg-gradient-to-br from-primary-600 to-secondary-700 rounded-r-sm shadow-lg overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.2)_0%,_transparent_70%)]"></div>
          <div className="absolute top-[40%] left-[30%] w-40 h-40 rounded-full bg-white opacity-10"></div>
          <div className="absolute bottom-[20%] right-[20%] w-20 h-20 rounded-full bg-white opacity-10"></div>
        </div>
        
        {/* Title */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-white">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-center mb-4 text-white">Curled Crystal</h2>
          <div className="w-16 h-0.5 bg-white/70 mb-4"></div>
          <p className="text-sm sm:text-base font-light text-center text-white/90 mb-6">A journey through healing and self-discovery</p>
          <p className="text-lg sm:text-xl font-serif">S.Nimma</p>
        </div>
        
        {/* Embossed effect overlay */}
        <div className="absolute inset-0 shadow-[inset_0_0_20px_rgba(0,0,0,0.3)]"></div>
      </div>
      
      {/* Pages edge */}
      <div className="absolute left-5 top-0 w-full h-full bg-neutral-100 transform -translate-x-0.5 translate-y-0.5 rounded-r-sm"></div>
    </motion.div>
  );
};

export default BookCover;
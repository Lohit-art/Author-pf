import React from 'react';
import { motion } from 'framer-motion';

const Book: React.FC = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 1.2 }}
    className="relative min-h-screen flex flex-col justify-center"
  >
    <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-secondary-50 z-0"></div>
    <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3705944/pexels-photo-3705944.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')] bg-cover bg-center opacity-10 z-0"></div>

    <div className="container-custom pt-52 pb-16 flex flex-col md:flex-row items-center md:items-start justify-center gap-12 mx-auto relative z-10">
      {/* Book Cover */}
      <motion.img
        src="/ad_cover.png"
        alt="Curled Crystal Book Cover"
        className="w-96 h-auto rounded-lg shadow-lg mb-8 md:mb-0 md:mr-8"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
      />

      {/* Amazon link */}
      <motion.div
        className="flex flex-col items-start w-full md:w-auto"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.6, duration: 1 }}
      >
        <motion.h1
          className="text-4xl md:text-5xl font-semibold mb-8 text-center md:text-left"
          style={{ color: '#B76E79' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          Available on:
        </motion.h1>

        <motion.a
          href="https://amzn.in/d/0e38tJh4"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white rounded-xl shadow-medium flex items-center justify-center px-8 py-5 hover:shadow-lg transition-shadow duration-300"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          whileHover={{ scale: 1.06, boxShadow: '0 12px 32px 0 rgba(55,30,30,0.18)' }}
          whileTap={{ scale: 0.97 }}
          aria-label="Buy on Amazon Kindle"
        >
          <img
            src="/icons/amazon-kindle.svg"
            alt="Amazon Kindle"
            className="h-14 w-auto"
          />
        </motion.a>
      </motion.div>
    </div>
  </motion.div>
);

export default Book;

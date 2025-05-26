import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, BookOpen, Heart, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import BookCover from '../components/BookCover';

const Home: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-secondary-50 z-0"></div>
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3705944/pexels-photo-3705944.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')] bg-cover bg-center opacity-10 z-0"></div>
        
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="text-center lg:text-left"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 text-neutral-900">
                Mindscapes with <span className="text-primary-600">S.Nimma</span>
              </h1>
              <p className="text-lg md:text-xl text-neutral-700 mb-8 leading-relaxed">
                Welcome to the world of Curled Crystal. I'm Shanmukhee Nimma, the author of this poignant story inspired by true events, focusing on mental health, trauma, healing, and self-discovery. Through this narrative, I invite you to explore a journey that intertwines psychology and human connection, shedding light on the often misunderstood paths of mental health. Join me in awakening your quest for awareness and healing.
              </p>
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                <a href="#book-section" className="btn btn-primary">
                  Discover the Book
                </a>
                <Link to="/about" className="btn btn-outline">
                  About the Author
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="flex justify-center lg:justify-end"
            >
              <img
                src="/curled-crystal-cover.jpg"
                alt="Curled Crystal Book Cover"
                className="max-w-xs shadow-2xl drop-shadow-2xl rounded-lg"
                style={{ boxShadow: '0 12px 40px 0 rgba(55, 30, 30, 0.35), 0 2px 8px 0 rgba(0,0,0,0.10)' }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Book Section */}
      <section id="book-section" className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">
              <span className="relative inline-block">
                Curled Crystal
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-accent-400"></span>
              </span>
            </h2>
            <p className="text-lg text-neutral-700">
              A journey through the labyrinth of the mind, where healing begins with understanding.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="bg-neutral-50 p-6 rounded-lg shadow-soft flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                <Heart size={24} className="text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Emotional Healing</h3>
              <p className="text-neutral-700">
                Explore the complex journey of emotional healing through authentic experiences that resonate with readers.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="bg-neutral-50 p-6 rounded-lg shadow-soft flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mb-4">
                <BookOpen size={24} className="text-secondary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Mental Health Awareness</h3>
              <p className="text-neutral-700">
                Breaking stigmas and fostering understanding through storytelling that illuminates the complexity of mental health.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="bg-neutral-50 p-6 rounded-lg shadow-soft flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mb-4">
                <Sparkles size={24} className="text-accent-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Self-Discovery</h3>
              <p className="text-neutral-700">
                A transformative narrative that guides readers through their own journey of self-awareness and personal growth.
              </p>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7, duration: 0.7 }}
            className="mt-16 text-center"
          >
            <Link 
              to="/extract"
              className="btn btn-primary inline-flex items-center"
            >
              <BookOpen size={18} className="mr-2" />
              Read an Extract
            </Link>
          </motion.div>
        </div>
      </section>
      
      {/* Quote Section */}
      <section className="py-24 bg-primary-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center opacity-10 z-0"></div>
        
        <div className="container-custom relative z-10">
          <motion.blockquote
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mx-auto text-center"
          >
            <p className="text-2xl md:text-3xl font-serif italic mb-6 leading-relaxed">
              "Within the fragile curves of a crystal lies the strength to reflect light even in the darkest corners of our minds."
            </p>
            <footer className="text-primary-200">
              — From <cite>Curled Crystal</cite>
            </footer>
          </motion.blockquote>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">
              Join the Conversation
            </h2>
            <p className="text-lg text-neutral-700 mb-8">
              Mental health affects us all. Stay connected for upcoming events, discussions, and resources that continue the important conversation started in Curled Crystal.
            </p>
            <div className="max-w-md mx-auto flex flex-col items-center gap-3">
              <p className="text-lg text-primary-600 font-semibold mt-4">
                Community features are coming soon! Soon, you'll be able to join discussions, sign up for updates, and connect with others passionate about mental health and healing. Stay tuned!
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;
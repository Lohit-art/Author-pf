import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BookOpen, ArrowRight } from 'lucide-react';

const Blog: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-secondary-50 z-0"></div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-semibold mb-6 text-primary-700">
              Blog
            </h1>
            <p className="text-lg text-neutral-700 leading-relaxed">
              Essays, research, and reflections on psychology, culture, and the stories we carry.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Articles */}
      <section className="py-20 bg-white">
        <div className="container-custom max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <Link
              to="/blog/colonial-echoes"
              className="group block bg-neutral-50 rounded-lg shadow-soft hover:shadow-medium transition-shadow duration-300 overflow-hidden"
            >
              <div className="p-8 md:p-10">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xs font-semibold uppercase tracking-widest text-primary-600 bg-primary-50 px-3 py-1 rounded-full">
                    Research Essay
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-serif font-semibold text-neutral-900 mb-4 group-hover:text-primary-700 transition-colors duration-200 leading-snug">
                  Colonial Echoes: Intergenerational Psychological Impacts on Indian Society and Its Diaspora
                </h2>
                <p className="text-sm text-neutral-500 mb-4">
                  S. Nimma — Author, Independent Researcher and Masters student in Psychology
                </p>
                <p className="text-neutral-700 leading-relaxed mb-6">
                  This conceptual paper explores how two centuries of British colonial rule shaped enduring psychological patterns within Indian society and its diaspora. Drawing on theories of historical and intergenerational trauma, it examines how colonial subjugation cultivated silence, obedience, and moral restraint—behaviours that persist as cultural habits of endurance.
                </p>
                <span className="inline-flex items-center gap-2 text-primary-600 font-medium group-hover:gap-3 transition-all duration-200">
                  Read full article <ArrowRight size={16} />
                </span>
              </div>
            </Link>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Blog;

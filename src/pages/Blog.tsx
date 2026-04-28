import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface ArticleCardProps {
  to: string;
  tag: string;
  title: string;
  byline: string;
  excerpt: string;
  delay?: number;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ to, tag, title, byline, excerpt, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7, delay }}
  >
    <Link
      to={to}
      className="group block bg-neutral-50 rounded-lg shadow-soft hover:shadow-medium transition-shadow duration-300 overflow-hidden"
    >
      <div className="p-8 md:p-10">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary-600 bg-primary-50 px-3 py-1 rounded-full">
            {tag}
          </span>
        </div>
        <h2 className="text-2xl md:text-3xl font-serif font-semibold text-neutral-900 mb-4 group-hover:text-primary-700 transition-colors duration-200 leading-snug">
          {title}
        </h2>
        <p className="text-sm text-neutral-500 mb-4">{byline}</p>
        <p className="text-neutral-700 leading-relaxed mb-6">{excerpt}</p>
        <span className="inline-flex items-center gap-2 text-primary-600 font-medium group-hover:gap-3 transition-all duration-200">
          Read full article <ArrowRight size={16} />
        </span>
      </div>
    </Link>
  </motion.div>
);

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
        <div className="container-custom max-w-4xl mx-auto space-y-10">
          <ArticleCard
            to="/blog/self-gaslighting-framework"
            tag="Clinical Framework"
            title="A New Clinical Framework for Self-Gaslighting (IVT, ELC, RPM)"
            byline="S. Nimma — Individual Researcher, MSc Psychology (Student)"
            excerpt="A comprehensive two-chapter study proposing three novel pre-therapy models—Internal Verification Therapy (IVT), Ego-Logic Collapse (ELC), and the Radiant Presence Model (RPM)—alongside a full literature review of self-gaslighting's causes, types, and therapeutic implications across personality disorders and trauma profiles."
            delay={0}
          />
          <ArticleCard
            to="/blog/moral-anxiety"
            tag="Theoretical Model"
            title="From Moral Anxiety to Social Anxiety: The Evolution of Collective Gaslighting and Norm Adaptation Across Time"
            byline="S. Nimma — Author, Independent Researcher and Masters student in Psychology"
            excerpt="A revised theoretical model tracing how Freud's moral anxiety was never purely internal—from witch trials and patriarchal institutionalisation to modern beauty standards and influencer culture, the same cycle of collective gaslighting persists, simply shifting form with each era."
            delay={0.15}
          />
          <ArticleCard
            to="/blog/colonial-echoes"
            tag="Research Essay"
            title="Colonial Echoes: Intergenerational Psychological Impacts on Indian Society and Its Diaspora"
            byline="S. Nimma — Author, Independent Researcher and Masters student in Psychology"
            excerpt="This conceptual paper explores how two centuries of British colonial rule shaped enduring psychological patterns within Indian society and its diaspora. Drawing on theories of historical and intergenerational trauma, it examines how colonial subjugation cultivated silence, obedience, and moral restraint—behaviours that persist as cultural habits of endurance."
            delay={0.15}
          />
        </div>
      </section>
    </motion.div>
  );
};

export default Blog;

import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Award, Coffee } from 'lucide-react';

const About: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary-50 to-primary-50 z-0"></div>
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/6969866/pexels-photo-6969866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center opacity-10 z-0"></div>
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-semibold mb-6 text-neutral-900">
              About <span className="text-primary-600">Shanmukhee Nimma</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Biography Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="aspect-[3/4] bg-neutral-200 rounded-lg overflow-hidden shadow-medium">
                <img 
                  src="/author-image.jpg"
                  alt="Shanmukhee Nimma" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary-100 rounded-full z-0"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-secondary-100 rounded-full z-0"></div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="prose text-neutral-700">
                <p>
                  I am based in Melbourne working as a Business Analyst with a Master of Information Systems from Australia. I was brought up in India and I spent most of my life skeptical of psychology— considering it no more than a societal illusion.
                </p>
                <p>
                  However, Life has a way of reshaping our beliefs, and my personal battle with depression led me to therapy out of sheer curiosity. To my surprise, therapy was transformative and sparked my genuine interest in mental health. This experience motivated me to embark on a new academic journey, pursuing a Master's in Psychology to deepen my understanding and help others.
                </p>
                <p>
                  During this time, I had the unique opportunity to form deep connection with two remarkable women— one living with Bipolar the other with Borderline Personality Disorder and Bipolar. Their real-life stories, struggles and resilience opened a new dimension of understanding for me.
                </p>
                <p>
                  Curled Crystal was born from these true encounters. It reflects the complexity of psychological disorders, offering an in-depth exploration of coping mechanisms, understanding triggers, navigating manipulation, healing trauma and fostering empathy on self and others— all through immersive storytelling, direct dialogues to understand manipulation and introspective monologues.
                </p>
                <p>
                  I believe that true healing begins with awareness.
                </p>
                <p>
                  Curled Crystal is not a story— it is a journey of transformation, courage and emotional discovery.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 bg-neutral-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <h2 className="text-3xl font-semibold mb-6 text-neutral-900">
              Writing Philosophy
            </h2>
            <p className="text-lg text-neutral-700">
              The principles that guide my storytelling and shape my narrative voice.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="bg-white p-6 rounded-lg shadow-soft"
            >
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                <BookOpen size={20} className="text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Authentic Narratives</h3>
              <p className="text-neutral-700">
                I believe in the power of authentic storytelling that doesn't shy away from difficult truths but presents them with compassion and nuance.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="bg-white p-6 rounded-lg shadow-soft"
            >
              <div className="w-12 h-12 bg-secondary-100 rounded-full flex items-center justify-center mb-4">
                <Award size={20} className="text-secondary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Empathetic Exploration</h3>
              <p className="text-neutral-700">
                My work aims to create empathy by inviting readers to explore diverse perspectives and emotional landscapes with an open heart.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="bg-white p-6 rounded-lg shadow-soft"
            >
              <div className="w-12 h-12 bg-accent-100 rounded-full flex items-center justify-center mb-4">
                <Coffee size={20} className="text-accent-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Healing Through Words</h3>
              <p className="text-neutral-700">
                I view writing as both an art and a healing practice, with the potential to transform not only readers but the writer as well.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-primary-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-semibold mb-6 text-neutral-900">
              Connect with S.Nimma
            </h2>
            <p className="text-lg text-neutral-700 mb-8">
              For speaking engagements, workshops, or just to share your thoughts on "Curled Crystal"
            </p>
            <a 
              href="mailto:contact@snimma.com" 
              className="btn btn-primary inline-flex items-center"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default About;
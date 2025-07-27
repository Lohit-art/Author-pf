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
            <h1 className="text-4xl md:text-5xl font-semibold mb-6" style={{ color: '#B76E79' }}>
              About <span style={{ color: '#E9AFA3' }}>Shanmukhee Nimma</span>
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
              <div className="aspect-[3/4] bg-neutral-200 rounded-lg overflow-hidden shadow-medium -mt-24">
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
              <div className="prose" style={{ color: '#355C4A' }}>
                <p>
                  I'm S. Nimma, based in Melbourne, working as a Business Analyst with a Master's in Information Systems from Australia. Raised in India, I was drawn to community service early in life—but wasn't allowed to get involved due to safety concerns, taboos, and societal fears around women engaging in emotional or vulnerable work.
                </p>
                <p>
                  After moving to Australia, that interest finally found space to grow. I began volunteering with Vinnies, a faith-based organisation in the Catholic tradition, where I was introduced to the emotional undercurrents of people's lives—poverty, loneliness, mental struggle. It challenged everything I once believed. I had previously dismissed psychology as a money-making illusion, but these encounters showed me that beneath every behavior was an unmet need, a hidden wound.
                </p>
                <p>
                  Driven by this insight, I pursued a Master's in Psychology. While studying, I also served as an active listener for survivors of sexual assault and people facing mental health crises. It was during this time that I formed deep, life-altering bonds with two women—one living with bipolar disorder, the other with both borderline personality disorder and bipolar. Their resilience and contradictions became the emotional core of Curled Crystal.
                </p>
                <p>
                  A fictional but emotionally rooted novel, Curled Crystal is told through a fragmented, non-linear, stream-of-consciousness style that mirrors the experience of living with trauma and psychological disorders. It explores coping, manipulation, emotional loops, and the yearning to heal—even when healing feels out of reach.
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
            <div className="flex justify-center gap-8 mt-6">
              {/* X (Twitter) */}
              <motion.a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
                whileHover={{ scale: 1.18 }}
                transition={{ duration: 0.2 }}
                style={{ display: 'inline-block' }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#592e2e" viewBox="0 0 16 16">
                  <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
                </svg>
              </motion.a>
              {/* Instagram */}
              <motion.a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                whileHover={{ scale: 1.18 }}
                transition={{ duration: 0.2 }}
                style={{ display: 'inline-block' }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#592e2e" viewBox="0 0 16 16">
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
                </svg>
              </motion.a>
              {/* LinkedIn */}
              <motion.a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                whileHover={{ scale: 1.18 }}
                transition={{ duration: 0.2 }}
                style={{ display: 'inline-block' }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#592e2e" viewBox="0 0 16 16">
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                </svg>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default About;
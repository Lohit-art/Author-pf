import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const BlogPostMoralAnxiety: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero */}
      <section className="pt-32 pb-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-secondary-50 z-0"></div>
        <div className="container-custom relative z-10 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-800 transition-colors mb-8 text-sm font-medium"
            >
              <ArrowLeft size={16} /> Back to Blog
            </Link>
            <div className="mb-4">
              <span className="text-xs font-semibold uppercase tracking-widest text-primary-600 bg-primary-100 px-3 py-1 rounded-full">
                Conceptual Framework
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-neutral-900 leading-tight mb-6">
              From Moral Anxiety to Social Anxiety: The Evolution of Collective Gaslighting and Norm Adaptation Across Time
            </h1>
            <p className="text-neutral-600 text-base leading-relaxed">
              <span className="font-semibold text-neutral-800">S. Nimma</span>
              <br />
              <span className="italic">Author, Independent Researcher and Masters student in Psychology</span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Article Body */}
      <section className="py-16 bg-white">
        <div className="container-custom max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="prose-article"
          >

            {/* Revised Theoretical Model */}
            <ArticleSection title="Revised Theoretical Model: The Weaving of Moral and Social Anxiety">
              <p>
                Freud's concept of moral anxiety as fear of the superego's punishment can no longer be seen as a purely internal moral mechanism. Even in religious or early patriarchal societies, moral fear was always socially manufactured as a product of gaslighting through institutions such as the Church, monarchy, or family. The moment one's deviation was discovered, the punishment was external: exile, shame, or execution. When it remained hidden, the punishment became internal: self-gaslighting and guilt.
              </p>
              <p className="mt-4">
                Historically, moral anxiety was defined by Freud (1930) as the internal fear of the superego's punishment. Yet, looking back at history, we see that moral fear was always socially manufactured. Whether it was the "witch trials" of the religious era or the "institutionalization of wives" in the 19th century, society defined "goodness" through the lens of order and obedience.
              </p>
              <p className="mt-4">
                As Foucault (1977) argued, social surveillance eventually becomes self-policing. When deviation is discovered, the punishment is external: shame or exile. When it remains hidden, it becomes internal: self-gaslighting and guilt. Thus, moral anxiety is essentially social anxiety woven inward—the primal fear of losing one's place in the collective.
              </p>
            </ArticleSection>

            <Divider />

            {/* Modern Altar */}
            <ArticleSection title="The Modern Altar: Fitness, Food, and Fairness">
              <p>
                Today, the "Church" has been replaced by productivity and beauty cultures. We see this in several domains:
              </p>
              <div className="mt-5 space-y-4">
                <BulletPoint title="The Discipline of Diet">
                  Obsessions with protein, calorie checks, and keto diets are treated as markers of moral worth. Failing to adhere to these standards is no longer just "unhealthy"; it is framed as a lack of discipline or a failure of character.
                </BulletPoint>
                <BulletPoint title='The Surgical "Fix"'>
                  Cosmetic procedures and plastic surgeries serve as tools to avoid the "social threat" of being deemed unlovely or unworthy. In many Asian societies, for instance, skin fairness is moralized as a sign of discipline and employability (Hunter, 2011).
                </BulletPoint>
                <BulletPoint title="The Self-Love Paradox">
                  Even movements meant to liberate us, like "body positivity," risk becoming new moral laws. If you don't "love yourself" or achieve an "empowered" body, you are once again "doing something wrong."
                </BulletPoint>
              </div>
            </ArticleSection>

            <Divider />

            {/* Cycle */}
            <ArticleSection title="The Cycle of the New Law">
              <p>
                The cycle only breaks when an influential figure or a collective movement initiates a "rebellion." We see this when a public figure rejects rigid norms and preaches a "new law"—such as "ancestral eating" or the acceptance of extra weight. However, the theory suggests that as these rebellions become trends, they eventually normalize into a new morality, and the cycle of anxiety restarts.
              </p>
            </ArticleSection>

            <Divider />

            {/* Synthesis */}
            <ArticleSection title="Synthesis: The Persistence of Fear">
              <p>
                From witch burnings to whitening creams, the emotional current remains the same: the fear of being abandoned or unloved is moralized into the cultural definition of "goodness." Moral anxiety and social anxiety are two sides of the same coin—tools of collective survival and control that simply shift form as we evolve.
              </p>
              <div className="mt-6 p-6 bg-primary-50 border-l-4 border-primary-400 rounded-r-lg">
                <p className="text-neutral-800 leading-relaxed italic font-serif text-lg">
                  "What Freud (1930) called moral anxiety is essentially social anxiety woven inward — the fear of losing one's place in the collective."
                </p>
              </div>
              <p className="mt-6">
                This dynamic can be traced across eras and movements.
              </p>
            </ArticleSection>

            <Divider />

            {/* Historical Continuity Table */}
            <ArticleSection title="Historical Continuity of the Weave">
              <div className="overflow-x-auto rounded-lg shadow-soft border border-neutral-200 mb-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-primary-700 text-white">
                      <th className="text-left px-4 py-3 font-semibold">Era / Example</th>
                      <th className="text-left px-4 py-3 font-semibold">Mechanism</th>
                      <th className="text-left px-4 py-3 font-semibold">Anxiety Type</th>
                      <th className="text-left px-4 py-3 font-semibold">Process</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        era: 'Religious Era (Europe) – witch trials, heresy',
                        mechanism: 'Deviation from Church order = evil',
                        anxiety: 'Moral anxiety → social punishment',
                        process: 'Fear of divine judgment was fear of community exile; moral and social anxieties fused.',
                      },
                      {
                        era: 'Patriarchal Era (19th–20th century) – institutionalisation of wives',
                        mechanism: 'Disobedience or hysteria = immoral woman',
                        anxiety: 'Moral anxiety → psychiatric gaslighting',
                        process: 'Patriarchal morality externalised via medicine; moral disobedience pathologised.',
                      },
                      {
                        era: 'Feminist & Civil Rights Movements',
                        mechanism: 'Early rebellion = "immoral"',
                        anxiety: 'Social anxiety → collective moral shift',
                        process: 'Once condemned, later reframed as virtue and right. Feminism broke gaslighting cycle.',
                      },
                      {
                        era: 'Modern Beauty & Productivity Cultures',
                        mechanism: 'Appearance/performance = worth',
                        anxiety: 'Moral + social anxiety (inseparable)',
                        process: 'Being fair, thin, curvy, or "productive" equated with moral worth; self-gaslighting reinforced by media.',
                      },
                    ].map((row, i) => (
                      <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-primary-50'}>
                        <td className="px-4 py-3 font-medium text-neutral-900">{row.era}</td>
                        <td className="px-4 py-3 text-neutral-700">{row.mechanism}</td>
                        <td className="px-4 py-3 text-neutral-700">{row.anxiety}</td>
                        <td className="px-4 py-3 text-neutral-600 text-xs leading-relaxed">{row.process}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </ArticleSection>

            <Divider />

            {/* The Mechanism */}
            <ArticleSection title="The Mechanism">
              <ol className="space-y-3 pl-2">
                {[
                  { n: '1', label: 'External gaslighting', text: 'Society defines "goodness" or "worthiness."' },
                  { n: '2', label: 'Internalisation', text: 'Individuals self-gaslight, believing deviation = failure and failure means social rejection.' },
                  { n: '3', label: 'Fear of abandonment', text: 'The social threat is disguised as moral failure.' },
                  { n: '4', label: 'Collective rebellion', text: 'Someone (often influential) breaks the cycle.' },
                  { n: '5', label: 'Normalization', text: 'Rebellion becomes trend → new morality emerges.' },
                ].map(({ n, label, text }) => (
                  <li key={n} className="flex gap-4">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary-600 text-white text-sm flex items-center justify-center font-semibold">
                      {n}
                    </span>
                    <p className="text-neutral-700 pt-0.5">
                      <span className="font-semibold text-neutral-800">{label}:</span> {text}
                    </p>
                  </li>
                ))}
              </ol>
            </ArticleSection>

            <Divider />

            {/* Modern Reflections */}
            <ArticleSection title="Modern Reflections">
              <p>
                In many Asian societies, fairness is moralised: lighter skin signals discipline, modernity, and employability (Hunter, 2011). Failing to appear fair equates to moral failure—not a good daughter, not successful enough.
              </p>
              <p className="mt-4">
                In Western cultures, curviness and sexuality—which were once shamed—are now moralized as signs of confidence and empowerment (Jones, 2019). Yet the demand to conform to this "empowered" body creates new anxiety: a moralised version of social fear.
              </p>
              <p className="mt-4">
                Body positivity and self-love movements began as rebellions against rigid beauty norms but now risk becoming new ideals: "If you don't love yourself, you're doing something wrong." Rebellion becomes norm, and the cycle restarts.
              </p>
            </ArticleSection>

            <Divider />

            {/* The Influencer */}
            <ArticleSection title="The Influencer as the New Architect of Morality: The Taming of the Mind">
              <p>
                Figures like Kim Kardashian (body aesthetics), Andrew Tate (definitions of masculinity/productivity), and various musical leads act as the primary engines of "External Gaslighting." They define what "worthiness" looks like in real-time.
              </p>
              <div className="mt-5 space-y-4">
                <BulletPoint title="The Kardashian Effect">
                  Once-rebellious aesthetics are moralized as signs of "confidence" and "empowerment," creating a new demand to conform to avoid social rejection.
                </BulletPoint>
                <BulletPoint title='The "Tate" Productivity Doctrine'>
                  By framing specific lifestyles as the only way to be "successful" or "masculine," these influencers trigger a moralized social fear in those who don't follow, making them feel like they are failing at a fundamental, moral level—resulting in being left out eventually.
                </BulletPoint>
              </div>

              <h3 className="article-subheading mt-8">The Idealization Trap</h3>
              <p>
                What starts as a "fresh" or "rebellious" concept—like a specific workout routine, a cosmetic procedure, or a mindset—would slowly become idealized. At this point, the mechanism of Internalization takes over.
              </p>
              <div className="mt-4 space-y-3">
                <BulletPoint title="Self-gaslighting">
                  Individuals begin to self-gaslight, believing that their natural body or current mental state is a failure.
                </BulletPoint>
                <BulletPoint title="Adoption of the new norm">
                  To avoid the "external punishment" of being left out or shamed by the digital collective, the individual adopts the new norm both physically and mentally.
                </BulletPoint>
              </div>
            </ArticleSection>

            <Divider />

            {/* Final Synthesis */}
            <ArticleSection title="Synthesis">
              <p>
                From witch burnings to whitening creams, from "mad wives" to "self-love" slogans, the same emotional current persists:
              </p>
              <div className="my-6 p-6 bg-primary-50 border-l-4 border-primary-400 rounded-r-lg">
                <p className="text-neutral-800 leading-relaxed italic font-serif text-lg">
                  The fear of being abandoned, unworthy, or unloved is moralised into culture's definition of goodness.
                </p>
              </div>
              <p>
                Moral anxiety is simply social anxiety moralized—both are tools of collective survival and control, shifting form with each social evolution. Once the rebellion becomes the "new law," it loses its rebellious edge and becomes the very tool of control it sought to replace. The fear of being "unworthy" is simply re-mapped onto the new trend.
              </p>
            </ArticleSection>

            <Divider />

            {/* References */}
            <ArticleSection title="References">
              <div className="space-y-2 text-sm text-neutral-700 leading-relaxed">
                {[
                  'Ehrenreich, B. (2009). Bright-sided: How positive thinking is undermining America. Metropolitan Books.',
                  'Foucault, M. (1977). Discipline and punish: The birth of the prison. Pantheon.',
                  'Freud, S. (1930). Civilization and its discontents. Hogarth Press.',
                  'Gill, R. (2007). Postfeminist therapeutic culture: Cosmetic surgery and the libidinal economy of self-improvement. European Journal of Cultural Studies, 10(2), 147–175.',
                  'Hunter, M. L. (2011). Buying racial capital: Skin-bleaching and cosmetic surgery in a globalized world. The Journal of Pan African Studies, 4(4), 142–164.',
                  'Jones, M. (2019). The Kardashian effect: Body image and the media. Routledge.',
                ].map((ref, i) => (
                  <p key={i} className="pl-6 -indent-6">{ref}</p>
                ))}
              </div>
            </ArticleSection>

          </motion.div>
        </div>
      </section>

      {/* Back to Blog */}
      <section className="py-12 bg-primary-50">
        <div className="container-custom max-w-3xl mx-auto text-center">
          <Link to="/blog" className="btn btn-outline inline-flex items-center gap-2">
            <ArrowLeft size={16} /> Back to Blog
          </Link>
        </div>
      </section>
    </motion.div>
  );
};

/* ── Helpers ── */

const ArticleSection: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="mb-10"
  >
    <h2 className="article-section-title">{title}</h2>
    <div className="article-body">{children}</div>
  </motion.div>
);

const BulletPoint: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="flex gap-3">
    <span className="mt-1.5 flex-shrink-0 w-2 h-2 rounded-full bg-primary-500"></span>
    <div>
      <span className="font-semibold text-neutral-800">{title}: </span>
      <span className="text-neutral-700">{children}</span>
    </div>
  </div>
);

const Divider: React.FC = () => (
  <hr className="my-10 border-neutral-200" />
);

export default BlogPostMoralAnxiety;

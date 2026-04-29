import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

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

const Divider: React.FC = () => <hr className="my-10 border-neutral-200" />;

/* ── Main Component ── */

const BlogPostBlackWhite: React.FC = () => {
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
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-neutral-900 leading-tight mb-4">
              Black-and-White Thinking as Survival Strategy
            </h1>
            <p className="text-lg text-neutral-600 italic font-serif mb-6">
              What if black-and-white thinking is not a defence mechanism but a survival strategy?
            </p>
            <p className="text-neutral-600 text-base leading-relaxed">
              <span className="font-semibold text-neutral-800">S. Nimma</span>
              <br />
              <span className="italic">Student in Psychology and Cognitive Trauma Studies</span>
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

            {/* Abstract */}
            <ArticleSection title="Abstract">
              <p>
                This conceptual paper challenges the traditional classification of black-and-white thinking, commonly termed splitting, as a pathological defense mechanism in Borderline Personality Disorder (BPD) and Post-Traumatic Stress Disorder (PTSD). It proposes instead that dichotomous thinking functions as an adaptive survival strategy conditioned by early invalidation, social gaslighting, and relational unpredictability. Drawing from trauma theory (Herman, 1992; van der Kolk, 2014), dialectical behavior frameworks (Linehan, 1993), and schema theory (Young et al., 2003), this model argues that black-and-white cognition simplifies perception under emotional overload, restoring relational and psychological safety. By reframing this cognitive style as adaptive rather than defective, this paper promotes a compassionate, context-sensitive understanding of trauma-related cognition and its implications for therapy and social perception.
              </p>
            </ArticleSection>

            <Divider />

            {/* Introduction */}
            <ArticleSection title="Introduction">
              <p>
                Traditional psychology conceptualizes black-and-white thinking, or splitting, as a primitive defense mechanism—an indicator of cognitive immaturity or emotional dysregulation (Freud, 1936; Kernberg, 1975). In Borderline Personality Disorder (BPD) and Post-Traumatic Stress Disorder (PTSD), this binary style of thinking has often been described as pathological. Yet, trauma research suggests that the human mind adapts to unsafe environments by developing survival-based heuristics to manage ambiguity and threat (Herman, 1992; van der Kolk, 2014). This paper reinterprets black-and-white thinking as a contextually adaptive, relationally informed survival strategy rather than a cognitive flaw.
              </p>
            </ArticleSection>

            <Divider />

            {/* Historical Context */}
            <ArticleSection title="Historical Context">
              <p>
                The psychoanalytic tradition, led by Anna Freud (1936), described defense mechanisms as unconscious strategies for protecting the ego from anxiety. Otto Kernberg (1975) later refined this by identifying splitting as central to borderline pathology—a division of good and bad self-objects to manage ambivalence. However, trauma theorists such as Herman (1992) and van der Kolk (2014) introduced a paradigm shift, viewing emotional dysregulation as an adaptive response to prolonged threat. Within this framework, splitting can be reinterpreted not as regression but as functional adaptation to relational instability.
              </p>
            </ArticleSection>

            <Divider />

            {/* Theoretical Foundations */}
            <ArticleSection title="Theoretical Foundations">
              <p>
                Marsha Linehan's (1993) biosocial theory of BPD attributes emotional instability to chronic invalidation during development. Similarly, schema therapy (Young et al., 2003) posits that rigid schemas form when individuals internalize conditional acceptance and self-punishing rules. These frameworks align with the proposed model: black-and-white thinking is a learned survival mechanism that simplifies social complexity to maintain psychological safety. When ambiguity historically predicted rejection or punishment, dichotomous categorization serves as an early-warning system.
              </p>
            </ArticleSection>

            <Divider />

            {/* Proposed Conceptual Framework */}
            <ArticleSection title="Proposed Conceptual Framework">
              <p>
                This framework integrates three domains: environmental conditioning, neurobiological vigilance, and adaptive cognition. Early exposure to gaslighting and invalidation teaches individuals that safety depends on certainty and conformity. Trauma heightens neural sensitivity to threat, increasing perceptual salience of ambiguous cues (van der Kolk, 2014). Cognitively, dichotomous thinking functions as a stabilizing mechanism: it restores predictability in relational contexts that once felt unsafe. Thus, black-and-white thinking is not a distortion but a self-regulatory adaptation that reduces emotional overload.
              </p>
            </ArticleSection>

            <Divider />

            {/* The Relational Switch */}
            <ArticleSection title="The Relational Switch Mechanism">
              <p>
                A defining feature of this model is the <em>acceptance–rejection switch</em>. When cues signal acceptance, individuals operate through the "white lens"—engaging trust, nuance, and cooperation. When subtle cues of rejection appear, the "black lens" activates, triggering withdrawal, devaluation, or defensive cognition. This switch functions as a neurobiological safety circuit. What has been clinically interpreted as volatility may, in fact, be a dynamic survival response.
              </p>
            </ArticleSection>

            <Divider />

            {/* Adaptive Cognitive Cycle Table */}
            <ArticleSection title="The Adaptive Cognitive Cycle of Relational Survival">
              <div className="overflow-x-auto rounded-lg shadow-soft border border-neutral-200 mb-4">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-primary-700 text-white">
                      <th className="text-left px-4 py-3 font-semibold">Environmental State</th>
                      <th className="text-left px-4 py-3 font-semibold">Cognitive &amp; Emotional Process</th>
                      <th className="text-left px-4 py-3 font-semibold">Survival Function</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      [
                        'Early Invalidation / Gaslighting',
                        'Development of rigid rules for "acceptable" behavior to mitigate fear of abandonment.',
                        'Establishes a binary self-concept and conditional safety rules to navigate an unpredictable environment.',
                      ],
                      [
                        'Internal Rule Violation',
                        'Self-gaslighting, obsessive thinking, and rumination when internal structures are breached.',
                        'Serves as a self-regulatory attempt to maintain predictability and avoid perceived punishment.',
                      ],
                      [
                        'Safe & Affectionate Environment',
                        'Activation of the "White Lens"; space to accept oneself and others outside of rigid structures.',
                        'Engages trust, nuance, and cooperation while maintaining social acceptance to prevent abandonment.',
                      ],
                      [
                        'Perception of Grey (Baseline)',
                        'Heightened observation and detection of minor social cues through a nuanced, complex perspective.',
                        'Uses trauma-induced vigilance to monitor relational safety and guarantee continued acceptance.',
                      ],
                      [
                        'Trigger: Sign of Rejection',
                        'Conscious, emotional overload where negative cues are highlighted and re-processed.',
                        'Triggers a neurobiological safety circuit that shifts perception to simplify a perceived threat.',
                      ],
                      [
                        'Result: Activation of "Black Lens"',
                        'Shift from grey to completely black; decision to "abandon before being abandoned".',
                        'A dynamic survival response that uses devaluation or withdrawal to protect the self from relational trauma.',
                      ],
                    ].map((row, i) => (
                      <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-primary-50'}>
                        <td className="px-4 py-3 font-medium text-neutral-900 leading-snug">{row[0]}</td>
                        <td className="px-4 py-3 text-neutral-700 leading-snug">{row[1]}</td>
                        <td className="px-4 py-3 text-neutral-700 leading-snug">{row[2]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </ArticleSection>

            <Divider />

            {/* Therapeutic and Social Implications */}
            <ArticleSection title="Therapeutic and Social Implications">
              <p>
                In therapy, behaviors such as lying, withdrawal, or hostility often reflect perceived relational threat rather than manipulation—for instance, picking up on a therapist's frown as disappointment, then choosing to lie by performing improvement, or deciding to stop therapy entirely. Understanding these responses as adaptive can transform therapeutic alliances. Therapists who emphasize co-regulation, consistency, and validation can help clients reframe their cognition as protective rather than pathological (Linehan, 1993; Herman, 2015). Socially, recognizing black-and-white thinking as a contextual adaptation challenges stigmatization and promotes empathy toward individuals navigating trauma-induced relational schemas.
              </p>
            </ArticleSection>

            <Divider />

            {/* Future Directions */}
            <ArticleSection title="Future Directions">
              <p>
                Empirical research could test this conceptual model through neuroimaging of relational threat processing or longitudinal observation of trauma survivors in therapy. Integration with attachment theory and affective neuroscience could further clarify how dichotomous cognition interacts with safety appraisal networks. Future studies should explore whether fostering relational consistency can gradually restore tolerance for ambiguity.
              </p>
            </ArticleSection>

            <Divider />

            {/* Conclusion */}
            <ArticleSection title="Conclusion">
              <p>
                Black-and-white thinking, long viewed as a hallmark of pathology, may represent an evolved cognitive algorithm for surviving unpredictability. Reframing it as adaptive invites a paradigm shift—from diagnosing dysfunction to understanding design. By situating this cognition within trauma-informed and relationally sensitive frameworks, psychology can move toward more compassionate interpretations of human survival intelligence.
              </p>
            </ArticleSection>

            <Divider />

            {/* References */}
            <ArticleSection title="References">
              <div className="space-y-2 text-sm text-neutral-700 leading-relaxed">
                {[
                  'Freud, A. (1936). The ego and the mechanisms of defence. Hogarth Press.',
                  'Herman, J. L. (1992). Trauma and recovery. Basic Books.',
                  'Herman, J. L. (2015). Trauma and recovery: The aftermath of violence—from domestic abuse to political terror (Rev. ed.). Basic Books.',
                  'Kernberg, O. F. (1975). Borderline conditions and pathological narcissism. Jason Aronson.',
                  'Linehan, M. M. (1993). Cognitive-behavioral treatment of borderline personality disorder. Guilford Press.',
                  'Saraiya, T. C. (2020). Social–emotional profiles of PTSD, complex PTSD, and borderline personality disorder. Psychiatry Research, 290, 113104.',
                  'van der Kolk, B. A. (2014). The body keeps the score: Brain, mind, and body in the healing of trauma. Viking.',
                  'Veen, G., & Arntz, A. (2000). Multidimensional dichotomous thinking characterizes borderline personality disorder. Cognitive Therapy and Research, 24(1), 23–45.',
                  'Young, J. E., Klosko, J. S., & Weishaar, M. E. (2003). Schema therapy: A practitioner\'s guide. Guilford Press.',
                ].map((ref, i) => (
                  <p key={i} className="pl-6 -indent-6">{ref}</p>
                ))}
              </div>
            </ArticleSection>

            <Divider />

            {/* Appendix A */}
            <ArticleSection title="Appendix A: Dynamic Relational Survival Framework for Black-and-White Thinking">
              <div className="overflow-x-auto rounded-lg shadow-soft border border-neutral-200">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-primary-700 text-white">
                      {['Stage', 'Mechanism', 'Function', 'Supporting Theorists'].map(h => (
                        <th key={h} className="text-left px-4 py-3 font-semibold">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['1. Environmental Input', 'Early invalidation, gaslighting, and moral rigidity', 'Creates binary self-concept and conditional safety rules', 'Linehan (1993); Herman (1992)'],
                      ['2. Adaptive Cognitive Mechanism', 'Dichotomous thinking under threat', 'Simplifies complexity to restore predictability', 'Freud (1936); Kernberg (1975)'],
                      ['3. Neurobiological Sensitivity', 'Heightened vigilance to cues and tone', 'Detects threat in relational ambiguity', 'van der Kolk (2014)'],
                      ['4. Relational Switch', 'Acceptance → White lens; Rejection → Black lens', 'Regulates perceived safety through cognitive toggling', 'Kernberg (1975); Linehan (1993)'],
                      ['5. Behavioral Outcomes', 'Solitude, withdrawal, or emotional regulation', 'Preserves energy and emotional stability', 'Young et al. (2003); Herman (2015)'],
                      ['6. Vulnerability Mechanism', 'Manipulators exploit validation sensitivity', 'Adaptive mechanism becomes exploitable pattern', 'Herman (1992); van der Kolk (2014)'],
                      ['7. Therapeutic Implications', 'Consistency and validation reduce switching', 'Fosters integration and safety in therapy', 'Linehan (1993); Herman (2015)'],
                    ].map((row, i) => (
                      <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-primary-50'}>
                        <td className="px-4 py-3 font-medium text-neutral-900">{row[0]}</td>
                        <td className="px-4 py-3 text-neutral-700">{row[1]}</td>
                        <td className="px-4 py-3 text-neutral-700">{row[2]}</td>
                        <td className="px-4 py-3 text-neutral-500 text-xs">{row[3]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
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

export default BlogPostBlackWhite;

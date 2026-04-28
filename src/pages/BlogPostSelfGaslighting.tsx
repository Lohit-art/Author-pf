import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

/* ── Shared helpers ── */

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

const SubSection: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="mb-6">
    <h3 className="article-subheading">{title}</h3>
    {children}
  </div>
);

const BulletPoint: React.FC<{ title?: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="flex gap-3">
    <span className="mt-1.5 flex-shrink-0 w-2 h-2 rounded-full bg-primary-500"></span>
    <div className="text-neutral-700">
      {title && <span className="font-semibold text-neutral-800">{title}: </span>}
      {children}
    </div>
  </div>
);

const Divider: React.FC = () => <hr className="my-10 border-neutral-200" />;

const ChapterHeader: React.FC<{ chapter: string; title: string }> = ({ chapter, title }) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="mb-8"
  >
    <p className="text-xs font-semibold uppercase tracking-widest text-primary-500 mb-1">{chapter}</p>
    <h2 className="text-2xl md:text-3xl font-serif font-semibold text-primary-800 pb-2 border-b border-primary-200">
      {title}
    </h2>
  </motion.div>
);

/* ── Main Component ── */

const BlogPostSelfGaslighting: React.FC = () => {
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
                Clinical Framework
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-neutral-900 leading-tight mb-6">
              A New Clinical Framework for Self-Gaslighting (IVT, ELC, RPM)
            </h1>
            <p className="text-neutral-600 text-base leading-relaxed">
              <span className="font-semibold text-neutral-800">S. Nimma</span>
              <br />
              <span className="italic">Individual Researcher, MSc Psychology (Student)</span>
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

            {/* ─── CHAPTER 1 ─── */}
            <ChapterHeader chapter="Chapter 1" title="Introduction" />

            <ArticleSection title="1.1 Background of the Study">
              <p>
                Mental health has emerged as an essential component of overall well-being in today's fast-paced and connected world. The World Health Organization (WHO, 2022) defines mental health as "a state of well-being in which an individual realizes their abilities, can cope with normal stresses of life, works productively, and contributes to their community." Mental health is not just the absence of mental disorders. Modern societal pressures, cultural expectations, and complex interpersonal dynamics continue to challenge individuals' emotional and psychological resilience, despite growing awareness and global efforts to destigmatize mental health (Patel et al., 2018). One such interpersonal and intrapersonal challenge is gaslighting, a manipulative behavior pattern that undermines an individual's confidence in their own perception of reality.
              </p>
              <p className="mt-4">
                The play <em>Gas Light</em> by Patrick Hamilton, written in 1938 and depicting a husband manipulating his wife into doubting her sanity, is where the term originated (Sweet, 2019). Modern psychology recognizes gaslighting as a form of emotional abuse that occurs in intimate relationships, workplaces, and even sociopolitical settings (Stern, 2007).
              </p>
              <p className="mt-4">
                Recent research and discussions have highlighted a parallel phenomenon: when individuals internalize these manipulative patterns and begin to invalidate their own feelings and thoughts—termed self-gaslighting (Sarkis, 2018). This internalized self-doubt may develop due to prolonged exposure to external gaslighting, childhood trauma, or societal norms that discourage self-expression and emotional validation (Stark, 2019). Consequently, self-gaslighting can lower self-esteem, exacerbate anxiety and depression, and hinder healthy coping strategies. Recognizing self-gaslighting as a distinct psychological phenomenon is essential to advance mental health awareness and therapeutic interventions.
              </p>
            </ArticleSection>

            <Divider />

            <ArticleSection title="1.2 Definition of Key Terms">
              <SubSection title="What is Gaslighting?">
                <p>
                  A process in which constant manipulative psychological tactics are used on an individual—denial, misdirection, contradiction, and persistent lying—with intent to disrupt the victim and cause them to question their own perception, reality, and judgement (American Psychological Association, 2023). Sweet (2019) describes gaslighting as a form of emotional abuse in which the abuser keeps the victim confused by denying facts in a subtle yet insidious form, making the victim feel anxious, disoriented, and dependent on the abuser for their sense of truth. Abramson (2014) further frames it as not only emotional abuse but also an attack on the victim's credibility and rational agency, while Sarkis (2018) terms it a systemic pattern of brainwashing and manipulation.
                </p>
              </SubSection>
              <SubSection title="What is Self-Gaslighting?">
                <p>
                  A complex process in which a person begins to doubt or dismiss their own perception, reality, memory, experiences, and feelings—often unconsciously—generally due to internalized invalidation or long-term exposure to manipulation. Clayton (2021) notes that this internalized behavior usually develops due to external gaslighting by an abuser or a contradicting environment, where the victim internalizes the narratives of the abuser and others. <em>Psychology Today</em> further adds that self-gaslighting involves dismissing one's own reality—telling oneself they might be overreacting (Gillis, 2023). Durvasula (2023) expands this by noting that victims of narcissism or relationships involving emotional invalidation often adopt self-gaslighting as a defense mechanism. Travers (2023) identifies it as a coping mechanism to avoid feelings of shame or inadequacy. Parade (2024) reports that self-gaslighting often originates from childhood environments that lacked emotional support.
                </p>
                <div className="mt-5 p-6 bg-primary-50 border-l-4 border-primary-400 rounded-r-lg">
                  <p className="text-neutral-800 leading-relaxed italic font-serif">
                    "From my point of view—self-gaslighting is a psychological phenomenon in which an individual makes oneself feel like they are right even though they are not, wrong even though they are right, fine even though they are in a bad place, crazy even though they aren't—to cover up one's own bad behavior and maintain control over a situation, or especially as a coping mechanism to protect one's own sanity. It is like constantly feeding lies to oneself to dissociate from truth about the self, which subconsciously still lies in memory—capable of causing unbearable pain when triggered—eventually turning those lies into one's reality."
                  </p>
                </div>
              </SubSection>
            </ArticleSection>

            <Divider />

            <ArticleSection title="1.3 Problem Statement">
              <p>
                Although self-gaslighting has received considerable attention in popular psychology, it remains understudied in academic settings. Most contemporary discourse emphasizes trauma-based self-gaslighting, particularly as a coping mechanism for emotionally abusive partnerships. This constrained framework ignores wider behavioral, emotional, and psychological factors. Non-trauma-related causes—including persistent anxiety, perfectionism, self-doubt, or social pressure to project emotional composure—can also give rise to self-gaslighting.
              </p>
              <p className="mt-4">
                Furthermore, people who fit psychological profiles such as narcissists, sociopaths, and addicts may also gaslight themselves—not as self-punishment but as a subconscious means to defend ego, justify bad habits, or deny reality. This complex structure is not exclusive to manipulation victims; it can also serve as a protective mechanism for those who engage in destructive behaviors themselves. Notwithstanding these differences, little academic research has examined the full spectrum of internal and environmental factors that contribute to self-gaslighting, or how it intersects with substance abuse and personality disorders.
              </p>
            </ArticleSection>

            <Divider />

            <ArticleSection title="1.4 Objectives of the Study">
              <div className="space-y-3 mt-2">
                {[
                  'To investigate the fundamental causes and behavioural patterns of self-gaslighting, encompassing both trauma-related and non-traumatic origins.',
                  'To investigate both external and internal causes of self-gaslighting, such as emotional abuse, societal demands, perfectionism, internalized shame, and low self-esteem.',
                  'To distinguish how self-gaslighting emerges in different psychological conditions, such as anxiety, depression, narcissistic personality disorder, sociopathy, and addiction.',
                  'To investigate the purpose of self-gaslighting, including whether it is a coping technique, a type of psychological defence, or an obstacle to emotional recovery.',
                  'To investigate the effects of self-gaslighting on therapy and recovery, including self-awareness, help-seeking behaviour, and treatment response.',
                  'To underline the significance of early detection and how identifying self-gaslighting in its early phases can improve emotional regulation, personal growth, and mental health outcomes.',
                ].map((obj, i) => (
                  <div key={i} className="flex gap-3">
                    <span className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full bg-primary-100 text-primary-700 text-xs flex items-center justify-center font-bold">
                      {i + 1}
                    </span>
                    <p className="text-neutral-700">{obj}</p>
                  </div>
                ))}
              </div>
            </ArticleSection>

            <Divider />

            <ArticleSection title="1.5 Research Questions">
              <div className="space-y-3 mt-2">
                {[
                  'What are the internal and external causes of self-gaslighting?',
                  'Is self-gaslighting always caused by external gaslighting, or can it arise independently?',
                  'Can self-gaslighting function as a coping mechanism or psychological defence, even in the absence of trauma?',
                  'How does self-gaslighting differ across psychological disorders such as borderline personality disorder (BPD), Bipolar Disorder, Narcissistic Personality Disorder (NPD), and addiction-related conditions?',
                  'Do individuals with narcissistic, sociopathic, or addictive tendencies engage in self-gaslighting for ego preservation or behavioural justification?',
                  'Is self-gaslighting a significant barrier to recovery, self-awareness, and emotional truth in therapeutic settings?',
                  'Why is early recognition of self-gaslighting important for mental health and emotional resilience?',
                ].map((q, i) => (
                  <div key={i} className="flex gap-3">
                    <span className="flex-shrink-0 mt-0.5 font-semibold text-primary-600 text-sm">{i + 1}.</span>
                    <p className="text-neutral-700">{q}</p>
                  </div>
                ))}
              </div>
            </ArticleSection>

            <Divider />

            <ArticleSection title="1.6 Scope and Limitations">
              <SubSection title="Scope">
                <div className="space-y-3 mt-2">
                  {[
                    'This study investigates self-gaslighting by examining fictional and biographical films, documentaries, short films, and music albums.',
                    'Self-gaslighting is typically an internalized psychological process—deeply linked to self-perception, emotional control, and inner conflict—and is frequently best depicted through visual, vocal, and symbolic storytelling.',
                    'These artistic forms provide a rich, nuanced depiction of topics such as self-blame, denial, emotional suppression, and flawed self-belief systems.',
                    'The study aims to determine how self-gaslighting is expressed, portrayed, and felt in diverse media formats, and how these depictions reflect or challenge real-world psychological experiences.',
                    'In the absence of extensive academic research on the topic—especially regarding non-clinical expressions of self-gaslighting—theme-based, narrative-driven, and emotional content provides an alternative lens to understand this complex and under-recognized behavior.',
                  ].map((item, i) => <BulletPoint key={i}>{item}</BulletPoint>)}
                </div>
              </SubSection>
              <SubSection title="Limitations">
                <div className="space-y-3 mt-2">
                  {[
                    'The study is solely based on secondary sources from creative and narrative media, rather than clinical interviews, surveys, or psychological diagnoses.',
                    'Interpretations of media are inevitably subjective, influenced by the researcher\'s viewpoint and cultural background.',
                    'Film and music portrayals of mental health disorders can be dramatic, metaphorical, or symbolic, and may not precisely reflect clinical realities.',
                    'Because media reflects broader cultural narratives, the study may not adequately capture lived experiences or underrepresented perspectives.',
                    'Due to the scarcity of academic research on self-gaslighting—particularly outside trauma-centred frameworks—this analysis is exploratory and not conclusive.',
                  ].map((item, i) => <BulletPoint key={i}>{item}</BulletPoint>)}
                </div>
              </SubSection>
            </ArticleSection>

            <Divider />

            <ArticleSection title="1.7 Significance of the Study">
              <p>
                Self-gaslighting is still a relatively understudied subject in psychological literature, particularly in terms of its independent development, various causes, and nuanced affective consequences. Most previous research focuses on interpersonal or trauma-related contexts, leaving a gap in understanding how individuals internalize gaslighting messages and perpetuate the pattern within themselves—often unconsciously. This study attempts to broaden the conceptual framework surrounding self-gaslighting by examining its expressions not just in trauma survivors, but also in people with varied psychological conditions, personality patterns, and internal conflicts.
              </p>
              <p className="mt-4">
                By examining depictions of self-gaslighting via films, documentaries, short films, and music albums, this study accesses a sensory, expressive, and thematic portrayal of an otherwise unseen, internalized behavior. This study also advances mental health understanding and therapeutic practice by identifying patterns of self-gaslighting that may operate as hidden impediments to recovery, self-awareness, and emotional healing. Finally, it provides visibility, empathy, and vocabulary for the lived experience of self-gaslighting—frequently disregarded, misdiagnosed, or misunderstood.
              </p>
            </ArticleSection>

            {/* ─── CHAPTER 2 ─── */}
            <ChapterHeader chapter="Chapter 2" title="Literature Review" />

            <ArticleSection title="2.1 History of Gaslighting">
              <p>
                The term gaslighting emerged in 1938 from the play <em>Gas Light</em> by Hamilton, later gaining significant attention after the 1944 film adaptation, in which a woman is constantly manipulated by her husband. Since then, the term has evolved into a psychological term for abuse and manipulation (Sweet, 2019).
              </p>
              <p className="mt-4">
                In the British version of the film (<em>Gaslight</em>, 1940), Paul—husband of the protagonist—hides her belongings, his own belongings, and even wall paintings, blaming her for all the missing items and making her believe she is responsible, calling her constantly a thief and mentally unfit. He restricts her socialization and attempts on several occasions to convince others she is unwell. If she does not obey him, he warns her that he will leave her in an asylum—and her distorted mind comes to accept this as her inevitable end.
              </p>
            </ArticleSection>

            <Divider />

            <ArticleSection title="2.2 Definition and Conceptualization of Self-Gaslighting">
              <p>
                Practitioner-focused articles define self-gaslighting as the internalization of emotional manipulation and the denial of one's own reality (Lambert, 2021; Clayton, 2021). McGill (2024) challenges the term and suggests it is better understood through the lens of internalized oppression. Otis (2019) emphasizes practical techniques for recognizing and unlearning self-gaslighting behaviors in daily life.
              </p>
              <p className="mt-4">
                Researchers conceptualize self-gaslighting as the process by which people internalize gaslighting from others, leading them to question their own feelings, memories, and opinions (Psychology Today, 2021; Sarkis, 2018). This research expands upon that foundation by suggesting that self-gaslighting may also serve as an inwardly driven tactic—where individuals intentionally or inadvertently misrepresent themselves to defend unwanted actions, preserve power, or shield themselves from unpleasant realities and identity crises (Akhtar, 2009; Campbell &amp; Miller, 2011).
              </p>
            </ArticleSection>

            <Divider />

            <ArticleSection title="2.3 Causes of Self-Gaslighting">
              <SubSection title="2.3.1 Types of Self-Gaslighting">
                <div className="space-y-3 mt-2">
                  <BulletPoint title="Minimization">Downplaying personal feelings or experiences ("It wasn't that bad"; "I'm overreacting") (Psychology Today, 2022).</BulletPoint>
                  <BulletPoint title="Denial">Refusing to acknowledge real emotions or pain ("I guess I'm just being too sensitive") (Psychology Today, 2022).</BulletPoint>
                  <BulletPoint title="Self-Blame &amp; Shame">Holding oneself responsible for others' actions ("It must be my fault they treated me badly") (Choosing Therapy, 2023).</BulletPoint>
                  <BulletPoint title="Invalidation">Rejecting personal emotions due to comparison with others ("I shouldn't be sad—others have it worse") (Choosing Therapy, 2023).</BulletPoint>
                  <BulletPoint title="Self-Doubt Amplification">Chronic questioning of one's own memory or perception ("Maybe I misremembered… perhaps I'm too sensitive") (Psychology Today, 2022).</BulletPoint>
                  <BulletPoint title="Rationalization">Justifying others' harmful behavior ("They were just stressed, so I shouldn't feel upset") (Choosing Therapy, 2023).</BulletPoint>
                  <BulletPoint title="Suppression of Voice or Expression">Believing that speaking up is wrong or will lead to negative outcomes ("If I say how I feel, people will leave me") (Dominguez, 2022).</BulletPoint>
                </div>
              </SubSection>

              <SubSection title="2.3.2 Victim of Trauma and Manipulation">
                <div className="space-y-3 mt-2">
                  <BulletPoint title="Internalized Self-Doubt">Persistent self-criticism causes one to discount their reality, denying or minimizing experiences (Psychology Today, 2022).</BulletPoint>
                  <BulletPoint title="Cognitive Dissonance">When faced with conflicting ideas (e.g., "He was nice publicly but cruel at home"), self-doubt helps resolve the discomfort ("Maybe I remembered wrong") (Psychology Today, 2022).</BulletPoint>
                  <BulletPoint title="Internalization of External Gaslighting">Ongoing external gaslighting teaches individuals to adopt the same tactics against themselves. People may internalize the abuser's voice and begin to doubt their own reality if they are frequently invalidated (Leveille, 2022; Psychology Today, 2021).</BulletPoint>
                </div>
              </SubSection>

              <SubSection title="2.3.3 Self-Criticism, Perfectionism and Self-Gaslighting">
                <p className="font-medium text-neutral-800 mb-2">The Role of Nature and Nurture</p>
                <p>Temperament and emotional sensitivity are influenced by biological and genetic predispositions, which might increase susceptibility to self-critical thought patterns (DeYoung et al., 2002). Neuroimaging research associates higher rumination with overactivity in the prefrontal cortex and amygdala (Goldin et al., 2009).</p>
                <p className="mt-3">Children raised by authoritarian or emotionally distant parents may develop conditional self-worth, and internalized shame can be reinforced by emotional neglect, trauma, or recurrent invalidation (Beck, 1976; Herman, 1992). Nurture controls the development and solidification of self-critical tendencies, whereas nature establishes the neurological foundation. Self-criticism can be addressed and altered through techniques such as self-compassion training and therapy.</p>
                <p className="mt-3 font-medium text-neutral-800">Mechanism of Transition</p>
                <p className="mt-1">Self-gaslighting can develop from excessive and persistent self-criticism (Sweet, 2019). Self-criticism beginning with "I'm too sensitive" can progress to "Maybe I wasn't truly unhappy," indicating a profound internal struggle with one's feelings. Perfectionism fuels self-gaslighting by associating emotional vulnerability with weakness and reinforcing self-invalidating behavior (Hewitt &amp; Flett, 1991).</p>
              </SubSection>

              <SubSection title="2.3.4–2.3.9 Further Causes">
                <div className="space-y-3 mt-2">
                  <BulletPoint title="Self-Gaslighting Across Disorders">Self-doubt and emotional confusion are common features of OCD, BPD, and C-PTSD, and they might resemble self-gaslighting behaviors (Greene &amp; Illes, 2023).</BulletPoint>
                  <BulletPoint title="Psychological Defense Mechanism">Self-gaslighting can be used as a coping strategy to minimize or deny overwhelming emotional truth (GoodTherapy, 2021).</BulletPoint>
                  <BulletPoint title="Childhood Emotional Neglect">Childhood situations where emotional needs were disregarded may be the source of self-gaslighting, leading to long-term self-doubt (Sweet, 2019).</BulletPoint>
                  <BulletPoint title="Cultural and Societal Conditioning">Self-gaslighting thrives in patriarchal and authoritarian cultures that encourage emotional repression and invalidation (Davis &amp; Ernst, 2019).</BulletPoint>
                  <BulletPoint title="Repetition Compulsion (Freud)">In an attempt to restore control, people with repetition compulsion unintentionally replicate trauma dynamics and place responsibility on themselves (Sweet, 2019).</BulletPoint>
                  <BulletPoint title="Learned Helplessness">When someone experiences uncontrolled conditions on a regular basis and begins to feel powerless to alter their circumstances, this causes self-gaslighting—"Maybe it's my fault" or "There's no point trying" (Seligman, 1975).</BulletPoint>
                </div>
              </SubSection>
            </ArticleSection>

            <Divider />

            <ArticleSection title="2.4 Psychological and Emotional Patterns">
              <p>
                Denial, minimization, self-blame, and cognitive distortions are some of the intricate psychological patterns underlying self-gaslighting (Sarkis, 2018). These patterns can be unintentional defence strategies used to deal with internal turmoil or unpleasant memories (Akhtar, 2009). Over time, emotional cycles of shame, guilt, and learned helplessness reinforce self-gaslighting, resulting in permanent detachment from one's own feelings and ideas (Peterson, 2017). These tendencies may also coexist with other maladaptive behaviours, such as self-sabotage and rumination, compounding the individual's mental health challenges (Sweet, 2019).
              </p>
            </ArticleSection>

            <Divider />

            <ArticleSection title="2.5 Role in Healing and Therapy">
              <p>
                Understanding the underlying trauma and psychological defences that support self-gaslighting is necessary when addressing it in therapeutic settings (Linehan, 1993). Dialectical Behaviour Therapy (DBT) and Cognitive-Behavioural Therapy (CBT) are frequently used to assist people in recognizing and disputing self-deceptive thoughts and creating more constructive coping mechanisms (Beck, 2011; Linehan, 1993). Trauma-focused therapies such as EMDR or somatic experience may also help clients process repressed emotions and regain confidence in their own perspectives (van der Kolk, 2014). Despite growing recognition in clinical settings, there is currently little empirical research on targeted interventions that specifically address self-gaslighting.
              </p>
            </ArticleSection>

            <Divider />

            <ArticleSection title="2.6 Fictional and Memoir-Based Representations">
              <p>
                Self-gaslighting is commonly depicted in literature, films, and memoirs, offering narrative examples that illustrate its psychological complexity. Internal self-manipulation and reality distortion are frequently shown in stories featuring protagonists with bipolar disorder, borderline personality features, or narcissistic tendencies (Campbell &amp; Miller, 2011). Survivors of abuse frequently describe self-gaslighting in memoirs as a coping mechanism for resolving conflicts in abusive situations or enduring toxic relationships (Sarkis, 2018). Examining these depictions enhances knowledge of how self-gaslighting appears in diverse settings and facilitates qualitative research into the concept.
              </p>
            </ArticleSection>

            <Divider />

            <ArticleSection title="2.7 Research Gaps">
              <div className="space-y-3 mt-2">
                {[
                  'Previous research has mostly examined self-gaslighting as an internalization of external abuse, with little investigation into its prevalence in people with mood disorders, personality disorders, or antisocial characteristics (Sweet, 2019; Campbell & Miller, 2011).',
                  'There is a lack of empirical data on therapy approaches created specifically to deal with self-gaslighting.',
                  'There is a dearth of narrative-based and cross-cultural studies that look at how self-gaslighting is portrayed and interpreted in memoirs, the media, and various social contexts.',
                  'Through a comprehensive examination of psychological theory, clinical findings, and media depiction, this study seeks to help close these gaps.',
                ].map((item, i) => <BulletPoint key={i}>{item}</BulletPoint>)}
              </div>
            </ArticleSection>

            {/* ─── Strategic Application ─── */}
            <ChapterHeader chapter="Clinical Application" title="Strategic Application Using the EI Model" />

            <ArticleSection title="The EI Model: The 'Door' Sequence">
              <p className="mb-5">To implement these models effectively, a practitioner should follow the "Door" sequence:</p>
              <div className="space-y-4">
                <BulletPoint title="The Contact Door">Enter through the mode the client is currently displaying. If they are crying or distressed, start with Feeling (PCT). If they are analyzing their problems, start with Thinking (CBT/RECBT).</BulletPoint>
                <BulletPoint title="The Target Door">Move toward the mode that requires change. For self-gaslighting, this often involves moving from Feeling (shame) to Thinking (evaluating evidence) or Behavioural (acting despite the doubt).</BulletPoint>
                <BulletPoint title="The Trap Door">Avoid the mode that keeps the client stuck. For a "Thinking" self-gaslighter, avoid over-intellectualizing and instead push toward Feeling or Action.</BulletPoint>
              </div>
            </ArticleSection>

            <ArticleSection title="Comprehensive Therapy Framework for Self-Gaslighting">
              <div className="overflow-x-auto rounded-lg shadow-soft border border-neutral-200 mb-2">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-primary-700 text-white">
                      {['Category of Self-Gaslighting', 'Core Manifestation', 'Primary EI Mode', 'Recommended Therapy Model', 'Specific Technique'].map(h => (
                        <th key={h} className="text-left px-3 py-3 font-semibold">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Internalized External Gaslighting', "Adopting the voice of a past abuser as one's own internal critic.", 'Feeling', 'Transactional Analysis (TA)', 'Moving from the Drama Triangle (Victim) to the Winner\'s Triangle (Vulnerability & Assertiveness).'],
                      ['Trauma-Induced (PTSD/C-PTSD)', '"It wasn\'t that bad" or "I\'m being dramatic."', 'Feeling', 'Person-Centered Therapy (PCT)', 'Core Conditions (Empathy, Genuineness) to resolve Incongruence between experience and self-concept.'],
                      ['Perfectionism', 'Invalidating achievements; setting "Irrational Musts" for self-worth.', 'Thinking', 'RECBT', 'ABCD Model to dispute irrational beliefs and replace them with rational preferences.'],
                      ['OCD-Related Doubt', "Doubting one's own memory, senses, or sanity.", 'Thinking', 'CBT', 'Cognitive Distortion identification and Downward Arrow Technique.'],
                      ['Body Dysmorphia / Anorexia', 'Gaslighting one\'s physical reality; perceiving flaws that contradict objective evidence.', 'Behavioural / Thinking', 'Choice Theory', 'Needs Assessment (1-10 scale) for Power, Freedom, or Survival.'],
                      ['Societally Driven', 'Dismissing personal needs because they conflict with cultural or gender norms.', 'Feeling', 'Gestalt Therapy', 'Double Chair Technique: dialogue between the "Social Self" and the "Real Self."'],
                      ['Malicious Internalization (Narcissism/ASPD)', 'Defensive self-deception to maintain a fragile ego.', 'Behavioural', 'Reality Therapy / Choice Theory', 'Focus on Total Behaviour to align actions with objective reality.'],
                      ['Phobias', 'Internalizing a false sense of danger; gaslighting the body into a panic response.', 'Behavioural', 'Behaviour Therapy', 'Systematic Desensitization through gradual exposure.'],
                      ['Interpersonal Passivity', 'Gaslighting oneself into staying in toxic dynamics by suppressing personal rights.', 'Behavioural', 'Life Skills Approach', 'Assertiveness Training: moving from Passive/Aggressive cycles to direct, respectful communication.'],
                    ].map((row, i) => (
                      <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-primary-50'}>
                        {row.map((cell, j) => (
                          <td key={j} className={`px-3 py-3 text-neutral-700 leading-snug ${j === 0 ? 'font-medium text-neutral-900' : ''}`}>{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </ArticleSection>

            {/* ─── THREE NEW MODELS ─── */}
            <ChapterHeader chapter="Proposed Models" title="Recommended New Approaches as Pre-Therapy Models" />

            <div className="mb-6 p-5 bg-neutral-50 rounded-lg border border-neutral-200">
              <ul className="space-y-2">
                {[
                  'Internal Verification Therapy (IVT)',
                  'Ego-Logic Collapse Model (ELC)',
                  'Radiant Presence Model (RPM)',
                ].map((m, i) => (
                  <li key={i} className="flex gap-3 items-center">
                    <span className="w-6 h-6 rounded-full bg-primary-600 text-white text-xs flex items-center justify-center font-bold flex-shrink-0">{i + 1}</span>
                    <span className="font-semibold text-neutral-800">{m}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* ── IVT ── */}
            <ArticleSection title="Model 1: Internal Verification Therapy (IVT)">
              <p className="mb-4">
                Internal Verification Therapy (IVT) is a clinical framework designed for victims of prolonged gaslighting, emotional abuse, or sensory manipulation. While traditional therapy focuses on "processing feelings," IVT focuses on "Hardware Recovery"—restoring the individual's trust in their own biological and cognitive sensors. It treats gaslighting not as a wound to be healed, but as a system-wide sensor error that requires technical recalibration.
              </p>

              <SubSection title="Definition">
                <p><em>A neuro-pragmatic protocol that utilizes binary logic and biological feedback to dismantle the "Reality-Mismatch" caused by external gaslighting. IVT moves the client from "Hyper-Vigilant Confusion" (depending on the abuser for truth) to "Internal Autonomy" (trusting one's own hardware).</em></p>
              </SubSection>

              <SubSection title="The Four-Phase IVT Framework">
                <div className="space-y-6 mt-3">
                  {[
                    {
                      phase: 'Phase 1: The "Hardware Audit" (Sensor Recalibration)',
                      content: 'When a client feels "crazy" or "confused," they are taught to perform a "System Check." The Logic: Feelings can be manipulated, but biological sensors (sight, sound, touch, heart rate) are objective hardware. The Intervention: "Ignore the words being said to you. What does your skin feel? What did your ears hear? Is your heart racing? Your hardware is reporting a threat; therefore, a threat exists, regardless of the \'narrative\' being fed to you."',
                    },
                    {
                      phase: 'Phase 2: Breaking the "Discount" (Fact vs. Fluff)',
                      content: 'The practitioner identifies how the client has been trained to "discount" their own observations. The Binary Test: Categorize every interaction into "The Tape Recording" (Objective Reality) and "The Spin" (The Gaslighter\'s Version). The Mantra: "If it\'s on the tape, it\'s true. If it\'s only in the \'Spin,\' it\'s a virus."',
                    },
                    {
                      phase: 'Phase 3: The "Sensor Trust" Lever',
                      content: 'This phase rebuilds the client\'s confidence by proving their "Logic Centre" is still intact. Gaslighting works by making the victim believe they are "bad at reality." IVT proves they are excellent at reality, but have been forced to run "malware." Verification Tasks (e.g., "Describe this room in purely objective terms") demonstrate intact perception.',
                    },
                    {
                      phase: 'Phase 4: Behavioural Re-Anchoring (The Exit Door)',
                      content: 'The client establishes "Non-Negotiable Realities." If a partner says, "I never said that," and the client\'s hardware says "I heard it," the client is taught to end the debate immediately. The Logic: "You do not argue with someone about whether it is raining while you are getting wet. You simply open the umbrella."',
                    },
                  ].map(({ phase, content }, i) => (
                    <div key={i} className="border-l-2 border-primary-300 pl-4">
                      <p className="font-semibold text-neutral-800 mb-1">{phase}</p>
                      <p className="text-neutral-700">{content}</p>
                    </div>
                  ))}
                </div>
              </SubSection>

              <SubSection title="Execution Protocol for Practitioners">
                <div className="overflow-x-auto rounded-lg shadow-soft border border-neutral-200 mt-3">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-primary-700 text-white">
                        <th className="text-left px-4 py-3 font-semibold">Element</th>
                        <th className="text-left px-4 py-3 font-semibold">Protocol</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ['Therapist Stance', 'The Validator. Empathetic but logically rigid.'],
                        ['Physicality', 'Soft but Steady Eye Contact. To provide a "Safe Anchor" for reality.'],
                        ['Language', 'Evidence-Based. "What is the evidence for that statement?"'],
                        ['Primary Goal', 'Transition from "External Validation" to "Internal Autonomy."'],
                      ].map(([el, pr], i) => (
                        <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-primary-50'}>
                          <td className="px-4 py-3 font-medium text-neutral-900">{el}</td>
                          <td className="px-4 py-3 text-neutral-700">{pr}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </SubSection>

              <SubSection title="IVT as a Pre-Therapy Structured Model">
                <p className="mb-3"><em>Core Principle: Before healing trauma or complex disorders, the individual must first stop invalidating their own internal experience.</em></p>
                <div className="space-y-3">
                  {[
                    { phase: 'Phase 1: Cognitive Rebuilding', detail: 'Self-Affirmation Writing — 3–5 affirmations written 10 times daily. Goal: Replace self-doubt with self-validation.' },
                    { phase: 'Phase 2: Perceptual Differentiation', detail: 'Tri-Perspective Writing — Page 1: Others\' version of the event. Page 2: Personal emotional experience. Page 3: Observed factual details. Goal: Separate external narrative from internal truth.' },
                    { phase: 'Phase 3: Emotional Alliance', detail: 'Self-Acceptance Practice — Core statement: "I accept myself no matter what. I will be there for me." Goal: Build internal safety and reduce self-abandonment.' },
                    { phase: 'Phase 4: Behavioural Integration', detail: 'Body awareness, boundary skills, validation practice. Goal: Reduce emotional shutdown, reactive behaviour, and fear-driven dishonesty.' },
                    { phase: 'Phase 5: Relational Resilience', detail: 'Pause, recheck, respond method. Goal: Maintain self-trust during external gaslighting situations.' },
                  ].map(({ phase, detail }, i) => (
                    <div key={i} className="flex gap-3">
                      <span className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full bg-primary-100 text-primary-700 text-xs flex items-center justify-center font-bold">{i + 1}</span>
                      <div><span className="font-semibold text-neutral-800">{phase}: </span><span className="text-neutral-700">{detail}</span></div>
                    </div>
                  ))}
                </div>
              </SubSection>

              <div className="mt-5 p-5 bg-primary-50 border-l-4 border-primary-400 rounded-r-lg">
                <p className="font-semibold text-primary-800 mb-1 text-sm">IVT Success Metric</p>
                <p className="text-neutral-700 text-sm leading-relaxed">
                  IVT is successful when the client can stand in a room with a gaslighter, hear a lie, and feel zero confusion. Instead of wondering "Am I crazy?", they think: "My ears heard X, they are saying Y. Their system is glitching, mine is fine." This model provides the "Immune System" for the mind—it doesn't just heal past trauma; it makes the individual un-gaslightable in the future.
                </p>
              </div>
            </ArticleSection>

            <Divider />

            {/* ── ELC ── */}
            <ArticleSection title="Model 2: The Ego-Logic Collapse Model (ELC)">
              <p className="mb-4">
                The Ego-Logic Collapse (ELC) is a neuro-pragmatic intervention designed for low-performance individuals with Narcissistic or Antisocial traits. It is specifically engineered to dismantle "Grandiosity-Based Self-Gaslighting"—the delusion that one is a hidden genius or elite strategist despite having no objective real-world accomplishments. A clinical protocol that forces a "Hard Reset" of the personality by highlighting the logical absurdity of the client's current lifestyle. Unlike traditional therapy that builds self-esteem, ELC utilizes Shame-Free Brutalism to prove that the client's "superiority" is actually a technical failure.
              </p>

              <SubSection title="The Four-Phase ELC Framework">
                <div className="space-y-6 mt-3">
                  {[
                    {
                      phase: 'Phase 1: The "Hardware Audit" (Reality Testing)',
                      content: 'The practitioner enters through the Thinking Mode to establish a data-driven baseline. The therapist asks the client to list their "Elevated Narratives" (the fantasy) versus their "Objective Outcomes" (the scoreboard). The "Intelligence Gap" is identified—the mental bandwidth the client wastes gaslighting themselves into believing their fantasy is reality.',
                    },
                    {
                      phase: 'Phase 2: Breaking the "Discount" (Transactional Analysis)',
                      content: 'The therapist maintains a Poker Face, refusing "Parent" (scolding) or "Child" (fearful) roles. The Absurdity Mirror: the therapist reflects the client\'s logic back until it sounds ridiculous. If the client claims they are "waiting for the right opportunity," the therapist asks, "How does being invisible and broke for five years serve your \'elite\' strategy?" Moving the client from the Drama Triangle to the realization that they are the Victim of their own poor management.',
                    },
                    {
                      phase: 'Phase 3: The "Loss of Intelligence" Lever',
                      content: 'For this profile, being called "evil" is often a source of pride (the "anti-hero" complex). However, being called "unsuccessful" or "unimpressive" is an ego-death. The Intervention: "You are becoming a ghost—invisible and broke—while people you consider \'average\' are actually building wealth and influence." This makes the client\'s current behaviour feel like a sign of low IQ.',
                    },
                    {
                      phase: 'Phase 4: Behavioural Re-Anchoring (The Target Door)',
                      content: 'Once the false ego is sufficiently hollowed out, the client is forced into the Behavioural Mode. Since the "Mastermind" identity is now proven false, the only way to regain "status" is through objective achievement. The therapist sets high-bar, measurable targets. "Thinking" (I am smart) must align with "Behaviour" (I am productive) to produce a "Feeling" (I am actually successful).',
                    },
                  ].map(({ phase, content }, i) => (
                    <div key={i} className="border-l-2 border-primary-300 pl-4">
                      <p className="font-semibold text-neutral-800 mb-1">{phase}</p>
                      <p className="text-neutral-700">{content}</p>
                    </div>
                  ))}
                </div>
              </SubSection>

              <SubSection title="ELC vs. Standard Therapy">
                <div className="overflow-x-auto rounded-lg shadow-soft border border-neutral-200 mt-3">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-primary-700 text-white">
                        <th className="text-left px-4 py-3 font-semibold">Feature</th>
                        <th className="text-left px-4 py-3 font-semibold">Standard Therapy (PCT/CBT)</th>
                        <th className="text-left px-4 py-3 font-semibold">Ego-Logic Collapse (ELC)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ['View of Gaslighting', 'A sign of insecurity/trauma.', 'A "Hardware Error" causing inefficiency.'],
                        ['Primary Lever', 'Empathy and Self-Love.', 'Vanity and Intellectual Superiority.'],
                        ["Therapist's Role", 'Nurturing Parent.', 'Hardened Mirror (Adult-to-Adult).'],
                        ['Ultimate Goal', 'To be a "Good Person."', 'To be a "Competent Person."'],
                      ].map(([feat, std, elc], i) => (
                        <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-primary-50'}>
                          <td className="px-4 py-3 font-medium text-neutral-900">{feat}</td>
                          <td className="px-4 py-3 text-neutral-700">{std}</td>
                          <td className="px-4 py-3 text-neutral-700">{elc}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </SubSection>

              <SubSection title="Technical Summary for Practitioners">
                <div className="overflow-x-auto rounded-lg shadow-soft border border-neutral-200 mt-3">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-primary-700 text-white">
                        <th className="text-left px-4 py-3 font-semibold">Element</th>
                        <th className="text-left px-4 py-3 font-semibold">Protocol</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ['Primary Goal', 'Transition from Delusional Grandiosity to Functional Achievement.'],
                        ['Therapist Stance', 'Un-Gaslightable Auditor. Poker face, neutral tone, unrelenting eye contact.'],
                        ['Language Shift', 'From "How do you feel?" to "What is the ROI on your current behaviour?"'],
                        ['Safety Node', 'Avoid "Toxic Shame" by offering the "Target Door" as an immediate route to regain status.'],
                      ].map(([el, pr], i) => (
                        <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-primary-50'}>
                          <td className="px-4 py-3 font-medium text-neutral-900">{el}</td>
                          <td className="px-4 py-3 text-neutral-700">{pr}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </SubSection>
            </ArticleSection>

            <Divider />

            {/* ── RPM ── */}
            <ArticleSection title="Model 3: The Radiant Presence Model (RPM)">
              <p className="mb-4">
                The Radiant Presence Model (RPM) is a neuro-pragmatic intervention designed for high-performance individuals with NPD/ASPD traits. It bypasses traditional appeals to empathy—which these individuals often view as a "system weakness"—and instead frames recovery as a Strategic Intellectual Upgrade. The goal is to stop the "Self-Gaslighting" that convinces the high performer that domestic tyranny is a form of leadership, when it is actually a form of resource depletion.
              </p>

              <SubSection title="The Four-Phase RPM Framework">
                <div className="space-y-6 mt-3">
                  {[
                    {
                      phase: 'Phase 1: The Efficiency Audit (Diagnostic)',
                      content: 'The therapist identifies the "Intelligence Gap"—the space between the client\'s self-image (Elite Leader) and their reality (Emotional Micro-manager). The Logic: If you must yell to get results at home, you are failing as a manager. The Self-Gaslighting Hook: "I\'m only doing this because they are incompetent." The Correction: "You are subsidizing their incompetence by wasting your high-value brainpower on petty surveillance. You are making yourself average by lowering your standards to match their drama."',
                    },
                    {
                      phase: 'Phase 2: The "Force vs. Source" Re-Framing',
                      content: 'Force (The Old Way): Requires constant energy expenditure. Creates friction, heat (anger), and resistance. "Low-Level Power" because it depends on the presence of a victim. Source (The New Way): Gravity. The Sun doesn\'t "try" to hold planets; it simply has so much mass and light that orbits are a natural consequence. Strategic Shift: Move from being a Persecutor (Force) to a Differentiated Core (Source).',
                    },
                    {
                      phase: 'Phase 3: Reclaiming Mental Capital (Behavioral)',
                      content: 'The "Indifference" Protocol: The client is challenged to observe domestic "chaos" without reacting. The Logic: Every outburst is a "Tax." Every judgment is a "Leak." To be truly elite, the client must be untouchable by the "softness" of others. Outcome: The client stops "haunting" the house and begins "inhabiting" their own success.',
                    },
                    {
                      phase: 'Phase 4: The Autonomy Gambit (The Ego Test)',
                      content: 'The therapist forces the client to dismantle the "Benefactor" gaslight—the lie that they provide for others out of "duty" to lead. The Intervention: Granting total autonomy to family/friends. The Logical Test: If they stay when free to leave, your "Presence" is valuable. If they only stay when pressured, you are a "Jailer," not a "Leader."',
                    },
                  ].map(({ phase, content }, i) => (
                    <div key={i} className="border-l-2 border-primary-300 pl-4">
                      <p className="font-semibold text-neutral-800 mb-1">{phase}</p>
                      <p className="text-neutral-700">{content}</p>
                    </div>
                  ))}
                </div>
              </SubSection>

              <SubSection title="Summary of the RPM Framework">
                <div className="overflow-x-auto rounded-lg shadow-soft border border-neutral-200 mt-3">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-primary-700 text-white">
                        <th className="text-left px-4 py-3 font-semibold">Module</th>
                        <th className="text-left px-4 py-3 font-semibold">Self-Gaslighting Narrative</th>
                        <th className="text-left px-4 py-3 font-semibold">RPM Truth Intervention</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ['Leadership', '"I am the boss of this house."', '"You are the slave to their reactions."'],
                        ['Communication', '"Yelling gets results."', '"Yelling is a management failure."'],
                        ['Providing', '"They need my money/protection."', '"You use money to buy hostages."'],
                        ['Impact', '"I am the centre of their world."', '"You are the noise they tune out."'],
                        ['Final State', 'The Domestic Tyrant', 'The Radiant Presence'],
                      ].map(([mod, sg, rpm], i) => (
                        <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-primary-50'}>
                          <td className="px-4 py-3 font-medium text-neutral-900">{mod}</td>
                          <td className="px-4 py-3 text-neutral-700 italic">{sg}</td>
                          <td className="px-4 py-3 text-neutral-700 italic">{rpm}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </SubSection>

              <div className="mt-6 p-6 bg-primary-50 border-l-4 border-primary-400 rounded-r-lg">
                <p className="font-semibold text-primary-800 mb-2 text-sm">Clinical Application Note</p>
                <p className="text-neutral-700 text-sm leading-relaxed">
                  This model works because it aligns with the client's Narcissistic Ego. It doesn't ask them to be "nicer" or "kinder"—it asks them to be "Too Big for Small Games." By the end of the RPM, the client treats their family like "planets": they provide the warmth (resources) and the light (legacy), but no longer waste energy trying to dictate the rotation. This results in a home that is quiet, efficient, and—ironically—far more stable. According to them, they are the Sun: self-radiant, whose warmth and observant presence is enough to create legacy.
                </p>
              </div>
            </ArticleSection>

            <Divider />

            {/* ─── REFERENCES ─── */}
            <ArticleSection title="References">
              <div className="space-y-2 text-sm text-neutral-700 leading-relaxed">
                {[
                  'Abramson, K. (2014). Turning up the lights on gaslighting. Philosophical Perspectives, 28(1), 1–30. https://doi.org/10.1111/phpe.12046',
                  'Akhtar, S. (2009). Comprehensive dictionary of psychoanalysis. Karnac Books.',
                  'American Psychological Association. (2023). Gaslighting. In APA Dictionary of Psychology. https://dictionary.apa.org/gaslighting',
                  'Beck, J. S. (2011). Cognitive behavior therapy: Basics and beyond (2nd ed.). Guilford Press.',
                  'Campbell, W. K., & Miller, J. D. (Eds.). (2011). The handbook of narcissism and narcissistic personality disorder. Wiley.',
                  'Choosing Therapy. (2023). Self-gaslighting: What it is, examples, & how to stop.',
                  'Clayton, I. (2021, September 27). What is self-gaslighting? Psychology Today. https://www.psychologytoday.com/us/blog/emotional-sobriety/202109/what-is-self-gaslighting',
                  'Davis, A. L., & Ernst, R. M. (2019). Gaslighting: The sociocultural implications of emotional manipulation. Journal of Gender and Social Psychology, 41(3), 223–237.',
                  'Dominguez, D. (2022). The silent struggle: Recognizing internalized gaslighting. Trauma & Healing Journal, 34(2), 44–58.',
                  'Durvasula, R. (2023). What is self-gaslighting? Do you put yourself through it? News18.',
                  'Forbes. (2023, December 18). A psychologist helps you grasp and conquer self-gaslighting.',
                  'Gillis, K. (2023, March 6). How people can gaslight themselves. Psychology Today.',
                  'GoodTherapy. (2021, July 1). Gaslighting. https://www.goodtherapy.org/blog/psychpedia/gaslighting',
                  'Greene, L., & Illes, C. (2023). Gaslighting and dark personality traits. Journal of Family Violence, 38(1), 125–139.',
                  'Herman, J. (1992). Trauma and recovery. Basic Books.',
                  'Hewitt, P. L., & Flett, G. L. (1991). Perfectionism in the self and social contexts. Journal of Personality and Social Psychology, 60(3), 456–470.',
                  'Lambert, C. A. (2021, July 12). Self-gaslighting: The harm of being gaslighted. Psychology Today.',
                  'Leveille, C. (2022, October 18). What is self-gaslighting? Psychology Today.',
                  'Linehan, M. M. (1993). Cognitive-behavioral treatment of borderline personality disorder. Guilford Press.',
                  'McGill, E. (2024). Am I gaslighting myself? Southwest Philosophy Review, 40(1), 56–63.',
                  'Otis, R. (2019, November 19). What\'s "self-gaslighting" and how do I unlearn it? Healthline.',
                  'Parade. (2024, January 2). Self-gaslighting: What it is, why it\'s harmful & how to stop.',
                  'Patel, V., et al. (2018). The Lancet Commission on global mental health and sustainable development. The Lancet, 392(10157), 1553–1598.',
                  'Peterson, C. (2017). Self-deception and self-knowledge. Psychology Press.',
                  'Psychology Today. (2021). What is self-gaslighting? https://www.psychologytoday.com/us/basics/gaslighting',
                  'Psychology Today. (2022, May). How people can gaslight themselves.',
                  'Sarkis, S. (2018). Gaslighting: Recognize manipulative and emotionally abusive people—and break free. Da Capo Lifelong Books.',
                  'Seligman, M. E. P. (1975). Helplessness: On depression, development, and death. W. H. Freeman.',
                  'Stark, E. (2019). Coercive control: How men entrap women in personal life. Oxford University Press.',
                  'Stern, R. (2007). The gaslight effect. Harmony.',
                  'Sweet, P. L. (2019). The sociology of gaslighting. American Sociological Review, 84(5), 851–875. https://doi.org/10.1177/0003122419874843',
                  'Travers, M. (2023, December 18). A psychologist helps you grasp and conquer "self-gaslighting." Forbes.',
                  'van der Kolk, B. A. (2014). The body keeps the score. Penguin Books.',
                  'World Health Organization. (2022). Mental health: Strengthening our response. https://www.who.int/news-room/fact-sheets/detail/mental-health-strengthening-our-response',
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

export default BlogPostSelfGaslighting;

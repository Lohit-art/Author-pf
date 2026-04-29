import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const BlogPost: React.FC = () => {
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
              Colonial Echoes: Intergenerational Psychological Impacts on Indian Society and Its Diaspora
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

            {/* Abstract */}
            <ArticleSection title="Abstract">
              <p>
                This conceptual paper explores how two centuries of British colonial rule shaped enduring psychological patterns within Indian society and its diaspora. Drawing on theories of historical and intergenerational trauma (Fanon, 1963; Hartmann et al., 2019), it examines how colonial subjugation cultivated silence, obedience, and moral restraint—behaviours that persist as cultural habits of endurance. Pre-colonial communal ethics such as <em>Vasudhaiva Kutumbakam</em> ("the world is one family") gave way to individual survivalism under economic exploitation, famine, and punishment regimes. Case illustrations—the 1943 Bengal famine, the suppression of Bengal muslin industries, and the 1969 Coventry radioactive-chapati experiment—reveal how deprivation, fear, and moral shame became internalized.
              </p>
              <p className="mt-4">The framework traces four pathways:</p>
              <ul className="article-list mt-2">
                <li>(a) gendered colonial body politics;</li>
                <li>(b) food-scarcity trauma and health behaviour;</li>
                <li>(c) diaspora obedience and "Rhythm Zero" passivity; and</li>
                <li>(d) economic scarcity and deferred gratification.</li>
              </ul>
              <p className="mt-4">
                A global comparison situates India's "unharmed race" conditioning against other regions marked by militarized or expressive resistance. Together these strands explain how historical deprivation transformed into modern risk aversion, civic disengagement, and status anxiety. Recognizing these inherited structures enables post-colonial communities to move from endurance to agency through cultural remembrance, collective healing, and renewed pride.
              </p>
            </ArticleSection>

            <Divider />

            {/* Introduction */}
            <ArticleSection title="Introduction">
              <p>
                Colonialism reshaped not only India's economy and politics but also its collective psyche. British rule institutionalized hierarchy, surveillance, and deprivation, producing a legacy of psychological submission and moral ambivalence that continues across generations (Chakrabarty, 2000; Nandy, 1983). Modern behaviours—silent endurance, excessive obedience, oscillation between cultural pride and inferiority—can be read as echoes of colonial conditioning. Understanding these legacies illuminates contemporary Indian society and its diaspora, where fear of authority and the pursuit of external validation persist long after independence.
              </p>
            </ArticleSection>

            <Divider />

            {/* Theoretical Background */}
            <ArticleSection title="Theoretical Background">
              <p>
                Historical-trauma theory posits that collective oppression leaves psychological wounds transmitted through families and culture (Brave Heart, 1998; Hartmann et al., 2019). Postcolonial psychology extends this to colonized societies where humiliation, moral policing, and dependency eroded indigenous self-worth (Fanon, 1963; Craps, 2013). India's colonial encounter generated such trauma through sustained economic extraction, epistemic violence, and internalized inferiority (Nandy, 1983). This paper integrates these perspectives to conceptualize colonial trauma as a multigenerational psychological system.
              </p>
            </ArticleSection>

            <Divider />

            {/* Gendered Body Politics */}
            <ArticleSection title="Colonial Legacy and Gendered Body Politics">
              <p>
                Before British intervention, Indian women's dress and conduct varied by region and caste without a single moral code. Victorian ideals introduced by missionaries redefined modesty and bodily shame (Chatterjee, 1989; Sinha, 1995). The adoption of the blouse and petticoat with the sari symbolized "civilized" femininity (Banerjee, 2004). These values continue to influence diaspora attitudes toward female propriety and social respectability.
              </p>
              <p className="mt-4">
                Colonial schooling taught deference, silence, and obedience as virtues, embedding gendered control into family life. Traditional India had men with long hair and piercing, those ways are considered as lack of grooming and being impolite. Even now schools are very strict and for working in government services too one has to follow a proper haircut unless it is a religious-related situation—showing an oscillation between cultural pride and inferiority.
              </p>
            </ArticleSection>

            <Divider />

            {/* Food and Famine */}
            <ArticleSection title="Food, Famine, and Health Psychology">
              <p>
                British revenue policies and wartime exports produced recurrent famines culminating in the 1943 Bengal famine (Davis, 2001). Families learned to hoard and ration, developing a <em>best-day food</em> mentality—saving good food for later, fearing future scarcity (Patnaik, 2018). Intergenerationally, this evolved into restrictive consumption and guilt around waste, behaviours linked to modern dietary imbalance and elevated diabetes rates among Indians worldwide (Gupta &amp; Misra, 2007; Patel et al., 2018). The colonial memory of famine thus survives in everyday eating practices and body anxiety.
              </p>
            </ArticleSection>

            <Divider />

            {/* Diaspora Behaviour */}
            <ArticleSection title='Diaspora Behaviour and the "Rhythm Zero" Mentality'>
              <h3 className="article-subheading">Civic Disengagement and Fear of Authority</h3>
              <p>
                Centuries of punishment for dissent produced a habit of risk avoidance. In diaspora settings, many individuals instinctively withdraw from public conflict—for example, walking away from road accidents or assaults, fearing legal or personal harm (Singh &amp; Bhattacharya, 2020). This mirrors Marina Abramovic's <em>Rhythm Zero</em> performance, where passivity empowered aggression (Craps, 2013). Colonial fear conditioning fosters bystander silence, inadvertently granting power to wrongdoers and authority figures.
              </p>

              <div className="article-bullet-block mt-6 space-y-5">
                <BulletPoint title="The Coventry Radioactive Chapati Experiment (1969)">
                  In a stark example of exploitation, 21 Indian diaspora women in the UK were fed radioactive chapatis containing Iron-59 during a "nutrition" study (UK Medical Research Council, 1969; <em>The Guardian</em>, 2018). The women sought treatment for weakness but were used as experimental subjects without informed consent, safety measures, or any intimation provided to them or their families.
                </BulletPoint>

                <BulletPoint title="Media Disparity and Recognition">
                  Fatal incidents involving Indian students or the diaspora rarely receive the global media attention or institutional advocacy afforded to other movements, such as "Black Lives Matter". This historical amnesia and lack of articulation of injustice perpetuates community vulnerability (Bhatia, 2017; Cheung &amp; Sahoo, 2021).
                </BulletPoint>

                <BulletPoint title="Surge in Anti-Indian Hostility">
                  There has been a massive increase in reported physical and racial attacks targeting Indian students and diaspora members, with anti-Indian posts online gaining over 280 million views.
                </BulletPoint>

                <BulletPoint title="Institutional Neglect in Schools">
                  The racial bullying of Hindu and Indian diaspora children in UK schools has not been adequately considered by school boards despite continuous complaints from parents.
                </BulletPoint>

                <BulletPoint title="Targeted Violence and Victim Blaming">
                  During the 2009–2010 Melbourne attacks, victims insisted the violence was purely targeted and racial, yet police authorities maintained that the primary motive was robbery of students working late nights.
                </BulletPoint>

                <BulletPoint title="Mass Desecration of Sacred Spaces">
                  A significant escalation in the vandalism and destruction of Hindu temples was recorded globally between 2024 and 2026. This trend was most severe in Bangladesh, where the Bangladesh Hindu Buddhist Christian Unity Council (BHBCUC) reported that 152 Hindu temples were desecrated or destroyed during a wave of communal violence between August and December 2024 following the resignation of the Prime Minister (BHBCUC, 2025; Wikipedia, 2026). While these attacks were often framed as political retribution, the targeted nature of religious architecture highlights a specific vulnerability of the minority community during periods of state instability.
                  <br /><br />
                  In Canada, a parallel but distinct rise in "mass desecration" was noted, characterized by recurring vandalism, anti-India graffiti, and targeted protests at major mandirs in cities such as Brampton, Surrey, and Windsor. Between 2024 and early 2026, over 50 individual incidents of temple-related harassment were documented in Canada, leading to the implementation of "Safe Access" legislation to protect these spaces from aggressive protests (Coalition of Hindus of North America, 2026). Similar incidents of vandalism and threats occurred in major cities of UK, Australia and USA.
                </BulletPoint>
              </div>

              <h3 className="article-subheading mt-8">Dual Morality and Cultural Rigidity</h3>
              <p>
                During the colonial era, the perceived inferiority of indigenous traditions led to a "split-existence." At home, the Indian way of life was preserved in secret, while outside, the British administrative and educational reforms were followed out of necessity (Viswanathan, 1989). This produced a rigid adherence to tradition born of the fear of cultural erasure, a phenomenon where the "thick-skinned" nature of Indian culture acted as a defensive shield (Bhatia, 2017).
              </p>
              <p className="mt-4">
                In the contemporary era, this has evolved into a form of psychological sovereignty. Where colonial rule once demanded quietude and obedience, modern cultural expressions—both at home and in the diaspora—often manifest as extravagant and "loud" celebrations. These acts can be interpreted as a subconscious rebellion against historical suppression (Said, 1978).
              </p>
              <p className="mt-4">
                Furthermore, behaviours such as a "lack of civic sense" in a major part of the population, such as disruptive public celebrations or non-compliance with minor local norms, can be viewed as deliberate acts of power. When faced with racial slurs like "curry," which attempt to reduce the individual to a stereotype, there is a psychological shift; the individual compensates by outperforming in professional spheres to regain control, while simultaneously engaging in "small disruptive behaviours" (such as littering or noise) as a way to assert presence and agency against a system that once demanded their invisibility (Fanon, 1963; Singh &amp; Bhattacharya, 2020).
              </p>

              <div className="mt-6 p-6 bg-primary-50 border-l-4 border-primary-400 rounded-r-lg">
                <p className="text-sm font-semibold text-primary-800 mb-2">Global Parallel: The Australian Indigenous Context</p>
                <p className="text-neutral-700 text-sm leading-relaxed">
                  A similar trajectory of dual morality is observed in Australian Indigenous communities. Resistance to Western institutional norms, such as schooling, and the demand for "Rent"—compensation based on the principle of unceded land—reflect a rejection of a system that historically sought to assimilate them (Foley &amp; Anderson, 2006). In both the Indian and Indigenous contexts, the "iron cage" of the settler-native dyad results in behaviours that prioritize psychological survival over conformist "civic sense" (Engeström, 2016; Wanganeen, 2014).
                </p>
              </div>
            </ArticleSection>

            <Divider />

            {/* Economic Scarcity */}
            <ArticleSection title='Economic Scarcity and the "Living for the Future" Mindset'>
              <p>
                Colonial exploitation normalized insecurity: taxes were extracted during famines, and Indian railways, financed by Indian taxpayers, served British profit (Tharoor, 2017). Families internalized survival through saving and self-denial (Patnaik, 2018). Today, middle-class Indians prioritize financial accumulation, social comparison, and deferred gratification over present well-being (Nandy, 1983; Kaur, 2023). Occasional conspicuous spending replicates colonial class mimicry, displaying success while masking anxiety. This scarcity-abundance cycle embodies trauma converted into ambition.
              </p>
            </ArticleSection>

            <Divider />

            {/* Unharmed Race */}
            <ArticleSection title='The "Unharmed Race" and Global Comparative Patterns'>
              <p className="mb-6">
                India's non-violent freedom struggle institutionalized moral endurance as virtue (Guha, 2008). Compared globally, this produced a softer postcolonial psychology than regions forged in violent resistance.
              </p>

              {/* Comparison Table */}
              <div className="overflow-x-auto rounded-lg shadow-soft border border-neutral-200 mb-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-primary-700 text-white">
                      <th className="text-left px-4 py-3 font-semibold">Region</th>
                      <th className="text-left px-4 py-3 font-semibold">Dominant Experience</th>
                      <th className="text-left px-4 py-3 font-semibold">Psychological Legacy</th>
                      <th className="text-left px-4 py-3 font-semibold">Sources</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        region: 'East & Southeast Asia',
                        experience: 'Recurrent wars, authoritarian modernization',
                        legacy: 'Collective discipline, state nationalism',
                        sources: 'Chang (2007); Koh (2011)',
                      },
                      {
                        region: 'Europe',
                        experience: 'Two world wars',
                        legacy: 'Superiority mixed with guilt; institutional dominance',
                        sources: 'Mazower (2012)',
                      },
                      {
                        region: 'Africa',
                        experience: 'Slavery & violent decolonization',
                        legacy: 'Loud cultural assertion, politicized identity',
                        sources: 'Mbembe (2001)',
                      },
                      {
                        region: 'Middle East',
                        experience: 'Oil, ideological conflict',
                        legacy: 'Externalized trauma via militancy',
                        sources: 'Said (1978); Kepel (2002)',
                      },
                      {
                        region: 'India',
                        experience: '200 years of bureaucratic control, famine, cultural erasure',
                        legacy: 'Moral restraint, silence, non-violent pride',
                        sources: 'Nandy (1983); Tharoor (2017)',
                      },
                    ].map((row, i) => (
                      <tr
                        key={row.region}
                        className={i % 2 === 0 ? 'bg-white' : 'bg-primary-50'}
                      >
                        <td className="px-4 py-3 font-medium text-neutral-900">{row.region}</td>
                        <td className="px-4 py-3 text-neutral-700">{row.experience}</td>
                        <td className="px-4 py-3 text-neutral-700">{row.legacy}</td>
                        <td className="px-4 py-3 text-neutral-500 text-xs">{row.sources}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p>
                Despite participation in both World Wars under British command (Roy, 2016) and mass exportation of indentured labourers to Africa and Southeast Asia, Indian suffering remained under-acknowledged. This historical amnesia perpetuates vulnerability to racism; communities conditioned to silence rarely articulate injustice (Bhatia, 2017; Cheung &amp; Sahoo, 2021). Unlike other colonies in history which gained independence through violence and military combat, India chose a different strategy: non-violence. The non-cooperation movement, Dandi march, salt satyagraha or Simon Go Back call—in any of it, the motto was to endure. Gandhi's famous teaching—"if they slap one cheek, show them the other"—highly led to moral supremacy, endurance and emotional suppression that we can still see in the diaspora today.
              </p>
            </ArticleSection>

            <Divider />

            {/* Discussion */}
            <ArticleSection title="Discussion and Conclusion">
              <p>
                The Colonial Echoes Framework demonstrates how systemic oppression crystallized into enduring psychological templates: gender modesty, famine anxiety, civic passivity, and scarcity-driven ambition. Intergenerational transmission of these patterns links colonial trauma to modern mental-health and social behaviours in both India and its diaspora. Healing requires re-storying history—acknowledging erased sufferings such as the Coventry experiment, the muslin weavers' mutilation, and the export of Indian labour—to transform inherited fear into conscious resilience. Reviving pre-colonial collectivist ethics like <em>Vasudhaiva Kutumbakam</em> and promoting open emotional expression can help reverse the psychology of endurance into one of empowerment.
              </p>
            </ArticleSection>

            <Divider />

            {/* References */}
            <ArticleSection title="References">
              <div className="space-y-2 text-sm text-neutral-700 leading-relaxed">
                {[
                  'Banerjee, S. (2004). The Politics of the Body in Colonial India. Cambridge University Press.',
                  'Bhatia, S. (2017). Decolonizing Psychology: Globalization, Social Justice, and Indian Youth Identities. Oxford University Press.',
                  'Brave Heart, M. Y. H. (1998). The return to the sacred path: Healing from historical trauma and historical unresolved grief among the Lakota. Smith College Studies in Social Work, 68(3), 287–305.',
                  'Chakrabarty, D. (2000). Provincializing Europe: Postcolonial Thought and Historical Difference. Princeton University Press.',
                  'Chang, G. H. (2007). Asian Americans and the Politics of Race and Culture. Temple University Press.',
                  'Chatterjee, P. (1989). Colonialism, nationalism, and colonized women: The contest in India. American Ethnologist, 16(4), 622–633.',
                  'Chatterjee, P. (1993). The Nation and Its Fragments: Colonial and Postcolonial Histories. Princeton University Press.',
                  'Cheung, S., & Sahoo, A. K. (2021). Asian diasporas, pandemic racism, and resilience. Journal of Ethnic and Migration Studies, 47(14), 3121–3138.',
                  'Craps, S. (2013). Postcolonial Witnessing: Trauma Out of Bounds. Palgrave Macmillan.',
                  'Davis, M. (2001). Late Victorian Holocausts: El Niño Famines and the Making of the Third World. Verso.',
                  'Fanon, F. (1963). The Wretched of the Earth. Grove Press.',
                  'Foley, G., & Anderson, T. (2006). Land rights and Aboriginal voices. The Australian Journal of Anthropology.',
                  'Guha, R. (2008). India After Gandhi. HarperCollins.',
                  'Gupta, R., & Misra, A. (2007). Type 2 diabetes in developing countries: Lessons from India. Asian Journal of Diabetology, 9(1), 14–22.',
                  'Hartmann, W. E., Gone, J. P., & Michaelsen, K. G. (2019). American Indian historical trauma: Anticolonial implications for healing, resilience, and survivance. American Psychologist, 74(1), 6–19.',
                  'Kaur, H. (2023). Intergenerational trauma in the context of the 1947 India–Partition. Psychological Studies, 68(2), 233–248.',
                  'Kepel, G. (2002). Jihad: The Trail of Political Islam. Harvard University Press.',
                  'Kirmayer, L. J., Gone, J. P., & Moses, J. (2014). Rethinking historical trauma. Transcultural Psychiatry, 51(3), 299–319.',
                  'Koh, D. (2011). Culture and Modernity in Asia. Routledge.',
                  'Mazower, M. (2012). Governing the World: The History of an Idea. Penguin.',
                  'Mbembe, A. (2001). On the Postcolony. University of California Press.',
                  'Mukherjee, R. (1974). The Rise and Fall of the East India Company. People\'s Publishing House.',
                  'Nandy, A. (1983). The Intimate Enemy: Loss and Recovery of Self Under Colonialism. Oxford University Press.',
                  'Ngũgĩ wa Thiong\'o. (1986). Decolonising the Mind: The Politics of Language in African Literature. Heinemann.',
                  'Patel, V., et al. (2018). Health transitions and chronic disease in India. The Lancet, 392(10158), 2437–2460.',
                  'Patnaik, U. (2018). The Republic of Hunger and Other Essays. Monthly Review Press.',
                  'Qureshi, F., Misra, S., & Poshni, A. (2023). The partition of India through the lens of historical trauma: Intergenerational effects on immigrant health in the South Asian diaspora. SSM–Mental Health, 4(1), 100246.',
                  'Roy, K. (2016). Indian Army and the First World War. Oxford University Press.',
                  'Said, E. W. (1978). Orientalism. Pantheon.',
                  'Singh, R., & Bhattacharya, S. (2020). Civic disengagement and bystander behavior among South Asians in Britain. Journal of Cross-Cultural Psychology, 51(8), 672–689.',
                  'Sinha, M. (1995). Colonial Masculinity: The "Manly Englishman" and the Effeminate Bengali. Manchester University Press.',
                  'Tharoor, S. (2017). Inglorious Empire: What the British Did to India. Penguin Books.',
                  'UK Medical Research Council. (1969). Unpublished nutrition experiment records, Coventry (archival materials reported in The Guardian, 2018, May 9).',
                  'Viswanathan, G. (1989). Masks of Conquest: Literary Study and British Rule in India. Columbia University Press.',
                  'Wanganeen, R. (2014). Seven Phases of Integrating Loss and Grief. (Report on Indigenous mental health and colonial impact).',
                  'Centre for the Study of Organized Hate. (2025, September 17). New report: Anti-Indian racism on X on the rise. https://www.csohate.org/press-releases/new-report-anti-indian-racism-on-x-on-the-rise/',
                  'AIHW (Australian Institute of Health and Welfare). (2026). Educational participation and attainment of adults. Indigenous HPF.',
                  'Quijano, A. (2000). Coloniality of power, Eurocentrism, and Latin America. Nepantla: Views from South.',
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

export default BlogPost;

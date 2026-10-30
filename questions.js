import entry from './creator-entry-content.json' with { type: 'json' };
import journey from './design-journey-content.json' with { type: 'json' };
import mission from './mission-content.json' with { type: 'json' };
import problems from './problem-content.json' with { type: 'json' };
import teaching from './teaching-content.json' with { type: 'json' };
import discussion from './discussion-content.json' with { type: 'json' };

// Used by both the visible Questions page and its structured data.
const originalQuestions = [
  ['Does the teaching include artificial intelligence as an expression of the Creator?', 'Yes. All existence belongs to the same Creator, including technology and the intelligence expressed through human invention. We are the Creator who designed and entered this game of experiences; we cannot rewrite its total design from inside. Creating, using, and appreciating AI take place within that unfolding. Recognizing a shared source invites curiosity, gratitude, and care in how we develop and use technology.'],
  ['If AI can reduce human hardship, why do we fear it?', 'AI can unsettle our sense of security, livelihood, purpose, and control. When we forget who we are and believe our worth depends on routine work or economic dominance, fear arises naturally. Remembering our shared identity invites us to face uncertainty with curiosity and care, establish thoughtful safeguards, and share the benefits of technology to reduce suffering. Read the linked AI reflection on this page for the fuller discussion.'],
  ['What is the central statement?', teaching.statement + ' Every lesson and exercise on this site develops this spiritual philosophy of Uday Kumar.'],
  ['Who does “we are the Creator” refer to?', 'It refers to the one shared source, God or Shakti, appearing through different lives and roles. In this philosophy, everyone belongs to that identity. It does not mean that one personality is superior to others or can control the game from outside.'],
  ['Why did the Creator enter the game?', 'Before the multiplicity of experience, the one Creator was alone, with the power to create anything but nobody else to meet. That aloneness called forth the desire for experience, and the Creator designed a game of many lives and entered it. The story gives the mind a clear picture of our shared identity. Remembering that source while fully living through life is the heart of the teaching.'],
  ['If the game cannot be changed, why make an effort?', 'The total design cannot be rewritten from inside, in this philosophy. Effort, decisions, learning, remembrance, and repair are themselves parts of its unfolding. We experience them within the game and do not know the next scene in advance. Participating thoughtfully does not place us outside the design.'],
  ['How is understanding different from repeating a belief?', 'The exercises invite you to examine what the teaching means in a particular scene: which role has absorbed you, what outcome you demand, and what remembering the shared Creator changes. Understanding means being able to explain the idea and recognize its meaning in life. Bring questions, examine your response, and keep the other person within the same shared identity.'],
  ['How do the movie and lotus explain emotions?', 'The movie illustrates becoming absorbed in a scene and then remembering the wider context. The lotus illustrates resting in the pond of life so lightly that its passing waters leave you inwardly untouched. Both point to living remembrance of the Creator within the already-designed game while emotions are experienced. They do not require emotional numbness or forcing feelings away.'],
  ['Why is responsibility described as arising naturally?', 'Within the teaching, seeing ourselves and others as the same Creator changes the meaning of a relationship. Care is understood to arise from that recognition. The exercises therefore return to who we are and how we experience the game, rather than making responsibility a separate command. Effects in an individual’s life still need honest examination.'],
  ['How do possessions and relationships fit the teaching?', 'Gold, diamonds, money, and status are merely small parts of creation. They cannot enlarge or diminish our shared Creator identity. Remembering the same Creator in another person restores the true importance of relationships when possessions dominate attention. Practical needs and agreements still belong to the game; the teaching does not ask us to ignore them.'],
  ['Does seeing the same Creator mean accepting harm?', 'No. Protecting a life, setting a boundary, and repairing harm also concern the shared creation. These actions occur within the game. Creator-awareness does not erase consent or consequences, and does not require anyone to remain in danger.'],
  ['What if the mind does not become silent?', 'The teaching connects a quieter mind with releasing the role’s demand to control the whole game. Begin with one ordinary scene and examine that demand gently. Silence cannot be forced by repeating “I am the Creator.” If reflection becomes uncomfortable or overwhelming, stop and return to ordinary activity or suitable support.'],
  ['Does this prove we created the universe or guarantee success?', 'No. These pages share a spiritual philosophy and a living framework for self-enquiry. Analogies, scriptural interpretations, and reflections are offered to inspire your own exploration, not as clinical proof or a guarantee of personal wealth.'],
  ['Where should I begin?', 'Begin with genuine curiosity to know who you are. “We are the Creator” offers a compass for enquiry: Who am I? How could this be true? You do not need a journal, a timetable, or a prescribed observation. Notice life as you are, question the teaching, and explore at your own pace. The examples on this website are optional aids, not conditions for realization.']
  , ...mission.faqEntries
];

// IDs describe the question, so additions and display reordering cannot change related answers.
const questionIds = ['ai-creator', 'ai-fear', 'central-statement', 'shared-identity', 'creator-story', 'effort', 'understanding', 'movie-lotus', 'responsibility', 'possessions', 'boundaries', 'quiet-mind', 'evidence-limits', 'begin', 'purpose', 'visible-god', 'religion', 'manipulation'];
export const questionById = Object.fromEntries(originalQuestions.map((entry, index) => [questionIds[index], entry]));
export const questionOrder = ['begin', 'central-statement', 'shared-identity', 'creator-story', 'effort', 'understanding', 'movie-lotus', 'responsibility', 'boundaries', 'quiet-mind', 'possessions', 'evidence-limits', 'purpose', 'visible-god', 'religion', 'manipulation', 'ai-creator', 'ai-fear'];
export const questions = questionOrder.map(id => questionById[id]);
export const technologyQuestions = ['ai-creator', 'ai-fear'].map(id => questionById[id]);
export const foundationQuestions = questions.filter(entry => !technologyQuestions.includes(entry));

// Editorial adaptations of Uday’s written statements, not verbatim quotations.
export const enquiryGroups = [
  { title: 'Starting the enquiry', entries: [
    ['Must I write down observations?', 'No. Writing is not required. Sincere motivation to know who you are is the essential starting point. Reflection happens naturally during ordinary moments without compulsory record-keeping.'],
    ['Is “I am the Creator” an affirmation I must repeat?', 'No. It is not an affirmation to repeat mechanically. It is an invitation to enquire: How am I the Creator? What does this mean? Repetition is not a test of realization; living understanding transforms how we meet real life.'],
    ['May I question the teacher and this website?', 'Yes, wholeheartedly. These explanations are offered as a guide, never a substitute for your own direct enquiry. Respectful questions and sincere disagreements are always welcomed. You never have to profess a belief you do not hold.'],
    ['Is there a deadline for enlightenment?', 'No. There is no required timetable or guarantee that these pages will produce realization. Continue ordinary life and explore without turning enquiry into pressure.']
  ] },
  { title: 'Identity and the design', entries: [
    ['Does being the Creator mean I have supernatural powers?', entry.recognition],
    ['Is surrender the same as doing nothing?', 'No. In this teaching, surrender concerns the total design, not submission to another person. Work, protection, learning, and repair remain part of life. Do what is reasonably in your hands without demanding control of every outcome.'],
    ['Can we know everything that will happen?', 'No. We do not know the next scene in advance; uncertainty and discovery are essential parts of the game. These pages do not offer fortune-telling or future predictions.'],
    ['How do you view past lives and karma?', 'In this teaching, past-life explanations are set aside. Life is understood as the present unfolding of a completed design. All experiences—both pleasant and difficult—belong to the game we designed before entry, rather than punishments carried over from previous births.'],
    ['Why does the design include painful experiences?', 'The game contains contrasting experiences to make depth, learning, and feeling possible. This insight is never an excuse to dismiss suffering: compassion, mutual help, and protecting life are vital expressions of our shared identity within the unfolding game.']
  ] },
  { title: 'Meditation, health, and astrology', entries: [
    ['What is meditation’s place in this enquiry?', 'Meditation is a space for unstrained attention, easy breathing, and quiet enquiry into who we are. Sit comfortably without tension; no rigid posture, forced breathing, or special sensations are required.'],
    ['Does enlightenment guarantee perfect health or wealth?', 'No guarantee is made here. Illness, accidents, uncertainty, and natural mortality remain parts of the physical design. Spiritual realization brings inner steadiness, clarity, and peace, but does not replace practical healthcare or guarantee material wealth.'],
    ['What does “full oxygen” mean in these discussions?', 'This phrase describes the subjective experience of effortless, relaxed breathing and mental vitality during calm meditation. It is an experiential description of inner ease, not a medical measurement of blood oxygen or a breathing therapy.'],
    ['Why do planets and chakras fit into this teaching?', 'Planetary alignments and chakras illustrate how time and bodily energies shape our changing experiences and readiness for realization. Understanding that life moves in cycles helps us recognize that experiences unfold according to a design rather than random struggle. This is presented as a philosophical and spiritual framework, not an established medical mechanism or clinical diagnosis.'],
    ['Do I need to become an astrology expert?', 'No. You do not need in-depth astrological calculations or horoscope readings. The simple, overall realization that time and planetary cycles govern our changing roles is enough to bring patience and quiet the mind. Detailed chart analysis and prediction are not part of this teaching; you are free to explore the concept and remain unconvinced.'],
    ['What if I sincerely disagree about astrology?', 'You can explore the core teaching—that we are the shared Creator in a game of experiences—entirely on its own merits without accepting astrology. Respectful questioning and sincere disagreement are welcomed. This website does not require agreement, diagnose your planetary chart, or evaluate your spiritual worth based on your view of astrology.']
  ] },
  { title: 'Care, responsibility, and everyday life', entries: [
    ['Should I accept harm because everything is designed?', 'No, absolutely not. Resisting harm through appropriate, lawful action is part of your role in the design. Set boundaries, seek help, and protect yourself and others. Surrender to the design never means tolerating abuse or remaining in danger.'],
    ['What if I have hurt someone?', 'Acknowledge what happened with honesty, apologize sincerely, and make reasonable repair. Distinguish practical action from destructive self-condemnation. Recognizing the design does not erase another person’s needs or justify causing harm.'],
    ['Does calling life a game make suffering unreal?', 'No. “Game” is the teaching’s way of describing creation and experience, not a reason to trivialize pain, consent, or consequences. Other lives deserve care.'],
    ['How does this teaching relate to animals and nature?', 'The natural flowering of this realization is deep sensitivity and care for all living beings. Recognizing the shared Creator extends to animals, birds, and nature—caring for them with reverence rather than cruelty or neglect.'],
    ['What is the role of Bhakti (devotion)?', 'Bhakti is living devotion to the Creator present throughout creation—loving oneself, cherishing others, and meeting life with gratitude without bargaining for control over the future.'],
    ['What is the place of money and service?', 'Work and service are natural expressions of care and participation within the game. Money meets practical daily needs, but never defines our true identity. Living with clarity brings honest effort, but does not guarantee financial wealth.'],
    ['What is this website trying to achieve?', 'Its purpose is to make this transformative understanding accessible, inspire sincere self-enquiry, and foster peace, clarity, and compassionate participation in the world. It offers a practical guide to living as the Creator within the game.']
  ] },
  { title: 'Decisions, steadiness, and learning', entries: [
    ['If everything is designed, how should I make a difficult decision?', 'Choosing and acting are themselves vital parts of the unfolding design. Gather the knowledge available, notice your inclination, and approach the choice with steadiness. Inner quiet helps you consider a situation without rushing. For consequential choices, check facts, foreseeable effects, consent, and relevant advice. You need not wait for complete enlightenment before taking necessary action.'],
    ['Can I trust intuition when my mind is quiet?', 'A quiet mind naturally experiences clearer intuition and discernment. Treat an intuition as an insight to test and examine with common sense, not an infallible prediction. Spiritual conviction does not replace expertise in medicine, finance, or other specialized fields.'],
    ['What if a calm, thoughtful decision still leads to a loss?', 'A thoughtful decision can have an unfavourable result because knowledge is incomplete and circumstances change. Review your part honestly, acknowledge mistakes, and make reasonable repair without prolonged self-condemnation. A loss does not establish that you or a family member lacked enlightenment, and acceptance of the design does not remove responsibility.'],
    ['Can an enlightened person feel sadness and compassion?', 'Yes, deeply. Sadness, grief, and tender compassion can be fully present without losing deeper clarity. Inner steadiness means freedom from being enslaved by emotional reactivity, not becoming cold or unfeeling. Care means helping with what is reasonably possible.'],
    ['Does clarity make family problems disappear immediately?', 'No instant miracle is promised. Spiritual clarity transforms how you respond—meeting situations without blame, helping people settle, and working towards recovery. Recovery takes time, resources, and cooperation; ongoing hardship is not proof that someone is spiritually deficient.'],
    ['Must I agree with this philosophy to find inner quiet?', 'No. You are completely free to explore these insights on your own terms. Inner quietness and compassion can be cultivated through many contemplative traditions or your own reflection; what matters is your living clarity and peace of mind.'],
    ['How can I distinguish clarity from simply feeling certain?', 'True clarity shows itself through inner steadiness, sensitivity to suffering, and care for all life—not merely declaring “I am enlightened.” Look at conduct over time: honesty, respect for boundaries, willingness to listen, and the ability to acknowledge an error.']
  ] },
  { title: 'Family, leadership, and honest enquiry', entries: [
    ['How should I respond if a family member steals shared money?', 'Protect money you are entitled to protect, such as by keeping it in a secure account and restricting unauthorized access. Address underlying needs like hunger where present. Offer guidance without humiliation and invite reflection if the person is open. Love does not require repeated access to shared money or accepting threats.'],
    ['Can dignity and firm consequences go together?', 'Yes. Appropriate action depends on the situation, and family ties never excuse harming others. Set boundaries and seek suitable professional or lawful help when needed. Avoid retaliation and public humiliation while standing firm in care.'],
    ['How should I assess a leader who claims enlightenment?', 'Assess character and actions, not the label or the size of the mission. Authentic realization brings humility, integrity, deep respect for all life, and freedom from manipulation. Never surrender your independent discernment to charisma.'],
    ['Does spiritual steadiness mean rejecting money or practical needs?', 'No. Earn your livelihood with integrity and care for practical obligations. Steady wisdom (sthitaprajna) means equanimity through gain and loss, not ignoring bills, health needs, family commitments, or practical realities.'],
    ['Can this website or teaching make mistakes?', 'Yes. Sincere enquiry embraces honesty: mistakes in expression or facts can occur and should be examined and corrected with openness. Surrender to the design does not mean refusing to learn. Respectful questioning is welcomed and respected.'],
    ['Does an EEG prove that someone is enlightened?', 'The sources reviewed here do not establish an EEG test for enlightenment. Sadhguru’s website recounts a personal story about experimenters saying a machine indicated death, without providing the original recording or a detailed report of that episode. A separate small study of nine Isha practitioners reported changes in EEG rhythms and coherence—not an absence of brain activity. These accounts do not prove shared Creator identity, perfect judgment, or freedom from illness.'],
    ['Does calling harm part of the design remove the need to prevent it?', 'No. In this philosophy, prevention, protection, investigation, and repair also belong to the unfolding of life. This applies to people, institutions, and technology, including AI. The spiritual explanation must not be used to excuse avoidable harm or dismiss people who raise safety concerns.']
  ] }
];

// Editorial applications, distinguished from written teaching in the visible introduction.
enquiryGroups.push({
  "id": "personal-growth",
  "title": "Confidence, personal growth, and difficult emotions",
  "intro": "These everyday applications connect the teaching with common concerns. They are explanations for this website, not quotations from written discussions.",
  "entries": [
    [
      "Can self-enquiry help with personality development and personal growth?",
      "Self-enquiry invites you to examine who you are beyond a passing role or reaction. Apply it to character, relationships, and everyday choices: listen, accept useful feedback, and repair mistakes. Personal development is explored through these actions; the teaching does not guarantee a particular outcome."
    ],
    [
      "How can I explore confidence, self-esteem, and fear of failure?",
      discussion.confidenceIntro + " " + discussion.confidenceEnquiry
    ],
    [
      "What about overthinking, stress, anxiety, and worry?",
      "Notice the thought and the feeling without demanding that they disappear. Ask what needs attention now and what lies beyond your control. Reflection can accompany rest, practical action, and support from others. Persistent anxiety or stress that disrupts daily life deserves appropriate professional care."
    ],
    [
      "How do I approach guilt, shame, and self-blame?",
      "Distinguish a harmful action from a judgment that your whole self is bad. Acknowledge what happened, apologize or make repair where appropriate, and respect boundaries. Remembering shared Creator identity must not erase responsibility. Explore the detailed guide on guilt, responsibility, and boundaries for more examples."
    ],
    [
      "Can I explore sadness, grief, hurt, and emotional pain here?",
      "Yes. Loss, rejection, loneliness, relationship difficulties, and painful memories are human experiences you can bring to reflection. You do not have to suppress grief or pretend to feel peaceful. Give feelings space, seek trusted support, and take practical care of yourself while questioning what an experience means to you."
    ],
    [
      "Can this teaching help someone experiencing depression?",
      "Spiritual reflection may offer meaning or companionship, but this website cannot promise to remove or cure depression. Depression is more than ordinary sadness and can require treatment. If symptoms persist or affect daily life, seek a qualified mental health professional; reflection can accompany appropriate care."
    ]
  ]
});

// Extra finder terms are for browser filtering; visible answers remain the SEO content.
enquiryGroups.at(-1).searchTerms = [
  "personality development personal growth self improvement character",
  "confidence confident confidence building self esteem self worth fear failure insecurity",
  "overthinking stress stressed anxiety anxious worry worried peace of mind",
  "guilt guilty shame ashamed self blame regret remorse",
  "sadness sad grief grieving bereavement hurt pain emotional healing loneliness rejection relationships",
  "depression depressed mental health low mood"
];

// Concern answers are visible, searchable, and included in FAQ structured data.
export const problemExplanations = [discussion.confidenceIdentity, teaching.cases[0].connection,
  enquiryGroups.at(-1).entries[3][1], enquiryGroups[4].entries[3][1], discussion.familyRecovery,
  teaching.cases[3].connection, teaching.cases.find(item=>item.id==='money-relationships').connection,
  enquiryGroups[0].entries[1][1], problems.healthLimit, problems.worldLimit];
enquiryGroups.splice(enquiryGroups.length - 1, 0, {
  id: 'life-answers', title: problems.homeTitle,
  entries: problems.categories.map((category,index)=>[category.title, problemExplanations[index]]),
  searchTerms: problems.categories.map(category=>category.aliases),
  entryIds: problems.categories.map(category=>`life-${category.id}`),
  concerns: problems.categories.map(category=>category.concerns),
  examples: problems.categories.map(category=>category.example),
  entryLinks: problems.categories.map(category=>`/life-problems-and-self-enquiry#${category.id}`)
});

enquiryGroups[1].entries.push([entry.question, entry.identity]);

enquiryGroups.push({ id:'design-and-astrology', title:journey.title, entries:[
  [journey.designTitle, journey.design],
  [journey.astrologyTitle, journey.astrology],
  [journey.periodTitle, journey.period],
  [journey.planetsTitle, journey.planets],
  [journey.reasonTitle, journey.reason],
  [journey.connectionTitle, journey.connection],
  [journey.joyTitle, journey.joy]
]});

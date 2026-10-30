import entry from './creator-entry-content.json' with { type: 'json' };
import benefits from './benefits-content.json' with { type: 'json' };
import problems from './problem-content.json' with { type: 'json' };
import discussion from './discussion-content.json' with { type: 'json' };
import teaching from './teaching-content.json' with { type: 'json' };
import { questionById, enquiryGroups } from './questions.js';

// Adapted from Uday Kumar’s written discussions and clarifications.
// These are spiritual explanations, not independently verified causal claims.
export const enquiryTopics = [
  {
    slug: 'who-am-i-self-enquiry', title: 'Who am I? How to begin self-enquiry',
    description: 'Explore “Who am I?” and self-realization through Uday Kumar’s teaching. Begin with curiosity, without a required journal, affirmation, or timetable.',
    answer: 'In Uday Kumar’s teaching, self-enquiry begins with the motivation to know who you are. “We are the Creator” offers a direction to investigate, not a statement you must repeat or accept without questioning. No journal, prescribed observation, or timetable is required.',
    sections: [
      ['What does “we are the Creator” mean?', 'Uday uses “Creator” for one shared source appearing through different lives, rather than a separate personality with superior powers. He describes embodied life as a game of experiences that this shared Creator designed and entered. This is the spiritual framework offered here; it does not give an individual authority over other people.'],
      ['How can I begin without a formal method?', 'You can remain in ordinary life and allow the question “Who am I?” to arise. A tree, a seed growing, a relationship, or awareness of your own body may invite wonder. Uday’s invitation is to enquire into what you encounter, not to complete a daily assignment. The website’s worked examples are optional aids.'],
      ['What if an answer comes from within?', 'Uday describes questions arising in the mind and understanding developing over time. You may notice an insight, a feeling of connection, or a quieter response. Examine what that insight means and what it does not establish. A strong feeling alone is not independent proof of an account of creation. Uncertainty can remain part of sincere enquiry.'],
      ['What might this look like in an ordinary moment?', 'Suppose someone disagrees with you. Rather than reducing yourself to the role that must win, you might ask what the shared identity means for both people. Listening carefully, asking a clear question, and maintaining a boundary can all follow. This is an illustration of the teaching, not a test that determines whether you are enlightened.']
    ], entries: [questionById['begin'], questionById['shared-identity'], ...enquiryGroups[0].entries],
    reflection: 'When you ask “Who am I?”, what are you taking your identity to be? You do not have to write an answer or reach a conclusion today.',
    practiceLink: '/practice#five-minutes'
  },
  {
    slug: 'surrender-free-will-and-design', title: 'What does surrender mean? Free will and the design',
    description: 'Understand surrender, effort, free will, and uncertainty in Uday Kumar’s philosophy. Surrender is not passivity or accepting harm.',
    answer: 'In Uday Kumar’s account, surrender means accepting that the total design cannot be rewritten from inside the game. It does not mean giving up work, protection, or responsibility. Decisions and actions are themselves part of the unfolding, while the next scene remains unknown to us.',
    sections: [
      ['If everything is designed, why act?', 'Uday includes learning, work, decisions, and repair within the design. An effort does not need to stand outside the world to matter in the experience. The teaching asks you to participate without demanding control over the whole outcome, rather than to wait for life to happen without responding.'],
      ['Surrender is not submission to another person', 'Uday explicitly distinguishes surrender to the design from surrender to someone who harms you. A boundary, asking for help, and appropriate lawful action remain possible. Describing events as part of a design does not remove consent, justify abuse, or require staying in danger.'],
      ['An example: waiting for an important result', 'You can prepare for an interview, answer honestly, and follow up appropriately. You cannot dictate every response or know the result in advance. In this philosophy, preparation and waiting are both experiences. Returning to the task at hand may loosen a demand that the future must immediately become certain. It does not guarantee that the interview will succeed.'],
      ['How does this relate to free will?', 'Uday’s position is that the entire unfolding is designed, including the feeling of choosing. This page explains that position; it does not claim to settle the philosophical debate about free will. You can examine the argument, ask questions about it, and disagree without being treated as inferior.'],
      ['Can surrender remove all uncertainty?', 'No. Uday repeatedly says that we do not know what comes next. He describes the unknown as part of the experience. Neither this site nor an astrological interpretation should be used as a promise that an accident, loss, or difficult event cannot occur.']
    ], entries: [questionById['effort'], ...enquiryGroups[1].entries.slice(1,3)],
    reflection: 'What can you reasonably do in the present situation, and what outcome are you trying to guarantee?',
    practiceLink: '/practice#decision'
  },
  {
    slug: 'meditation-and-self-realization', title: 'Meditation and self-realization: exploring who you are',
    description: 'Read Uday Kumar’s account of meditation, mental clarity, and self-realization, with clear limits on health claims and freedom to enquire at your own pace.',
    answer: 'Uday describes meditation as a setting for unstrained attention and enquiry into identity and creation. Its purpose in this teaching is understanding, not achieving a prescribed sensation. A feeling of calm or easier breathing does not by itself establish enlightenment or guarantee health.',
    sections: [
      ['Meditation is an invitation, not a performance', 'A quiet moment may make it easier to notice a question instead of immediately escaping into another activity. You do not need to force silence or measure yourself against another person’s account. Uday’s latest starting point is motivation to know who you are, with no compulsory timetable or record keeping.'],
      ['What is the intended connection with clarity?', 'Uday connects a stable mind with remembering the shared Creator and relinquishing the demand to control the whole design. He describes this as changing how an experience is met. These are intended benefits in his account, not a certificate that everyone who meditates will have the same response.'],
      ['An example: returning after a difficult conversation', 'You may notice anger, the need to be heard, or a repeated story about the other person. A pause can make room to ask what happened and what is needed now. Remembering a shared source might inform a calm but firm reply. The other person’s behaviour still matters, and a boundary may still be necessary.'],
      ['Health and breathing are not spiritual scorecards', 'Uday’s later clarifications allow illness, accidents, and death within the design. Do not judge someone’s realization by a diagnosis or abandon medical care because of a spiritual explanation. His phrase “full oxygen” describes an experience of breathing, energy, and clarity; it is not a measurement of blood oxygen or a treatment instruction.'],
      ['Where do astrology and chakras fit?', 'Planetary influences and chakras show how time and bodily energy structure our changing experiences within the game. An overall awareness of these cycles reveals that life moves by design and quiets the urge to force outcomes. These explanations form Uday’s philosophical framework, not an established medical mechanism; you may explore them and remain unconvinced.']
    ], entries: [questionById['quiet-mind'], ...enquiryGroups[2].entries],
    reflection: 'What do you notice when you pause without demanding a particular feeling? It is acceptable for a question to remain unanswered.',
    practiceLink: '/practice#overthinking'
  },
  {
    slug: 'guilt-responsibility-and-boundaries', title: 'Guilt, responsibility, and boundaries in self-enquiry',
    description: 'Explore Uday Kumar’s distinction between repair and self-condemnation. Recognizing a shared Creator does not mean accepting harm or avoiding responsibility.',
    answer: 'Uday distinguishes reasonable corrective action from prolonged self-condemnation. If you have hurt someone, acknowledge the harm, apologize where appropriate, and make reasonable repair. If someone harms you, take appropriate lawful action. Calling life a game is not permission to dismiss suffering.',
    sections: [
      ['What is the difference between remorse and self-condemnation?', 'Recognizing a mistake can tell you that something needs attention. Repeatedly declaring yourself worthless does not itself repair the effect on another person. Uday’s emphasis is on doing what is in your hands now, while avoiding unnecessary self-punishment. This does not mean denying what happened or assuming the other person must forgive you.'],
      ['An example: you broke a promise', 'You forgot a commitment and another person was inconvenienced. Acknowledge the missed commitment, listen to its effect, and offer practical repair where possible. You can also change how you keep future commitments. Saying “everything is designed” should not replace that conversation or become an excuse to repeat the behaviour.'],
      ['What if I cannot contact the person?', 'Uday says you need not keep hurting yourself when an apology is genuinely not possible. Recognize what went wrong and change the behaviour that remains in your hands. Respect the person’s wish for distance; an apology is not a reason to disregard a boundary. Some questions of repair may require appropriate professional or legal guidance.'],
      ['Can I be compassionate and still be firm?', 'Yes. In this teaching, seeing a shared identity need not erase limits. You can say that an action is unacceptable, leave a dangerous situation, or seek help. Uday clarified that his mosquito example was not permission to hurt another human being in retaliation. His intended response is proportionate and lawful.'],
      ['Does disagreement mean someone is less valuable?', 'No. Uday says he does not want to insult or force people who disagree. Different understandings are not a reason to treat someone as less worthy of care. The site welcomes sincere questions and does not infer a person’s worth from whether they accept the teaching.']
    ], entries: [questionById['boundaries'], ...enquiryGroups[3].entries.slice(0,4)],
    reflection: 'What repair or boundary is needed now? Can you act without reducing yourself—or the other person—to a single mistake?',
    practiceLink: '/practice#self-judgment'
  }
];

const caseById = id => teaching.cases.find(item=>item.id===id);
const overthinking = caseById('overthinking');
enquiryTopics.push(
  {slug:'life-problems-and-self-enquiry', title:problems.title, description:problems.description, published:'2026-10-10', modified:'2026-10-11'},
  {slug:'confidence-self-worth-and-self-enquiry', title:problems.confidenceTitle, seoTitle:'Confidence, self-worth and self-enquiry', description:problems.confidenceDescription,
    answer:discussion.confidenceIntro, published:'2026-10-10', modified:'2026-10-11',
    sections:[[discussion.confidenceTitle,discussion.confidenceIdentity],['A mistake is not your whole identity.',discussion.confidenceExample],['How is understanding different from repeating a belief?',discussion.confidenceEnquiry]],
    entries:enquiryGroups.at(-1).entries.slice(0,2), reflection:discussion.confidenceReflection, practiceLink:'/practice#self-judgment'},
  {slug:'overthinking-worry-and-uncertainty', title:problems.overthinkingTitle, seoTitle:'Overthinking, worry and self-enquiry', description:problems.overthinkingDescription,
    answer:overthinking.connection, published:'2026-10-10', modified:'2026-10-11',
    sections:[[overthinking.example,overthinking.scene],['Remembering the Creator',overthinking.remember],['Participating within the game',overthinking.participation]],
    entries:[questionById['quiet-mind'],enquiryGroups.at(-1).entries[2]], reflection:overthinking.reflection, practiceLink:'/practice#overthinking'}
);

for (const topic of enquiryTopics) {
  if (["confidence-self-worth-and-self-enquiry", "meditation-and-self-realization"].includes(topic.slug)) topic.modified = "2026-10-13";
  if (topic.slug === "confidence-self-worth-and-self-enquiry") topic.sections.push(...benefits.items.slice(0, 4).map(item => [item.title, item.text]), [benefits.designTitle, benefits.effort]);
  if (topic.slug === "meditation-and-self-realization") topic.sections.push([benefits.items[4].title, benefits.items[4].text], [benefits.designTitle, benefits.design]);
}

for (const topic of enquiryTopics) {
  if (topic.slug === "who-am-i-self-enquiry") { topic.sections.push([entry.title, entry.identity], [entry.question, entry.example]); topic.modified = "2026-10-14"; }
  if (topic.slug === "meditation-and-self-realization") { topic.sections.push([entry.meditationTitle, entry.meditation], [entry.title, entry.recognition]); topic.modified = "2026-10-14"; }
}

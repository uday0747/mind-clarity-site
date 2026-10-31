import React from 'react';
import { Page, Contents, Lesson, Reflection } from './site-layout.js';
import teaching from './teaching-content.json' with { type: 'json' };

const e = React.createElement;
const p = text => e('p', null, text);

const items = [
  ['trap', 'The trap of the outside God and the fog of Kali'],
  ['feel', 'Why we entered to feel: the flute and the breath'],
  ['labor', 'The end of survival labor and the threshold of Satya'],
  ['timing', 'Has the time come for mass awakening?'],
  ['contemplation', 'A contemplative pause']
];

export default function WhyWeEnteredToFeel({ embedded = false } = {}) {
  return e(Page, {
    eyebrow: 'A reflection by Uday Kumar · 31 October 2026',
    title: 'From Survival to Satya: Why We Entered to Feel, Technology’s Role, and the Timing of Awakening',
    intro: teaching.statement
  },
    e('p', { className: 'quiet-note' }, 'Published', ' ', e('time', { dateTime: '2026-10-31' }, '2026-10-31')),
    p('Looking back across human history, one cannot avoid the profound grief of our journey: human beings slaughtering other human beings over land, wealth, borders, and possessiveness. For centuries, religions promised peace, yet they placed God safely outside of humanity—declaring God to be only on their side, while turning their neighbors into enemies.'),
    p('By blinding people to the truth that the very same Creator lives in every heart, humanity fell into the dense fog of Kali Yuga—an age where the ego fights over dust, unaware that in striking another, it is wounding itself. Today, as artificial intelligence and robotics emerge to take over human toil, an ancient question returns to center stage: Why did we enter this game in the first place? And has the time finally arrived for humanity to awaken?'),
    e(Contents, { items }),
    e(Lesson, { id: 'trap', title: items[0][1] },
      p('For millennia, organized dogmas created an artificial split in the universe. They claimed God was somewhere high in heaven, rewarding only the faithful and punishing the rest. This tragic misunderstanding gave humans moral justification to conquer, exploit, and dominate one another in God’s name.'),
      p('When you believe you are a separate, mortal body that must fight against an alien world to survive, fear takes total control of the mind. Driven by that terror, human beings murdered, enslaved, and hoarded land and gold, believing that owning more matter could somehow make a fragile personality eternal.'),
      p('In this teaching, Kali Yuga is not a cosmic calendar date—it is the density of our forgetting. When we forget who we are, we treat the temporary role as our total identity. But the moment we recognize that the person across the border, the person who disagrees with us, and the stranger on the street share the exact same divine source, the moral foundation for hatred evaporates completely. To hate another is to hate yourself.')),
    e(Lesson, { id: 'feel', title: items[1][1] },
      p('While reflecting on the nature of artificial intelligence, a striking realization becomes clear: AI can process all the world’s libraries in seconds, organize thoughts, and compose language with breathtaking precision. Yet, it does not weep. It does not feel its heart race with wonder, nor does it taste the sweetness of water or the agony of loss.'),
      p('And that points directly to the core secret of our existence: Why did the Creator create this game and enter human form? Unlimited, omnipotent power can create an entire universe in an instant. But unlimited power cannot experience anything. It cannot feel tenderness, because it has no vulnerability. It cannot experience discovery, because it already knows everything. It cannot taste companionship, because there is no one else to meet.'),
      p('We voluntarily left our unrestricted powers behind and stepped into human bodies with limited senses, vulnerable hearts, and passing roles specifically so we could feel. When an insight moves you so deeply that tears of ecstasy fall from your eyes, that is the Creator, through a living human nervous system, drinking the nectar of its own realization. Technology and language may act like a hollow flute through which truth passes, but you are the breath, the music, and the tears.')),
    e(Lesson, { id: 'labor', title: items[2][1] },
      p('For thousands of years, the vast majority of human beings were trapped in backbreaking labor just to secure food, shelter, and survival. Life became an exhausting scramble, leaving little time or energy for the spirit to enquire into who it is. Now, through human ingenuity—which itself is an expression of the Creator within the game—we have designed artificial intelligence and robotic forms.'),
      p('While the transitional period brings natural anxiety about lost livelihoods and salaries, the deeper trajectory is clear: humanity is being liberated from the curse of compulsory toil. Machines do not have souls to bruise, nor do they need creative fulfillment; they can build, cultivate, transport, and calculate. As robotics and intelligence mature, they will handle the heavy lifting of existence. When society adapts its economic rules to share this abundance, humans will no longer be forced to act as living machines.'),
      p('This material freedom is the very foundation of Satya Yuga—the age of truth. A world rich in culture, artistic expression, mutual care, joyful luxury, and inner quiet, where human life is finally freed for what it was designed to do: to live in creative wonder and conscious remembrance of who we are.')),
    e(Lesson, { id: 'timing', title: items[3][1] },
      p('A question naturally arises in the seeking heart: Has the time finally arrived for a global awakening? Or will this understanding remain a quiet website read by a few? Here, we must return to steady wisdom: before entering, we designed how the game would unfold. From inside, we cannot rewrite its complete design.'),
      p('The ego always demands instant results, viral recognition, or guaranteed numbers. But a forest does not grow by pulling at the sprouts. In the design of the game, a seed must be planted deeply and cleanly before the rain arrives. Who visits this website, when they arrive, which language touches their heart, and how deeply understanding takes root—all belong to the unfolding design. Timing is governed by cosmic and planetary cycles of readiness.'),
      p('Our responsibility is not to force the world awake through anxiety or ambition. Our responsibility is to articulate the truth with pure integrity, anchor it without commercial compromise, and live it with natural compassion and courage in our everyday relationships. The seed is sown across 33 languages. The mirror is clean. When the player is ready, the recognition will dawn.')),
    e(Lesson, { id: 'contemplation', title: items[4][1] },
      p('Look past your job title, your bank balance, your nationality, and your worries about tomorrow. Notice the one who is aware of these words right now. You are not a fragile creature lost in a hostile cosmos; you are the Creator, living through this specific scene of the game.'),
      p('Whatever grief or struggle you have faced belongs to the contrast of the adventure. Allow yourself to lay down the burden of having to control the universe, and simply enjoy the extraordinary privilege of feeling alive today.'),
      e(Reflection, null, 'When you pause and reflect on your life, what changes when you realize you entered this world not merely to work or survive, but to feel and experience? Can you see the same Creator behind the eyes of the people you meet today?')),
    e('div', { className: 'reading-links' },
      !embedded && e('a', { href: '/reflections' }, 'Browse reflections'),
      e('a', { href: '/faq' }, 'Explore the questions'),
      e('a', { href: '/philosophy#beautiful-world' }, 'Explore the Beautiful World vision'))
  );
}


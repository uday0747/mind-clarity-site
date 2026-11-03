import React from 'react';
import { Page, Contents, Lesson, Reflection } from './site-layout.js';
import teaching from './teaching-content.json' with { type: 'json' };

const e = React.createElement;
const p = text => e('p', null, text);

const items = [
  ['ornament', 'The poisonous snake and the fearful tiger'],
  ['disconnection', 'Operating as a disconnected role: the root of all suffering'],
  ['rama-krishna', 'The contemplation of Rama and the wisdom of Krishna'],
  ['leadership', 'When thought aligns with the game: the true leaders of the world'],
  ['contemplation', 'A contemplative pause']
];

export default function BeyondTheDisconnectedRole({ embedded = false } = {}) {
  return e(Page, {
    eyebrow: 'A reflection by Uday Kumar · 3 November 2026',
    title: 'Beyond the Disconnected Role: Shiva’s Snake, Durga’s Tiger, and the Power of Universal Connection',
    intro: teaching.statement
  },
    e('p', { className: 'quiet-note' }, 'Published', ' ', e('time', { dateTime: '2026-11-03' }, '2026-11-03')),
    p('Meditation neutralizes emotions and connects you to the universe. As we continue it, we remain connected every second as we understand who we are in the process. In spiritual imagery across thousands of years, one encounters unforgettable symbols of fearlessness: Shiva wears a poisonous snake coiled peacefully around his neck as an ornament, and Durga rides into life atop a fearful tiger. They do not tremble before danger, nor do they fight the world as an enemy. They sit in deep meditation, permanently connected to everything that exists.'),
    p('Yet today, ninety-nine percent of people visit shrines and temples merely to pray for money, wealth, and worldly favors—treating the divine as an outside provider. They miss the entire living truth: the ancient forms are showing us how to live in unbroken connection with existence itself. When you are disconnected from the universe, it is inevitable that you lose everything. But when you stay connected, fear dissolves, and the entire play of life is met with clarity.'),
    e(Contents, { items }),
    e(Lesson, { id: 'ornament', title: items[0][1] },
      p('When an individual operates as an isolated ego, the world appears hostile and full of mortal threats. A venomous serpent is deadly poison; a wild tiger is terrifying destruction. The reactive mind immediately shrinks into fear, plotting how to defend its small boundaries.'),
      p('Shiva does not kill the serpent; he wears it as an ornament. Durga does not destroy the tiger; she rides upon its strength. Because they meditate and remain connected to the whole, they recognize that the serpent, the tiger, the poison, and their own consciousness arise from the same single Creator. What terrifies a disconnected personality becomes an ornament to the one who knows who they are.'),
      p('True spiritual understanding is not about begging for wealth or external advantages. Wealth, bodies, and situations come and go within the unfolding design. What matters is implementing the understanding that dissolves terror: remaining so intimately connected to the source that nothing in the universe is alien to you.')),
    e(Lesson, { id: 'disconnection', title: items[1][1] },
      p('Operating as a role disconnected from the whole is the root cause of all the suffering, violence, and cruelty in this world. When a human being believes they are merely an isolated character who must conquer or outsmart others to survive, fear takes total command. Greed, resentment, jealousy, and war are nothing more than symptoms of this imagined separation.'),
      p('The force of Kali—the dense fog of forgetting—constantly attempts to disconnect you from everyone else. It whispers that you are alone, that you must protect your own ego, and that other people are rivals. But the moment you sustain connection through meditation, the grip of Kali is shattered. You realize that you cannot be separated from the universe because you are the Creator who entered it.'),
      p('If you are able to stay connected every second through meditation, good times have arrived for yourself and for the world. Satya—the age of truth and unity—does not wait for a cosmic date; it dawns in the heart the instant the disconnected role is recognized as a passing garment.')),
    e(Lesson, { id: 'rama-krishna', title: items[2][1] },
      p('The ancient accounts reflect the profound architecture of this game. In the design of the epic, Rama was designed to contemplate deeply who he was. He did not cling to the golden throne of Ayodhya. He sacrificed worldly wealth, walked barefoot through wild forests for fourteen years, sat at the feet of rishis, and meditated on his journey.'),
      p('Rama’s entire life demonstrated what it means to strip away the outward role of prince and ruler to discover the quiet truth of the Self. He moved through hardship and grief not as an arrogant king, but as an earnest contemplator walking the path of truth.'),
      p('Krishna, by contrast, had complete knowledge of the game—that is all he had. Krishna is not an unreachable deity separate from you; he is that very same universal awareness awake to its own design. He carried the unshakeable wisdom that we are all one, that we willingly entered this matrix of experiences, and that events occur here without any individual ego in control.'),
      p('Because Krishna knew the entire world was a designed play, he could stand on the battlefield of Kurukshetra with complete serenity. He held no personal hatred, no panic, and no grief, guiding action with pure clarity because he never mistook the temporary roles for ultimate reality.')),
    e(Lesson, { id: 'leadership', title: items[3][1] },
      p('When you remain connected every second, a profound harmony takes place: things begin to happen in alignment with your thinking. This is not personal magic, superstitious manifestation, or egoic control. Rather, when your mind is no longer fighting the universe, your thoughts naturally mirror the unfolding design of the game. You and the movement of life are no longer two separate forces.'),
      p('People who live in this unbroken connection are the true leaders who will guide and govern the world. In the past, rulers dominated through weapons, fear, and political manipulation—the tools of the disconnected role. But those methods only breed more division and collapse.'),
      p('Connected leaders rule because people genuinely listen to them. When someone speaks from universal oneness, their words carry the unmistakable ring of truth. People recognize that this leader does not want to exploit them, steal from them, or divide them. Natural authority belongs to those who see the same Creator in every person.')),
    e(Lesson, { id: 'contemplation', title: items[4][1] },
      p('Pause and examine how you are living today. Are you operating as an anxious, disconnected character, trying to secure wealth and defend a fragile name? Or can you pause, let your emotions settle, and remember who you are?'),
      p('Meditation is not an escape from daily responsibility; it is the living bridge to who you are. As you breathe, notice that the universe is not outside you. You are the Creator, experiencing this very scene.'),
      e(Reflection, null, 'When you look at the challenges, fears, or conflicts before you today, what changes if you meet them as Shiva meets the serpent—connected to the whole, without fear, and seeing the same Creator in every unfolding moment?')),
    e('div', { className: 'reading-links' },
      !embedded && e('a', { href: '/reflections' }, 'Browse reflections'),
      e('a', { href: '/faq' }, 'Explore the questions'),
      e('a', { href: '/philosophy#mula-siddhanta' }, 'Read the root statement'))
  );
}


import urllib.request
import urllib.parse
import json
import time
import os

code_map = {
    'nb': 'no',
    'zh-Hans': 'zh-CN',
    'zh-Hant': 'zh-TW',
}

langs = [
    'ar', 'as', 'bn', 'cs', 'da', 'de', 'es', 'fr', 'gu', 'hi',
    'id', 'it', 'ja', 'kn', 'ko', 'ml', 'mr', 'nb', 'nl', 'or',
    'pa', 'pl', 'pt', 'ro', 'ru', 'sv', 'ta', 'te', 'tr', 'ur',
    'vi', 'zh-Hans', 'zh-Hant'
]

strings_to_translate = [
    "A reflection by Uday Kumar · 3 November 2026",
    "Beyond the Disconnected Role: Shiva’s Snake, Durga’s Tiger, and the Power of Universal Connection",
    "Meditation neutralizes emotions and connects you to the universe. As we continue it, we remain connected every second as we understand who we are in the process. In spiritual imagery across thousands of years, one encounters unforgettable symbols of fearlessness: Shiva wears a poisonous snake coiled peacefully around his neck as an ornament, and Durga rides into life atop a fearful tiger. They do not tremble before danger, nor do they fight the world as an enemy. They sit in deep meditation, permanently connected to everything that exists.",
    "Yet today, ninety-nine percent of people visit shrines and temples merely to pray for money, wealth, and worldly favors—treating the divine as an outside provider. They miss the entire living truth: the ancient forms are showing us how to live in unbroken connection with existence itself. When you are disconnected from the universe, it is inevitable that you lose everything. But when you stay connected, fear dissolves, and the entire play of life is met with clarity.",
    "The poisonous snake and the fearful tiger",
    "Operating as a disconnected role: the root of all suffering",
    "The contemplation of Rama and the wisdom of Krishna",
    "When thought aligns with the game: the true leaders of the world",
    "When an individual operates as an isolated ego, the world appears hostile and full of mortal threats. A venomous serpent is deadly poison; a wild tiger is terrifying destruction. The reactive mind immediately shrinks into fear, plotting how to defend its small boundaries.",
    "Shiva does not kill the serpent; he wears it as an ornament. Durga does not destroy the tiger; she rides upon its strength. Because they meditate and remain connected to the whole, they recognize that the serpent, the tiger, the poison, and their own consciousness arise from the same single Creator. What terrifies a disconnected personality becomes an ornament to the one who knows who they are.",
    "True spiritual understanding is not about begging for wealth or external advantages. Wealth, bodies, and situations come and go within the unfolding design. What matters is implementing the understanding that dissolves terror: remaining so intimately connected to the source that nothing in the universe is alien to you.",
    "Operating as a role disconnected from the whole is the root cause of all the suffering, violence, and cruelty in this world. When a human being believes they are merely an isolated character who must conquer or outsmart others to survive, fear takes total command. Greed, resentment, jealousy, and war are nothing more than symptoms of this imagined separation.",
    "The force of Kali—the dense fog of forgetting—constantly attempts to disconnect you from everyone else. It whispers that you are alone, that you must protect your own ego, and that other people are rivals. But the moment you sustain connection through meditation, the grip of Kali is shattered. You realize that you cannot be separated from the universe because you are the Creator who entered it.",
    "If you are able to stay connected every second through meditation, good times have arrived for yourself and for the world. Satya—the age of truth and unity—does not wait for a cosmic date; it dawns in the heart the instant the disconnected role is recognized as a passing garment.",
    "The ancient accounts reflect the profound architecture of this game. In the design of the epic, Rama was designed to contemplate deeply who he was. He did not cling to the golden throne of Ayodhya. He sacrificed worldly wealth, walked barefoot through wild forests for fourteen years, sat at the feet of rishis, and meditated on his journey.",
    "Rama’s entire life demonstrated what it means to strip away the outward role of prince and ruler to discover the quiet truth of the Self. He moved through hardship and grief not as an arrogant king, but as an earnest contemplator walking the path of truth.",
    "Krishna, by contrast, had complete knowledge of the game—that is all he had. Krishna is not an unreachable deity separate from you; he is that very same universal awareness awake to its own design. He carried the unshakeable wisdom that we are all one, that we willingly entered this matrix of experiences, and that events occur here without any individual ego in control.",
    "Because Krishna knew the entire world was a designed play, he could stand on the battlefield of Kurukshetra with complete serenity. He held no personal hatred, no panic, and no grief, guiding action with pure clarity because he never mistook the temporary roles for ultimate reality.",
    "When you remain connected every second, a profound harmony takes place: things begin to happen in alignment with your thinking. This is not personal magic, superstitious manifestation, or egoic control. Rather, when your mind is no longer fighting the universe, your thoughts naturally mirror the unfolding design of the game. You and the movement of life are no longer two separate forces.",
    "People who live in this unbroken connection are the true leaders who will guide and govern the world. In the past, rulers dominated through weapons, fear, and political manipulation—the tools of the disconnected role. But those methods only breed more division and collapse.",
    "Connected leaders rule because people genuinely listen to them. When someone speaks from universal oneness, their words carry the unmistakable ring of truth. People recognize that this leader does not want to exploit them, steal from them, or divide them. Natural authority belongs to those who see the same Creator in every person.",
    "Pause and examine how you are living today. Are you operating as an anxious, disconnected character, trying to secure wealth and defend a fragile name? Or can you pause, let your emotions settle, and remember who you are?",
    "Meditation is not an escape from daily responsibility; it is the living bridge to who you are. As you breathe, notice that the universe is not outside you. You are the Creator, experiencing this very scene.",
    "When you look at the challenges, fears, or conflicts before you today, what changes if you meet them as Shiva meets the serpent—connected to the whole, without fear, and seeing the same Creator in every unfolding moment?",
    "You can select and copy the link.",
    "A reflection on meditation, fearlessness, why Shiva wears a snake, Rama’s contemplation, Krishna’s knowledge of the game, and true leadership."
]

meta_title_source = "Beyond the Disconnected Role: Shiva’s Snake, Durga’s Tiger, and Universal Connection | Mind Clarity"
meta_desc_source = "A reflection by Uday Kumar on meditation, fearlessness, why Shiva wears a snake, Rama’s contemplation, Krishna’s knowledge of the game, and true leadership."

def translate(text, target):
    gt = code_map.get(target, target)
    url = 'https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=' + gt + '&dt=t&q=' + urllib.parse.quote(text)
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    for attempt in range(5):
        try:
            res = urllib.request.urlopen(req, timeout=10)
            data = json.loads(res.read().decode('utf-8'))
            result = ''.join([part[0] for part in data[0]])
            return result
        except Exception as ex:
            time.sleep(1 + attempt)
    raise RuntimeError(f"Failed to translate '{text[:20]}...' to {target}")

# Load metadata-new.json
with open("translations/metadata-new.json", "r", encoding="utf-8") as f:
    meta_new = json.load(f)

# Load source-inventory.json
with open("translations/source-inventory.json", "r", encoding="utf-8") as f:
    inventory = json.load(f)

# Ensure strings are in inventory items
for s in strings_to_translate:
    if s not in inventory["items"]:
        inventory["items"].append(s)

with open("translations/source-inventory.json", "w", encoding="utf-8") as f:
    json.dump(inventory, f, ensure_ascii=False, indent=2)
    f.write("\n")

print(f"Inventory updated. Total items: {len(inventory['items'])}")

for lang in langs:
    print(f"Translating for {lang}...")
    dict_path = f"translations/{lang}.json"
    with open(dict_path, "r", encoding="utf-8") as f:
        dictionary = json.load(f)
    
    # Translate strings
    for s in strings_to_translate:
        if s not in dictionary:
            translated = translate(s, lang)
            dictionary[s] = translated
            time.sleep(0.1)

    # Save dictionary
    with open(dict_path, "w", encoding="utf-8") as f:
        json.dump(dictionary, f, ensure_ascii=False, indent=2)
        f.write("\n")
    
    # Translate metadata
    if lang not in meta_new:
        meta_new[lang] = {}
    
    # Title without | Mind Clarity
    title_base = "Beyond the Disconnected Role: Shiva’s Snake, Durga’s Tiger, and Universal Connection"
    trans_title = translate(title_base, lang) + " | Mind Clarity"
    trans_desc = dictionary.get(meta_desc_source) or translate(meta_desc_source, lang)
    
    meta_new[lang]["beyond-the-disconnected-role"] = {
        "title": trans_title,
        "description": trans_desc
    }
    time.sleep(0.1)

with open("translations/metadata-new.json", "w", encoding="utf-8") as f:
    json.dump(meta_new, f, ensure_ascii=False, indent=2)
    f.write("\n")

print("All translations and metadata successfully generated and saved!")


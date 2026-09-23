import json
from pathlib import Path
from docx import Document
from docx.shared import Inches, Pt, RGBColor
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.oxml import OxmlElement
from docx.oxml.ns import qn
from docx.enum.style import WD_STYLE_TYPE

OUT = "/Users/udaykumarpinninti/Documents/ChatGPT/Mind Clarity Website/Uday_Philosophy.docx"
ROOT = Path(__file__).resolve().parent.parent
teaching = json.loads((ROOT / 'teaching-content.json').read_text())
doc = Document()
sec = doc.sections[0]
sec.top_margin = Inches(0.72); sec.bottom_margin = Inches(0.68)
sec.left_margin = Inches(0.82); sec.right_margin = Inches(0.82)
styles = doc.styles
styles['Normal'].font.name='Aptos'; styles['Normal']._element.rPr.rFonts.set(qn('w:eastAsia'),'Aptos')
styles['Normal'].font.size=Pt(10.5); styles['Normal'].font.color.rgb=RGBColor(35,35,35)
styles['Normal'].paragraph_format.space_after=Pt(6); styles['Normal'].paragraph_format.line_spacing=1.12
for name,size in [('Title',30),('Heading 1',19),('Heading 2',14),('Heading 3',11.5)]:
    st=styles[name]; st.font.name='Aptos Display' if name in ('Title','Heading 1') else 'Aptos'
    st._element.rPr.rFonts.set(qn('w:eastAsia'),st.font.name); st.font.size=Pt(size); st.font.bold=True; st.font.color.rgb=RGBColor(0,0,0)
    st.paragraph_format.space_before=Pt(15 if name=='Heading 1' else 9); st.paragraph_format.space_after=Pt(5)
    for border in st._element.xpath('./w:pPr/w:pBdr'):
        border.getparent().remove(border)
quote=styles.add_style('Uday Quote',WD_STYLE_TYPE.PARAGRAPH); quote.base_style=styles['Normal']; quote.font.name='Aptos'; quote.font.size=Pt(11); quote.font.italic=True; quote.font.color.rgb=RGBColor(55,55,55); quote.paragraph_format.left_indent=Inches(.28); quote.paragraph_format.space_before=Pt(6); quote.paragraph_format.space_after=Pt(8)
small=styles.add_style('Small Note',WD_STYLE_TYPE.PARAGRAPH); small.base_style=styles['Normal']; small.font.size=Pt(9); small.font.color.rgb=RGBColor(90,90,90)
for s in doc.sections:
    fp=s.footer.paragraphs[0]; fp.alignment=WD_ALIGN_PARAGRAPH.RIGHT; fp.style='Small Note'; fp.add_run('Uday Philosophy  •  ')
    run=fp.add_run(); fld=OxmlElement('w:fldSimple'); fld.set(qn('w:instr'),'PAGE'); run._r.addnext(fld)
def p(text='',style=None):
    return doc.add_paragraph(text,style=style)
def h(text,level=1):
    doc.add_heading(text,level=level)
def bullets(items):
    for x in items: doc.add_paragraph(x,style='List Bullet')
def label(text):
    q=doc.add_paragraph(style='Small Note'); q.add_run(text.upper()).bold=True

p('MIND CLARITY  /  PERSONAL PHILOSOPHY','Small Note')
doc.add_paragraph('Uday Philosophy','Title')
p('The Creator and the game of experiences')
p('Reference for the website, daily practices, future videos, and teaching materials','Small Note')
p('Uday Kumar  •  23 September 2026  •  Version 1.5','Small Note')
h('The governing statement',2)
p(teaching['statement'],'Uday Quote')
p(teaching['meaning'])
h('Purpose of this reference',2)
p('Every explanation, example, and exercise develops this central understanding. The intended state of mind is remembrance of the Creator while participating in the game. In Uday’s teaching, care for relationships and creation arises through that recognition. The reference records his spiritual philosophy, the explanations used to communicate it, and the direction of future content.')
p('The original Mula Siddhanta is preserved verbatim. Analogies and exercises explore the teaching; they do not independently prove its cosmology or guarantee emotional, health, or financial outcomes.','Small Note')
doc.add_page_break()
h('Contents')
for item in ['1 Purpose and identity','2 Mula Siddhanta and the completed design','3 Four paths to the same recognition','4 Sthitaprajna and steady remembrance','5 Experiencing the game','6 Practices and everyday examples','7 Intended effects and honest enquiry','8 The Beautiful World vision','9 Teaching through the website','10 Future videos and communication','11 Project continuity','12 Summary and version record']: p(item)
doc.add_page_break()

h('1 Purpose and identity')
p('The governing teaching is that we are the Creator who made this game of experiences and entered it. Having designed it before entering, we cannot change the design from inside. This complete statement is the starting point for Mind Clarity, not a phrase added after an independent lesson about behaviour.')
p('“We” points to the one shared source, God or Shakti, appearing through all lives and roles. It does not identify one individual personality as superior or able to control other people. Recognition includes the person who disagrees with us.')
p('Uday wants the understanding to become a lived state of mind. His emphasis is on knowing who we are, beyond merely repeating a belief. In this teaching, responsibility and care arise naturally from recognition; they are not the separate instructions around which the lessons are organized.')
p('The intended movement is from the central understanding into a scene of experience, recognition of the role that has absorbed attention, remembrance of the shared Creator, and participation within the unfolding game. Every educational element should make this connection understandable.')
h('Kinds of content',2)
bullets(['Original statement: wording supplied by Uday, especially the Mula Siddhanta and the Beautiful World intention.','Interpretation: an explanation connecting the statement to a scene, role, or relationship.','Practice: an invitation to examine the meaning of remembrance in experience.','Proposal: future teaching or technology work that has not been established as an existing programme.'])
p('People may examine and question this worldview. The Creator and the designed game are spiritual claims; a useful exercise or a feeling of calm does not establish them as scientific facts.')

h('2 Mula Siddhanta and the completed design')
label('Original wording supplied by Uday on 16 September 2026')
p('“' + teaching['original'] + '”','Uday Quote')
p('In Uday’s account, the one Creator was alone and created multiplicity for experiences. We are that Creator within the different roles of the game. The source, creation, and deepest experiencer belong to one reality in this philosophy.')
h('Participation within a fixed design',2)
p('The total design cannot be rewritten after entry. Time, thoughts, decisions, effort, forgetting, remembrance, and learning are all understood as parts of the unfolding. A role does not step outside the whole and replace its course. We also do not know the next scene in advance.')
p('For example, when a plan changes, feeling disappointment, examining alternatives, and making another plan occur within the game. The teaching concerns releasing the role’s claim to control the total design while experiencing its part fully. It does not remove action from experience.')
p('Reflection: recall a small scene you wanted to unfold differently. Remember the Creator who designed and entered the game. What is the difference between participating within this scene and demanding that the whole design be rewritten?')
p('The names Brahman, Parabrahman, Ishwara, Paramatman, Allah, God, and Yahweh express Uday’s synthesis across religious vocabularies. Traditions differ in their meanings. “Energy” here is spiritual language, not a measured physical quantity.')
h('Vedic and Upanishadic foundations', 2)
p('The following passages are the Vedanta-oriented foundations Uday associates with the intuition that the one energy present in all beings is Brahman and that the deepest Self is not separate from it. They should be presented as scriptural and contemplative evidence within an Advaita/Vedanta interpretation, not as scientific proof. Textual translations and traditional interpretations can vary.')
for item in [
    'Prajñānam Brahma — “Consciousness is Brahman.” (Aitareya Upanishad 3.1.3; associated with the Rig Veda)',
    'Aham Brahmāsmi — “I am Brahman.” (Brihadaranyaka Upanishad 1.4.10; associated with the Yajur Veda)',
    'Tat Tvam Asi — “That thou art” / “You are that ultimate reality.” (Chandogya Upanishad 6.8.7; associated with the Sama Veda)',
    'Ayam Ātmā Brahma — “This Self is Brahman.” (Mandukya Upanishad 2; associated with the Atharva Veda)',
    'So’ham Asmi — “That person there—I am he.” (Isha Upanishad 16; Shukla Yajur Veda 40.16)',
    'Aham Rudrebhir Vasubhiś Carāmi — “I move with the Rudras and the Vasus,” expressing the all-pervading divine power speaking through the Devi Sukta. (Rig Veda 10.125.1)',
    'Sarvam Khalvidam Brahma — “All this is indeed Brahman.” (Chandogya Upanishad 3.14.1; associated with the Sama Veda)',
    'Aham Manur Abhavam Sūryaś Ca — “I became Manu; I became the Sun,” expressing an expansive realization of identity with cosmic life. (Rig Veda 4.26.1)',
    'Yad Eveha Tad Amutra — “What is here is there; what is there is here.” (Katha Upanishad 2.1.10; associated with the Yajur Veda)',
    'Sa Eṣo’ṇimā Etad Ātmyam Idaṁ Sarvam — “That subtle essence is the Self of all this.” (Chandogya Upanishad 6.8.7; associated with the Sama Veda)'
]: p(item, 'List Bullet')
p('Interpretive connection to the Mula Siddhanta: these passages support the contemplative claim that consciousness, the inner Self, the visible universe, and the ultimate reality are not finally separate. In Uday’s philosophy, this becomes the language of one Shakti: the source, the field of experiences, and the experiencer are understood within one ultimate reality. The role-level distinction remains essential: this interpretation does not erase pain, ethical consequences, consent, or the need to prevent harm.')

h('3 Four paths to the same recognition')
p('Uday’s statement is: “The solution to all problems is to know who we are. Bhakti, Jnana, Dhyana, and Karma can help us discover it.” Here, the intended recognition is the Creator within the game whose design cannot be changed from inside. The four paths approach that recognition through different temperaments.')
h('Karma',2)
p('Action is experienced within the game. Working without making reward one’s identity loosens the role’s demand to dictate its next scene. Work becomes an occasion to remember the Creator and the shared creation.')
h('Bhakti',2)
p('Devotion remembers God throughout the game, including in living people. Surrender releases the role’s demand to rewrite the whole for its own preferences. A sacred image may support this remembrance; Uday’s criticism concerns mechanical worship that forgets the divine in living relationships.')
h('Jnana',2)
p('Enquiry asks who experiences the body, thought, feeling, and role. In this teaching, the question returns attention to the Creator who entered the game, rather than making a passing scene the whole of the Self.')
h('Dhyana and Raja',2)
p('Attention returns from changing thoughts to the central understanding. Quiet sitting is one occasion to remember the Creator within the already-designed game; the aim is to carry that remembrance into ordinary life.')
p('Reflection: choose work, devotion, enquiry, or quiet attention. During it, recall the Creator who entered the fixed game for experiences. Which part of this understanding becomes clearer, and which part still raises a question?')

h('4 Sthitaprajna and steady remembrance')
p('Sthitaprajna means a person of steady wisdom. In the Bhagavad Gita’s Chapter 2, the description includes equanimity in pleasure and pain, inner contentment, sense mastery, and freedom from being governed by attachment, fear, and anger.')
p('Uday connects this ideal to remembrance of the Creator amid changing scenes. The role cannot rewrite the game to retain only pleasant experiences. Steadiness concerns remaining aware of the deeper identity as success, disappointment, praise, and criticism unfold.')
p('For example, praise at work may inflate a role, while criticism may collapse it. Returning to the same Creator in both scenes places the reactions within experience. This is an aspiration for practice, not an expectation that a person hide feelings or claim spiritual attainment.')
p('Reflection: compare a pleasant and a difficult scene. What happened to remembrance of the Creator in each? How does the fixed-game teaching relate to meeting both experiences?')

h('5 Experiencing the game')
h('One Creator in different roles',2)
p('The same Shakti appears as the person who praises, disagrees, succeeds, or makes a mistake. In Uday’s interpretation, hatred of an absolute “other” forgets that common source. He relates loss of felt connectedness to the inner meaning of Kali Yuga.')
p('A colleague’s mistake can be addressed while remembering the Creator in both people. The error, frustration, and conversation all belong to the game. No one action contains the whole identity of either person.')
h('Witnessing and remembrance',2)
p('Witnessing serves recognition: a feeling occurs within the Creator’s experience, rather than becoming the whole of who we are. An unanswered message may absorb the rejected role. Returning to the Creator within the fixed game questions that identification and the demand to dictate the next scene.')
h('The movie analogy',2)
p('When we watch a movie, we may laugh, cry, become angry, and experience love. After leaving the theatre, remembering that it was a movie can change our relationship with those feelings. Uday uses this return of awareness to explain remembering the Creator while the game of life continues.')
p('We created and entered this game for experiences; we cannot rewrite its design from inside. Remembering that is intended to loosen identification with a scene. The analogy does not say that pain or other people are unreal, or require every emotion to disappear immediately.')
h('The lotus practice',2)
p('Picture a lotus in a pond, appearing to rest so lightly on the water that it is unclear whether the water touches it. This is Uday’s contemplative image for remaining within life, yet inwardly untouched by its passing scenes through remembrance of the Creator.')
p('“Untouched” describes the intended spiritual state. The person can laugh, cry, love, and feel anger while returning to the Creator within the game. The purpose is neither emotional suppression nor withdrawal. The image is an analogy, not a literal botanical claim.')
h('Surrender within the game',2)
p('Surrender follows the completed design: the role releases its demand to replace the whole game. Bhakti brings devotion to the Creator present throughout it; Jnana enquires into the identity behind the role. Both support participation with remembrance.')
h('Silence and intelligence',2)
p('Uday describes intelligence becoming more available as the mind becomes quieter. Within the teaching, quietness can follow releasing the role’s demand to control the game. It does not guarantee that every intuition is correct or disclose the predetermined future.')
p('If you feel certain someone is upset with you, recall the Creator in both lives and notice the demand to know the next scene. Asking a quiet question can take the place of assuming. Their answer, too, unfolds within the game.')
p('Reflection: what conclusion is your role trying to force? Return to the Creator within the game whose design cannot be rewritten. What does that remembrance reveal about the feeling, and what still needs to be learned from the situation?')

h('6 Practices and everyday examples')
p('Every exercise below uses the same central statement. None is a separate moral or productivity lesson. The sequence is remembrance, the scene and role, the demand for control, and participation within the game.')
h('The complete starting point',2)
p(teaching['statement'],'Uday Quote')
for title, text in teaching['steps']:
    h(title,2)
    p(text)
p('Reflection: ' + teaching['practiceReflection'])
p('Choose a small, ordinary event. Reflect privately and honestly. If a practice becomes overwhelming, stop and return to ordinary activity or suitable support.')
for item in teaching['cases']:
    h(item['title'],2)
    p(item['connection'])
    p('Example: ' + item['example'] + '. ' + item['scene'])
    p('Remembering the Creator: ' + item['remember'])
    p('Participation within the game: ' + item['participation'])
    p('Reflection: ' + item['reflection'])
h('An evening return',2)
p('Recall the complete teaching at the end of the day. Which scene absorbed you into a passing role? Where did you demand a different unfolding? Did remembering the same Creator in another person change the relationship? Record what changed and what did not. Remembrance itself is within the game, not a means of rewriting it.')

h('7 Intended effects and honest enquiry')
p('Within Uday’s teaching, care, steadiness, and a quieter mind follow from knowing who we are. Responsibility is understood as a natural expression of recognizing the shared Creator. Educational content should explain that connection instead of repeatedly telling readers to be responsible.')
p('The intended movement can be explored in relationships and ordinary decisions. Ask what the central statement meant in the scene, whether identification with the role loosened, and how the person actually responded. Repeating the statement is not a measure of realization, and a reader can report no change or disagreement.')
p('A lesson cannot guarantee that everyone becomes good, successful, wealthy, healthy, or free from distress. A personal observation does not prove the cosmology. Children and adults alike retain worth regardless of performance or their response to a practice.')
p('The shared-creation perspective includes the person who is hurt. Consent, protection, boundaries, apology, and appropriate help remain meaningful within the game. They do not need to become competing teaching themes, but they should not be erased by the language of oneness.')
p('Spiritual reflection does not replace medical, psychological, or emergency care. No claim of cures, immunity changes, or prevention of suicide is established by this philosophy.')

h('8 The Beautiful World vision')
p('“My main goal is to make this world a beautiful place to live in, so that in that beautiful place I can live happily.”','Uday Quote')
p('The intended route begins with recognition of the Creator in the shared creation. From that understanding, Uday expects concern for relationships, people, and nature to arise naturally. The world we experience belongs to the same source we call ourselves.')
p('Gold, diamonds, money, and status are small parts of creation in his explanation. They cannot enlarge the Creator’s identity. This is the proposed connection between less attachment to possessions and greater regard for relationships. Practical needs remain part of life.')
p('Helping someone learn, restoring a shared space, and addressing harm are activities within the unfolding game. The aspiration toward a beautiful world does not require an individual to stand outside the whole and rewrite its design.')
h('Technology in the service of experience',2)
p('AI and robots feature in the long-term vision as ways to reduce survival burdens through farming, production, healthcare, logistics, and maintenance. Their proposed purpose is to make room for awareness, creativity, relationship, exploration, and joy within the Creator’s experience.')
p('Protected forests, less intrusive infrastructure, and AI-equipped mobile homes are aspirations to investigate. They follow the concern for shared creation, but are not existing programmes or inevitable consequences of realization. Feasibility, ecological effects, fairness, governance, and access require practical investigation.')
p('Reflection: consider a place shared with other lives. What care becomes meaningful when you remember the same Creator in that creation? How does that care belong to participation within the already-designed game?')

h('9 Teaching through the website')
p('The website itself should help visitors understand and explore the complete teaching without Uday’s personal help. The homepage states the Creator, creation for experiences, entry, and the inability to rewrite the design from inside before offering an exercise.')
p('The Philosophy page develops that root through roles, witnessing, the movie and lotus, the four paths, steady wisdom, relationships, possessions, intelligence, scriptural connections, and the Beautiful World vision. Each explanation and reflection shows its relationship to the same foundation.')
p('Daily Practice uses the shared sequence and six worked examples. Each includes the scene, remembrance of the Creator, participation within the game, and a reflection that returns to the teaching. The Questions page addresses the same understanding and its implications.')
h('Content acceptance test',2)
bullets(['Can the reader identify the complete governing statement before beginning the exercise?','Does the explanation show how this particular scene relates to the Creator within the fixed design?','Does the example distinguish the passing role from the shared identity, without pretending the scene has no consequences?','Does the reflection return to the teaching and allow the reader to describe what actually happened?','Is care explained as arising through recognition, rather than inserted as an unrelated instruction?'])
p('The website retains calm, readable pages, in-page contents, and independent access. No payment, registration, or personal disclosure is required for learning. Optional conversation, contact, and privacy information support access and remain factual operational content.')
h('Earlier programme proposals',2)
p('The earlier guide proposed a small 30-day adult learning circle. It remains a proposal, not a launched programme. If developed, every session and short lesson should now use the complete central statement, a connected experience, and reflection on remembrance. Participation and reports of usefulness do not prove the philosophy.')

h('10 Future videos and communication')
p('Future YouTube videos, scripts, lessons, and translations should use the same teaching structure as the website. Begin with the relevant part of the root understanding, develop it through a recognizable scene, and return to it in the closing reflection.')
p('A video about anger, for example, would examine the role absorbed in a disagreement, recall the shared Creator in both people, explain the inability to dictate the next scene of the game, and explore participation from remembrance. Its purpose is to clarify this understanding rather than provide disconnected anger-management advice.')
p('For a short clip, link its specific focus to the full statement and provide a route to the complete explanation. Do not imply that a short affirmation proves understanding or guarantees an outcome.')
h('Reusable content brief',2)
p('Create a lesson from this scene within Uday’s philosophy: we are the Creator who designed and entered the game for experiences, and cannot change its design from inside. Explain the role, emotion, and demand for control. Connect remembrance to participation and relationships. End with a reflection that examines the same understanding and permits an honest response.')
p('Ideas may be captured on a phone or developed on a computer. Preserve Uday’s original words separately from editorial explanations. Obtain consent before using personal stories, and check public translations for fidelity. No videos or publishing schedule are created simply by recording this guidance.')

h('11 Project continuity')
p('This reference and README record the current teaching direction. They supersede earlier proposals that organized lessons around generic responsibility or self-improvement. The retained Beautiful World guide remains an unchanged historical source.')
p('The current website and this document share the central statement, five practice steps, and six example texts through teaching-content.json. This reduces drift between the public teaching and its reference. Future changes should update those shared passages and regenerate the document and website.')
p('The original Mula Siddhanta and all ten scriptural pointers must remain available. Explain the relationship between the pointers and Uday’s interpretation without claiming each independently proves the designed game.')
p('AI can help organize and clarify this content, check consistency, build pages, and prepare future material. Its involvement does not establish the worldview or guarantee realization. New programmes, external messages, or media publication need their own requested scope.')

h('12 Summary and version record')
p(teaching['statement'],'Uday Quote')
p('Every role, thought, feeling, relationship, act of remembrance, and practical response is understood within this game. The intended state of mind remembers the shared Creator while experiencing it. Uday connects natural care, lighter attachment, quietness, and the Beautiful World vision to that recognition.')
p('The movie and lotus illustrate the relationship to emotion. The possessions example relates a small part of creation to the shared Creator in living relationships. Each practice is an opportunity to understand these connections in an actual scene.')
h('Source and version note',2)
p('Version 1.5 • 23 September 2026. This revision follows Uday’s clarification that the complete Creator-and-game statement must govern every teaching, example, and exercise. It replaces disconnected teaching sequences, adds the movie and possessions examples, connects steady wisdom and the Beautiful World vision to the root, and records the direction for future videos.')
p('Primary historical source: Uday Kumar, A Beautiful World, version 2, 16 September 2026, retained unchanged. The original Mula Siddhanta remains verbatim. The ten Vedic and Upanishadic pointers are retained as contemplative references within the stated interpretation. So’ham Asmi is referenced to Isha Upanishad 16; text reference: https://sri-aurobindo.co.in/workings/sa/12/isha_e.pdf.')
doc.core_properties.title='Uday Philosophy'
doc.core_properties.author='Uday Kumar'
doc.core_properties.subject='The Creator and the game of experiences'
doc.save(OUT)
print(OUT)

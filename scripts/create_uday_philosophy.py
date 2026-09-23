from docx import Document
from docx.shared import Inches, Pt, RGBColor
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.oxml import OxmlElement
from docx.oxml.ns import qn
from docx.enum.style import WD_STYLE_TYPE

OUT = "/Users/udaykumarpinninti/Documents/ChatGPT/Mind Clarity Website/Uday_Philosophy.docx"
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
p('A structured record of the Mula Siddhanta, the Mind Clarity approach, and the Beautiful World vision')
p('Prepared for continuity across ChatGPT Work and Codex','Small Note')
p('Uday Kumar  •  Mind Clarity Consultant  •  18 September 2026','Small Note')
p('Central intention','Heading 2')
p('My main goal is to make this world a beautiful place to live in, so that in that beautiful place I can live happily.','Uday Quote')
p('How to read this document','Heading 2')
p('This document gathers the philosophy expressed in the saved “A Beautiful World” guide and the Mind Clarity context. It separates four kinds of content: original statements attributed to Uday; explanatory interpretations; proposed practices or future ideas; and safety or evidence guardrails. This distinction keeps the record faithful while making it useful for future website, teaching, and product work.')
p('Status: working philosophy document. It is a living reference, not a scientific proof, religious authority, clinical treatment, or promise of outcomes.','Small Note')
doc.add_page_break()
h('Contents')
for item in ['1. Purpose and identity','2. Mula Siddhanta — the root principle','3. Four paths to self-knowledge','4. Sthitaprajna — steady wisdom','5. The structure of experience','6. Core practices and human relationships','7. Intended effects and responsible boundaries','8. The Beautiful World vision','9. Mind Clarity as practice and teaching','10. Practical experiments and communication','11. AI collaboration and project continuity','12. Working summary and open questions']: p(item)
doc.add_page_break()

h('1. Purpose and identity')
p('Mind Clarity is the practical expression of a deeper wish: to live in a world that is more beautiful, kind, clear, responsible, and supportive of life. The philosophy is not meant to remain only an abstract belief. It is intended to shape how people understand experience, respond to difficulty, relate to one another, use technology, and create conditions for joyful living.')
p('The role attached to this work is Mind Clarity Consultant. The work may include reflective conversation, spiritual sharing, practical exercises, educational content, website communication, and exploration of how AI and robotics can reduce unnecessary burdens. The philosophy should remain open to sincere questioning and should never require agreement as a condition for respect.')
h('Working distinctions',2)
bullets(['Original belief: a statement directly expressed by Uday, especially the Mula Siddhanta and central intention.','Interpretation: an explanation that helps communicate the belief without claiming it is independently proven.','Proposal: a possible practice, programme, website feature, or future-world idea that still needs testing.','Guardrail: a boundary against overclaiming, coercion, medical promises, or using spiritual ideas to dismiss real harm.'])

h('2. Mula Siddhanta — the root principle')
label('Original wording supplied by Uday, 16 September 2026')
p('“When none of this existed, there was only one energy (Brahman, Parabrahman, Ishwara, Paramatman, Allah, God, Yahweh). That energy is capable of creating anything. That energy is us. Back then, we were alone. Being alone, we decided to play a game and created this entire existence; this is the game of experiences. Having already decided how this game should unfold before stepping into it, we cannot make any changes midway.”','Uday Quote')
p('In this root principle, existence begins as one capable energy. The many persons, roles, events, and experiences of life are expressions within the existence created by that energy. The “game” is the field in which experience unfolds. The course of the total design is understood as already decided before participation, so no separate individual can stand outside existence and rewrite the whole design midway.')
h('Meaning and careful interpretation',2)
p('The names Brahman, Parabrahman, Ishwara, Paramatman, Allah, God, and Yahweh are presented here as Uday’s way of pointing toward one ultimate source across different religious vocabularies. This is a personal synthesis, not a claim that all traditions agree that these names mean exactly the same thing, nor a claim that every person must accept the identity “that energy is us.”')
p('“Energy” is spiritual and metaphysical language in this philosophy. It should not be presented as a measured physical quantity or as a scientific theory. The statement is meaningful as a worldview and contemplative orientation; it is not offered as experimentally verified cosmology.')
h('What remains possible within the design',2)
p('The belief that the total design cannot be changed does not require passivity in ordinary life. Within time, people still learn, ask for help, prevent harm, apologize, repair relationships, seek treatment, change habits, build institutions, protect nature, and experience the consequences of choices. From the role-level perspective, these actions matter. Responsibility is part of the unfolding rather than an escape from it.')

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
p('Interpretive connection to the Mula Siddhanta: these passages support the contemplative claim that consciousness, the inner Self, the visible universe, and the ultimate reality are not finally separate. In Uday’s philosophy, this becomes the language of one Shakti: the source, the field of experiences, and the experiencer are understood within one ultimate reality. The role-level distinction remains essential: this interpretation does not erase pain, responsibility, ethical consequences, consent, or the need to prevent harm.')

h('3. Four paths to self-knowledge')
p('The central teaching is: “The solution to all problems is to know who we are. Bhakti, Jnana, Dhyana, and Karma can help us discover it.” The paths are different doorways suited to different temperaments. Their shared purpose is to loosen the separate ego and open into Self-knowledge, or Atma Sakshatkara.')
h('Karma — the path of selfless duty', 2)
p('Perform necessary work without clinging to personal reward or recognition. Duty becomes an offering when it is carried out with care, discipline, and responsibility.')
h('Bhakti — the path of surrender and devotion', 2)
p('Let go of the demand to control everything and trust the larger reality through love, reverence, prayer, and wholehearted surrender. Bhakti is not dependence on another person’s authority or the abandonment of judgment.')
h('Jnana — the path of self-enquiry', 2)
p('Question “Who am I?” and examine what changes — body, thought, emotion, role, and story — against the awareness in which those experiences appear. Understanding is strengthened by honest questioning and discernment.')
h('Dhyana / Raja — the path of meditation and mind-restraint', 2)
p('Steady the mind through attention, meditation, and practice. Notice thoughts and impulses without being ruled by every one of them. This is training in clarity, not suppression of feeling or withdrawal from ordinary responsibility.')
p('The paths may overlap: action can become devotion, devotion can deepen enquiry, enquiry can steady meditation, and meditation can clarify action. No path grants permission to ignore consent, safety, evidence, or accountability.')

h('4. Sthitaprajna — steady wisdom')
p('Sthitaprajna means a person of steady wisdom: one whose understanding remains stable in changing circumstances. The Sanskrit combines sthita, “steady or established,” with prajna, “wisdom, discernment, or clear understanding.”')
p('In the Bhagavad Gita, Arjuna asks Krishna about the marks of a person established in wisdom. In Chapter 2, Sankhya Yoga, the description points to an inner steadiness that is not dependent on success, comfort, praise, or control over events.')
h('Characteristics of the Sthitaprajna', 2)
bullets(['Equanimity in pleasure and pain: does not collapse in sorrow or become inflated by happiness; remains even-minded.','Freedom from reactive disturbances: does not become governed by excessive attachment, fear, or anger — “vitaraga-bhaya-krodhah.”','Sense mastery: like a tortoise withdrawing its limbs, can gather the senses inward instead of being dragged by every stimulus or impulse.','Inner contentment: finds a source of fulfilment within the Self rather than depending entirely on external objects or circumstances.'])
p('In practical terms, the Sthitaprajna is not emotionally numb or indifferent. Steady wisdom means feeling what is present without losing discernment, responsibility, or compassion. Success and failure, difficulty and gain, praise and criticism may still be experienced, but they do not completely displace clarity.')
p('This ideal connects the four paths: selfless action reduces attachment to outcomes; devotion softens the demand for control; self-enquiry reveals what remains steady; and meditation trains attention and sense-restraint. It is an aspiration for practice, not a label to claim prematurely.')

h('5. The structure of experience')
h('One Shakti / one source',2)
p('Existence is understood as one Shakti appearing through many beings and roles. The same source is present in the person who is joyful, confused, successful, afraid, helpful, or harmful. This supports humility and compassion, but it does not erase differences in conduct, consent, accountability, or safety.')
h('Two levels: Shakti and role',2)
p('At the Shakti level, there is completeness, non-separation, and a recognition that life is one movement. At the role level, pain is real, responsibilities are real, moral distinctions are real, and actions have consequences. Good communication must hold both levels together. Non-separation must never be used to excuse abuse, silence a person in pain, or remove the need for boundaries.')
h('Witnessing',2)
p('Awakening, in practical terms, is the capacity to notice thoughts, emotions, sensations, and reactions without being completely captured by them. When resistance decreases, the experience of a situation may change even while ordinary responsibilities continue. Witnessing is therefore a practice of clearer participation, not withdrawal from life.')
h('Surrender and the meeting of Bhakti and Jnana',2)
p('Surrender points toward trusting the larger unfolding; Jnana points toward seeing clearly; Bhakti points toward devotion and love. In this philosophy they converge in a practical movement: see Shakti in every person, meet reality as it is, and respond appropriately to what is happening. Surrender is not resignation, carelessness, or obedience to another person’s demands.')
h('No hatred, only connectedness',2)
p('“Do not hate anyone, because to hate another person is to hate yourself. There is no separate ‘other’ outside; everything is connected.” In this perspective, the loss of felt connection is the inner meaning of Kali Yuga. The teaching is an invitation to drop dehumanizing hatred, not a demand to tolerate harm. Boundaries, protection, consequences, and leaving an unsafe situation remain valid expressions of care.')
h('The lotus and the sportive spirit',2)
p('Play the game of life with a sportive spirit: meet its challenges wholeheartedly without turning every outcome into a verdict on your worth. If you threaten, blame, or scheme against another person, the fear and defeat eventually return to the same connected field of life. Like a lotus opening in a pond without being submerged by its waves, remain in relationship without being pulled under by every reaction. Live connected, yet inwardly free.')
h('Intelligence and intuition',2)
p('The philosophy describes intelligence as becoming more available when resistance drops and the body-mind is less entangled. Intuition may feel clearer when attention is calm and spacious. These are spiritual descriptions of experience, not proof of a universal intelligence field. Intuition should be checked against evidence, consequences, lived experience, and other perspectives.')

h('6. Core practices and human relationships')
h('Seeing the person and the action',2)
p('A person can be recognized as an expression of the same source while an action is still named as harmful or unacceptable. Compassion means responding without hatred where possible; it does not mean removing protection, accountability, consequences, or the right to leave an unsafe situation.')
h('A practical response sequence',2)
bullets(['Pause and notice the inner reaction.','Recognize the humanity of the people involved without denying the facts.','Name the need, harm, boundary, or responsibility at the role level.','Choose the response that reduces avoidable harm and supports repair where possible.','Review what happened and learn without repetitive self-condemnation.'])
h('Guilt, remorse, and repair',2)
p('The philosophy aims to reduce unproductive guilt and hostility, not to erase remorse. A responsible response can include acknowledging harm, apologizing, making repair, accepting consequences, changing behaviour, and maintaining boundaries. Inner freedom and ethical responsibility belong together.')
h('Children, young people, and vulnerable people',2)
p('Academic results, social status, or productivity do not determine a person’s worth. Children and young people should be encouraged to ask for help and receive appropriate support. Spiritual language must never replace safeguarding, professional care, emergency help, or direct intervention when someone is at risk.')

h('7. Intended effects and responsible boundaries')
p('The following are intended or possible effects of practising this perspective, not guaranteed outcomes: less repetitive self-condemnation; greater calm during difficulty; more room for reflection; steadier choices at work and with money; more compassionate relationships; and a less rigid identification with success and failure.')
p('These possibilities must be communicated modestly. A practice may help one person and not another. Mindfulness or reflective practices may support stress management or sleep for some people, but Mind Clarity should not promise cures, immunity, hormone changes, prevention of suicide, guaranteed financial success, or guaranteed freedom from anxiety. Health questions belong with qualified professionals and evidence-based care.')
p('A useful test is practical rather than metaphysical: do willing adults notice their reactions more clearly, recognize shared humanity, and choose a more responsible response? Positive change can be valuable without being treated as proof of the whole cosmology.')

h('8. The Beautiful World vision')
h('Purpose and mission',2)
p('The purpose is to help make the world a beautiful place to live in, so that people can live happily. A working mission is to help people live with greater clarity, kindness, and responsibility; protect nature; and explore technology that reduces everyday burdens so people have more time for awareness, creativity, relationships, and joyful living.')
h('Nature and material conditions',2)
p('A beautiful world is not only a change in thoughts. It includes clean surroundings, protected forests and ecosystems, accessible learning, useful support, respectful conversation, and systems that reduce avoidable suffering. Inner clarity and material conditions should be considered together.')
h('Technology, AI, and robotics',2)
p('The long-term picture includes AI and robots assisting with production, farming, healthcare, logistics, maintenance, and other necessary work. The purpose is not technology for its own sake. The purpose is to reduce survival burdens and free time for creativity, exploration, awareness, care, and joyful living. A possible future includes clean living, limited infrastructure, and AI-equipped mobile homes that support worry-free travel, but feasibility, ecological impact, fairness, access, governance, and unintended consequences require serious investigation.')
h('Starting small',2)
p('The recommended beginning is modest: a small circle of willing people, one clearer response to an everyday difficulty, a simple public teaching, an inner practice paired with a visible act of care, and a way to preserve happiness during the journey. The work should grow from evidence of usefulness rather than from pressure or grand claims.')

h('9. Mind Clarity as practice and teaching')
h('A simple learning movement',2)
bullets(['Examine direct experience: what is happening in the body, mind, and situation?','Notice resistance, identification, and the stories added to events.','Allow spiritual and non-spiritual interpretations to coexist respectfully.','Separate shared humanity from agreement about beliefs.','Translate insight into a responsible action or a kinder conversation.','Review what changed without claiming that one experience proves a universal truth.'])
h('A possible 30-day experiment',2)
p('A proposed pilot could involve 5–8 willing adults. Week one listens and prepares. Week two holds one 45-minute circle: purpose and permission to pass; personal examples; noticing reactions; respectful responses; and one chosen action. Week three offers three short lessons. Week four follows up and reviews. Permission should be obtained before recording or sharing anything. Measures can include attendance, actions taken, quality of conversations, return participation, time, enjoyment, and energy. This is a learning experiment, not clinical proof.')
h('Current website relationship',2)
p('The Mind Clarity website is itself a place of learning and enquiry, not primarily a doorway to Uday’s services. Its purpose is to support understanding and the aspiration toward enlightenment through the website itself. Visitors should be able to read the full philosophy, examine an everyday difficulty, practise independently, and choose a responsible next step without Uday’s personal help. This describes the purpose of the experience, not a guaranteed spiritual outcome.')
h('Governing website principle — 18 September 2026',2)
p('“The website should enlighten them with the website itself without my help. That should be the design language of the website.”','Uday Quote')
label('Uday’s current direction; takes precedence over earlier consultation-led website plans')
bullets(['Lead with the visitor’s experience, not a personal profile or consultation offer. Begin with a useful reflection that can be tried immediately.','Use a clear learning path: notice an experience, understand the relevant idea, examine an ordinary example, try an action, and review what changed. Every main lesson should connect understanding with practice.','Make the complete core philosophy freely readable on the page: the original Mula Siddhanta, one Shakti, the two levels, witnessing, surrender, Bhakti and Jnana, discernment, scriptural pointers, responsibility, and the Beautiful World vision.','Use calm, readable, mobile-friendly pages, meaningful headings, contents links, concrete examples, reflection prompts, and clear next steps. The design should feel like a learning companion rather than a sales page.','Visitors must not need to book, pay, register, submit personal information, or contact Uday to benefit from the learning content. Preserve independent judgment and freedom to disagree.','Remove consultation priority, promotional booking calls to action, and a separate About Me focus. Keep email unobtrusive in the footer; any personal conversation is a quiet, optional last step.','Do not add a donation button now. If requested later, place it quietly at the very bottom without competing with the learning experience.','Keep proposals, beliefs, practical observations, and evidence-based claims distinct. Support care, accountability, boundaries, and appropriate professional help; do not promise cures or guaranteed enlightenment.'])
h('Design acceptance test',2)
p('Can a visitor understand an idea, reflect on their own situation, and identify one constructive next action without contacting Uday? If a page only describes the philosophy or promotes a conversation but does not help the visitor use the understanding, it is incomplete. Primary navigation and prominent links should lead to learning and practice, not booking.')
p('The public learning exercises are editorial applications of the reference philosophy, not claimed historical teachings or proof of outcomes. Future programmes, proposed technologies, historical experiments, scientific claims, and established beliefs must remain clearly separated.')

h('10. Practical experiments and communication')
h('Android-first working method',2)
p('Because the work is often carried through an Android smartphone, the workflow should remain simple: capture an idea; send it with a real-life example; ask for an explanation, exercise, or script; review and record the result; share through an existing channel; and bring back anonymous feedback.')
h('Reusable prompts',2)
bullets(['Explain this idea in simple language for a person facing an everyday problem.','Turn this insight into a five-minute reflection and one practical action.','Challenge this claim: what is belief, what is observation, and what would count as evidence?','Write a respectful conversation that does not force agreement.','Make this suitable for a website while keeping health and spiritual claims accurate.'])
h('Public language principles',2)
p('Use “may,” “can,” “in this perspective,” and “for some people” where outcomes vary. Avoid presenting proposals as launched programmes, assistant-generated designs as historical facts, or spiritual interpretations as scientific conclusions. Invite questions. Make room for disagreement. Protect privacy and obtain consent before publishing personal stories.')

h('11. AI collaboration and project continuity')
p('AI can help preserve and organize the philosophy, clarify language, challenge weak claims, write and translate lessons, design learning materials, create visual explanations, research feasibility, build practical tools, and coordinate project information. AI cannot guarantee awakening or world change, act physically without access, read every private conversation, or make other people promote the philosophy.')
p('For future Codex work, this document is the durable project reference. The saved source guide is retained under the project’s references folder, and the website README records the continuity context. When changing the website, preserve the distinctions in this document and check whether new copy is an original belief, an interpretation, a proposal, or a claim requiring evidence.')
h('A concise project brief',2)
p('Uday Kumar is developing Mind Clarity around a personal philosophy of one Shakti, witnessing, surrender, compassion, responsibility, and the aspiration for a Beautiful World. The goal is to combine inner clarity with practical care for people and nature, while exploring technology that reduces unnecessary burdens. The work should begin with simple, voluntary, testable practices and communicate spiritual ideas honestly, without coercion or unsupported promises.')

h('12. Working summary and open questions')
h('The philosophy in one paragraph',2)
p('There is one ultimate energy or Shakti, expressed as all existence and all roles. Existence is a designed game of experiences whose total course cannot be rewritten from outside, yet responsible choices, learning, help, repair, and protection remain meaningful within ordinary life. Clarity grows through witnessing, surrender, devotion, discernment, and seeing shared humanity without denying harm. The practical aim is a Beautiful World: a place where people, nature, and technology support clear, kind, responsible, and joyful living.')
h('Open questions for future work',2)
bullets(['How can the philosophy be communicated across religious and non-religious audiences without collapsing important differences?','What small practices create observable value for willing participants?','How can ecological limits, fairness, governance, and access shape the technology vision?','Which website claims are personal philosophy, which are service descriptions, and which need external evidence?','What feedback would show that the work is becoming clearer, kinder, and more useful?'])
h('Source and version note',2)
p('Primary source: Uday Kumar, “A Beautiful World,” Mind Clarity Consultant, version 2, 16 September 2026, including the supplied Mula Siddhanta and benefit guardrails. This organized document also incorporates the Mind Clarity website context developed in ChatGPT Work and Codex. Version 1.3 • 19 September 2026. This revision adds the Sthitaprajna teaching from Bhagavad Gita Chapter 2, alongside the four paths to self-knowledge, non-hatred and interconnectedness, the sportive spirit of life, and the lotus practice; the original root principle remains unchanged. The So’ham Asmi reference is clarified to Isha Upanishad 16; text reference: https://sri-aurobindo.co.in/workings/sa/12/isha_e.pdf.')
doc.core_properties.title='Uday Philosophy'; doc.core_properties.author='Uday Kumar'; doc.core_properties.subject='Mind Clarity, Mula Siddhanta, and Beautiful World vision'
doc.save(OUT)
print(OUT)

import React from 'react';
import { Page, Reflection } from './site-layout.js';
import { localizedPath } from './language-options.js';

const e = React.createElement;
const p = text => e('p', null, text);
const reflectionCopy = {
  hi: { label: 'अभी इस पर विचार करें', prompt: 'अभी इस पर विचार करें' },
  es: { label: 'Reflexión para ahora', prompt: 'Reflexiona ahora' },
  fr: { label: 'Réfléchissez maintenant', prompt: 'Réfléchissez maintenant' },
};
const translationNote = {
  hi: 'यह पृष्ठ हिन्दी पाठकों के लिए तैयार किया गया है; मूल आध्यात्मिक अर्थ और सीमाएँ सुरक्षित रखी गई हैं।',
  es: 'Esta página está preparada para lectores en español; conserva el sentido espiritual y sus límites.',
  fr: 'Cette page est préparée pour les lecteurs francophones ; son sens spirituel et ses limites sont conservés.',
};
const statement = {
  hi: 'हम ही सृष्टिकर्ता हैं। हमने अनुभवों का यह खेल बनाया और इसमें प्रवेश किया। इसमें प्रवेश करने से पहले इसकी रूपरेखा तय कर लेने के कारण, खेल के भीतर से हम इसकी रूपरेखा बदल नहीं सकते।',
  es: 'Somos el Creador. Creamos este juego de experiencias y entramos en él. Al haberlo diseñado antes de entrar, no podemos cambiar su diseño desde dentro del juego.',
  fr: 'Nous sommes le Créateur. Nous avons créé ce jeu d’expériences et nous y sommes entrés. L’ayant conçu avant d’y entrer, nous ne pouvons pas en modifier la conception depuis l’intérieur du jeu.',
};

const more = {
  hi: {
    privacy: {
      eyebrow: 'आपकी जानकारी', title: 'गोपनीयता की जानकारी',
      sections: [
        ['पढ़ना और आत्म-विचार', 'इन सीखने वाले पृष्ठों के लिए खाते, बुकिंग या फॉर्म जमा करने की आवश्यकता नहीं है। आत्म-विचार के प्रश्न आपके उत्तर एकत्र या संग्रहीत नहीं करते। लिखना चाहें तो अपनी कॉपी या अपनी पसंद के साधन का उपयोग करें।'],
        ['प्रश्न खोजक', 'प्रश्न खोजक आपके ब्राउज़र में उत्तरों को छाँटता है। इसका पाठ सहेजा नहीं जाता, URL में नहीं रखा जाता, किसी मॉडल को नहीं भेजा जाता और इस सुविधा से एनालिटिक्स में शामिल नहीं होता। यह लाइव AI बातचीत नहीं है। सामान्य वेबसाइट एनालिटिक्स नीचे बताए अनुसार काम करता है।'],
        ['आप जो साझा करना चुनते हैं', 'Mind Clarity को वही जानकारी मिलती है जिसे आप ईमेल या WhatsApp से भेजना चुनते हैं। कार्ड नंबर, बैंक विवरण, OTP या पासवर्ड न भेजें।'],
        ['एनालिटिक्स', 'यह वेबसाइट सामान्य आगंतुक गतिविधि समझने के लिए Google Analytics का उपयोग करती है। इसका उपयोग चिकित्सकीय या मनोवैज्ञानिक प्रोफाइल बनाने के लिए नहीं किया जाता।'],
        ['वैकल्पिक भुगतान', 'वैकल्पिक बातचीत के भुगतान Razorpay द्वारा संसाधित किए जाते हैं। Mind Clarity आपके पूरे भुगतान विवरण को माँगता या संग्रहीत नहीं करता।'],
        ['प्रश्न', 'गोपनीयता से जुड़े प्रश्नों के लिए ईमेल से संपर्क करें: pudaykumar12@gmail.com।'],
      ],
    },
    consultation: {
      eyebrow: 'एक वैकल्पिक अगला कदम', title: 'व्यक्तिगत बातचीत',
      intro: 'यह शिक्षा अनुभवों के खेल में सृष्टिकर्ता की ओर लौटने पर केन्द्रित है। इसके स्पष्टीकरण और अभ्यास यहाँ निःशुल्क उपलब्ध हैं। यदि आप इन्हें पढ़कर भी व्यक्तिगत बातचीत चाहते हैं, तो मौजूदा विकल्प नीचे दिया गया है।',
      sections: [
        ['व्यावहारिक विवरण', 'परिचयात्मक चिन्तन-बातचीत 30 मिनट की है और शुल्क ₹500 है। फोन, Zoom, WhatsApp कॉल या आपसी व्यवस्था से ऑफलाइन बातचीत संभव है। उपलब्ध समय 9 am–10 pm (IST) है। व्यक्तिगत या समूह बातचीत पर अलग से चर्चा की जा सकती है।'],
        ['समय तय करना', 'भुगतान से पहले उपयुक्त समय तय करें: pudaykumar12@gmail.com या WhatsApp +91 9989766517।'],
        ['सीमा', 'यह आध्यात्मिक चिन्तन और व्यक्तिगत विकास है, थेरेपी या संकट सहायता नहीं।'],
        ['भुगतान की जानकारी', 'बातचीत का समय तय होने के बाद मौजूदा Razorpay भुगतान पृष्ठ उपलब्ध है। भुगतान के बाद केवल payment reference साझा करें। कार्ड नंबर, बैंक विवरण, OTP या पासवर्ड कभी न भेजें।'],
        ['दोहरा भुगतान', 'यदि एक ही परिचयात्मक बातचीत के लिए गलती से दो बार भुगतान हो जाए, तो अतिरिक्त भुगतान 1–2 दिनों में वापस किया जाएगा।'],
      ],
      payment: 'Razorpay भुगतान पृष्ठ', continue: 'स्वतंत्र रूप से सीखना जारी रखें',
    },
    topics: {
      'who-am-i-self-enquiry': {
        title: 'मैं कौन हूँ? आत्म-विचार कैसे शुरू करें', intro: 'उदय कुमार की शिक्षा में आत्म-विचार यह जानने की प्रेरणा से शुरू होता है कि आप कौन हैं। “हम सृष्टिकर्ता हैं” जाँच की दिशा है, बिना प्रश्न किए दोहराने योग्य आदेश नहीं।',
        sections: [
          ['“हम सृष्टिकर्ता हैं” का क्या अर्थ है?', 'उदय “सृष्टिकर्ता” को अलग और श्रेष्ठ व्यक्तित्व के बजाय अलग-अलग जीवनों में दिखाई देने वाले एक साझा स्रोत के लिए उपयोग करते हैं। उनके अनुसार देहधारी जीवन अनुभवों का ऐसा खेल है जिसे इस साझा सृष्टिकर्ता ने बनाया और जिसमें प्रवेश किया। यह यहाँ प्रस्तुत आध्यात्मिक ढाँचा है; यह किसी व्यक्ति को दूसरों पर अधिकार नहीं देता।'],
          ['औपचारिक विधि के बिना कैसे शुरू करें?', 'साधारण जीवन में रहते हुए “मैं कौन हूँ?” प्रश्न को उठने दें। पेड़, उगता बीज, कोई संबंध या अपने शरीर की जागरूकता आश्चर्य जगा सकती है। उदय का निमंत्रण अपने सामने आए अनुभव की जाँच करना है, रोज़ का काम पूरा करना नहीं। वेबसाइट के उदाहरण वैकल्पिक सहायक हैं।'],
          ['यदि भीतर से कोई उत्तर आए?', 'उदय प्रश्नों को मन में उठते और समझ को समय के साथ विकसित होते बताते हैं। कोई अन्तर्दृष्टि, जुड़ाव या शान्त प्रतिक्रिया दिखाई दे सकती है। देखें कि वह अनुभव क्या कहता है और क्या सिद्ध नहीं करता। तीव्र भावना अपने आप सृष्टि के इस विवरण का स्वतंत्र प्रमाण नहीं है; ईमानदार जाँच में अनिश्चितता रह सकती है।'],
          ['साधारण क्षण में यह कैसा दिख सकता है?', 'मान लें कोई आपसे असहमत है। जीतने वाली भूमिका में खुद को सीमित करने के बजाय पूछें कि साझा पहचान दोनों लोगों के लिए क्या अर्थ रखती है। ध्यान से सुनना, स्पष्ट प्रश्न पूछना और सीमा रखना—तीनों सम्भव भागीदारी हैं। यह शिक्षा का उदाहरण है, ज्ञान की परीक्षा नहीं।'],
        ],
        related: [['“मैं कौन हूँ?” पूछते समय पहचान किसे मान रहे हैं?', 'उत्तर लिखना या आज निष्कर्ष पर पहुँचना आवश्यक नहीं।'], ['क्या मुझे कोई डायरी रखनी होगी?', 'नहीं। अपने होने को जानने की प्रेरणा ही शुरुआत है।'], ['क्या मैं इस शिक्षा से असहमत हो सकता हूँ?', 'हाँ। सम्मानजनक प्रश्न और ईमानदार असहमति आत्म-विचार का हिस्सा हो सकते हैं।']],
        reflection: 'जब आप “मैं कौन हूँ?” पूछते हैं, तब अपनी पहचान किसे मान रहे हैं? आज उत्तर लिखना या निष्कर्ष पाना आवश्यक नहीं।', practice: 'पाँच मिनट का अभ्यास देखें', practiceSlug: 'five-minutes', note: 'ये व्याख्याएँ उदय कुमार के आध्यात्मिक ढाँचे को प्रस्तुत करती हैं; वे चिकित्सकीय सलाह या सृष्टि के स्वतंत्र रूप से सत्यापित प्रमाण नहीं हैं।',
      },
      'surrender-free-will-and-design': {
        title: 'समर्पण, इच्छा और रूपरेखा का क्या अर्थ है?', intro: 'उदय कुमार की समझ में समर्पण का अर्थ है स्वीकार करना कि खेल की पूरी रूपरेखा को भीतर से फिर नहीं लिखा जा सकता। इसका अर्थ काम, सुरक्षा या जिम्मेदारी छोड़ देना नहीं है।',
        sections: [
          ['यदि सब रूपरेखा में है तो प्रयास क्यों करें?', 'उदय सीखने, काम, निर्णय और सुधार को भी रूपरेखा का भाग मानते हैं। प्रयास का अनुभव में अर्थ होने के लिए दुनिया से बाहर खड़ा होना आवश्यक नहीं। शिक्षा आपसे पूरे परिणाम पर नियंत्रण माँगे बिना भाग लेने को कहती है, जीवन के सामने निष्क्रिय प्रतीक्षा को नहीं।'],
          ['समर्पण किसी दूसरे व्यक्ति के आगे झुकना नहीं है', 'उदय रूपरेखा के प्रति समर्पण और किसी हानि पहुँचाने वाले व्यक्ति के आगे समर्पण में स्पष्ट अंतर करते हैं। सीमा बनाना, सहायता माँगना और उचित कानूनी कदम उठाना सम्भव हैं। रूपरेखा की भाषा सहमति मिटाती, दुर्व्यवहार को सही ठहराती या खतरे में रहने को आवश्यक नहीं बनाती।'],
          ['उदाहरण: किसी महत्वपूर्ण परिणाम की प्रतीक्षा', 'आप साक्षात्कार की तैयारी कर सकते हैं, ईमानदारी से उत्तर दे सकते हैं और उचित follow-up कर सकते हैं। हर उत्तर तय करना या परिणाम पहले जानना आपके हाथ में नहीं है। इस दर्शन में तैयारी और प्रतीक्षा दोनों अनुभव हैं; वर्तमान काम पर लौटना भविष्य को तुरन्त निश्चित बनाने की माँग ढीली कर सकता है। सफलता की गारंटी नहीं मिलती।'],
          ['यह स्वतंत्र इच्छा से कैसे जुड़ता है?', 'उदय का मत है कि पूरा unfolding, चुनाव करने की अनुभूति सहित, रूपरेखा में है। यह पृष्ठ उसी मत को समझाता है; यह स्वतंत्र इच्छा पर दार्शनिक बहस का अन्तिम निर्णय नहीं है। आप तर्क की जाँच, प्रश्न या असहमति कर सकते हैं।'],
          ['क्या समर्पण सारी अनिश्चितता हटा सकता है?', 'नहीं। उदय कहते हैं कि हमें अगला दृश्य पहले से ज्ञात नहीं होता। यह वेबसाइट या ज्योतिष किसी दुर्घटना, हानि या कठिन घटना के न होने का वादा नहीं करती।'],
        ],
        related: [['यदि खेल नहीं बदलता तो काम क्यों करें?', 'प्रयास, निर्णय, सीखना और सुधार स्वयं unfolding का हिस्सा हैं।'], ['क्या समर्पण कुछ न करने जैसा है?', 'नहीं। काम, सुरक्षा, सीखना और सुधार जीवन में बने रहते हैं।'], ['क्या हम भविष्य में होने वाली हर बात जान सकते हैं?', 'नहीं। अगला दृश्य अज्ञात रहना अनुभव का हिस्सा है।']],
        reflection: 'इस स्थिति में आप उचित रूप से क्या कर सकते हैं, और किस परिणाम की गारंटी माँग रहे हैं?', practice: 'निर्णय वाले अभ्यास पर जाएँ', practiceSlug: 'decision', note: 'समर्पण निष्क्रियता, हानि स्वीकार करने या स्वास्थ्य और सुरक्षा की उपेक्षा का निर्देश नहीं है।',
      },
      'meditation-and-self-realization': {
        title: 'ध्यान और आत्म-बोध: आप कौन हैं, इसकी खोज', intro: 'उदय कुमार ध्यान को सहज ध्यान और पहचान तथा सृष्टि की जाँच के लिए एक अवसर बताते हैं। इसका उद्देश्य किसी निर्धारित अनुभूति को प्राप्त करना नहीं है।',
        sections: [
          ['ध्यान निमंत्रण है, प्रदर्शन नहीं', 'शान्त क्षण में किसी प्रश्न को दूसरी गतिविधि में भागने से पहले देखना आसान हो सकता है। चुप्पी को जबरन पैदा करने या खुद को किसी और के अनुभव से मापने की जरूरत नहीं। उदय की शुरुआत अपने होने को जानने की प्रेरणा है; कोई अनिवार्य timetable या record नहीं।'],
          ['स्पष्टता से इसका सम्बन्ध क्या है?', 'उदय स्थिर मन को साझा सृष्टिकर्ता के स्मरण और पूरी रूपरेखा को नियंत्रित करने की माँग छोड़ने से जोड़ते हैं। उनके अनुसार इससे अनुभव से मिलने का ढंग बदल सकता है। यह इच्छित दिशा है, हर व्यक्ति के लिए एक जैसा परिणाम या प्रमाणपत्र नहीं।'],
          ['उदाहरण: कठिन बातचीत के बाद लौटना', 'आप क्रोध, सुने जाने की जरूरत या दूसरे व्यक्ति के बारे में दोहराती कहानी देख सकते हैं। एक विराम यह पूछने की जगह देता है कि क्या हुआ और अभी क्या चाहिए। साझा स्रोत को याद करना शांत लेकिन दृढ़ उत्तर को दिशा दे सकता है; सीमा फिर भी आवश्यक हो सकती है।'],
          ['स्वास्थ्य और साँस आध्यात्मिक अंक नहीं हैं', 'उदय की बाद की स्पष्टता में बीमारी, दुर्घटना और मृत्यु भी रूपरेखा में सम्भव हैं। किसी के बोध का निर्णय diagnosis से न करें और आध्यात्मिक कारण से चिकित्सा न छोड़ें। “पूर्ण ऑक्सीजन” साँस, ऊर्जा और स्पष्टता का अनुभव बताता है; यह blood oxygen का माप या उपचार निर्देश नहीं है।'],
          ['ज्योतिष और चक्रों का स्थान क्या है?', 'उदय अपनी व्यापक व्याख्या में ग्रहों के प्रभाव और चक्रों को तैयारी तथा अनुभव से जोड़ते हैं। विशेषज्ञ बनना आवश्यक नहीं। यह उनका आध्यात्मिक ढाँचा है, स्थापित चिकित्सकीय mechanism नहीं; आप इसे जाँच कर असहमत रह सकते हैं।'],
        ],
        related: [['ध्यान का इस जाँच में क्या स्थान है?', 'यह सहज ध्यान और पहचान की खोज का अवसर हो सकता है; कोई कठोर मुद्रा या अनुभूति आवश्यक नहीं।'], ['क्या बोध पूर्ण स्वास्थ्य की गारंटी देता है?', 'नहीं। बीमारी, दुर्घटना, मृत्यु और अनिश्चितता की कोई गारंटी नहीं मिटती।'], ['“पूर्ण ऑक्सीजन” से क्या अर्थ है?', 'यह आसान साँस, ऊर्जा और स्पष्टता का अनुभव है, blood oxygen का माप नहीं।']],
        reflection: 'जब आप किसी खास अनुभूति की माँग किए बिना रुकते हैं, तब क्या देखते हैं? प्रश्न का खुला रहना भी ठीक है।', practice: 'अधिक सोचने वाले अभ्यास पर जाएँ', practiceSlug: 'overthinking', note: 'ध्यान उचित स्वास्थ्य देखभाल का विकल्प नहीं है। असहज या बहुत भारी लगे तो रुकें और उपयुक्त सहायता लें।',
      },
      'guilt-responsibility-and-boundaries': {
        title: 'आत्म-विचार में अपराधबोध, जिम्मेदारी और सीमाएँ', intro: 'उदय कुमार उचित सुधार और लंबे समय तक आत्म-दोष के बीच अंतर करते हैं। साझा सृष्टिकर्ता को पहचानना हानि स्वीकार करने या जिम्मेदारी से बचने का कारण नहीं है।',
        sections: [
          ['पश्चाताप और आत्म-दोष में क्या अंतर है?', 'गलती पहचानना बता सकता है कि किसी बात पर ध्यान चाहिए। बार-बार खुद को निकम्मा कहना दूसरे व्यक्ति पर पड़े प्रभाव की मरम्मत नहीं करता। उदय का जोर अभी आपके हाथ में जो है उसे करने पर है, अनावश्यक आत्म-दण्ड पर नहीं। इसका अर्थ घटना से इनकार या क्षमा की माँग नहीं है।'],
          ['उदाहरण: आपने वादा निभाया नहीं', 'आप एक प्रतिबद्धता भूल गए और दूसरे व्यक्ति को असुविधा हुई। बात स्वीकार करें, प्रभाव सुनें और सम्भव व्यावहारिक सुधार दें। आगे commitments निभाने का तरीका बदलें। “सब रूपरेखा में है” उस बातचीत की जगह नहीं ले सकता और दोबारा वही व्यवहार करने का बहाना नहीं है।'],
          ['यदि मैं उस व्यक्ति से संपर्क नहीं कर सकता?', 'यदि माफी सचमुच सम्भव नहीं है तो उदय कहते हैं कि खुद को लगातार चोट पहुँचाते रहना जरूरी नहीं। गलती समझें और जो व्यवहार आपके हाथ में है उसे बदलें। दूसरे की दूरी की इच्छा का सम्मान करें; माफी सीमा तोड़ने का कारण नहीं है। कुछ repair के लिए पेशेवर या कानूनी मार्गदर्शन चाहिए हो सकता है।'],
          ['क्या करुणा रखते हुए दृढ़ रह सकता हूँ?', 'हाँ। साझा पहचान सीमाएँ मिटाती नहीं। आप कह सकते हैं कि कोई काम अस्वीकार्य है, खतरनाक स्थिति से निकल सकते हैं या मदद ले सकते हैं। उदय का मच्छर उदाहरण किसी मनुष्य को बदले में चोट पहुँचाने की अनुमति नहीं है; उचित प्रतिक्रिया अनुपातिक और कानूनी होनी चाहिए।'],
          ['क्या असहमति का मतलब कोई कम मूल्यवान है?', 'नहीं। उदय कहते हैं कि वे असहमत लोगों का अपमान या दबाव नहीं चाहते। अलग समझ किसी की देखभाल की योग्यता कम नहीं करती। यह साइट ईमानदार प्रश्नों का स्वागत करती है और किसी की कीमत को सहमति से नहीं मापती।'],
        ],
        related: [['पश्चाताप और आत्म-दोष में क्या अंतर है?', 'सुधार की कार्रवाई उपयोगी है; लंबे समय का आत्म-दण्ड अपने आप repair नहीं करता।'], ['यदि मैंने किसी को चोट पहुँचाई तो क्या करूँ?', 'घटना स्वीकार करें, उचित हो तो माफी माँगें और सम्भव सुधार करें।'], ['क्या साझा पहचान का अर्थ हानि सहना है?', 'नहीं। सीमा, सहायता और सुरक्षा भी साझा सृष्टि का हिस्सा हैं।']],
        reflection: 'अब किस सुधार या सीमा की आवश्यकता है? क्या आप खुद को या दूसरे को एक गलती तक सीमित किए बिना काम कर सकते हैं?', practice: 'आत्म-दोष वाला अभ्यास देखें', practiceSlug: 'self-judgment', note: 'यह शिक्षा हानि को छोटा नहीं करती। सुरक्षा, सहमति, कानून और उपयुक्त सहायता का सम्मान करें।',
      },
    },
  },
  es: {
    privacy: {
      eyebrow: 'Tu información', title: 'Información de privacidad',
      sections: [
        ['Lectura y reflexión', 'Las páginas de aprendizaje no requieren cuenta, reserva ni envío de formularios. Las preguntas de reflexión no recogen ni guardan tus respuestas. Si quieres escribir, usa tu cuaderno o la herramienta que prefieras.'],
        ['Buscador de preguntas', 'El buscador filtra las respuestas en tu navegador. El texto no se guarda, no se coloca en la URL, no se envía a un modelo y esta función no lo incluye en los eventos de analítica. No es una conversación de IA en directo.'],
        ['Información que eliges enviar', 'Mind Clarity recibe la información que decides compartir por correo o WhatsApp. No envíes números de tarjeta, datos bancarios, OTP ni contraseñas.'],
        ['Analítica', 'Este sitio usa Google Analytics para comprender la actividad general de los visitantes. No se utiliza para crear perfiles médicos o psicológicos.'],
        ['Pagos opcionales', 'Razorpay procesa los pagos de conversaciones opcionales. Mind Clarity no solicita ni guarda tus credenciales completas de pago.'],
        ['Preguntas', 'Para consultas de privacidad, escribe a pudaykumar12@gmail.com.'],
      ],
    },
    consultation: {
      eyebrow: 'Un paso final opcional', title: 'Una conversación personal',
      intro: 'La enseñanza se centra en recordar al Creador dentro del juego de las experiencias. Sus explicaciones y prácticas están disponibles aquí sin coste. Si después de explorarlas prefieres hablar personalmente, estas son las opciones actuales.',
      sections: [
        ['Detalles prácticos', 'Una conversación introductoria de reflexión dura 30 minutos y cuesta ₹500. Puede ser por teléfono, Zoom, llamada de WhatsApp u offline mediante acuerdo. El horario disponible es de 9:00 a 22:00 (IST). También se pueden conversar opciones individuales o grupales.'],
        ['Acordar un horario', 'Acuerda un horario antes de pagar: pudaykumar12@gmail.com o WhatsApp +91 9989766517.'],
        ['Límite', 'Es reflexión espiritual y desarrollo personal, no terapia ni apoyo de crisis.'],
        ['Información de pago', 'Después de acordar la conversación, está disponible la página de pago de Razorpay. Si pagas, comparte solo la referencia del pago. Nunca envíes números de tarjeta, datos bancarios, OTP ni contraseñas.'],
        ['Pago duplicado', 'Si pagas dos veces por error la misma conversación introductoria, el pago duplicado se devolverá en 1–2 días.'],
      ],
      payment: 'Página de pago de Razorpay', continue: 'Continuar aprendiendo por tu cuenta',
    },
    topics: {
      'who-am-i-self-enquiry': {
        title: '¿Quién soy? Cómo empezar la autoindagación', intro: 'En la enseñanza de Uday Kumar, la autoindagación comienza con la motivación de saber quién eres. «Somos el Creador» orienta la investigación; no es una frase que debas repetir sin cuestionarla.',
        sections: [
          ['¿Qué significa «somos el Creador»?', 'Uday usa «Creador» para referirse a una fuente compartida que aparece en vidas diferentes, no a una personalidad separada con poderes superiores. Describe la vida encarnada como un juego de experiencias que esa fuente diseñó y al que entró. Es un marco espiritual; no concede autoridad sobre otras personas.'],
          ['¿Cómo empezar sin un método formal?', 'Puedes permanecer en la vida ordinaria y dejar que surja la pregunta «¿quién soy?». Un árbol, una semilla, una relación o la conciencia del cuerpo pueden despertar asombro. La invitación es investigar lo que encuentras, no completar una tarea diaria. Los ejemplos del sitio son ayudas opcionales.'],
          ['¿Y si aparece una respuesta interior?', 'Uday describe preguntas que surgen en la mente y una comprensión que se desarrolla con el tiempo. Puedes notar una intuición, conexión o respuesta más tranquila. Examina lo que ese momento significa y lo que no demuestra. Una emoción intensa por sí sola no prueba el relato de la creación; la incertidumbre puede permanecer.'],
          ['¿Cómo se ve en un momento normal?', 'Supón que alguien no está de acuerdo contigo. En vez de reducirte al papel que debe ganar, pregunta qué significa la identidad compartida para ambas personas. Escuchar, hacer una pregunta clara y poner un límite son formas posibles de participar. Es una ilustración, no una prueba de iluminación.'],
        ],
        related: [['Cuando pregunto «¿quién soy?», ¿qué tomo por identidad?', 'No tienes que escribir una respuesta ni llegar hoy a una conclusión.'], ['¿Debo llevar un diario?', 'No. La motivación de saber quién eres es el comienzo.'], ['¿Puedo cuestionar esta enseñanza?', 'Sí. Las preguntas respetuosas y el desacuerdo sincero son bienvenidos.']],
        reflection: 'Cuando preguntas «¿quién soy?», ¿qué estás tomando por identidad? No necesitas escribir una respuesta ni llegar hoy a una conclusión.', practice: 'Probar la práctica de cinco minutos', practiceSlug: 'five-minutes', note: 'Estas explicaciones presentan el marco espiritual de Uday Kumar; no son consejo médico ni una prueba independiente de la creación.',
      },
      'surrender-free-will-and-design': {
        title: '¿Qué significa rendirse? Voluntad y diseño', intro: 'En el relato de Uday Kumar, rendirse significa aceptar que el diseño total no puede reescribirse desde dentro del juego. No significa abandonar el trabajo, la protección ni la responsabilidad.',
        sections: [
          ['Si todo está diseñado, ¿por qué actuar?', 'Uday incluye el aprendizaje, el trabajo, las decisiones y la reparación dentro del diseño. Un esfuerzo puede tener sentido en la experiencia sin estar fuera del mundo. La enseñanza invita a participar sin exigir control sobre todo el resultado, no a esperar pasivamente.'],
          ['Rendirse no es someterse a otra persona', 'Uday distingue el rendimiento ante el diseño de someterse a alguien que hace daño. Es posible poner límites, pedir ayuda y usar vías legales adecuadas. Hablar de diseño no elimina el consentimiento, justifica el abuso ni exige permanecer en peligro.'],
          ['Ejemplo: esperar un resultado importante', 'Puedes preparar una entrevista, responder con honestidad y hacer un seguimiento adecuado. No puedes dictar cada respuesta ni conocer el resultado por adelantado. Prepararse y esperar son experiencias; volver a la tarea presente puede aflojar la exigencia de certeza inmediata. No garantiza que la entrevista salga bien.'],
          ['¿Cómo se relaciona con el libre albedrío?', 'La posición de Uday es que todo el desarrollo, incluida la sensación de elegir, está diseñado. Esta página explica esa posición; no resuelve el debate filosófico. Puedes examinarla, hacer preguntas y discrepar sin ser tratado como inferior.'],
          ['¿Puede la rendición eliminar toda incertidumbre?', 'No. Uday dice que no conocemos la escena siguiente. Ni este sitio ni una interpretación astrológica prometen que no ocurrirá un accidente, una pérdida o una dificultad.'],
        ],
        related: [['Si el juego no cambia, ¿por qué esforzarse?', 'El esfuerzo, las decisiones, el aprendizaje y la reparación forman parte del desarrollo.'], ['¿Rendirse equivale a no hacer nada?', 'No. El trabajo, la protección, el aprendizaje y la reparación siguen presentes.'], ['¿Podemos saber todo lo que sucederá?', 'No. La escena siguiente permanece desconocida.']],
        reflection: '¿Qué puedes hacer razonablemente en la situación presente y qué resultado estás intentando garantizar?', practice: 'Ir al ejemplo sobre decisiones', practiceSlug: 'decision', note: 'Rendirse no es pasividad ni una instrucción para aceptar daño o descuidar la salud y la seguridad.',
      },
      'meditation-and-self-realization': {
        title: 'Meditación y autorrealización: explorar quién eres', intro: 'Uday Kumar describe la meditación como un espacio para una atención sin tensión y para investigar la identidad y la creación. Su propósito aquí es comprender, no conseguir una sensación prescrita.',
        sections: [
          ['La meditación es una invitación, no una actuación', 'Un momento tranquilo puede facilitar que notes una pregunta en vez de escapar enseguida a otra actividad. No necesitas forzar el silencio ni medirte con la experiencia de otra persona. El punto de partida es la motivación de saber quién eres, sin horario ni registro obligatorios.'],
          ['¿Qué relación tiene con la claridad?', 'Uday relaciona una mente estable con recordar al Creador compartido y soltar la exigencia de controlar todo el diseño. Describe un cambio en la forma de afrontar una experiencia. Es un beneficio propuesto, no un certificado ni una respuesta igual para todos.'],
          ['Ejemplo: volver después de una conversación difícil', 'Puedes notar enfado, la necesidad de ser escuchado o una historia repetida sobre la otra persona. Una pausa deja espacio para preguntar qué ocurrió y qué se necesita ahora. Recordar la fuente compartida puede orientar una respuesta serena y firme; el límite puede seguir siendo necesario.'],
          ['La salud y la respiración no son notas espirituales', 'Las aclaraciones posteriores de Uday permiten enfermedad, accidentes y muerte dentro del diseño. No juzgues la realización de alguien por un diagnóstico ni abandones la atención médica por una explicación espiritual. «Oxígeno completo» describe una sensación de respiración, energía y claridad; no mide el oxígeno en sangre ni indica un tratamiento.'],
          ['¿Qué lugar ocupan la astrología y los chakras?', 'En su interpretación amplia, Uday relaciona la influencia planetaria y los chakras con la preparación y la experiencia. No exige convertirse en experto. Es su marco espiritual y astrológico, no un mecanismo médico establecido; puedes investigarlo y seguir sin convencerte.'],
        ],
        related: [['¿Qué lugar tiene la meditación en esta investigación?', 'Puede ofrecer atención sin tensión y espacio para investigar la identidad; no exige una postura o sensación concretas.'], ['¿La iluminación garantiza salud perfecta?', 'No. La enfermedad, los accidentes, la muerte y la incertidumbre siguen siendo posibles.'], ['¿Qué significa «oxígeno completo»?', 'Es una sensación de respiración fácil, energía y claridad, no una medición de oxígeno en sangre.']],
        reflection: '¿Qué notas cuando haces una pausa sin exigir una sensación concreta? Es válido que una pregunta siga sin respuesta.', practice: 'Ir al ejemplo sobre pensamientos repetitivos', practiceSlug: 'overthinking', note: 'La meditación no sustituye la atención sanitaria adecuada. Si resulta incómoda o abrumadora, detente y busca apoyo apropiado.',
      },
      'guilt-responsibility-and-boundaries': {
        title: 'Culpa, responsabilidad y límites en la autoindagación', intro: 'Uday Kumar distingue la acción correctiva razonable de la autocondena prolongada. Reconocer un Creador compartido no significa aceptar el daño ni evitar la responsabilidad.',
        sections: [
          ['¿Cuál es la diferencia entre remordimiento y autocondena?', 'Reconocer un error puede mostrar que algo necesita atención. Declararte inútil repetidamente no repara por sí mismo el efecto en otra persona. El énfasis de Uday está en hacer ahora lo que está en tus manos y evitar el castigo innecesario, sin negar lo ocurrido ni exigir perdón.'],
          ['Ejemplo: incumpliste una promesa', 'Olvidaste un compromiso y otra persona tuvo dificultades. Reconoce lo ocurrido, escucha su efecto y ofrece una reparación práctica cuando sea posible. También puedes cambiar cómo cumples compromisos futuros. Decir «todo está diseñado» no sustituye la conversación ni justifica repetir la conducta.'],
          ['¿Y si no puedo contactar con esa persona?', 'Si una disculpa no es realmente posible, Uday dice que no tienes que seguir haciéndote daño. Reconoce lo ocurrido y cambia la conducta que aún está en tus manos. Respeta el deseo de distancia; una disculpa no permite ignorar un límite. Algunas reparaciones requieren orientación profesional o legal.'],
          ['¿Puedo ser compasivo y mantenerme firme?', 'Sí. Ver una identidad compartida no borra los límites. Puedes decir que una acción es inaceptable, salir de una situación peligrosa o buscar ayuda. El ejemplo del mosquito de Uday no autoriza herir a otra persona en represalia; la respuesta debe ser proporcionada y legal.'],
          ['¿El desacuerdo significa que alguien vale menos?', 'No. Uday no quiere insultar ni forzar a quienes discrepan. Una comprensión distinta no reduce el derecho de alguien a recibir cuidado. El sitio recibe preguntas sinceras y no mide el valor de una persona por su acuerdo.'],
        ],
        related: [['¿Qué diferencia hay entre remordimiento y autocondena?', 'La reparación concreta ayuda; el castigo prolongado no repara por sí solo.'], ['¿Qué hago si he herido a alguien?', 'Reconoce lo ocurrido, pide disculpas cuando corresponda y repara de forma razonable.'], ['¿Ver al mismo Creador significa aceptar daño?', 'No. Los límites, la ayuda y la protección también pertenecen a la creación compartida.']],
        reflection: '¿Qué reparación o límite hace falta ahora? ¿Puedes actuar sin reducirte a ti o a la otra persona a un solo error?', practice: 'Ir al ejemplo sobre el juicio propio', practiceSlug: 'self-judgment', note: 'Esta enseñanza no minimiza el daño. Respeta la seguridad, el consentimiento, la ley y la ayuda adecuada.',
      },
    },
  },
  fr: {
    privacy: {
      eyebrow: 'Vos informations', title: 'Informations sur la confidentialité',
      sections: [
        ['Lecture et réflexion', 'Les pages d’apprentissage ne demandent ni compte, ni réservation, ni formulaire. Les questions de réflexion ne recueillent ni ne stockent vos réponses. Si vous souhaitez écrire, utilisez votre carnet ou l’outil de votre choix.'],
        ['Recherche dans les questions', 'La recherche filtre les réponses dans votre navigateur. Le texte n’est pas enregistré, placé dans l’URL, envoyé à un modèle ni inclus dans les événements d’analyse de cette fonction. Ce n’est pas une conversation d’IA en direct.'],
        ['Informations que vous choisissez d’envoyer', 'Mind Clarity reçoit les informations que vous choisissez de partager par e-mail ou WhatsApp. N’envoyez ni numéro de carte, ni coordonnées bancaires, ni OTP, ni mot de passe.'],
        ['Analyse d’audience', 'Ce site utilise Google Analytics pour comprendre l’activité générale des visiteurs. Il ne sert pas à créer un profil médical ou psychologique.'],
        ['Paiements facultatifs', 'Razorpay traite les paiements des conversations facultatives. Mind Clarity ne demande ni ne conserve vos identifiants complets de paiement.'],
        ['Questions', 'Pour toute question de confidentialité, écrivez à pudaykumar12@gmail.com.'],
      ],
    },
    consultation: {
      eyebrow: 'Une dernière étape facultative', title: 'Une conversation personnelle',
      intro: 'L’enseignement porte sur le souvenir du Créateur au sein du jeu des expériences. Ses explications et ses pratiques sont disponibles gratuitement ici. Si vous préférez ensuite une conversation personnelle, voici l’option actuelle.',
      sections: [
        ['Détails pratiques', 'Une conversation introductive de réflexion dure 30 minutes et coûte ₹500. Elle peut avoir lieu par téléphone, Zoom, appel WhatsApp ou hors ligne selon accord. Les disponibilités sont de 9 h à 22 h (IST). Des conversations individuelles ou de groupe peuvent être discutées.'],
        ['Fixer un moment', 'Convenez d’un moment avant de payer : pudaykumar12@gmail.com ou WhatsApp +91 9989766517.'],
        ['Limite', 'Il s’agit de réflexion spirituelle et de développement personnel, pas de thérapie ni de soutien de crise.'],
        ['Informations de paiement', 'Après avoir fixé la conversation, la page de paiement Razorpay existante est disponible. Après paiement, partagez seulement la référence. N’envoyez jamais de numéro de carte, de coordonnées bancaires, d’OTP ou de mot de passe.'],
        ['Paiement en double', 'Si vous payez par erreur deux fois la même conversation introductive, le paiement en double sera remboursé sous 1 à 2 jours.'],
      ],
      payment: 'Page de paiement Razorpay', continue: 'Continuer à apprendre seul',
    },
    topics: {
      'who-am-i-self-enquiry': {
        title: 'Qui suis-je ? Commencer l’enquête intérieure', intro: 'Dans l’enseignement d’Uday Kumar, l’enquête intérieure commence par la motivation de savoir qui vous êtes. « Nous sommes le Créateur » est une direction à examiner, non une phrase à répéter sans question.',
        sections: [
          ['Que signifie « nous sommes le Créateur » ?', 'Uday emploie « Créateur » pour une source commune qui apparaît dans des vies différentes, plutôt que pour une personnalité séparée dotée de pouvoirs supérieurs. Il décrit la vie incarnée comme un jeu d’expériences conçu et rejoint par cette source. C’est un cadre spirituel ; il ne donne pas d’autorité sur les autres.'],
          ['Comment commencer sans méthode formelle ?', 'Restez dans la vie ordinaire et laissez la question « qui suis-je ? » apparaître. Un arbre, une graine, une relation ou la conscience du corps peuvent susciter l’émerveillement. L’invitation est d’enquêter sur ce qui se présente, pas de remplir un devoir quotidien. Les exemples du site sont facultatifs.'],
          ['Et si une réponse vient de l’intérieur ?', 'Uday décrit des questions qui surgissent et une compréhension qui mûrit avec le temps. Vous pouvez remarquer une intuition, un lien ou une réponse plus calme. Examinez ce que ce moment signifie et ce qu’il n’établit pas. Une émotion forte ne prouve pas à elle seule un récit de la création ; l’incertitude peut rester sincère.'],
          ['À quoi cela ressemble-t-il dans un moment ordinaire ?', 'Supposons qu’une personne ne soit pas d’accord avec vous. Au lieu de vous réduire au rôle qui doit gagner, demandez ce que l’identité commune signifie pour les deux vies. Écouter, poser une question claire et poser une limite sont des participations possibles. C’est une illustration, pas un examen de l’éveil.'],
        ],
        related: [['Quand je demande « qui suis-je ? », que prends-je pour mon identité ?', 'Vous n’avez pas à écrire une réponse ni à conclure aujourd’hui.'], ['Dois-je tenir un journal ?', 'Non. La motivation de savoir qui vous êtes est le début.'], ['Puis-je questionner cet enseignement ?', 'Oui. Les questions respectueuses et le désaccord sincère sont bienvenus.']],
        reflection: 'Lorsque vous demandez « qui suis-je ? », que prenez-vous pour votre identité ? Il n’est pas nécessaire d’écrire une réponse aujourd’hui.', practice: 'Essayer la pratique de cinq minutes', practiceSlug: 'five-minutes', note: 'Ces explications présentent le cadre spirituel d’Uday Kumar ; elles ne sont ni un conseil médical ni une preuve indépendante de la création.',
      },
      'surrender-free-will-and-design': {
        title: 'Que signifie le lâcher-prise ? Libre arbitre et conception', intro: 'Pour Uday Kumar, le lâcher-prise signifie accepter que la conception totale ne puisse pas être réécrite depuis l’intérieur du jeu. Cela ne signifie pas abandonner le travail, la protection ou la responsabilité.',
        sections: [
          ['Si tout est conçu, pourquoi agir ?', 'Uday inclut l’apprentissage, le travail, les décisions et la réparation dans la conception. Un effort peut compter dans l’expérience sans se tenir en dehors du monde. L’enseignement invite à participer sans exiger le contrôle de tout le résultat, et non à attendre passivement.'],
          ['Le lâcher-prise n’est pas la soumission à une personne', 'Uday distingue l’abandon à la conception de la soumission à quelqu’un qui fait du mal. Poser une limite, demander de l’aide et agir légalement restent possibles. Parler de conception n’efface ni le consentement, ni la violence, ni la nécessité de quitter un danger.'],
          ['Exemple : attendre un résultat important', 'Vous pouvez préparer un entretien, répondre honnêtement et relancer de façon appropriée. Vous ne pouvez pas imposer chaque réponse ni connaître le résultat à l’avance. Préparer et attendre sont deux expériences ; revenir à la tâche présente peut desserrer l’exigence de certitude immédiate. Cela ne garantit pas la réussite.'],
          ['Quel rapport avec le libre arbitre ?', 'La position d’Uday est que tout le déroulement, y compris le sentiment de choisir, est conçu. Cette page explique cette position ; elle ne tranche pas le débat philosophique. Vous pouvez l’examiner, questionner et ne pas être d’accord.'],
          ['Le lâcher-prise peut-il supprimer toute incertitude ?', 'Non. Uday dit que nous ne connaissons pas la scène suivante. Ni ce site ni une interprétation astrologique ne promettent qu’un accident, une perte ou une difficulté n’arrivera pas.'],
        ],
        related: [['Si le jeu ne change pas, pourquoi faire des efforts ?', 'L’effort, les décisions, l’apprentissage et la réparation appartiennent au déroulement.'], ['Le lâcher-prise signifie-t-il ne rien faire ?', 'Non. Travail, protection, apprentissage et réparation restent possibles.'], ['Pouvons-nous connaître tout ce qui va arriver ?', 'Non. La scène suivante reste inconnue.']],
        reflection: 'Que pouvez-vous raisonnablement faire dans la situation actuelle, et quel résultat cherchez-vous à garantir ?', practice: 'Voir l’exemple sur les décisions', practiceSlug: 'decision', note: 'Le lâcher-prise n’est ni la passivité ni une consigne d’accepter le tort ou de négliger la santé et la sécurité.',
      },
      'meditation-and-self-realization': {
        title: 'Méditation et réalisation de soi : explorer qui vous êtes', intro: 'Uday Kumar décrit la méditation comme un espace d’attention sans tension et d’enquête sur l’identité et la création. Ici, son but est la compréhension, et non l’obtention d’une sensation imposée.',
        sections: [
          ['La méditation est une invitation, pas une performance', 'Un moment calme peut permettre de remarquer une question au lieu de fuir tout de suite vers une autre activité. Il n’est pas nécessaire de forcer le silence ni de se mesurer à l’expérience d’une autre personne. Le point de départ est la motivation de savoir qui vous êtes, sans horaire ni journal obligatoires.'],
          ['Quel lien avec la clarté ?', 'Uday relie un esprit stable au souvenir du Créateur partagé et au renoncement à contrôler toute la conception. Il décrit un changement dans la manière d’accueillir une expérience. C’est un bénéfice recherché, pas un certificat ni une réponse identique pour chacun.'],
          ['Exemple : revenir après une conversation difficile', 'Vous pouvez remarquer la colère, le besoin d’être entendu ou une histoire répétée sur l’autre. Une pause laisse de la place pour demander ce qui s’est passé et ce qui est nécessaire maintenant. Le souvenir de la source commune peut guider une réponse calme et ferme ; une limite peut rester nécessaire.'],
          ['La santé et la respiration ne sont pas des notes spirituelles', 'Les précisions ultérieures d’Uday permettent la maladie, les accidents et la mort dans la conception. Ne jugez pas la réalisation d’une personne selon un diagnostic et n’abandonnez pas les soins à cause d’une explication spirituelle. « Plein oxygène » décrit une expérience de souffle, d’énergie et de clarté ; ce n’est pas une mesure de l’oxygène sanguin ni un traitement.'],
          ['Quelle place pour l’astrologie et les chakras ?', 'Dans son interprétation plus large, Uday relie l’influence des planètes et les chakras à la préparation et à l’expérience. Il ne demande pas de devenir expert. C’est son cadre spirituel et astrologique, pas un mécanisme médical établi ; vous pouvez l’examiner et rester sceptique.'],
        ],
        related: [['Quelle est la place de la méditation dans cette enquête ?', 'Elle peut offrir une attention sans tension et un espace d’enquête ; aucune posture ou sensation précise n’est exigée.'], ['L’éveil garantit-il une santé parfaite ?', 'Non. Maladie, accidents, mort et incertitude restent possibles.'], ['Que signifie « plein oxygène » ?', 'C’est une sensation de respiration facile, d’énergie et de clarté, pas une mesure sanguine.']],
        reflection: 'Que remarquez-vous lorsque vous faites une pause sans exiger une sensation particulière ? Une question peut rester ouverte.', practice: 'Voir l’exemple sur les pensées qui tournent', practiceSlug: 'overthinking', note: 'La méditation ne remplace pas des soins appropriés. Si elle devient inconfortable ou accablante, arrêtez-vous et cherchez un soutien adapté.',
      },
      'guilt-responsibility-and-boundaries': {
        title: 'Culpabilité, responsabilité et limites dans l’enquête intérieure', intro: 'Uday Kumar distingue l’action corrective raisonnable de l’auto-condamnation prolongée. Reconnaître un Créateur commun ne signifie ni accepter le tort ni éviter sa responsabilité.',
        sections: [
          ['Quelle différence entre remords et auto-condamnation ?', 'Reconnaître une erreur peut montrer qu’une attention est nécessaire. Se déclarer sans valeur à répétition ne répare pas en soi l’effet sur une autre personne. Uday insiste sur ce qui est entre vos mains maintenant, sans nier ce qui s’est passé ni exiger le pardon.'],
          ['Exemple : vous avez manqué à une promesse', 'Vous avez oublié un engagement et une autre personne a subi un désagrément. Reconnaissez le fait, écoutez son effet et proposez une réparation concrète si possible. Changez aussi votre manière de tenir vos engagements. Dire que « tout est conçu » ne remplace pas la conversation et ne justifie pas de recommencer.'],
          ['Et si je ne peux pas contacter cette personne ?', 'Si des excuses sont réellement impossibles, Uday dit qu’il n’est pas nécessaire de continuer à se faire du mal. Reconnaissez ce qui s’est passé et changez le comportement encore entre vos mains. Respectez le souhait de distance ; des excuses ne permettent pas d’ignorer une limite. Certaines réparations demandent un conseil professionnel ou juridique.'],
          ['Puis-je être compatissant et rester ferme ?', 'Oui. Voir une identité commune n’efface pas les limites. Vous pouvez dire qu’un acte est inacceptable, quitter un lieu dangereux ou demander de l’aide. L’exemple du moustique chez Uday n’autorise pas à blesser un autre humain par représailles ; la réponse doit être proportionnée et légale.'],
          ['Le désaccord signifie-t-il que quelqu’un vaut moins ?', 'Non. Uday ne veut ni insulter ni forcer les personnes qui ne sont pas d’accord. Une compréhension différente ne diminue pas le droit d’une personne au soin. Le site accueille les questions sincères et ne mesure pas la valeur d’une personne à son accord.'],
        ],
        related: [['Quelle différence entre remords et auto-condamnation ?', 'Une réparation concrète aide ; un châtiment prolongé ne répare pas à lui seul.'], ['Que faire si j’ai blessé quelqu’un ?', 'Reconnaître, présenter des excuses si approprié et réparer raisonnablement.'], ['Voir le même Créateur signifie-t-il accepter le tort ?', 'Non. Limites, aide et protection appartiennent aussi à la création partagée.']],
        reflection: 'Quelle réparation ou quelle limite est nécessaire maintenant ? Pouvez-vous agir sans réduire l’autre ou vous-même à une seule erreur ?', practice: 'Voir l’exemple sur le jugement de soi', practiceSlug: 'self-judgment', note: 'Cet enseignement ne minimise pas le tort. Respectez la sécurité, le consentement, la loi et l’aide appropriée.',
      },
    },
  },
};

function SupportPage({ language, kind }) {
  const t = more[language][kind];
  return e(Page, { lang: language, share: false, eyebrow: t.eyebrow, title: t.title, intro: t.intro },
    e('div', { className: 'compact-reading' }, t.sections.map(([title, text]) => e('section', { key: title }, e('h2', null, title), p(text))),
      kind === 'consultation' && e('p', null, e('a', { href: 'https://rzp.io/rzp/8BpoM63h' }, t.payment)),
      kind === 'consultation' && e('p', null, e('a', { href: localizedPath(language, '') }, t.continue)),
      e('p', { className: 'translation-note quiet-note' }, translationNote[language])));
}

function LocalizedTopic({ language, slug }) {
  const t = more[language].topics[slug];
  const copy = reflectionCopy[language];
  return e(Page, { lang: language, share: false, eyebrow: `${language === 'hi' ? 'आत्म-विचार' : language === 'es' ? 'Autoindagación' : 'Enquête intérieure'} · Uday Kumar`, title: t.title, intro: statement[language] },
    p(t.intro),
    e('nav', { 'aria-label': language === 'hi' ? 'पथ' : language === 'es' ? 'Ruta' : 'Fil d’Ariane', className: 'reading-links' },
      e('a', { href: localizedPath(language, '') }, 'Mind Clarity'), e('a', { href: localizedPath(language, 'faq') }, language === 'hi' ? 'प्रश्न और उत्तर' : language === 'es' ? 'Preguntas y respuestas' : 'Questions et réponses')),
    e('p', { className: 'quiet-note' }, t.note),
    e('article', { className: 'compact-reading' },
      ...t.sections.map(([heading, text]) => e('section', { key: heading }, e('h2', null, heading), p(text))),
      e('h2', null, language === 'hi' ? 'सम्बन्धित प्रश्न' : language === 'es' ? 'Preguntas relacionadas' : 'Questions liées'),
      ...t.related.map(([question, answer]) => e('section', { key: question }, e('h3', null, question), p(answer))),
      e(Reflection, { label: copy.label, prompt: copy.prompt }, t.reflection),
      e('div', { className: 'reading-links' },
        e('a', { href: localizedPath(language, `practice#${t.practiceSlug}`) }, t.practice),
        e('a', { href: localizedPath(language, 'philosophy') }, language === 'hi' ? 'पूरा दर्शन पढ़ें' : language === 'es' ? 'Leer la filosofía completa' : 'Lire toute la philosophie'),
        e('a', { href: localizedPath(language, 'faq') }, language === 'hi' ? 'दूसरा उत्तर खोजें' : language === 'es' ? 'Buscar otra respuesta' : 'Trouver une autre réponse'))),
      e('p', { className: 'translation-note quiet-note' }, translationNote[language]));
}

export const localizedMoreComponents = {};
for (const language of ['hi', 'es', 'fr']) {
  localizedMoreComponents[`${language}/privacy`] = () => e(SupportPage, { language, kind: 'privacy' });
  for (const slug of Object.keys(more[language].topics)) {
    localizedMoreComponents[`${language}/${slug}`] = () => e(LocalizedTopic, { language, slug });
  }
}

export const localizedMoreMeta = {
  hi: {
    privacy: { title: 'गोपनीयता की जानकारी | Mind Clarity', description: 'Mind Clarity पर पढ़ने, प्रश्न खोज, एनालिटिक्स, वैकल्पिक भुगतान और आपके द्वारा साझा की गई जानकारी की हिन्दी गोपनीयता जानकारी।' },
    'consultation-info': { title: 'व्यक्तिगत बातचीत | Mind Clarity', description: 'Mind Clarity की वैकल्पिक आध्यात्मिक चिन्तन-बातचीत, समय, शुल्क, भुगतान और सीमाओं की हिन्दी जानकारी।' },
    'who-am-i-self-enquiry': { title: 'मैं कौन हूँ? आत्म-विचार कैसे शुरू करें | Mind Clarity', description: 'उदय कुमार की शिक्षा में “मैं कौन हूँ?” आत्म-विचार को जिज्ञासा और साधारण जीवन से शुरू करने का हिन्दी मार्ग।' },
    'surrender-free-will-and-design': { title: 'समर्पण, इच्छा और रूपरेखा | Mind Clarity', description: 'समर्पण, प्रयास, स्वतंत्र इच्छा और अनुभवों के खेल की तय रूपरेखा पर उदय कुमार की हिन्दी व्याख्या।' },
    'meditation-and-self-realization': { title: 'ध्यान और आत्म-बोध | Mind Clarity', description: 'ध्यान, स्पष्टता, स्वास्थ्य संबंधी सीमाओं और आत्म-बोध की खोज पर उदय कुमार की हिन्दी व्याख्या।' },
    'guilt-responsibility-and-boundaries': { title: 'अपराधबोध, जिम्मेदारी और सीमाएँ | Mind Clarity', description: 'सुधार, आत्म-दोष, साझा सृष्टिकर्ता और सुरक्षित सीमाओं पर उदय कुमार की हिन्दी व्याख्या।' },
  },
  es: {
    privacy: { title: 'Información de privacidad | Mind Clarity', description: 'Información en español sobre lectura, buscador de preguntas, analítica, pagos opcionales y datos compartidos en Mind Clarity.' },
    'consultation-info': { title: 'Una conversación personal | Mind Clarity', description: 'Detalles en español de la conversación opcional de reflexión espiritual de Mind Clarity: horario, precio, pago y límites.' },
    'who-am-i-self-enquiry': { title: '¿Quién soy? Empezar la autoindagación | Mind Clarity', description: 'Una guía en español para comenzar la pregunta «¿quién soy?» con curiosidad y vida cotidiana según Uday Kumar.' },
    'surrender-free-will-and-design': { title: 'Rendición, voluntad y diseño | Mind Clarity', description: 'Explicación en español de Uday Kumar sobre rendición, esfuerzo, libre albedrío y el diseño del juego de experiencias.' },
    'meditation-and-self-realization': { title: 'Meditación y autorrealización | Mind Clarity', description: 'Explora en español la meditación, la claridad, los límites de las afirmaciones de salud y la autorrealización.' },
    'guilt-responsibility-and-boundaries': { title: 'Culpa, responsabilidad y límites | Mind Clarity', description: 'Explora en español la reparación, la autocondena, el Creador compartido y los límites seguros.' },
  },
  fr: {
    privacy: { title: 'Informations sur la confidentialité | Mind Clarity', description: 'Informations en français sur la lecture, la recherche, l’analyse, les paiements facultatifs et les données partagées.' },
    'consultation-info': { title: 'Une conversation personnelle | Mind Clarity', description: 'Détails en français sur la conversation facultative de réflexion spirituelle : horaires, prix, paiement et limites.' },
    'who-am-i-self-enquiry': { title: 'Qui suis-je ? Commencer l’enquête intérieure | Mind Clarity', description: 'Un guide en français pour commencer la question « qui suis-je ? » avec curiosité et vie ordinaire selon Uday Kumar.' },
    'surrender-free-will-and-design': { title: 'Lâcher-prise, libre arbitre et conception | Mind Clarity', description: 'L’explication d’Uday Kumar sur le lâcher-prise, l’effort, le libre arbitre et la conception du jeu des expériences.' },
    'meditation-and-self-realization': { title: 'Méditation et réalisation de soi | Mind Clarity', description: 'Explorez en français la méditation, la clarté, les limites des affirmations de santé et la réalisation de soi.' },
    'guilt-responsibility-and-boundaries': { title: 'Culpabilité, responsabilité et limites | Mind Clarity', description: 'Explorez en français la réparation, l’auto-condamnation, le Créateur commun et les limites sûres.' },
  },
};

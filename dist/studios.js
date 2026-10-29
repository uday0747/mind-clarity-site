// Mind Clarity Interactive Studios (Phase 2 & Phase 3)
// Fully client-side, zero tracking, localized progressive enhancement.

(function() {
  // Phase 2: Viral Clarity Card Studio
  const oneMinuteByLang = {
    "en": {
      "badge": "The One-Minute Essence · Uday Kumar",
      "text": "Imagine you are the only being in existence. You can create anything, but there is nobody to meet. So you create an entire world of experiences and enter it through billions of lives. That is Uday Kumar's teaching: <strong>we are all the same Creator</strong>, playing different roles in the same game. The person who frustrates you? Same source. The person you love? Same source. Remembering this changes how you meet every scene.",
      "btn": "Share 60-Second Story on WhatsApp",
      "waTitle": "*The 60-Second Essence of Mind Clarity (Uday Kumar)*",
      "waP1": "Imagine you are the only being in existence. You can create anything, but there is nobody to meet. So you create a world of experiences and enter it through billions of lives.",
      "waP2": "That is Uday Kumar's teaching: *We are all the same Creator*, playing different roles in the same game. The person who frustrates you? Same source. The person you love? Same source. Remembering this changes how you meet every scene.",
      "waFoot": "Read more at:"
    },
    "te": {
      "badge": "ఒక నిమిషం సారాంశం · ఉదయ్ కుమార్",
      "text": "మీరు మాత్రమే ఉన్నారని ఊహించండి. మీరు దేన్నైనా సృష్టించగలరు, కానీ అనుభవించడానికి ఎవరూ లేరు. అందుకే మీరు ఈ అనుభవాల ప్రపంచాన్ని సృష్టించి, బిలియన్ల పాత్రల ద్వారా ఇందులోకి ప్రవేశించారు. ఇదే ఉదయ్ కుమార్ గారి బోధన: <strong>మనమందరం ఒకే సృష్టికర్తలం</strong>, ఒకే ఆటలో వేర్వేరు పాత్రలు పోషిస్తున్నాము. మిమ్మల్ని బాధపెట్టే వ్యక్తి? అదే మూలం. మీరు ప్రేమించే వ్యక్తి? అదే మూలం. ఈ స్పృహ మీ జీవితంలోని ప్రతి సన్నివేశాన్ని చూసే విధానాన్ని మారుస్తుంది.",
      "btn": "ఈ 60-సెకన్ల కథను వాట్సాప్‌లో పంపండి",
      "waTitle": "*ఒక నిమిషంలో మైండ్ క్లారిటీ దర్శనం (ఉదయ్ కుమార్)*",
      "waP1": "మీరు మాత్రమే ఉన్నారని ఊహించండి. మీరు దేన్నైనా సృష్టించగలరు, కానీ కలవడానికి ఎవరూ లేరు. అందుకే ఈ అనుభవాల ఆటను సృష్టించి, బిలియన్ల పాత్రల ద్వారా ఇందులోకి ప్రవేశించారు.",
      "waP2": "మనమందరం ఒకే సృష్టికర్తలం — ఒకే ఆటలో వేర్వేరు పాత్రలం. మిమ్మల్ని ఇబ్బంది పెట్టే వ్యక్తి అయినా, ప్రేమించే వ్యక్తి అయినా అదే మూలం. ఇది గుర్తున్నప్పుడు ప్రతి సన్నివేశాన్ని ప్రశాంతంగా, సహజమైన దయతో ఎదుర్కొంటాము.",
      "waFoot": "పూర్తిగా చదవండి:"
    },
    "hi": {
      "badge": "एक मिनट का सार · उदय कुमार",
      "text": "कल्पना कीजिए कि केवल आप ही अस्तित्व में हैं। आप कुछ भी बना सकते हैं, पर मिलने के लिए कोई दूसरा नहीं है। इसलिए आपने अनुभवों की यह दुनिया बनाई और अनगिनत जिंदगियों के ज़रिए इसमें प्रवेश किया। यही उदय कुमार जी की मूल सीख है: <strong>हम सब वही एक सृष्टिकर्ता हैं</strong>, जो एक ही खेल में अलग-अलग रोल निभा रहे हैं। जो आपको परेशान करता है? वही स्रोत। जिसे आप प्यार करते हैं? वही स्रोत। यह याद आते ही हर दृश्य को देखने का नज़रिया बदल जाता है।",
      "btn": "यह 60-सेकंड की कहानी व्हाट्सएप पर शेयर करें",
      "waTitle": "*एक मिनट में माइंड क्लैरिटी दर्शन (उदय कुमार)*",
      "waP1": "कल्पना कीजिए कि सिर्फ आप ही अस्तित्व में हैं। आप कुछ भी बना सकते हैं, पर मिलने के लिए कोई दूसरा नहीं है। इसलिए आपने अनुभवों का यह खेल बनाया और अनगिनत जिंदगियों के ज़रिए इसमें प्रवेश किया।",
      "waP2": "हम सब वही एक सृष्टिकर्ता हैं — जो एक ही खेल में अलग-अलग रोल निभा रहे हैं। जो आपको परेशान करता है, वह भी उसी स्रोत से है। जिसे आप प्यार करते हैं, वह भी। यह याद आते ही जीवन के हर दृश्य को देखने का नज़रिया बदल जाता है।",
      "waFoot": "पूरी समझ यहाँ पढ़ें:"
    },
    "ta": {
      "badge": "ஒரு நிமிட சாரம் · உதய் குமார்",
      "text": "நீங்கள் மட்டுமே உள்ளீர்கள் என்று கற்பனை செய்யுங்கள். நீங்கள் எதையும் உருவாக்கலாம், ஆனால் சந்திப்பதற்கு வேறு யாரும் இல்லை. எனவே நீங்கள் இந்த அனுபவங்களின் உலகத்தை உருவாக்கி, கோடிக்கணக்கான உயிர்களின் வழியாக இதற்குள் நுழைந்தீர்கள். இதுவே உதய் குமாரின் போதனை: <strong>நாம் அனைவரும் ஒரே படைப்பாளர்</strong>, ஒரே விளையாட்டில் வெவ்வேறு பாத்திரங்களை ஏற்றுள்ளோம். உங்களை வேதனைப்படுத்துபவர் யார்? அதே மூலம். நீங்கள் நேசிப்பவர் யார்? அதே மூலம். இந்த நினைவு ஒவ்வொரு சூழ்நிலையையும் நீங்கள் எதிர்கொள்ளும் விதத்தை மாற்றுகிறது.",
      "btn": "இந்த 60-வினாடி கதையை வாட்ஸ்அப்பில் பகிரவும்",
      "waTitle": "*மனத் தெளிவின் 60-வினாடி சாரம் (உதய் குமார்)*",
      "waP1": "நீங்கள் மட்டுமே உள்ளீர்கள் என்று கற்பனை செய்யுங்கள். நீங்கள் எதையும் உருவாக்கலாம், ஆனால் சந்திப்பதற்கு வேறு யாரும் இல்லை. எனவே இந்த அனுபவங்களின் விளையாட்டை உருவாக்கி, பல கோடி உயிர்களின் வழியாக உள்ளே நுழைந்தீர்கள்.",
      "waP2": "நாம் அனைவரும் ஒரே படைப்பாளர் — ஒரே விளையாட்டில் வெவ்வேறு பாத்திரங்கள். உங்களை காயப்படுத்துபவரும் சரி, நீங்கள் நேசிப்பவரும் சரி, அதே மூலம் தான். இந்த நினைவு வாழ்க்கையின் ஒவ்வொரு காட்சியையும் அமைதியோடும் கனிவோடும் அணுக வைக்கிறது.",
      "waFoot": "முழுமையாகப் படிக்க:"
    },
    "kn": {
      "badge": "ಒಂದು ನಿಮಿಷದ ಸಾರ · ಉದಯ್ ಕುಮಾರ್",
      "text": "ನೀವು ಮಾತ್ರ ಅಸ್ತಿತ್ವದಲ್ಲಿದ್ದೀರಿ ಎಂದು ಊಹಿಸಿಕೊಳ್ಳಿ. ನೀವು ಏನನ್ನಾದರೂ ಸೃಷ್ಟಿಸಬಹುದು, ಆದರೆ ಭೇಟಿಯಾಗಲು ಯಾರೂ ಇಲ್ಲ. ಅದಕ್ಕಾಗಿಯೇ ನೀವು ಅನುಭವಗಳ ಈ ಜಗತ್ತನ್ನು ಸೃಷ್ಟಿಸಿ, ಕೋಟ್ಯಂತರ ಜೀವಗಳ ಮೂಲಕ ಇದರೊಳಗೆ ಪ್ರವೇಶಿಸಿದ್ದೀರಿ. ಇದುವೇ ಉದಯ್ ಕುಮಾರ್ ಅವರ ಬೋಧನೆ: <strong>ನಾವೆಲ್ಲರೂ ಅದೇ ಒಬ್ಬನೇ ಸೃಷ್ಟಿಕರ್ತ</strong>, ಒಂದೇ ಆಟದಲ್ಲಿ ಬೇರೆ ಬೇರೆ ಪಾತ್ರಗಳನ್ನು ನಿರ್ವಹಿಸುತ್ತಿದ್ದೇವೆ. ನಿಮಗೆ ನೋವುಂಟುಮಾಡುವ ವ್ಯಕ್ತಿ? ಅದೇ ಮೂಲ. ನೀವು ಪ್ರೀತಿಸುವ ವ್ಯಕ್ತಿ? ಅದೇ ಮೂಲ. ಈ ಅರಿವು ಪ್ರತಿಯೊಂದು ಸನ್ನಿವೇಶವನ್ನು ಎದುರಿಸುವ ವಿಧಾನವನ್ನು ಬದಲಾಯಿಸುತ್ತದೆ.",
      "btn": "ಈ 60-ಸೆಕೆಂಡಿನ ಕಥೆಯನ್ನು ವಾಟ್ಸಾಪ್‌ನಲ್ಲಿ ಹಂಚಿಕೊಳ್ಳಿ",
      "waTitle": "*ಮೈಂಡ್ ಕ್ಲಾರಿಟಿಯ 60-ಸೆಕೆಂಡಿನ ಸಾರ (ಉದಯ್ ಕುಮಾರ್)*",
      "waP1": "ನೀವು ಮಾತ್ರ ಅಸ್ತಿತ್ವದಲ್ಲಿದ್ದೀರಿ ಎಂದು ಊಹಿಸಿಕೊಳ್ಳಿ. ನೀವು ಏನನ್ನಾದರೂ ಸೃಷ್ಟಿಸಬಹುದು, ಆದರೆ ಭೇಟಿಯಾಗಲು ಯಾರೂ ಇಲ್ಲ. ಅದಕ್ಕಾಗಿಯೇ ಅನುಭವಗಳ ಈ ಆಟವನ್ನು ಸೃಷ್ಟಿಸಿ, ಕೋಟ್ಯಂತರ ಪಾತ್ರಗಳ ಮೂಲಕ ಪ್ರವೇಶಿಸಿದ್ದೀರಿ.",
      "waP2": "ನಾವೆಲ್ಲರೂ ಅದೇ ಸೃಷ್ಟಿಕರ್ತ — ಒಂದೇ ಆಟದಲ್ಲಿ ವಿಭಿನ್ನ ಪಾತ್ರಗಳು. ನಿಮ್ಮನ್ನು ನೋಯಿಸುವ ವ್ಯಕ್ತಿಯೂ ಅದೇ ಮೂಲ, ನೀವು ಪ್ರೀತಿಸುವ ವ್ಯಕ್ತಿಯೂ ಅದೇ ಮೂಲ. ಇದನ್ನು ನೆನಪಿನಲ್ಲಿಟ್ಟುಕೊಳ್ಳುವುದು ಪ್ರತಿ ಸನ್ನಿವೇಶವನ್ನು ನೋಡುವ ದೃಷ್ಟಿಯನ್ನು ಬದಲಾಯಿಸುತ್ತದೆ.",
      "waFoot": "ಪೂರ್ಣವಾಗಿ ಓದಿ:"
    },
    "ml": {
      "badge": "ഒരു മിനിറ്റ് സാരം · ഉദയ് കുമാർ",
      "text": "നിങ്ങൾ മാത്രമാണ് നിലനിൽക്കുന്നത് എന്ന് സങ്കൽപ്പിക്കുക. നിങ്ങൾക്ക് എന്തും സൃഷ്ടിക്കാം, എന്നാൽ കണ്ടുമുട്ടാൻ മറ്റാരുമില്ല. അതിനാൽ നിങ്ങൾ അനുഭവങ്ങളുടെ ഈ ലോകം സൃഷ്ടിച്ച്, കോടിക്കണക്കിന് ജീവനുകളിലൂടെ ഇതിലേക്ക് പ്രവേശിച്ചു. ഇതാണ് ഉദയ് കുമാറിന്റെ ദർശനം: <strong>നാം എല്ലാവരും ഒരേ സ്രഷ്ടാവാണ്</strong>, ഒരേ കളിയിൽ വ്യത്യസ്ത വേഷങ്ങൾ ചെയ്യുന്നു. നിങ്ങളെ വേദനിപ്പിക്കുന്ന വ്യക്തി? അതേ ഉറവിടം. നിങ്ങൾ സ്നേഹിക്കുന്ന വ്യക്തി? അതേ ഉറവിടം. ഈ ഓർമ്മ ജീവിതത്തിലെ ഓരോ രംഗത്തെയും അഭിമുഖീകരിക്കുന്ന രീതിയെ മാറ്റുന്നു.",
      "btn": "ഈ 60-സെക്കൻഡ് കഥ വാട്ട്‌സ്ആപ്പിൽ പങ്കിടുക",
      "waTitle": "*മൈൻഡ് ക്ലാരിറ്റിയുടെ 60-സെക്കൻഡ് സാരം (ഉദയ് കുമാർ)*",
      "waP1": "നിങ്ങൾ മാത്രമാണ് നിലനിൽക്കുന്നത് എന്ന് സങ്കൽപ്പിക്കുക. നിങ്ങൾക്ക് എന്തും സൃഷ്ടിക്കാം, എന്നാൽ കാണാൻ മറ്റാരുമില്ല. അങ്ങനെ അനുഭവങ്ങളുടെ ഈ കളി സൃഷ്ടിച്ച്, കോടിക്കണക്കിന് ജീവിതങ്ങളിലൂടെ നിങ്ങൾ ഇതിൽ പ്രവേശിച്ചു.",
      "waP2": "നാം എല്ലാവരും ഒരേ സ്രഷ്ടാവാണ് — ഒരേ കളിയിൽ വ്യത്യസ്ത വേഷങ്ങൾ. നിങ്ങളെ വിഷമിപ്പിക്കുന്നയാളും സ്നേഹിക്കുന്നയാളും ഒരേ ഉറവിടം തന്നെയാണ്. ഈ തിരിച്ചറിവ് ജീവിതത്തിലെ ഓരോ രംഗത്തെയും ദയയോടെ കാണാൻ സഹായിക്കുന്നു.",
      "waFoot": "കൂടുതൽ വായിക്കുക:"
    },
    "bn": {
      "badge": "এক মিনিটের সারসংক্ষেপ · উদয় কুমার",
      "text": "কল্পনা করুন আপনি ছাড়া আর কেউ অস্তিত্বে নেই। আপনি সবকিছু সৃষ্টি করতে পারেন, কিন্তু দেখা করার মতো কেউ নেই। তাই আপনি অভিজ্ঞতার এই জগৎ সৃষ্টি করলেন এবং কোটি কোটি জীবনের মধ্য দিয়ে এতে প্রবেশ করলেন। এটাই উদয় কুমারের মূল শিক্ষা: <strong>আমরা সবাই একই স্রষ্টা</strong>, একই খেলায় ভিন্ন ভিন্ন চরিত্রে অভিনয় করছি। যে আপনাকে কষ্ট দেয়? সেও একই উৎস। যাকে আপনি ভালোবাসেন? সেও একই উৎস। এই স্মরণ প্রতিটি পরিস্থিতি মোকাবেলার দৃষ্টিভঙ্গি বদলে দেয়।",
      "btn": "এই ৬০-সেকেন্ডের গল্পটি হোয়াটসঅ্যাপে শেয়ার করুন",
      "waTitle": "*মাইন্ড ক্ল্যারিটির ৬০-সেকেন্ডের সারকথা (উদয় কুমার)*",
      "waP1": "কল্পনা করুন শুধুমাত্র আপনিই অস্তিত্বে আছেন। আপনি যা খুশি সৃষ্টি করতে পারেন, কিন্তু দেখা করার মতো কেউ নেই। তাই অভিজ্ঞতার এই খেলা সৃষ্টি করে কোটি কোটি জীবনের মাধ্যমে এতে প্রবেশ করলেন।",
      "waP2": "আমরা সবাই একই স্রষ্টা — একই খেলায় ভিন্ন ভূমিকা। যে আপনাকে বিরক্ত করে কিংবা যাকে আপনি ভালোবাসেন, উৎস একই। এটি মনে রাখলে জীবনের প্রতিটি দৃশ্যকে দেখার দৃষ্টিভঙ্গি পাল্টে যায়।",
      "waFoot": "বিস্তারিত পড়ুন:"
    },
    "mr": {
      "badge": "एक मिनिटाचा सारांश · उदय कुमार",
      "text": "कल्पना करा की केवळ तुमचेच अस्तित्व आहे. तुम्ही काहीही निर्माण करू शकता, पण भेटायला कोणीच नाही. म्हणूनच तुम्ही अनुभवांचे हे जग निर्माण केले आणि कोट्यवधी जीवांच्या रूपात यात प्रवेश केला. हीच उदय कुमार यांची शिकवण आहे: <strong>आपण सर्व तोच एक सृष्टीकर्ता आहोत</strong>, एकाच खेळात वेगवेगळ्या भूमिका साकारत आहोत. जो तुम्हाला त्रास देतो? तोच मूळ स्रोत. ज्याच्यावर तुम्ही प्रेम करता? तोच मूळ स्रोत. ही जाणीव प्रत्येक परिस्थितीकडे पाहण्याचा दृष्टिकोन बदलते.",
      "btn": "ही ६०-सेकंदांची गोष्ट व्हॉट्सॲपवर शेअर करा",
      "waTitle": "*माइंड क्लॅरिटीचे ६० सेकंदांचे सार (उदय कुमार)*",
      "waP1": "कल्पना करा की केवळ तुमचेच अस्तित्व आहे. तुम्ही काहीही निर्माण करू शकता, पण भेटायला कोणीच नाही. म्हणून तुम्ही अनुभवांचा हा खेळ रचला आणि अनंत जीवनांमधून यात प्रवेश केला.",
      "waP2": "आपण सर्व एकच सृष्टीकर्ता आहोत — एकाच खेळात वेगवेगळ्या भूमिका. जो तुम्हाला छळतो किंवा ज्याच्यावर तुम्ही प्रेम करता, मूळ स्रोत एकच आहे. हे स्मरणात ठेवल्यास जीवनातील प्रत्येक प्रसंगाकडे पाहण्याचा दृष्टिकोन बदलतो.",
      "waFoot": "अधिक वाचा:"
    },
    "gu": {
      "badge": "એક મિનિટનો સાર · ઉદય કુમાર",
      "text": "કલ્પના કરો કે માત્ર તમારું જ અસ્તિત્વ છે. તમે ગમે તે સર્જી શકો છો, પણ મળવા માટે કોઈ નથી. તેથી તમે અનુભવોની આ દુનિયા રચી અને અબજો જીવો દ્વારા તેમાં પ્રવેશ કર્યો. આ જ ઉદય કુમારનો બોધ છે: <strong>આપણે બધા એક જ સર્જનહાર છીએ</strong>, એક જ રમતમાં જુદા જુદા પાત્રો ભજવી રહ્યા છીએ. જે તમને દુઃખ આપે છે? એ જ સ્ત્રોત. જેને તમે પ્રેમ કરો છો? એ જ સ્ત્રોત. આ યાદ આવતાં જ દરેક દ્રશ્યને જોવાનો દ્રષ્ટિકોણ બદલાઈ જાય છે.",
      "btn": "આ 60-સેકન્ડની વાર્તા વૉટ્સએપ પર શૅર કરો",
      "waTitle": "*માઇન્ડ ક્લેરિટીનો 60-સેકન્ડનો સાર (ઉદય કુમાર)*",
      "waP1": "કલ્પના કરો કે માત્ર તમે જ અસ્તિત્વમાં છો. તમે કંઈ પણ રચી શકો છો, પણ મળવા કોઈ નથી. તેથી તમે અનુભવોની આ રમત બનાવી અને અસંખ્ય જીવો દ્વારા તેમાં પ્રવેશ કર્યો.",
      "waP2": "આપણે બધા એક જ સર્જનહાર છીએ — એક જ રમતમાં વિવિધ પાત્રો. જે તમને પરેશાન કરે છે કે જેને તમે પ્રેમ કરો છો, સ્ત્રોત એક જ છે. આ સ્મરણ જીવનના દરેક દ્રશ્યને શાંતિથી સ્વીકારવામાં મદદ કરે છે.",
      "waFoot": "વધુ વાંચો:"
    },
    "pa": {
      "badge": "ਇੱਕ ਮਿੰਟ ਦਾ ਸਾਰ · ਉਦੈ ਕੁਮਾਰ",
      "text": "ਕਲਪਨਾ ਕਰੋ ਕਿ ਸਿਰਫ਼ ਤੁਸੀਂ ਹੀ ਹੋਂਦ ਵਿੱਚ ਹੋ। ਤੁਸੀਂ ਕੁਝ ਵੀ ਸਿਰਜ ਸਕਦੇ ਹੋ, ਪਰ ਮਿਲਣ ਲਈ ਕੋਈ ਦੂਜਾ ਨਹੀਂ ਹੈ। ਇਸ ਲਈ ਤੁਸੀਂ ਅਨੁਭਵਾਂ ਦੀ ਇਹ ਦੁਨੀਆ ਬਣਾਈ ਅਤੇ ਅਰਬਾਂ ਜੀਵਨਾਂ ਰਾਹੀਂ ਇਸ ਵਿੱਚ ਪ੍ਰਵੇਸ਼ ਕੀਤਾ। ਇਹੀ ਉਦੈ ਕੁਮਾਰ ਦੀ ਸਿੱਖਿਆ ਹੈ: <strong>ਅਸੀਂ ਸਾਰੇ ਇੱਕ ਹੀ ਸਿਰਜਣਹਾਰ ਹਾਂ</strong>, ਇੱਕੋ ਖੇਡ ਵਿੱਚ ਵੱਖ-ਵੱਖ ਭੂਮਿਕਾਵਾਂ ਨਿਭਾ ਰਹੇ ਹਾਂ। ਜੋ ਤੁਹਾਨੂੰ ਦੁੱਖ ਦਿੰਦਾ ਹੈ? ਉਹੀ ਸਰੋਤ। ਜਿਸਨੂੰ ਤੁਸੀਂ ਪਿਆਰ ਕਰਦੇ ਹੋ? ਉਹੀ ਸਰੋਤ। ਇਹ ਚੇਤਾ ਹਰ ਸਥਿਤੀ ਨੂੰ ਵੇਖਣ ਦਾ ਨਜ਼ਰੀਆ ਬਦਲ ਦਿੰਦਾ ਹੈ।",
      "btn": "ਇਹ 60-ਸਕਿੰਟ ਦੀ ਕਹਾਣੀ ਵਟਸਐਪ 'ਤੇ ਸਾਂਝੀ ਕਰੋ",
      "waTitle": "*ਮਾਈਂਡ ਕਲੈਰਿਟੀ ਦਾ 60-ਸਕਿੰਟ ਦਾ ਸਾਰ (ਉਦੈ ਕੁਮਾਰ)*",
      "waP1": "ਕਲਪਨਾ ਕਰੋ ਕਿ ਸਿਰਫ਼ ਤੁਸੀਂ ਹੀ ਹੋ। ਤੁਸੀਂ ਕੁਝ ਵੀ ਬਣਾ ਸਕਦੇ ਹੋ, ਪਰ ਮਿਲਣ ਲਈ ਕੋਈ ਨਹੀਂ। ਇਸ ਲਈ ਤੁਸੀਂ ਅਨੁਭਵਾਂ ਦੀ ਖੇਡ ਰਚੀ ਅਤੇ ਅਰਬਾਂ ਰੂਪਾਂ ਵਿੱਚ ਇਸ ਵਿੱਚ ਦਾਖ਼ਲ ਹੋਏ।",
      "waP2": "ਅਸੀਂ ਸਾਰੇ ਉਹੀ ਇੱਕ ਸਿਰਜਣਹਾਰ ਹਾਂ — ਇੱਕੋ ਖੇਡ ਵਿੱਚ ਵੱਖ-ਵੱਖ ਰੋਲ। ਤੁਹਾਨੂੰ ਪਰੇਸ਼ਾਨ ਕਰਨ ਵਾਲਾ ਵੀ ਅਤੇ ਜਿਸਨੂੰ ਤੁਸੀਂ ਪਿਆਰ ਕਰਦੇ ਹੋ ਉਹ ਵੀ, ਸਰੋਤ ਇੱਕੋ ਹੈ। ਇਸ ਸਮਝ ਨਾਲ ਜ਼ਿੰਦਗੀ ਦਾ ਹਰ ਦ੍ਰਿਸ਼ ਬਦਲ ਜਾਂਦਾ ਹੈ।",
      "waFoot": "ਪੂਰਾ ਪੜ੍ਹੋ:"
    },
    "or": {
      "badge": "ଏକ ମିନିଟ୍‌ର ସାର · ଉଦୟ କୁମାର",
      "text": "କଳ୍ପନା କରନ୍ତୁ ଯେ କେବଳ ଆପଣ ହିଁ ଅସ୍ତିତ୍ୱରେ ଅଛନ୍ତି। ଆପଣ ଯାହା ଚାହିଁବେ ସୃଷ୍ଟି କରିପାରିବେ, କିନ୍ତୁ ଭେଟିବାକୁ କେହି ନାହାନ୍ତି। ତେଣୁ ଆପଣ ଅନୁଭବର ଏହି ଜଗତ ସୃଷ୍ଟି କଲେ ଏବଂ କୋଟି କୋଟି ଜୀବନ ମାଧ୍ୟମରେ ଏଥିରେ ପ୍ରବେଶ କଲେ। ଏହା ହିଁ ଉଦୟ କୁମାରଙ୍କ ଶିକ୍ଷା: <strong>ଆମେ ସମସ୍ତେ ସେହି ଏକା ସୃଷ୍ଟିକର୍ତ୍ତା</strong>, ଗୋଟିଏ ଖେଳରେ ଭିନ୍ନ ଭିନ୍ନ ଭୂମିକା ତୁଲାଉଛୁ। ଯିଏ ଆପଣଙ୍କୁ କଷ୍ଟ ଦିଏ? ସେହି ଏକା ଉତ୍ସ। ଯାହାକୁ ଆପଣ ଭଲପାଆନ୍ତି? ସେହି ଏକା ଉତ୍ସ। ଏହା ମନେ ରଖିଲେ ପ୍ରତ୍ୟେକ ଦୃଶ୍ୟକୁ ସାମ୍ନା କରିବାର ଦୃଷ୍ଟିକୋଣ ବଦଳିଯାଏ।",
      "btn": "ଏହି ୬୦-ସେକେଣ୍ଡର କାହାଣୀ ହ୍ୱାଟ୍ସଆପ୍‌ରେ ସେୟାର କରନ୍ତୁ",
      "waTitle": "*ମାଇଣ୍ଡ କ୍ଲାରିଟିର ୬୦-ସେକେଣ୍ଡ ସାର (ଉଦୟ କୁମାର)*",
      "waP1": "କଳ୍ପନା କରନ୍ତୁ କେବଳ ଆପଣ ହିଁ ଅଛନ୍ତି। ଆପଣ ସବୁକିଛି ସୃଷ୍ଟି କରିପାରିବେ, କିନ୍ତୁ ଭେଟିବାକୁ କେହି ନାହିଁ। ତେଣୁ ଅନୁଭବର ଏହି ଖେଳ ସୃଷ୍ଟି କରି ଅଗଣିତ ଜୀବନ ଦେଇ ଏଥିରେ ପ୍ରବେଶ କଲେ।",
      "waP2": "ଆମେ ସମସ୍ତେ ସେହି ଏକା ସୃଷ୍ଟିକର୍ତ୍ତା — ଗୋଟିଏ ଖେଳରେ ବିଭିନ୍ନ ଭୂମିକା। ଯିଏ ଆପଣଙ୍କୁ ଦୁଃଖ ଦିଏ ଏବଂ ଯାହାକୁ ଆପଣ ଭଲ ପାଆନ୍ତି, ଉତ୍ସ ସମାନ। ଏହି ଚେତନା ଜୀବନର ପ୍ରତିଟି ପରିସ୍ଥିତିକୁ ଶାନ୍ତିରେ ସ୍ୱୀକାର କରିବା ଶିଖାଏ।",
      "waFoot": "ଅଧିକ ପଢ଼ନ୍ତୁ:"
    },
    "as": {
      "badge": "এক মিনিটৰ সাৰাংশ · উদয় কুমাৰ",
      "text": "কল্পনা কৰক যে কেৱল আপুনিয়েই অস্তিত্বত আছে। আপুনি যিকোনো বস্তু সৃষ্টি কৰিব পাৰে, কিন্তু লগ পাবলৈ কোনো নাই। সেয়েহে আপুনি অভিজ্ঞতাৰ এই জগতখন সৃষ্টি কৰি কোটি কোটি জীৱনৰ মাধ্যমেৰে ইয়াত প্ৰৱেশ কৰিলে। এইটোৱেই উদয় কুমাৰৰ মূল শিক্ষা: <strong>আমি সকলোৱে একেজন সৃষ্টিকৰ্তা</strong>, একেটা খেলতে ভিন্ন চৰিত্ৰ ৰূপায়ণ কৰি আছোঁ। যিয়ে আপোনাক কষ্ট দিয়ে? একেটা উৎস। যাক আপুনি ভাল পায়? একেটা উৎস। এই স্মৃতিয়ে প্ৰতিটো পৰিস্থিতিৰ সন্মুখীন হোৱাৰ দৃষ্টিভংগী সলনি কৰি পেলায়।",
      "btn": "এই ৬০ ছেকেণ্ডৰ কাহিনীটো হোৱাটছএপত শ্বেয়াৰ কৰক",
      "waTitle": "*মাইণ্ড ক্লেৰিটিৰ ৬০ ছেকেণ্ডৰ সাৰাংশ (উদয় কুমাৰ)*",
      "waP1": "কল্পনা কৰক কেৱল আপুনিয়েই অস্তিত্বত আছে। আপুনি সকলো সৃষ্টি কৰিব পাৰে, কিন্তু লগ পাবলৈ কোনো নাই। সেয়ে অভিজ্ঞতাৰ এই খেলখন সৃষ্টি কৰি কোটি কোটি জীৱনৰ মাজেৰে প্ৰৱেশ কৰিলে।",
      "waP2": "আমি সকলো একেজন সৃষ্টিকৰ্তা — একেটা খেলৰ ভিন্ন চৰিত্ৰ। যিয়ে আপোনাক কষ্ট দিয়ে বা যাক আপুনি ভাল পায়, উৎস একেটাই। এই অনুভৱে জীৱনৰ প্ৰতিটো দৃশ্য শান্তভাৱে গ্ৰহণ কৰাত সহায় কৰে।",
      "waFoot": "অধিক পঢ়ক:"
    },
    "ur": {
      "badge": "ایک منٹ کا نچوڑ · ادے کمار",
      "text": "تصور کریں کہ کائنات میں صرف آپ ہی کا وجود ہے۔ آپ کچھ بھی تخلیق کر سکتے ہیں، مگر ملنے کے لیے کوئی دوسرا نہیں۔ چنانچہ آپ نے تجربات کی یہ دنیا بنائی اور اربوں زندگیوں کے ذریعے اس میں داخل ہوئے۔ یہی ادے کمار کی بنیادی تعلیم ہے: <strong>ہم سب وہی ایک خالق ہیں</strong>، جو ایک ہی کھیل میں مختلف کردار نبھا رہے ہیں۔ وہ شخص جو آپ کو ستاتا ہے؟ وہی ماخذ۔ جسے آپ چاہتے ہیں؟ وہی ماخذ۔ یہ یاد آتے ہی ہر منظر کو دیکھنے کا انداز بدل جاتا ہے۔",
      "btn": "یہ 60 سیکنڈ کی کہانی واٹس ایپ پر شیئر کریں",
      "waTitle": "*مائنڈ کلیرٹی کا 60 سیکنڈ کا نچوڑ (ادے کمار)*",
      "waP1": "تصور کریں کہ صرف آپ ہی موجود ہیں۔ آپ سب کچھ بنا سکتے ہیں، لیکن ملنے کے لیے کوئی دوسرا نہیں۔ اس لیے آپ نے تجربات کا کھیل بنایا اور اربوں زندگیوں کے روپ میں داخل ہوئے۔",
      "waP2": "ہم سب وہی ایک خالق ہیں — ایک ہی کھیل میں الگ الگ کردار۔ جو آپ کو دکھ دیتا ہے یا جس سے آپ محبت کرتے ہیں، دونوں کا ماخذ ایک ہی ہے۔ یہ احساس زندگی کے ہر منظر کو بدل دیتا ہے۔",
      "waFoot": "مزید پڑھیں:"
    },
    "es": {
      "badge": "La Esencia en Un Minuto · Uday Kumar",
      "text": "Imagina que eres el único ser en la existencia. Puedes crear cualquier cosa, pero no hay nadie a quien conocer. Así que creas un mundo entero de experiencias y entras en él a través de miles de millones de vidas. Esa es la enseñanza de Uday Kumar: <strong>todos somos el mismo Creador</strong>, jugando diferentes papeles en el mismo juego. ¿La persona que te frustra? La misma fuente. ¿La persona que amas? La misma fuente. Recordar esto transforma la manera en que vives cada escena.",
      "btn": "Compartir historia de 60 segundos por WhatsApp",
      "waTitle": "*La Esencia de Mind Clarity en 60 Segundos (Uday Kumar)*",
      "waP1": "Imagina que eres el único ser existente. Puedes crear cualquier cosa, pero no hay nadie con quien encontrarte. Por eso creas un mundo de experiencias y entras en él a través de miles de millones de vidas.",
      "waP2": "Esa es la enseñanza de Uday Kumar: *Todos somos el mismo Creador*, desempeñando distintos roles en el mismo juego. ¿Quien te incomoda? La misma fuente. ¿A quien amas? La misma fuente. Recordarlo transforma cada escena de la vida.",
      "waFoot": "Lee más en:"
    },
    "fr": {
      "badge": "L'Essence en Une Minute · Uday Kumar",
      "text": "Imaginez que vous soyez le seul être existant. Vous pouvez tout créer, mais il n'y a personne à rencontrer. Vous créez alors tout un monde d'expériences et vous y entrez à travers des milliards de vies. Telle est la vision d'Uday Kumar : <strong>nous sommes tous le même Créateur</strong>, jouant des rôles différents dans un même jeu. La personne qui vous contrarie ? Même source. Celle que vous aimez ? Même source. Se rappeler cela transforme notre regard sur chaque scène.",
      "btn": "Partager l'histoire de 60 secondes sur WhatsApp",
      "waTitle": "*L'Essence de Mind Clarity en 60 Secondes (Uday Kumar)*",
      "waP1": "Imaginez que vous soyez le seul être au monde. Vous pouvez tout créer, mais il n'y a personne à rencontrer. Vous créez donc un monde d'expériences et y entrez à travers des milliards de vies.",
      "waP2": "C'est l'enseignement d'Uday Kumar : *Nous sommes tous le même Créateur*, jouant différents rôles dans le même jeu. La personne qui vous blesse ? Même source. Celle que vous aimez ? Même source. S'en souvenir transforme chaque instant.",
      "waFoot": "En savoir plus :"
    },
    "pt": {
      "badge": "A Essência em Um Minuto · Uday Kumar",
      "text": "Imagine que você é o único ser em existência. Você pode criar qualquer coisa, mas não há ninguém para encontrar. Então você cria um mundo inteiro de experiências e entra nele através de bilhões de vidas. Esse é o ensinamento de Uday Kumar: <strong>todos somos o mesmo Criador</strong>, desempenhando papéis diferentes no mesmo jogo. A pessoa que o frustra? A mesma fonte. A pessoa que você ama? A mesma fonte. Lembrar-se disso muda a forma como você encara cada cena.",
      "btn": "Compartilhar história de 60 segundos no WhatsApp",
      "waTitle": "*A Essência de Clareza Mental em 60 Segundos (Uday Kumar)*",
      "waP1": "Imagine que você é o único ser em existência. Pode criar tudo, mas não há ninguém para encontrar. Então cria um mundo de experiências e entra nele por bilhões de vidas.",
      "waP2": "Esse é o ensinamento de Uday Kumar: *Todos somos o mesmo Criador*, vivendo papéis diferentes no mesmo jogo. Quem o irrita ou quem você ama vem da mesma fonte. Lembrar disso traz paz a cada cena.",
      "waFoot": "Leia mais em:"
    },
    "id": {
      "badge": "Intisari Satu Menit · Uday Kumar",
      "text": "Bayangkan Anda adalah satu-satunya keberadaan. Anda dapat menciptakan apa pun, tetapi tidak ada siapa pun untuk dijumpai. Maka Anda menciptakan seluruh dunia pengalaman dan memasukinya melalui miliaran kehidupan. Itulah ajaran Uday Kumar: <strong>kita semua adalah Sang Pencipta yang sama</strong>, memainkan peran berbeda dalam permainan yang sama. Orang yang membuat Anda kesal? Sumber yang sama. Orang yang Anda cintai? Sumber yang sama. Mengingat hal ini mengubah cara Anda memandang setiap peristiwa.",
      "btn": "Bagikan Kisah 60 Detik di WhatsApp",
      "waTitle": "*Intisari Mind Clarity dalam 60 Detik (Uday Kumar)*",
      "waP1": "Bayangkan Anda adalah satu-satunya wujud yang ada. Anda bisa menciptakan segalanya, tetapi tak ada orang lain untuk ditemui. Maka Anda menciptakan permainan pengalaman dan memasukinya lewat miliaran peran.",
      "waP2": "Inilah ajaran Uday Kumar: *Kita semua adalah Sang Pencipta yang sama*, memainkan peran berbeda. Orang yang menyakiti Anda maupun yang Anda cintai berasal dari sumber yang sama. Kesadaran ini menenangkan setiap langkah.",
      "waFoot": "Baca selengkapnya di:"
    },
    "ar": {
      "badge": "خلاصة دقيقة واحدة · أوداي كومار",
      "text": "تخيّل أنك الكيان الوحيد الموجود في الوجود. يمكنك خلق أي شيء، لكن لا يوجد أحد لتلتقي به. لذا أوجدت عالمًا كاملاً من التجارب ودخلت فيه عبر مليارات الأرواح. هذه هي حكمة أوداي كومار: <strong>كلنا نفس الخالق</strong>، نلعب أدوارًا مختلفة في اللعبة ذاتها. الشخص الذي يزعجك؟ نفس المصدر. والشخص الذي تحبه؟ نفس المصدر. تذكّر هذا يغيّر طريقة استقبالك لكل مشهد في الحياة.",
      "btn": "مشاركة قصة الـ 60 ثانية عبر واتساب",
      "waTitle": "*خلاصة وضوح العقل في 60 ثانية (أوداي كومار)*",
      "waP1": "تخيّل أنك الكائن الوحيد في الوجود. تستطيع خلق كل شيء لكن لا أحد لتلقاه. لذلك خلقت لعبة التجارب ودخلت فيها عبر مليارات الأرواح.",
      "waP2": "هذا هو تعليم أوداي كومار: *نحن جميعًا نفس الخالق*، نؤدي أدوارًا مختلفة في نفس اللعبة. من يزعجك ومن تحبه كلاهما من نفس المصدر. تذكّر هذا يمنحك سلامًا عميقًا في كل مشهد.",
      "waFoot": "اقرأ المزيد على:"
    },
    "de": {
      "badge": "Die Ein-Minuten-Essenz · Uday Kumar",
      "text": "Stellen Sie sich vor, Sie wären das einzige Wesen im Dasein. Sie können alles erschaffen, aber es gibt niemanden zu treffen. Also erschaffen Sie eine ganze Welt der Erfahrungen und treten durch Milliarden von Leben in sie ein. Das ist die Lehre von Uday Kumar: <strong>Wir alle sind derselbe Schöpfer</strong>, der verschiedene Rollen im selben Spiel spielt. Der Mensch, der Sie ärgert? Dieselbe Quelle. Der Mensch, den Sie lieben? Dieselbe Quelle. Sich daran zu erinnern, verändert die Begegnung mit jeder Szene.",
      "btn": "60-Sekunden-Geschichte auf WhatsApp teilen",
      "waTitle": "*Die 60-Sekunden-Essenz von Mind Clarity (Uday Kumar)*",
      "waP1": "Stellen Sie sich vor, Sie sind das einzige Wesen im Universum. Sie können alles erschaffen, aber niemanden treffen. Also erschaffen Sie ein Spiel der Erfahrungen und treten durch Milliarden Leben hinein.",
      "waP2": "Das ist die Lehre von Uday Kumar: *Wir alle sind derselbe Schöpfer*, der verschiedene Rollen im selben Spiel spielt. Wer Sie kränkt oder wen Sie lieben — dieselbe Quelle. Dieses Erinnern schenkt jeder Szene tiefen Frieden.",
      "waFoot": "Mehr lesen unter:"
    },
    "it": {
      "badge": "L'Essenza in Un Minuto · Uday Kumar",
      "text": "Immagina di essere l'unico essere esistente. Puoi creare qualsiasi cosa, ma non c'è nessuno da incontrare. Così crei un intero mondo di esperienze ed entri in esso attraverso miliardi di vite. Questo è l'insegnamento di Uday Kumar: <strong>siamo tutti lo stesso Creatore</strong>, che interpreta ruoli diversi nello stesso gioco. La persona che ti irrita? La stessa fonte. La persona che ami? La stessa fonte. Ricordare questo trasforma il modo in cui affronti ogni scena.",
      "btn": "Condividi la storia di 60 secondi su WhatsApp",
      "waTitle": "*L'Essenza di Mind Clarity in 60 Secondi (Uday Kumar)*",
      "waP1": "Immagina di essere l'unico essere esistente. Puoi creare tutto, ma non c'è nessuno da incontrare. Crei così un gioco di esperienze ed entri attraverso miliardi di vite.",
      "waP2": "Questo è l'insegnamento di Uday Kumar: *Siamo tutti lo stesso Creatore*, con ruoli diversi nello stesso gioco. Chi ti ferisce o chi ami proviene dalla stessa fonte. Ricordarlo cambia ogni scena della vita.",
      "waFoot": "Leggi di più su:"
    },
    "ru": {
      "badge": "Суть за одну минуту · Удай Кумар",
      "text": "Представьте, что вы — единственное сущее существо. Вы можете создать всё что угодно, но встретить некого. И тогда вы создаёте целый мир переживаний и входите в него через миллиарды жизней. В этом учение Удая Кумара: <strong>все мы — один и тот же Творец</strong>, играющий разные роли в одной игре. Человек, который вас раздражает? Тот же источник. Человек, которого вы любите? Тот же источник. Память об этом меняет отношение к каждой сцене жизни.",
      "btn": "Поделиться 60-секундной историей в WhatsApp",
      "waTitle": "*Суть «Ясности Ума» за 60 секунд (Удай Кумар)*",
      "waP1": "Представьте, что вы — единственное бытие. Вы можете сотворить всё, но встретить некого. Поэтому вы создаёте игру опыта и входите в неё через миллиарды жизней.",
      "waP2": "Учение Удая Кумара гласит: *Все мы — один Творец*, играющий разные роли в одной игре. Тот, кто вас задевает, и тот, кого вы любите — один и тот же источник. Это понимание преображает каждую сцену.",
      "waFoot": "Читать далее:"
    },
    "ja": {
      "badge": "1分間の本質 · ウダイ・クマール",
      "text": "自分がこの宇宙で唯一の存在であると想像してみてください。何でも創造できますが、出会う相手は誰もいません。そこで体験の世界を創り出し、無数の生命を通して自らその中に入りました。これがウダイ・クマールの教えです：<strong>私たちは皆、同じ創造主であり</strong>、同じゲームの中で異なる役割を演じています。あなたを苛立たせる人も、愛する人も、同じ源です。これを思い出すことが、すべての場面との向き合い方を変えます。",
      "btn": "60秒ストーリーをWhatsAppでシェア",
      "waTitle": "*マインド・クラリティの60秒エッセンス（ウダイ・クマール）*",
      "waP1": "存在しているのは自分だけだと想像してみてください。何でも創り出せますが、出会う相手はいません。そこで経験のゲームを創り、数え切れない命を通して自らそこへ入りました。",
      "waP2": "これがウダイ・クマールの教えです：*私たちは皆、同じ創造主*であり、同じゲームの異なる役を演じています。嫌な相手も、愛する人も同じ源。これを思い出すと、すべての出会いが変わります。",
      "waFoot": "詳細はこちら："
    },
    "ko": {
      "badge": "1분의 본질 · 우다이 쿠마르",
      "text": "온 우주에 오직 당신만 존재한다고 상상해 보세요. 무엇이든 창조할 수 있지만, 만날 사람은 아무도 없습니다. 그래서 수많은 경험의 세상을 만들고, 수십억 개의 삶을 통해 그 속으로 들어왔습니다. 이것이 바로 우다이 쿠마르의 가르침입니다: <strong>우리는 모두 같은 창조자이며</strong>, 같은 게임 안에서 서로 다른 역할을 하고 있을 뿐입니다. 당신을 힘들게 하는 사람도, 사랑하는 사람도 모두 같은 근원입니다. 이를 기억할 때 삶의 모든 장면을 마주하는 태도가 달라집니다.",
      "btn": "60초 이야기 WhatsApp으로 공유하기",
      "waTitle": "*마인드 클래러티 60초 핵심 요약 (우다이 쿠마르)*",
      "waP1": "오직 당신만이 존재한다고 상상해 보세요. 무엇이든 창조할 수 있지만 만날 존재가 없습니다. 그래서 경험의 게임을 만들고 무수한 삶을 통해 들어왔습니다.",
      "waP2": "우다이 쿠마르의 핵심 가르침: *우리는 모두 같은 창조자*이며, 하나의 게임에서 각기 다른 역할을 맡고 있습니다. 괴로움을 주는 이도, 사랑하는 이도 같은 근원입니다. 이를 기억하면 모든 순간이 새로워집니다.",
      "waFoot": "더 읽어보기:"
    },
    "zh-Hans": {
      "badge": "一分钟精髓 · 乌代·库马尔",
      "text": "想象一下，整片存在中只有你一人。你可以创造一切，却没有相遇的同伴。于是你创造了整个体验世界，并通过数十亿个生命进入其中。这就是乌代·库马尔的核心教导：<strong>我们所有人都是同一位造物主</strong>，在同一场游戏中扮演着不同的角色。那个让你烦恼的人？来自同一源头。你深爱的人？也来自同一源头。忆起这一点，便会彻底改变你面对生活中每一个场景的心境。",
      "btn": "在 WhatsApp 上分享 60 秒故事",
      "waTitle": "*心智澄明 60 秒精髓（乌代·库马尔）*",
      "waP1": "想象一下，整个存在中只有你一人。你能创造万物，却无相逢之人。于是你创造了体验的游戏，通过数十亿生命投入其中。",
      "waP2": "这就是乌代·库马尔的教导：*我们都是同一位造物主*，在同一个游戏中扮演不同角色。让你痛苦的人和让你深爱的人，皆源自同处。忆起这一真相，生命里的每一幕都将变得安详。",
      "waFoot": "阅读更多："
    },
    "zh-Hant": {
      "badge": "一分鐘精髓 · 烏代·庫馬爾",
      "text": "想像一下，整個存在之中只有你一人。你可以創造一切，卻沒有相遇的同伴。於是你創造了整個體驗的世界，並透過數十億個生命進入其中。這就是烏代·庫馬爾的核心教導：<strong>我們所有人都是同一位造物主</strong>，在同一場遊戲中扮演著不同的角色。那個讓你煩惱的人？來自同一源頭。你深愛的人？也來自同一源頭。憶起這一點，便會徹底改變你面對生活中每一個場景的心境。",
      "btn": "在 WhatsApp 上分享 60 秒故事",
      "waTitle": "*心智澄明 60 秒精髓（烏代·庫馬爾）*",
      "waP1": "想像一下，整片存在中只有你一人。你能創造萬物，卻沒有可以遇見的他者。於是你創造了體驗的遊戲，透過數十億生命投入其中。",
      "waP2": "這就是烏代·庫馬爾的教導：*我們都是同一位造物主*，在同一個遊戲裡演繹不同角色。讓你心煩的人與你深愛的人，皆源自同處。憶起這一真相，生命中的每一幕都將歸於安詳。",
      "waFoot": "閱讀更多："
    },
    "tr": {
      "badge": "Bir Dakikalık Öz · Uday Kumar",
      "text": "Varlıkta yalnızca sizin olduğunuzu hayal edin. Her şeyi yaratabilirsiniz ama tanışacak hiç kimse yoktur. Bu yüzden deneyimler dünyasını yaratır ve milyarlarca yaşam aracılığıyla onun içine girersiniz. Uday Kumar'ın öğretisi tam olarak budur: <strong>Hepimiz aynı Yaratıcıyız</strong>, aynı oyunda farklı roller oynuyoruz. Sizi üzen kişi mi? Aynı kaynak. Sevdiğiniz kişi mi? Aynı kaynak. Bunu hatırlamak, her sahneyi karşılama biçiminizi dönüştürür.",
      "btn": "60 Saniyelik Hikayeyi WhatsApp'ta Paylaş",
      "waTitle": "*Zihin Berraklığı'nın 60 Saniyelik Özü (Uday Kumar)*",
      "waP1": "Yalnızca sizin var olduğunuzu hayal edin. Her şeyi yaratabilirsiniz ama karşılaşacak kimse yok. Bu yüzden bu deneyimler oyununu yarattınız ve milyarlarca rolle içine girdiniz.",
      "waP2": "Uday Kumar'ın öğretisi: *Hepimiz aynı Yaratıcıyız*, aynı oyunda farklı rolleri oynuyoruz. Sizi rahatsız eden de sevdiğiniz de aynı kaynaktandır. Bunu hatırlamak her sahneye derin bir huzur getirir.",
      "waFoot": "Daha fazlasını okuyun:"
    },
    "vi": {
      "badge": "Tinh Túy Trong Một Phút · Uday Kumar",
      "text": "Hãy tưởng tượng bạn là thực thể duy nhất tồn tại. Bạn có thể tạo ra bất cứ điều gì, nhưng không có ai để gặp gỡ. Vì vậy, bạn tạo ra toàn bộ thế giới của những trải nghiệm và bước vào đó thông qua hàng tỷ kiếp sống. Đó chính là lời dạy của Uday Kumar: <strong>chúng ta đều là cùng một Đấng Tạo Hóa</strong>, đang đóng các vai khác nhau trong cùng một trò chơi. Người làm bạn thất vọng? Cùng một nguồn cội. Người bạn yêu thương? Cùng một nguồn cội. Nhớ lại điều này sẽ làm thay đổi cách bạn đón nhận mọi khoảnh khắc.",
      "btn": "Chia sẻ câu chuyện 60 giây qua WhatsApp",
      "waTitle": "*Tinh Túy 60 Giây Về Sự Sáng Suốt Tâm Trí (Uday Kumar)*",
      "waP1": "Hãy tưởng tượng bạn là thực thể duy nhất. Bạn có thể tạo ra muôn loài nhưng không có ai để tương phùng. Vì thế bạn tạo ra trò chơi trải nghiệm và bước vào qua hàng tỷ sinh mệnh.",
      "waP2": "Lời dạy của Uday Kumar: *Tất cả chúng ta đều là cùng một Đấng Tạo Hóa*, đóng những vai khác nhau trong cùng một vở kịch. Người khiến bạn tổn thương hay người bạn yêu quý đều chung một cội nguồn. Nhận biết điều này mang lại an yên cho mọi khoảnh khắc.",
      "waFoot": "Đọc tiếp tại:"
    },
    "pl": {
      "badge": "Istota w jedną minutę · Uday Kumar",
      "text": "Wyobraź sobie, że jesteś jedynym bytem w całym istnieniu. Możesz stworzyć wszystko, ale nie ma kogo spotkać. Tworzysz więc cały świat doświadczeń i wchodzisz do niego poprzez miliardy istnień. Na tym polega nauka Udaya Kumara: <strong>wszyscy jesteśmy tym samym Stwórcą</strong>, odgrywającym różne role w tej samej grze. Człowiek, który cię frustruje? To samo źródło. Człowiek, którego kochasz? To samo źródło. Pamiętanie o tym zmienia sposób, w jaki przyjmujesz każdą scenę.",
      "btn": "Udostępnij tę 60-sekundową historię na WhatsApp",
      "waTitle": "*Istota Jasności Umysłu w 60 sekund (Uday Kumar)*",
      "waP1": "Wyobraź sobie, że jesteś jedynym bytem. Możesz stworzyć cokolwiek, lecz nie ma nikogo do spotkania. Stwarzasz więc grę doświadczeń i wchodzisz w nią przez miliardy ról.",
      "waP2": "Oto nauka Udaya Kumara: *Wszyscy jesteśmy tym samym Stwórcą*, grającym różne role w tej samej grze. Ten, kto cię rani, i ten, kogo kochasz, pochodzą z tego samego źródła. Świadomość tego wnosi spokój w każdą scenę życia.",
      "waFoot": "Czytaj więcej na:"
    },
    "nl": {
      "badge": "De Eén-Minuut Kern · Uday Kumar",
      "text": "Stel je voor dat je het enige wezen in het bestaan bent. Je kunt alles creëren, maar er is niemand om te ontmoeten. Dus creëer je een hele wereld van ervaringen en treed je daarin via miljarden levens. Dat is het inzicht van Uday Kumar: <strong>we zijn allemaal dezelfde Schepper</strong>, die verschillende rollen speelt in hetzelfde spel. De persoon die je frustreert? Dezelfde bron. De persoon van wie je houdt? Dezelfde bron. Dit herinneren verandert hoe je elke scène tegemoet treedt.",
      "btn": "Deel 60-seconden verhaal op WhatsApp",
      "waTitle": "*De 60-Seconden Essentie van Mind Clarity (Uday Kumar)*",
      "waP1": "Stel je voor dat je het enige wezen bent. Je kunt alles scheppen, maar niemand ontmoeten. Dus schep je een spel van ervaringen en stap je erin via miljarden levens.",
      "waP2": "Dat is Uday Kumars leer: *We zijn allemaal dezelfde Schepper*, spelend in verschillende rollen binnen hetzelfde spel. Degene die je kwetst en degene die je liefhebt delen dezelfde bron. Dit herinneren geeft rust in elke situatie.",
      "waFoot": "Lees meer op:"
    },
    "sv": {
      "badge": "En-minuts essensen · Uday Kumar",
      "text": "Föreställ dig att du är det enda väsendet i tillvaron. Du kan skapa vad som helst, men det finns ingen att möta. Så du skapar en hel värld av upplevelser och kliver in i den genom miljarder liv. Det är Uday Kumars undervisning: <strong>vi är alla samma Skapare</strong>, som spelar olika roller i samma spel. Personen som frustrerar dig? Samma källa. Personen du älskar? Samma källa. Att minnas detta förändrar hur du möter varje scen.",
      "btn": "Dela 60-sekundersberättelse på WhatsApp",
      "waTitle": "*Kärnan i Sinnets Klarhet på 60 sekunder (Uday Kumar)*",
      "waP1": "Tänk dig att du är det enda väsendet i tillvaron. Du kan skapa allt, men det finns ingen att möta. Därför skapar du upplevelsernas spel och kliver in genom miljarder roller.",
      "waP2": "Det är Uday Kumars budskap: *Vi är alla samma Skapare*, i olika roller inom samma spel. Den som gör dig arg eller den du älskar härstammar från samma källa. Att minnas detta förändrar varje möte.",
      "waFoot": "Läs mer på:"
    },
    "da": {
      "badge": "Ét-minuts essensen · Uday Kumar",
      "text": "Forestil dig, at du er det eneste væsen i eksistensen. Du kan skabe hvad som helst, men der er ingen at møde. Så du skaber en hel verden af oplevelser og træder ind i den gennem milliarder af liv. Det er Uday Kumars lære: <strong>vi er alle den samme Skaber</strong>, som spiller forskellige roller i det samme spil. Den, der frustrerer dig? Samme kilde. Den, du elsker? Samme kilde. At huske dette ændrer, hvordan du møder enhver scene.",
      "btn": "Del 60-sekunders historie på WhatsApp",
      "waTitle": "*Sindets Klarhed på 60 sekunder (Uday Kumar)*",
      "waP1": "Forestil dig, at du er det eneste væsen i verden. Du kan skabe alt, men der er ingen at møde. Derfor skaber du oplevelsernes spil og træder ind gennem milliarder af liv.",
      "waP2": "Det er Uday Kumars budskab: *Vi er alle den samme Skaber*, der udfylder forskellige roller i det samme spil. Både den, der sårer dig, og den, du elsker, udspringer af samme kilde. Denne bevidsthed bringer ro til hvert øjeblik.",
      "waFoot": "Læs mere på:"
    },
    "nb": {
      "badge": "Ett-minutts essensen · Uday Kumar",
      "text": "Forestill deg at du er det eneste vesenet i eksistensen. Du kan skape hva som helst, men det er ingen å møte. Så du skaper en hel verden av opplevelser og trer inn i den gjennom milliarder av liv. Dette er Uday Kumars lære: <strong>vi er alle den samme Skaperen</strong>, som spiller ulike roller i det samme spillet. Personen som frustrerer deg? Samme kilde. Personen du elsker? Samme kilde. Å huske dette forandrer hvordan du møter enhver scene.",
      "btn": "Del 60-sekunders historie på WhatsApp",
      "waTitle": "*Kjernen i Sinnsro på 60 sekunder (Uday Kumar)*",
      "waP1": "Forestill deg at du er det eneste vesenet i tilværelsen. Du kan skape alt, men det finnes ingen å møte. Så du skaper opplevelsenes spill og trer inn gjennom milliarder av liv.",
      "waP2": "Dette er Uday Kumars lære: *Vi er alle den samme Skaperen*, som spiller ulike roller i det samme spillet. Den som sårer deg og den du elsker, har samme opphav. Dette minnet gir fred i hvert øyeblikk.",
      "waFoot": "Les mer på:"
    },
    "ro": {
      "badge": "Esența într-un minut · Uday Kumar",
      "text": "Imaginați-vă că sunteți singura ființă din existență. Puteți crea orice, dar nu există nimeni pe care să-l întâlniți. Așa că creați o întreagă lume de experiențe și intrați în ea prin miliarde de vieți. Aceasta este învățătura lui Uday Kumar: <strong>toți suntem același Creator</strong>, jucând roluri diferite în același joc. Persoana care vă frustrează? Aceeași sursă. Persoana pe care o iubiți? Aceeași sursă. Amintirea acestui lucru schimbă felul în care întâmpinați fiecare scenă.",
      "btn": "Distribuie povestea de 60 de secunde pe WhatsApp",
      "waTitle": "*Esența Clarității Mentale în 60 de Secunde (Uday Kumar)*",
      "waP1": "Imaginați-vă că sunteți singura ființă din existență. Puteți crea orice, dar nu aveți pe cine întâlni. Așa că ați creat jocul experiențelor și ați intrat prin miliarde de vieți.",
      "waP2": "Aceasta este învățătura lui Uday Kumar: *Toți suntem același Creator*, jucând roluri diferite în același joc. Cel care vă rănește și cel pe care îl iubiți provin din aceeași sursă. Această amintire aduce pace fiecărei clipe.",
      "waFoot": "Citește mai mult la:"
    },
    "cs": {
      "badge": "Podstata v jedné minutě · Uday Kumar",
      "text": "Představte si, že jste jedinou bytostí v existenci. Můžete stvořit cokoli, ale není tu nikdo, s kým byste se setkali. A tak vytvoříte celý svět prožitků a vstoupíte do něj skrze miliardy životů. To je učení Udaye Kumara: <strong>všichni jsme týž Stvořitel</strong>, hrající různé role ve stejné hře. Člověk, který vás rozčiluje? Stejný zdroj. Člověk, kterého milujete? Stejný zdroj. Vědomí této pravdy mění způsob, jakým prožíváte každou scénu.",
      "btn": "Sdílet 60sekundový příběh na WhatsApp",
      "waTitle": "*Podstata Jasnosti Mysli v 60 sekundách (Uday Kumar)*",
      "waP1": "Představte si, že jste jedinou bytostí v existenci. Můžete stvořit cokoli, ale není s kým se setkat. Proto jste vytvořili hru prožitků a vstoupili do ní skrze miliardy životů.",
      "waP2": "To je učení Udaye Kumara: *Všichni jsme týž Stvořitel*, hrající různé role ve stejné hře. Ten, kdo vás zraňuje, i ten, koho milujete, pocházejí ze stejného zdroje. Toto uvědomění proměňuje každou scénu.",
      "waFoot": "Více na:"
    }
  };

  function initCardStudio() {
    const cardEls = document.querySelectorAll('[data-card-studio="true"]');
    if (!cardEls || cardEls.length === 0) return;
    cardEls.forEach(cardEl => {
      if (cardEl.dataset.initialized) return;
      cardEl.dataset.initialized = 'true';

    const lang = document.documentElement.lang || 'en';
    const curatedEn = [
      "We are the Creator. We created this game of experiences and entered it, leaving unrestricted powers behind.",
      "To hate another is to hate yourself. There is no separate 'other' outside.",
      "Recognizing the same Creator in every person dissolves hatred and inspires natural compassion.",
      "Play the game like a game. When you leave the movie theater, you know it was a movie.",
      "A mistake belongs to a changing role. It is not the whole of who you are.",
      "Gold, diamonds, and money are small parts of our creation. They cannot make the Creator larger.",
      "We cannot rewrite the game from inside. But we can change how we meet each scene.",
      "Your freedom stops when my shoulder starts. We are both the Creator.",
      "A lotus in the pond — living within life with inward lightness.",
      "An enlightened person cannot live happily while others suffer — they are part of the same source.",
      "Devotion is respecting the Creator in the living person before you.",
      "Sadness and compassion can be present without losing deeper clarity.",
      "Recognize the Self in all beings and all beings in the Self.",
      "Like an ocean unaffected by the rising and falling of waves, remain steady in who you are.",
      "In the Creator we live, move, and have our being. We share the same source."
    ];
    const curatedTe = [
      "మనం సృష్టికర్తలం. ఈ అనుభవాల ఆటను మనమే సృష్టించి, ఇందులోకి ప్రవేశించాము.",
      "ఇంకొకరిని ద్వేషించడం అంటే మనల్ని మనం ద్వేషించుకోవడమే. బయట వేరే 'ఇతరులు' ఎవరూ లేరు.",
      "ప్రతి వ్యక్తిలోనూ అదే సృష్టికర్తను గుర్తించడం ద్వేషాన్ని కరిగిస్తుంది, సహజమైన దయను నింపుతుంది.",
      "ఈ జీవితమనే ఆటను క్రీడా స్ఫూర్తితో ఆడు. సినిమా పూర్తయ్యాక అది సినిమా అని ఎలా గుర్తుంచుకుంటావో అలాగే జీవించు.",
      "పొరపాటు అనేది మారుతున్న పాత్రకు చెందుతుంది. అది మీ అసలు గుర్తింపు కాదు.",
      "జీవితమనే కొలనులో తామర పువ్వులా అలౌకికంగా జీవించు.",
      "లోపల నుండి మనం ఆట రూపకల్పనను మార్చలేము. కానీ ప్రతి సన్నివేశాన్ని మనం ఎలా స్వీకరిస్తామో మార్చవచ్చు.",
      "ఎదుటి వ్యక్తిలోని సృష్టికర్తను గౌరవించడమే నిజమైన భక్తి.",
      "ఈ ప్రపంచాన్ని నివసించడానికి ఒక అందమైన ప్రదేశంగా మార్చడమే మీ ముఖ్య లక్ష్యం కావాలి.",
      "అన్ని ప్రాణులలోని ఆత్మను, ఆత్మలోని అన్ని ప్రాణులను గుర్తించండి.",
      "తరంగాల ఒడిదుడుకులకు చలించని సముద్రంలా మీ అంతరంగంలో స్థిరంగా ఉండండి."
    ];
    const curatedHi = [
      "हम ही सृष्टिकर्ता हैं। हमने अनुभवों का यह खेल बनाया और इसमें प्रवेश किया।",
      "किसी दूसरे से नफ़रत करना खुद से नफ़रत करना है। बाहर कोई दूसरा नहीं है।",
      "हर व्यक्ति में उसी सृष्टिकर्ता को पहचानना नफ़रत को पिघला देता है और सहज करुणा जगाता है।",
      "खेल को खेल की तरह खेलो। थिएटर से बाहर आने पर आपको पता होता है कि यह सिर्फ एक फिल्म थी।",
      "गलती किसी बदलते हुए रोल की होती है। वह आपकी पूरी पहचान नहीं है।",
      "कमल की तरह जियो — जीवन में रहते हुए भी भीतर से मुक्त और हल्के।",
      "भीतर से हम खेल के डिज़ाइन को नहीं बदल सकते। लेकिन हम हर दृश्य का सामना कैसे करते हैं, इसे बदल सकते हैं।",
      "सामने वाले व्यक्ति में सृष्टिकर्ता का सम्मान करना ही सच्ची भक्ति है।",
      "आपका मुख्य लक्ष्य इस दुनिया को रहने के लिए एक सुंदर जगह बनाना होना चाहिए।",
      "सभी प्राणियों में स्वयं को और स्वयं में सभी प्राणियों को पहचानें।",
      "लहरों के उठने-गिरने से अप्रभावित समुद्र की तरह अपने भीतर स्थिर रहें।"
    ];
    const curatedByLang = lang === 'te' ? curatedTe : (lang === 'hi' ? curatedHi : curatedEn);

    // Extract core translated quotes directly from the rendered page for 100% localization
    const pageQuotes = [
      document.querySelector('.governing-statement')?.textContent?.trim(),
      document.querySelector('.intro')?.textContent?.trim(),
      ...Array.from(document.querySelectorAll('.story-card p')).map(p => p.textContent?.trim())
    ].filter(Boolean);

    const quotes = Array.from(new Set([...curatedByLang, ...pageQuotes]));

    if (quotes.length === 0) {
      quotes.push('We are the Creator. We created this game of experiences and entered it.');
    }

    let selectedIdx = 0;
    let isStory = false;
    let currentPalette = 'parchment'; // 'parchment' | 'emerald' | 'sunrise' | 'night'

    const activeOneMin = oneMinuteByLang[lang] || oneMinuteByLang.en;
    const oneMinuteBadge = activeOneMin.badge;
    const oneMinuteText = activeOneMin.text;
    const oneMinuteShareLabel = activeOneMin.btn;

    cardEl.innerHTML = `
      <div class="one-minute-summary">
        <div class="one-minute-badge">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
          <span>${oneMinuteBadge}</span>
        </div>
        <p class="one-minute-text">${oneMinuteText}</p>
        <button type="button" class="one-minute-wa-btn" id="cs-btn-onemin-wa">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.42 0-2.82-.37-4.06-1.07l-.29-.17-3.02.79.81-2.94-.19-.3a8.21 8.21 0 0 1-1.26-4.35c0-4.54 3.7-8.24 8.24-8.24z"/></svg>
          <span>${oneMinuteShareLabel}</span>
        </button>
      </div>
      <div class="studio-workspace">
        <div class="studio-controls" role="region" aria-label="Wisdom Card Studio">
          <div class="control-group">
            <span class="control-label">Wisdom Quote</span>
            <select class="studio-select" id="cs-quote-select" aria-label="Choose a teaching quote">
              ${quotes.map((q, i) => `<option value="${i}">"${q.length > 58 ? q.slice(0, 55) + '…' : q}"</option>`).join('')}
            </select>
          </div>
          <div class="control-row">
            <div class="control-group">
              <span class="control-label">Aspect Ratio</span>
              <div class="studio-toggle-group">
                <button type="button" class="studio-btn toggle-active" id="cs-btn-sq">Square (Post · 1:1)</button>
                <button type="button" class="studio-btn" id="cs-btn-st">Story / WhatsApp Status (9:16)</button>
              </div>
            </div>
          </div>
          <div class="control-group">
            <span class="control-label">Visual Palette (4 Themes)</span>
            <div class="studio-toggle-group studio-palette-group">
              <button type="button" class="studio-btn toggle-active" id="cs-btn-p" title="Warm Parchment">Warm Parchment</button>
              <button type="button" class="studio-btn" id="cs-btn-e" title="Sacred Emerald">Sacred Emerald</button>
              <button type="button" class="studio-btn" id="cs-btn-s" title="Sunrise Gold">Sunrise Gold</button>
              <button type="button" class="studio-btn" id="cs-btn-n" title="Ocean Night">Ocean Night</button>
            </div>
          </div>
          <div class="studio-actions">
            <button type="button" class="button studio-action-btn" id="cs-btn-dl">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
              <span>Download (PNG)</span>
            </button>
            <button type="button" class="button whatsapp-studio-btn studio-action-btn" id="cs-btn-wa">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.42 0-2.82-.37-4.06-1.07l-.29-.17-3.02.79.81-2.94-.19-.3a8.21 8.21 0 0 1-1.26-4.35c0-4.54 3.7-8.24 8.24-8.24z"/></svg>
              <span>WhatsApp</span>
            </button>
            <button type="button" class="button secondary studio-action-btn" id="cs-btn-cp">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
              <span>Copy Quote</span>
            </button>
            <button type="button" class="button secondary studio-action-btn" id="cs-btn-sh">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>
              <span>Share</span>
            </button>
          </div>
          <p class="studio-status quiet-note" id="cs-status" role="status" aria-live="polite"></p>
        </div>
        <div class="studio-preview-wrapper">
          <canvas class="studio-canvas" id="cs-canvas" aria-label="Preview of wisdom quote card"></canvas>
        </div>
      </div>
    `;

    const canvas = cardEl.querySelector('#cs-canvas');
    const statusMsg = cardEl.querySelector('#cs-status');

    function renderCanvas() {
      const w = 1080;
      const h = isStory ? 1920 : 1080;
      const ctx = canvas.getContext('2d');
      canvas.width = w;
      canvas.height = h;

      const themes = {
        parchment: {
          bgGrad: ['#FAF8F2', '#F5F0E5', '#EDE5D5'],
          borderOuter: 'rgba(121, 91, 43, 0.35)',
          borderInner: 'rgba(121, 91, 43, 0.18)',
          accent: '#795B2B',
          text: '#183D36',
          footerText: 'rgba(38, 51, 46, 0.72)',
          footerLink: '#795B2B'
        },
        emerald: {
          bgGrad: ['#102A24', '#163B32', '#0C201C'],
          borderOuter: 'rgba(212, 175, 55, 0.45)',
          borderInner: 'rgba(212, 175, 55, 0.20)',
          accent: '#D4AF37',
          text: '#F5F5F0',
          footerText: 'rgba(245, 245, 240, 0.72)',
          footerLink: '#D4AF37'
        },
        sunrise: {
          bgGrad: ['#FFFDF2', '#FDF2D6', '#F8E6B8'],
          borderOuter: 'rgba(184, 134, 11, 0.45)',
          borderInner: 'rgba(184, 134, 11, 0.20)',
          accent: '#B8860B',
          text: '#2A1D0D',
          footerText: 'rgba(56, 42, 24, 0.75)',
          footerLink: '#B8860B'
        },
        night: {
          bgGrad: ['#0D1B2A', '#1B263B', '#08111D'],
          borderOuter: 'rgba(100, 255, 218, 0.45)',
          borderInner: 'rgba(100, 255, 218, 0.20)',
          accent: '#64FFDA',
          text: '#F0F4F8',
          footerText: 'rgba(224, 230, 237, 0.72)',
          footerLink: '#64FFDA'
        }
      };
      const theme = themes[currentPalette] || themes.parchment;

      // Background gradient
      const bg = ctx.createLinearGradient(0, 0, w, h);
      bg.addColorStop(0, theme.bgGrad[0]);
      bg.addColorStop(0.5, theme.bgGrad[1]);
      bg.addColorStop(1, theme.bgGrad[2]);
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, w, h);

      // Borders
      ctx.strokeStyle = theme.borderOuter;
      ctx.lineWidth = 4;
      ctx.strokeRect(50, 50, w - 100, h - 100);

      ctx.strokeStyle = theme.borderInner;
      ctx.lineWidth = 1;
      ctx.strokeRect(62, 62, w - 124, h - 124);

      // Lotus Emblem
      ctx.save();
      const lotusY = isStory ? 260 : 160;
      ctx.translate(w / 2, lotusY);
      ctx.fillStyle = theme.accent;
      ctx.beginPath();
      ctx.arc(0, 0, 14, 0, Math.PI * 2);
      ctx.fill();
      for (let i = -2; i <= 2; i++) {
        ctx.beginPath();
        ctx.ellipse(i * 20, -16, 10, 26, (i * Math.PI) / 12, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();

      // Brand Header
      ctx.fillStyle = theme.accent;
      ctx.font = '700 24px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
      ctx.textAlign = 'center';
      const headerY = isStory ? 340 : 230;
      ctx.fillText('MIND CLARITY · UDAY KUMAR', w / 2, headerY);

      // Quote Body
      const quoteText = quotes[selectedIdx] || quotes[0];
      const fontSize = isStory ? (quoteText.length > 90 ? 42 : 48) : (quoteText.length > 90 ? 36 : 42);
      ctx.fillStyle = theme.text;
      ctx.font = `italic 400 ${fontSize}px Georgia, "Noto Serif", serif`;

      const maxW = w - 240;
      const words = quoteText.split(/\s+/);
      const lines = [];
      let currentLine = '';

      for (let i = 0; i < words.length; i++) {
        const testLine = currentLine ? currentLine + ' ' + words[i] : words[i];
        if (ctx.measureText(testLine).width > maxW && currentLine) {
          lines.push(currentLine);
          currentLine = words[i];
        } else {
          currentLine = testLine;
        }
      }
      if (currentLine) lines.push(currentLine);

      const lineHeight = fontSize * 1.55;
      const totalH = lines.length * lineHeight;
      const startY = (h / 2) - (totalH / 2) + 20;

      for (let l = 0; l < lines.length; l++) {
        ctx.fillText(lines[l], w / 2, startY + (l * lineHeight));
      }

      // Footer
      const footerY = isStory ? h - 220 : h - 140;
      ctx.fillStyle = theme.footerText;
      ctx.font = '400 22px Georgia, serif';
      ctx.fillText('We are the Creator. Remembering the shared source in all.', w / 2, footerY);

      ctx.fillStyle = theme.footerLink;
      ctx.font = '600 20px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
      ctx.fillText('mindclarity.co.in', w / 2, footerY + 40);
    }

    cardEl.querySelector('#cs-quote-select').onchange = (e) => {
      selectedIdx = parseInt(e.target.value, 10);
      renderCanvas();
    };

    const sqBtn = cardEl.querySelector('#cs-btn-sq');
    const stBtn = cardEl.querySelector('#cs-btn-st');
    sqBtn.onclick = () => {
      isStory = false;
      sqBtn.classList.add('toggle-active');
      stBtn.classList.remove('toggle-active');
      renderCanvas();
    };
    stBtn.onclick = () => {
      isStory = true;
      stBtn.classList.add('toggle-active');
      sqBtn.classList.remove('toggle-active');
      renderCanvas();
    };

    const paletteBtns = {
      parchment: cardEl.querySelector('#cs-btn-p'),
      emerald: cardEl.querySelector('#cs-btn-e'),
      sunrise: cardEl.querySelector('#cs-btn-s'),
      night: cardEl.querySelector('#cs-btn-n')
    };
    Object.entries(paletteBtns).forEach(([pal, btn]) => {
      if (!btn) return;
      btn.onclick = () => {
        currentPalette = pal;
        Object.values(paletteBtns).forEach(b => b.classList.remove('toggle-active'));
        btn.classList.add('toggle-active');
        renderCanvas();
      };
    });

    const oneMinBtn = cardEl.querySelector('#cs-btn-onemin-wa');
    if (oneMinBtn) {
      oneMinBtn.onclick = () => {
        const shareUrl = (typeof location !== 'undefined' && location.href) ? location.href.split('#')[0] : 'https://mindclarity.co.in/';
        const active = oneMinuteByLang[lang] || oneMinuteByLang.en;
        const storyText = `${active.waTitle}\n\n${active.waP1}\n\n${active.waP2}\n\n${active.waFoot} ${shareUrl}`;
        window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(storyText)}`, '_blank', 'noopener,noreferrer');
        statusMsg.textContent = 'Opened in WhatsApp!';
        setTimeout(() => { statusMsg.textContent = ''; }, 3500);
      };
    }

    cardEl.querySelector('#cs-btn-dl').onclick = () => {
      try {
        const a = document.createElement('a');
        a.href = canvas.toDataURL('image/png');
        a.download = `mind-clarity-${isStory ? 'story' : 'square'}-${Date.now()}.png`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        statusMsg.textContent = 'Card downloaded successfully!';
        setTimeout(() => { statusMsg.textContent = ''; }, 3500);
      } catch (err) {
        statusMsg.textContent = 'Right-click or hold the card image to save.';
      }
    };

    cardEl.querySelector('#cs-btn-wa').onclick = () => {
      const q = quotes[selectedIdx] || quotes[0];
      const shareUrl = (typeof location !== 'undefined' && location.href) ? location.href.split('#')[0] : 'https://mindclarity.co.in/';
      const text = `"${q}"\n— Uday Kumar (Mind Clarity)\n\n${shareUrl}`;
      window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
      statusMsg.textContent = 'Opened in WhatsApp!';
      setTimeout(() => { statusMsg.textContent = ''; }, 3500);
    };

    cardEl.querySelector('#cs-btn-cp').onclick = async () => {
      const q = quotes[selectedIdx] || quotes[0];
      const shareUrl = (typeof location !== 'undefined' && location.href) ? location.href.split('#')[0] : 'https://mindclarity.co.in/';
      const text = `"${q}"\n— Uday Kumar (Mind Clarity)\n${shareUrl}`;
      try {
        await navigator.clipboard.writeText(text);
        statusMsg.textContent = 'Quote copied to clipboard!';
        setTimeout(() => { statusMsg.textContent = ''; }, 3500);
      } catch (err) {
        statusMsg.textContent = 'Select and copy the quote above.';
      }
    };

    cardEl.querySelector('#cs-btn-sh').onclick = () => {
      if (canvas.toBlob && navigator.share) {
        canvas.toBlob(blob => {
          if (!blob) return;
          const file = new File([blob], 'mind-clarity.png', { type: 'image/png' });
          navigator.share({
            title: 'Mind Clarity Wisdom Card',
            text: `"${quotes[selectedIdx]}" — Uday Kumar`,
            url: 'https://mindclarity.co.in/',
            files: [file]
          }).catch(() => {});
        }, 'image/png');
      } else {
        cardEl.querySelector('#cs-btn-dl').click();
      }
    };

    renderCanvas();
    });
  }

  // Phase 3: Interactive Practice Studio
  function initPracticeStudio() {
    const pracEl = document.querySelector('[data-practice-studio="true"]');
    if (!pracEl || pracEl.dataset.initialized) return;
    pracEl.dataset.initialized = 'true';

    const lang = document.documentElement.lang || 'en';
    const journeyDaysEn = [
      {
        title: "Day 1 · Who am I? (Curiosity)",
        paragraphs: [
          "You are rushing through your day. The demands of work, family, and expectations press in. You feel defined entirely by whether you succeed or fail in these tasks.",
          "These roles are scenes in a game. You are the Creator who created this game of experiences and entered it. The roles change and pass, but the Creator who experiences them remains untouched.",
          "Take three slow breaths. Feel your feet on the ground. When you speak to the next person, remember that you are both the Creator playing different scenes."
        ]
      },
      {
        title: "Day 2 · The Game (Design & Acceptance)",
        paragraphs: [
          "Something does not go your way today. A plan falls through, an opportunity is missed, or someone cancels. Frustration and resistance arise immediately.",
          "Having designed the game before entering, we cannot change its design from inside. Resentment comes from demanding control over the unfolding design.",
          "Notice the frustration without fighting it. Do what is practically useful in the scene, and release the demand that life must follow your script."
        ]
      },
      {
        title: "Day 3 · The Roles (Separating Mistake from Identity)",
        paragraphs: [
          "You made a mistake, forgot a commitment, or stumbled. A harsh inner voice says: 'You are a failure. You never get it right.'",
          "A mistake belongs to a changing role. It is not the whole of who you are. The Creator who designed the game included mistakes, forgetting, and learning.",
          "Acknowledge the mistake plainly and repair it practically. Release the self-condemnation; it serves no one and only contracts your spirit."
        ]
      },
      {
        title: "Day 4 · The Other Person (Dissolving Hatred)",
        paragraphs: [
          "Someone criticizes you, disagrees sharply, or behaves selfishly. Your mind immediately labels them an opponent or adversary.",
          "To hate another is to hate yourself. There is no separate 'other' outside. The same Creator who animates your breath sits within them, playing a different role.",
          "Set healthy practical boundaries where needed, but hold no inward hatred. Realize: 'Your freedom stops where my shoulder starts; we are both the Creator.'",
        ]
      },
      {
        title: "Day 5 · The Movie (Feeling Without Getting Absorbed)",
        paragraphs: [
          "A sudden surge of grief, anxiety, or intoxicating praise overtakes you. It feels all-consuming, as if this moment is all that exists.",
          "When you leave a movie theater, you know it was a movie. Experience every scene with complete sincerity, but keep the theater exit in your awareness.",
          "Allow the feeling to move through without freezing it into your permanent identity. You are the screen on which the movie plays."
        ]
      },
      {
        title: "Day 6 · The Lotus (Inward Lightness & Possessions)",
        paragraphs: [
          "The pursuit of money, property, status, or comparison creates an exhausting treadmill of always needing more.",
          "Gold, diamonds, and status are small parts of our creation. They cannot make the Creator larger. Live like a lotus resting on water without being soaked.",
          "Enjoy good things when present, and work diligently. But let your inner worth rest on knowing who you are, not on what you accumulate."
        ]
      },
      {
        title: "Day 7 · The Beautiful World (Natural Compassion & Duty)",
        paragraphs: [
          "You look at the suffering, conflict, and confusion in the world and wonder: 'What is the point of living?'",
          "An awakened person cannot live happily while others suffer. Recognizing the shared Creator dissolves cruelty and inspires natural compassion and responsibility.",
          "Your primary aim is to make this world a beautiful place to live in. Carry that into today with one simple, unselfish act of kindness."
        ]
      }
    ];

    const journeyDaysTe = [
      {
        title: "01వ రోజు · నేను ఎవరు? (ఆత్మ విచారణ)",
        paragraphs: [
          "రోజంతా పనుల్లో మునిగిపోతూ, ఉద్యోగం, బాధ్యతలే మీరని భావిస్తున్నారు. ఆ పనుల్లో గెలుపు ఓటములే మీ గుర్తింపుగా మారి భారం అనిపిస్తుంది.",
          "ఈ పాత్రలన్నీ ఆటలోని సన్నివేశాలు మాత్రమే. అనుభవాల కోసం ఈ ఆటను సృష్టించి ప్రవేశించిన సృష్టికర్త మీరే. పాత్రలు మారుతాయి, కానీ చూసే సృష్టికర్త శాశ్వతంగా ఉంటారు.",
          "మూడు ప్రశాంతమైన శ్వాసలు తీసుకోండి. ఎదుటి వ్యక్తిని కలిసినప్పుడు, మీరిద్దరూ వేర్వేరు పాత్రలు పోషిస్తున్న ఒకే సృష్టికర్త అని గుర్తుంచుకోండి."
        ]
      },
      {
        title: "02వ రోజు · ఆట మరియు డిజైన్ (స్వీకారం)",
        paragraphs: [
          "ఈ రోజు ఏదో ఒక విషయం మీరు అనుకున్నట్లు జరగలేదు. కోపం, అసహనం, నిరాశ మనస్సులో వెంటనే మొదలవుతాయి.",
          "ఆటలోకి ప్రవేశించక ముందే డిజైన్ చేయబడింది. లోపల నుండి మనం డిజైన్‌ను మార్చలేము. సన్నివేశాన్ని మార్చాలని పట్టుబట్టడం వల్లే బాధ కలుగుతుంది.",
          "అసహనాన్ని గమనించండి. ప్రస్తుత సన్నివేశంలో చేయవలసిన ఆచరణాత్మక పని చేయండి, ఫలితంపై పట్టుదలను వదిలివేయండి."
        ]
      },
      {
        title: "03వ రోజు · పాత్రల గుర్తింపు (తప్పు నుంచి విముక్తి)",
        paragraphs: [
          "మీరు ఒక పొరపాటు చేశారు లేదా చెప్పిన సమయానికి చేయలేకపోయారు. 'నేను పనికిరానివాడిని' అని లోపల నింద మొదలవుతుంది.",
          "పొరపాటు అనేది మారుతున్న పాత్రకు చెందుతుంది, అది మీ అసలు గుర్తింపు కాదు. సృష్టికర్త ఆటలో నేర్చుకోవడం, మరచిపోవడం కూడా భాగమే.",
          "పొరపాటును నిజాయితీగా అంగీకరించి ఆచరణాత్మకంగా సరిదిద్దండి. కానీ ఆత్మ-ఖండనను వదిలేయండి."
        ]
      },
      {
        title: "04వ రోజు · ఎదుటి వ్యక్తి (ద్వేషం కరిగిపోవడం)",
        paragraphs: [
          "ఎవరో మీతో కఠినంగా ప్రవర్తించారు లేదా వ్యతిరేకించారు. వారిపై కోపం, శత్రుభావం వెంటనే కలుగుతాయి.",
          "ఇంకొకరిని ద్వేషించడం అంటే మిమ్మల్ని మీరు ద్వేషించుకోవడమే. బయట వేరే 'ఇతరులు' ఎవరూ లేరు; ఇద్దరిలోనూ ఉన్నది ఒకే సృష్టికర్త.",
          "సరిహద్దులు అవసరమైతే గౌరవంగా ఉంచండి, కానీ ద్వేషాన్ని పెంచుకోవద్దు. మీరిద్దరూ ఒకే మూలం నుండి వచ్చారు."
        ]
      },
      {
        title: "05వ రోజు · సినిమా రూపకం (తాదాత్మ్యం చెందకుండా జీవించడం)",
        paragraphs: [
          "ఒక బాధాకరమైన సంఘటన లేదా గొప్ప ప్రశంస ఎదురైంది. ఆ భావోద్వేగంలో పూర్తిగా కొట్టుకుపోతున్నారు.",
          "సినిమా చూసేటప్పుడు తెరపై జరిగేది అనుభవించినా, బయటకు వచ్చినప్పుడు అది సినిమా అని తెలుసు. జీవితాన్ని కూడా క్రీడా స్ఫూర్తితో గమనించండి.",
          "భావోద్వేగాలను స్వీకరించండి, కానీ అది మీ శాశ్వత సత్యం కాదని గుర్తుంచుకోండి. మీరు చూసే సాక్షి, తెర మాత్రమే."
        ]
      },
      {
        title: "06వ రోజు · తామర పువ్వు (అలౌకిక తేలికదనం)",
        paragraphs: [
          "డబ్బు, హోదా, ఆస్తులు, పోలికల ఒత్తిడి మిమ్మల్ని నిరంతరం అసంతృప్తికి గురిచేస్తున్నాయి.",
          "బంగారం, డబ్బు మన సృష్టిలోని చిన్న భాగాలు. అవి సృష్టికర్తను మరింత గొప్పగా చేయలేవు. కొలనులోని తామర పువ్వులా నీటిలో ఉంటూనే తడవకుండా జీవించండి.",
          "బాధ్యతలను చక్కగా నిర్వహించండి, కానీ మీ విలువ మీ ఆస్తులపై కాకుండా మీరు ఎవరో తెలుసుకోవడంపై ఆధారపడి ఉంటుంది."
        ]
      },
      {
        title: "07వ రోజు · అందమైన ప్రపంచం (సహజ కరుణ)",
        paragraphs: [
          "ప్రపంచంలోని బాధలు, గందరగోళం చూసి 'జీవితం ఎందుకు?' అని నిరాశ కలుగుతుంది.",
          "ఒక మేల్కొన్న వ్యక్తి ఇతరులు బాధపడుతుంటే ప్రశాంతంగా ఉండలేరు. అందరిలోనూ ఒకే సృష్టికర్తను చూడటం వల్ల సహజమైన దయ, బాధ్యత పుడతాయి.",
          "ఈ ప్రపంచాన్ని అందమైన ప్రదేశంగా మార్చడమే మీ ప్రధాన లక్ష్యం. ఈ రోజు ఒకరి పట్ల చిన్న దయ లేదా సహాయంతో ప్రారంభించండి."
        ]
      }
    ];

    const journeyDaysHi = [
      {
        title: "दिन 1 · मैं कौन हूँ? (जिज्ञासा)",
        paragraphs: [
          "दिन भर की भागदौड़ में काम और अपेक्षाओं का बोझ भारी लगता है। आप खुद को केवल अपनी सफलता या असफलता से परिभाषित महसूस करते हैं।",
          "ये रोल केवल खेल के दृश्य हैं। आप वही सृष्टिकर्ता हैं जिसने अनुभवों के लिए यह खेल बनाया और इसमें प्रवेश किया। रोल बदलते हैं, पर सृष्टिकर्ता अछूता रहता है।",
          "तीन गहरी साँसें लें। सामने वाले व्यक्ति से बात करते समय याद रखें कि आप दोनों एक ही खेल में अलग-अलग रोल निभा रहे हैं।"
        ]
      },
      {
        title: "दिन 2 · खेल और डिज़ाइन (स्वीकृति)",
        paragraphs: [
          "आज कोई योजना असफल हो गई या किसी ने मना कर दिया। भीतर तुरंत झुंझलाहट और प्रतिरोध जाग उठता है।",
          "खेल में आने से पहले ही इसका डिज़ाइन तय था। हम भीतर से इसे नहीं बदल सकते। पीड़ा दृश्य को जबरन बदलने की माँग से होती है।",
          "झुंझलाहट को बिना लड़े देखें। जो व्यावहारिक कदम उठाना है उठाएं, और परिणाम पर नियंत्रण की ज़िद छोड़ दें।"
        ]
      },
      {
        title: "दिन 3 · रोल की पहचान (गलती से मुक्ति)",
        paragraphs: [
          "आपसे कोई भूल हो गई। भीतर की आवाज़ कहती है: 'तुम असफल हो, तुमसे कुछ सही नहीं होता।'",
          "भूल किसी बदलते रोल की होती है, वह आपकी संपूर्ण पहचान नहीं है। खेल में सीखना और भूलना भी शामिल है।",
          "भूल को सहजता से स्वीकारें और व्यावहारिक रूप से सुधारें। लेकिन आत्म-निंदा को छोड़ दें; यह किसी के काम नहीं आती।"
        ]
      },
      {
        title: "दिन 4 · सामने वाला व्यक्ति (नफ़रत का अंत)",
        paragraphs: [
          "किसी ने आपसे कठोर बात कही या विरोध किया। मन तुरंत उन्हें विरोधी मान लेता है।",
          "दूसरे से नफ़रत करना खुद से नफ़रत करना है। बाहर कोई 'दूसरा' नहीं है; दोनों में एक ही सृष्टिकर्ता मौजूद है।",
          "ज़रूरत पड़ने पर व्यावहारिक सीमाएं तय करें, पर भीतर द्वेष न रखें। दोनों एक ही स्रोत से हैं।"
        ]
      },
      {
        title: "दिन 5 · फिल्म का उदाहरण (बिना उलझे जीना)",
        paragraphs: [
          "अचानक कोई दुख या बहुत बड़ी प्रशंसा मन को पूरी तरह घेर लेती है।",
          "सिनेमा हॉल से निकलते ही पता होता है कि वह सिर्फ एक फिल्म थी। खेल के हर दृश्य को पूरी निष्ठा से जिएं, लेकिन याद रखें कि यह एक खेल है।",
          "भावनाओं को बहने दें, उन्हें अपनी स्थायी पहचान न बनाएं। आप वह स्क्रीन हैं जिस पर फिल्म चल रही है।"
        ]
      },
      {
        title: "दिन 6 · कमल का फूल (हल्कापन)",
        paragraphs: [
          "धन, पद और तुलना की होड़ आपको लगातार थका रही है।",
          "सोना और धन हमारी रचना के छोटे हिस्से हैं। वे सृष्टिकर्ता को बड़ा नहीं बना सकते। पानी में रहकर भी बिना भीगे कमल की तरह जिएं।",
          "अपनी जिम्मेदारियों को अच्छे से निभाएं, पर अपनी गरिमा को सांसारिक वस्तुओं में न बांधें।"
        ]
      },
      {
        title: "दिन 7 · सुंदर संसार (सहज करुणा)",
        paragraphs: [
          "दुनिया का दुख और अशांति देखकर मन पूछता है: 'जीवन का उद्देश्य क्या है?'",
          "जब दूसरे पीड़ित हों, तो एक जागा हुआ व्यक्ति चैन से नहीं बैठ सकता। सबमें एक ही स्रोत को देखना सहज करुणा और उत्तरदायित्व जगाता है।",
          "आपका मुख्य उद्देश्य इस संसार को रहने के लिए सुंदर बनाना है। आज किसी के साथ एक निस्वार्थ भलाई करके इसकी शुरुआत करें।"
        ]
      }
    ];

    const journeyDays = lang === 'te' ? journeyDaysTe : (lang === 'hi' ? journeyDaysHi : journeyDaysEn);

    const coreMetaphorsEn = [
      {
        title: "Metaphor 1 · The Movie & The Lotus (Immersion with Freedom)",
        paragraphs: [
          "Grief, sharp criticism, or intoxicating praise hits you. The mind gets completely absorbed in the emotional drama.",
          "When you leave a cinema hall, you know it was only a movie. And in the pond, the lotus rests upon the water without drowning. You are the stillness experiencing the movement.",
          "Feel the scene completely with genuine presence. Then silently remember: 'I am the screen on which this movie plays; the water does not alter who I am.'"
        ]
      },
      {
        title: "Metaphor 2 · 'Your Freedom Stops at My Shoulder' (Boundaries Without Hatred)",
        paragraphs: [
          "Someone mistreats you, crosses a boundary, or acts unjustly. The mind either succumbs to passivity or burns with vengeful rage.",
          "Recognizing the same Creator in everyone does not mean permitting abuse. Uday's teaching explicitly commands lawful protection and clear limits without inward hatred.",
          "Speak firmly: set clear, proportionate boundaries. Defend yourself and others through appropriate lawful action, keeping your heart clean of malice."
        ]
      },
      {
        title: "Metaphor 3 · Gold, Diamonds & Creation (True Inward Worth)",
        paragraphs: [
          "Comparing possessions, worrying about social status, or feeling lesser because of wealth or material loss.",
          "Gold, diamonds, and currency are small parts of our creation. They cannot enlarge or diminish the Creator. Things are meant to be used, not worshipped.",
          "Take diligent practical care of your livelihood and obligations, but never measure human dignity or your own peace by worldly possessions."
        ]
      },
      {
        title: "Metaphor 4 · Oxygen & Natural Ease (Releasing the Next Scene)",
        paragraphs: [
          "Mind racing with anxiety about tomorrow, shallow chest breathing, obsessively trying to force certainty.",
          "Anxiety is the role demanding control over the total design. When the demand to control the future ceases, breathing deepens naturally and inner clarity returns.",
          "Take three slow, full breaths. Entrust the unfolding design to what is beyond your hands, and attend wholeheartedly to what is right here today."
        ]
      }
    ];

    const coreMetaphorsTe = [
      {
        title: "ఉపమానం 1 · సినిమా మరియు తామర పువ్వు (అలౌకిక స్వేచ్ఛ)",
        paragraphs: [
          "తీవ్రమైన విమర్శ, నష్టం లేదా గొప్ప ప్రశంస వచ్చినప్పుడు ఆ భావోద్వేగంలో మనస్సు పూర్తిగా కొట్టుకుపోతుంది.",
          "థియేటర్ నుంచి బయటకు వచ్చాక అది సినిమా మాత్రమేనని తెలుస్తుంది. అలాగే కొలనులోని తామర పువ్వు నీటిలో ఉంటూ కూడా తడవదు. మీరు నిశ్చలమైన సాక్షి.",
          "సన్నివేశాన్ని సహజంగా అనుభవించండి, కానీ 'నేను ఈ సినిమా నడిచే తెరకు సమానం, భావోద్వేగాలు నా శాశ్వత గుర్తింపు కాదు' అని గుర్తుచేసుకోండి."
        ]
      },
      {
        title: "ఉపమానం 2 · మీ స్వేచ్ఛ నా భుజం వరకు మాత్రమే (ద్వేషం లేని హద్దులు)",
        paragraphs: [
          "ఎవరైనా మీ హద్దులు దాటి ప్రవర్తించినప్పుడు లేదా అన్యాయం చేసినప్పుడు మనస్సు పగతో లేదా నిస్సహాయతతో రగిలిపోతుంది.",
          "అందరిలోనూ సృష్టికర్తను చూడటం అంటే అన్యాయాన్ని మౌనంగా భరించడం కాదు. ఉదయ్ కుమార్ గారి స్పష్టమైన బోధన: ద్వేషం లేకుండా చట్టబద్ధమైన రక్షణ, దృఢమైన సరిహద్దులు ఉంచాలి.",
          "శాంతియుతమైన కానీ తిరుగులేని దృఢత్వంతో హద్దులను నిర్దేశించండి. కక్ష సాధింపు లేకుండా, ఆత్మరక్షణ మరియు సత్యం కోసం సరైన చర్య తీసుకోండి."
        ]
      },
      {
        title: "ఉపమానం 3 · బంగారం, వజ్రాలు మరియు సంపద (నిజమైన అంతరంగిక విలువ)",
        paragraphs: [
          "ఆస్తులు, డబ్బు లేదా హోదాను ఇతరులతో పోల్చుకుంటూ లేదా నష్టం వచ్చినప్పుడు నిరాశకు గురవుతున్నారు.",
          "బంగారం, వజ్రాలు, డబ్బు మన సృష్టిలోని చిన్న భాగాలు. అవి సృష్టికర్తను పెద్దగా గానీ, చిన్నగా గానీ చేయలేవు. వస్తువులు ఉపయోగించుకోవడానికి మాత్రమే.",
          "మీ బాధ్యతలను, సంపాదనను నిబద్ధతతో నిర్వహించండి, కానీ మీ విలువను లేదా ఎదుటివారి గౌరవాన్ని వస్తువులతో ఎప్పుడూ కొలవకండి."
        ]
      },
      {
        title: "ఉపమానం 4 · ఆక్సిజన్ మరియు ప్రశాంత శ్వాస (ఫలితంపై పట్టుదల వీడటం)",
        paragraphs: [
          "రేపటి గురించి విపరీతమైన ఆందోళన, నిస్సారమైన శ్వాస, భవిష్యత్తును తన చేతుల్లోకి తీసుకోవాలనే తీవ్రమైన తాపత్రయం.",
          "మొత్తం డిజైన్‌ను తానే నియంత్రించాలనే అహంకారమే ఆందోళనగా మారుతుంది. పట్టుదల వీడినప్పుడు సహజమైన ఆక్సిజన్, ప్రశాంతత వాటంతట అవే వస్తాయి.",
          "మూడు ప్రశాంతమైన దీర్ఘ శ్వాసలు తీసుకోండి. ఫలితాన్ని డిజైన్‌కు వదిలేసి, ప్రస్తుత క్షణంలో మీ ముందున్న పనిపై పూర్తి శ్రద్ధ పెట్టండి."
        ]
      }
    ];

    const coreMetaphorsHi = [
      {
        title: "उपमा 1 · फिल्म और कमल का फूल (मुक्त भाव से जीना)",
        paragraphs: [
          "तीव्र दुख, आलोचना या बहुत बड़ी वाहवाही मिलने पर मन उसी भाव में पूरी तरह डूब जाता है।",
          "थिएटर से बाहर आते ही पता होता है कि वह सिर्फ एक फिल्म थी। और तालाब में कमल पानी में रहकर भी बिना भीगे तैरता है। आप वह स्थिर स्क्रीन हैं जिस पर फिल्म चल रही है।",
          "हर दृश्य को पूरे मन से अनुभव करें, पर याद रखें: 'मैं वह पर्दा हूँ जिस पर यह दृश्य चल रहा है, दृश्य मुझे बदल नहीं सकता।'"
        ]
      },
      {
        title: "उपमा 2 · आपकी आज़ादी मेरे कंधे तक है (बिना द्वेष के मर्यादा)",
        paragraphs: [
          "जब कोई मर्यादा का उल्लंघन करे, दुर्व्यवहार करे या अन्याय करे, तो मन में क्रोध या लाचारी भर जाती है।",
          "सबमें एक ही सृष्टिकर्ता को देखने का अर्थ अन्याय सहना नहीं है। उदय कुमार जी का स्पष्ट निर्देश है: बिना द्वेष के शांत, विधिपूर्वक मर्यादा और रक्षा आवश्यक है।",
          "बदले की भावना के बिना शांत और दृढ़ता से सीमा तय करें। न्यायसंगत और उचित कदम उठाएं।"
        ]
      },
      {
        title: "उपमा 3 · सोना, हीरे और संपत्ति (भीतरी गरिमा)",
        paragraphs: [
          "पैसों, संपत्ति या प्रतिष्ठा की होड़ में खुद को या दूसरों को कमतर आंकना।",
          "सोना, हीरे और धन हमारी रचना के छोटे हिस्से हैं। वे सृष्टिकर्ता को बड़ा या छोटा नहीं बना सकते। वस्तुएं उपयोग के लिए हैं, पहचान के लिए नहीं।",
          "अपनी आजीविका का ध्यान रखें, लेकिन अपने आत्मसम्मान और शांति को कभी सांसारिक वस्तुओं में न बांधें।"
        ]
      },
      {
        title: "उपमा 4 · ऑक्सीजन और सहज श्वास (नियंत्रण की ज़िद छोड़ना)",
        paragraphs: [
          "भविष्य को लेकर बेचैनी, उखड़ी हुई सांसें और आने वाले कल को अपने हिसाब से मोड़ने की ज़िद।",
          "जब आने वाले दृश्य को अपने वश में करने की ज़िद छूटती है, तो मन में सहज ऑक्सीजन, हल्कापन और स्पष्टता लौट आती है।",
          "तीन गहरी और शांत सांसें लें। परिणाम को खेल के डिज़ाइन पर छोड़ दें और वर्तमान में जो सामने है उसे सचेत भाव से करें।"
        ]
      }
    ];

    const coreMetaphors = lang === 'te' ? coreMetaphorsTe : (lang === 'hi' ? coreMetaphorsHi : coreMetaphorsEn);

    // Extract real everyday scenes already localized in HTML
    let cases = Array.from(document.querySelectorAll('#everyday-scenes details')).map(d => ({
      title: d.querySelector('summary')?.textContent?.trim() || 'Everyday Scene',
      paragraphs: Array.from(d.querySelectorAll('p')).map(p => p.textContent?.trim()).filter(Boolean)
    })).filter(c => c.paragraphs.length >= 2);

    if (cases.length === 0) {
      cases = Array.from(document.querySelectorAll('.lesson details')).map(d => ({
        title: d.querySelector('summary')?.textContent?.trim() || d.closest('.lesson')?.querySelector('h2')?.textContent?.trim() || 'Everyday Scene',
        paragraphs: Array.from(d.querySelectorAll('p')).map(p => p.textContent?.trim()).filter(Boolean)
      })).filter(c => c.paragraphs.length >= 2);
    }

    let activeMode = 'scenarios'; // 'scenarios' | 'journey' | 'metaphors'
    let activeCase = 0;

    function renderPractice() {
      const activeList = activeMode === 'journey' ? journeyDays : (activeMode === 'metaphors' ? coreMetaphors : cases);
      const item = activeList[activeCase] || activeList[0];
      const savedNote = sessionStorage.getItem(`mindclarity_note_${activeMode}_${activeCase}`) || '';

      const modeTitle = activeMode === 'journey'
        ? (lang === 'te' ? '7 రోజుల సాధన ప్రయాణం' : (lang === 'hi' ? '7-दिवसीय साधना यात्रा' : '7-Day Guided Journey'))
        : (activeMode === 'metaphors'
          ? (lang === 'te' ? 'ఉదయ్ కుమార్ ముఖ్యమైన ఉపమానాలు' : (lang === 'hi' ? 'उदय कुमार की मूल उपमाएँ' : 'Core Teaching Metaphors'))
          : (lang === 'te' ? 'రోజువారీ పరిస్థితులు' : (lang === 'hi' ? 'दैनिक परिस्थितियाँ' : 'Everyday Scenarios')));

      pracEl.innerHTML = `
        <div class="practice-studio-wrapper">
          <div class="practice-mode-bar" role="tablist" aria-label="Practice Mode">
            <button type="button" class="mode-tab ${activeMode === 'scenarios' ? 'mode-active' : ''}" id="pm-scenarios">
              <span>${lang === 'te' ? 'రోజువారీ పరిస్థితులు' : (lang === 'hi' ? 'दैनिक परिस्थितियाँ' : 'Everyday Scenarios')}</span>
            </button>
            <button type="button" class="mode-tab ${activeMode === 'journey' ? 'mode-active' : ''}" id="pm-journey">
              <span>${lang === 'te' ? '7 రోజుల ప్రయాణం' : (lang === 'hi' ? '7-दिवसीय यात्रा' : '7-Day Journey')}</span>
            </button>
            <button type="button" class="mode-tab ${activeMode === 'metaphors' ? 'mode-active' : ''}" id="pm-metaphors">
              <span>${lang === 'te' ? 'ముఖ్యమైన ఉపమానాలు' : (lang === 'hi' ? 'मूल उपमाएँ' : 'Core Metaphors')}</span>
            </button>
          </div>

          <div class="scenario-selector-bar" role="tablist" aria-label="Difficulty scenarios">
            ${activeList.map((c, idx) => `
              <button type="button" role="tab" class="scenario-tab ${idx === activeCase ? 'tab-active' : ''}" data-idx="${idx}" aria-selected="${idx === activeCase}">
                <span class="tab-number">0${idx + 1}</span>
                <span class="tab-text">${c.title}</span>
              </button>
            `).join('')}
          </div>

          <div class="scenario-display-card" role="tabpanel">
            <div class="scenario-header">
              <div>
                <span class="scenario-eyebrow">${modeTitle}</span>
                <h3 class="scenario-title">${item.title}</h3>
              </div>
              <button type="button" class="button secondary small-btn practice-wa-btn" id="practice-share-wa">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.42 0-2.82-.37-4.06-1.07l-.29-.17-3.02.79.81-2.94-.19-.3a8.21 8.21 0 0 1-1.26-4.35c0-4.54 3.7-8.24 8.24-8.24z"/></svg>
                <span>Share on WhatsApp</span>
              </button>
            </div>

            <div class="three-pillar-flow">
              <div class="pillar-box pillar-role">
                <span class="pillar-tag">1. The Role's Scene</span>
                <p>${item.paragraphs[0] || ''}</p>
              </div>
              <div class="pillar-arrow" aria-hidden="true">→</div>
              <div class="pillar-box pillar-creator">
                <span class="pillar-tag">2. Creator Remembrance</span>
                <p>${item.paragraphs[1] || ''}</p>
              </div>
              <div class="pillar-arrow" aria-hidden="true">→</div>
              <div class="pillar-box pillar-action">
                <span class="pillar-tag">3. Grounded Action</span>
                <p>${item.paragraphs[2] || item.paragraphs[1] || ''}</p>
              </div>
            </div>

            <div class="reflection-scratchpad">
              <label for="practice-note-textarea" class="scratchpad-label">
                <strong>Private Reflection:</strong> What does remembering the shared Creator reveal in this scene?
              </label>
              <textarea id="practice-note-textarea" class="scratchpad-textarea" rows="3" placeholder="Write your quiet reflection here (saved privately in your browser)...">${savedNote}</textarea>
              <div class="scratchpad-footer">
                <span class="scratchpad-privacy-note">🔒 Private to your browser · Never sent to any server</span>
                <button type="button" class="button secondary small-btn" id="practice-note-clear">Clear Note</button>
              </div>
            </div>
          </div>
        </div>
      `;

      const pmScenarios = pracEl.querySelector('#pm-scenarios');
      if (pmScenarios) {
        pmScenarios.onclick = () => {
          activeMode = 'scenarios';
          activeCase = 0;
          renderPractice();
        };
      }

      const pmJourney = pracEl.querySelector('#pm-journey');
      if (pmJourney) {
        pmJourney.onclick = () => {
          activeMode = 'journey';
          activeCase = 0;
          renderPractice();
        };
      }

      const pmMetaphors = pracEl.querySelector('#pm-metaphors');
      if (pmMetaphors) {
        pmMetaphors.onclick = () => {
          activeMode = 'metaphors';
          activeCase = 0;
          renderPractice();
        };
      }

      pracEl.querySelectorAll('.scenario-tab').forEach(btn => {
        btn.onclick = () => {
          activeCase = parseInt(btn.dataset.idx, 10);
          renderPractice();
        };
      });

      const noteInput = pracEl.querySelector('#practice-note-textarea');
      if (noteInput) {
        noteInput.oninput = (e) => {
          sessionStorage.setItem(`mindclarity_note_${activeMode}_${activeCase}`, e.target.value);
        };
      }

      const clearBtn = pracEl.querySelector('#practice-note-clear');
      if (clearBtn) {
        clearBtn.onclick = () => {
          sessionStorage.removeItem(`mindclarity_note_${activeMode}_${activeCase}`);
          if (noteInput) noteInput.value = '';
        };
      }

      const waBtn = pracEl.querySelector('#practice-share-wa');
      if (waBtn) {
        waBtn.onclick = () => {
          const title = item.title;
          const p1 = item.paragraphs[0] || '';
          const p2 = item.paragraphs[1] || '';
          const p3 = item.paragraphs[2] || '';
          const currentUrl = (typeof location !== 'undefined' && location.href) ? location.href.split('#')[0] + '#everyday-scenes' : 'https://mindclarity.co.in/practice#everyday-scenes';
          const text = activeMode === 'journey'
            ? `*Mind Clarity · 7-Day Journey (${title})*\n\n*The Scene:* ${p1}\n\n*Creator Remembrance:* ${p2}\n\n*Action:* ${p3}\n\nExplore at: ${currentUrl}`
            : (activeMode === 'metaphors'
              ? `*Mind Clarity · Core Metaphor (${title})*\n\n*Scene:* ${p1}\n\n*Creator Remembrance:* ${p2}\n\n*Practice:* ${p3}\n\nExplore at: ${currentUrl}`
              : `*Mind Clarity · Everyday Contemplation*\n"${title}"\n\n*The Scene:* ${p1}\n\n*Creator Remembrance:* ${p2}\n\nExplore at: ${currentUrl}`);
          window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
        };
      }
    }

    renderPractice();
  }

  initCardStudio();
  initPracticeStudio();
})();

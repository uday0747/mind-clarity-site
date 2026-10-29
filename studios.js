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

  const cardStudioUiByLang = {
    "en": {
      "quote": "Wisdom Quote",
      "aspect": "Aspect Ratio",
      "sq": "Square (Post · 1:1)",
      "st": "Story / Status (9:16)",
      "pal": "Visual Palette (4 Themes)",
      "p": "Warm Parchment",
      "e": "Sacred Emerald",
      "s": "Sunrise Gold",
      "n": "Ocean Night",
      "dl": "Download (PNG)",
      "wa": "WhatsApp",
      "cp": "Copy Quote",
      "sh": "Share",
      "statusDl": "Card downloaded successfully!",
      "statusDlTip": "Right-click or hold the card image to save.",
      "statusWa": "Opened in WhatsApp!",
      "statusCp": "Quote copied to clipboard!",
      "statusCpTip": "Select and copy the quote above.",
      "author": "— Uday Kumar (Mind Clarity)",
      "tagline": "We are the Creator. Remembering the shared source in all."
    },
    "te": {
      "quote": "బోధన వాక్యం",
      "aspect": "ఆస్పెక్ట్ నిష్పత్తి",
      "sq": "చతురస్రం (పోస్ట్ · 1:1)",
      "st": "స్టోరీ / వాట్సాప్ స్టేటస్ (9:16)",
      "pal": "రంగుల థీమ్ (4 రకాలు)",
      "p": "వెచ్చని తాళపత్రం",
      "e": "పవిత్ర మరకతం",
      "s": "ఉదయ కాంతి",
      "n": "సముద్ర రాత్రి",
      "dl": "డౌన్‌లోడ్ (PNG)",
      "wa": "వాట్సాప్",
      "cp": "వాక్యం కాపీ చేయండి",
      "sh": "పంచుకోండి",
      "statusDl": "కార్డ్ విజయవంతంగా డౌన్‌లోడ్ అయింది!",
      "statusDlTip": "చిత్రాన్ని సేవ్ చేయడానికి రైట్ క్లిక్ చేయండి లేదా నొక్కి ఉంచండి.",
      "statusWa": "వాట్సాప్‌లో తెరవబడింది!",
      "statusCp": "వాక్యం క్లిప్‌బోర్డ్‌కి కాపీ అయింది!",
      "statusCpTip": "పై వాక్యాన్ని ఎంచుకుని కాపీ చేయండి.",
      "author": "— ఉదయ్ కుమార్ (మైండ్ క్లారిటీ)",
      "tagline": "మనమే సృష్టికర్తలం. అందరిలోనూ ఆ ఉమ్మడి మూలాన్ని స్మరించుకోవడం."
    },
    "hi": {
      "quote": "ज्ञान सूत्र",
      "aspect": "स्वरूप अनुपात",
      "sq": "वर्गाकार (पोस्ट · 1:1)",
      "st": "स्टोरी / स्टेटस (9:16)",
      "pal": "रंग पैलेट (4 थीम)",
      "p": "गर्म भोजपत्र",
      "e": "पवित्र पन्ना",
      "s": "स्वर्ण प्रभात",
      "n": "सागर रात्रि",
      "dl": "डाउनलोड (PNG)",
      "wa": "व्हाट्सएप",
      "cp": "वाक्य कॉपी करें",
      "sh": "साझा करें",
      "statusDl": "कार्ड सफलतापूर्वक डाउनलोड हो गया!",
      "statusDlTip": "चित्र सुरक्षित करने के लिए राइट-क्लिक करें या दबाकर रखें।",
      "statusWa": "व्हाट्सएप में खोला गया!",
      "statusCp": "वाक्य क्लिपबोर्ड पर कॉपी हो गया!",
      "statusCpTip": "ऊपर दिए गए वाक्य को चुनकर कॉपी करें।",
      "author": "— उदय कुमार (माइंड क्लैरिटी)",
      "tagline": "हम ही सृष्टिकर्ता हैं। सभी में उस साझा स्रोत का स्मरण।"
    },
    "ta": {
      "quote": "ஞான மேற்கோள்",
      "aspect": "விகிதாச்சாரம்",
      "sq": "சதுரம் (பதிவு · 1:1)",
      "st": "கதை / வாட்ஸ்அப் நிலை (9:16)",
      "pal": "வண்ணத் தீம்கள் (4)",
      "p": "பழைய சுவடி",
      "e": "புனித மரகதம்",
      "s": "சூரிய உதயம்",
      "n": "ஆழ்கடல் இரவு",
      "dl": "பதிவிறக்கு (PNG)",
      "wa": "வாட்ஸ்அப்",
      "cp": "மேற்கோளை நகலெடு",
      "sh": "பகிர்",
      "statusDl": "அட்டை பதிவிறக்கம் செய்யப்பட்டது!",
      "statusDlTip": "சேமிக்க படத்தை அழுத்திப் பிடிக்கவும்.",
      "statusWa": "வாட்ஸ்அப்பில் திறக்கப்பட்டது!",
      "statusCp": "மேற்கோள் நகலெடுக்கப்பட்டது!",
      "statusCpTip": "மேற்கோளைத் தேர்ந்தெடுத்து நகலெடுக்கவும்.",
      "author": "— உதய் குமார் (மைண்ட் கிளாரிட்டி)",
      "tagline": "நாமே படைப்பாளர். அனைவரிலும் உள்ள அந்த மூலத்தை நினைவுகூர்தல்."
    },
    "kn": {
      "quote": "ಜ್ಞಾನದ ಸೂಕ್ತಿ",
      "aspect": "ಆಕಾರ ಅನುಪಾತ",
      "sq": "ಚೌಕ (ಪೋಸ್ಟ್ · 1:1)",
      "st": "ಸ್ಟೋರಿ / ವಾಟ್ಸಾಪ್ ಸ್ಥಿತಿ (9:16)",
      "pal": "ಬಣ್ಣದ ವಿನ್ಯಾಸ (4 ಥೀಮ್)",
      "p": "ತಾಳೆಗರಿ",
      "e": "ಪವಿತ್ರ ಮರಕತ",
      "s": "ಸೂರ್ಯೋದಯ ಚಿನ್ನ",
      "n": "ಸಾಗರ ರಾತ್ರಿ",
      "dl": "ಡೌನ್‌ಲೋಡ್ (PNG)",
      "wa": "ವಾಟ್ಸಾಪ್",
      "cp": "ಸೂಕ್ತಿ ನಕಲಿಸಿ",
      "sh": "ಹಂಚಿಕೊಳ್ಳಿ",
      "statusDl": "ಕಾರ್ಡ್ ಡೌನ್‌ಲೋಡ್ ಆಗಿದೆ!",
      "statusDlTip": "ಉಳಿಸಲು ಚಿತ್ರದ ಮೇಲೆ ಒತ್ತಿ ಹಿಡಿಯಿರಿ.",
      "statusWa": "ವಾಟ್ಸಾಪ್‌ನಲ್ಲಿ ತೆರೆಯಲಾಗಿದೆ!",
      "statusCp": "ಸೂಕ್ತಿ ನಕಲಿಸಲಾಗಿದೆ!",
      "statusCpTip": "ಮೇಲಿನ ಸೂಕ್ತಿಯನ್ನು ಆಯ್ಕೆಮಾಡಿ ನಕಲಿಸಿ.",
      "author": "— ಉದಯ್ ಕುಮಾರ್ (ಮೈಂಡ್ ಕ್ಲಾರಿಟಿ)",
      "tagline": "ನಾವೇ ಸೃಷ್ಟಿಕರ್ತ. ಎಲ್ಲರಲ್ಲೂ ಆ ಸಾಮಾನ್ಯ ಮೂಲವನ್ನು ಸ್ಮರಿಸುವುದು."
    },
    "ml": {
      "quote": "ജ്ഞാന വചനം",
      "aspect": "ആസ്പെക്റ്റ് റേഷ്യോ",
      "sq": "ചതുരം (പോസ്റ്റ് · 1:1)",
      "st": "സ്റ്റോറി / സ്റ്റാറ്റസ് (9:16)",
      "pal": "വർണ്ണ തീമുകൾ (4)",
      "p": "ചുരുൾ പകർപ്പ്",
      "e": "പവിത്ര മരതകം",
      "s": "സൂര്യോദയ സ്വർണ്ണം",
      "n": "സമുദ്ര രാത്രി",
      "dl": "ഡൗൺലോഡ് (PNG)",
      "wa": "വാട്ട്‌സ്ആപ്പ്",
      "cp": "പകർപ്പാവകാശം പകർത്തുക",
      "sh": "പങ്കിടുക",
      "statusDl": "കാർഡ് വിജയകരമായി ഡൗൺലോഡ് ചെയ്തു!",
      "statusDlTip": "സേവ് ചെയ്യാൻ ചിത്രത്തിൽ അമർത്തിപ്പിടിക്കുക.",
      "statusWa": "വാട്ട്‌സ്ആപ്പിൽ തുറന്നു!",
      "statusCp": "വാചകം പകർത്തി!",
      "statusCpTip": "മുകളിലെ വാചകം തിരഞ്ഞെടുത്ത് പകർത്തുക.",
      "author": "— ഉദയ് കുമാർ (മൈൻഡ് ക്ലാരിറ്റി)",
      "tagline": "നാം തന്നെയാണ് സ്രഷ്ടാവ്. എല്ലാവരിലും ആ പൊതു ഉറവിടത്തെ ഓർക്കുക."
    },
    "bn": {
      "quote": "জ্ঞানের বাণী",
      "aspect": "অনুপাত",
      "sq": "বর্গাকার (পোস্ট · ১:১)",
      "st": "স্টোরি / স্ট্যাটাস (৯:১৬)",
      "pal": "রঙের থিম (৪টি)",
      "p": "পাণ্ডুলিপি",
      "e": "পবিত্র পান্না",
      "s": "সোনালী প্রভাত",
      "n": "সমুদ্র রাত্রি",
      "dl": "ডাউনলোড (PNG)",
      "wa": "হোয়াটসঅ্যাপ",
      "cp": "বাণী কপি করুন",
      "sh": "শেয়ার",
      "statusDl": "কার্ড সফলভাবে ডাউনলোড হয়েছে!",
      "statusDlTip": "সংরক্ষণ করতে ছবিতে চেপে ধরে রাখুন।",
      "statusWa": "হোয়াটসঅ্যাপে খোলা হয়েছে!",
      "statusCp": "বাণী কপি করা হয়েছে!",
      "statusCpTip": "উপরের বাণীটি নির্বাচন করে কপি করুন।",
      "author": "— উদয় কুমার (মাইন্ড ক্ল্যারিটি)",
      "tagline": "আমরাই স্রষ্টা। সবার মাঝে সেই অভিন্ন উৎসকে স্মরণ করা।"
    },
    "mr": {
      "quote": "ज्ञान विचार",
      "aspect": "प्रमाण (Aspect Ratio)",
      "sq": "चौकोनी (पोस्ट · 1:1)",
      "st": "स्टोरी / स्टेटस (9:16)",
      "pal": "रंग थीम (4 प्रकार)",
      "p": "प्राचीन कागद",
      "e": "पवित्र पाचू",
      "s": "सोनेरी प्रभात",
      "n": "सागर रात्र",
      "dl": "डाउनलोड (PNG)",
      "wa": "व्हॉट्सॲप",
      "cp": "विचार कॉपी करा",
      "sh": "शेअर करा",
      "statusDl": "कार्ड डाउनलोड झाले!",
      "statusDlTip": "जतन करण्यासाठी प्रतिमेवर दाबून ठेवा.",
      "statusWa": "व्हॉट्सॲपवर उघडले!",
      "statusCp": "विचार क्लिपबोर्डवर कॉपी झाला!",
      "statusCpTip": "वरील विचार निवडून कॉपी करा.",
      "author": "— उदय कुमार (माइंड क्लॅरिटी)",
      "tagline": "आपणच सृष्टीकर्ता आहोत. सर्वांमध्ये त्या मूळ स्रोताचे स्मरण."
    },
    "gu": {
      "quote": "જ્ઞાન સૂત્ર",
      "aspect": "ગુણોત્તર",
      "sq": "ચોરસ (પોસ્ટ · 1:1)",
      "st": "સ્ટોરી / સ્ટેટસ (9:16)",
      "pal": "રંગ થીમ (4 પ્રકાર)",
      "p": "પ્રાચીન પત્ર",
      "e": "પવિત્ર પન્ના",
      "s": "સુવર્ણ પ્રભાત",
      "n": "સાગર રાત્રિ",
      "dl": "ડાઉનલોડ (PNG)",
      "wa": "વૉટ્સએપ",
      "cp": "સૂત્ર કૉપી કરો",
      "sh": "શૅર કરો",
      "statusDl": "કાર્ડ ડાઉનલોડ થઈ ગયું!",
      "statusDlTip": "સાચવવા માટે ચિત્ર પર દબાવી રાખો.",
      "statusWa": "વૉટ્સએપમાં ખૂલ્યું!",
      "statusCp": "સૂત્ર કૉપી થઈ ગયું!",
      "statusCpTip": "ઉપરનું સૂત્ર પસંદ કરીને કૉપી કરો.",
      "author": "— ઉદય કુમાર (માઇન્ડ ક્લેરિટી)",
      "tagline": "આપણે જ સર્જનહાર છીએ. સૌમાં એ સામાન્ય સ્ત્રોતનું સ્મરણ."
    },
    "pa": {
      "quote": "ਗਿਆਨ ਵਾਕ",
      "aspect": "ਅਨੁਪਾਤ",
      "sq": "ਚੌਰਸ (ਪੋਸਟ · 1:1)",
      "st": "ਸਟੋਰੀ / ਸਟੇਟਸ (9:16)",
      "pal": "ਰੰਗ ਥੀਮ (4)",
      "p": "ਪੁਰਾਤਨ ਪੰਨਾ",
      "e": "ਪਵਿੱਤਰ ਪੰਨਾ",
      "s": "ਸੁਨਹਿਰੀ ਸਵੇਰ",
      "n": "ਸਾਗਰ ਰਾਤ",
      "dl": "ਡਾਊਨਲੋਡ (PNG)",
      "wa": "ਵਟਸਐਪ",
      "cp": "ਵਾਕ ਕਾਪੀ ਕਰੋ",
      "sh": "ਸਾਂਝਾ ਕਰੋ",
      "statusDl": "ਕਾਰਡ ਡਾਊਨਲੋਡ ਹੋ ਗਿਆ!",
      "statusDlTip": "ਸੰਭਾਲਣ ਲਈ ਤਸਵੀਰ ਨੂੰ ਦਬਾ ਕੇ ਰੱਖੋ।",
      "statusWa": "ਵਟਸਐਪ ਵਿੱਚ ਖੋਲ੍ਹਿਆ ਗਿਆ!",
      "statusCp": "ਵਾਕ ਕਾਪੀ ਹੋ ਗਿਆ!",
      "statusCpTip": "ਉੱਪਰ ਦਿੱਤੇ ਵਾਕ ਨੂੰ ਚੁਣ ਕੇ ਕਾਪੀ ਕਰੋ।",
      "author": "— ਉਦੈ ਕੁਮਾਰ (ਮਾਈਂਡ ਕਲੈਰਿਟੀ)",
      "tagline": "ਅਸੀਂ ਹੀ ਸਿਰਜਣਹਾਰ ਹਾਂ। ਸਾਰਿਆਂ ਵਿੱਚ ਉਸ ਸਾਂਝੇ ਸੋਮੇ ਨੂੰ ਯਾਦ ਰੱਖਣਾ।"
    },
    "or": {
      "quote": "ଜ୍ଞାନ ବାକ୍ୟ",
      "aspect": "ଅନୁପାତ",
      "sq": "ବର୍ଗାକାର (ପୋଷ୍ଟ · ୧:୧)",
      "st": "ଷ୍ଟୋରୀ / ଷ୍ଟାଟସ୍ (୯:୧୬)",
      "pal": "ରଙ୍ଗ ଥିମ୍ (୪ଟି)",
      "p": "ତାଳପତ୍ର",
      "e": "ପବିତ୍ର ମରକତ",
      "s": "ସୁବର୍ଣ୍ଣ ପ୍ରଭାତ",
      "n": "ସାଗର ରାତ୍ରି",
      "dl": "ଡାଉନଲୋଡ୍ (PNG)",
      "wa": "ହ୍ୱାଟ୍ସଆପ୍",
      "cp": "ବାକ୍ୟ କପି କରନ୍ତୁ",
      "sh": "ସେୟାର୍",
      "statusDl": "କାର୍ଡ ଡାଉନଲୋଡ୍ ସଫଳ ହେଲା!",
      "statusDlTip": "ସେଭ୍ କରିବାକୁ ଛବି ଉପରେ ଚାପି ଧରନ୍ତୁ।",
      "statusWa": "ହ୍ୱାଟ୍ସଆପ୍‌ରେ ଖୋଲିଲା!",
      "statusCp": "ବାକ୍ୟ କପି ହୋଇଗଲା!",
      "statusCpTip": "ଉପର ବାକ୍ୟକୁ ଚୟନ କରି କପି କରନ୍ତୁ।",
      "author": "— ଉଦୟ କୁମାର (ମାଇଣ୍ଡ କ୍ଲାରିଟି)",
      "tagline": "ଆମେ ହିଁ ସୃଷ୍ଟିକର୍ତ୍ତା। ସମସ୍ତଙ୍କ ମଧ୍ୟରେ ସେହି ଉତ୍ସକୁ ସ୍ମରଣ କରିବା।"
    },
    "as": {
      "quote": "জ্ঞানৰ বাণী",
      "aspect": "অনুপাত",
      "sq": "বৰ্গাকাৰ (প'ষ্ট · ১:১)",
      "st": "ষ্ট'ৰী / ষ্টেটাছ (৯:১৬)",
      "pal": "ৰঙৰ থিম (৪টা)",
      "p": "সাঁচিপাত",
      "e": "পৱিত্ৰ মৰকত",
      "s": "সোণালী প্ৰভাত",
      "n": "সাগৰ ৰাত্ৰি",
      "dl": "ডাউনল'ড (PNG)",
      "wa": "হোৱাটছএপ",
      "cp": "বাণী কপি কৰক",
      "sh": "শ্বেয়াৰ",
      "statusDl": "কাৰ্ড ডাউনল'ড হ'ল!",
      "statusDlTip": "সংৰক্ষণ কৰিবলৈ ছবিত হেঁচি ধৰক।",
      "statusWa": "হোৱাটছএপত খোল খালে!",
      "statusCp": "বাণী কপি কৰা হ'ল!",
      "statusCpTip": "ওপৰৰ বাণীটো বাছনি কৰি কপি কৰক।",
      "author": "— উদয় কুমাৰ (মাইণ্ড ক্লেৰিটি)",
      "tagline": "আমিয়েই সৃষ্টিকৰ্তা। সকলোৰে মাজত সেই উমৈহতীয়া উৎসক স্মৰণ কৰা।"
    },
    "ur": {
      "quote": "دانش کا قول",
      "aspect": "تناسب",
      "sq": "مربع (پوسٹ · 1:1)",
      "st": "اسٹوری / اسٹیٹس (9:16)",
      "pal": "رنگین تھیمز (4)",
      "p": "قدیم ورق",
      "e": "مقدس زمرد",
      "s": "طلوع سحر",
      "n": "سمندری رات",
      "dl": "ڈاؤنلوڈ (PNG)",
      "wa": "واٹس ایپ",
      "cp": "قول کاپی کریں",
      "sh": "شیئر کریں",
      "statusDl": "کارڈ ڈاؤنلوڈ ہو گیا!",
      "statusDlTip": "محفوظ کرنے کے لیے تصویر کو دبائے رکھیں۔",
      "statusWa": "واٹس ایپ پر کھولا گیا!",
      "statusCp": "قول کاپی ہو گیا!",
      "statusCpTip": "اوپر دیے گئے قول کو منتخب کر کے کاپی کریں۔",
      "author": "— ادے کمار (مائنڈ کلیرٹی)",
      "tagline": "ہم ہی خالق ہیں۔ سب میں اس مشترکہ منبع کو یاد رکھنا۔"
    },
    "es": {
      "quote": "Cita de sabiduría",
      "aspect": "Formato",
      "sq": "Cuadrado (Post · 1:1)",
      "st": "Historia / Estado (9:16)",
      "pal": "Paleta visual (4 temas)",
      "p": "Pergamino cálido",
      "e": "Esmeralda sagrada",
      "s": "Dorado amanecer",
      "n": "Noche marina",
      "dl": "Descargar (PNG)",
      "wa": "WhatsApp",
      "cp": "Copiar cita",
      "sh": "Compartir",
      "statusDl": "¡Tarjeta descargada con éxito!",
      "statusDlTip": "Mantén presionada la imagen para guardarla.",
      "statusWa": "¡Abierto en WhatsApp!",
      "statusCp": "¡Cita copiada al portapapeles!",
      "statusCpTip": "Selecciona y copia la frase arriba.",
      "author": "— Uday Kumar (Mind Clarity)",
      "tagline": "Somos el Creador. Recordando la fuente compartida en todos."
    },
    "fr": {
      "quote": "Parole de sagesse",
      "aspect": "Format",
      "sq": "Carré (Post · 1:1)",
      "st": "Story / Statut (9:16)",
      "pal": "Palette visuelle (4 thèmes)",
      "p": "Parchemin chaud",
      "e": "Émeraude sacrée",
      "s": "Aurore dorée",
      "n": "Nuit océane",
      "dl": "Télécharger (PNG)",
      "wa": "WhatsApp",
      "cp": "Copier la citation",
      "sh": "Partager",
      "statusDl": "Carte téléchargée avec succès !",
      "statusDlTip": "Maintenez l'image enfoncée pour l'enregistrer.",
      "statusWa": "Ouvert dans WhatsApp !",
      "statusCp": "Citation copiée dans le presse-papiers !",
      "statusCpTip": "Sélectionnez et copiez la citation ci-dessus.",
      "author": "— Uday Kumar (Mind Clarity)",
      "tagline": "Nous sommes le Créateur. Se souvenir de la source commune en chacun."
    },
    "pt": {
      "quote": "Citação de sabedoria",
      "aspect": "Formato",
      "sq": "Quadrado (Post · 1:1)",
      "st": "Story / Status (9:16)",
      "pal": "Paleta visual (4 temas)",
      "p": "Pergaminho quente",
      "e": "Esmeralda sagrada",
      "s": "Ouro do amanhecer",
      "n": "Noite oceânica",
      "dl": "Baixar (PNG)",
      "wa": "WhatsApp",
      "cp": "Copiar citação",
      "sh": "Compartilhar",
      "statusDl": "Cartão baixado com sucesso!",
      "statusDlTip": "Toque e segure na imagem para salvar.",
      "statusWa": "Aberto no WhatsApp!",
      "statusCp": "Citação copiada para a área de transferência!",
      "statusCpTip": "Selecione e copie a citação acima.",
      "author": "— Uday Kumar (Mind Clarity)",
      "tagline": "Nós somos o Criador. Lembrando a fonte compartilhada em todos."
    },
    "id": {
      "quote": "Kutipan Bijak",
      "aspect": "Rasio Aspek",
      "sq": "Persegi (Post · 1:1)",
      "st": "Story / Status (9:16)",
      "pal": "Palet Visual (4 Tema)",
      "p": "Perkamen Hangat",
      "e": "Zamrud Suci",
      "s": "Fajar Keemasan",
      "n": "Malam Samudra",
      "dl": "Unduh (PNG)",
      "wa": "WhatsApp",
      "cp": "Salin Kutipan",
      "sh": "Bagikan",
      "statusDl": "Kartu berhasil diunduh!",
      "statusDlTip": "Tekan lama pada gambar untuk menyimpan.",
      "statusWa": "Dibuka di WhatsApp!",
      "statusCp": "Kutipan disalin ke papan klip!",
      "statusCpTip": "Pilih dan salin kutipan di atas.",
      "author": "— Uday Kumar (Mind Clarity)",
      "tagline": "Kita adalah Sang Pencipta. Mengingat sumber bersama dalam diri semua."
    },
    "ar": {
      "quote": "اقتباس الحكمة",
      "aspect": "نسبة العرض إلى الارتفاع",
      "sq": "مربع (منشور · 1:1)",
      "st": "قصة / حالة (9:16)",
      "pal": "لوحة الألوان (4 سمات)",
      "p": "مخطوط دافئ",
      "e": "زمرد مقدس",
      "s": "ذهب الشروق",
      "n": "ليل المحيط",
      "dl": "تنزيل (PNG)",
      "wa": "واتساب",
      "cp": "نسخ الاقتباس",
      "sh": "مشاركة",
      "statusDl": "تم تنزيل البطاقة بنجاح!",
      "statusDlTip": "اضغط مطولاً على الصورة لحفظها.",
      "statusWa": "تم الفتح في واتساب!",
      "statusCp": "تم نسخ الاقتباس إلى الحافظة!",
      "statusCpTip": "حدد وانسخ الاقتباس أعلاه.",
      "author": "— أوداي كومار (وضوح العقل)",
      "tagline": "نحن الخالق. تذكّر المصدر المشترك في الجميع."
    },
    "de": {
      "quote": "Weisheitszitat",
      "aspect": "Seitenverhältnis",
      "sq": "Quadrat (Post · 1:1)",
      "st": "Story / Status (9:16)",
      "pal": "Farbpalette (4 Themen)",
      "p": "Warmes Pergament",
      "e": "Heiliger Smaragd",
      "s": "Sonnengold",
      "n": "Ozeannacht",
      "dl": "Herunterladen (PNG)",
      "wa": "WhatsApp",
      "cp": "Zitat kopieren",
      "sh": "Teilen",
      "statusDl": "Karte erfolgreich heruntergeladen!",
      "statusDlTip": "Bild gedrückt halten zum Speichern.",
      "statusWa": "In WhatsApp geöffnet!",
      "statusCp": "Zitat in die Zwischenablage kopiert!",
      "statusCpTip": "Wählen Sie das obige Zitat aus und kopieren Sie es.",
      "author": "— Uday Kumar (Mind Clarity)",
      "tagline": "Wir sind der Schöpfer. Die gemeinsame Quelle in allen erinnern."
    },
    "it": {
      "quote": "Citazione di saggezza",
      "aspect": "Proporzioni",
      "sq": "Quadrato (Post · 1:1)",
      "st": "Storia / Stato (9:16)",
      "pal": "Tavolozza visiva (4 temi)",
      "p": "Pergamena calda",
      "e": "Smeraldo sacro",
      "s": "Oro dell'alba",
      "n": "Notte oceanica",
      "dl": "Scarica (PNG)",
      "wa": "WhatsApp",
      "cp": "Copia citazione",
      "sh": "Condividi",
      "statusDl": "Carta scaricata con successo!",
      "statusDlTip": "Tieni premuta l'immagine per salvarla.",
      "statusWa": "Aperto in WhatsApp!",
      "statusCp": "Citazione copiata negli appunti!",
      "statusCpTip": "Seleziona e copia la citazione sopra.",
      "author": "— Uday Kumar (Mind Clarity)",
      "tagline": "Noi siamo il Creatore. Ricordare la fonte comune in tutti."
    },
    "ru": {
      "quote": "Мудрая цитата",
      "aspect": "Соотношение сторон",
      "sq": "Квадрат (Пост · 1:1)",
      "st": "История / Статус (9:16)",
      "pal": "Цветовая палитра (4 темы)",
      "p": "Теплый пергамент",
      "e": "Священный изумруд",
      "s": "Золотой рассвет",
      "n": "Океанская ночь",
      "dl": "Скачать (PNG)",
      "wa": "WhatsApp",
      "cp": "Скопировать цитату",
      "sh": "Поделиться",
      "statusDl": "Открытка успешно скачана!",
      "statusDlTip": "Удерживайте изображение, чтобы сохранить его.",
      "statusWa": "Открыто в WhatsApp!",
      "statusCp": "Цитата скопирована в буфер обмена!",
      "statusCpTip": "Выделите и скопируйте цитату выше.",
      "author": "— Удай Кумар (Mind Clarity)",
      "tagline": "Мы — Творец. Память о едином источнике во всем."
    },
    "ja": {
      "quote": "叡智の言葉",
      "aspect": "アスペクト比",
      "sq": "正方形（投稿 · 1:1）",
      "st": "ストーリー / ステータス（9:16）",
      "pal": "カラーパレット（4テーマ）",
      "p": "温もりの羊皮紙",
      "e": "聖なるエメラルド",
      "s": "朝日の黄金",
      "n": "深海の夜",
      "dl": "ダウンロード (PNG)",
      "wa": "WhatsApp",
      "cp": "言葉をコピー",
      "sh": "シェア",
      "statusDl": "カードが保存されました！",
      "statusDlTip": "画像を長押しして保存してください。",
      "statusWa": "WhatsAppで開きました！",
      "statusCp": "クリップボードにコピーしました！",
      "statusCpTip": "上の言葉を選択してコピーしてください。",
      "author": "— ウダイ・クマール (Mind Clarity)",
      "tagline": "私たちは創造主。すべての中に共通の源を思い出す。"
    },
    "ko": {
      "quote": "지혜의 문장",
      "aspect": "화면 비율",
      "sq": "정사각형 (포스트 · 1:1)",
      "st": "스토리 / 상태 (9:16)",
      "pal": "색상 테마 (4가지)",
      "p": "따뜻한 양피지",
      "e": "신성한 에메랄드",
      "s": "황금빛 아침",
      "n": "바다의 밤",
      "dl": "다운로드 (PNG)",
      "wa": "WhatsApp",
      "cp": "문장 복사",
      "sh": "공유하기",
      "statusDl": "카드가 다운로드되었습니다!",
      "statusDlTip": "이미지를 길게 눌러 저장하세요.",
      "statusWa": "WhatsApp에서 열렸습니다!",
      "statusCp": "문장이 클립보드에 복사되었습니다!",
      "statusCpTip": "위의 문장을 선택하여 복사하세요.",
      "author": "— 우다이 쿠마르 (Mind Clarity)",
      "tagline": "우리는 창조자입니다. 모든 것 안의 동일한 근원을 기억하며."
    },
    "zh-Hans": {
      "quote": "智慧箴言",
      "aspect": "画幅比例",
      "sq": "正方形（图文 · 1:1）",
      "st": "故事 / 状态（9:16）",
      "pal": "视觉主题（4款）",
      "p": "温润羊皮纸",
      "e": "神圣祖母绿",
      "s": "晨曦晨金",
      "n": "深海静夜",
      "dl": "下载图片 (PNG)",
      "wa": "WhatsApp",
      "cp": "复制金句",
      "sh": "分享",
      "statusDl": "卡片已成功下载！",
      "statusDlTip": "长按图片即可保存至相册。",
      "statusWa": "已在 WhatsApp 中打开！",
      "statusCp": "箴言已复制到剪贴板！",
      "statusCpTip": "请选中文本进行复制。",
      "author": "— 乌代·库马尔 (Mind Clarity)",
      "tagline": "我们就是造物主。忆起一切之中的共同源头。"
    },
    "zh-Hant": {
      "quote": "智慧箴言",
      "aspect": "畫幅比例",
      "sq": "正方形（圖文 · 1:1）",
      "st": "動態 / 狀態（9:16）",
      "pal": "視覺主題（4款）",
      "p": "溫潤羊皮紙",
      "e": "神聖祖母綠",
      "s": "晨曦晨金",
      "n": "深海靜夜",
      "dl": "下載圖片 (PNG)",
      "wa": "WhatsApp",
      "cp": "複製金句",
      "sh": "分享",
      "statusDl": "卡片已成功下載！",
      "statusDlTip": "長按圖片即可儲存至相簿。",
      "statusWa": "已在 WhatsApp 中開啟！",
      "statusCp": "箴言已複製到剪貼簿！",
      "statusCpTip": "請選取文字進行複製。",
      "author": "— 烏代·庫馬爾 (Mind Clarity)",
      "tagline": "我們就是造物主。憶起一切之中的共同源頭。"
    },
    "tr": {
      "quote": "Bilgelik Sözü",
      "aspect": "En Boy Oranı",
      "sq": "Kare (Gönderi · 1:1)",
      "st": "Hikaye / Durum (9:16)",
      "pal": "Görsel Tema (4 Seçenek)",
      "p": "Sıcak Parşömen",
      "e": "Kutsal Zümrüt",
      "s": "Gündoğumu Altını",
      "n": "Okyanus Gecesi",
      "dl": "İndir (PNG)",
      "wa": "WhatsApp",
      "cp": "Sözü Kopyala",
      "sh": "Paylaş",
      "statusDl": "Kart başarıyla indirildi!",
      "statusDlTip": "Kaydetmek için resme basılı tutun.",
      "statusWa": "WhatsApp'ta açıldı!",
      "statusCp": "Söz panoya kopyalandı!",
      "statusCpTip": "Yukarıdaki sözü seçip kopyalayın.",
      "author": "— Uday Kumar (Mind Clarity)",
      "tagline": "Biz Yaratıcıyız. Herkesteki ortak kaynağı hatırlamak."
    },
    "vi": {
      "quote": "Lời Vàng Ý Ngọc",
      "aspect": "Tỷ Lệ Khung Hình",
      "sq": "Vuông (Bài đăng · 1:1)",
      "st": "Tin / Trạng thái (9:16)",
      "pal": "Chủ Đề Màu Sắc (4 Loại)",
      "p": "Giấy Da Ấm",
      "e": "Ngọc Lục Bảo Thiêng",
      "s": "Bình Minh Hoàng Kim",
      "n": "Đêm Đại Dương",
      "dl": "Tải Về (PNG)",
      "wa": "WhatsApp",
      "cp": "Sao Chép Câu Nói",
      "sh": "Chia Sẻ",
      "statusDl": "Đã tải thiệp thành công!",
      "statusDlTip": "Nhấn giữ hình ảnh để lưu.",
      "statusWa": "Đã mở trong WhatsApp!",
      "statusCp": "Đã sao chép câu nói!",
      "statusCpTip": "Hãy chọn và sao chép câu nói trên.",
      "author": "— Uday Kumar (Mind Clarity)",
      "tagline": "Chúng ta là Đấng Tạo Hóa. Nhớ về nguồn cội chung trong vạn vật."
    },
    "pl": {
      "quote": "Cytat mądrości",
      "aspect": "Proporcje",
      "sq": "Kwadrat (Post · 1:1)",
      "st": "Relacja / Status (9:16)",
      "pal": "Paleta kolorów (4 motywy)",
      "p": "Ciepły pergamin",
      "e": "Święty szmaragd",
      "s": "Złoty świt",
      "n": "Oceaniczna noc",
      "dl": "Pobierz (PNG)",
      "wa": "WhatsApp",
      "cp": "Kopiuj cytat",
      "sh": "Udostępnij",
      "statusDl": "Karta pobrana pomyślnie!",
      "statusDlTip": "Przytrzymaj obraz, aby zapisać.",
      "statusWa": "Otwarte w WhatsApp!",
      "statusCp": "Cytat skopiowany do schowka!",
      "statusCpTip": "Zaznacz i skopiuj cytat powyżej.",
      "author": "— Uday Kumar (Mind Clarity)",
      "tagline": "Jesteśmy Stwórcą. Pamiętając o wspólnym źródle we wszystkich."
    },
    "nl": {
      "quote": "Wijsheidscitaat",
      "aspect": "Beeldverhouding",
      "sq": "Vierkant (Post · 1:1)",
      "st": "Verhaal / Status (9:16)",
      "pal": "Kleurenpalet (4 thema's)",
      "p": "Warm perkament",
      "e": "Heilige smaragd",
      "s": "Ochtendgoud",
      "n": "Oceaannacht",
      "dl": "Downloaden (PNG)",
      "wa": "WhatsApp",
      "cp": "Citaat kopiëren",
      "sh": "Delen",
      "statusDl": "Kaart succesvol gedownload!",
      "statusDlTip": "Houd de afbeelding ingedrukt om op te slaan.",
      "statusWa": "Geopend in WhatsApp!",
      "statusCp": "Citaat naar klembord gekopieerd!",
      "statusCpTip": "Selecteer en kopieer het bovenstaande citaat.",
      "author": "— Uday Kumar (Mind Clarity)",
      "tagline": "Wij zijn de Schepper. De gedeelde bron in iedereen herinneren."
    },
    "sv": {
      "quote": "Visdomsord",
      "aspect": "Bildförhållande",
      "sq": "Kvadrat (Inlägg · 1:1)",
      "st": "Händelse / Status (9:16)",
      "pal": "Färgpalett (4 teman)",
      "p": "Varmt pergament",
      "e": "Helig smaragd",
      "s": "Soluppgångsguld",
      "n": "Oceanisk natt",
      "dl": "Ladda ner (PNG)",
      "wa": "WhatsApp",
      "cp": "Kopiera citat",
      "sh": "Dela",
      "statusDl": "Kortet har laddats ner!",
      "statusDlTip": "Håll fingret på bilden för att spara den.",
      "statusWa": "Öppnat i WhatsApp!",
      "statusCp": "Citatet kopierades till urklipp!",
      "statusCpTip": "Markera och kopiera citatet ovan.",
      "author": "— Uday Kumar (Mind Clarity)",
      "tagline": "Vi är Skaparen. Att minnas den gemensamma källan i alla."
    },
    "da": {
      "quote": "Visdomscitat",
      "aspect": "Billedformat",
      "sq": "Kvadrat (Opslag · 1:1)",
      "st": "Historie / Status (9:16)",
      "pal": "Farvepalette (4 temaer)",
      "p": "Varmt pergament",
      "e": "Hellig smaragd",
      "s": "Solopgangsguld",
      "n": "Havnat",
      "dl": "Download (PNG)",
      "wa": "WhatsApp",
      "cp": "Kopiér citat",
      "sh": "Del",
      "statusDl": "Kortet er downloadet!",
      "statusDlTip": "Hold billedet nede for at gemme det.",
      "statusWa": "Åbnet i WhatsApp!",
      "statusCp": "Citat kopieret til udklipsholder!",
      "statusCpTip": "Vælg og kopiér citatet ovenfor.",
      "author": "— Uday Kumar (Mind Clarity)",
      "tagline": "Vi er Skaberen. At huske den fælles kilde i alle."
    },
    "nb": {
      "quote": "Visdomssitat",
      "aspect": "Bildeformat",
      "sq": "Kvadrat (Innlegg · 1:1)",
      "st": "Historie / Status (9:16)",
      "pal": "Fargepalett (4 temaer)",
      "p": "Varmt pergament",
      "e": "Hellig smaragd",
      "s": "Soloppgangsgull",
      "n": "Havsatt",
      "dl": "Last ned (PNG)",
      "wa": "WhatsApp",
      "cp": "Kopier sitat",
      "sh": "Del",
      "statusDl": "Kortet er lastet ned!",
      "statusDlTip": "Hold bildet inne for å lagre det.",
      "statusWa": "Åpnet i WhatsApp!",
      "statusCp": "Sitat kopiert til utklippstavlen!",
      "statusCpTip": "Marker og kopier sitatet ovenfor.",
      "author": "— Uday Kumar (Mind Clarity)",
      "tagline": "Vi er Skaperen. Å huske det felles opphavet i alle."
    },
    "ro": {
      "quote": "Citat de înțelepciune",
      "aspect": "Format de imagine",
      "sq": "Pătrat (Postare · 1:1)",
      "st": "Poveste / Stare (9:16)",
      "pal": "Paletă vizuală (4 teme)",
      "p": "Pergament cald",
      "e": "Smarald sacru",
      "s": "Aurul zorilor",
      "n": "Noapte oceanică",
      "dl": "Descărcare (PNG)",
      "wa": "WhatsApp",
      "cp": "Copiază citatul",
      "sh": "Distribuie",
      "statusDl": "Card descărcat cu succes!",
      "statusDlTip": "Țineți apăsat pe imagine pentru a o salva.",
      "statusWa": "Deschis în WhatsApp!",
      "statusCp": "Citat copiat în clipboard!",
      "statusCpTip": "Selectați și copiați citatul de mai sus.",
      "author": "— Uday Kumar (Mind Clarity)",
      "tagline": "Noi suntem Creatorul. Amintindu-ne de sursa comună din toți."
    },
    "cs": {
      "quote": "Citát moudrosti",
      "aspect": "Poměr stran",
      "sq": "Čtverec (Příspěvek · 1:1)",
      "st": "Příběh / Stav (9:16)",
      "pal": "Vizuální paleta (4 motivy)",
      "p": "Teplý pergamen",
      "e": "Posvátný smaragd",
      "s": "Zlato rozbřesku",
      "n": "Oceánská noc",
      "dl": "Stáhnout (PNG)",
      "wa": "WhatsApp",
      "cp": "Kopírovat citát",
      "sh": "Sdílet",
      "statusDl": "Karta úspěšně stažena!",
      "statusDlTip": "Podržením obrázku jej uložíte.",
      "statusWa": "Otevřeno ve WhatsApp!",
      "statusCp": "Citát byl zkopírován do schránky!",
      "statusCpTip": "Vyberte a zkopírujte citát výše.",
      "author": "— Uday Kumar (Mind Clarity)",
      "tagline": "Jsme Stvořitel. Pamatovat na společný zdroj ve všem."
    }
  };

  const curatedQuotesByLang = {
    "en": [
      "We are the Creator: the one shared source experiencing life through all of us. We created this game of experiences and entered its different lives and roles.",
      "We are the Creator. We created this game of experiences and entered it. Having designed it before entering, we cannot change its design from inside the game.",
      "We are the Creator within the game.",
      "Return to the Creator within each scene.",
      "The lotus: within life, with light attachment to its passing scenes.",
      "The movie and lotus help make remembrance understandable during everyday experience.",
      "A mistake is not your whole identity.",
      "Distinguish a role’s mistake from the Creator experiencing that role.",
      "See the same Creator in both roles within the disagreement.",
      "Remember the Creator while waiting for a scene you cannot dictate.",
      "Experience a scene fully while remembering the Creator who entered it.",
      "Make a choice within the game without claiming control of its design.",
      "Place a small part of creation beside the shared Creator in a relationship.",
      "The same Creator in every relationship.",
      "Care for the creation we share.",
      "One Creator. Many lives. A game of experiences.",
      "Understand God. Remember who we are.",
      "Make the divine identity visible in life.",
      "Understanding God includes the person before us.",
      "Clarity changes your world. Shared clarity changes the Yuga."
    ],
    "te": [
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
      "తరంగాల ఒడిదుడుకులకు చలించని సముద్రంలా మీ అంతరంగంలో స్థిరంగా ఉండండి.",
      "మనమే సృష్టికర్తలం: మనందరి ద్వారా జీవితాన్ని అనుభవిస్తున్న ఒకే ఉమ్మడి మూలం. ఈ అనుభవాల ఆటను మనమే సృష్టించి, అందులోని వేర్వేరు జీవితాలు, పాత్రలలోకి ప్రవేశించాము.",
      "మనమే సృష్టికర్తలం. ఈ అనుభవాల ఆటను సృష్టించి, అందులోకి ప్రవేశించాం. ప్రవేశించే ముందే దీని రూపకల్పనను నిర్ణయించుకున్నందున, ఆటలోపలి నుంచి ఆ రూపకల్పనను మార్చలేం.",
      "ఆటలో మనమే సృష్టికర్తలం.",
      "ప్రతి దృశ్యంలో సృష్టికర్తను గుర్తుచేసుకోండి.",
      "కమలం: జీవితంలో ఉంటూనే, దాని తాత్కాలిక దృశ్యాలపై తక్కువ మమకారంతో జీవించడం.",
      "సినిమా, తామర రోజువారీ అనుభవంలో స్మరణను అర్థమయ్యేలా చేయడానికి సహాయపడతాయి.",
      "ఒక పొరపాటు మీ సంపూర్ణ గుర్తింపు కాదు.",
      "ఒక పాత్ర చేసిన పొరపాటును, ఆ పాత్రను అనుభవిస్తున్న సృష్టికర్త నుంచి వేరుగా చూడండి.",
      "విభేదిస్తున్న రెండు పాత్రల్లోనూ అదే సృష్టికర్తను చూడండి.",
      "మీరు నిర్ణయించలేని తదుపరి దృశ్యం కోసం ఎదురుచూస్తూ సృష్టికర్తను గుర్తుచేసుకోండి.",
      "ఆటలోకి ప్రవేశించిన సృష్టికర్తను గుర్తుచేసుకుంటూనే ఒక దృశ్యాన్ని పూర్తిగా అనుభవించండి.",
      "ఆట రూపకల్పనపై నియంత్రణ ఉందని భావించకుండా, ఆటలోనే నిర్ణయం తీసుకోండి.",
      "సృష్టిలోని చిన్న భాగమైన వస్తువును, సంబంధంలో ఉన్న ఉమ్మడి సృష్టికర్తతో పోల్చి చూడండి.",
      "ప్రతి సంబంధంలోనూ అదే సృష్టికర్త.",
      "మన ఉమ్మడి సృష్టి పట్ల శ్రద్ధ చూపండి.",
      "ఒకే సృష్టికర్త. అనేక జీవితాలు. అనుభవాల ఆట.",
      "దేవుణ్ణి అర్థం చేసుకోండి. మనం ఎవరో గుర్తుంచుకోండి.",
      "జీవితంలో దైవ గుర్తింపును కనిపించేలా చేయండి.",
      "దేవుణ్ణి అర్థం చేసుకోవడంలో మన ఎదుటి వ్యక్తి కూడా ఉంటారు.",
      "స్పష్టత మీ ప్రపంచాన్ని మారుస్తుంది. అందరి స్పష్టత యుగాన్ని మారుస్తుంది."
    ],
    "hi": [
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
      "लहरों के उठने-गिरने से अप्रभावित समुद्र की तरह अपने भीतर स्थिर रहें।",
      "हम ही सृष्टिकर्ता हैं: एक साझा स्रोत, जो हम सभी के माध्यम से जीवन का अनुभव करता है। हमने अनुभवों का यह खेल बनाया और इसके अलग-अलग जीवन और भूमिकाओं में प्रवेश किया।",
      "हम ही सृष्टिकर्ता हैं। हमने अनुभवों का यह खेल बनाया और इसमें प्रवेश किया। प्रवेश करने से पहले इसकी रूपरेखा तय कर लेने के कारण, हम खेल के भीतर से उसकी रूपरेखा बदल नहीं सकते।",
      "हम अनुभवों के खेल में सृष्टिकर्ता हैं।",
      "हर दृश्य में सृष्टिकर्ता की ओर लौटें।",
      "कमल: जीवन में रहते हुए उसके गुजरते दृश्यों से हल्का लगाव।",
      "चलचित्र और कमल दैनिक अनुभव में स्मरण को समझने योग्य बनाने में सहायता करते हैं।",
      "एक गलती आपकी पूरी पहचान नहीं है।",
      "किसी भूमिका की गलती और उस भूमिका का अनुभव कर रहे सृष्टिकर्ता के बीच अंतर देखें।",
      "असहमति की दोनों भूमिकाओं में वही सृष्टिकर्ता देखें।",
      "ऐसे दृश्य की प्रतीक्षा में सृष्टिकर्ता को याद करें जिसका क्रम आप तय नहीं कर सकते।",
      "खेल में प्रवेश करने वाले सृष्टिकर्ता को याद रखते हुए दृश्य को पूरी तरह अनुभव करें।",
      "खेल की रूपरेखा पर नियंत्रण का दावा किए बिना, उसके भीतर निर्णय लें।",
      "सृष्टि के एक छोटे हिस्से को संबंध में उपस्थित साझा सृष्टिकर्ता के साथ रखकर देखें।",
      "हर संबंध में वही सृष्टिकर्ता।",
      "हमारी साझा सृष्टि की देखभाल करें।",
      "एक सृष्टिकर्ता। अनेक जीवन। अनुभवों का खेल।",
      "ईश्वर को समझें। याद रखें कि हम कौन हैं।",
      "जीवन में दिव्य पहचान को दिखाई देने योग्य बनाएँ।",
      "ईश्वर की समझ में सामने खड़ा व्यक्ति शामिल है।",
      "स्पष्टता आपकी दुनिया बदलती है। साझा स्पष्टता युग बदलती है।"
    ],
    "ar": [
      "نحن الخالق: المصدر الواحد المشترك الذي يختبر الحياة من خلالنا جميعًا. خلقنا لعبة التجارب هذه ودخلنا حيواتها وأدوارها المختلفة.",
      "نحن الخالق. أوجدنا لعبة التجارب هذه ودخلنا فيها. وبما أننا وضعنا تصميمها قبل الدخول، فلا يمكننا تغييره من داخل اللعبة.",
      "نحن الخالق داخل اللعبة.",
      "العودة إلى الخالق في كل مشهد.",
      "اللوتس: داخل الحياة، مع التعلق الخفيف بمشاهدها العابرة.",
      "يساعد الفيلم واللوتس على جعل التذكر مفهومًا أثناء التجربة اليومية.",
      "الخطأ لا يمثل هويتك بأكملها.",
      "ميز بين خطأ الدور وبين تجربة الخالق لهذا الدور.",
      "رؤية نفس الخالق في كلا الدورين ضمن الخلاف.",
      "تذكر الخالق أثناء انتظار مشهد لا يمكنك إملاءه.",
      "اختبر مشهدًا كاملاً بينما تتذكر الخالق الذي دخله.",
      "قم بالاختيار داخل اللعبة دون المطالبة بالتحكم في تصميمها.",
      "ضع جزءًا صغيرًا من الخليقة بجوار الخالق المشترك في العلاقة.",
      "نفس الخالق في كل علاقة.",
      "رعاية الخلق الذي نشاركه.",
      "خالق واحد. حيوات كثيرة. لعبة تجارب.",
      "افهم الله. تذكر من نحن.",
      "اجعل الهوية الإلهية مرئية في الحياة.",
      "يشمل فهم الله الشخص الذي أمامنا.",
      "الوضوح يغيّر عالمك. الوضوح المشترك يغيّر اليوغا."
    ],
    "as": [
      "আমিয়েই স্ৰষ্টা: আমাৰ সকলোৰে মাজেৰে জীৱন অনুভৱ কৰা একেই উমৈহতীয়া উৎস। আমি অভিজ্ঞতাৰ এই খেল সৃষ্টি কৰি ইয়াৰ বিভিন্ন জীৱন আৰু ভূমিকাত প্ৰৱেশ কৰিলোঁ।",
      "আমিয়েই সৃষ্টিকৰ্তা। অভিজ্ঞতাৰ এই খেলখন আমি সৃষ্টি কৰি ইয়াত প্ৰৱেশ কৰিছোঁ। প্ৰৱেশ কৰাৰ আগতেই ইয়াৰ পৰিকল্পনা নিৰ্ধাৰণ কৰিছিলোঁ বাবে, খেলৰ ভিতৰৰ পৰা সেই পৰিকল্পনা সলনি কৰিব নোৱাৰোঁ।",
      "আমি খেলৰ ভিতৰত সৃষ্টিকৰ্তা।",
      "প্ৰতিটো দৃশ্যৰ ভিতৰত সৃষ্টিকৰ্তাৰ ওচৰলৈ উভতি যাওক।",
      "পদুম: জীৱনৰ ভিতৰত, ইয়াৰ পাৰ হৈ যোৱা দৃশ্যবোৰৰ প্ৰতি পোহৰৰ মোহ।",
      "চিনেমা আৰু পদুমে দৈনন্দিন অভিজ্ঞতাৰ সময়ত স্মৃতি বুজিব পৰা কৰি তোলাত সহায় কৰে।",
      "এটা ভুল আপোনাৰ সমগ্ৰ পৰিচয় নহয়।",
      "এটা ভূমিকাৰ ভুল আৰু সৃষ্টিকৰ্তাই সেই ভূমিকা অনুভৱ কৰাৰ পৰা পৃথক কৰক।",
      "মতানৈক্যৰ ভিতৰত দুয়োটা ভূমিকাতে একেজন সৃষ্টিকৰ্তাক চাওক।",
      "আপুনি নিৰ্দেশ দিব নোৱাৰা দৃশ্য এটাৰ বাবে অপেক্ষা কৰি থাকোঁতে সৃষ্টিকৰ্তাক মনত ৰাখিব।",
      "এটা দৃশ্যত প্ৰৱেশ কৰা সৃষ্টিকৰ্তাক স্মৰণ কৰি সম্পূৰ্ণৰূপে অনুভৱ কৰক।",
      "ইয়াৰ ডিজাইনৰ ওপৰত নিয়ন্ত্ৰণ দাবী নকৰাকৈয়ে খেলৰ ভিতৰতে এটা বাছনি কৰক।",
      "সম্পৰ্কত ভাগ কৰা সৃষ্টিকৰ্তাৰ কাষত সৃষ্টিৰ সৰু অংশ এটা ৰাখক।",
      "প্ৰতিটো সম্পৰ্কত একেজন সৃষ্টিকৰ্তা।",
      "আমি ভাগ কৰা সৃষ্টিৰ প্ৰতি যত্ন লওক।",
      "এজন সৃষ্টিকৰ্তা। বহুতৰে জীৱন। অভিজ্ঞতাৰ খেল।",
      "ঈশ্বৰক বুজি লওক। আমি কোন সেই কথা মনত ৰাখিবা।",
      "ঐশ্বৰিক পৰিচয়ক জীৱনত দৃশ্যমান কৰি তোলক।",
      "ঈশ্বৰক বুজাত আমাৰ আগৰ ব্যক্তিজনকো অন্তৰ্ভুক্ত কৰা হৈছে।",
      "স্পষ্টতাই আপোনাৰ জগত সলনি কৰে। সকলোৰে স্পষ্টতাই যুগ সলনি কৰে।"
    ],
    "bn": [
      "আমরাই স্রষ্টা: আমাদের সবার মাধ্যমে জীবন অনুভব করা একই অভিন্ন উৎস। আমরা অভিজ্ঞতার এই খেলা সৃষ্টি করেছি এবং এর বিভিন্ন জীবন ও ভূমিকায় প্রবেশ করেছি।",
      "আমরাই স্রষ্টা। অভিজ্ঞতার এই খেলাটি আমরা সৃষ্টি করেছি এবং এতে প্রবেশ করেছি। প্রবেশ করার আগেই এর পরিকল্পনা নির্ধারণ করেছি বলে, খেলার ভেতর থেকে সেই পরিকল্পনা বদলাতে পারি না।",
      "আমরা খেলার মধ্যে সৃষ্টিকর্তা.",
      "প্রতিটি দৃশ্যের মধ্যে সৃষ্টিকর্তার কাছে ফিরে যান।",
      "পদ্ম: জীবনের মধ্যে, এর ক্ষণস্থায়ী দৃশ্যের সাথে হালকা সংযুক্তি।",
      "চলচ্চিত্র এবং পদ্ম দৈনন্দিন অভিজ্ঞতার সময় স্মরণকে বোধগম্য করতে সাহায্য করে।",
      "একটি ভুল আপনার সম্পূর্ণ পরিচয় নয়।",
      "একটি ভূমিকার ভুলকে সেই ভূমিকার অভিজ্ঞতা থেকে সৃষ্টিকর্তার থেকে আলাদা করুন।",
      "দ্বিমতের মধ্যে উভয় ভূমিকায় একই স্রষ্টাকে দেখুন।",
      "আপনি নির্দেশ করতে পারবেন না এমন একটি দৃশ্যের জন্য অপেক্ষা করার সময় স্রষ্টাকে স্মরণ করুন।",
      "সৃষ্টিকর্তাকে স্মরণ করার সময় একটি দৃশ্য সম্পূর্ণরূপে অনুভব করুন যিনি এটিতে প্রবেশ করেছেন।",
      "এর ডিজাইনের নিয়ন্ত্রণ দাবি না করে খেলার মধ্যে একটি পছন্দ করুন।",
      "একটি সম্পর্কের মধ্যে ভাগ করা সৃষ্টিকর্তার পাশে সৃষ্টির একটি ছোট অংশ রাখুন।",
      "প্রতিটি সম্পর্কের ক্ষেত্রে একই সৃষ্টিকর্তা।",
      "আমরা শেয়ার করা সৃষ্টির যত্ন নিন।",
      "একজন সৃষ্টিকর্তা। অনেক জীবন। অভিজ্ঞতার খেলা।",
      "ঈশ্বরকে বুঝুন। মনে রাখবেন আমরা কারা।",
      "জীবনে ঐশ্বরিক পরিচয় দৃশ্যমান করুন।",
      "ঈশ্বর বোঝা আমাদের আগে ব্যক্তি অন্তর্ভুক্ত.",
      "স্পষ্টতা আপনার জগৎ বদলায়। সবার স্পষ্টতা যুগ বদলায়।"
    ],
    "cs": [
      "Jsme Stvořitel: jediný společný zdroj, který prožívá život skrze nás všechny. Stvořili jsme tuto hru prožitků a vstoupili do jejích různých životů a rolí.",
      "Jsme Stvořitel. Vytvořili jsme tuto hru prožitků a vstoupili do ní. Protože jsme ji navrhli předtím, než jsme do ní vstoupili, nemůžeme její uspořádání měnit zevnitř hry.",
      "Jsme Stvořitelem ve hře.",
      "V každé scéně se vraťte ke Stvořiteli.",
      "Lotos: uvnitř života, se světlem připoutaným k jeho ubíhajícím scénám.",
      "Film a lotos pomáhají, aby byly vzpomínky srozumitelné během každodenního zážitku.",
      "Chyba není celá vaše identita.",
      "Rozlišujte chybu role od Stvořitele, který tuto roli zažívá.",
      "Podívejte se na stejného Stvořitele v obou rolích v rámci neshody.",
      "Pamatujte na Stvořitele, zatímco čekáte na scénu, kterou nemůžete diktovat.",
      "Prožijte scénu naplno a přitom si vzpomeňte na Stvořitele, který do ní vstoupil.",
      "Vyberte si ve hře, aniž byste si nárokovali kontrolu nad jejím designem.",
      "Umístěte do vztahu malou část stvoření vedle sdíleného Stvořitele.",
      "Stejný Stvořitel v každém vztahu.",
      "Pečujte o výtvor, který sdílíme.",
      "Jeden Stvořitel. Mnoho životů. Hra o zážitky.",
      "Pochopte Boha. Pamatujte, kdo jsme.",
      "Zviditelnit božskou identitu v životě.",
      "Pochopení Boha zahrnuje osobu před námi.",
      "Jasné porozumění mění váš svět. Společné porozumění mění jugu."
    ],
    "da": [
      "Vi er Skaberen: den ene fælles kilde, som oplever livet gennem os alle. Vi skabte dette spil af oplevelser og trådte ind i dets forskellige liv og roller.",
      "Vi er Skaberen. Vi skabte dette spil af oplevelser og trådte ind i det. Fordi vi udformede det, før vi trådte ind, kan vi ikke ændre dets udformning indefra i spillet.",
      "Vi er skaberen i spillet.",
      "Vend tilbage til skaberen inden for hver scene.",
      "Lotus: i livet, med lys tilknytning til dets forbipasserende scener.",
      "Filmen og lotus hjælper med at gøre erindring forståelig under hverdagsoplevelser.",
      "En fejl er ikke hele din identitet.",
      "Skelne en rolles fejl fra Skaberen, der oplever denne rolle.",
      "Se den samme Skaber i begge roller i uenigheden.",
      "Husk Skaberen, mens du venter på en scene, du ikke kan diktere.",
      "Oplev en scene fuldt ud, mens du husker Skaberen, der kom ind i den.",
      "Træf et valg i spillet uden at kræve kontrol over dets design.",
      "Placer en lille del af skabelsen ved siden af ​​den fælles skaber i et forhold.",
      "Den samme Skaber i ethvert forhold.",
      "Pas på den skabelse, vi deler.",
      "Én skaber. Mange liv. Et spil med oplevelser.",
      "Forstå Gud. Husk hvem vi er.",
      "Gør den guddommelige identitet synlig i livet.",
      "At forstå Gud omfatter personen før os.",
      "Klarhed ændrer din verden. Fælles klarhed ændrer Yugaen."
    ],
    "de": [
      "Wir sind der Schöpfer: die eine gemeinsame Quelle, die durch uns alle das Leben erfährt. Wir haben dieses Spiel der Erfahrungen erschaffen und sind in seine verschiedenen Leben und Rollen eingetreten.",
      "Wir sind der Schöpfer. Wir haben dieses Spiel der Erfahrungen erschaffen und sind in es eingetreten. Da wir seinen Ablauf vor dem Eintritt entworfen haben, können wir diesen Entwurf nicht aus dem Inneren des Spiels heraus verändern.",
      "Wir sind der Schöpfer im Spiel.",
      "Kehren Sie in jeder Szene zum Schöpfer zurück.",
      "Der Lotus: im Leben, mit leichter Anhaftung an seine vergänglichen Szenen.",
      "Der Film und der Lotus helfen dabei, die Erinnerung im alltäglichen Erleben verständlich zu machen.",
      "Ein Fehler ist nicht Ihre ganze Identität.",
      "Unterscheiden Sie den Fehler einer Rolle davon, dass der Schöpfer diese Rolle erlebt.",
      "Sehen Sie denselben Schöpfer in beiden Rollen innerhalb der Meinungsverschiedenheit.",
      "Denken Sie an den Schöpfer, während Sie auf eine Szene warten, die Sie nicht diktieren können.",
      "Erleben Sie eine Szene vollständig und erinnern Sie sich gleichzeitig an den Schöpfer, der sie betreten hat.",
      "Treffen Sie eine Wahl innerhalb des Spiels, ohne die Kontrolle über das Design zu übernehmen.",
      "Platzieren Sie einen kleinen Teil der Schöpfung neben dem gemeinsamen Schöpfer in einer Beziehung.",
      "Derselbe Schöpfer in jeder Beziehung.",
      "Kümmere dich um die Schöpfung, die wir teilen.",
      "Ein Schöpfer. Viele Leben. Ein Erlebnisspiel.",
      "Gott verstehen. Denken Sie daran, wer wir sind.",
      "Machen Sie die göttliche Identität im Leben sichtbar.",
      "Das Verstehen Gottes schließt die Person vor uns ein.",
      "Klarheit verändert deine Welt. Gemeinsame Klarheit verändert das Yuga."
    ],
    "es": [
      "Somos el Creador: la única fuente compartida que experimenta la vida a través de todos nosotros. Creamos este juego de experiencias y entramos en sus distintas vidas y roles.",
      "Somos el Creador. Creamos este juego de experiencias y entramos en él. Como lo diseñamos antes de entrar, no podemos cambiar su diseño desde dentro del juego.",
      "Somos el Creador dentro del juego.",
      "Vuelve al Creador en cada escena.",
      "El loto: dentro de la vida, con un apego ligero a sus escenas pasajeras.",
      "La película y el loto ayudan a hacer comprensible el recuerdo durante la experiencia cotidiana.",
      "Un error no define toda tu identidad.",
      "Distingue el error de un papel del Creador que experimenta ese papel.",
      "Reconoce al mismo Creador en ambos papeles dentro del desacuerdo.",
      "Recuerda al Creador mientras esperas una escena que no puedes dictar.",
      "Vive plenamente una escena mientras recuerdas al Creador que entró en ella.",
      "Elige dentro del juego sin atribuirte el control de su diseño.",
      "Pon una pequeña parte de la creación al lado del Creador común presente en una relación.",
      "El mismo Creador en cada relación.",
      "Cuida la creación que compartimos.",
      "Un Creador. Muchas vidas. Un juego de experiencias.",
      "Comprende a Dios. Recuerda quiénes somos.",
      "Haz visible la identidad divina en la vida.",
      "Comprender a Dios incluye a la persona que tenemos delante.",
      "La claridad cambia tu mundo. La claridad compartida cambia el Yuga."
    ],
    "fr": [
      "Nous sommes le Créateur : la source commune qui fait l’expérience de la vie à travers nous tous. Nous avons créé ce jeu d’expériences et sommes entrés dans ses différentes vies et ses différents rôles.",
      "Nous sommes le Créateur. Nous avons créé ce jeu d’expériences et nous y sommes entrés. L’ayant conçu avant d’y entrer, nous ne pouvons pas en modifier la conception depuis l’intérieur du jeu.",
      "Nous sommes le Créateur au sein du jeu.",
      "Revenez au Créateur dans chaque scène.",
      "Le lotus : présent dans la vie, légèrement attaché à ses scènes passagères.",
      "Le film et le lotus aident à rendre le souvenir compréhensible au cours de l’expérience quotidienne.",
      "Une erreur ne définit pas toute votre identité.",
      "Distinguez l’erreur d’un rôle du Créateur qui vit ce rôle.",
      "Reconnaissez le même Créateur dans les deux rôles au sein du désaccord.",
      "Souvenez-vous du Créateur en attendant une scène dont vous ne pouvez pas dicter le déroulement.",
      "Vivez pleinement une scène en vous souvenant du Créateur qui y est entré.",
      "Faites un choix dans le jeu sans prétendre contrôler sa conception.",
      "Mettez une petite partie de la création en regard du Créateur commun dans une relation.",
      "Le même Créateur dans chaque relation.",
      "Prenez soin de la création que nous partageons.",
      "Un Créateur. De nombreuses vies. Un jeu d’expériences.",
      "Comprenez Dieu. Souvenez-vous de qui nous sommes.",
      "Rendez l’identité divine visible dans la vie.",
      "Comprendre Dieu inclut la personne devant nous.",
      "La clarté change votre monde. La clarté partagée change le Yuga."
    ],
    "gu": [
      "આપણે જ સર્જનહાર છીએ: આપણા બધા દ્વારા જીવનનો અનુભવ કરતો એક જ સહિયારો સ્રોત. આપણે અનુભવોની આ રમત રચી અને તેનાં વિવિધ જીવન અને ભૂમિકાઓમાં પ્રવેશ કર્યો.",
      "આપણે જ સર્જનહાર છીએ. અનુભવોની આ રમત આપણે સર્જી અને તેમાં પ્રવેશ કર્યો. પ્રવેશ કરતાં પહેલાં જ તેની રચના નક્કી કરી હોવાથી, રમતની અંદરથી તેની રચના બદલી શકતા નથી.",
      "રમતમાં આપણે સર્જક છીએ.",
      "દરેક દ્રશ્યમાં નિર્માતા પર પાછા ફરો.",
      "કમળ: જીવનની અંદર, તેના પસાર થતા દ્રશ્યો સાથે પ્રકાશ જોડાણ સાથે.",
      "મૂવી અને કમળ રોજિંદા અનુભવ દરમિયાન યાદને સમજી શકાય તેવું બનાવવામાં મદદ કરે છે.",
      "ભૂલ એ તમારી આખી ઓળખ નથી.",
      "તે ભૂમિકાનો અનુભવ કરી રહેલા સર્જકથી ભૂમિકાની ભૂલને અલગ પાડો.",
      "મતભેદની અંદર બંને ભૂમિકાઓમાં સમાન સર્જકને જુઓ.",
      "તમે નિર્દેશ ન કરી શકો તેવા દ્રશ્યની રાહ જોતી વખતે સર્જકને યાદ રાખો.",
      "તેમાં પ્રવેશનાર સર્જકને યાદ કરતી વખતે એક દ્રશ્યનો સંપૂર્ણ અનુભવ કરો.",
      "તેની ડિઝાઇન પર નિયંત્રણનો દાવો કર્યા વિના રમતમાં પસંદગી કરો.",
      "સંબંધમાં વહેંચાયેલ સર્જકની બાજુમાં સર્જનનો એક નાનો ભાગ મૂકો.",
      "દરેક સંબંધમાં એક જ સર્જક.",
      "અમે જે રચના શેર કરીએ છીએ તેની કાળજી રાખો.",
      "એક સર્જક. ઘણા જીવન. અનુભવોની રમત.",
      "ભગવાનને સમજો. યાદ રાખો કે આપણે કોણ છીએ.",
      "જીવનમાં દિવ્ય ઓળખનું દર્શન કરાવો.",
      "ભગવાનને સમજવામાં આપણા પહેલાંની વ્યક્તિનો સમાવેશ થાય છે.",
      "સ્પષ્ટતા તમારું વિશ્વ બદલે છે. સૌની સ્પષ્ટતા યુગ બદલે છે."
    ],
    "id": [
      "Kita adalah Sang Pencipta: satu sumber bersama yang mengalami kehidupan melalui kita semua. Kita menciptakan permainan pengalaman ini dan memasuki berbagai kehidupan serta peran di dalamnya.",
      "Kita adalah Sang Pencipta. Kita menciptakan permainan pengalaman ini dan memasukinya. Karena rancangannya telah kita tentukan sebelum masuk, kita tidak dapat mengubahnya dari dalam permainan.",
      "Kita adalah Pencipta dalam permainan.",
      "Kembali ke Sang Pencipta dalam setiap adegan.",
      "Teratai: dalam kehidupan, dengan keterikatan ringan pada pemandangan yang berlalu.",
      "Film dan teratai membantu membuat ingatan ini dapat dipahami selama pengalaman sehari-hari.",
      "Sebuah kesalahan bukanlah keseluruhan identitas Anda.",
      "Membedakan kesalahan suatu peran dari Sang Pencipta yang mengalami peran tersebut.",
      "Lihat Pencipta yang sama dalam kedua peran dalam perselisihan tersebut.",
      "Ingatlah Sang Pencipta sambil menunggu adegan yang tidak bisa Anda didiktekan.",
      "Alami suatu pemandangan seutuhnya sambil mengingat Sang Pencipta yang memasukinya.",
      "Tentukan pilihan dalam permainan tanpa mengklaim kendali atas desainnya.",
      "Tempatkan sebagian kecil ciptaan di samping Pencipta bersama dalam suatu hubungan.",
      "Pencipta yang sama dalam setiap hubungan.",
      "Peduli terhadap kreasi yang kita bagikan.",
      "Satu Sang Pencipta. Banyak kehidupan. Sebuah permainan pengalaman.",
      "Pahami Tuhan. Ingat siapa kita.",
      "Buat identitas ilahi terlihat dalam kehidupan.",
      "Memahami Tuhan mencakup orang di hadapan kita.",
      "Kejelasan mengubah duniamu. Kejelasan bersama mengubah Yuga."
    ],
    "it": [
      "Siamo il Creatore: l’unica fonte condivisa che fa esperienza della vita attraverso tutti noi. Abbiamo creato questo gioco di esperienze e siamo entrati nelle sue diverse vite e nei suoi ruoli.",
      "Noi siamo il Creatore. Abbiamo creato questo gioco di esperienze e vi siamo entrati. Avendone definito il disegno prima di entrarvi, non possiamo modificarlo dall’interno del gioco.",
      "Noi siamo il Creatore all'interno del gioco.",
      "Ritorna al Creatore in ogni scena.",
      "Il loto: nella vita, con un leggero attaccamento alle scene che passano.",
      "Il film e il loto aiutano a rendere comprensibile il ricordo durante l'esperienza quotidiana.",
      "Un errore non rappresenta tutta la tua identità.",
      "Distinguere l’errore di un ruolo dall’esperienza del Creatore in quel ruolo.",
      "Vedi lo stesso Creatore in entrambi i ruoli all'interno del disaccordo.",
      "Ricorda il Creatore mentre aspetti una scena che non puoi dettare.",
      "Sperimenta pienamente una scena ricordando il Creatore che vi è entrato.",
      "Fai una scelta all'interno del gioco senza rivendicare il controllo del suo design.",
      "Metti una piccola parte della creazione accanto al Creatore condiviso in una relazione.",
      "Lo stesso Creatore in ogni relazione.",
      "Prenditi cura della creazione che condividiamo.",
      "Un Creatore. Molte vite. Un gioco di esperienze.",
      "Comprendi Dio. Ricorda chi siamo.",
      "Rendere visibile nella vita l'identità divina.",
      "Comprendere Dio include la persona che abbiamo davanti.",
      "La chiarezza cambia il tuo mondo. La chiarezza condivisa cambia lo Yuga."
    ],
    "ja": [
      "私たちは創造主です。私たち全員を通して人生を体験する、一つの共通の源です。私たちはこの体験のゲームを創り、そのさまざまな人生や役割の中に入りました。",
      "私たちは創造主です。私たちはこの経験のゲームを創り、その中に入りました。入る前に全体の設計を定めたので、ゲームの内側からその設計を変えることはできません。",
      "私たちはゲーム内のクリエイターです。",
      "各シーン内で創造主に戻ります。",
      "蓮: 人生の中で、過ぎ行く情景に軽い愛着を持ちます。",
      "映画と蓮は、日常の経験の中で思い出を理解できるようにするのに役立ちます。",
      "間違いがあなたのアイデンティティのすべてではありません。",
      "役割の間違いと、その役割を経験している創造主を区別します。",
      "意見の相違の中で両方の役割を果たしているのは同じ創造主であると考えてください。",
      "自分では指示できないシーンを待っている間、創造主を思い出してください。",
      "その場面に入った創造主を思い出しながら、その場面を十分に体験してください。",
      "デザインの制御を主張することなく、ゲーム内で選択を行います。",
      "創造物の小さな一部を、関係において共有される創造主の隣に置きます。",
      "すべての関係において同じ創造主です。",
      "私たちが共有する創造物を大切にしてください。",
      "一人のクリエイター。たくさんの命。体験のゲーム。",
      "神を理解してください。私たちが誰であるかを思い出してください。",
      "神であることを生活の中で目に見えるようにしましょう。",
      "神を理解するということには、目の前の人も含まれます。",
      "理解が深まると、あなたの世界が変わります。皆の理解が深まると、ユガが変わります。"
    ],
    "kn": [
      "ನಾವೇ ಸೃಷ್ಟಿಕರ್ತರು: ನಮ್ಮೆಲ್ಲರ ಮೂಲಕ ಜೀವನವನ್ನು ಅನುಭವಿಸುವ ಒಂದೇ ಸಾಮಾನ್ಯ ಮೂಲ. ಅನುಭವಗಳ ಈ ಆಟವನ್ನು ನಾವೇ ಸೃಷ್ಟಿಸಿ, ಅದರ ವಿವಿಧ ಜೀವನಗಳು ಮತ್ತು ಪಾತ್ರಗಳನ್ನು ಪ್ರವೇಶಿಸಿದೆವು.",
      "ನಾವೇ ಸೃಷ್ಟಿಕರ್ತ. ಅನುಭವಗಳ ಈ ಆಟವನ್ನು ಸೃಷ್ಟಿಸಿ ಅದರೊಳಗೆ ಪ್ರವೇಶಿಸಿದ್ದೇವೆ. ಪ್ರವೇಶಿಸುವ ಮೊದಲೇ ಅದರ ವಿನ್ಯಾಸವನ್ನು ರೂಪಿಸಿರುವುದರಿಂದ, ಆಟದ ಒಳಗಿನಿಂದ ಆ ವಿನ್ಯಾಸವನ್ನು ಬದಲಾಯಿಸಲು ಸಾಧ್ಯವಿಲ್ಲ.",
      "ಆಟದೊಳಗೆ ನಾವೇ ಸೃಷ್ಟಿಕರ್ತರು.",
      "ಪ್ರತಿ ದೃಶ್ಯದಲ್ಲಿ ಸೃಷ್ಟಿಕರ್ತನಿಗೆ ಹಿಂತಿರುಗಿ.",
      "ಕಮಲ: ಜೀವನದೊಳಗೆ, ಅದರ ಹಾದುಹೋಗುವ ದೃಶ್ಯಗಳಿಗೆ ಲಘುವಾದ ಬಾಂಧವ್ಯದೊಂದಿಗೆ.",
      "ಚಲನಚಿತ್ರ ಮತ್ತು ಕಮಲವು ದೈನಂದಿನ ಅನುಭವದ ಸಮಯದಲ್ಲಿ ಸ್ಮರಣೆಯನ್ನು ಅರ್ಥವಾಗುವಂತೆ ಮಾಡಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ.",
      "ತಪ್ಪು ನಿಮ್ಮ ಸಂಪೂರ್ಣ ಗುರುತು ಅಲ್ಲ.",
      "ಸೃಷ್ಟಿಕರ್ತನು ಆ ಪಾತ್ರವನ್ನು ಅನುಭವಿಸುವುದರಿಂದ ಪಾತ್ರದ ತಪ್ಪನ್ನು ಪ್ರತ್ಯೇಕಿಸಿ.",
      "ಭಿನ್ನಾಭಿಪ್ರಾಯದೊಳಗೆ ಎರಡೂ ಪಾತ್ರಗಳಲ್ಲಿ ಒಂದೇ ಸೃಷ್ಟಿಕರ್ತನನ್ನು ನೋಡಿ.",
      "ನೀವು ನಿರ್ದೇಶಿಸಲು ಸಾಧ್ಯವಾಗದ ದೃಶ್ಯಕ್ಕಾಗಿ ಕಾಯುತ್ತಿರುವಾಗ ಸೃಷ್ಟಿಕರ್ತನನ್ನು ನೆನಪಿಸಿಕೊಳ್ಳಿ.",
      "ಒಂದು ದೃಶ್ಯವನ್ನು ಪ್ರವೇಶಿಸಿದ ಸೃಷ್ಟಿಕರ್ತನನ್ನು ಸ್ಮರಿಸುತ್ತಾ ಅದನ್ನು ಸಂಪೂರ್ಣವಾಗಿ ಅನುಭವಿಸಿ.",
      "ಅದರ ವಿನ್ಯಾಸದ ನಿಯಂತ್ರಣವನ್ನು ಕ್ಲೈಮ್ ಮಾಡದೆಯೇ ಆಟದೊಳಗೆ ಆಯ್ಕೆ ಮಾಡಿ.",
      "ಸಂಬಂಧದಲ್ಲಿ ಹಂಚಿಕೊಂಡ ಸೃಷ್ಟಿಕರ್ತನ ಪಕ್ಕದಲ್ಲಿ ಸೃಷ್ಟಿಯ ಸಣ್ಣ ಭಾಗವನ್ನು ಇರಿಸಿ.",
      "ಪ್ರತಿಯೊಂದು ಸಂಬಂಧದಲ್ಲೂ ಅದೇ ಸೃಷ್ಟಿಕರ್ತ.",
      "ನಾವು ಹಂಚಿಕೊಳ್ಳುವ ಸೃಷ್ಟಿಗೆ ಕಾಳಜಿ ವಹಿಸಿ.",
      "ಒಬ್ಬ ಸೃಷ್ಟಿಕರ್ತ. ಅನೇಕ ಜೀವಗಳು. ಅನುಭವಗಳ ಆಟ.",
      "ದೇವರನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ. ನಾವು ಯಾರೆಂದು ನೆನಪಿಡಿ.",
      "ಜೀವನದಲ್ಲಿ ದೈವಿಕ ಗುರುತನ್ನು ಗೋಚರಿಸುವಂತೆ ಮಾಡಿ.",
      "ದೇವರನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳುವುದು ನಮ್ಮ ಮುಂದೆ ಇರುವ ವ್ಯಕ್ತಿಯನ್ನು ಒಳಗೊಂಡಿರುತ್ತದೆ.",
      "ಸ್ಪಷ್ಟತೆ ನಿಮ್ಮ ಜಗತ್ತನ್ನು ಬದಲಿಸುತ್ತದೆ. ಎಲ್ಲರ ಸ್ಪಷ್ಟತೆ ಯುಗವನ್ನು ಬದಲಿಸುತ್ತದೆ."
    ],
    "ko": [
      "우리는 창조주입니다. 우리 모두를 통해 삶을 경험하는 하나의 공통된 근원입니다. 우리는 이 경험의 게임을 만들고 그 안의 다양한 삶과 역할로 들어왔습니다.",
      "우리는 창조자입니다. 우리는 이 경험의 게임을 만들고 그 안으로 들어왔습니다. 들어오기 전에 전체 설계를 정했으므로, 게임 안에서 그 설계를 바꿀 수는 없습니다.",
      "우리는 게임 내의 창조자입니다.",
      "각 장면 내에서 창조주에게로 돌아갑니다.",
      "연꽃: 인생 속에, 지나가는 장면에 대한 가벼운 애착이 있습니다.",
      "영화와 연꽃은 일상생활에서 기억을 이해할 수 있도록 도와줍니다.",
      "실수는 당신의 정체성 전체가 아닙니다.",
      "역할의 실수와 그 역할을 경험한 창조주를 구별하세요.",
      "불일치 내에서 두 역할 모두에서 동일한 제작자를 참조하십시오.",
      "당신이 지시할 수 없는 장면을 기다리는 동안 창조주를 기억하십시오.",
      "그 장면에 들어온 창조자를 기억하면서 그 장면을 온전히 경험하십시오.",
      "디자인에 대한 통제권을 주장하지 않고 게임 내에서 선택하십시오.",
      "관계 속에서 공유된 창조자 옆에 창조의 작은 부분을 놓으십시오.",
      "모든 관계에서 동일한 창조주.",
      "우리가 공유하는 창조물을 돌보세요.",
      "하나의 창조자. 많은 생명. 경험의 게임.",
      "하나님을 이해하십시오. 우리가 누구인지 기억하세요.",
      "삶에서 하나님의 신분을 볼 수 있게 하십시오.",
      "하나님을 이해하는 것은 우리 앞에 있는 사람을 포함합니다.",
      "명확한 이해는 당신의 세상을 바꿉니다. 함께하는 이해는 유가를 바꿉니다."
    ],
    "ml": [
      "നാം തന്നെയാണ് സ്രഷ്ടാവ്: നമ്മളെല്ലാവരിലൂടെയും ജീവിതം അനുഭവിക്കുന്ന ഒരേ പൊതു ഉറവിടം. അനുഭവങ്ങളുടെ ഈ കളി സൃഷ്ടിച്ച് അതിലെ വ്യത്യസ്ത ജീവിതങ്ങളിലും വേഷങ്ങളിലും നാം പ്രവേശിച്ചു.",
      "നാം തന്നെയാണ് സ്രഷ്ടാവ്. അനുഭവങ്ങളുടെ ഈ കളി സൃഷ്ടിച്ച് നാം അതിലേക്ക് പ്രവേശിച്ചു. പ്രവേശിക്കുന്നതിന് മുമ്പേ അതിന്റെ രൂപരേഖ നിശ്ചയിച്ചതിനാൽ, കളിക്കുള്ളിൽ നിന്ന് ആ രൂപരേഖ മാറ്റാൻ നമുക്ക് കഴിയില്ല.",
      "ഗെയിമിനുള്ളിലെ സ്രഷ്ടാവ് ഞങ്ങളാണ്.",
      "ഓരോ സീനിലും സ്രഷ്ടാവിലേക്ക് മടങ്ങുക.",
      "താമര: ജീവിതത്തിനുള്ളിൽ, അതിൻ്റെ കടന്നുപോകുന്ന രംഗങ്ങളോട് നേരിയ അറ്റാച്ച്മെൻ്റ്.",
      "അനുദിന അനുഭവത്തിൽ അനുസ്മരണത്തെ മനസ്സിലാക്കാൻ സിനിമയും താമരയും സഹായിക്കുന്നു.",
      "ഒരു തെറ്റ് നിങ്ങളുടെ മുഴുവൻ വ്യക്തിത്വമല്ല.",
      "ഒരു റോളിൻ്റെ തെറ്റ് ആ റോൾ അനുഭവിക്കുന്ന സ്രഷ്ടാവിൽ നിന്ന് വേർതിരിക്കുക.",
      "വിയോജിപ്പിനുള്ളിൽ രണ്ട് വേഷങ്ങളിലും ഒരേ സ്രഷ്ടാവിനെ കാണുക.",
      "നിങ്ങൾക്ക് കൽപ്പിക്കാൻ കഴിയാത്ത ഒരു ദൃശ്യത്തിനായി കാത്തിരിക്കുമ്പോൾ സ്രഷ്ടാവിനെ ഓർക്കുക.",
      "ഒരു രംഗം അതിൽ പ്രവേശിച്ച സ്രഷ്ടാവിനെ ഓർക്കുമ്പോൾ പൂർണ്ണമായി അനുഭവിക്കുക.",
      "കളിയുടെ രൂപകൽപ്പനയുടെ നിയന്ത്രണം അവകാശപ്പെടാതെ തന്നെ കളിക്കുള്ളിൽ ഒരു തിരഞ്ഞെടുപ്പ് നടത്തുക.",
      "സൃഷ്ടിയുടെ ഒരു ചെറിയ ഭാഗം ഒരു ബന്ധത്തിൽ പങ്കിട്ട സ്രഷ്ടാവിൻ്റെ അരികിൽ വയ്ക്കുക.",
      "എല്ലാ ബന്ധങ്ങളിലും ഒരേ സ്രഷ്ടാവ്.",
      "ഞങ്ങൾ പങ്കിടുന്ന സൃഷ്ടിയെ പരിപാലിക്കുക.",
      "ഒരു സ്രഷ്ടാവ്. ഒരുപാട് ജീവിതങ്ങൾ. അനുഭവങ്ങളുടെ കളി.",
      "ദൈവത്തെ മനസ്സിലാക്കുക. നമ്മൾ ആരാണെന്ന് ഓർക്കുക.",
      "ദൈവിക സ്വത്വം ജീവിതത്തിൽ ദൃശ്യമാക്കുക.",
      "ദൈവത്തെ മനസ്സിലാക്കുന്നതിൽ നമ്മുടെ മുന്നിലുള്ള വ്യക്തി ഉൾപ്പെടുന്നു.",
      "വ്യക്തത നിങ്ങളുടെ ലോകത്തെ മാറ്റുന്നു. എല്ലാവരുടെയും വ്യക്തത യുഗത്തെ മാറ്റുന്നു."
    ],
    "mr": [
      "आपणच सृष्टिकर्ता आहोत: आपल्या सर्वांमधून जीवनाचा अनुभव घेणारा एकच सामायिक स्रोत. आपण अनुभवांचा हा खेळ निर्माण केला आणि त्यातील विविध जीवनांत व भूमिकांत प्रवेश केला.",
      "आपणच सृष्टीकर्ता आहोत. अनुभवांचा हा खेळ आपण निर्माण केला आणि त्यात प्रवेश केला. प्रवेश करण्यापूर्वीच त्याची रचना ठरवली असल्यामुळे, खेळाच्या आतून ती रचना बदलू शकत नाही.",
      "आम्ही खेळातील निर्माता आहोत.",
      "प्रत्येक दृश्यात निर्मात्याकडे परत या.",
      "कमळ: जीवनात, त्याच्या उत्तीर्ण दृश्यांना प्रकाश जोडणारा.",
      "चित्रपट आणि कमळ रोजच्या अनुभवात स्मरण समजण्यास मदत करतात.",
      "चूक ही तुमची संपूर्ण ओळख नाही.",
      "त्या भूमिकेचा अनुभव घेत असलेल्या निर्मात्याकडून भूमिकेची चूक ओळखा.",
      "मतभेदात दोन्ही भूमिकांमध्ये एकच निर्माता पहा.",
      "आपण हुकूम देऊ शकत नाही अशा दृश्याची वाट पाहत असताना निर्मात्याला लक्षात ठेवा.",
      "एखाद्या दृश्यात प्रवेश करणाऱ्या निर्मात्याचे स्मरण करताना पूर्णतः अनुभव घ्या.",
      "खेळात त्याच्या डिझाइनच्या नियंत्रणाचा दावा न करता निवड करा.",
      "नातेसंबंधात सामायिक केलेल्या निर्मात्याच्या बाजूला निर्मितीचा एक छोटासा भाग ठेवा.",
      "प्रत्येक नात्यात तोच निर्माता.",
      "आम्ही शेअर करत असलेल्या निर्मितीची काळजी घ्या.",
      "एक निर्माता. अनेक जीव. अनुभवांचा खेळ.",
      "देव समजून घ्या. आपण कोण आहोत हे लक्षात ठेवा.",
      "जीवनात दैवी ओळख निर्माण करा.",
      "देवाला समजून घेण्यात आपल्यासमोर असलेल्या व्यक्तीचा समावेश होतो.",
      "स्पष्टता तुमचे जग बदलते. सर्वांची स्पष्टता युग बदलते."
    ],
    "nb": [
      "Vi er Skaperen: den ene felles kilden som opplever livet gjennom oss alle. Vi skapte dette spillet av opplevelser og gikk inn i dets forskjellige liv og roller.",
      "Vi er Skaperen. Vi skapte dette spillet av opplevelser og gikk inn i det. Fordi vi utformet det før vi gikk inn, kan vi ikke endre utformingen innenfra spillet.",
      "Vi er skaperen i spillet.",
      "Gå tilbake til skaperen i hver scene.",
      "Lotusen: i livet, med lys tilknytning til dets forbigående scener.",
      "Filmen og lotusen bidrar til å gjøre erindring forståelig under hverdagsopplevelsen.",
      "En feil er ikke hele identiteten din.",
      "Skille en rolles feil fra Skaperen som opplever den rollen.",
      "Se den samme Skaperen i begge rollene i uenigheten.",
      "Husk Skaperen mens du venter på en scene du ikke kan diktere.",
      "Opplev en scene fullt ut mens du husker Skaperen som kom inn i den.",
      "Ta et valg i spillet uten å kreve kontroll over designet.",
      "Plasser en liten del av skaperverket ved siden av den delte skaperen i et forhold.",
      "Den samme skaperen i alle forhold.",
      "Ta vare på skapelsen vi deler.",
      "Én skaper. Mange liv. Et spill med opplevelser.",
      "Forstå Gud. Husk hvem vi er.",
      "Gjør den guddommelige identiteten synlig i livet.",
      "Å forstå Gud inkluderer personen foran oss.",
      "Klarhet endrer din verden. Felles klarhet endrer Yugaen."
    ],
    "nl": [
      "Wij zijn de Schepper: de ene gedeelde bron die het leven door ons allemaal ervaart. We hebben dit spel van ervaringen geschapen en zijn de verschillende levens en rollen ervan binnengegaan.",
      "Wij zijn de Schepper. Wij hebben dit spel van ervaringen geschapen en zijn erin gestapt. Omdat wij het hebben ontworpen voordat wij erin stapten, kunnen wij het ontwerp niet van binnenuit het spel veranderen.",
      "Wij zijn de Schepper binnen het spel.",
      "Keer in elke scène terug naar de Schepper.",
      "De lotus: in het leven, met lichte gehechtheid aan de voorbijgaande scènes.",
      "De film en de lotus helpen de herinnering begrijpelijk te maken tijdens de dagelijkse ervaring.",
      "Een fout is niet je hele identiteit.",
      "Maak onderscheid tussen de fout in een rol en de Schepper die die rol ervaart.",
      "Zie dezelfde Schepper in beide rollen binnen het meningsverschil.",
      "Denk aan de Schepper terwijl je wacht op een scène die je niet kunt dicteren.",
      "Ervaar een scène volledig terwijl je de Schepper herinnert die erin is betreden.",
      "Maak een keuze binnen het spel zonder de controle over het ontwerp te claimen.",
      "Plaats een klein deel van de schepping naast de gedeelde Schepper in een relatie.",
      "Dezelfde Schepper in elke relatie.",
      "Zorg voor de creatie die we delen.",
      "Eén Schepper. Veel levens. Een spel van ervaringen.",
      "Begrijp God. Onthoud wie we zijn.",
      "Maak de goddelijke identiteit zichtbaar in het leven.",
      "Het begrijpen van God omvat ook de persoon vóór ons.",
      "Helderheid verandert jouw wereld. Gedeelde helderheid verandert de Yuga."
    ],
    "or": [
      "ଆମେ ହିଁ ସ୍ରଷ୍ଟା: ଆମ ସମସ୍ତଙ୍କ ମାଧ୍ୟମରେ ଜୀବନକୁ ଅନୁଭବ କରୁଥିବା ଏକ ସାଧାରଣ ମୂଳ ଉତ୍ସ। ଆମେ ଅନୁଭବର ଏହି ଖେଳ ସୃଷ୍ଟି କରି ଏହାର ବିଭିନ୍ନ ଜୀବନ ଓ ଭୂମିକାରେ ପ୍ରବେଶ କଲୁ।",
      "ଆମେ ହିଁ ସୃଷ୍ଟିକର୍ତ୍ତା। ଅନୁଭବର ଏହି ଖେଳ ଆମେ ସୃଷ୍ଟି କରି ଏଥିରେ ପ୍ରବେଶ କରିଛୁ। ପ୍ରବେଶ କରିବା ପୂର୍ବରୁ ଏହାର ରୂପରେଖା ନିର୍ଦ୍ଧାରଣ କରିଥିବାରୁ, ଖେଳ ଭିତରୁ ସେହି ରୂପରେଖା ବଦଳାଇପାରିବୁ ନାହିଁ।",
      "ଆମେ ଖେଳ ମଧ୍ୟରେ ସୃଷ୍ଟିକର୍ତ୍ତା ।",
      "ପ୍ରତ୍ୟେକ ଦୃଶ୍ୟ ମଧ୍ୟରେ ସୃଷ୍ଟିକର୍ତ୍ତାଙ୍କୁ ଫେରନ୍ତୁ ।",
      "କମଲ: ଜୀବନ ଭିତରେ, ଏହାର ଅତିକ୍ରମ କରୁଥିବା ଦୃଶ୍ୟଗୁଡ଼ିକ ସହିତ ଆଲୋକ ସଂଲଗ୍ନ ।",
      "ଚଳଚ୍ଚିତ୍ର ଏବଂ କମଲ ଦୈନନ୍ଦିନ ଅଭିଜ୍ଞତା ସମୟରେ ସ୍ମରଣକୁ ବୁଝିବାରେ ସାହାଯ୍ୟ କରିଥାଏ ।",
      "ଏକ ଭୁଲ ତୁମର ସମ୍ପୂର୍ଣ୍ଣ ପରିଚୟ ନୁହେଁ ।",
      "ସେହି ଭୂମିକାକୁ ଅନୁଭବ କରୁଥିବା ସୃଷ୍ଟିକର୍ତ୍ତାଙ୍କଠାରୁ ଏକ ଭୂମିକାର ଭୁଲକୁ ପୃଥକ କର ।",
      "ମତଭେଦ ମଧ୍ୟରେ ଉଭୟ ଭୂମିକାରେ ସମାନ ସୃଷ୍ଟିକର୍ତ୍ତାଙ୍କୁ ଦେଖନ୍ତୁ ।",
      "ଏକ ଦୃଶ୍ୟକୁ ଅପେକ୍ଷା କରିବା ସମୟରେ ସୃଷ୍ଟିକର୍ତ୍ତାଙ୍କୁ ମନେରଖ, ଯାହା ତୁମେ କହିପାରିବ ନାହିଁ ।",
      "ଏଥିରେ ପ୍ରବେଶ କରିଥିବା ସୃଷ୍ଟିକର୍ତ୍ତାଙ୍କୁ ମନେ ରଖିବାବେଳେ ଏକ ଦୃଶ୍ୟକୁ ସମ୍ପୂର୍ଣ୍ଣରୂପେ ଅନୁଭବ କରନ୍ତୁ ।",
      "ଏହାର ଡିଜାଇନ୍ ଉପରେ ନିୟନ୍ତ୍ରଣ ନକରି ଖେଳ ମଧ୍ୟରେ ଏକ ପସନ୍ଦ କରନ୍ତୁ ।",
      "ଏକ ସମ୍ପର୍କରେ ଅଂଶୀଦାର ସୃଷ୍ଟିକର୍ତ୍ତାଙ୍କ ନିକଟରେ ସୃଷ୍ଟିର ଏକ ଛୋଟ ଅଂଶ ରଖନ୍ତୁ ।",
      "ପ୍ରତ୍ୟେକ ସଂପର୍କରେ ସମାନ ସୃଷ୍ଟିକର୍ତ୍ତା ।",
      "ଆମେ ଅଂଶୀଦାର ସୃଷ୍ଟି ପାଇଁ ଯତ୍ନ ନିଅ ।",
      "ଜଣେ ସୃଷ୍ଟିକର୍ତ୍ତା । ଅନେକ ଜୀବନ । ଅନୁଭୂତିର ଏକ ଖେଳ ।",
      "ଭଗବାନଙ୍କୁ ବୁଝନ୍ତୁ । ମନେରଖ ଯେ ଆମେ କିଏ ।",
      "ଜୀବନରେ ଈଶ୍ୱରୀୟ ପରିଚୟକୁ ଦୃଶ୍ୟମାନ କର ।",
      "ଭଗବାନଙ୍କୁ ବୁଝିବା ଆମ ଆଗରେ ଥିବା ବ୍ୟକ୍ତିଙ୍କୁ ଅନ୍ତର୍ଭୁକ୍ତ କରେ ।",
      "ସ୍ପଷ୍ଟତା ଆପଣଙ୍କ ଜଗତକୁ ବଦଳାଏ। ସମସ୍ତଙ୍କ ସ୍ପଷ୍ଟତା ଯୁଗକୁ ବଦଳାଏ।"
    ],
    "pa": [
      "ਅਸੀਂ ਹੀ ਸਿਰਜਣਹਾਰ ਹਾਂ: ਸਾਡੇ ਸਾਰਿਆਂ ਰਾਹੀਂ ਜੀਵਨ ਦਾ ਅਨੁਭਵ ਕਰਨ ਵਾਲਾ ਇੱਕੋ ਸਾਂਝਾ ਸਰੋਤ। ਅਸੀਂ ਅਨੁਭਵਾਂ ਦੀ ਇਹ ਖੇਡ ਬਣਾਈ ਅਤੇ ਇਸ ਦੇ ਵੱਖ-ਵੱਖ ਜੀਵਨਾਂ ਅਤੇ ਭੂਮਿਕਾਵਾਂ ਵਿੱਚ ਪ੍ਰਵੇਸ਼ ਕੀਤਾ।",
      "ਅਸੀਂ ਹੀ ਸਿਰਜਣਹਾਰ ਹਾਂ। ਅਨੁਭਵਾਂ ਦੀ ਇਹ ਖੇਡ ਅਸੀਂ ਬਣਾਈ ਅਤੇ ਇਸ ਵਿੱਚ ਦਾਖ਼ਲ ਹੋਏ। ਦਾਖ਼ਲ ਹੋਣ ਤੋਂ ਪਹਿਲਾਂ ਹੀ ਇਸ ਦੀ ਰਚਨਾ ਤੈਅ ਕੀਤੀ ਸੀ, ਇਸ ਲਈ ਖੇਡ ਦੇ ਅੰਦਰੋਂ ਇਸ ਦੀ ਰਚਨਾ ਨਹੀਂ ਬਦਲ ਸਕਦੇ।",
      "ਅਸੀਂ ਖੇਡ ਦੇ ਅੰਦਰ ਸਿਰਜਣਹਾਰ ਹਾਂ.",
      "ਹਰੇਕ ਦ੍ਰਿਸ਼ ਦੇ ਅੰਦਰ ਸਿਰਜਣਹਾਰ ਵੱਲ ਵਾਪਸ ਜਾਓ।",
      "ਕਮਲ: ਜੀਵਨ ਦੇ ਅੰਦਰ, ਇਸਦੇ ਗੁਜ਼ਰਦੇ ਦ੍ਰਿਸ਼ਾਂ ਨਾਲ ਪ੍ਰਕਾਸ਼ ਲਗਾਵ ਦੇ ਨਾਲ।",
      "ਫਿਲਮ ਅਤੇ ਕਮਲ ਰੋਜ਼ਾਨਾ ਅਨੁਭਵ ਦੌਰਾਨ ਯਾਦ ਨੂੰ ਸਮਝਣ ਯੋਗ ਬਣਾਉਣ ਵਿੱਚ ਮਦਦ ਕਰਦੇ ਹਨ।",
      "ਇੱਕ ਗਲਤੀ ਤੁਹਾਡੀ ਪੂਰੀ ਪਛਾਣ ਨਹੀਂ ਹੈ।",
      "ਕਿਸੇ ਭੂਮਿਕਾ ਦੀ ਗਲਤੀ ਨੂੰ ਉਸ ਭੂਮਿਕਾ ਦਾ ਅਨੁਭਵ ਕਰ ਰਹੇ ਸਿਰਜਣਹਾਰ ਤੋਂ ਵੱਖਰਾ ਕਰੋ।",
      "ਅਸਹਿਮਤੀ ਦੇ ਅੰਦਰ ਦੋਵਾਂ ਭੂਮਿਕਾਵਾਂ ਵਿੱਚ ਇੱਕੋ ਸਿਰਜਣਹਾਰ ਨੂੰ ਦੇਖੋ।",
      "ਉਸ ਦ੍ਰਿਸ਼ ਦੀ ਉਡੀਕ ਕਰਦੇ ਹੋਏ ਸਿਰਜਣਹਾਰ ਨੂੰ ਯਾਦ ਰੱਖੋ ਜਿਸ ਨੂੰ ਤੁਸੀਂ ਹੁਕਮ ਨਹੀਂ ਦੇ ਸਕਦੇ।",
      "ਸਿਰਜਣਹਾਰ ਨੂੰ ਯਾਦ ਕਰਦੇ ਹੋਏ ਇੱਕ ਦ੍ਰਿਸ਼ ਦਾ ਪੂਰੀ ਤਰ੍ਹਾਂ ਅਨੁਭਵ ਕਰੋ ਜਿਸਨੇ ਇਸ ਵਿੱਚ ਪ੍ਰਵੇਸ਼ ਕੀਤਾ ਹੈ।",
      "ਇਸਦੇ ਡਿਜ਼ਾਈਨ 'ਤੇ ਨਿਯੰਤਰਣ ਦਾ ਦਾਅਵਾ ਕੀਤੇ ਬਿਨਾਂ ਗੇਮ ਦੇ ਅੰਦਰ ਇੱਕ ਚੋਣ ਕਰੋ।",
      "ਇੱਕ ਰਿਸ਼ਤੇ ਵਿੱਚ ਸਾਂਝੇ ਸਿਰਜਣਹਾਰ ਦੇ ਕੋਲ ਰਚਨਾ ਦਾ ਇੱਕ ਛੋਟਾ ਜਿਹਾ ਹਿੱਸਾ ਰੱਖੋ.",
      "ਹਰ ਰਿਸ਼ਤੇ ਵਿੱਚ ਉਹੀ ਕਰਤਾਰ।",
      "ਉਸ ਰਚਨਾ ਦੀ ਦੇਖਭਾਲ ਕਰੋ ਜਿਸ ਨੂੰ ਅਸੀਂ ਸਾਂਝਾ ਕਰਦੇ ਹਾਂ।",
      "ਇੱਕ ਸਿਰਜਣਹਾਰ. ਕਈ ਜਾਨਾਂ। ਅਨੁਭਵਾਂ ਦੀ ਇੱਕ ਖੇਡ।",
      "ਰੱਬ ਨੂੰ ਸਮਝੋ। ਯਾਦ ਰੱਖੋ ਕਿ ਅਸੀਂ ਕੌਣ ਹਾਂ।",
      "ਰੱਬੀ ਪਛਾਣ ਨੂੰ ਜੀਵਨ ਵਿੱਚ ਪ੍ਰਤੱਖ ਬਣਾਉ।",
      "ਪ੍ਰਮਾਤਮਾ ਨੂੰ ਸਮਝਣ ਵਿੱਚ ਸਾਡੇ ਤੋਂ ਪਹਿਲਾਂ ਵਾਲਾ ਵਿਅਕਤੀ ਸ਼ਾਮਲ ਹੈ।",
      "ਸਪਸ਼ਟਤਾ ਤੁਹਾਡਾ ਸੰਸਾਰ ਬਦਲਦੀ ਹੈ। ਸਭ ਦੀ ਸਪਸ਼ਟਤਾ ਯੁਗ ਬਦਲਦੀ ਹੈ।"
    ],
    "pl": [
      "Jesteśmy Stwórcą: jednym wspólnym źródłem doświadczającym życia przez nas wszystkich. Stworzyliśmy tę grę doświadczeń i weszliśmy w jej różne życia i role.",
      "Jesteśmy Stwórcą. Stworzyliśmy tę grę doświadczeń i weszliśmy do niej. Ponieważ określiliśmy jej cały zamysł przed wejściem, nie możemy zmienić go od wewnątrz gry.",
      "Jesteśmy Stwórcą w grze.",
      "Powróć do Stwórcy w każdej scenie.",
      "Lotos: w życiu, z lekkim przywiązaniem do przemijających scen.",
      "Film i lotos pomagają uczynić pamięć zrozumiałą podczas codziennych doświadczeń.",
      "Błąd nie jest całą twoją tożsamością.",
      "Odróżnij błąd roli od doświadczenia tej roli przez Stwórcę.",
      "W ramach sporu zobacz tego samego Stwórcę w obu rolach.",
      "Pamiętaj o Stwórcy, czekając na scenę, której nie możesz narzucić.",
      "Przeżyj w pełni daną scenę, pamiętając o Stwórcy, który w nią wszedł.",
      "Dokonuj wyboru w grze, nie przejmując kontroli nad jej projektem.",
      "Umieść małą część stworzenia obok wspólnego Stwórcy w związku.",
      "Ten sam Stwórca w każdym związku.",
      "Dbaj o dzieło, które dzielimy.",
      "Jeden Stwórca. Wiele żyć. Gra doświadczeń.",
      "Zrozumieć Boga. Pamiętaj kim jesteśmy.",
      "Uczyńcie Boską tożsamość widoczną w życiu.",
      "Zrozumienie Boga obejmuje osobę stojącą przed nami.",
      "Jasność zmienia twój świat. Wspólna jasność zmienia jugę."
    ],
    "pt": [
      "Somos o Criador: a única fonte compartilhada que experimenta a vida através de todos nós. Criamos este jogo de experiências e entramos em suas diferentes vidas e papéis.",
      "Nós somos o Criador. Criamos este jogo de experiências e entramos nele. Como definimos seu plano antes de entrar, não podemos alterá-lo de dentro do jogo.",
      "Nós somos o Criador dentro do jogo.",
      "Retorne ao Criador em cada cena.",
      "O lótus: dentro da vida, com leve apego às suas cenas passageiras.",
      "O filme e o lótus ajudam a tornar a lembrança compreensível durante a experiência cotidiana.",
      "Um erro não é toda a sua identidade.",
      "Distinga o erro de um papel do Criador que experimenta esse papel.",
      "Veja o mesmo Criador em ambos os papéis dentro do desacordo.",
      "Lembre-se do Criador enquanto espera por uma cena que você não pode ditar.",
      "Experimente uma cena plenamente enquanto se lembra do Criador que entrou nela.",
      "Faça uma escolha dentro do jogo sem reivindicar o controle de seu design.",
      "Coloque uma pequena parte da criação ao lado do Criador comcompartilhado num relacionamento.",
      "O mesmo Criador em todos os relacionamentos.",
      "Cuide da criação que comcompartilhamos.",
      "Um Criador. Muitas vidas. Um jogo de experiências.",
      "Compreenda Deus. Lembre quem somos.",
      "Torne a identidade divina visível na vida.",
      "Compreender Deus inclui a pessoa à nossa frente.",
      "A clareza muda seu mundo. A clareza compartilhada muda o Yuga."
    ],
    "ro": [
      "Noi suntem Creatorul: unica sursă comună care trăiește viața prin noi toți. Am creat acest joc al experiențelor și am intrat în diferitele sale vieți și roluri.",
      "Noi suntem Creatorul. Am creat acest joc al experiențelor și am intrat în el. Deoarece l-am conceput înainte de a intra, nu îi putem schimba planul din interiorul jocului.",
      "Noi suntem Creatorul în joc.",
      "Întoarce-te la Creator în fiecare scenă.",
      "Lotusul: în viață, cu atașament ușor față de scenele sale trecătoare.",
      "Filmul și lotusul ajută la înțelesul amintirii în timpul experienței de zi cu zi.",
      "O greșeală nu este întreaga ta identitate.",
      "Distingeți greșeala unui rol de Creatorul care se confruntă cu acel rol.",
      "Vedeți același Creator în ambele roluri în cadrul dezacordului.",
      "Amintiți-vă de Creator în timp ce așteptați o scenă pe care nu o puteți dicta.",
      "Experimentați pe deplin o scenă în timp ce vă amintiți de Creatorul care a intrat în ea.",
      "Faceți o alegere în cadrul jocului fără a pretinde controlul asupra designului său.",
      "Pune o mică parte din creație lângă Creatorul comun într-o relație.",
      "Același Creator în fiecare relație.",
      "Aveți grijă de creația pe care o împărtășim.",
      "Un singur Creator. Multe vieți. Un joc de experiențe.",
      "Înțelege-L pe Dumnezeu. Amintește-ți cine suntem.",
      "Faceți identitatea divină vizibilă în viață.",
      "Înțelegerea lui Dumnezeu include persoana din fața noastră.",
      "Claritatea îți schimbă lumea. Claritatea comună schimbă Yuga."
    ],
    "ru": [
      "Мы — Творец: единый общий источник, переживающий жизнь через всех нас. Мы создали эту игру переживаний и вошли в её разные жизни и роли.",
      "Мы — Творец. Мы создали эту игру переживаний и вошли в неё. Поскольку её замысел был определён до нашего входа, мы не можем изменить его изнутри игры.",
      "Мы – Творцы в игре.",
      "Возвращение к Создателю в каждой сцене.",
      "Лотос: внутри жизни, с легкой привязанностью к ее мимолетным сценам.",
      "Фильм и лотос помогают сделать воспоминания понятными в повседневной жизни.",
      "Ошибка – это не вся ваша личность.",
      "Отличайте ошибку роли от ошибки Создателя, переживающего эту роль.",
      "Увидьте одного и того же Создателя в обеих ролях внутри разногласия.",
      "Помните о Создателе, ожидая сцены, которую вы не можете продиктовать.",
      "Полностью переживите сцену, помня Создателя, который вошел в нее.",
      "Сделайте выбор в игре, не требуя контроля над ее дизайном.",
      "Поместите небольшую часть творения рядом с общим Творцом в отношениях.",
      "Один и тот же Создатель во всех отношениях.",
      "Заботьтесь о творении, которое мы разделяем.",
      "Один Создатель. Много жизней. Игра впечатлений.",
      "Поймите Бога. Помните, кто мы.",
      "Сделайте божественную идентичность видимой в жизни.",
      "Понимание Бога включает в себя человека перед нами.",
      "Ясность меняет ваш мир. Общая ясность меняет югу."
    ],
    "sv": [
      "Vi är Skaparen: den enda gemensamma källan som upplever livet genom oss alla. Vi skapade detta spel av upplevelser och trädde in i dess olika liv och roller.",
      "Vi är Skaparen. Vi skapade detta spel av upplevelser och trädde in i det. Eftersom vi utformade det innan vi trädde in, kan vi inte ändra dess utformning inifrån spelet.",
      "Vi är skaparen i spelet.",
      "Återgå till Skaparen inom varje scen.",
      "Lotusen: i livet, med ljus fäste vid dess förbigående scener.",
      "Filmen och lotusblomma hjälper till att göra minnet förståeligt under vardagliga upplevelser.",
      "Ett misstag är inte hela din identitet.",
      "Skilj en rolls misstag från Skaparen som upplever den rollen.",
      "Se samma Skapare i båda rollerna i oenigheten.",
      "Kom ihåg Skaparen medan du väntar på en scen du inte kan diktera.",
      "Upplev en scen fullt ut samtidigt som du minns Skaparen som gick in i den.",
      "Gör ett val inom spelet utan att ta kontroll över dess design.",
      "Placera en liten del av skapelsen bredvid den delade Skaparen i en relation.",
      "Samma Skapare i varje relation.",
      "Ta hand om det skapande vi delar.",
      "En skapare. Många liv. Ett spel med upplevelser.",
      "Förstå Gud. Kom ihåg vilka vi är.",
      "Gör den gudomliga identiteten synlig i livet.",
      "Att förstå Gud inkluderar personen framför oss.",
      "Klarhet förändrar din värld. Gemensam klarhet förändrar Yugan."
    ],
    "ta": [
      "நாமே படைப்பாளர்: நம் அனைவரின் வழியாகவும் வாழ்க்கையை அனுபவிக்கும் ஒரே பொதுவான மூலம். அனுபவங்களின் இந்த விளையாட்டை உருவாக்கி, அதன் வெவ்வேறு வாழ்க்கைகளிலும் பாத்திரங்களிலும் நுழைந்தோம்.",
      "நாமே படைப்பாளர். அனுபவங்களின் இந்த விளையாட்டை உருவாக்கி அதற்குள் நுழைந்தோம். உள்ளே நுழைவதற்கு முன்பே அதன் வடிவமைப்பை நிர்ணயித்ததால், விளையாட்டிற்குள் இருந்து அதை மாற்ற முடியாது.",
      "விளையாட்டிற்குள் நாம் படைப்பாளிகள்.",
      "ஒவ்வொரு காட்சியிலும் படைப்பாளரிடம் திரும்பவும்.",
      "தாமரை: வாழ்க்கைக்குள், அதன் கடந்து செல்லும் காட்சிகளில் லேசான இணைப்புடன்.",
      "திரைப்படமும் தாமரையும் அன்றாட அனுபவத்தின் போது நினைவாற்றலைப் புரிந்துகொள்ள உதவுகின்றன.",
      "ஒரு தவறு உங்கள் முழு அடையாளம் அல்ல.",
      "ஒரு பாத்திரத்தின் தவறை அந்த பாத்திரத்தை உருவாக்கியவரிடமிருந்து வேறுபடுத்துங்கள்.",
      "கருத்து வேறுபாடு உள்ள இரு பாத்திரங்களிலும் ஒரே படைப்பாளியைப் பார்க்கவும்.",
      "உங்களால் கட்டளையிட முடியாத காட்சிக்காக காத்திருக்கும் போது படைப்பாளரை நினைவு செய்யுங்கள்.",
      "ஒரு காட்சியை அதில் நுழைந்த படைப்பாளியை நினைவு கூர்ந்து முழுமையாக அனுபவிக்கவும்.",
      "விளையாட்டின் வடிவமைப்பின் கட்டுப்பாட்டைக் கோராமல் விளையாட்டிற்குள் தேர்வு செய்யுங்கள்.",
      "ஒரு உறவில் பகிர்ந்த படைப்பாளரின் அருகில் படைப்பின் சிறிய பகுதியை வைக்கவும்.",
      "எல்லா உறவுகளிலும் ஒரே படைப்பாளி.",
      "நாம் பகிர்ந்து கொள்ளும் படைப்பை கவனியுங்கள்.",
      "ஒரு படைப்பாளி. பல உயிர்கள். அனுபவங்களின் விளையாட்டு.",
      "கடவுளை புரிந்து கொள்ளுங்கள். நாம் யார் என்பதை நினைவில் கொள்ளுங்கள்.",
      "தெய்வீக அடையாளத்தை வாழ்க்கையில் காணச் செய்யுங்கள்.",
      "கடவுளைப் புரிந்துகொள்வது நமக்கு முன்னால் இருக்கும் நபரை உள்ளடக்கியது.",
      "தெளிவு உங்கள் உலகத்தை மாற்றுகிறது. அனைவரின் தெளிவு யுகத்தை மாற்றுகிறது."
    ],
    "tr": [
      "Biz Yaratıcı’yız: hepimiz aracılığıyla hayatı deneyimleyen tek ortak kaynak. Bu deneyimler oyununu yarattık ve onun farklı yaşamlarına ve rollerine girdik.",
      "Biz Yaratıcıyız. Bu deneyimler oyununu biz yarattık ve içine girdik. İçine girmeden önce bütün tasarımını belirlediğimiz için, oyunun içinden bu tasarımı değiştiremeyiz.",
      "Oyunun içindeki Yaratıcı biziz.",
      "Her sahnede Yaratıcıya dönün.",
      "Nilüfer: yaşamın içinde, geçip giden sahnelere ışık bağlılığıyla.",
      "Film ve nilüfer, günlük deneyimlerde hatırlamanın anlaşılır olmasına yardımcı olur.",
      "Bir hata kimliğinizin tamamı değildir.",
      "Bir rolün hatasını o rolü deneyimleyen Yaratıcıdan ayırın.",
      "Anlaşmazlıktaki her iki rolde de aynı Yaratıcıyı görün.",
      "Dikte edemediğiniz bir sahneyi beklerken Yaradan'ı hatırlayın.",
      "Bir sahneyi, o sahneye giren Yaratıcıyı hatırlayarak tam olarak deneyimleyin.",
      "Tasarımın kontrolünü talep etmeden oyun içinde bir seçim yapın.",
      "Bir ilişkide yaratılışın küçük bir kısmını paylaşılan Yaratıcının yanına yerleştirin.",
      "Her ilişkide aynı Yaratıcı.",
      "Paylaştığımız yaratıma özen gösterin.",
      "Tek Yaratıcı. Birçok hayat. Bir deneyim oyunu.",
      "Tanrıyı anlayın. Kim olduğumuzu hatırla.",
      "İlahi kimliğin yaşamda görünür olmasını sağlayın.",
      "Tanrıyı anlamak karşımızdaki kişiyi de kapsar.",
      "Açıklık dünyanı değiştirir. Paylaşılan açıklık Yuga’yı değiştirir."
    ],
    "ur": [
      "ہم ہی خالق ہیں: وہ ایک مشترک سرچشمہ جو ہم سب کے ذریعے زندگی کا تجربہ کرتا ہے۔ ہم نے تجربات کا یہ کھیل تخلیق کیا اور اس کی مختلف زندگیوں اور کرداروں میں داخل ہوئے۔",
      "ہم ہی خالق ہیں۔ ہم نے تجربات کا یہ کھیل بنایا اور اس میں داخل ہوئے۔ داخل ہونے سے پہلے ہی اس کی ترتیب طے کر چکے تھے، اس لیے کھیل کے اندر سے اس کی ترتیب بدل نہیں سکتے۔",
      "ہم کھیل کے اندر خالق ہیں۔",
      "ہر منظر کے اندر خالق کی طرف واپس جائیں۔",
      "کمل: زندگی کے اندر، اس کے گزرتے ہوئے مناظر کے ساتھ روشنی کی لگاؤ ​​کے ساتھ۔",
      "فلم اور کمل روزمرہ کے تجربے کے دوران یاد کو قابل فہم بنانے میں مدد کرتے ہیں۔",
      "غلطی آپ کی پوری شناخت نہیں ہے۔",
      "کردار کی غلطی کو تخلیق کار سے ممتاز کریں جو اس کردار کا تجربہ کر رہا ہے۔",
      "اختلاف کے اندر دونوں کرداروں میں ایک ہی خالق کو دیکھیں۔",
      "ایسے منظر کا انتظار کرتے ہوئے خالق کو یاد رکھیں جس کا آپ حکم نہیں دے سکتے۔",
      "اس میں داخل ہونے والے خالق کو یاد کرتے ہوئے ایک منظر کا مکمل تجربہ کریں۔",
      "اس کے ڈیزائن پر کنٹرول کا دعوی کیے بغیر گیم کے اندر انتخاب کریں۔",
      "تخلیق کا ایک چھوٹا سا حصہ مشترکہ خالق کے ساتھ رشتہ میں رکھیں۔",
      "ہر رشتے میں وہی خالق۔",
      "اس تخلیق کا خیال رکھیں جو ہم بانٹتے ہیں۔",
      "ایک خالق۔ بہت سی زندگیاں۔ تجربات کا کھیل۔",
      "خدا کو سمجھو۔ یاد رکھیں کہ ہم کون ہیں۔",
      "زندگی میں خدائی شناخت کو ظاہر کریں۔",
      "خدا کو سمجھنے میں ہم سے پہلے والا شخص شامل ہے۔",
      "وضاحت آپ کی دنیا بدل دیتی ہے۔ سب کی وضاحت یُگ بدل دیتی ہے۔"
    ],
    "vi": [
      "Chúng ta là Đấng Sáng Tạo: cùng một nguồn cội trải nghiệm cuộc sống qua tất cả chúng ta. Chúng ta đã tạo ra trò chơi trải nghiệm này và bước vào những cuộc đời cùng vai trò khác nhau trong đó.",
      "Chúng ta chính là Đấng Tạo Hóa. Chúng ta đã tạo ra trò chơi trải nghiệm này và bước vào trong đó. Vì đã xác định thiết kế tổng thể trước khi bước vào, chúng ta không thể thay đổi thiết kế ấy từ bên trong trò chơi.",
      "Chúng ta là Người sáng tạo trong trò chơi.",
      "Trở về với Đấng Tạo Hóa trong mỗi cảnh.",
      "Hoa sen: trong cuộc sống, gắn liền với ánh sáng với những cảnh đi qua của nó.",
      "Bộ phim và hoa sen giúp ký ức trở nên dễ hiểu trong trải nghiệm hàng ngày.",
      "Một sai lầm không phải là toàn bộ danh tính của bạn.",
      "Hãy phân biệt sai lầm của một vai trò với việc Đấng Tạo Hóa trải qua vai trò đó.",
      "Xem cùng một Đấng Tạo Hóa ở cả hai vai trò trong sự bất đồng.",
      "Hãy nhớ đến Đấng Tạo Hóa trong khi chờ đợi một cảnh mà bạn không thể diễn tả được.",
      "Trải nghiệm trọn vẹn một khung cảnh trong khi tưởng nhớ Đấng Tạo Hóa đã bước vào đó.",
      "Đưa ra lựa chọn trong trò chơi mà không yêu cầu quyền kiểm soát thiết kế của nó.",
      "Đặt một phần nhỏ của sự sáng tạo bên cạnh Đấng Tạo Hóa chung trong mối quan hệ.",
      "Cùng một Đấng Tạo Hóa trong mọi mối quan hệ.",
      "Hãy quan tâm đến sự sáng tạo mà chúng ta chia sẻ.",
      "Một Đấng Tạo Hóa. Nhiều cuộc sống. Một trò chơi trải nghiệm.",
      "Hiểu Chúa. Hãy nhớ chúng ta là ai.",
      "Làm cho danh tính thiêng liêng được hiển thị trong cuộc sống.",
      "Hiểu Chúa bao gồm cả con người ở trước chúng ta.",
      "Sự thấu hiểu thay đổi thế giới của bạn. Sự thấu hiểu chung thay đổi Yuga."
    ],
    "zh-Hans": [
      "我们就是创造者：通过我们所有人体验生活的同一个共同源头。我们创造了这场体验的游戏，并进入其中不同的生命与角色。",
      "我们就是造物主。我们创造了这个体验的游戏，并进入其中。我们在进入之前就已确定了它的整体设计，因此无法从游戏内部改变这个设计。",
      "我们是游戏中的造物主。",
      "在每个场景中回归造物主。",
      "莲花：在生命中，对逝去的场景有淡淡的依恋。",
      "电影和莲花有助于让日常经历中的记忆变得容易理解。",
      "错误并不是你的全部身份。",
      "将角色的错误与经历该角色的造物主区分开来。",
      "在分歧中看到同一位造物主扮演两个角色。",
      "在等待你无法支配的场景时，请记住造物主。",
      "充分体验一个场景，同时记住进入该场景的造物主。",
      "在游戏中做出选择，而不要求控制其设计。",
      "将创造物的一小部分放在关系中的共享造物主旁边。",
      "每段关系中都是同一个造物主。",
      "关心我们共同创造的事物。",
      "一位造物主。许多生命。一场体验游戏。",
      "了解上帝。记住我们是谁。",
      "让神圣的身份在生活中可见。",
      "理解上帝包括我们面前的人。",
      "清晰的认识改变你的世界。共同的认识改变时代。"
    ],
    "zh-Hant": [
      "我們就是創造者：透過我們所有人體驗生活的同一個共同源頭。我們創造了這場體驗的遊戲，並進入其中不同的生命與角色。",
      "我們就是造物主。我們創造了這個體驗的遊戲，並進入其中。我們在進入之前就已確定了它的整體設計，因此無法從遊戲內部改變這個設計。",
      "我們是遊戲中的造物主。",
      "在每個場景中回歸造物主。",
      "蓮花：在生命中，對逝去的場景有著淡淡的依戀。",
      "電影和蓮花有助於讓日常經驗中的記憶變得容易理解。",
      "錯誤並不是你的全部身分。",
      "將角色的錯誤與經歷該角色的造物主區分開來。",
      "在分歧中看到同一位造物主扮演兩個角色。",
      "在等待你無法支配的場景時，請記住造物主。",
      "充分體驗一個場景，同時記住進入該場景的造物主。",
      "在遊戲中做出選擇，而不要求控制其設計。",
      "將創造物的一小部分放在關係中的共享造物主旁邊。",
      "每段關係中都是同一個造物主。",
      "關心我們共同創造的事物。",
      "一位造物主。許多生命。一場體驗遊戲。",
      "了解上帝。記住我們是誰。",
      "讓神聖的身份在生活中可見。",
      "理解上帝包括我們面前的人。",
      "清晰的認識改變你的世界。共同的認識改變時代。"
    ]
  };

  function initCardStudio() {
    const cardEls = document.querySelectorAll('[data-card-studio="true"]');
    if (!cardEls || cardEls.length === 0) return;
    cardEls.forEach(cardEl => {
      if (cardEl.dataset.initialized) return;
      cardEl.dataset.initialized = 'true';

    const lang = document.documentElement.lang || 'en';
    const ui = cardStudioUiByLang[lang] || cardStudioUiByLang.en;
    const pageQuotes = [
      document.querySelector('.governing-statement')?.textContent?.trim(),
      document.querySelector('.intro')?.textContent?.trim(),
      ...Array.from(document.querySelectorAll('blockquote p, .reflection p, .story-card p, .lesson p.lead, .lesson > p:first-of-type')).map(p => p.textContent?.trim())
    ].filter(Boolean).filter(q => q.length >= 25 && q.length <= 240);

    const langQuotes = curatedQuotesByLang[lang] || curatedQuotesByLang.en;
    const quotes = Array.from(new Set([...pageQuotes, ...langQuotes]));
    if (quotes.length === 0) {
      quotes.push(langQuotes[0] || 'We are the Creator. We created this game of experiences and entered it.');
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
        <div class="studio-controls" role="region" aria-label="${ui.quote}">
          <div class="control-group">
            <span class="control-label">${ui.quote}</span>
            <select class="studio-select" id="cs-quote-select" aria-label="${ui.quote}">
              ${quotes.map((q, i) => `<option value="${i}">"${q.length > 58 ? q.slice(0, 55) + '…' : q}"</option>`).join('')}
            </select>
          </div>
          <div class="control-row">
            <div class="control-group">
              <span class="control-label">${ui.aspect}</span>
              <div class="studio-toggle-group">
                <button type="button" class="studio-btn toggle-active" id="cs-btn-sq">${ui.sq}</button>
                <button type="button" class="studio-btn" id="cs-btn-st">${ui.st}</button>
              </div>
            </div>
          </div>
          <div class="control-group">
            <span class="control-label">${ui.pal}</span>
            <div class="studio-toggle-group studio-palette-group">
              <button type="button" class="studio-btn toggle-active" id="cs-btn-p" title="${ui.p}">${ui.p}</button>
              <button type="button" class="studio-btn" id="cs-btn-e" title="${ui.e}">${ui.e}</button>
              <button type="button" class="studio-btn" id="cs-btn-s" title="${ui.s}">${ui.s}</button>
              <button type="button" class="studio-btn" id="cs-btn-n" title="${ui.n}">${ui.n}</button>
            </div>
          </div>
          <div class="studio-actions">
            <button type="button" class="button studio-action-btn" id="cs-btn-dl">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
              <span>${ui.dl}</span>
            </button>
            <button type="button" class="button whatsapp-studio-btn studio-action-btn" id="cs-btn-wa">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.42 0-2.82-.37-4.06-1.07l-.29-.17-3.02.79.81-2.94-.19-.3a8.21 8.21 0 0 1-1.26-4.35c0-4.54 3.7-8.24 8.24-8.24z"/></svg>
              <span>${ui.wa}</span>
            </button>
            <button type="button" class="button secondary studio-action-btn" id="cs-btn-cp">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
              <span>${ui.cp}</span>
            </button>
            <button type="button" class="button secondary studio-action-btn" id="cs-btn-sh">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>
              <span>${ui.sh}</span>
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
      const isNonLatin = /[\u0600-\u06FF\u0900-\u0DFF\u0E00-\u0E7F\u3000-\u9FFF\uAC00-\uD7AF]/.test(quoteText);
      const fontStyle = isNonLatin ? '500' : 'italic 400';
      ctx.font = `${fontStyle} ${fontSize}px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Noto Serif", "Noto Sans", Georgia, serif`;

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
      ctx.font = (isNonLatin ? '500 20px' : '400 22px') + ' -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Georgia, serif';
      ctx.fillText(ui.tagline || 'We are the Creator. Remembering the shared source in all.', w / 2, footerY);

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
        statusMsg.textContent = ui.statusWa;
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
        statusMsg.textContent = ui.statusDl;
        setTimeout(() => { statusMsg.textContent = ''; }, 3500);
      } catch (err) {
        statusMsg.textContent = ui.statusDlTip;
      }
    };

    cardEl.querySelector('#cs-btn-wa').onclick = () => {
      const q = quotes[selectedIdx] || quotes[0];
      const shareUrl = (typeof location !== 'undefined' && location.href) ? location.href.split('#')[0] : 'https://mindclarity.co.in/';
      const authorText = ui.author || '— Uday Kumar (Mind Clarity)';
      const text = `"${q}"\n${authorText}\n\n${shareUrl}`;
      window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
      statusMsg.textContent = ui.statusWa;
      setTimeout(() => { statusMsg.textContent = ''; }, 3500);
    };

    cardEl.querySelector('#cs-btn-cp').onclick = async () => {
      const q = quotes[selectedIdx] || quotes[0];
      const shareUrl = (typeof location !== 'undefined' && location.href) ? location.href.split('#')[0] : 'https://mindclarity.co.in/';
      const authorText = ui.author || '— Uday Kumar (Mind Clarity)';
      const text = `"${q}"\n${authorText}\n${shareUrl}`;
      try {
        await navigator.clipboard.writeText(text);
        statusMsg.textContent = ui.statusCp;
        setTimeout(() => { statusMsg.textContent = ''; }, 3500);
      } catch (err) {
        statusMsg.textContent = ui.statusCpTip;
      }
    };

    cardEl.querySelector('#cs-btn-sh').onclick = () => {
      if (canvas.toBlob && navigator.share) {
        canvas.toBlob(blob => {
          if (!blob) return;
          const file = new File([blob], 'mind-clarity.png', { type: 'image/png' });
          const authorText = ui.author || '— Uday Kumar (Mind Clarity)';
          const shareUrl = (typeof location !== 'undefined' && location.href) ? location.href.split('#')[0] : 'https://mindclarity.co.in/';
          navigator.share({
            title: `Mind Clarity · ${ui.quote}`,
            text: `"${quotes[selectedIdx]}" ${authorText}`,
            url: shareUrl,
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

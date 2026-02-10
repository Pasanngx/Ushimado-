document.addEventListener("DOMContentLoaded", () => {

  const translations = {
    /* ================= ENGLISH ================= */
    en: {
      title: "Ushimado Tourism",
      subtitle: "The Aegean Sea of Japan",

      purpose_h2: "Our Purpose",
      purpose_p: "We aim to introduce Ushimado’s natural beauty, culture, and hospitality to visitors from around the world.",

      why_h2: "Why Ushimado?",
      why_p: "Ushimado is known for its calm sea, beautiful sunsets, and relaxing island atmosphere.",

      activities_h2: "Activities",
      activities_card_title: "Beach & Sea",
      activities_card_desc: "Enjoy swimming, kayaking, and marine activities.",

      local_card_title: "Local Culture",
      local_card_desc: "Experience art, food, and traditions of Setouchi.",

      spots_card_title: "Scenic Spots",
      spots_card_desc: "Visit famous viewpoints and romantic locations.",

      english_camp_title: "English Camp",
      english_camp_desc: "A special event combining nature adventures and cross-cultural exchange.",

      hotel_h2: "Accommodation",
      hotel_rimani_link: "Official Website",
      hotel_rimani_title: "Hotel Limani",
      hotel_rimani_desc: "A seaside resort with stunning ocean views.",

      hotel_inn_link: "Official Website",
      hotel_inn_title: "Ushimarobi Inn",
      hotel_inn_desc: "A cozy guesthouse with warm hospitality.",

      hotel_sea_title: "Seaside Stay",
      hotel_sea_desc: "Relax by the sea with unforgettable scenery.",

      nearby_h2: "Nearby Attractions",
      nearby_yacht: "Ushimado Yacht Harbor",
      nearby_museum: "Ushimado Kaiyu Culture Museum",
      nearby_tourism: "Setouchi City Tourism Center",
      nearby_street: "Shiomachi Karakoto Street",
      nearby_temple: "Honrenji Temple",
      nearby_all: "All Attractions",

      experience_h2: "My Experience in Ushimado",
      experience_p1: "Visiting Ushimado was more than just a trip — it was a warm and peaceful cultural experience.",
      experience_p2: "From the calm Seto Inland Sea to the kindness of the local people, every moment felt special.",
      experience_p3: "Ushimado became a place I will always remember.",

      contact_h2: "Contact Us",
      name_label: "Name",
      email_label: "Email",
      subject_label: "Subject",
      message_label: "Message",
      send_button: "Send Message"
    },

    /* ================= JAPANESE ================= */
    ja: {
      title: "牛窓観光",
      subtitle: "日本のエーゲ海",

      purpose_h2: "目的",
      purpose_p: "牛窓の自然、美しい文化、そしておもてなしを世界に紹介します。",

      why_h2: "なぜ牛窓？",
      why_p: "穏やかな海と美しい夕日が魅力です。",

      activities_h2: "アクティビティ",
      activities_card_title: "海とビーチ",
      activities_card_desc: "海水浴やマリンスポーツを楽しめます。",

      local_card_title: "地域文化",
      local_card_desc: "瀬戸内の文化や食を体験。",

      spots_card_title: "観光スポット",
      spots_card_desc: "絶景スポットを巡りましょう。",

      english_camp_title: "イングリッシュキャンプ",
      english_camp_desc: "自然体験と国際交流を同時に楽しめるイベントです。",

      hotel_h2: "宿泊施設",
      hotel_rimani_link: "公式サイト",
      hotel_rimani_title: "ホテル リマーニ",
      hotel_rimani_desc: "海を望むリゾートホテル。",

      hotel_inn_link: "公式サイト",
      hotel_inn_title: "牛窓ロビ",
      hotel_inn_desc: "温かいおもてなしの宿。",

      hotel_sea_title: "海辺の宿泊",
      hotel_sea_desc: "美しい景色とともにリラックス。",

      nearby_h2: "周辺観光",
      nearby_yacht: "牛窓ヨットハーバー",
      nearby_museum: "牛窓海遊文化館",
      nearby_tourism: "瀬戸内市観光センター",
      nearby_street: "しおまち唐琴通り",
      nearby_temple: "本蓮寺",
      nearby_all: "すべての観光スポット",

      experience_h2: "牛窓での体験",
      experience_p1: "牛窓での滞在は特別な体験でした。",
      experience_p2: "自然と人の温かさに心が癒されました。",
      experience_p3: "忘れられない思い出の場所です。",

      contact_h2: "お問い合わせ",
      name_label: "お名前",
      email_label: "メールアドレス",
      subject_label: "件名",
      message_label: "メッセージ",
      send_button: "送信"
    },

    /* ================= KOREAN ================= */
    ko: {
      title: "우시마도 관광",
      subtitle: "일본의 에게해",
      purpose_h2: "목적",
      purpose_p: "우시마도의 자연과 문화를 세계에 소개합니다.",
      why_h2: "왜 우시마도?",
      why_p: "조용한 바다와 아름다운 석양으로 유명합니다.",
      activities_h2: "활동",
      activities_card_title: "바다 체험",
      activities_card_desc: "수영과 해양 활동을 즐기세요.",
      local_card_title: "지역 문화",
      local_card_desc: "세토우치의 예술과 음식.",
      spots_card_title: "관광 명소",
      spots_card_desc: "아름다운 전망 명소.",
      english_camp_title: "영어 캠프",
      english_camp_desc: "자연과 문화 교류를 함께 경험합니다.",
      nearby_h2: "주변 관광",
      nearby_yacht: "우시마도 요트 항구",
      nearby_museum: "우시마도 카이유 문화 박물관",
      nearby_tourism: "세토우치 시 관광 센터",
      nearby_street: "시오마치 카라코토 거리",
      nearby_temple: "혼렌지 사원",
      nearby_all: "모든 명소",
      experience_h2: "나의 우시마도 경험",
      experience_p1: "자연과 사람을 느낀 소중한 여행이었습니다.",
      experience_p2: "모든 순간이 특별했습니다.",
      experience_p3: "다시 방문하고 싶은 곳입니다.",
      contact_h2: "문의하기",
      send_button: "보내기"
    },

    /* ================= NEPALI ================= */
    ne: {
      title: "उशिमादो पर्यटन",
      subtitle: "जापानको एजियन सागर",

      purpose_h2: "उद्देश्य",
      purpose_p: "उशिमादोको प्राकृतिक सौन्दर्य, संस्कृति र आतिथ्यतालाई विश्वभर परिचय गराउनु हाम्रो उद्देश्य हो।",

      why_h2: "किन उशिमादो?",
      why_p: "शान्त समुद्र र सुन्दर सूर्यास्तका लागि उशिमादो प्रसिद्ध छ।",

      activities_h2: "गतिविधिहरू",
      activities_card_title: "समुद्र र समुद्री किनार",
      activities_card_desc: "पौडी, कायकिङ र समुद्री गतिविधिहरूको आनन्द लिनुहोस्।",

      local_card_title: "स्थानीय संस्कृति",
      local_card_desc: "सेतोउची क्षेत्रको कला, खाना र परम्पराको अनुभव गर्नुहोस्।",

      spots_card_title: "पर्यटन स्थलहरू",
      spots_card_desc: "सुन्दर दृश्य भएका प्रसिद्ध स्थानहरू भ्रमण गर्नुहोस्।",

      english_camp_title: "इंग्लिश क्याम्प",
      english_camp_desc: "प्रकृति अनुभव र अन्तर-सांस्कृतिक आदानप्रदानलाई जोड्ने विशेष कार्यक्रम।",

      hotel_h2: "बसोबास",
      hotel_rimani_link: "आधिकारिक वेबसाइट",
      hotel_rimani_title: "होटल लिमानी",
      hotel_rimani_desc: "समुद्रको दृश्यसहितको सुन्दर रिसोर्ट।",

      hotel_inn_link: "आधिकारिक वेबसाइट",
      hotel_inn_title: "उशिमादो रोबी",
      hotel_inn_desc: "न्यानो आतिथ्यसहितको आरामदायक सराय।",

      hotel_sea_title: "समुद्र किनार बसोबास",
      hotel_sea_desc: "सुन्दर दृश्यसँगै आराम गर्नुहोस्।",

      nearby_h2: "नजिकका आकर्षणहरू",
      nearby_yacht: "उशिमादो याट हार्बर",
      nearby_museum: "उशिमादो काइयु संस्कृति संग्रहालय",
      nearby_tourism: "सेतोउची सिटी पर्यटन केन्द्र",
      nearby_street: "शियोमाची कराकोटो सडक",
      nearby_temple: "होन्‍रेन्जी मन्दिर",
      nearby_all: "सबै आकर्षणहरू",

      experience_h2: "उशिमादोमा मेरो अनुभव",
      experience_p1: "उशिमादोमा बिताएको समय मेरो लागि विशेष अनुभव थियो।",
      experience_p2: "प्रकृति र मानिसहरूको न्यानोपनले मन छोयो।",
      experience_p3: "सधैं सम्झिरहने सम्झनाको स्थान।",

      contact_h2: "सम्पर्क गर्नुहोस्",
      name_label: "नाम",
      email_label: "इमेल",
      subject_label: "विषय",
      message_label: "सन्देश",
      send_button: "पठाउनुहोस्"
    },

    /* ================= BENGALI ================= */
    bn: {
      title: "উশিমাদো পর্যটন",
      subtitle: "জাপানের এজিয়ান সাগর",

      purpose_h2: "উদ্দেশ্য",
      purpose_p: "উশিমাদোর প্রাকৃতিক সৌন্দর্য, সংস্কৃতি এবং আতিথেয়তাকে বিশ্বের সামনে তুলে ধরা আমাদের লক্ষ্য।",

      why_h2: "কেন উশিমাদো?",
      why_p: "শান্ত সমুদ্র ও সুন্দর সূর্যাস্তের জন্য উশিমাদো বিখ্যাত।",

      activities_h2: "কার্যক্রম",
      activities_card_title: "সমুদ্র ও সৈকত",
      activities_card_desc: "সাঁতার, কায়াকিং এবং সামুদ্রিক কার্যক্রম উপভোগ করুন।",

      local_card_title: "স্থানীয় সংস্কৃতি",
      local_card_desc: "সেতোউচির শিল্প, খাবার ও ঐতিহ্য উপভোগ করুন।",

      spots_card_title: "দর্শনীয় স্থান",
      spots_card_desc: "চমৎকার দৃশ্যের বিখ্যাত স্থানগুলো ঘুরে দেখুন।",

      english_camp_title: "ইংলিশ ক্যাম্প",
      english_camp_desc: "প্রকৃতি ও সাংস্কৃতিক বিনিময়ের সমন্বয়ে বিশেষ আয়োজন।",

      hotel_h2: "আবাসন",
      hotel_rimani_link: "আধিকারিক ওয়েবসাইট",
      hotel_rimani_title: "হোটেল লিমানি",
      hotel_rimani_desc: "সমুদ্রদৃশ্যসহ একটি সুন্দর রিসোর্ট।",

      hotel_inn_link: "আধিকারিক ওয়েবসাইট",
      hotel_inn_title: "উশিমাদো রোবি",
      hotel_inn_desc: "উষ্ণ আতিথেয়তাসম্পন্ন আরামদায়ক অতিথিশালা।",

      hotel_sea_title: "সমুদ্রপাড়ে থাকা",
      hotel_sea_desc: "সুন্দর দৃশ্যের সঙ্গে আরাম করুন।",

      nearby_h2: "কাছাকাছি দর্শনীয় স্থান",
      nearby_yacht: "উশিমাদো ইয়ট হারবার",
      nearby_museum: "উশিমাদো কাইইউ সাংস্কৃতিক জাদুঘর",
      nearby_tourism: "সেতোউচি সিটি পর্যটন কেন্দ্র",
      nearby_street: "শিওমাচি কারাকোতো স্ট্রিট",
      nearby_temple: "হোনরেনজি মন্দির",
      nearby_all: "সব দর্শনীয় স্থান",

      experience_h2: "উশিমাদোতে আমার অভিজ্ঞতা",
      experience_p1: "উশিমাদোতে কাটানো সময়টি ছিল বিশেষ অভিজ্ঞতা।",
      experience_p2: "প্রকৃতি ও মানুষের আন্তরিকতা মন ছুঁয়ে গেছে।",
      experience_p3: "চিরস্মরণীয় একটি স্থান।",

      contact_h2: "যোগাযোগ করুন",
      name_label: "নাম",
      email_label: "ইমেইল",
      subject_label: "বিষয়",
      message_label: "বার্তা",
      send_button: "পাঠান"
    },

    /* ================= SINHALA ================= */
    si: {
      title: "උෂිමඩෝ සංචාරක",
      subtitle: "ජපානයේ ඒජියන් මුහුද",

      purpose_h2: "අරමුණ",
      purpose_p: "උෂිමඩෝ හි ස්වභාවික සුන්දරත්වය, සංස්කෘතිය සහ ආත්ථිතිය ලෝකයට හඳුන්වාදීම අපගේ අරමුණයි.",

      why_h2: "ඇයි උෂිමඩෝ?",
      why_p: "සාමකාමී මුහුද සහ සුන්දර සන්ධ්‍යාවන් සඳහා උෂිමඩෝ ප්‍රසිද්ධයි.",

      activities_h2: "ක්‍රියාකාරකම්",
      activities_card_title: "මුහුද සහ වෙරළ",
      activities_card_desc: "පැහැදිලි මුහුදේ නෑම, කයැකිං සහ මුහුදු ක්‍රියාකාරකම් භුක්තිවිඳින්න.",

      local_card_title: "දේශීය සංස්කෘතිය",
      local_card_desc: "සෙටෝඋචි කලා, ආහාර සහ සම්ප්‍රදායන් අත්විඳින්න.",

      spots_card_title: "දර්ශනීය ස්ථාන",
      spots_card_desc: "සුන්දර දර්ශන සහිත ජනප්‍රිය ස්ථාන නැරඹීමට යන්න.",

      english_camp_title: "ඉංග්‍රීසි කඳවුර",
      english_camp_desc: "ස්වභාවය සහ සංස්කෘතික හුවමාරුව එකට ගෙනෙන විශේෂ වැඩසටහනක්.",

      hotel_h2: "නවාතැන්",
      hotel_rimani_link: "නිල වෙබ් අඩවිය",
      hotel_rimani_title: "හෝටල් ලිමානි",
      hotel_rimani_desc: "මුහුදු දසුන් සමඟ සුඛෝපභෝගී නිවාඩු නිකේතනයක්.",

      hotel_inn_link: "නිල වෙබ් අඩවිය",
      hotel_inn_title: "උෂිමඩෝ රොබි",
      hotel_inn_desc: "ආදරණීය ආත්ථිතිය සහිත සුවපහසු නවාතැනක්.",

      hotel_sea_title: "මුහුදු අසල නවාතැන්",
      hotel_sea_desc: "අමතක නොවන දර්ශන සමඟ විවේක ගන්න.",

      nearby_h2: "අසල ආකර්ෂණීය ස්ථාන",
      nearby_yacht: "උෂිමඩෝ යාච්ට් වරාය",
      nearby_museum: "උෂිමඩෝ කයියු සංස්කෘතික කෞතුකාගාරය",
      nearby_tourism: "සෙටෝඋචි නගර සංචාරක මධ්‍යස්ථානය",
      nearby_street: "ශියෝමචි කරකොටෝ වීදිය",
      nearby_temple: "හොන්රෙන්ජි විහාරය",
      nearby_all: "සියලු ආකර්ෂණය",

      experience_h2: "මගේ උෂිමඩෝ අත්දැකීම",
      experience_p1: "උෂිමඩෝ හි ගත කළ කාලය විශේෂ අත්දැකීමක් විය.",
      experience_p2: "ස්වභාවය සහ මිනිසුන්ගේ උණුසුම හදවතට දැනුණි.",
      experience_p3: "සදාකාලික මතකයන් ඇති ස්ථානයක්.",

      contact_h2: "සම්බන්ධ වන්න",
      name_label: "නම",
      email_label: "ඊමේල්",
      subject_label: "විෂයය",
      message_label: "පණිවිඩය",
      send_button: "යවන්න"
    },

    /* ================= CHINESE (TRADITIONAL) ================= */
    "zh-tw": {
      title: "牛窗觀光",
      subtitle: "日本的愛琴海",

      purpose_h2: "宗旨",
      purpose_p: "向世界介紹牛窗的自然美景、文化與熱情好客。",

      why_h2: "為什麼選擇牛窗？",
      why_p: "牛窗以平靜的海面與美麗的夕陽聞名。",

      activities_h2: "活動",
      activities_card_title: "海洋與沙灘",
      activities_card_desc: "享受游泳、獨木舟及各種海上活動。",

      local_card_title: "在地文化",
      local_card_desc: "體驗瀨戶內的藝術、美食與傳統。",

      spots_card_title: "觀光景點",
      spots_card_desc: "參觀著名的美景與浪漫地點。",

      english_camp_title: "英語營",
      english_camp_desc: "結合自然體驗與國際交流的特別活動。",

      hotel_h2: "住宿",
      hotel_rimani_link: "官方網站",
      hotel_rimani_title: "利瑪尼飯店",
      hotel_rimani_desc: "可欣賞海景的度假飯店。",

      hotel_inn_link: "官方網站",
      hotel_inn_title: "牛窗羅比旅宿",
      hotel_inn_desc: "充滿溫暖人情味的舒適旅宿。",

      hotel_sea_title: "海邊住宿",
      hotel_sea_desc: "在美麗景色中放鬆身心。",

      nearby_h2: "附近景點",
      nearby_yacht: "牛窗遊艇港",
      nearby_museum: "牛窗海遊文化館",
      nearby_tourism: "瀨戶內市觀光中心",
      nearby_street: "潮町唐琴通",
      nearby_temple: "本蓮寺",
      nearby_all: "所有景點",

      experience_h2: "我的牛窗體驗",
      experience_p1: "在牛窗度過的時光是一段特別的體驗。",
      experience_p2: "感受到大自然與人們的溫暖。",
      experience_p3: "一個令人難以忘懷的地方。",

      contact_h2: "聯絡我們",
      name_label: "姓名",
      email_label: "電子郵件",
      subject_label: "主旨",
      message_label: "留言內容",
      send_button: "送出"
    }
  };

  function setLanguage(lang) {
    document.querySelectorAll("[data-translate]").forEach(el => {
      const key = el.dataset.translate;
      if (translations[lang] && translations[lang][key]) {
        el.textContent = translations[lang][key];
      }
    });
    localStorage.setItem("lang", lang);
  }

  window.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".language-switcher button").forEach(button => {
      button.addEventListener("click", () => {
        setLanguage(button.dataset.lang);
      });
    });
    setLanguage(localStorage.getItem("lang") || "en");
  });
});
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
      experience_h2: "उशिमादोमा मेरो अनुभव",
      experience_p1: "यो यात्रा केवल भ्रमण मात्र थिएन।",
      experience_p2: "प्रकृति र मानिसहरूको माया महसुस गरें।",
      experience_p3: "सधैं सम्झिने स्थान।",
      send_button: "पठाउनुहोस्"
    },

    /* ================= BENGALI ================= */
    bn: {
      title: "উশিমাদো পর্যটন",
      subtitle: "জাপানের এজিয়ান সাগর",
      experience_h2: "উশিমাদোতে আমার অভিজ্ঞতা",
      experience_p1: "এটি শুধু ভ্রমণ ছিল না।",
      experience_p2: "প্রকৃতি ও মানুষের আন্তরিকতা অনুভব করেছি।",
      experience_p3: "অভুলনীয় স্মৃতি।",
      send_button: "পাঠান"
    },

    /* ================= SINHALA ================= */
    si: {
      title: "උෂිමඩෝ සංචාරක",
      subtitle: "ජපානයේ ඒජියන් මුහුද",
      experience_h2: "මගේ උෂිමඩෝ අත්දැකීම",
      experience_p1: "මෙය සාමාන්‍ය සංචාරයක් නොවීය.",
      experience_p2: "ස්වභාවය සහ මිනිසුන්ගේ උණුසුම දැනුණි.",
      experience_p3: "සදාකාලික මතකයක්.",
      send_button: "යවන්න"
    },

    /* ================= CHINESE (TRADITIONAL) ================= */
    "zh-tw": {
      title: "牛窗觀光",
      subtitle: "日本的愛琴海",
      experience_h2: "我的牛窗體驗",
      experience_p1: "這不只是一趟旅行。",
      experience_p2: "感受到自然與人情溫暖。",
      experience_p3: "令人難忘的地方。",
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

  document.querySelectorAll(".language-switcher button").forEach(button => {
    button.addEventListener("click", () => {
      setLanguage(button.dataset.lang);
    });
  });

  // Default language
  setLanguage(localStorage.getItem("lang") || "en");
});
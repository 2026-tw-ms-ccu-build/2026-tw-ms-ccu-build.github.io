/* i18n: Traditional Chinese / English
 * Auto-detects from navigator.language, allows manual override via localStorage. */
(function () {
  const LANGS = {
    'zh-Hant': {
      label: '繁體',
      htmlLang: 'zh-Hant',
      dict: {
        'meta.title': 'Microsoft Build with CCU 2026 | 微軟 × .NET 基金會技術之夜',
        'meta.description': '2026/06/13 Microsoft Build with CCU — 由微軟、.NET 基金會與中正大學資工所共同舉辦的技術交流活動。',
        'og.title': 'Microsoft Build with CCU 2026',
        'og.description': '2026/06/13 微軟 × .NET 基金會 × 中正大學資工所 技術交流活動。',

        'nav.about': '關於活動',
        'nav.schedule': '議程',
        'nav.speakers': '講者',
        'nav.venue': '地點',
        'nav.register': '立即報名',

        'hero.title.line2.year': '2026',
        'hero.tagline': '一場由 <strong class="text-white">微軟</strong> 與 <strong class="text-white">中正大學 資工所</strong> 共同舉辦的技術交流活動，並由 <span class="text-slate-400">.NET 基金會</span> 協办。三位講者、最新 Microsoft Build 開幕影片，並提供 Pizza 與飲料，一起認識 AI 與 微軟/GitHub 技術的最新進展。',
        'hero.date.label': '日期',
        'hero.date.value': '2026 / 06 / 13',
        'hero.date.sub': '週六 · 17:00 – 21:00',
        'hero.venue.label': '地點',
        'hero.venue.value': '中正大學 資工 101',
        'hero.venue.sub': 'CCU · CSIE Room 101',
        'hero.fee.label': '費用',
        'hero.fee.value': '免費入場',
        'hero.fee.sub': '含 Pizza、飲料、點心',
        'hero.cta.register': '前往 KKTIX 報名 →',
        'hero.cta.schedule': '查看議程',

        'about.kicker': 'About',
        'about.title': '關於 Build with CCU',
        'about.body1': 'Microsoft Build 是微軟每年針對開發者舉辦的技術大會。這次我們將 Build 帶進校園,邀請 <strong class="text-white">微軟工程師、微軟 MVP、.NET 基金會、GitHub Star</strong> 走進中正大學,與學生及開發者分享 AI、Cloud、.NET 與開源的最新資訊。',
        'about.body2': '從 Build 開幕影片出發,接著三場技術主題演講。除了聽,也歡迎在現場與講者及其他參與者交流。',
        'about.stat.duration': '技術交流時長',
        'about.stat.sessions': '講者場次',
        'about.stat.pizza': 'Pizza & 飲料',
        'about.stat.free': '學生免費',

        'schedule.kicker': 'Schedule',
        'schedule.title': '當晚議程',
        'schedule.date': '2026 / 06 / 13(六)17:00 – 21:00',
        'sched.1.title': '入場 & 開場',
        'sched.1.desc': '微軟 Build 開幕影片播放,現場提供 <strong>免費 Pizza、飲料、Costco 點心</strong>。輕鬆 networking、認識新朋友。',
        'sched.2.session': 'Session 1 · Daniel',
        'sched.2.badge': '微軟台灣工程師',
        'sched.2.title': 'PostgreSQL Extension 與 Hook 機制:用 Rust pgrx 實戰拆解 redis_fdw_rs 專案',
        'sched.2.desc': '以 <code class="px-1.5 py-0.5 rounded bg-white/10 text-cyan-200 text-sm">redis_fdw_rs</code> 為例,帶你了解 PostgreSQL 的 Extension 與 Hook 機制,並使用 Rust pgrx 實作一個 Foreign Data Wrapper。',
        'sched.3.session': 'Session 2 · 林暐翰',
        'sched.3.badge1': '.NET 基金會',
        'sched.3.badge2': 'Microsoft MVP',
        'sched.3.title': 'GitHub AI 訓練專屬知識庫開發專案',
        'sched.3.desc': '分享如何在 GitHub 生態中打造專屬知識庫並訓練 AI 模型,以及這樣的專案是如何規劃、實作與部署的。',
        'sched.4.session': 'Session 3 · 謝政廷',
        'sched.4.badge1': '台積電副理',
        'sched.4.badge2': 'Microsoft MVP',
        'sched.4.badge3': 'GitHub Star',
        'sched.4.desc': '同時是台積電副理、微軟 MVP,以及全球少數 GitHub Star 之一,分享在大型企業推動開源與 AI 的真實經驗。',
        'sched.5.title': '結尾 & 紀念禮物',
        'sched.5.desc': '總結、Q&A 與合影，參與的每位夥伴都可獲得活動紀念帽 🧢 與其他小禮物 🎁，活動結束。',

        'speakers.kicker': 'Speakers',
        'speakers.title': '講者陣容',
        'sp.daniel.role': 'Microsoft Taiwan Engineer',
        'sp.daniel.badge': '微軟台灣工程師',
        'sp.daniel.title': 'PostgreSQL Extension 與 Hook 機制',
        'sp.daniel.desc': '用 Rust pgrx 實戰拆解 <code class="text-cyan-200">redis_fdw_rs</code> 專案,了解 PostgreSQL 如何透過 Extension 與 Hook 達到高度可擴充性。',
        'sp.weihan.role': 'DNF Project Maintainer · Microsoft MVP',
        'sp.weihan.badge1': '.NET 基金會',
        'sp.weihan.badge2': 'Microsoft MVP',
        'sp.weihan.title': 'GitHub AI 訓練專屬知識庫開發專案',
        'sp.weihan.desc': '分享如何在 GitHub 生態中打造專屬知識庫並用於 AI 訓練,以及一個開源專案從規劃、實作到部署的完整流程。',
        'sp.jeffrey.role': 'TSMC Deputy Manager · Microsoft MVP · GitHub Star',
        'sp.jeffrey.badge1': '台積電副理',
        'sp.jeffrey.badge2': 'Microsoft MVP',
        'sp.jeffrey.badge3': 'GitHub Star',
        'sp.jeffrey.desc': '身兼台積電副理、微軟 MVP、與全球少數 GitHub Star 殊榮,於企業內推動開源、AI 與 DevOps 的實踐者。',

        'venue.kicker': 'Venue',
        'venue.title': '活動地點',
        'venue.school': '國立中正大學 · 資訊工程學系',
        'venue.room': '資工教室 101',
        'venue.address': '621301 嘉義縣民雄鄉大學路一段 168 號',
        'venue.desc': '活動位於中正大學資工系館 <strong class="text-white">101 教室</strong>。建議提前 15 分鐘抵達,先享用 Pizza 與飲料 🍕。校內停車有限,鼓勵搭乘大眾運輸前往。',
        'venue.cta.maps': '🗺️ Google Maps 路線指引 ↗',
        'venue.cta.openmaps': '在 Google Maps 開啟 ↗',
        'venue.cta.dept': '中正資工系 ↗',
        'venue.transit.hsr': '🚆 高鐵',
        'venue.transit.hsr.v': '嘉義站',
        'venue.transit.hsr.s': '轉 BRT / 公車',
        'venue.transit.bus': '🚌 公車',
        'venue.transit.bus.v': 'BRT / 7214',
        'venue.transit.bus.s': '中正大學站',
        'venue.transit.car': '🚗 開車',
        'venue.transit.car.v': '校內停車',
        'venue.transit.car.s': '名額有限',

        'reg.kicker': 'Join Us',
        'reg.title.a': '準備好',
        'reg.title.b': '了嗎?',
        'reg.desc': '座位有限,名額採線上登記制。完成報名以確保你的入場資格與 Pizza 🍕。',
        'reg.cta1': '前往 KKTIX 報名 ↗',
        'reg.cta2': '查看活動頁面',
        'reg.note': '報名平台:KKTIX · 座位有限,依報名先後順序',

        'footer.organizers': '主辦單位',
        'footer.org3': '中正大學 資工所',
        'footer.dept': 'CCU Department of Computer Science and Information Engineering',
        'footer.copyright': '© 2026 Microsoft Build with CCU. All rights reserved.',
        'footer.about': '關於',
        'footer.schedule': '議程',
        'footer.speakers': '講者',
        'footer.register': '報名',

        'lang.switch.aria': '切換語言'
      }
    },

    'en': {
      label: 'EN',
      htmlLang: 'en',
      dict: {
        'meta.title': 'Microsoft Build with CCU 2026 | A Tech Night with Microsoft × .NET Foundation',
        'meta.description': '2026/06/13 Microsoft Build with CCU — a tech meetup co-hosted by Microsoft, the .NET Foundation, and CCU CSIE.',
        'og.title': 'Microsoft Build with CCU 2026',
        'og.description': '2026/06/13 Microsoft × .NET Foundation × CCU CSIE tech meetup.',

        'nav.about': 'About',
        'nav.schedule': 'Schedule',
        'nav.speakers': 'Speakers',
        'nav.venue': 'Venue',
        'nav.register': 'Register',

        'hero.title.line2.year': '2026',
        'hero.tagline': 'A tech meetup co-hosted by <strong class="text-white">Microsoft</strong> and <strong class="text-white">CCU CSIE</strong>, with support from the <span class="text-slate-400">.NET Foundation</span>. Three speakers, the latest Microsoft Build opening video, plus pizza and drinks — let\'s explore the latest in AI and Microsoft/GitHub tech together.',
        'hero.date.label': 'Date',
        'hero.date.value': 'Jun 13, 2026',
        'hero.date.sub': 'Saturday · 17:00 – 21:00',
        'hero.venue.label': 'Venue',
        'hero.venue.value': 'CCU CSIE Room 101',
        'hero.venue.sub': 'National Chung Cheng University',
        'hero.fee.label': 'Admission',
        'hero.fee.value': 'Free Entry',
        'hero.fee.sub': 'Pizza, drinks & snacks included',
        'hero.cta.register': 'Register on KKTIX →',
        'hero.cta.schedule': 'View schedule',

        'about.kicker': 'About',
        'about.title': 'About Build with CCU',
        'about.body1': 'Microsoft Build is Microsoft\'s annual conference for developers. This time we bring Build to campus, inviting <strong class="text-white">Microsoft engineers, Microsoft MVPs, the .NET Foundation, and a GitHub Star</strong> to CCU to share the latest in AI, cloud, .NET, and open source with students and developers.',
        'about.body2': 'Starting from the Build opening video, followed by three technical talks. Beyond listening, you\'re welcome to network with speakers and fellow attendees on site.',
        'about.stat.duration': 'Hours of content',
        'about.stat.sessions': 'Speaker sessions',
        'about.stat.pizza': 'Pizza & drinks',
        'about.stat.free': 'Free for students',

        'schedule.kicker': 'Schedule',
        'schedule.title': 'Agenda',
        'schedule.date': 'Sat, Jun 13, 2026 · 17:00 – 21:00',
        'sched.1.title': 'Doors open & Opening',
        'sched.1.desc': 'Microsoft Build opening video, with <strong>free pizza, drinks, and Costco snacks</strong>. Casual networking and meeting new friends.',
        'sched.2.session': 'Session 1 · Daniel',
        'sched.2.badge': 'Microsoft Taiwan Engineer',
        'sched.2.title': 'PostgreSQL Extensions & Hooks: A Hands-on Tour of redis_fdw_rs with Rust pgrx',
        'sched.2.desc': 'Using <code class="px-1.5 py-0.5 rounded bg-white/10 text-cyan-200 text-sm">redis_fdw_rs</code> as a case study, we explore PostgreSQL\'s extension and hook mechanisms and build a Foreign Data Wrapper with Rust pgrx.',
        'sched.3.session': 'Session 2 · Wei-Han Lin',
        'sched.3.badge1': '.NET Foundation',
        'sched.3.badge2': 'Microsoft MVP',
        'sched.3.title': 'Building a Custom Knowledge Base on GitHub for AI Training',
        'sched.3.desc': 'How to build a dedicated knowledge base in the GitHub ecosystem for AI model training, and how such a project is planned, implemented, and deployed.',
        'sched.4.session': 'Session 3 · Jeffrey Hsieh',
        'sched.4.badge1': 'TSMC Deputy Manager',
        'sched.4.badge2': 'Microsoft MVP',
        'sched.4.badge3': 'GitHub Star',
        'sched.4.desc': 'TSMC Deputy Manager, Microsoft MVP, and one of the few GitHub Stars worldwide — sharing real-world experience driving open source and AI inside a large enterprise.',
        'sched.5.title': 'Wrap-up & Souvenir',
        'sched.5.desc': 'Closing remarks, Q&A, group photo — every attendee gets an event hat 🧢 plus other small giveaways 🎁. See you next time!',

        'speakers.kicker': 'Speakers',
        'speakers.title': 'Speaker Lineup',
        'sp.daniel.role': 'Microsoft Taiwan Engineer',
        'sp.daniel.badge': 'Microsoft Taiwan Engineer',
        'sp.daniel.title': 'PostgreSQL Extensions & Hooks',
        'sp.daniel.desc': 'A hands-on dive into the <code class="text-cyan-200">redis_fdw_rs</code> project with Rust pgrx — how PostgreSQL achieves extreme extensibility through extensions and hooks.',
        'sp.weihan.role': 'DNF Project Maintainer · Microsoft MVP',
        'sp.weihan.badge1': '.NET Foundation',
        'sp.weihan.badge2': 'Microsoft MVP',
        'sp.weihan.title': 'Building a Custom Knowledge Base on GitHub for AI Training',
        'sp.weihan.desc': 'How to build a dedicated knowledge base on GitHub for AI training, and the full lifecycle of an open-source project from planning to deployment.',
        'sp.jeffrey.role': 'TSMC Deputy Manager · Microsoft MVP · GitHub Star',
        'sp.jeffrey.badge1': 'TSMC Deputy Manager',
        'sp.jeffrey.badge2': 'Microsoft MVP',
        'sp.jeffrey.badge3': 'GitHub Star',
        'sp.jeffrey.desc': 'TSMC Deputy Manager, Microsoft MVP, and one of the few worldwide GitHub Stars — practitioner driving open source, AI and DevOps within the enterprise.',

        'venue.kicker': 'Venue',
        'venue.title': 'Event Location',
        'venue.school': 'National Chung Cheng University · CSIE',
        'venue.room': 'CSIE Room 101',
        'venue.address': 'No. 168, Sec. 1, University Rd., Minxiong, Chiayi 621301, Taiwan',
        'venue.desc': 'The event takes place at the CCU CSIE building, <strong class="text-white">Room 101</strong>. Arriving 15 minutes early is recommended — enjoy pizza and drinks first 🍕. Campus parking is limited; public transport is encouraged.',
        'venue.cta.maps': '🗺️ Google Maps Directions ↗',
        'venue.cta.openmaps': 'Open in Google Maps ↗',
        'venue.cta.dept': 'CCU CSIE Department ↗',
        'venue.transit.hsr': '🚆 HSR',
        'venue.transit.hsr.v': 'Chiayi Station',
        'venue.transit.hsr.s': 'Transfer to BRT / bus',
        'venue.transit.bus': '🚌 Bus',
        'venue.transit.bus.v': 'BRT / 7214',
        'venue.transit.bus.s': 'CCU stop',
        'venue.transit.car': '🚗 By car',
        'venue.transit.car.v': 'On-campus parking',
        'venue.transit.car.s': 'Limited spots',

        'reg.kicker': 'Join Us',
        'reg.title.a': 'Ready',
        'reg.title.b': ' to join?',
        'reg.desc': 'Seats are limited and registration is online. Sign up to secure your spot — and your pizza 🍕.',
        'reg.cta1': 'Register on KKTIX ↗',
        'reg.cta2': 'View event page',
        'reg.note': 'Platform: KKTIX · Limited seats, first-come first-served',

        'footer.organizers': 'Organizers',
        'footer.org3': 'CCU CSIE',
        'footer.dept': 'CCU Department of Computer Science and Information Engineering',
        'footer.copyright': '© 2026 Microsoft Build with CCU. All rights reserved.',
        'footer.about': 'About',
        'footer.schedule': 'Schedule',
        'footer.speakers': 'Speakers',
        'footer.register': 'Register',

        'lang.switch.aria': 'Switch language'
      }
    }
  };

  const STORAGE_KEY = 'preferred-lang';

  function detectLang() {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored && LANGS[stored]) return stored;

    const candidates = (navigator.languages && navigator.languages.length)
      ? navigator.languages
      : [navigator.language || 'en'];

    for (const raw of candidates) {
      const l = String(raw).toLowerCase();
      if (l.startsWith('zh')) return 'zh-Hant';
      if (l.startsWith('en')) return 'en';
    }
    return 'zh-Hant';
  }

  // The HTML is authored in this language; on first apply we skip replacing
  // text so the original full-width punctuation is preserved.
  const SOURCE_LANG = (document.documentElement.getAttribute('lang') || 'zh-Hant');
  let firstApply = true;

  function apply(lang) {
    const pack = LANGS[lang] || LANGS['zh-Hant'];
    const dict = pack.dict;
    document.documentElement.setAttribute('lang', pack.htmlLang);

    const skipText = firstApply && lang === SOURCE_LANG;
    firstApply = false;

    if (skipText) {
      // Only update meta + switcher state on initial render in source language.
      if (dict['meta.title']) document.title = dict['meta.title'];
      document.querySelectorAll('[data-lang-btn]').forEach(btn => {
        const active = btn.getAttribute('data-lang-btn') === lang;
        btn.classList.toggle('bg-white/15', active);
        btn.classList.toggle('text-white', active);
        btn.classList.toggle('text-slate-400', !active);
        btn.setAttribute('aria-pressed', active ? 'true' : 'false');
      });
      return;
    }

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) el.textContent = dict[key];
    });
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.getAttribute('data-i18n-html');
      if (dict[key] !== undefined) el.innerHTML = dict[key];
    });
    document.querySelectorAll('[data-i18n-attr]').forEach(el => {
      // Format: "attr:key;attr2:key2"
      const spec = el.getAttribute('data-i18n-attr');
      spec.split(';').forEach(pair => {
        const [attr, key] = pair.split(':').map(s => s && s.trim());
        if (attr && key && dict[key] !== undefined) {
          el.setAttribute(attr, dict[key]);
        }
      });
    });

    // Title / meta
    if (dict['meta.title']) document.title = dict['meta.title'];
    const setMeta = (sel, val) => {
      const el = document.querySelector(sel);
      if (el && val) el.setAttribute('content', val);
    };
    setMeta('meta[name="description"]', dict['meta.description']);
    setMeta('meta[property="og:title"]', dict['og.title']);
    setMeta('meta[property="og:description"]', dict['og.description']);

    // Switcher UI active state
    document.querySelectorAll('[data-lang-btn]').forEach(btn => {
      const active = btn.getAttribute('data-lang-btn') === lang;
      btn.classList.toggle('bg-white/15', active);
      btn.classList.toggle('text-white', active);
      btn.classList.toggle('text-slate-400', !active);
      btn.setAttribute('aria-pressed', active ? 'true' : 'false');
    });
  }

  function setLang(lang) {
    if (!LANGS[lang]) return;
    localStorage.setItem(STORAGE_KEY, lang);
    apply(lang);
  }

  // Expose
  window.i18n = { setLang, detectLang, langs: Object.keys(LANGS) };

  document.addEventListener('DOMContentLoaded', () => {
    apply(detectLang());
    document.querySelectorAll('[data-lang-btn]').forEach(btn => {
      btn.addEventListener('click', () => setLang(btn.getAttribute('data-lang-btn')));
    });
  });
})();

export type Lang = 'en' | 'ar'

/**
 * All visible text of the portfolio lives here, in English and Arabic.
 * The Arabic version is written to read naturally to an Arabic reader,
 * not translated word for word. Brand and technology names
 * (React, Next.js, GitHub, ...) stay in Latin script on purpose.
 */
const en = {
  meta: {
    title: 'Rateb Alnaal | Frontend Developer Portfolio',
  },
  header: {
    home: 'Home',
    about: 'About me',
    projects: 'Projects',
    contact: 'Contact',
    cv: 'CV',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    switchLabel: 'العربية',
    switchAria: 'Switch the site language to Arabic',
  },
  hero: {
    helloBefore: 'Hello',
    helloAfter: ", I'm",
    name: 'Rateb Alnaal',
    role: 'Frontend Developer',
    summary: 'Final-year IT student · Building web projects since 2024',
    contact: 'Contact',
  },
  about: {
    title: 'About me',
    p1: 'As an Information Technology student and web developer, my passion extends beyond academia into building innovative digital solutions and embracing technical challenges.',
    p2: 'My background includes building independent projects from scratch, alongside a practical training that bridged the gap between academic theory and real-world project dynamics.',
    p3: "My focus is frontend development with React, Next.js and Tailwind CSS. I also work with Node.js, Express and MongoDB, and I'm learning backend development. I use AI tools like Claude to learn new technologies faster, which is how I built my Telegram bot project in Python.",
    p4: 'Known for rapid learning and writing clean code, I am currently seeking an opportunity within a professional team or a training environment to refine my skills and contribute effectively.',
    educationTitle: 'Education:',
    degree: 'Bachelor in Information Technology (BAIT)',
    university: 'Syrian Virtual University (SVU)',
    year: '4th Year Student (Current)',
    experienceTitle: 'Experience & Training:',
    role1: 'Self-Directed Web Developer (Personal & Training Projects)',
    time1: 'October 2024 – Present',
    desc1a:
      'Dedicated the past two years to continuous self-directed learning and building numerous hands-on training projects from scratch.',
    desc1b:
      'Focused on sharpening skills in modern web development frameworks and solving complex programming problems independently.',
    role2: 'Web Developer Intern | MAD SOLUTION (Remote)',
    time2: 'September 2024 – October 2024',
    desc2a:
      'Participated in a 2-month structured remote internship, collaborating effectively within a development team.',
    desc2b:
      'Contributed to designing and building multiple practical training projects, aligning with industry workflows.',
    skills: 'Here are my main skills:',
  },
  projects: {
    title: 'My Projects',
    live: 'Live demo',
    inDevelopment: 'In active development',
    bot: {
      title: 'Telegram Bot Simulator : Student Sign-ups & Payment Claims',
      description:
        "An interactive, Telegram-style simulator of a bot that automates student registration and payment-claim messages for an online school's staff. The bot is live and under continuous development, with new features added regularly. The public demo runs on fictional data only and does not connect to any real system.",
      note: 'Built with Claude (free plan). I had no prior experience with Python or Telegram bots, so this project shows how I use AI to design, build and ship a working product while learning a new stack along the way.',
      techTelegram: 'Telegram Bot',
      techClaude: 'Built with Claude',
      imageAlt:
        'Screenshot of the Telegram bot simulator: a phone-shaped chat window next to the project description',
      githubAlt: 'Source code of the simulator on GitHub',
      liveAlt: 'Open the live simulator',
    },
    store: {
      name: 'Technical Store',
      title: 'Technical Store : E-Commerce MERN Stack',
      description:
        'A full-stack e-commerce platform built with the MERN stack, featuring a modern and responsive user interface for tech products. It includes secure user authentication and a dynamic shopping cart system to ensure a seamless end-to-end shopping experience.',
      imageAlt:
        'Screenshot of Technical Store showing the mobile collection with product cards, prices and add-to-cart buttons',
    },
    budget: {
      name: 'Budget Analyzer',
      title: 'Budget Analyzer : Financial Planning App',
      description:
        'An advanced dual-currency budget and expense management web app (USD / SYP) built with Next.js and Redux Toolkit. It is specifically designed to help freelancers and employees track funds, commit invoices, and manage loans and savings in real-time amidst severe exchange rate fluctuations.',
      imageAlt:
        'Screenshot of the Budget Analyzer dashboard: dollar fund, lira fund, savings and loans cards with a spending analysis chart',
    },
    awards: {
      name: 'Awards Winning',
      title: 'Awards Winning : Interactive Gaming Platform',
      description:
        'An interactive landing page for a gaming/metagame platform built with React and Vite, featuring immersive video elements and dynamic GSAP scroll animations. It includes multiple sections (Hero/Features/Story/Contact) with a fully responsive design powered by Tailwind CSS and custom assets.',
      imageAlt:
        'Screenshot of the Awards Winning landing page: a full-screen pixel-art hero with the headline "Redefine Gaming"',
    },
    githubAlt: (name: string) => `Source code of ${name} on GitHub`,
    liveAlt: (name: string) => `Open the live ${name} project`,
  },
  contact: {
    title: 'Contact',
    line1: 'Ready to get started on your project?',
    line2: 'Contact me now for a free consultation.',
    emailAlt: 'Email',
    phoneAlt: 'Phone number',
  },
  footer: {
    copyright: 'Copyright © 2026 Dev. Rateb Alnaal. All rights reserved.',
  },
}

export type Dict = typeof en

const ar: Dict = {
  meta: {
    title: 'راتب النعال | مطوّر واجهات أمامية',
  },
  header: {
    home: 'الرئيسية',
    about: 'نبذة عني',
    projects: 'المشاريع',
    contact: 'تواصل معي',
    cv: 'السيرة الذاتية',
    openMenu: 'فتح القائمة',
    closeMenu: 'إغلاق القائمة',
    switchLabel: 'English',
    switchAria: 'تغيير لغة الموقع إلى الإنجليزية',
  },
  hero: {
    helloBefore: 'مرحباً',
    helloAfter: '، أنا',
    name: 'راتب النعال',
    role: 'مطوّر واجهات أمامية',
    summary: 'طالب تقنية معلومات في السنة الأخيرة · أبني مشاريع ويب منذ 2024',
    contact: 'تواصل معي',
  },
  about: {
    title: 'نبذة عني',
    p1: 'أدرس تقنية المعلومات وأعمل مطوّراً للويب، ويتجاوز شغفي حدود الدراسة الأكاديمية إلى بناء حلول رقمية مبتكرة وخوض التحديات التقنية.',
    p2: 'بنيت مشاريع مستقلة من الصفر، وأضفت إليها تدريباً عملياً ساعدني على سدّ الفجوة بين النظرية الأكاديمية وواقع العمل في المشاريع الحقيقية.',
    p3: 'أركّز على تطوير الواجهات الأمامية باستخدام React وNext.js وTailwind CSS. كما أعمل مع Node.js وExpress وMongoDB، وأتعلّم تطوير الواجهات الخلفية حالياً. أستعين بأدوات الذكاء الاصطناعي مثل Claude لأتعلّم التقنيات الجديدة بسرعة أكبر، وبهذه الطريقة بنيت مشروع بوت تلغرام بلغة Python.',
    p4: 'يميّزني سرعة التعلّم وكتابة كود نظيف، وأبحث حالياً عن فرصة ضمن فريق محترف أو بيئة تدريبية أصقل فيها مهاراتي وأسهم فيها بفاعلية.',
    educationTitle: 'التعليم:',
    degree: 'بكالوريوس في تقنية المعلومات (BAIT)',
    university: 'الجامعة الافتراضية السورية (SVU)',
    year: 'طالب في السنة الرابعة (حالياً)',
    experienceTitle: 'الخبرة والتدريب:',
    role1: 'مطوّر ويب بالتعلّم الذاتي (مشاريع شخصية وتدريبية)',
    time1: 'أكتوبر 2024 – الآن',
    desc1a: 'خصّصت السنتين الماضيتين للتعلّم الذاتي المستمر، وبنيت خلالهما عدداً من المشاريع التدريبية العملية من الصفر.',
    desc1b: 'ركّزت على صقل مهاراتي في أطر تطوير الويب الحديثة، وعلى حلّ المشكلات البرمجية المعقّدة بالاعتماد على نفسي.',
    role2: 'متدرّب مطوّر ويب | MAD SOLUTION (عن بُعد)',
    time2: 'سبتمبر 2024 – أكتوبر 2024',
    desc2a: 'شاركت في تدريب منظّم عن بُعد لمدة شهرين، وعملت بفاعلية ضمن فريق تطوير.',
    desc2b: 'أسهمت في تصميم وبناء عدة مشاريع تدريبية عملية تحاكي أساليب العمل المعتمدة في القطاع.',
    skills: 'أبرز مهاراتي:',
  },
  projects: {
    title: 'مشاريعي',
    live: 'عرض مباشر',
    inDevelopment: 'قيد التطوير المستمر',
    bot: {
      title: 'محاكي بوت تلغرام: تسجيل الطلاب ومطالبات الدفع',
      description:
        'محاكٍ تفاعلي بأسلوب تلغرام لبوت يؤتمت تسجيل الطلاب وصياغة رسائل مطالبات الدفع لموظفي مدرسة أونلاين. البوت يعمل فعلياً وهو قيد التطوير المستمر، وتُضاف إليه ميزات جديدة بانتظام. النسخة التجريبية المعروضة تعمل ببيانات وهمية فقط، ولا ترتبط بأي نظام حقيقي.',
      note: 'بُني المشروع بمساعدة Claude (النسخة المجانية). لم تكن لدي خبرة سابقة في Python أو بوتات تلغرام، لذلك يعكس هذا المشروع كيف أوظّف الذكاء الاصطناعي لتصميم منتج يعمل وبنائه وإطلاقه، وأتعلّم تقنية جديدة خلال ذلك.',
      techTelegram: 'بوت تلغرام',
      techClaude: 'بُني بمساعدة Claude',
      imageAlt: 'لقطة شاشة لمحاكي بوت تلغرام: نافذة محادثة على شكل هاتف بجانب وصف المشروع',
      githubAlt: 'الشيفرة المصدرية للمحاكي على GitHub',
      liveAlt: 'فتح المحاكي المباشر',
    },
    store: {
      name: 'Technical Store',
      title: 'Technical Store: متجر إلكتروني بتقنية MERN Stack',
      description:
        'منصة تجارة إلكترونية متكاملة (Full-Stack) مبنية بتقنية MERN، بواجهة عصرية متجاوبة لعرض المنتجات التقنية. تتضمن تسجيل دخول آمناً ونظام سلة تسوّق ديناميكياً لتجربة شراء سلسة من البداية إلى النهاية.',
      imageAlt:
        'لقطة شاشة من متجر Technical Store تعرض مجموعة الهواتف مع بطاقات المنتجات والأسعار وأزرار الإضافة إلى السلة',
    },
    budget: {
      name: 'Budget Analyzer',
      title: 'Budget Analyzer: تطبيق للتخطيط المالي',
      description:
        'تطبيق ويب متقدّم لإدارة الميزانية والمصروفات بعملتين (الدولار والليرة السورية)، مبني بـ Next.js وRedux Toolkit. صُمّم خصيصاً لمساعدة العاملين لحسابهم الخاص والموظفين على تتبّع أموالهم وتسجيل الفواتير وإدارة القروض والمدّخرات لحظياً، في ظل التقلّبات الحادة في سعر الصرف.',
      imageAlt:
        'لقطة شاشة من لوحة تحكم Budget Analyzer: بطاقات صندوق الدولار وصندوق الليرة والادخار والقروض مع مخطط لتحليل المصروفات',
    },
    awards: {
      name: 'Awards Winning',
      title: 'Awards Winning: منصة ألعاب تفاعلية',
      description:
        'صفحة هبوط تفاعلية لمنصة ألعاب (Metagame) مبنية بـ React وVite، تضم عناصر فيديو غامرة وحركات تمرير ديناميكية بمكتبة GSAP. تحتوي على عدة أقسام (الواجهة الرئيسية، المزايا، القصة، التواصل) بتصميم متجاوب بالكامل مدعوم بـ Tailwind CSS وأصول بصرية مخصّصة.',
      imageAlt:
        'لقطة شاشة لصفحة الهبوط Awards Winning: واجهة رئيسية بملء الشاشة بأسلوب البيكسل آرت مع العنوان "Redefine Gaming"',
    },
    githubAlt: (name: string) => `الشيفرة المصدرية لمشروع ${name} على GitHub`,
    liveAlt: (name: string) => `فتح مشروع ${name} المباشر`,
  },
  contact: {
    title: 'تواصل معي',
    line1: 'هل أنت مستعد لبدء مشروعك؟',
    line2: 'راسلني الآن للحصول على استشارة مجانية.',
    emailAlt: 'البريد الإلكتروني',
    phoneAlt: 'رقم الهاتف',
  },
  footer: {
    copyright: 'جميع الحقوق محفوظة © 2026 Dev. راتب النعال',
  },
}

export const translations: Record<Lang, Dict> = { en, ar }

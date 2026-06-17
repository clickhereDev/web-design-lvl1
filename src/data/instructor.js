export const SOFT_SKILLS = {
  1: {
    en: 'Effective Communication & Active Listening',
    ar: 'التواصل الفعال والإنصات داخل الفريق',
    description: {
      en: 'Learn how to articulate technical concepts clearly, practice active listening during code reviews, and give constructive feedback to peers.',
      ar: 'تعلم كيفية التعبير عن المفاهيم التقنية بوضوح، وممارسة الإنصات النشط أثناء مراجعات الكود، وتقديم ملاحظات بناءة للزملاء.',
    },
  },
  2: {
    en: 'Time Management & Self-Education Mechanics',
    ar: 'إدارة الوقت وآليات التعلم الذاتي',
    description: {
      en: 'Master prioritization techniques for managing bootcamp workload, build sustainable self-study habits with the Pomodoro technique, and develop a growth mindset for independent problem-solving.',
      ar: 'إتقان تقنيات تحديد الأولويات لإدارة عبء عمل المعسكر، وبناء عادات دراسة ذاتية مستدامة بأسلوب بومودورو، وتطوير عقلية النمو لحل المشكلات بشكل مستقل.',
    },
  },
  3: {
    en: 'Problem-Solving Mindset & Analytical Debugging',
    ar: 'عقلية حل المشكلات والبحث المنهجي',
    description: {
      en: 'Develop a structured debugging workflow (reproduce → isolate → research → test → apply), learn to read error messages systematically, and build resilience through methodical trial and error.',
      ar: 'تطوير سير عمل منظم لتصحيح الأخطاء (إعادة الإنتاج → العزل → البحث → الاختبار → التطبيق)، وتعلم قراءة رسائل الأخطاء بشكل منهجي، وبناء المرونة من خلال التجربة والخطأ المنهجيين.',
    },
  },
  4: {
    en: 'Presentation Skills & Technical Pitching',
    ar: 'مهارات العرض وتقديم المشاريع التقنية للعملاء',
    description: {
      en: 'Prepare and deliver a compelling capstone presentation, articulate technical decisions to non-technical audiences, and showcase project outcomes with confidence and clarity.',
      ar: 'تحضير وتقديم عرض مشروع تخرج مقنع، وشرح القرارات التقنية لجمهور غير تقني، وعرض نتائج المشروع بثقة ووضوح.',
    },
  },
};

const L = (id, week, session, phase, title, inClassTopics, selfLearningTopics, assignedTask, taskSolutionCode) => ({
  lectureId: id, week, session, phase, title, inClassTopics, selfLearningTopics, assignedTask, taskSolutionCode,
});

const lectures = [
  // ══════════════════════════════════════════════════════════
  // HTML SPRINT — Lecture 1
  // ══════════════════════════════════════════════════════════
  L(1, 1, 1, 'html',
    { en: 'HTML Foundations — Document Structure & Basic Tags', ar: 'أساسيات HTML — بنية المستند والوسوم الأساسية' },
    {
      en: ['HTML Overview & History: how the web works, how HTML evolved from SGML to HTML5', 'Code Editors: VS Code setup, Live Server extension, Emmet (! + Tab for boilerplate)', 'First HTML Document: DOCTYPE declaration, <html>, <head>, <meta charset>, <title>, <body>', 'Headings (<h1>–<h6>): proper hierarchy for SEO and accessibility', 'Paragraphs (<p>): block-level text containers, whitespace collapse', 'Text Formatting: <strong> (importance), <em> (emphasis), <br>, <hr>, <sub>, <sup>', 'HTML Comments: <!-- --> for documentation and debugging', 'File Paths & Linking Strategy: absolute vs relative paths'],
      ar: ['نظرة عامة على HTML وتاريخه: كيف يعمل الويب، تطور HTML من SGML إلى HTML5', 'محررات الأكواد: إعداد VS Code، إضافة Live Server، Emmet (! + Tab لإنشاء القالب)', 'أول مستند HTML: إعلان DOCTYPE، <html>، <head>، <meta charset>، <title>، <body>', 'العناوين (<h1>–<h6>): التسلسل الهرمي المناسب لتحسين محركات البحث وإمكانية الوصول', 'الفقرات (<p>): حاويات نصية على مستوى الكتلة، انهيار المسافات البيضاء', 'تنسيق النص: <strong> (الأهمية)، <em> (التأكيد)، <br>، <hr>، <sub>، <sup>', 'تعليقات HTML: <!-- --> للتوثيق والتصحيح', 'مسارات الملفات واستراتيجية الربط: المسارات المطلقة والنسبية'],
    },
    {
      en: ['HTML Paragraphs & Line Breaks: <p>, <br>, <pre> for preformatted text', 'HTML Headings Hierarchy: proper nesting (h1 → h2 → h3), one h1 per page rule', 'Text Formatting Deep Dive: <b> vs <strong>, <i> vs <em>, semantic vs presentational'],
      ar: ['فقرات HTML وفواصل الأسطر: <p>، <br>، <pre> للنص المنسق مسبقاً', 'تسلسل العناوين الهرمي: التداخل الصحيح (h1 → h2 → h3)، قاعدة h1 واحد لكل صفحة', 'شرح معمق لتنسيق النص: <b> مقابل <strong>، <i> مقابل <em>، الدلالي مقابل التزييني'],
    },
    {
      title: { en: 'Personal Profile Page', ar: 'صفحة ملف شخصي' },
      objectives: {
        en: ['Master the HTML5 document structure (DOCTYPE, head, body)', 'Apply proper heading hierarchy (h1–h6) for semantic structure', 'Use text formatting tags (<strong>, <em>) to convey meaning', 'Write clean, well-commented code with clear section boundaries'],
        ar: ['إتقان هيكل مستند HTML5 (DOCTYPE, head, body)', 'تطبيق تسلسل هرمي سليم للعناوين (h1–h6) للبنية الدلالية', 'استخدام وسوم تنسيق النص (<strong>، <em>) لنقل المعنى', 'كتابة كود نظيف مع تعليقات وحدود أقسام واضحة'],
      },
      requirements: {
        en: ['Must include a valid DOCTYPE declaration with lang attribute on <html>', 'Must contain at least 3 heading levels (<h1>, <h2>, <h3>)', 'Must use <strong> for importance and <em> for emphasis at least once each', 'Must use <hr> to separate logical sections', 'All HTML must be W3C-valid (no unclosed tags, no duplicate attributes)'],
        ar: ['يجب تضمين إعلان DOCTYPE صالح مع سمة lang على <html>', 'يجب احتواء 3 مستويات عناوين على الأقل', 'يجب استخدام <strong> للأهمية و <em> للتأكيد مرة واحدة على الأقل', 'يجب استخدام <hr> لفصل الأقسام المنطقية', 'يجب أن يكون HTML صالحًا حسب W3C'],
      },
      deliverables: {
        en: ['One file: index.html', 'Self-contained, single HTML document', 'No external CSS or JavaScript required'],
        ar: ['ملف واحد: index.html', 'مستند HTML واحد مستقل', 'لا حاجة لـ CSS خارجي أو JavaScript'],
      },
    },
    '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8" />\n  <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n  <title>My Profile — Ahmed Ali</title>\n</head>\n<body>\n  <!-- ===== HEADER ===== -->\n  <h1>Ahmed Ali</h1>\n  <hr />\n\n  <!-- ===== ABOUT SECTION ===== -->\n  <h2>About Me</h2>\n  <p>\n    I am a <strong>web development student</strong> passionate about building\n    accessible, standards-compliant websites. I believe that\n    <em>clean code</em> is the foundation of great design.\n  </p>\n\n  <h2>My Goals</h2>\n  <h3>Short-Term</h3>\n  <p>Master HTML5 semantics and CSS layout techniques.</p>\n  <h3>Long-Term</h3>\n  <p>Become a full-stack engineer who builds products that matter.</p>\n\n  <hr />\n  <footer>\n    <p>&copy; 2026 Ahmed Ali. Built with HTML.</p>\n  </footer>\n</body>\n</html>'
  ),

  // ══════════════════════════════════════════════════════════
  // HTML SPRINT — Lecture 2
  // ══════════════════════════════════════════════════════════
  L(2, 1, 2, 'html',
    { en: 'HTML Forms & Inputs — Labels, Validation, and Buttons', ar: 'نماذج HTML — حقول الإدخال، التسميات والتحقق' },
    {
      en: ['HTML Forms: <form> element, action attribute, GET vs POST methods', 'Labels & Accessibility: <label>, for attribute connecting to input id, screen reader support', 'Input Types: text, email, password, number, date, url, tel, file', 'Textarea & Select Dropdowns: <textarea> rows/cols, <select> with <option>', 'Buttons: <button> vs <input type="submit">, type="reset"', 'Fieldset & Legend: grouping related form controls for accessibility', 'HTML5 Validation: required, minlength, maxlength, pattern, type-specific validation'],
      ar: ['نماذج HTML: عنصر <form>، سمة action، طريقتي GET و POST', 'التسميات وإمكانية الوصول: <label>، ربط for بمعرف الإدخال، دعم قارئ الشاشة', 'أنواع الإدخال: text، email، password، number، date، url، tel، file', 'حقول النص والقوائم المنسدلة: <textarea>، <select> مع <option>', 'الأزرار: <button> مقابل <input type="submit">، type="reset"', 'مجموعات الحقول: <fieldset> و <legend> لتجميع عناصر التحكم', 'التحقق من صحة HTML5: required، minlength، pattern، التحقق حسب النوع'],
    },
    {
      en: ['Checkboxes (<input type="checkbox">): multiple selection groups, name as array', 'Radio Buttons (<input type="radio">): single selection with shared name attribute', 'CSS accent-color for styling checkbox/radio indicators', 'Advanced input types: range, color, datalist with autocomplete'],
      ar: ['خانات الاختيار: مجموعات اختيار متعدد، name كمصفوفة', 'أزرار الاختيار: اختيار واحد بمشاركة سمة name', 'خاصية accent-color في CSS لتصميم مؤشرات الخيارات', 'أنواع إدخال متقدمة: range، color، datalist مع الإكمال التلقائي'],
    },
    {
      title: { en: 'Multi-Input Registration Form', ar: 'نموذج تسجيل متعدد الحقول' },
      objectives: {
        en: ['Build a complete, accessible HTML form with diverse input types', 'Implement client-side validation using HTML5 attributes', 'Group related form controls with <fieldset> and <legend>', 'Connect labels to inputs via for/id for screen reader support'],
        ar: ['بناء نموذج HTML كامل ومتاح بأنواع إدخال متنوعة', 'تنفيذ التحقق من صحة الإدخال باستخدام خصائص HTML5', 'تجميع عناصر التحكم ذات الصلة بـ <fieldset> و <legend>', 'ربط التسميات بالحقول عبر for/id لدعم قارئ الشاشة'],
      },
      requirements: {
        en: ['Every input must have a corresponding <label> with proper for attribute', 'Must use at least: text, email, password, number, select, radio, checkbox, textarea', 'Must include required, minlength validation on at least 3 fields', 'Must wrap related sections in <fieldset> tags with <legend>', 'Form must have both a submit and reset button', 'No inline JavaScript allowed — validation must be purely HTML5'],
        ar: ['كل حقل يجب أن يكون له <label> مناسب مع سمة for', 'يجب استخدام على الأقل: text، email، password، number، select، radio، checkbox، textarea', 'يجب تضمين required، minlength في 3 حقول على الأقل', 'يجب لف الأقسام ذات الصلة بـ <fieldset> مع <legend>', 'النموذج يجب أن يحتوي على زري إرسال وإعادة تعيين', 'لا يسمح بـ JavaScript — التحقق يجب أن يكون HTML5 فقط'],
      },
      deliverables: {
        en: ['One file: register.html', 'Self-contained HTML form document', 'All validation rules must be functional without JavaScript'],
        ar: ['ملف واحد: register.html', 'مستند نموذج HTML مستقل', 'جميع قواعد التحقق يجب أن تعمل بدون JavaScript'],
      },
    },
    '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8" />\n  <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n  <title>Registration Form</title>\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    body { font-family: system-ui, sans-serif; max-width: 640px; margin: 40px auto; padding: 0 24px; color: #1e293b; }\n    fieldset { border: 2px solid #e2e8f0; border-radius: 12px; padding: 24px; margin-bottom: 20px; }\n    legend { font-weight: 700; color: #6366f1; font-size: 1.1rem; padding: 0 8px; }\n    label { display: block; margin-top: 14px; font-weight: 600; font-size: 14px; color: #334155; }\n    input, select, textarea { width: 100%; padding: 10px 14px; border: 2px solid #e2e8f0; border-radius: 8px; font-size: 14px; box-sizing: border-box; margin-top: 4px; transition: border 0.2s, box-shadow 0.2s; }\n    input:focus, select:focus, textarea:focus { outline: none; border-color: #6366f1; box-shadow: 0 0 0 3px rgba(99,102,241,0.15); }\n    input:invalid { border-color: #ef4444; }\n    .inline-group { display: flex; gap: 20px; flex-wrap: wrap; margin-top: 6px; }\n    .inline-group label { display: inline-flex; align-items: center; gap: 6px; font-weight: 400; margin: 0; cursor: pointer; font-size: 14px; }\n    .inline-group input[type="radio"], .inline-group input[type="checkbox"] { width: auto; margin: 0; accent-color: #6366f1; }\n    .btn-group { margin-top: 20px; display: flex; gap: 12px; }\n    button { padding: 12px 28px; border: none; border-radius: 8px; font-size: 14px; font-weight: 600; cursor: pointer; transition: all 0.2s; }\n    button[type="submit"] { background: #6366f1; color: white; }\n    button[type="submit"]:hover { background: #4f46e5; }\n    button[type="reset"] { background: #e2e8f0; color: #475569; }\n    button[type="reset"]:hover { background: #cbd5e1; }\n  </style>\n</head>\n<body>\n  <form action="#" method="post">\n    <fieldset>\n      <legend>Personal Information</legend>\n      <label for="fullname">Full Name:</label>\n      <input type="text" id="fullname" name="fullname" required minlength="3" placeholder="e.g. Ahmed Ali" />\n      <label for="email">Email:</label>\n      <input type="email" id="email" name="email" required placeholder="ahmed@example.com" />\n      <label for="password">Password:</label>\n      <input type="password" id="password" name="password" required minlength="8" />\n      <label for="age">Age:</label>\n      <input type="number" id="age" name="age" min="16" max="99" required />\n    </fieldset>\n    <fieldset>\n      <legend>Preferences</legend>\n      <label for="country">Country:</label>\n      <select id="country" name="country" required>\n        <option value="">— Select —</option>\n        <option value="eg">Egypt</option>\n        <option value="sa">Saudi Arabia</option>\n        <option value="ae">UAE</option>\n      </select>\n      <label>Gender:</label>\n      <div class="inline-group">\n        <label><input type="radio" name="gender" value="male" required /> Male</label>\n        <label><input type="radio" name="gender" value="female" /> Female</label>\n      </div>\n      <label>Skills:</label>\n      <div class="inline-group">\n        <label><input type="checkbox" name="skills" value="html" /> HTML</label>\n        <label><input type="checkbox" name="skills" value="css" /> CSS</label>\n        <label><input type="checkbox" name="skills" value="js" /> JavaScript</label>\n      </div>\n    </fieldset>\n    <fieldset>\n      <legend>Additional Info</legend>\n      <label for="bio">Bio:</label>\n      <textarea id="bio" name="bio" rows="3" maxlength="500" placeholder="Tell us about yourself..."></textarea>\n    </fieldset>\n    <div class="btn-group">\n      <button type="submit">Register</button>\n      <button type="reset">Reset</button>\n    </div>\n  </form>\n</body>\n</html>'
  ),

  // ══════════════════════════════════════════════════════════
  // HTML SPRINT — Lecture 3
  // ══════════════════════════════════════════════════════════
  L(3, 2, 1, 'html',
    { en: 'HTML Grand Finale — Media, Tables, Lists & Semantic Architecture', ar: 'ختام HTML — الوسائط، الجداول، القوائم والهندسة الدلالية' },
    {
      en: ['Images: <img> with src, alt (required for accessibility), width, height, loading="lazy"', 'Image Formats: JPEG (photos), PNG (transparency), WebP (modern), SVG (vectors)', 'Links: <a> with href, target="_blank" + rel="noopener noreferrer", download attribute', 'Iframes: <iframe> for embedded content, sandbox attribute for security', 'Lists: <ul> (unordered), <ol> (ordered with type/start), <dl> (description)', 'Tables: <table>, <thead>, <tbody>, <tfoot>, <th scope>, <td>, colspan/rowspan', 'Semantic HTML5: <header>, <nav>, <main>, <section>, <article>, <aside>, <footer>', 'HTML lang & dir for i18n, character entities (&copy;, &lt;, &amp;), emoji'],
      ar: ['الصور: <img> مع src، alt (مطلوب لإمكانية الوصول)، width، height، loading="lazy"', 'تنسيقات الصور: JPEG (صور فوتوغرافية)، PNG (شفافية)، WebP (حديث)، SVG (متجهات)', 'الروابط: <a> مع href، target="_blank" + rel="noopener noreferrer"، سمة download', 'الإطارات المضمنة: <iframe> للمحتوى المضمن، سمة sandbox للأمان', 'القوائم: <ul> (غير مرتبة)، <ol> (مرتبة مع type/start)، <dl> (وصفية)', 'الجداول: <table>، <thead>، <tbody>، <tfoot>، <th scope>، <td>، colspan/rowspan', 'HTML5 الدلالي: <header>، <nav>، <main>، <section>، <article>، <aside>، <footer>', 'سمتا lang و dir للتدويل، كيانات الأحرف (&copy;، &lt;، &amp;)، الإيموجي'],
    },
    {
      en: ['Comprehensive Character References: emoji (&#x1F600;), symbols (&hearts;), entities', 'Image Maps: <map> with <area> for clickable image regions', 'Picture Element: <picture> with <source> for responsive images (art direction)', 'ARIA Landmarks: role="navigation", role="banner", WCAG 2.1 best practices'],
      ar: ['مراجع شاملة للرموز: الإيموجي (&#x1F600;)، الرموز (&hearts;)، الكيانات', 'خرائط الصور: <map> مع <area> لمناطق صور قابلة للنقر', 'عنصر <picture>: مع <source> للصور المتجاوبة (توجيه فني)', 'معالم ARIA: role="navigation"، role="banner"، أفضل ممارسات WCAG 2.1'],
    },
    {
      title: { en: 'Multi-Section Business Landing Page — HTML Benchmark', ar: 'صفحة هبوط تجارية متعددة الأقسام — تقييم HTML النهائي' },
      objectives: {
        en: ['Demonstrate mastery of ALL HTML concepts from Lectures 1–3', 'Build a semantic, accessible, and standards-compliant multi-section page', 'Integrate media (images, iframes), tables, forms, and navigation in one cohesive project', 'Implement proper i18n support for RTL/LTR text direction'],
        ar: ['إثبات إتقان جميع مفاهيم HTML من المحاضرات 1–3', 'بناء صفحة دلالية ومتاحة ومتوافقة مع المعايير متعددة الأقسام', 'دمج الوسائط والجداول والنماذج والتنقل في مشروع واحد متماسك', 'تطبيق دعم i18n مناسب لاتجاه النص RTL/LTR'],
      },
      requirements: {
        en: ['Must use semantic HTML5 layout: <header>, <nav>, <main>, <section>, <aside>, <footer>', 'Must include a navigation bar with 4+ anchor links', 'Must embed at least one image with alt text and one YouTube video via <iframe>', 'Must include a pricing table with <thead> and <tbody>', 'Must include a contact form with name, email, message (no JavaScript validation required)', 'Must set html lang attribute appropriately; must support dir="rtl" for Arabic', 'No inline styles allowed — use only embedded <style> in <head>'],
        ar: ['يجب استخدام تخطيط HTML5 دلالي: <header>، <nav>، <main>، <section>، <aside>، <footer>', 'يجب تضمين شريط تنقل بـ 4+ روابط', 'يجب تضمين صورة واحدة على الأقل مع alt وفيديو YouTube عبر <iframe>', 'يجب تضمين جدول أسعار مع <thead> و <tbody>', 'يجب تضمين نموذج اتصال مع الاسم والبريد والرسالة', 'يجب تعيين سمة html lang بشكل مناسب ودعم dir="rtl" للعربية', 'لا يسمح بالأنماط المضمنة — استخدم <style> في <head> فقط'],
      },
      deliverables: {
        en: ['One file: index.html', 'Embedded CSS in <style> within <head>', 'W3C-valid HTML5 document'],
        ar: ['ملف واحد: index.html', 'CSS مضمن في <style> داخل <head>', 'مستند HTML5 صالح حسب W3C'],
      },
    },
    '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8" />\n  <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n  <title>TechCorp — Business Landing Page</title>\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    body { font-family: system-ui, sans-serif; color: #1e293b; line-height: 1.6; }\n    header { background: #1e293b; color: white; padding: 16px 32px; display: flex; justify-content: space-between; align-items: center; }\n    nav a { color: white; text-decoration: none; margin-left: 20px; font-weight: 500; transition: color 0.2s; }\n    nav a:hover { color: #6366f1; }\n    .hero { text-align: center; padding: 80px 32px; background: linear-gradient(135deg, #eef2ff, #f8fafc); }\n    .hero h1 { font-size: clamp(2rem, 5vw, 3rem); margin-bottom: 16px; }\n    .hero p { font-size: 1.2rem; color: #475569; max-width: 600px; margin: 0 auto 32px; }\n    .btn { display: inline-block; background: #6366f1; color: white; padding: 14px 32px; border-radius: 8px; text-decoration: none; font-weight: 600; transition: background 0.2s; }\n    .btn:hover { background: #4f46e5; }\n    section { padding: 64px 32px; max-width: 1100px; margin: 0 auto; }\n    section h2 { font-size: clamp(1.5rem, 3vw, 2rem); margin-bottom: 32px; text-align: center; }\n    .gallery { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 20px; }\n    figure { border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; }\n    figure img { width: 100%; height: 180px; object-fit: cover; display: block; }\n    figcaption { padding: 12px; font-size: 14px; color: #64748b; text-align: center; }\n    table { width: 100%; border-collapse: collapse; margin-top: 16px; }\n    th, td { padding: 12px 16px; border: 1px solid #e2e8f0; text-align: center; }\n    th { background: #6366f1; color: white; }\n    tr:nth-child(even) { background: #f8fafc; }\n    form { max-width: 480px; margin: 0 auto; display: flex; flex-direction: column; gap: 16px; }\n    input, textarea { padding: 12px 16px; border: 2px solid #e2e8f0; border-radius: 8px; font-size: 14px; }\n    input:focus, textarea:focus { outline: none; border-color: #6366f1; }\n    button { background: #6366f1; color: white; padding: 12px 24px; border: none; border-radius: 8px; font-size: 14px; font-weight: 600; cursor: pointer; }\n    button:hover { background: #4f46e5; }\n    footer { background: #1e293b; color: white; text-align: center; padding: 24px; }\n    @media (max-width: 640px) { .hero { padding: 40px 16px; } section { padding: 40px 16px; } }\n  </style>\n</head>\n<body>\n  <header>\n    <strong>TechCorp</strong>\n    <nav>\n      <a href="#home">Home</a>\n      <a href="#services">Services</a>\n      <a href="#pricing">Pricing</a>\n      <a href="#contact">Contact</a>\n    </nav>\n  </header>\n  <main>\n    <section class="hero" id="home">\n      <h1>Build the Future with TechCorp</h1>\n      <p>We deliver enterprise-grade web solutions powered by clean, semantic HTML and modern CSS.</p>\n      <a href="#services" class="btn">Explore Services</a>\n    </section>\n    <section id="services">\n      <h2>Our Services</h2>\n      <div class="gallery">\n        <figure>\n          <img src="https://placehold.co/600x400/6366f1/ffffff?text=Web+Design" alt="Web design mockup showing a modern dashboard interface" />\n          <figcaption>Responsive Web Design</figcaption>\n        </figure>\n        <figure>\n          <img src="https://placehold.co/600x400/a855f7/ffffff?text=Dev" alt="Developer typing code on a laptop" />\n          <figcaption>Full-Stack Development</figcaption>\n        </figure>\n      </div>\n    </section>\n    <section id="pricing">\n      <h2>Pricing Plans</h2>\n      <table>\n        <caption style="caption-side:bottom;margin-top:8px;font-size:13px;color:#64748b;">All prices in USD per month</caption>\n        <thead>\n          <tr><th scope="col">Plan</th><th scope="col">Features</th><th scope="col">Price</th></tr>\n        </thead>\n        <tbody>\n          <tr><th scope="row">Starter</th><td>1 page, basic SEO</td><td>$19</td></tr>\n          <tr><th scope="row">Business</th><td>5 pages, CMS, contact form</td><td>$49</td></tr>\n          <tr><th scope="row">Enterprise</th><td>Unlimited pages, custom dev</td><td>$149</td></tr>\n        </tbody>\n      </table>\n    </section>\n    <section id="media">\n      <h2>Watch Our Demo</h2>\n      <div style="max-width:640px;margin:0 auto;">\n        <iframe width="100%" height="360" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="Demo video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>\n      </div>\n    </section>\n    <section id="contact">\n      <h2>Contact Us</h2>\n      <form>\n        <label for="name">Name:</label>\n        <input type="text" id="name" name="name" required />\n        <label for="email">Email:</label>\n        <input type="email" id="email" name="email" required />\n        <label for="message">Message:</label>\n        <textarea id="message" name="message" rows="4" required></textarea>\n        <button type="submit">Send Message</button>\n      </form>\n    </section>\n  </main>\n  <footer>\n    <p>&copy; 2026 TechCorp. Built with semantic HTML5.</p>\n  </footer>\n</body>\n</html>'
  ),

  // ══════════════════════════════════════════════════════════
  // CSS SPRINT — Lecture 4
  // ══════════════════════════════════════════════════════════
  L(4, 2, 2, 'css',
    { en: 'CSS Foundations — Syntax, Selectors & Typography', ar: 'أساسيات CSS — قواعد الكتابة، المحددات والطباعة' },
    {
      en: ['CSS Syntax: selectors, declaration blocks (property: value;), proper formatting', 'CSS Selectors: element (p), class (.card), ID (#header), descendant (div p), child (div > p)', 'Colors: hex (#6366f1), rgb (rgb(99,102,241)), hsl (hsl(239,84%,67%)), named colors', 'Backgrounds: background-color, background-image, linear-gradient(), radial-gradient()', 'Typography: font-family stacks, font-size (px, rem), font-weight, line-height, text-align', 'Google Fonts Integration: @import in CSS or <link> in HTML', 'CSS Units: px, em, rem, %, vw, vh, fr, clamp()'],
      ar: ['قواعد كتابة CSS: المحددات، كتل الإعلان (property: value;)، التنسيق السليم', 'محددات CSS: العنصر (p)، الفئة (.card)، المعرف (#header)، السليل (div p)، الطفل (div > p)', 'الألوان: ست عشري (#6366f1)، rgb (rgb(99,102,241))، hsl (hsl(239,84%,67%))', 'الخلفيات: background-color، background-image، linear-gradient()، radial-gradient()', 'الطباعة: تسلسلات font-family، font-size، font-weight، line-height، text-align', 'دمج خطوط Google: @import في CSS أو <link> في HTML', 'وحدات CSS: px، em، rem، %، vw، vh، fr، clamp()'],
    },
    {
      en: ['CSS Specificity Calculation: inline > ID > class > element, the cascade rule', 'CSS Custom Properties: --var, var(--var) for themeable values', 'System Font Stack: system-ui, -apple-system, Segoe UI, sans-serif', 'Media Queries: @media (max-width: 640px) for responsive typography'],
      ar: ['حساب أولوية CSS: inline > ID > class > element، قاعدة التتالي', 'الخصائص المخصصة CSS: --var، var(--var) لقيم قابلة للتسمية', 'تسلسل خطوط النظام: system-ui، -apple-system، Segoe UI، sans-serif', 'استعلامات الوسائط: @media (max-width: 640px) للطباعة المتجاوبة'],
    },
    {
      title: { en: 'Styled Semantic Profile — External CSS', ar: 'ملف شخصي دلالي مُصمم — CSS خارجي' },
      objectives: {
        en: ['Apply CSS via an external stylesheet for separation of concerns', 'Use advanced selectors (class, descendant, attribute) to target elements', 'Implement a cohesive color system using hex, rgb, and hsl', 'Configure system font stacks and integrate a Google Font'],
        ar: ['تطبيق CSS عبر ورقة أنماط خارجية لفصل الاهتمامات', 'استخدام محددات متقدمة (فئة، سليل، سمة) لاستهداف العناصر', 'تنفيذ نظام ألوان متماسك باستخدام hex و rgb و hsl', 'تكوين تسلسلات خطوط النظام ودمج خط Google'],
      },
      requirements: {
        en: ['CSS must be in an external file (style.css) — no embedded <style> allowed', 'Must link exactly one Google Font and use it for headings', 'Must apply a gradient background on <header>', 'Must use min-width media query for responsive typography', 'All hover effects must transition smoothly (transition: all 0.2s)', 'No class names or IDs may be single letters — use semantic names like .profile-header'],
        ar: ['CSS في ملف خارجي (style.css) — لا يسمح بـ <style> مضمن', 'يجب ربط خط Google واحد واستخدامه للعناوين', 'يجب تطبيق خلفية متدرجة على <header>', 'يجب استخدام media query للطباعة المتجاوبة', 'جميع تأثيرات التحويم يجب أن تكون سلسة مع transition', 'لا يسمح بأسماء فئة أو معرف بحرف واحد — استخدم أسماء دلالية'],
      },
      deliverables: {
        en: ['Two files: index.html + style.css', 'External stylesheet linked via <link> in <head>', 'Responsive design that works at 320px+ viewport'],
        ar: ['ملفان: index.html + style.css', 'ورقة أنماط خارجية مرتبطة عبر <link> في <head>', 'تصميم متجاوب يعمل على 320px+'],
      },
    },
    '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8" />\n  <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n  <title>Profile — Styled with CSS</title>\n  <link rel="preconnect" href="https://fonts.googleapis.com" />\n  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />\n  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet" />\n  <link rel="stylesheet" href="style.css" />\n</head>\n<body>\n  <header class="profile-header">\n    <h1>Ahmed Ali</h1>\n    <p class="subtitle">Frontend Developer &amp; UI Enthusiast</p>\n  </header>\n  <main>\n    <section class="about-section">\n      <h2>About Me</h2>\n      <p>I specialize in building <strong>accessible, performant</strong> web interfaces with clean HTML and semantic CSS.</p>\n      <a href="#" class="btn-primary">Download Resume</a>\n    </section>\n    <section class="skills-section">\n      <h2>Core Skills</h2>\n      <ul class="skills-list">\n        <li>HTML5 &amp; Semantic Markup</li>\n        <li>CSS3 &amp; Modern Layouts</li>\n        <li>Responsive Design</li>\n      </ul>\n    </section>\n  </main>\n  <footer class="site-footer">\n    <p>&copy; 2026 Ahmed Ali. Built with <span class="heart">&hearts;</span> and clean CSS.</p>\n  </footer>\n</body>\n</html>'
  ),

  // ══════════════════════════════════════════════════════════
  // CSS SPRINT — Lecture 5
  // ══════════════════════════════════════════════════════════
  L(5, 3, 1, 'css',
    { en: 'CSS Box Model & Visual Effects — Border, Padding, Margin, Shadows', ar: 'نموذج الصندوق CSS — الحدود، الحشوة، الهامش والظلال' },
    {
      en: ['The Box Model: content → padding → border → margin, how each layer affects total dimensions', 'Box Sizing: content-box (default) vs border-box (padding+border included in width)', 'Padding Shorthands: 1-value (all), 2-value (vert/horiz), 3-value (top/horiz/bottom), 4-value (TRBL)', 'Border Properties: width, style (solid, dashed, dotted), color, individual sides, border-radius', 'Margin & Collapsing: top/bottom margins collapse to the larger value, left/right do not collapse', 'Width & Height: px, %, vw/vh, min-width, max-width, auto', 'Overflow: visible, hidden, scroll, auto, text-overflow: ellipsis', 'Box-shadow: offset-x, offset-y, blur-radius, spread-radius, color, inset'],
      ar: ['نموذج الصندوق: المحتوى → الحشوة → الحدود → الهامش، كيف تؤثر كل طبقة على الأبعاد الكلية', 'تحجيم الصندوق: content-box (افتراضي) مقابل border-box (الحشوة والحدود ضمن العرض)', 'اختصارات الحشوة: قيمة واحدة (الكل)، قيمتان (عمودي/أفقي)، 3 قيم (أعلى/أفقي/أسفل)، 4 قيم', 'خصائص الحدود: العرض، النمط (solid، dashed، dotted)، اللون، الجوانب الفردية، border-radius', 'الهامش والانهيار: الهوامش العلوية/السفلية تنهار إلى القيمة الأكبر', 'العرض والارتفاع: px، %، vw/vh، min-width، max-width، auto', 'الفائض: visible، hidden، scroll، auto، text-overflow: ellipsis', 'ظل الصندوق: offset-x، offset-y، blur-radius، spread-radius، اللون، inset'],
    },
    {
      en: ['Margin Collapsing Edge Cases: nested margins, empty elements, negative margins', 'Box-shadow Deep Dive: multiple shadows, colored shadows, inset glow effects', 'Outline Property: outline vs border, outline-offset, focus-visible accessibility'],
      ar: ['حالات انهيار الهامش: الهوامش المتداخلة، العناصر الفارغة، الهوامش السالبة', 'شرح معمق لظل الصندوق: ظلال متعددة، ظلال ملونة، تأثيرات التوهج الداخلي', 'خاصية Outline: outline مقابل border، outline-offset، إمكانية الوصول focus-visible'],
    },
    {
      title: { en: 'Pixel-Perfect Product Card UI', ar: 'بطاقة منتج مثالية البيكسل' },
      objectives: {
        en: ['Master the box model to build visually consistent UI cards', 'Use border-radius and box-shadow to create visual depth', 'Apply padding/margin shorthands efficiently for balanced spacing', 'Handle overflow and text truncation for clean content boundaries'],
        ar: ['إتقان نموذج الصندوق لبناء بطاقات واجهة متسقة بصرياً', 'استخدام border-radius و box-shadow لإنشاء عمق بصري', 'تطبيق اختصارات الحشوة/الهامش بكفاءة لتباعد متوازن', 'معالجة الفائض واقتطاع النص لحدود محتوى نظيفة'],
      },
      requirements: {
        en: ['Must create exactly 3 product cards in a row using inline-block or flex layout', 'Each card must have: image placeholder, title, description, price, and a call-to-action button', 'Must demonstrate at least 2 different box-shadow depths across cards', 'Must use border-radius on every card with at least one having a different radius', 'Cards must use box-sizing: border-box with consistent padding (16px minimum)', 'All cards must be responsive — stack vertically on screens under 640px'],
        ar: ['يجب إنشاء 3 بطاقات منتجات في صف واحد باستخدام inline-block أو flex', 'كل بطاقة يجب أن تحتوي على: صورة وهمية، عنوان، وصف، سعر، وزر دعوة للإجراء', 'يجب إظهار عمقين مختلفين على الأقل من box-shadow عبر البطاقات', 'يجب استخدام border-radius على كل بطاقة مع اختلاف نصف القطر في واحدة', 'البطاقات يجب أن تستخدم box-sizing: border-box مع حشوة 16px كحد أدنى', 'جميع البطاقات يجب أن تكون متجاوبة — تتراكم عمودياً على الشاشات تحت 640px'],
      },
      deliverables: {
        en: ['Two files: index.html + style.css', 'External stylesheet with clean, structured CSS', 'Fully responsive product grid'],
        ar: ['ملفان: index.html + style.css', 'ورقة أنماط خارجية نظيفة ومنظمة', 'شبكة منتجات متجاوبة بالكامل'],
      },
    },
    '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8" />\n  <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n  <title>Product Cards — Box Model Demo</title>\n  <link rel="stylesheet" href="style.css" />\n</head>\n<body>\n  <div class="product-grid">\n    <article class="product-card card-shadow-md">\n      <div class="card-image" style="background:#6366f1;"></div>\n      <h3 class="card-title">Wireless Headphones</h3>\n      <p class="card-desc">Premium noise-cancelling headphones with 30-hour battery life.</p>\n      <p class="card-price">$89.99</p>\n      <button class="card-btn">Add to Cart</button>\n    </article>\n    <article class="product-card card-shadow-lg">\n      <div class="card-image" style="background:#a855f7;"></div>\n      <h3 class="card-title">Smart Watch</h3>\n      <p class="card-desc">Fitness tracker with heart-rate monitor and GPS. Water resistant.</p>\n      <p class="card-price">$199.99</p>\n      <button class="card-btn">Add to Cart</button>\n    </article>\n    <article class="product-card card-shadow-sm" style="border-radius:20px;">\n      <div class="card-image" style="background:#22c55e;"></div>\n      <h3 class="card-title">Portable Speaker</h3>\n      <p class="card-desc">Bluetooth 5.3 speaker with deep bass and 12-hour playback.</p>\n      <p class="card-price">$49.99</p>\n      <button class="card-btn">Add to Cart</button>\n    </article>\n  </div>\n</body>\n</html>'
  ),

  // ══════════════════════════════════════════════════════════
  // CSS SPRINT — Lecture 6
  // ══════════════════════════════════════════════════════════
  L(6, 3, 2, 'css',
    { en: 'CSS Layouts — Flexbox, Grid, Positioning & Responsive Patterns', ar: 'تخطيطات CSS — Flexbox، Grid، تحديد المواقع والأنماط المتجاوبة' },
    {
      en: ['Display Property: block, inline, inline-block, none — how elements behave in flow', 'Flexbox: display: flex, flex-direction, justify-content, align-items, flex-wrap, gap, flex shorthand', 'CSS Grid: display: grid, grid-template-columns, grid-template-rows, gap, grid-area, minmax()', 'Positioning: static, relative, absolute, fixed, sticky — when and how to use each', 'Z-Index: stacking context, positioned elements, managing overlap', 'Navbar Patterns: sticky navbar with Flexbox, active state highlighting, hamburger menu on mobile', 'Pure CSS Dropdowns: :hover technique, absolute positioning, z-index layering'],
      ar: ['خاصية العرض: block، inline، inline-block، none — كيف تتصرف العناصر في التدفق', 'Flexbox: display: flex، flex-direction، justify-content، align-items، flex-wrap، gap', 'CSS Grid: display: grid، grid-template-columns، grid-template-rows، gap، minmax()', 'تحديد المواقع: static، relative، absolute، fixed، sticky — متى وكيف تستخدم كل منها', 'Z-Index: سياق التراص، العناصر المموضعة، إدارة التداخل', 'أنماط شريط التنقل: sticky مع Flexbox، تمييز الحالة النشطة، قائمة هامبورجر للجوال', 'القوائم المنسدلة بـ CSS الخالص: تقنية :hover، تحديد المواقع المطلق، تراص z-index'],
    },
    {
      en: ['CSS Forms Styling: focus states, :invalid/:valid pseudo-classes, custom inputs with appearance:none', 'Media Queries: @media breakpoints, mobile-first vs desktop-first approach', 'Responsive Units: fr, minmax(), clamp() for fluid typography and layouts'],
      ar: ['تصميم النماذج CSS: حالات التركيز، الفئات الزائفة :invalid/:valid، حقول الإدخال المخصصة', 'استعلامات الوسائط: نقاط القطع @media، منهجية mobile-first مقابل desktop-first', 'الوحدات المتجاوبة: fr، minmax()، clamp() للطباعة والتخطيطات السائلة'],
    },
    {
      title: { en: 'Multi-Column Dashboard Layout — Responsive', ar: 'تخطيط لوحة تحكم متعدد الأعمدة — متجاوب' },
      objectives: {
        en: ['Combine Flexbox and CSS Grid in a single cohesive page layout', 'Build a sticky sidebar + fixed header with proper z-index layering', 'Implement responsive breakpoints for mobile (320px), tablet (768px), desktop (1280px)', 'Create a pure CSS dropdown navigation without JavaScript'],
        ar: ['دمج Flexbox و CSS Grid في تخطيط صفحة واحد متماسك', 'بناء شريط جانبي ثابت ورأس مثبت مع تراص z-index مناسب', 'تنفيذ نقاط قطع متجاوبة للجوال (320px) والجهاز اللوحي (768px) وسطح المكتب (1280px)', 'إنشاء قائمة منسدلة بـ CSS الخالص بدون JavaScript'],
      },
      requirements: {
        en: ['Page must have: fixed header, sticky sidebar (left), main content area, and footer', 'Sidebar must use Flexbox column layout; main content must use CSS Grid', 'Header must contain a pure CSS dropdown menu (no JavaScript, no :focus hack, only :hover)', 'Must have responsive breakpoints at 640px (mobile) and 1024px (tablet)', 'At 640px: sidebar collapses to a top horizontal bar, grid becomes single column', 'No CSS frameworks allowed — pure CSS only'],
        ar: ['الصفحة يجب أن تحتوي على: رأس ثابت، شريط جانبي ثابت (يسار)، منطقة محتوى رئيسية، وتذييل', 'الشريط الجانبي يستخدم Flexbox عمودي؛ المحتوى الرئيسي يستخدم CSS Grid', 'الرأس يحتوي على قائمة منسدلة بـ CSS الخالص', 'نقاط قطع عند 640px و 1024px', 'عند 640px: الشريط الجانبي يتحول لشريط علوي، الشبكة تصبح عموداً واحداً', 'لا يسمح بأطر CSS — CSS خالص فقط'],
      },
      deliverables: {
        en: ['Two files: index.html + dashboard.css', 'Fully responsive dashboard layout', 'Pure CSS dropdown (no JavaScript)'],
        ar: ['ملفان: index.html + dashboard.css', 'تخطيط لوحة تحكم متجاوب بالكامل', 'قائمة منسدلة بـ CSS الخالص (بدون JavaScript)'],
      },
    },
    '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8" />\n  <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n  <title>Dashboard — Layout Demo</title>\n  <link rel="stylesheet" href="dashboard.css" />\n</head>\n<body>\n  <header class="dash-header">\n    <strong class="brand">MyDash</strong>\n    <nav class="main-nav">\n      <ul>\n        <li><a href="#">Home</a></li>\n        <li class="dropdown-trigger">\n          <a href="#">Reports &#9660;</a>\n          <ul class="dropdown-menu">\n            <li><a href="#">Weekly</a></li>\n            <li><a href="#">Monthly</a></li>\n            <li><a href="#">Custom</a></li>\n          </ul>\n        </li>\n        <li><a href="#">Settings</a></li>\n      </ul>\n    </nav>\n    <div class="user-badge">Admin</div>\n  </header>\n  <div class="dash-layout">\n    <aside class="dash-sidebar">\n      <nav>\n        <a href="#" class="active">Dashboard</a>\n        <a href="#">Analytics</a>\n        <a href="#">Users</a>\n        <a href="#">Orders</a>\n        <a href="#">Products</a>\n      </nav>\n    </aside>\n    <main class="dash-content">\n      <div class="stat-card"><h3>Revenue</h3><p>$12,450</p></div>\n      <div class="stat-card"><h3>Users</h3><p>1,342</p></div>\n      <div class="stat-card"><h3>Orders</h3><p>284</p></div>\n      <div class="stat-card"><h3>Growth</h3><p>+12.5%</p></div>\n    </main>\n  </div>\n  <footer class="dash-footer">&copy; 2026 MyDash. Built with Flexbox &amp; Grid.</footer>\n</body>\n</html>'
  ),

  // ══════════════════════════════════════════════════════════
  // CSS SPRINT + CAPSTONE — Lecture 7
  // ══════════════════════════════════════════════════════════
  L(7, 4, 1, 'css',
    { en: 'Advanced CSS & Capstone Launch — Specificity, Pseudo-elements, Forms Styling & Team Kickoff', ar: 'التنسيق المتقدم وانطلاق مشروع التخرج — Specificity، العناصر الزائفة، تصميم النماذج وانطلاق الفرق' },
    {
      en: ['[HOUR 1 — ADVANCED CSS] CSS Forms Styling: focus states, :invalid/:valid, custom checkboxes with appearance:none', 'CSS Specificity in Practice: calculating weights (0,0,0,0), debugging conflicts, avoiding !important', 'Pseudo-elements: ::before, ::after, content property for decorative icons and tooltips', 'CSS Counters: counter-reset, counter-increment, counters() for automatic numbering in outlines', 'Image Sprites: background-position technique for combining multiple icons into one image', '[HOUR 2 — CAPSTONE LAUNCH] Team Formation Criteria: balanced skills, groups of 3–4, team lead', 'Git & GitHub Workflow: clone, add, commit, push, branch, pull request workflow', 'Project Architecture: file structure, naming conventions, asset organization', 'Graduation Project Requirements & Full Checklist'],
      ar: ['[الساعة الأولى — CSS متقدم] تصميم النماذج: حالات التركيز، :invalid/:valid، خانات اختيار مخصصة', 'أولوية CSS عملياً: حساب الأوزان (0,0,0,0)، حل التعارضات، تجنب !important', 'العناصر الزائفة: ::before، ::after، خاصية content للأيقونات التزيينية وتلميحات الأدوات', 'عدادات CSS: counter-reset، counter-increment، counters() للترقيم التلقائي', 'الصور المقتطعة: تقنية background-position لدمج أيقونات متعددة في صورة واحدة', '[الساعة الثانية — انطلاق المشروع] معايير تشكيل الفرق: مهارات متوازنة، مجموعات 3–4، قائد فريق', 'سير عمل Git: clone, add, commit, push, branch, pull request', 'هندسة المشروع: هيكل الملفات، اتفاقيات التسمية، تنظيم الأصول', 'متطلبات مشروع التخرج وقائمة الفحص الكاملة'],
    },
    {
      en: ['Git Branching Strategies: Git Flow vs trunk-based development', '.gitignore Best Practices: ignoring node_modules, .env, OS files', 'Markdown for README: headings, code blocks, tables, task lists', 'CSS :has() Parent Selector: styling parent based on child state', 'CSS Container Queries: @container for component-level responsiveness'],
      ar: ['استراتيجيات تفرع Git: Git Flow مقابل trunk-based', 'أفضل ممارسات .gitignore: تجاهل node_modules، .env، ملفات النظام', 'Markdown لملف README: العناوين، كتل الكود، الجداول، قوائم المهام', 'محدد :has() الأب في CSS: تصميم الأب بناءً على حالة الطفل', 'استعلامات الحاوية CSS: @container للاستجابة على مستوى المكون'],
    },
    {
      title: { en: 'Styled Contact Form + Capstone Project Kickoff', ar: 'نموذج اتصال مُصمم + انطلاق مشروع التخرج' },
      objectives: {
        en: ['Style a complete, accessible contact form with advanced CSS techniques', 'Apply specificity knowledge to override inherited styles cleanly', 'Use ::before / ::after pseudo-elements for decorative form accents', 'Collaborate on a shared GitHub repository with proper branching strategy'],
        ar: ['تصميم نموذج اتصال كامل ومتاح بتقنيات CSS متقدمة', 'تطبيق معرفة أولوية CSS لتجاوز الأنماط الموروثة', 'استخدام ::before / ::after للزخارف في النموذج', 'التعاون على مستودع GitHub مشترك باستراتيجية تفرع مناسبة'],
      },
      requirements: {
        en: ['Form inputs must have custom focus ring styles (not the default browser outline)', 'Must use ::before or ::after on at least one element for decorative purpose', 'Checkbox/radio must use appearance: none with custom pseudo-element indicators', 'Must demonstrate specificity awareness: use class selectors (not !important) to resolve any style conflicts', 'CSS must validate cleanly via W3C CSS Validator (no parsing errors)', 'Team repo must have: README.md, .gitignore, index.html, style.css, assets/'],
        ar: ['حقول الإدخال يجب أن تحتوي على أنماط تركيز مخصصة', 'يجب استخدام ::before أو ::after على عنصر واحد على الأقل للزخرفة', 'خانة الاختيار/الراديو يجب أن تستخدم appearance: none مع ::before', 'يجب إظهار فهم الأولوية: استخدم محددات الفئة (وليس !important)', 'CSS يجب أن يتحقق عبر مدقق W3C', 'مستودع الفريق يجب أن يحتوي على README.md و .gitignore'],
      },
      deliverables: {
        en: ['Team GitHub repository with: index.html, style.css, assets/, README.md, .gitignore', 'Styled contact form with custom validation states and pseudo-element accents', 'Project board on GitHub with To Do / In Progress / Review / Done columns', 'README.md documenting team name, vision, member roles, and milestones'],
        ar: ['مستودع GitHub للفريق مع: index.html, style.css, assets/, README.md, .gitignore', 'نموذج اتصال مُصمم مع حالات تحقق مخصصة', 'لوحة مشروع على GitHub بأعمدة To Do / In Progress / Review / Done', 'README.md يوثق اسم الفريق والرؤية والأدوار والمعالم'],
      },
    },
    '# TechCorp — Graduation Project\n\n## Vision\nA modern, responsive business website showcasing our team\'s mastery of HTML & CSS.\n\n## Target Audience\nSmall to medium businesses seeking a professional web presence.\n\n## Team Roles\n- **Ahmed** — Team Lead, HTML Architecture\n- **Sara** — CSS Framework, Responsive Design\n- **Omar** — Components & Styling\n- **Noor** — Documentation & QA\n\n## Milestones\n1. **Week 4 Session 1:** HTML skeleton + CSS foundation\n2. **Week 4 Session 2:** Complete component library + responsive layout\n3. **Final Review:** Polish, validation, presentation\n\n## File Structure\n```\nproject/\n├── index.html\n├── style.css\n├── assets/\n│   ├── images/\n│   └── icons/\n├── README.md\n└── .gitignore\n```\n\n## Getting Started\n```bash\ngit clone https://github.com/team/project.git\ncd project\nopen index.html\n```\n\n### Team Deliverables Checklist\n- [ ] Repository created on GitHub\n- [ ] README.md written with vision and roles\n- [ ] Project board set up (To Do / In Progress / Review / Done)\n- [ ] HTML skeleton (index.html) pushed to main\n- [ ] CSS file (style.css) linked and pushed\n- [ ] .gitignore configured for OS files\n- [ ] Team roles documented\n- [ ] 3 milestones defined on GitHub\n- [ ] Each member has made >=1 commit\n- [ ] Project plan presented to instructor for approval'
  ),

  // ══════════════════════════════════════════════════════════
  // PROJECT SCRUTINY — Lecture 8
  // ══════════════════════════════════════════════════════════
  L(8, 4, 2, 'review',
    { en: 'Project Scrutiny & Backlog Clearing — Mentoring, Evaluation & Final Review', ar: 'فحص المشاريع وإنجاز المتراكم — التوجيه الفردي والتقييم والمراجعة النهائية' },
    {
      en: ['NO NEW TECHNICAL TOPICS — Dedicated to live mentoring and project review', 'One-on-one codebase review with each team (15 min per team)', 'Technical unblocking: specificity bugs, layout breaks, form validation issues', 'Performance metrics evaluation: attendance, assignment completion, quiz scores, project progress', 'Backlog clearing: outstanding assignments from Lectures 1–7', 'Final capstone Q&A session and roadmap adjustment', 'Presentation rehearsal: slides review, live demo dry-run, pitching practice'],
      ar: ['لا توجد مواضيع تقنية جديدة — مخصصة للتوجيه المباشر ومراجعة المشاريع', 'مراجعة قاعدة الكود مع كل فريق (15 دقيقة لكل فريق)', 'حل المشكلات التقنية: أخطاء الأولوية، مشاكل التخطيط، التحقق من النماذج', 'تقييم مقاييس الأداء: الحضور، إكمال التاسكات، درجات الاختبارات، تقدم المشروع', 'إنجاز المتراكم: التاسكات المتأخرة من المحاضرات 1–7', 'جلسة أسئلة وأجوبة نهائية وتعديل خريطة الطريق', 'بروفة العرض التقديمي: مراجعة الشرائح، تجربة العرض المباشر، ممارسة التقديم'],
    },
    {
      en: ['N/A — All effort focused on capstone project completion and presentation preparation. No new self-learning content assigned.'],
      ar: ['غير متاح — كل الجهد مركز على إكمال مشروع التخرج وتجهيز العرض التقديمي. لا توجد مهام تعلم ذاتي جديدة.'],
    },
    {
      title: { en: 'Final Scrutiny Checklist & Code Polish', ar: 'قائمة الفحص النهائية وتلميع الكود' },
      objectives: {
        en: ['Resolve all outstanding technical debt across Lectures 1–7', 'Ensure all code passes W3C validation (HTML + CSS)', 'Complete the capstone project to a production-ready state', 'Prepare final presentation and team retrospective'],
        ar: ['حل جميع الديون التقنية المتراكمة من المحاضرات 1–7', 'ضمان اجتياز جميع الكود لفحص W3C (HTML + CSS)', 'إكمال مشروع التخرج بحالة جاهزة للإنتاج', 'تحضير العرض التقديمي النهائي ومراجعة الفريق'],
      },
      requirements: {
        en: ['All HTML must pass W3C validation with zero errors', 'All CSS must pass W3C CSS validation with zero errors', 'Responsive layout must be verified at 320px, 768px, and 1280px breakpoints', 'Each team member must have at least 3 commits in the project repository', 'All outstanding tasks from Lectures 1–7 must be submitted before session end', 'Final presentation must include: project demo, team contributions, technical challenges, and lessons learned'],
        ar: ['جميع HTML يجب أن يجتاز فحص W3C بدون أخطاء', 'جميع CSS يجب أن يجتاز فحص W3C بدون أخطاء', 'التخطيط المتجاوب يجب التحقق منه على 320px و 768px و 1280px', 'كل عضو فريق يجب أن يكون لديه 3 commits على الأقل', 'جميع التاسكات المتأخرة من المحاضرات 1–7 يجب تسليمها', 'العرض النهائي يجب أن يشمل: عرض المشروع ومساهمات الفريق والتحديات التقنية والدروس المستفادة'],
      },
      deliverables: {
        en: ['Complete capstone project repository (final push)', 'One team retrospective document (Markdown)', 'Final presentation (slides, live demo, or both)'],
        ar: ['مستودع مشروع التخرج الكامل (آخر push)', 'مستند مراجعة الفريق (Markdown)', 'العرض التقديمي النهائي (شرائح أو عرض مباشر أو كليهما)'],
      },
    },
    '<!-- LECTURE 8: EVALUATION FRAMEWORK -->\n<!-- Instructor KPI Dashboard -->\n<!-- ========================= -->\n<!-- Student Name: _______________ -->\n<!--\n  Attendance (20%):     ___ / 20\n  - Lectures attended:   ___ / 8\n  - Punctuality bonus:   ___ / +2\n\n  Assignments (40%):    ___ / 40\n  - L1 Profile HTML:    ___ / 5\n  - L2 Registration:    ___ / 5\n  - L3 HTML Benchmark:  ___ / 10\n  - L4 CSS Foundation:  ___ / 5\n  - L5 Box Model:       ___ / 5\n  - L6 Layout:          ___ / 5\n  - L7 Contact+Capstone:___ / 5\n\n  Self-Learning (20%):  ___ / 20\n  - Quiz scores avg:    ___ / 15\n  - Self-study tasks:   ___ / 5\n\n  Capstone (20%):       ___ / 20\n  - Team contribution:  ___ / 8\n  - Code quality:       ___ / 6\n  - Presentation:       ___ / 6\n\n  FINAL SCORE:          ___ / 100\n  PASS (>=70):          __ Yes / __ No\n\nFINAL SCRUTINY CHECKLIST\n- [ ] Codebase review completed with instructor\n- [ ] All technical blockers resolved\n- [ ] Outstanding L1-7 tasks submitted\n- [ ] HTML validated (W3C): 0 errors\n- [ ] CSS validated (W3C): 0 errors\n- [ ] Responsive layout verified: 320px, 768px, 1280px\n- [ ] Final presentation ready\n- [ ] All team members >=3 commits\n-->'
  ),
];

export default lectures;

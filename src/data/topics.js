const H = (id, order, chapter, title, explanation, mockupType, mockup, codeSample, codeBreakdown, boilerplateCode) =>
  ({ id, category: 'html', chapter, order, title, explanation, mockupType, mockup, codeSample, codeBreakdown, boilerplateCode: boilerplateCode || '' });

const DEFAULT_BOILERPLATE = '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>HTML Playground</title>\n</head>\n<body>\n  \n</body>\n</html>';

const S = (char, code) => ({ char, code });

const chapters = [
  { id: 1, title: { en: 'Foundations', ar: 'فهم الأساسيات' } },
  { id: 2, title: { en: 'Typography & Text', ar: 'تنسيق الفقرات' } },
  { id: 3, title: { en: 'Lists & Tables', ar: 'القوائم و الجداول' } },
  { id: 4, title: { en: 'Media & Layouts', ar: 'الوسائط و الصفحات الداخلية' } },
  { id: 5, title: { en: 'Forms & Inputs', ar: 'بناء النماذج' } },
  { id: 6, title: { en: 'Internationalization & i18n', ar: 'تحديد لغة الصفحة' } },
  { id: 7, title: { en: 'Comprehensive Character References', ar: 'مراجع شاملة' } },
];

const topics = [

  // ═══════════════════════════════════════════════════════════════
  // CHAPTER 1: Foundations (3 topics)
  // ═══════════════════════════════════════════════════════════════

  H(
    'html-overview',
    1,
    1,
    { en: 'HTML Overview', ar: 'HTML - نظرة عامة' },
    {
      en: 'HTML (HyperText Markup Language) is the standard language for creating web pages. It uses tags to structure content — headings, paragraphs, links, images, and more. Every website you visit is built on HTML. Browsers read HTML and render it as a visual page. HTML is not a programming language; it is a markup language that describes the structure of content.\n\nHTML documents are plain text files with a .html extension. They begin with a DOCTYPE declaration and contain nested elements forming a tree structure called the DOM (Document Object Model). HTML works together with CSS (styling) and JavaScript (interactivity) to create complete web experiences.',
      ar: 'HTML (لغة ترميز النص الفائق) هي اللغة القياسية لإنشاء صفحات الويب. تستخدم الوسوم (tags) لتنظيم المحتوى — العناوين، الفقرات، الروابط، الصور، وغيرها. كل موقع تزوره مبني على HTML. المتصفحات تقرأ HTML وتعرضه كصفحة مرئية. HTML ليست لغة برمجة؛ إنها لغة ترميز تصف هيكل المحتوى.\n\nمستندات HTML هي ملفات نصية عادية بامتداد .html. تبدأ بإعلان DOCTYPE وتحتوي على عناصر متداخلة تشكل بنية شجرية تسمى DOM. تعمل HTML مع CSS (التنسيق) و JavaScript (التفاعلية) لإنشاء تجارب ويب كاملة.',
    },
    'html-syntax',
    {
      variant: 'document',
      caption: { en: 'HTML document structure showing nested elements: DOCTYPE, <html>, <head>, <title>, and <body> with content tags.', ar: 'هيكل مستند HTML يظهر العناصر المتداخلة: DOCTYPE و <html> و <head> و <title> و <body> مع وسوم المحتوى.' },
      blocks: [
        { tag: '<!DOCTYPE html>', attrs: null, content: 'Document type declaration', bg: 'bg-white dark:bg-zinc-800' },
        { tag: '<html>', attrs: null, content: 'Root element', bg: 'bg-zinc-50 dark:bg-zinc-800/50' },
        { tag: '<head>', attrs: null, content: 'Metadata container', bg: 'bg-white dark:bg-zinc-800' },
        { tag: '<title>Page Title</title>', attrs: null, content: 'Browser tab title', bg: 'bg-zinc-50 dark:bg-zinc-800/50' },
        { tag: '<body>', attrs: null, content: 'Visible content area', bg: 'bg-white dark:bg-zinc-800' },
        { tag: '<h1>Heading</h1>', attrs: null, content: 'Main heading', bg: 'bg-zinc-50 dark:bg-zinc-800/50' },
        { tag: '<p>Paragraph</p>', attrs: null, content: 'Text paragraph', bg: 'bg-white dark:bg-zinc-800' },
        { tag: '</html>', attrs: null, content: 'Close root element', bg: 'bg-zinc-50 dark:bg-zinc-800/50' },
      ],
    },
    '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>My First HTML Page</title>\n</head>\n<body>\n  <h1>Welcome to HTML</h1>\n  <p>This is my first paragraph.</p>\n</body>\n</html>',
    [
      { lineOrElement: '<!DOCTYPE html>', explanationEn: 'Declares the document type as HTML5. Must be the very first line. Without it, browsers render in quirks mode which can break layouts.', explanationAr: 'يُعلن أن نوع المستند هو HTML5. يجب أن يكون أول سطر. بدونه يعمل المتصفح في وضع quirks mode الذي قد يكسر التخطيط.' },
      { lineOrElement: '<meta charset="UTF-8">', explanationEn: 'Sets character encoding to UTF-8 which supports all languages including Arabic. Must be inside <head>. Without it, special characters may display as garbled text.', explanationAr: 'يحدد ترميز الأحرف إلى UTF-8 الذي يدعم جميع اللغات بما فيها العربية. بدونه قد تظهر الأحرف الخاصة مشوشة.' },
      { lineOrElement: '<title>My First HTML Page</title>', explanationEn: 'Defines the page title shown in the browser tab, search engine results, and bookmarks. Every page must have a unique, descriptive title for SEO.', explanationAr: 'يحدد عنوان الصفحة الذي يظهر في علامة تبويب المتصفح ونتائج البحث والمراجع. كل صفحة تحتاج عنواناً فريداً ووصفياً لتحسين محركات البحث.' },
    ]
  ),


  H(
    'html-editors',
    2,
    1,
    { en: 'HTML Editors', ar: 'HTML - المحررات' },
    {
      en: 'HTML can be written in any text editor — from simple Notepad to professional IDEs. The choice of editor affects your productivity but not the HTML output. Recommended editors include VS Code (free, most popular), Sublime Text, WebStorm, and online editors like CodePen.\n\nKey features to look for: syntax highlighting (colors different parts of code), live preview, Emmet abbreviations (type shorthand and expand to full HTML), integrated terminal, and extensions. VS Code with the Live Server extension provides real-time browser reload on file save. Online editors are great for quick experiments.',
      ar: 'يمكن كتابة HTML في أي محرر نصوص — من Notepad البسيط إلى بيئات التطوير المتكاملة. المحررات الموصى بها: VS Code (مجاني وشائع)، Sublime Text، WebStorm، والمحررات أونلاين مثل CodePen.\n\nالميزات الرئيسية: تلوين الصياغة، المعاينة المباشرة، اختصارات Emmet، الطرفية المدمجة، والإضافات. VS Code مع إضافة Live Server يعيد تحميل المتصفح مباشرة عند حفظ الملف.',
    },
    'html-syntax',
    {
      variant: 'document',
      caption: { en: 'Popular HTML editors and their key features for web development.', ar: 'محررات HTML الشائعة وميزاتها الرئيسية لتطوير الويب.' },
      blocks: [
        { tag: 'VS Code', attrs: null, content: 'Free, most popular, vast extensions', bg: 'bg-white dark:bg-zinc-800' },
        { tag: 'Sublime Text', attrs: null, content: 'Fast, lightweight, paid license', bg: 'bg-zinc-50 dark:bg-zinc-800/50' },
        { tag: 'WebStorm', attrs: null, content: 'Full IDE, paid, powerful refactoring', bg: 'bg-white dark:bg-zinc-800' },
        { tag: 'CodePen', attrs: null, content: 'Online editor, instant sharing', bg: 'bg-zinc-50 dark:bg-zinc-800/50' },
        { tag: 'Notepad++', attrs: null, content: 'Windows native, minimal', bg: 'bg-white dark:bg-zinc-800' },
      ],
    },
    '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <title>Getting Started</title>\n</head>\n<body>\n  <p>Open this file in your browser to see the result.</p>\n  <p>Edit the file in VS Code, save, and refresh the browser.</p>\n</body>\n</html>',
    [
      { lineOrElement: 'VS Code with Live Server extension', explanationEn: 'VS Code is the industry-standard editor. Install extensions: Live Server (auto-reload), Prettier (code formatting), and HTML CSS Support. Press ! + Tab to generate HTML boilerplate via Emmet.', explanationAr: 'VS Code هو المحرر المعياري في الصناعة. ثبت الإضافات: Live Server (إعادة تحميل تلقائي)، Prettier (تنسيق الكود)، و HTML CSS Support.' },
      { lineOrElement: 'Emmet abbreviation: ! + Tab', explanationEn: 'Type an exclamation mark (!) and press Tab in VS Code to auto-generate the full HTML5 boilerplate with DOCTYPE, head, meta tags, and body. This is the fastest way to start any HTML file.', explanationAr: 'اكتب علامة تعجب (!) واضغط Tab في VS Code لإنشاء قالب HTML5 الكامل تلقائياً.' },
    ]
  ),

  H(
    'html-basics',
    3,
    1,
    { en: 'HTML Basics', ar: 'HTML - أساسيات اللغة' },
    {
      en: '<p>An HTML document is structured as a <strong>tree of nested elements</strong>. Every element is defined by a start tag <code>&lt;tagname&gt;</code>, optional attributes, content, and an end tag <code>&lt;/tagname&gt;</code>. Some elements are <strong>self-closing</strong> (no end tag — e.g., <code>&lt;img&gt;</code>, <code>&lt;br&gt;</code>, <code>&lt;hr&gt;</code>).</p><p>The minimal valid HTML5 document requires these structural parts:</p><ul><li><code>&lt;!DOCTYPE html&gt;</code> — Document type declaration (standards mode)</li><li><code>&lt;html&gt;</code> — Root element wrapping everything</li><li><code>&lt;head&gt;</code> — Metadata container (<code>&lt;title&gt;</code> is required)</li><li><code>&lt;body&gt;</code> — All visible content goes here</li></ul><p>Elements can have <strong>attributes</strong> that provide additional information. Common attributes include:</p><ul><li><code>id</code> — Unique identifier (use once per page)</li><li><code>class</code> — CSS class for styling</li><li><code>src</code> — Source URL (images, scripts)</li><li><code>alt</code> — Alternative text (required for accessibility)</li><li><code>href</code> — Link destination</li><li><code>lang</code> — Language declaration</li></ul><p>Attributes are always written as <code>name="value"</code> pairs inside the opening tag. While HTML is forgiving and browsers try to render even invalid code, writing <strong>valid, semantic HTML</strong> ensures proper accessibility, SEO rankings, and long-term maintainability.</p>',
      ar: '<p>مستند HTML منظم كـ <strong>شجرة من العناصر المتداخلة</strong>. كل عنصر يُعرف بوسم بداية <code>&lt;tagname&gt;</code>، سمات اختيارية، محتوى، ووسم نهاية <code>&lt;/tagname&gt;</code>. بعض العناصر <strong>تغلق ذاتياً</strong> (ليس لها وسم نهاية — مثل <code>&lt;img&gt;</code>، <code>&lt;br&gt;</code>، <code>&lt;hr&gt;</code>).</p><p>الحد الأدنى لمستند HTML5 الصحيح يتطلب:</p><ul><li><code>&lt;!DOCTYPE html&gt;</code> — إعلان نوع المستند</li><li><code>&lt;html&gt;</code> — العنصر الجذر</li><li><code>&lt;head&gt;</code> — حاوية البيانات الوصفية (<code>&lt;title&gt;</code> مطلوب)</li><li><code>&lt;body&gt;</code> — كل المحتوى المرئي</li></ul><p>يمكن للعناصر أن تحمل <strong>سمات</strong> توفر معلومات إضافية مثل <code>id</code> (معرف فريد)، <code>class</code> (فئة)، <code>src</code> (مصدر)، <code>alt</code> (نص بديل)، <code>href</code> (وجهة الرابط)، و <code>lang</code> (اللغة). تُكتب السمات كأزواج <code>name="value"</code> داخل وسم البداية. كتابة HTML <strong>صالح ودلالي</strong> تضمن سهولة الوصول وتحسين محركات البحث.</p>',
    },
    'nested-tags',
    {
      caption: { en: 'The nested structure of an HTML document: <html> wraps <head> and <body>. <head> contains <title>. <body> holds visible elements like <h1>, <p>, and <img>.', ar: 'البنية المتداخلة لمستند HTML: <html> يلف <head> و <body>. <head> يحتوي <title>. <body> يحمل العناصر المرئية مثل <h1> و <p> و <img>.' },
    },
    '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>My Personal Website</title>\n</head>\n<body>\n  <h1>Welcome to My Site</h1>\n  <p>This is a paragraph about HTML basics. HTML is easy to learn!</p>\n  <img src="profile.jpg" alt="Profile photo of the author" width="200">\n  <a href="https://example.com">Visit Example</a>\n</body>\n</html>',
    [
      { lineOrElement: '<!DOCTYPE html>', explanationEn: 'HTML5 doctype — must be the very first line. This instructs the browser to render in standards mode, ensuring consistent box models and layout across different browsers (Chrome, Firefox, Safari, Edge).', explanationAr: 'نوع مستند HTML5 — يجب أن يكون أول سطر. يوجه المتصفح للعمل في standards mode لضمان تناسق نموذج الصندوق والتخطيط عبر المتصفحات المختلفة.' },
      { lineOrElement: '<html lang="en">', explanationEn: 'The root element wrapping all page content. The lang attribute declares the primary language — essential for screen readers (correct pronunciation), search engines (language targeting), and browser translation features. lang="ar" for Arabic pages.', explanationAr: 'العنصر الجذر الذي يلف كل محتوى الصفحة. السمة lang تعلن اللغة الأساسية — ضرورية لقارئات الشاشة ومحركات البحث وترجمة المتصفح.' },
      { lineOrElement: '<head>', explanationEn: 'Container for metadata — information about the page that is not displayed. Contains <title>, <meta> tags (charset, viewport, description, keywords), <link> for CSS, and <script> for JavaScript. Everything in <head> loads before the body.', explanationAr: 'حاوية للبيانات الوصفية — معلومات عن الصفحة لا تُعرض. تحتوي <title> ووسوم <meta> و <link> لـ CSS و <script> لـ JavaScript.' },
      { lineOrElement: '<title>My Personal Website</title>', explanationEn: 'Sets the browser tab title, the heading in search engine results (SERP), and the default bookmark name. Every page needs a unique, descriptive title under 60 characters for optimal SEO display.', explanationAr: 'يحدد عنوان علامة تبويب المتصفح والعنوان في نتائج محركات البحث واسم الإشارة المرجعية. كل صفحة تحتاج عنواناً فريداً ووصفياً.' },
      { lineOrElement: '<h1>Welcome to My Site</h1>', explanationEn: 'Top-level heading. Use exactly ONE <h1> per page — it represents the main topic. Search engines give <h1> significant weight for ranking. The <h1> should contain the page\'s primary keyword and match the <title> conceptually.', explanationAr: 'أعلى مستوى عنوان. استخدم <h1> واحداً فقط لكل صفحة — يمثل الموضوع الرئيسي. محركات البحث تعطي <h1> وزناً كبيراً للترتيب.' },
      { lineOrElement: '<img src="profile.jpg" alt="Profile photo" width="200">', explanationEn: 'Self-closing tag (no </img>). src specifies the image file path. alt provides alternative text — required for accessibility and SEO. width reserves space preventing layout shifts (CLS). Always set dimensions on images.', explanationAr: 'وسم يغلق ذاتياً (لا يحتاج </img>). src يحدد مسار ملف الصورة. alt يوفر نصاً بديلاً — مطلوب لسهولة الوصول وتحسين محركات البحث.' },
      { lineOrElement: '<a href="https://example.com">Visit Example</a>', explanationEn: 'Anchor element creates a hyperlink. href is the destination URL. The text between <a> and </a> is the clickable link text — always write descriptive text (not "click here"). Use target="_blank" for external links with rel="noopener noreferrer".', explanationAr: 'عنصر الرابط ينشئ ارتباطاً تشعبياً. href هو URL الوجهة. النص بين <a> و </a> هو النص القابل للنقر — اكتب دائماً نصاً وصفياً.' },
      { lineOrElement: '<meta name="viewport" content="width=device-width, initial-scale=1.0">', explanationEn: 'Essential for responsive design. width=device-width sets the viewport to match the device screen width. initial-scale=1.0 sets the default zoom level. Without this, mobile browsers render pages zoomed out (like desktop view).', explanationAr: 'ضروري للتصميم المتجاوب. width=device-width يضبط نافذة العرض لمطابقة عرض شاشة الجهاز. initial-scale=1.0 يحدد مستوى التكبير الافتراضي.' },
    ],
    '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>HTML Playground</title>\n  <style>\n    body { font-family: system-ui, sans-serif; padding: 24px; max-width: 640px; margin: 0 auto; line-height: 1.6; color: #1e293b; }\n    h1 { color: #6366f1; }\n    code { background: #eef2ff; padding: 2px 6px; border-radius: 4px; font-size: 0.9em; }\n  </style>\n</head>\n<body>\n  <h1>Welcome to HTML</h1>\n  <p>HTML stands for <strong>HyperText Markup Language</strong>. It structures the web.</p>\n  <p>Try editing this code to see how HTML works in real time!</p>\n  <p>You can use <code>&lt;strong&gt;</code>, <code>&lt;em&gt;</code>, and <code>&lt;a&gt;</code> tags.</p>\n</body>\n</html>'
  ),

  // ═══════════════════════════════════════════════════════════════
  // CHAPTER 2: Typography & Text (6 topics)
  // ═══════════════════════════════════════════════════════════════

  H(
    'html-paragraphs',
    1,
    2,
    { en: 'HTML Paragraphs', ar: 'HTML - الفقرات' },
    {
      en: 'The <p> element defines a paragraph. Browsers automatically add vertical margins (gap) before and after each <p>. Unlike line breaks (<br>), <p> creates a block-level separation with semantic meaning — it represents a distinct block of text.\n\nIn HTML, multiple spaces and line breaks in the source code collapse into a single space when rendered. This is called whitespace collapse. To preserve whitespace, use <pre> or CSS white-space property. Use <br> for line breaks within a paragraph (e.g., poems, addresses).',
      ar: 'عنصر <p> يحدد فقرة. تضيف المتصفحات هوامش رأسية (فراغاً) تلقائياً قبل وبعد كل <p>. على عكس فاصل الأسطر <br>، ينشئ <p> فصلاً على مستوى الكتلة مع معنى دلالي — يمثل كتلة نصية متميزة.\n\nفي HTML، المسافات المتعددة وفواصل الأسطر في الكود المصدري تندمج في مسافة واحدة عند العرض. هذا يسمى انهيار المسافات البيضاء. للحفاظ على المسافات استخدم <pre> أو خاصية white-space في CSS.',
    },
    'html-syntax',
    {
      variant: 'text',
      caption: { en: 'The <p> element creates block-level paragraphs with automatic margins. Use <br> for inline line breaks. Whitespace collapse merges multiple spaces into one.', ar: 'عنصر <p> ينشئ فقرات على مستوى الكتلة بهوامش تلقائية. استخدم <br> لفواصل الأسطر السطرية.' },
      blocks: [
        { tag: '<p>', attrs: null, content: 'Block-level paragraph container', bg: 'bg-white dark:bg-zinc-800' },
        { tag: '<p>Text content here...</p>', attrs: null, content: 'Auto margins top & bottom', bg: 'bg-zinc-50 dark:bg-zinc-800/50' },
        { tag: '<br>', attrs: null, content: 'Line break (inline, self-closing)', bg: 'bg-white dark:bg-zinc-800' },
      ],
    },
    '<h2>Sample Paragraphs</h2>\n<p>This is the first paragraph. Notice the gap between this and the next paragraph is automatic.</p>\n<p>This is the second paragraph. Multiple   spaces   collapse into one.<br>This line uses <br> for a break inside the same paragraph.</p>\n<pre>Preformatted text\n  preserves     whitespace\n    and line breaks exactly as written.</pre>',
    [
      { lineOrElement: '<p>...</p>', explanationEn: 'Paragraph tag. Block-level element with automatic margin-top and margin-bottom. Used for distinct blocks of text. Never nest <p> inside another <p> — the browser closes the outer <p> automatically.', explanationAr: 'وسم الفقرة. عنصر على مستوى الكتلة بهوامش علوية وسفلية تلقائية. لا تتداخل <p> داخل <p> آخر.' },
      { lineOrElement: '<br>', explanationEn: 'Line break — self-closing. Use for inline breaks within a paragraph (e.g., addresses, song lyrics). Do NOT use for spacing between paragraphs — use CSS margins and <p> tags instead.', explanationAr: 'فاصل أسطر — يغلق ذاتياً. استخدم للفواصل السطرية داخل الفقرة. لا تستخدمه للتباعد بين الفقرات.' },
      { lineOrElement: '<pre>...</pre>', explanationEn: 'Preformatted text — preserves all whitespace and line breaks exactly as typed. Rendered in monospace font by default. Ideal for code blocks, ASCII art, and poetry.', explanationAr: 'نص منسق مسبقاً — يحافظ على كل المسافات البيضاء وفواصل الأسطر كما هي. يُعرض بخط أحادي المسافة افتراضياً.' },
    ]
  ),

  H(
    'html-headings',
    2,
    2,
    { en: 'HTML Headings', ar: 'HTML - العناوين' },
    {
      en: 'HTML provides six heading levels: <h1> through <h6>, forming a hierarchical outline. <h1> is the most important (use exactly one per page for SEO), and <h6> is the least important. Search engines use headings to understand page structure. Screen readers allow users to navigate by heading levels.\n\nCritical rules: never skip levels (h1 to h3 is invalid hierarchy), use headings semantically (not for font size — use CSS for styling), keep headings descriptive and concise.',
      ar: 'يوفر HTML ستة مستويات عناوين: <h1> إلى <h6>، تشكل تسلسلاً هرمياً. <h1> هو الأكثر أهمية (استخدم واحداً فقط لكل صفحة لتحسين محركات البحث)، و <h6> الأقل أهمية. تستخدم محركات البحث العناوين لفهم بنية الصفحة.\n\nقواعد مهمة: لا تقفز المستويات (من h1 إلى h3 ترتيب غير صحيح)، استخدم العناوين دلالياً (وليس لحجم الخط)، اجعل العناوين وصفية وموجزة.',
    },
    'html-syntax',
    {
      variant: 'text',
      caption: { en: 'Heading hierarchy from <h1> (most important) to <h6> (least important). Each level represents a depth in the document outline.', ar: 'تسلسل العناوين من <h1> (الأكثر أهمية) إلى <h6> (الأقل أهمية). كل مستوى يمثل عمقاً في مخطط المستند.' },
      blocks: [
        { tag: '<h1>Page Title</h1>', attrs: null, content: 'One per page — primary topic', bg: 'bg-white dark:bg-zinc-800' },
        { tag: '<h2>Section Title</h2>', attrs: null, content: 'Major sections under h1', bg: 'bg-zinc-50 dark:bg-zinc-800/50' },
        { tag: '<h3>Sub-section</h3>', attrs: null, content: 'Nested under h2', bg: 'bg-white dark:bg-zinc-800' },
        { tag: '<h4>Sub-sub-section</h4>', attrs: null, content: 'Further nesting', bg: 'bg-zinc-50 dark:bg-zinc-800/50' },
        { tag: '<h5>Deep level</h5>', attrs: null, content: 'Rarely used', bg: 'bg-white dark:bg-zinc-800' },
        { tag: '<h6>Lowest level</h6>', attrs: null, content: 'Deepest heading', bg: 'bg-zinc-50 dark:bg-zinc-800/50' },
      ],
    },
    '<h1>Complete Guide to HTML</h1>\n<h2>Introduction</h2>\n<p>HTML is the foundation of the web.</p>\n<h2>Basic Elements</h2>\n<h3>Headings</h3>\n<p>Headings create structure.</p>\n<h3>Paragraphs</h3>\n<p>Paragraphs hold text content.</p>',
    [
      { lineOrElement: '<h1>Complete Guide to HTML</h1>', explanationEn: 'Primary heading — exactly ONE per page. Should include the main keyword and match the <title> content. Screen reader users often jump to <h1> first to understand the page topic.', explanationAr: 'العنوان الرئيسي — واحد فقط لكل صفحة. يجب أن يتضمن الكلمة المفتاحية الرئيسية ويتطابق مع محتوى <title>.' },
      { lineOrElement: '<h2>Introduction</h2> through <h3>Headings</h3>', explanationEn: 'Sub-headings creating a logical hierarchy: h1 > h2 > h3. Never skip levels. Each level indents visually and in the accessibility tree. Screen readers can navigate by heading (typically via H key).', explanationAr: 'عناوين فرعية تنشئ تسلسلاً هرمياً منطقياً: h1 > h2 > h3. لا تقفز المستويات.' },
    ]
  ),

  H(
    'html-text-formatting',
    3,
    2,
    { en: 'Text Formatting', ar: 'HTML - تنسيق النصوص' },
    {
      en: 'HTML provides inline elements for text formatting with semantic meaning. <strong> indicates strong importance (renders bold, screen readers emphasize tone). <em> indicates emphasis (renders italic, screen readers change pitch). <mark> highlights text. <small> represents side-comments or fine print. <del> shows deleted text (strikethrough). <ins> shows inserted text. <sub> formats subscript (H2O). <sup> formats superscript (x2).\n\nSemantic elements carry meaning beyond visual appearance — use <strong> instead of <b>, and <em> instead of <i> for content that should be emphasized or important.',
      ar: 'يوفر HTML عناصر سطرية لتنسيق النص بمعنى دلالي. <strong> يشير إلى أهمية قوية (عريض). <em> يشير إلى تأكيد (مائل). <mark> يبرز النص. <small> يمثل تعليقات جانبية. <del> يظهر نصاً محذوفاً. <ins> يظهر نصاً مضافاً. <sub> ينخفض (H2O). <sup> يرتفع (x2).\n\nالعناصر الدلالية تحمل معنى يتجاوز المظهر البصري — استخدم <strong> بدلاً من <b>، و <em> بدلاً من <i> للمحتوى المهم أو المؤكد.',
    },
    'html-syntax',
    {
      variant: 'text',
      caption: { en: 'Semantic formatting tags: <strong> (importance), <em> (emphasis), <mark> (highlight), <del> (deleted), <ins> (inserted), <sub>/<sup> (scripts).', ar: 'وسوم التنسيق الدلالية: <strong> (أهمية)، <em> (تأكيد)، <mark> (تمييز)، <del> (محذوف)، <ins> (مضاف).' },
      blocks: [
        { tag: '<strong>Bold</strong>', attrs: null, content: 'Strong importance', bg: 'bg-white dark:bg-zinc-800' },
        { tag: '<em>Italic</em>', attrs: null, content: 'Emphasized text', bg: 'bg-zinc-50 dark:bg-zinc-800/50' },
        { tag: '<mark>Highlight</mark>', attrs: null, content: 'Marked/highlighted', bg: 'bg-white dark:bg-zinc-800' },
        { tag: '<del>Deleted</del>', attrs: null, content: 'Removed content', bg: 'bg-zinc-50 dark:bg-zinc-800/50' },
        { tag: '<ins>Inserted</ins>', attrs: null, content: 'Added content', bg: 'bg-white dark:bg-zinc-800' },
        { tag: 'H<sub>2</sub>O', attrs: null, content: 'Subscript', bg: 'bg-zinc-50 dark:bg-zinc-800/50' },
        { tag: 'x<sup>2</sup>', attrs: null, content: 'Superscript', bg: 'bg-white dark:bg-zinc-800' },
      ],
    },
    '<p>This is <strong>very important</strong> and <em>emphasized</em> text.</p>\n<p><mark>Highlighted</mark> content draws attention.</p>\n<p>The chemical formula for water is H<sub>2</sub>O.</p>\n<p>E = mc<sup>2</sup>.</p>\n<p>Original price: <del>$49.99</del> <ins>Now $29.99</ins></p>',
    [
      { lineOrElement: '<strong>very important</strong>', explanationEn: 'Strong Importance — semantic meaning: this content matters. Screen readers change vocal emphasis. Use <b> only for visual bold without semantic meaning.', explanationAr: 'أهمية قوية — معنى دلالي: هذا المحتوى مهم. تغير قارئات الشاشة التأكيد الصوتي.' },
      { lineOrElement: '<em>emphasized</em>', explanationEn: 'Emphasis — stress emphasis on content. Screen readers change pitch/tone. Use <i> only for technical terms or foreign words without emphasis.', explanationAr: 'تأكيد — تشديد على المحتوى. تغير قارئات الشاشة درجة الصوت.' },
      { lineOrElement: 'H<sub>2</sub>O and E = mc<sup>2</sup>', explanationEn: '<sub> for subscripts (chemical formulas). <sup> for superscripts (mathematical exponents, ordinal numbers). Both reduce font size and shift baseline.', explanationAr: '<sub> للنصوص المنخفضة (الصيغ الكيميائية). <sup> للنصوص المرتفعة (الأسس الرياضية).' },
    ]
  ),

  H(
    'html-quotations',
    4,
    2,
    { en: 'HTML Quotations', ar: 'HTML - الإقتباسات' },
    {
      en: 'HTML provides elements for quotations and citations. <blockquote> defines a long block-level quotation (usually indented). <q> defines a short inline quotation (browsers add quotation marks). <cite> cites the title of a creative work (renders italic). <abbr> defines abbreviations with optional title attribute for full text (shown as tooltip). <address> provides contact information for the page author.\n\nUse <blockquote> with a cite attribute to link to the source URL. The <q> element automatically adds language-appropriate quotation marks.',
      ar: 'يوفر HTML عناصر للاقتباسات والاستشهادات. <blockquote> يعرف اقتباساً طويلاً. <q> يعرف اقتباساً سطرياً قصيراً. <cite> يستشهد بعنوان عمل إبداعي. <abbr> يعرف الاختصارات. <address> يوفر معلومات الاتصال.\n\nاستخدم <blockquote> مع سمة cite للربط بمصدر URL. عنصر <q> يضيف علامات اقتباس مناسبة للغة تلقائياً.',
    },
    'html-syntax',
    {
      variant: 'text',
      caption: { en: 'Quotation elements: <blockquote> (long quote), <q> (inline quote), <cite> (citation), <abbr> (abbreviation), <address> (contact info).', ar: 'عناصر الاقتباس: <blockquote> (اقتباس طويل)، <q> (اقتباس سطري)، <cite> (استشهاد)، <abbr> (اختصار).' },
      blocks: [
        { tag: '<blockquote>', attrs: null, content: 'Block-level quotation', bg: 'bg-white dark:bg-zinc-800' },
        { tag: '<q>Inline quote</q>', attrs: null, content: 'Auto-quotation marks', bg: 'bg-zinc-50 dark:bg-zinc-800/50' },
        { tag: '<cite>Source Title</cite>', attrs: null, content: 'Citation (italic)', bg: 'bg-white dark:bg-zinc-800' },
        { tag: '<abbr title="...">HTML</abbr>', attrs: 'title="..."', content: 'Abbreviation w/ tooltip', bg: 'bg-zinc-50 dark:bg-zinc-800/50' },
        { tag: '<address>', attrs: null, content: 'Contact information', bg: 'bg-white dark:bg-zinc-800' },
      ],
    },
    '<blockquote cite="https://example.com/source">\n  <p>The only way to do great work is to love what you do.</p>\n  <cite>— Steve Jobs</cite>\n</blockquote>\n<p>HTML stands for <abbr title="HyperText Markup Language">HTML</abbr>.</p>\n<p>He said: <q>I will be back.</q></p>\n<address>\n  Written by John Doe<br>\n  Email: <a href="mailto:john@example.com">john@example.com</a><br>\n  Cairo, Egypt\n</address>',
    [
      { lineOrElement: '<blockquote cite="https://example.com/source">', explanationEn: 'Block-level quotation — indented by default. The cite attribute provides the source URL (not visible to users but available programmatically).', explanationAr: 'اقتباس على مستوى الكتلة — بمسافة بادئة افتراضياً. سمة cite توفر رابط المصدر.' },
      { lineOrElement: '<cite>— Steve Jobs</cite>', explanationEn: 'Citation — represents the title of a creative work or a person being quoted. Renders in italic.', explanationAr: 'استشهاد — يمثل عنوان عمل إبداعي أو شخص يُقتبس. يُعرض بمائل.' },
      { lineOrElement: '<abbr title="HyperText Markup Language">HTML</abbr>', explanationEn: 'Abbreviation — the title attribute provides the full expansion. Browsers show a dotted underline and a tooltip on hover. Screen readers expand the abbreviation automatically.', explanationAr: 'اختصار — سمة title توفر التوسعة الكاملة. المتصفحات تظهر خطاً منقوطاً أسفله وتلميحاً عند التمرير.' },
    ]
  ),

  H(
    'html-code-formatting',
    5,
    2,
    { en: 'Code Formatting', ar: 'HTML - تنسيق الكود' },
    {
      en: 'HTML provides elements specifically for displaying computer code and user input. <code> displays inline code in monospace font. <pre> preserves whitespace and line breaks — used for code blocks. <kbd> represents keyboard input (e.g., Ctrl+S). <samp> represents sample program output. <var> represents a variable name in mathematical or programming context.\n\nThese elements are semantic — they communicate meaning to browsers, search engines, and screen readers. For code blocks, always wrap <code> inside <pre> to preserve formatting.',
      ar: 'يوفر HTML عناصر مخصصة لعرض كود الكمبيوتر وإدخال المستخدم. <code> يعرض كوداً سطرياً بخط أحادي المسافة. <pre> يحافظ على المسافات البيضاء وفواصل الأسطر. <kbd> يمثل إدخال لوحة المفاتيح. <samp> يمثل إخراج برنامج. <var> يمثل متغيراً.\n\nهذه العناصر دلالية — تنقل المعنى للمتصفحات ومحركات البحث وقارئات الشاشة.',
    },
    'html-syntax',
    {
      variant: 'text',
      caption: { en: 'Code-related elements: <code> (inline code), <pre> (preserved block), <kbd> (keyboard input), <samp> (output), <var> (variable).', ar: 'العناصر المرتبطة بالكود: <code> (كود سطري)، <pre> (كتلة محفوظة)، <kbd> (إدخال لوحة مفاتيح).' },
      blocks: [
        { tag: '<code>inline code</code>', attrs: null, content: 'Monospace inline', bg: 'bg-white dark:bg-zinc-800' },
        { tag: '<pre><code>block</code></pre>', attrs: null, content: 'Preserved code block', bg: 'bg-zinc-50 dark:bg-zinc-800/50' },
        { tag: '<kbd>Ctrl+S</kbd>', attrs: null, content: 'Keyboard input', bg: 'bg-white dark:bg-zinc-800' },
        { tag: '<samp>Output text</samp>', attrs: null, content: 'Program output sample', bg: 'bg-zinc-50 dark:bg-zinc-800/50' },
        { tag: '<var>username</var>', attrs: null, content: 'Variable name', bg: 'bg-white dark:bg-zinc-800' },
      ],
    },
    '<p>Use the <code>&lt;h1&gt;</code> tag for the main heading.</p>\n<p>Save the file by pressing <kbd>Ctrl</kbd> + <kbd>S</kbd>.</p>\n<p>The server returned: <samp>HTTP 200 OK</samp></p>\n<p>The variable <var>userName</var> stores the user\'s name.</p>\n<pre><code>&lt;!DOCTYPE html&gt;\n&lt;html lang="en"&gt;\n&lt;head&gt;\n  &lt;title&gt;Hello World&lt;/title&gt;\n&lt;/head&gt;\n&lt;body&gt;\n  &lt;h1&gt;Hello, World!&lt;/h1&gt;\n&lt;/body&gt;\n&lt;/html&gt;</code></pre>',
    [
      { lineOrElement: '<code>&lt;h1&gt;</code>', explanationEn: 'Inline code — renders in monospace font. Use for short code snippets within sentences. Escape angle brackets with &lt; and &gt; to display tags literally.', explanationAr: 'كود سطري — يُعرض بخط أحادي المسافة. استخدم &lt; و &gt; لعرض وسوم HTML حرفياً.' },
      { lineOrElement: '<kbd>Ctrl</kbd> + <kbd>S</kbd>', explanationEn: 'Keyboard input — represents keys the user should press. Each key in its own <kbd> tag. Screen readers may announce "keyboard shortcut".', explanationAr: 'إدخال لوحة مفاتيح — يمثل المفاتيح التي يجب الضغط عليها. يلف كل مفتاح في <kbd> منفصل.' },
      { lineOrElement: '<pre><code>...</code></pre>', explanationEn: 'Code block — <pre> preserves spaces and line breaks. Wrapping <code> inside <pre> creates the standard code block pattern. Rendered in monospace font with horizontal scroll for long lines.', explanationAr: 'كتلة كود — <pre> يحافظ على المسافات وفواصل الأسطر. وضع <code> داخل <pre> ينشئ نمط كتلة الكود القياسي.' },
    ]
  ),

  H(
    'html-links',
    6,
    2,
    { en: 'HTML Links', ar: 'HTML - الروابط' },
    {
      en: 'The <a> (anchor) element creates hyperlinks, the core navigation mechanism of the web. The href attribute defines the destination. Use absolute URLs (https://...) for external resources and relative URLs (/about, ./page.html) for internal pages.\n\ntarget="_blank" opens the link in a new tab — ALWAYS add rel="noopener noreferrer" for security to prevent tab-nabbing. For same-page navigation, use anchor links (#id). Email links use mailto:, phone links use tel:. Always write descriptive link text — avoid "click here" for accessibility and SEO.',
      ar: 'عنصر <a> ينشئ الروابط التشعبية، آلية التنقل الأساسية على الويب. تحدد href الوجهة. استخدم عناوين URL مطلقة للموارد الخارجية وعناوين نسبية للصفحات الداخلية.\n\nاستخدم target="_blank" مع rel="noopener noreferrer" دائماً للأمان. للتنقل داخل الصفحة استخدم روابط المرساة (#id). اكتب دائماً نص رابط وصفي.',
    },
    'hyperlinks',
    {
      caption: { en: 'Absolute URLs (full https:// path to external server) vs Relative URLs (internal /path within same domain). Both are essential for site architecture.', ar: 'عناوين URL مطلقة (مسار https:// كامل) مقابل نسبية (مسار / داخلي). كلاهما أساسي لهندسة الموقع.' },
    },
    '<nav aria-label="Main navigation">\n  <ul>\n    <li><a href="/">Home</a></li>\n    <li><a href="/about">About Us</a></li>\n    <li><a href="https://blog.example.com" target="_blank" rel="noopener noreferrer">Blog</a></li>\n  </ul>\n</nav>\n<p>Email: <a href="mailto:info@example.com">info@example.com</a></p>\n<p>Call: <a href="tel:+201234567890">+20 123 456 7890</a></p>\n<p><a href="#faq">Jump to FAQ section</a></p>',
    [
      { lineOrElement: '<a href="https://blog.example.com" target="_blank" rel="noopener noreferrer">', explanationEn: 'Absolute URL — starts with https://. target="_blank" opens in new tab. rel="noopener noreferrer" prevents the new page from accessing window.opener (tab-nabbing protection) and hides the referrer header. Always include both.', explanationAr: 'رابط مطلق — يبدأ بـ https://. يفتح في نافذة جديدة. rel="noopener noreferrer" يمنع الوصول إلى window.opener.' },
      { lineOrElement: '<a href="/about">About Us</a>', explanationEn: 'Relative URL — links to another page on the same domain. /about resolves to https://yoursite.com/about. Relative URLs are portable across environments (dev, staging, production).', explanationAr: 'رابط نسبي — يرتبط بصفحة أخرى في نفس النطاق. العناوين النسبية محمولة عبر البيئات.' },
      { lineOrElement: '<a href="mailto:info@example.com">', explanationEn: 'mailto: URI — opens the default email client with the To field pre-filled. Can add subject, cc, bcc parameters: mailto:user@example.com?subject=Hello&cc=admin@example.com.', explanationAr: 'mailto: URI — يفتح عميل البريد الافتراضي مع حقل "إلى" معبأ. يمكن إضافة subject و cc.' },
      { lineOrElement: '<a href="#faq">', explanationEn: 'Anchor link — scrolls to the element with id="faq" on the same page without reloading. URL updates to include #faq. Use CSS scroll-behavior: smooth for animated scrolling.', explanationAr: 'رابط مرساة — ينقل إلى عنصر بـ id="faq" في نفس الصفحة دون إعادة تحميل.' },
    ]
  ),

  // ═══════════════════════════════════════════════════════════════
  // CHAPTER 3: Lists & Tables (4 topics)
  // ═══════════════════════════════════════════════════════════════

  H(
    'html-tables',
    1,
    3,
    { en: 'HTML Tables', ar: 'HTML - الجداول' },
    {
      en: 'Tables display data in rows and columns. Use <table> as the container, <thead> for header rows, <tbody> for data rows, and <tfoot> for footer summaries. <th> defines header cells (use scope="col" or scope="row" for accessibility). <td> defines data cells. <caption> provides a table title announced by screen readers.\n\nUse colspan to merge cells horizontally and rowspan to merge vertically. Tables are for tabular data ONLY — never use them for page layout.',
      ar: 'الجداول تعرض البيانات في صفوف وأعمدة. استخدم <table> كحاوية، <thead> لصفوف الرأس، <tbody> لصفوف البيانات، و <tfoot> لملخصات التذييل. <th> يعرف خلايا الرأس. <td> يعرف خلايا البيانات. <caption> يوفر عنوان جدول.\n\nاستخدم colspan لدمج الخلايا أفقياً و rowspan لدمجها عمودياً. الجداول للبيانات الجدولية فقط.',
    },
    'html-syntax',
    {
      variant: 'table',
      caption: { en: 'Semantic table: <thead> (headers), <tbody> (data), <tfoot> (totals). Use scope="col/row" to link headers to cells for screen readers.', ar: 'جدول دلالي: <thead> (رؤوس)، <tbody> (بيانات)، <tfoot> (إجماليات). استخدم scope="col/row" لربط الرؤوس بالخلايا.' },
      blocks: [
        { tag: '<table>', attrs: null, content: 'Data table container', bg: 'bg-white dark:bg-zinc-800' },
        { tag: '<caption>Table Title</caption>', attrs: null, content: 'Accessible title', bg: 'bg-zinc-50 dark:bg-zinc-800/50' },
        { tag: '<thead><tr><th>Header</th></tr></thead>', attrs: null, content: 'Column headers', bg: 'bg-white dark:bg-zinc-800' },
        { tag: '<tbody><tr><td>Data</td></tr></tbody>', attrs: null, content: 'Data rows', bg: 'bg-zinc-50 dark:bg-zinc-800/50' },
        { tag: '<tfoot><tr><td>Total</td></tr></tfoot>', attrs: null, content: 'Footer summary', bg: 'bg-white dark:bg-zinc-800' },
      ],
    },
    '<table>\n  <caption>Student Grades — Semester 1</caption>\n  <thead>\n    <tr>\n      <th scope="col">Student</th>\n      <th scope="col">Subject</th>\n      <th scope="col">Grade</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <th scope="row">Ahmed Ali</th>\n      <td>Mathematics</td>\n      <td>95%</td>\n    </tr>\n    <tr>\n      <th scope="row">Sara Hassan</th>\n      <td>Physics</td>\n      <td>88%</td>\n    </tr>\n  </tbody>\n  <tfoot>\n    <tr>\n      <td colspan="2">Average Grade</td>\n      <td>91.5%</td>\n    </tr>\n  </tfoot>\n</table>',
    [
      { lineOrElement: '<table> ... </table>', explanationEn: 'Table container. Use only for tabular data. Do NOT use for layout — use CSS Grid or Flexbox instead. Apply border-collapse: collapse in CSS for clean grid lines.', explanationAr: 'حاوية الجدول. استخدم فقط للبيانات الجدولية. لا تستخدمه للتخطيط.' },
      { lineOrElement: '<caption>Table title</caption>', explanationEn: 'Table caption — provides a descriptive title. Screen readers announce the caption before navigating the table. Always include for accessibility.', explanationAr: 'عنوان الجدول — يوفر عنواناً وصفياً. تعلن قارئات الشاشة العنوان قبل تصفح الجدول.' },
      { lineOrElement: '<th scope="col"> and <th scope="row">', explanationEn: 'Table header cells. scope="col" marks a column header — screen readers announce it before each cell in that column. scope="row" marks a row header. Without scope, screen readers cannot determine header relationships.', explanationAr: 'خلايا رأس الجدول. scope="col" تحدد رأس عمود. scope="row" تحدد رأس صف.' },
      { lineOrElement: '<tfoot> with colspan="2"', explanationEn: 'Table footer — groups summary rows. colspan="2" spans the cell across 2 columns. <tfoot> can appear BEFORE <tbody> in HTML but renders at the bottom automatically.', explanationAr: 'تذييل الجدول — يجمع صفوف الملخص. colspan="2" يمتد الخلية عبر عمودين.' },
    ]
  ),

  H(
    'html-ordered-lists',
    2,
    3,
    { en: 'Ordered Lists', ar: 'HTML - القوائم المرتبة' },
    {
      en: 'An ordered list <ol> displays items in a numbered sequence where order matters (steps, rankings, recipes). Each item is wrapped in <li> (list item). The type attribute controls numbering style: type="1" (Arabic numerals, default), type="A" (uppercase), type="a" (lowercase), type="I" (Roman uppercase), type="i" (Roman lowercase). The start attribute sets the starting number. Lists can nest infinitely.',
      ar: 'القائمة المرتبة <ol> تعرض العناصر بتسلسل رقمي حيث الترتيب مهم (خطوات، تصنيفات). يلف كل عنصر في <li>. تحدد type نمط الترقيم: "1" (أرقام عربية)، "A" (أحرف كبيرة)، "I" (رومانية). تحدد start الرقم الابتدائي. يمكن للقوائم أن تتداخل.',
    },
    'html-syntax',
    {
      variant: 'list',
      caption: { en: 'Ordered lists <ol> with <li> items. Use type and start attributes for custom numbering. Nested lists create multi-level hierarchies.', ar: 'القوائم المرتبة <ol> مع عناصر <li>. استخدم type و start لتخصيص الترقيم. القوائم المتداخلة تنشئ تسلسلات هرمية.' },
      blocks: [
        { tag: '<ol type="1">', attrs: 'type="1"', content: 'Numeric (default)', bg: 'bg-white dark:bg-zinc-800' },
        { tag: '<li>Step 1</li>', attrs: null, content: 'List item', bg: 'bg-zinc-50 dark:bg-zinc-800/50' },
        { tag: '<li>Step 2</li>', attrs: null, content: 'List item', bg: 'bg-white dark:bg-zinc-800' },
        { tag: '<ol type="A">', attrs: 'type="A"', content: 'Uppercase letters', bg: 'bg-zinc-50 dark:bg-zinc-800/50' },
        { tag: '<li>Item A</li>', attrs: null, content: 'Nested list item', bg: 'bg-white dark:bg-zinc-800' },
        { tag: '</ol></li></ol>', attrs: null, content: 'Close nested & outer', bg: 'bg-zinc-50 dark:bg-zinc-800/50' },
      ],
    },
    '<h2>How to Make Tea</h2>\n<ol>\n  <li>Boil water in a kettle.</li>\n  <li>Place a tea bag in a cup.</li>\n  <li>Pour hot water into the cup.</li>\n  <li>Steep for 3-5 minutes.</li>\n  <li>Remove tea bag and enjoy.</li>\n</ol>\n<h2>Nested List</h2>\n<ol type="I">\n  <li>Introduction\n    <ol type="A">\n      <li>Background</li>\n      <li>Objectives</li>\n    </ol>\n  </li>\n  <li>Main Content</li>\n</ol>',
    [
      { lineOrElement: '<ol> ... </ol> with <li> items', explanationEn: 'Ordered list — items are numbered sequentially. The browser handles numbering automatically. If you insert an item in the middle, all subsequent numbers update.', explanationAr: 'قائمة مرتبة — العناصر مرقمة تسلسلياً. المتصفح يتولى الترقيم تلقائياً.' },
      { lineOrElement: '<ol type="I">', explanationEn: 'Roman numeral numbering. type="I" for uppercase Roman numerals (I, II, III, IV...). type="i" for lowercase. Useful for formal documents and outlines.', explanationAr: 'ترقيم بالأرقام الرومانية. type="I" للأحرف الكبيرة. مفيد للمستندات الرسمية.' },
      { lineOrElement: 'Nested <ol> inside <li>', explanationEn: 'Lists nest by placing a full <ol> inside an <li>. The nested list indents automatically. Screen readers announce nesting depth for orientation.', explanationAr: 'تتداخل القوائم بوضع <ol> كامل داخل <li>. القائمة المتداخلة تزيح تلقائياً.' },
    ]
  ),

  H(
    'html-unordered-lists',
    3,
    3,
    { en: 'Unordered Lists', ar: 'HTML - القوائم الغير مرتبة' },
    {
      en: 'An unordered list <ul> displays items with bullet points where order does not matter (navigation menus, feature lists, shopping lists). Each item is wrapped in <li>. The default bullet style is a disc. CSS can change this via list-style-type: circle, square, or none (common for navigation bars).\n\nUnordered lists are the most used list type on the web. They are often nested for multi-level menus. The <nav> element with a <ul> inside is the standard pattern for accessible navigation.',
      ar: 'القائمة غير المرتبة <ul> تعرض العناصر بنقاط حيث الترتيب غير مهم (قوائم التنقل، قوائم الميزات). يلف كل عنصر في <li>. النمط الافتراضي للنقطة هو قرص. يمكن CSS تغييره.\n\nالقوائم غير المرتبة هي الأكثر استخداماً. يمكن تداخلها لقوائم متعددة المستويات.',
    },
    'html-syntax',
    {
      variant: 'list',
      caption: { en: 'Unordered lists <ul> with <li> items. Default bullet: disc. Nested <ul> inside <li> creates multi-level lists with different bullet styles.', ar: 'القوائم غير المرتبة <ul> مع عناصر <li>. النقطة الافتراضية: قرص. <ul> متداخل داخل <li> ينشئ قوائم متعددة.' },
      blocks: [
        { tag: '<ul>', attrs: null, content: 'Unordered list container', bg: 'bg-white dark:bg-zinc-800' },
        { tag: '<li>Item one</li>', attrs: null, content: 'Bullet point item', bg: 'bg-zinc-50 dark:bg-zinc-800/50' },
        { tag: '<li>Item two</li>', attrs: null, content: 'Bullet point item', bg: 'bg-white dark:bg-zinc-800' },
        { tag: '<li>Sub-items', attrs: null, content: 'Nested list', bg: 'bg-zinc-50 dark:bg-zinc-800/50' },
        { tag: '<ul><li>Sub-item</li></ul></li>', attrs: null, content: 'Inner list', bg: 'bg-white dark:bg-zinc-800' },
        { tag: '</ul>', attrs: null, content: 'Close list', bg: 'bg-zinc-50 dark:bg-zinc-800/50' },
      ],
    },
    '<nav aria-label="Main navigation">\n  <ul>\n    <li><a href="/">Home</a></li>\n    <li><a href="/products">Products</a></li>\n    <li><a href="/services">Services</a></li>\n  </ul>\n</nav>\n<h2>Shopping List</h2>\n<ul>\n  <li>Fresh vegetables\n    <ul>\n      <li>Tomatoes</li>\n      <li>Onions</li>\n    </ul>\n  </li>\n  <li>Bread</li>\n  <li>Milk</li>\n</ul>',
    [
      { lineOrElement: '<nav><ul>...</ul></nav>', explanationEn: 'Navigation landmark with unordered list. This is the standard accessible navigation pattern. Screen readers allow skipping between list items and the nav landmark.', explanationAr: 'معلم تنقل مع قائمة غير مرتبة. هذا النمط القياسي للتنقل مع إمكانية الوصول.' },
      { lineOrElement: '<li> ... <ul> ... </ul> </li>', explanationEn: 'Nested list — placing a full <ul> inside an <li> creates a sub-list. Browsers automatically change bullet style at each nesting level (disc > circle > square).', explanationAr: 'قائمة متداخلة — وضع <ul> كامل داخل <li> ينشئ قائمة فرعية. تغير المتصفحات نمط النقطة تلقائياً.' },
    ]
  ),

  H(
    'html-description-lists',
    4,
    3,
    { en: 'Description Lists', ar: 'HTML - قوائم الوصف' },
    {
      en: 'A description list <dl> groups term-definition pairs, similar to a dictionary or glossary. <dt> defines the term (the word or phrase being defined). <dd> provides the description (the definition or explanation). Multiple <dt> can share one <dd> (synonyms), and one <dt> can have multiple <dd> (multiple definitions).\n\nDescription lists are perfect for metadata, FAQ items, glossaries, and key-value pairs. Screen readers announce the structure as "description list" and allow navigation between term-definition groups.',
      ar: 'قائمة الوصف <dl> تجمع أزواج مصطلح-تعريف، مشابهة للقاموس. <dt> يعرف المصطلح. <dd> يوفر الوصف. يمكن لعدة <dt> مشاركة <dd> واحد (مرادفات).\n\nقوائم الوصف مثالية للأسئلة الشائعة والمسارد وأزواج المفتاح-القيمة.',
    },
    'html-syntax',
    {
      variant: 'list',
      caption: { en: 'Description list <dl> with <dt> (term) and <dd> (description). Multiple <dd> per <dt> for multiple definitions. Perfect for glossaries.', ar: 'قائمة وصف <dl> مع <dt> (مصطلح) و <dd> (وصف). عدة <dd> لكل <dt> لتعريفات متعددة.' },
      blocks: [
        { tag: '<dl>', attrs: null, content: 'Description list container', bg: 'bg-white dark:bg-zinc-800' },
        { tag: '<dt>HTML</dt>', attrs: null, content: 'Term / concept name', bg: 'bg-zinc-50 dark:bg-zinc-800/50' },
        { tag: '<dd>HyperText Markup Language</dd>', attrs: null, content: 'Definition / description', bg: 'bg-white dark:bg-zinc-800' },
        { tag: '<dt>CSS</dt>', attrs: null, content: 'Another term', bg: 'bg-zinc-50 dark:bg-zinc-800/50' },
        { tag: '<dd>Cascading Style Sheets</dd>', attrs: null, content: 'Its definition', bg: 'bg-white dark:bg-zinc-800' },
        { tag: '</dl>', attrs: null, content: 'Close list', bg: 'bg-zinc-50 dark:bg-zinc-800/50' },
      ],
    },
    '<dl>\n  <dt>HTML</dt>\n  <dd>HyperText Markup Language — the standard language for web pages.</dd>\n  <dd>Defines the structure and content of a webpage.</dd>\n  <dt>CSS</dt>\n  <dt>Styling</dt>\n  <dd>Cascading Style Sheets — controls the visual presentation.</dd>\n  <dt>JavaScript</dt>\n  <dd>A programming language that adds interactivity to web pages.</dd>\n</dl>\n<h2>FAQ Example</h2>\n<dl>\n  <dt>What is responsive design?</dt>\n  <dd>An approach where web pages adapt to different screen sizes.</dd>\n  <dt>Why is accessibility important?</dt>\n  <dd>It ensures people with disabilities can use websites effectively.</dd>\n</dl>',
    [
      { lineOrElement: '<dl> ... <dt> ... <dd> ... </dl>', explanationEn: 'Description list. <dt> (description term) defines a term. <dd> (description details) provides the definition. Screen readers announce term-definition pairs as grouped items.', explanationAr: 'قائمة وصف. <dt> يحدد مصطلحاً. <dd> يقدم التعريف.' },
      { lineOrElement: 'Multiple <dd> per <dt>', explanationEn: 'One term with multiple definitions. Useful for polysemy. Screen readers announce all definitions sequentially after the term.', explanationAr: 'مصطلح واحد بتعريفات متعددة. مفيد للألفاظ متعددة المعاني.' },
      { lineOrElement: 'Multiple <dt> sharing one <dd>', explanationEn: 'Multiple terms sharing one definition. Useful for synonyms. Screen readers announce all terms followed by the shared definition.', explanationAr: 'مصطلحات متعددة تشارك تعريفاً واحداً. مفيد للمرادفات.' },
    ]
  ),

  // ═══════════════════════════════════════════════════════════════
  // CHAPTER 4: Media & Layouts (5 topics)
  // ═══════════════════════════════════════════════════════════════

  H(
    'html-file-paths',
    1,
    4,
    { en: 'File Paths', ar: 'HTML - مسارات الملفات' },
    {
      en: 'File paths tell the browser where to find resources (images, stylesheets, scripts). Absolute paths provide the full URL (https://example.com/images/photo.jpg). Relative paths are based on the current file\'s location. Root-relative paths start with / (from domain root). Document-relative paths use ./ (current directory) or ../ (parent directory).\n\nUse forward slashes (/) even on Windows — browsers convert them. Never use backslashes in HTML paths.',
      ar: 'مسارات الملفات تخبر المتصفح أين يجد الموارد (الصور، أوراق الأنماط). المسارات المطلقة توفر URL كاملاً. المسارات النسبية تعتمد على موقع الملف الحالي.\n\nاستخدم الخطوط المائلة الأمامية (/) حتى على Windows. لا تستخدم الخطوط المائلة الخلفية.',
    },
    'file-paths',
    {
      caption: { en: 'File organization in a web project. Relative paths (images/logo.png) vs absolute paths (https://site.com/images/logo.png). Root-relative paths start with /.', ar: 'تنظيم الملفات في مشروع ويب. المسارات النسبية مقابل المسارات المطلقة.' },
    },
    '<!DOCTYPE html>\n<html>\n<head>\n  <link rel="stylesheet" href="https://cdn.example.com/styles.css">\n  <link rel="stylesheet" href="/css/style.css">\n  <link rel="stylesheet" href="./style.css">\n</head>\n<body>\n  <img src="images/photo.jpg" alt="Local photo">\n  <img src="../assets/icons/logo.svg" alt="Logo">\n  <img src="https://example.com/banner.jpg" alt="External banner">\n</body>\n</html>',
    [
      { lineOrElement: '<img src="images/photo.jpg">', explanationEn: 'Relative path — browser looks for "images" in the same directory as the current HTML file. If HTML is at /pages/about.html, resolves to /pages/images/photo.jpg.', explanationAr: 'مسار نسبي — يبحث المتصفح عن "images" في نفس دليل ملف HTML الحالي.' },
      { lineOrElement: '<img src="../assets/logo.svg">', explanationEn: 'Parent directory — ../ moves up one level. ../../ moves up two levels. Useful for shared assets across multiple page directories.', explanationAr: 'الدليل الأب — ../ ينتقل للأعلى مجلداً واحداً. كل ../ يصعد مجلداً.' },
      { lineOrElement: '<link rel="stylesheet" href="/css/style.css">', explanationEn: 'Root-relative path — resolves from the domain root. At https://mysite.com, resolves to https://mysite.com/css/style.css. Independent of file nesting depth.', explanationAr: 'مسار من الجذر — يحل من جذر النطاق بغض النظر عن موقع الملف.' },
    ]
  ),

  H(
    'html-images',
    2,
    4,
    { en: 'HTML Images', ar: 'HTML - الصور' },
    {
      en: 'The <img> element embeds images. Three essential attributes: src (file path), alt (alternative text — mandatory for WCAG), and width/height (prevents Cumulative Layout Shift). All images MUST have alt text — if decorative, use alt="" so screen readers skip it.\n\nFor responsive images, use <picture> with multiple <source> children for different viewport widths. The srcset attribute provides resolution alternatives (1x, 2x) for high-DPI displays. Use loading="lazy" for below-the-fold images.',
      ar: 'عنصر <img> يدمج الصور. ثلاث سمات أساسية: src (المسار)، alt (نص بديل — إلزامي)، width/height (يمنع تغيير التخطيط). كل الصور تحتاج alt.\n\nللصور المتجاوبة استخدم <picture> مع <source> متعددة. استخدم loading="lazy" للصور أسفل الطي.',
    },
    'media',
    {
      caption: { en: 'HTML images with responsive sources via <picture> and <source>. The <img> element requires alt, src, width, and height for accessibility and performance.', ar: 'صور HTML مع مصادر متجاوبة عبر <picture> و <source>. عنصر <img> يتطلب alt و src و width و height.' },
    },
    '<figure>\n  <img src="photo-800.jpg" alt="Sunset over mountains with orange sky" width="800" height="600" loading="lazy">\n  <figcaption>Mountain sunset at 2400m elevation.</figcaption>\n</figure>\n<picture>\n  <source media="(min-width: 1024px)" srcset="hero-wide.webp" type="image/webp">\n  <source media="(min-width: 640px)" srcset="hero-tablet.jpg" type="image/jpeg">\n  <img src="hero-mobile.jpg" alt="Company hero banner" width="640" height="360">\n</picture>',
    [
      { lineOrElement: '<img src="photo-800.jpg" alt="Sunset..." width="800" height="600">', explanationEn: 'Core image attributes: src = file path, alt = REQUIRED descriptive text, width and height = reserves space preventing CLS (Cumulative Layout Shift). Always specify dimensions.', explanationAr: 'سمات الصورة: src = مسار الملف، alt = نص وصفي مطلوب، width و height = يحجزان مساحة.' },
      { lineOrElement: 'loading="lazy"', explanationEn: 'Lazy loading — defers offscreen images until the user scrolls near them. Saves bandwidth and improves initial page load time.', explanationAr: 'التحميل الكسول — يؤجل تحميل الصور خارج الشاشة. يوفر البيانات ويحسن وقت التحميل.' },
      { lineOrElement: '<picture> with <source> elements', explanationEn: 'Art direction — different images at different breakpoints. Each <source> has a media query condition. The final <img> is the mandatory fallback. type="image/webp" lets supporting browsers download the smaller file.', explanationAr: 'توجيه فني — صور مختلفة عند نقاط توقف مختلفة. <img> النهائي هو الخيار الاحتياطي الإلزامي.' },
    ]
  ),

  H(
    'html-videos',
    3,
    4,
    { en: 'HTML Videos', ar: 'HTML - الفيديوهات' },
    {
      en: 'The <video> element embeds video with native browser controls. Add the controls attribute for play/pause/volume/fullscreen UI. Provide multiple <source> elements with different formats (MP4 for universal support, WebM for better compression). The browser plays the first supported format.\n\nThe poster attribute shows a thumbnail before play. The <track> element adds captions/subtitles via VTT files. Provide fallback text inside <video> for unsupported browsers.',
      ar: 'عنصر <video> يدمج الفيديو مع عناصر تحكم أصلية. أضف controls لأزرار التشغيل/الإيقاف. قدم عدة عناصر <source> بصيغ مختلفة (MP4 للدعم الشامل، WebM لضغط أفضل).\n\nالسمة poster تعرض صورة مصغرة قبل التشغيل. عنصر <track> يضيف ترجمة. قدم نصاً احتياطياً.',
    },
    'media',
    {
      caption: { en: 'HTML5 video player with native controls, source fallbacks, and captions. Supports MP4 and WebM for cross-browser compatibility.', ar: 'مشغل فيديو HTML5 مع عناصر تحكم ومصادر احتياطية وترجمة.' },
    },
    '<video controls width="640" poster="thumbnail.jpg">\n  <source src="video.mp4" type="video/mp4">\n  <source src="video.webm" type="video/webm">\n  <track kind="captions" src="captions.ar.vtt" srclang="ar" label="Arabic">\n  <track kind="captions" src="captions.en.vtt" srclang="en" label="English">\n  <p>Your browser does not support video. <a href="video.mp4">Download</a>.</p>\n</video>',
    [
      { lineOrElement: '<video controls width="640" poster="thumbnail.jpg">', explanationEn: 'controls adds native UI. poster shows a preview image before playback. width sets display size — use CSS max-width: 100% for responsive videos.', explanationAr: 'controls يضيف واجهة تحكم أصلية. poster يعرض صورة معاينة.' },
      { lineOrElement: '<source src="video.mp4" type="video/mp4">', explanationEn: 'Source element with file path and MIME type. MP4 (H.264 codec) has the widest browser support. WebM (VP9 codec) offers better compression. The browser selects the first compatible source.', explanationAr: 'عنصر المصدر. MP4 الأوسع دعماً. WebM يوفر ضغطاً أفضل.' },
      { lineOrElement: '<track kind="captions" srclang="ar">', explanationEn: 'Captions and subtitles via WebVTT files. kind="captions" for dialogue and sound descriptions. Multiple <track> elements allow language switching in the player.', explanationAr: 'ترجمة عبر WebVTT. kind="captions" للحوار ووصف الصوت.' },
    ]
  ),

  H(
    'html-audio',
    4,
    4,
    { en: 'HTML Audio', ar: 'HTML - الصوتيات' },
    {
      en: 'The <audio> element embeds audio with native playback controls. Add the controls attribute for play/pause/volume UI. Provide multiple <source> elements with different formats: MP3 (widest support), Ogg Vorbis, AAC.\n\nThe autoplay attribute starts playback automatically (most browsers block autoplay with audio). The loop attribute repeats. The preload attribute hints whether to preload (none, metadata, auto). Always provide fallback text.',
      ar: 'عنصر <audio> يدمج الصوت مع عناصر تحكم أصلية. أضف controls لأزرار التشغيل. قدم عدة <source> بصيغ مختلفة: MP3 (الأوسع دعماً)، Ogg Vorbis، AAC.\n\nالسمة autoplay تبدأ التشغيل تلقائياً. loop تكرر الصوت. preload تحدد التحميل المسبق.',
    },
    'media',
    {
      caption: { en: 'HTML5 audio player with source fallbacks. Supports MP3, Ogg, and AAC formats for cross-browser audio playback.', ar: 'مشغل صوت HTML5 مع مصادر احتياطية. يدعم MP3 و Ogg و AAC.' },
    },
    '<audio controls preload="metadata">\n  <source src="podcast.mp3" type="audio/mpeg">\n  <source src="podcast.ogg" type="audio/ogg">\n  <source src="podcast.aac" type="audio/aac">\n  <p>Your browser does not support audio. <a href="podcast.mp3">Download</a>.</p>\n</audio>\n<figure>\n  <figcaption>Listen to the introduction:</figcaption>\n  <audio controls>\n    <source src="intro.mp3" type="audio/mpeg">\n  </audio>\n</figure>',
    [
      { lineOrElement: '<audio controls preload="metadata">', explanationEn: 'Audio element with native controls. preload="metadata" downloads only duration and tags — good for performance. preload="none" skips entirely, preload="auto" downloads the full file.', explanationAr: 'عنصر الصوت مع عناصر تحكم. preload="metadata" يحمل المدة والبيانات فقط.' },
      { lineOrElement: '<source src="podcast.mp3" type="audio/mpeg">', explanationEn: 'MP3 is the most compatible audio format — works in all browsers. Ogg is open-source with better quality at lower bitrates. Provide both for maximum coverage.', explanationAr: 'MP3 هو الصيغة الأكثر توافقاً. Ogg مفتوح المصدر بجودة أفضل.' },
    ]
  ),

  H(
    'html-iframes',
    5,
    4,
    { en: 'HTML Iframes', ar: 'HTML - الأطر' },
    {
      en: 'An iframe (inline frame) embeds another HTML page within the current page. Use for embedding YouTube videos, Google Maps, social media widgets, and payment forms. The src attribute specifies the embedded URL. The title attribute is REQUIRED for accessibility.\n\nUse sandbox attribute to restrict what the embedded page can do (forms, scripts, popups). Use loading="lazy" for offscreen iframes. Always set width and height.',
      ar: 'iframe (إطار مضمن) يدمج صفحة HTML أخرى داخل الصفحة الحالية. استخدم لتضمين فيديوهات YouTube وخرائط Google. سمة title مطلوبة لسهولة الوصول.\n\nاستخدم sandbox لتقييد الصفحة المضمنة. استخدم loading="lazy" للإطارات خارج الشاشة.',
    },
    'iframe',
    {
      caption: { en: 'An <iframe> embeds external content (maps, videos, widgets) within your page. Always add title for accessibility and use sandbox for security.', ar: '<iframe> يدمج محتوى خارجي (خرائط، فيديوهات) داخل صفحتك. أضف title دائماً واستخدم sandbox للأمان.' },
    },
    '<h2>Embedded YouTube Video</h2>\n<iframe\n  width="560" height="315"\n  src="https://www.youtube.com/embed/dQw4w9WgXcQ"\n  title="YouTube video: HTML Tutorial"\n  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"\n  allowfullscreen\n  loading="lazy">\n</iframe>\n<h2>Google Maps Embed</h2>\n<iframe\n  width="600" height="450"\n  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!..."\n  title="Location map of Cairo, Egypt"\n  allowfullscreen\n  loading="lazy">\n</iframe>\n<h2>Secure Sandbox Example</h2>\n<iframe\n  src="https://example.com/widget"\n  title="Example widget"\n  sandbox="allow-scripts allow-same-origin"\n  width="300" height="200">\n</iframe>',
    [
      { lineOrElement: '<iframe src="..." title="..." allowfullscreen>', explanationEn: 'Embeds external content. The embed URL format differs from the standard URL. title is REQUIRED for accessibility. allowfullscreen enables fullscreen mode.', explanationAr: 'يضمّن محتوى خارجياً. title مطلوب لسهولة الوصول.' },
      { lineOrElement: 'sandbox="allow-scripts allow-same-origin"', explanationEn: 'Security sandbox — restricts iframe capabilities. Empty sandbox blocks everything. Common values: allow-scripts, allow-same-origin, allow-forms, allow-popups. Use the most restrictive set possible.', explanationAr: 'صندوق أمان — يقيد قدرات iframe. استخدم المجموعة الأكثر تقييداً.' },
      { lineOrElement: 'loading="lazy"', explanationEn: 'Lazy loading for iframes — defers loading until the iframe is near the viewport. Improves page load performance for below-the-fold embeds.', explanationAr: 'التحميل الكسول للإطارات — يؤجل التحميل حتى يقترب من نافذة العرض.' },
    ]
  ),

  // ═══════════════════════════════════════════════════════════════
  // CHAPTER 5: Forms & Inputs (9 topics)
  // ═══════════════════════════════════════════════════════════════

  H(
    'html-forms-overview',
    1,
    5,
    { en: 'Forms Overview', ar: 'HTML - النماذج' },
    {
      en: 'Forms are the primary way users send data to a server. The <form> element wraps all input fields. The action attribute specifies the server URL that processes the data. The method attribute defines how data is sent: GET (appends to URL — visible) or POST (sends in request body — secure).\n\nEvery form control needs a name attribute — this is the key sent to the server. Without name, the field\'s data is not submitted. Use enctype="multipart/form-data" for file uploads. Validate on both client (UX) and server (security).',
      ar: 'النماذج هي الطريقة الأساسية لإرسال البيانات إلى الخادم. عنصر <form> يلف حقول الإدخال. سمة action تحدد URL الخادم. GET يلحق البيانات بـ URL، POST يرسلها في جسم الطلب.\n\nكل عنصر تحكم يحتاج سمة name — هذا هو المفتاح المرسل للخادم. استخدم enctype="multipart/form-data" لرفع الملفات.',
    },
    'form',
    {
      caption: { en: 'A complete HTML form: action (server endpoint), method (GET/POST), labeled inputs, fieldset grouping, and a submit button.', ar: 'نموذج HTML كامل: action (نقطة نهاية الخادم)، method (GET/POST)، مدخلات موسومة، تجميع fieldset، وزر إرسال.' },
    },
    '<form action="/api/register" method="POST" enctype="multipart/form-data">\n  <fieldset>\n    <legend>Personal Information</legend>\n    <label for="name">Full Name:</label>\n    <input type="text" id="name" name="full_name" required minlength="2">\n    <label for="email">Email:</label>\n    <input type="email" id="email" name="email" required>\n  </fieldset>\n  <fieldset>\n    <legend>Account</legend>\n    <label for="password">Password:</label>\n    <input type="password" id="password" name="password" minlength="8" required>\n    <label for="avatar">Profile Picture:</label>\n    <input type="file" id="avatar" name="avatar" accept="image/*">\n  </fieldset>\n  <button type="submit">Create Account</button>\n  <button type="reset">Clear All</button>\n</form>',
    [
      { lineOrElement: '<form action="/api/register" method="POST">', explanationEn: 'action = target server URL. method="POST" sends data in request body (invisible, secure). method="GET" appends to URL as query parameters. POST is required for sensitive data and file uploads.', explanationAr: 'action = URL الخادم الهدف. POST يرسل البيانات في جسم الطلب (غير مرئي، آمن).' },
      { lineOrElement: 'name="full_name"', explanationEn: 'The name attribute is the field identifier sent to the server. Server receives full_name="value". Without name, the field is not submitted at all.', explanationAr: 'سمة name هي معرف الحقل. بدون name، لا يُرسل الحقل.' },
      { lineOrElement: '<input type="file" accept="image/*">', explanationEn: 'File upload input. accept restricts file types. Requires enctype="multipart/form-data" on the <form>.', explanationAr: 'إدخال رفع ملف. accept يحدد أنواع الملفات المسموح بها.' },
    ]
  ),

  H(
    'html-labels',
    2,
    5,
    { en: 'Labels', ar: 'HTML - عنونة العناصر' },
    {
      en: 'The <label> element associates descriptive text with a form control. This is MANDATORY for WCAG compliance. Two association methods: explicit (using for attribute matching the input id) and implicit (wrapping the input inside the <label>).\n\nClicking the label text focuses/activates the associated input. This expands the clickable area — especially important for checkboxes and radio buttons on touch devices.',
      ar: 'عنصر <label> يربط نصاً وصفياً بعنصر تحكم. هذا إلزامي للتوافق مع WCAG. طريقتان: صريحة (for المطابق لـ id) وتضمينية (لف الإدخال داخل <label>).\n\nالنقر على التسمية يركز الإدخال. هذا يوسع المنطقة القابلة للنقر.',
    },
    'labels',
    {
      caption: { en: 'Clicking label text focuses the associated input. Use for="id" (explicit) or wrap input inside <label> (implicit). Both are WCAG-compliant.', ar: 'النقر على نص التسمية يركز الإدخال. استخدم for="id" (صريح) أو لف الإدخال داخل <label> (ضمني).' },
    },
    '<form>\n  <div>\n    <label for="user-name">Full Name:</label>\n    <input type="text" id="user-name" name="user_name" required>\n  </div>\n  <label>\n    <input type="checkbox" name="terms">\n    I agree to the terms and conditions\n  </label>\n  <label for="search-query" class="sr-only">Search:</label>\n  <input type="text" id="search-query" name="q" placeholder="Type to search...">\n  <button type="submit">Submit</button>\n</form>',
    [
      { lineOrElement: '<label for="user-name">Full Name:</label>', explanationEn: 'Explicit label — for must exactly match input id. Clicking "Full Name:" focuses the text input. Most reliable method, works with all input types.', explanationAr: 'تسمية صريحة — for تطابق id الإدخال. النقر على "الاسم" يركز حقل الإدخال.' },
      { lineOrElement: '<label><input type="checkbox"> I agree...</label>', explanationEn: 'Implicit label — input nested inside <label>. Label text automatically associates with input. No for/id matching needed. Common for checkboxes.', explanationAr: 'تسمية ضمنية — الإدخال داخل <label>. لا حاجة لـ for/id.' },
      { lineOrElement: 'class="sr-only" for hidden labels', explanationEn: 'Screen-reader-only label — visually hidden but accessible. Use for search fields or icons where label is not visible. Never omit labels entirely.', explanationAr: 'تسمية مخفية بصرياً لكنها متاحة لقارئات الشاشة.' },
    ]
  ),

  H(
    'html-input-types',
    3,
    5,
    { en: 'Input Types', ar: 'HTML - حقول الإدخال' },
    {
      en: '<p>HTML5 introduced <strong>many specialized input types</strong> that trigger unique mobile keyboards and enable browser-native validation — all without JavaScript. Each <code>type</code> value changes the input mode, validation rules, and visual appearance.</p><p>Here are the most important input types:</p><ul><li><code>type="text"</code> — Default single-line text input</li><li><code>type="email"</code> — Validates email format; shows <kbd>@</kbd> key on mobile keyboards</li><li><code>type="password"</code> — Masks characters for secure entry</li><li><code>type="number"</code> — Numeric keyboard with up/down stepper arrows</li><li><code>type="tel"</code> — Telephone keypad on mobile devices</li><li><code>type="url"</code> — Validates URL format; shows <kbd>.com</kbd> key</li><li><code>type="date"</code> — Native date picker with calendar widget</li><li><code>type="color"</code> — OS-level color picker returning hex values</li><li><code>type="file"</code> — File selection dialog with accept filtering</li><li><code>type="range"</code> — Slider control with min/max/step</li></ul><p>All input types support these <strong>common attributes</strong>:</p><ul><li><code>name</code> — Required; the key sent to the server</li><li><code>id</code> — Connects to <code>&lt;label for="..."&gt;</code></li><li><code>value</code> — Default or pre-filled value</li><li><code>placeholder</code> — Hint text inside the field</li><li><code>required</code> — Prevents empty submission</li><li><code>disabled</code> — Grayed out, not submitted</li><li><code>min</code> / <code>max</code> — Numeric or date bounds</li><li><code>pattern</code> — Regular expression validation</li></ul><p>Choosing the correct <code>type</code> is a <strong>UX best practice</strong> — it improves mobile usability, data quality, and reduces the need for custom JavaScript validation.</p>',
      ar: '<p>قدم HTML5 <strong>أنواع إدخال متخصصة</strong> تشغل لوحات مفاتيح فريدة وتفعّل التحقق المضمن في المتصفح — كل ذلك بدون JavaScript. كل قيمة <code>type</code> تغير وضع الإدخال وقواعد التحقق والمظهر.</p><p>أهم أنواع الإدخال:</p><ul><li><code>type="text"</code> — إدخال نص سطر واحد افتراضي</li><li><code>type="email"</code> — يتحقق من صيغة البريد؛ يعرض مفتاح <kbd>@</kbd></li><li><code>type="password"</code> — يخفي الأحرف</li><li><code>type="number"</code> — لوحة أرقام مع أزرار</li><li><code>type="tel"</code> — لوحة أرقام هاتف</li><li><code>type="url"</code> — يتحقق من صيغة URL</li><li><code>type="date"</code> — منتقي تاريخ مع تقويم</li><li><code>type="color"</code> — منتقي ألوان</li><li><code>type="file"</code> — نافذة اختيار ملفات</li><li><code>type="range"</code> — منزلق</li></ul><p>كل الأنواع تدعم سمات مشتركة: <code>name</code> (مطلوب)، <code>id</code>، <code>value</code>، <code>placeholder</code>، <code>required</code>، <code>disabled</code>، <code>min</code>/<code>max</code>، <code>pattern</code>. اختيار <code>type</code> الصحيح يحسن تجربة المستخدم وجودة البيانات.</p>',
    },
    'input-types',
    {
      caption: { en: 'HTML5 input types: each triggers a specialized mobile keyboard and native validation. The right type improves UX and data quality.', ar: 'أنواع إدخال HTML5: كل نوع يشغل لوحة مفاتيح متخصصة وتحققاً مضمنأً.' },
    },
    '<form>\n  <label for="name">Name:</label>\n  <input type="text" id="name" name="name" placeholder="Enter your name" required>\n\n  <label for="email">Email:</label>\n  <input type="email" id="email" name="email" placeholder="name@example.com" required>\n\n  <label for="password">Password:</label>\n  <input type="password" id="password" name="password" minlength="8" required>\n\n  <label for="age">Age:</label>\n  <input type="number" id="age" name="age" min="13" max="120" step="1">\n\n  <label for="phone">Phone:</label>\n  <input type="tel" id="phone" name="phone" pattern="[0-9]{10,15}" placeholder="01234567890">\n\n  <label for="website">Website:</label>\n  <input type="url" id="website" name="website" placeholder="https://example.com">\n\n  <label for="birthday">Birthday:</label>\n  <input type="date" id="birthday" name="birthday">\n\n  <label for="favcolor">Favorite Color:</label>\n  <input type="color" id="favcolor" name="favcolor" value="#6366f1">\n\n  <label for="resume">Resume (PDF):</label>\n  <input type="file" id="resume" name="resume" accept=".pdf" multiple>\n\n  <label for="volume">Volume:</label>\n  <input type="range" id="volume" name="volume" min="0" max="100" value="75">\n\n  <label>\n    <input type="checkbox" name="subscribe" checked>\n    Subscribe to newsletter\n  </label>\n\n  <button type="submit">Submit</button>\n</form>',
    [
      { lineOrElement: 'type="text"', explanationEn: 'Default single-line text input. Best for short text like names and titles. Shows standard alphanumeric keyboard on mobile. Use placeholder for hints, not as label replacement.', explanationAr: 'إدخال نص سطر واحد افتراضي. أفضل للنصوص القصيرة.' },
      { lineOrElement: 'type="email"', explanationEn: 'Validates user@domain format. Shows @ and .com keys on mobile. Browser provides native error messages. No JavaScript needed for basic validation.', explanationAr: 'يتحقق من صيغة user@domain. يعرض مفاتيح @ و .com على الجوال.' },
      { lineOrElement: 'type="password"', explanationEn: 'Masks typed characters. Prevents shoulder-surfing. Browsers may offer to generate and save strong passwords. Combine with minlength and pattern.', explanationAr: 'يخفي الأحرف المطبوعة. يمنع مشاهدة كلمة السر.' },
      { lineOrElement: 'type="number"', explanationEn: 'Shows numeric keypad on mobile. Adds up/down stepper arrows in desktop. min/max constrain the range. step sets increment (e.g., step="0.1" for decimals).', explanationAr: 'يعرض لوحة أرقام على الجوال. min/max يحددان النطاق.' },
      { lineOrElement: 'type="color"', explanationEn: 'Opens the OS color picker. Value is a 7-character hex string (#RRGGBB). Default is #000000 (black). Picker appearance varies by OS and browser.', explanationAr: 'يفتح منتقي الألوان لنظام التشغيل. القيمة دائماً #RRGGBB.' },
      { lineOrElement: 'type="file"', explanationEn: 'File selection dialog. accept filters file types (accept="image/*" for images, accept=".pdf" for PDFs). multiple allows selecting multiple files.', explanationAr: 'نافذة اختيار ملفات. accept يرشح أنواع الملفات. multiple يسمح بعدة ملفات.' },
      { lineOrElement: 'type="range"', explanationEn: 'Slider control. min=0, max=100 by default. Does not show value visually — must display via JavaScript or CSS. Style with CSS accent-color.', explanationAr: 'منزلق. min=0، max=100 افتراضياً. لا تظهر القيمة بصرياً.' },
      { lineOrElement: 'type="date"', explanationEn: 'Native date picker — opens a calendar widget. Value formatted as YYYY-MM-DD (ISO 8601). min/max constrain selectable dates.', explanationAr: 'منتقي تاريخ أصلي — يفتح أداة تقويم. القيمة بصيغة YYYY-MM-DD.' },
    ],
    '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Input Types Demo</title>\n  <style>\n    body { font-family: system-ui, sans-serif; padding: 24px; max-width: 560px; margin: 0 auto; color: #1e293b; }\n    label { display: block; margin-top: 16px; font-weight: 600; font-size: 14px; }\n    input { width: 100%; padding: 10px 14px; border: 2px solid #e2e8f0; border-radius: 8px; font-size: 14px; box-sizing: border-box; margin-top: 4px; }\n    input:focus { outline: none; border-color: #6366f1; box-shadow: 0 0 0 3px rgba(99,102,241,0.15); }\n    h2 { color: #6366f1; }\n  </style>\n</head>\n<body>\n  <h2>Input Types</h2>\n  <label for="name">Name:</label>\n  <input type="text" id="name" placeholder="Enter your name">\n  <label for="email">Email:</label>\n  <input type="email" id="email" placeholder="name@example.com">\n  <label for="age">Age:</label>\n  <input type="number" id="age" min="0" max="120" placeholder="25">\n</body>\n</html>'
  ),

  H(
    'html-buttons',
    4,
    5,
    { en: 'Buttons', ar: 'HTML - الأزرار العادية' },
    {
      en: 'The <button> element creates clickable buttons. Unlike <input type="submit">, <button> can contain HTML content (icons, spans, images) inside. Always specify the type attribute: submit (submits the form — default inside a form), reset (resets form fields), button (does nothing — for custom JavaScript).\n\nWithout a type, a <button> inside a <form> defaults to submit. Use type="button" for JavaScript triggers. Disabled buttons use the disabled attribute.',
      ar: 'عنصر <button> ينشئ أزراراً قابلة للنقر. على عكس <input>، يمكن لـ <button> احتواء HTML داخله (أيقونات، صور). حدد type دائماً: submit (إرسال)، reset (إعادة تعيين)، button (JS مخصص).\n\nبدون type، <button> داخل <form> يكون submit افتراضياً.',
    },
    'buttons',
    {
      caption: { en: 'Button types: submit (form submission), reset (clear fields), button (custom JS). <button> supports HTML content inside unlike <input type="submit">.', ar: 'أنواع الأزرار: submit (إرسال)، reset (مسح)، button (JS مخصص). <button> يدعم HTML داخله.' },
    },
    '<form>\n  <label for="email">Email:</label>\n  <input type="email" id="email" name="email" required>\n  <button type="submit" class="btn btn-primary">\n    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 13l4 4L19 7"/></svg>\n    Submit Form\n  </button>\n  <button type="reset" class="btn btn-secondary">Reset</button>\n  <button type="button" class="btn btn-ghost" onclick="alert(\'Custom action!\')">Show Alert</button>\n  <button type="submit" disabled class="btn btn-disabled">Submit (Disabled)</button>\n</form>',
    [
      { lineOrElement: '<button type="submit"> with icon', explanationEn: 'Submit button — submits the form. Can contain nested HTML like SVGs, <span>, or <img> for richer designs. type="submit" is default for <button> inside <form>.', explanationAr: 'زر الإرسال — يرسل النموذج. يمكن احتواء HTML متداخل.' },
      { lineOrElement: '<button type="reset">', explanationEn: 'Reset button — restores form fields to initial values. Use with caution: users may lose their input accidentally.', explanationAr: 'زر إعادة التعيين — يعيد الحلق لقيمها الأصلية. استخدم بحذر.' },
      { lineOrElement: '<button type="button">', explanationEn: 'Plain button — no default behavior. Used exclusively for JavaScript interactions. Always specify type="button" to prevent accidental form submission.', explanationAr: 'زر عادي — بدون سلوك افتراضي. يُستخدم لتفاعلات JavaScript.' },
    ]
  ),

  H(
    'html-checkboxes',
    5,
    5,
    { en: 'Checkboxes', ar: 'HTML - خانات الإختيار' },
    {
      en: 'Checkboxes let users select zero, one, or multiple options from a set. Each checkbox is independent. Use type="checkbox" on <input>. The checked attribute (boolean) marks the initial state. Multiple checkboxes can share the same name with different values — the server receives multiple values for the same key.\n\nAlways associate a <label> with each checkbox. Implicit wrapping (<label><input>Text</label>) is the most common pattern.',
      ar: 'خانات الاختيار تتيح اختيار صفر أو خيار أو عدة خيارات. كل خانة مستقلة. استخدم type="checkbox". السمة checked تحدد الحالة المختارة افتراضياً.\n\nاربط <label> مع كل خانة. التضمين الضمني هو النمط الأكثر شيوعاً.',
    },
    'checkboxes',
    {
      caption: { en: 'Checkboxes allow multiple independent selections. Each checkbox has its own checked state. Use <label> wrapping for better UX.', ar: 'خانات الاختيار تسمح بتحديدات متعددة مستقلة. كل خانة لها حالتها الخاصة.' },
    },
    '<fieldset>\n  <legend>Select your skills (choose all that apply)</legend>\n  <label><input type="checkbox" name="skills" value="html" checked> HTML</label>\n  <label><input type="checkbox" name="skills" value="css" checked> CSS</label>\n  <label><input type="checkbox" name="skills" value="javascript"> JavaScript</label>\n  <label><input type="checkbox" name="skills" value="python"> Python</label>\n  <label><input type="checkbox" name="skills" value="php" disabled> PHP (coming soon)</label>\n</fieldset>',
    [
      { lineOrElement: '<input type="checkbox" name="skills" value="html">', explanationEn: 'Checkbox input. name groups related checkboxes. value is what gets submitted. checked marks default selection. Multiple checkboxes share the same name.', explanationAr: 'خانة اختيار. name يجمع الخانات. value هي القيمة المرسلة.' },
      { lineOrElement: '<label><input>Text</label>', explanationEn: 'Implicit label — clicking text toggles checkbox. Expands clickable target, critical for touch interfaces.', explanationAr: 'تضمين ضمني — النقر على النص يبدّل الخانة.' },
      { lineOrElement: 'disabled attribute', explanationEn: 'Disabled checkbox — grayed out, cannot be focused or toggled, and not submitted. Screen readers announce "disabled".', explanationAr: 'خانة معطلة — رمادية، لا يمكن تبديلها ولا تُرسل.' },
    ]
  ),

  H(
    'html-radio-buttons',
    6,
    5,
    { en: 'Radio Buttons', ar: 'HTML - أزرار الراديو' },
    {
      en: 'Radio buttons let users select exactly ONE option from a set. All radio buttons in the same group share the same name attribute — this makes them mutually exclusive. Selecting one automatically deselects the others.\n\nAlways set a value attribute on each radio button — this is what the server receives. One radio button should have the checked attribute for default selection. Use <fieldset> with <legend> to group radio buttons semantically.',
      ar: 'أزرار الراديو تتيح اختيار خيار واحد بالضبط. كل الأزرار في نفس المجموعة تشارك نفس name — هذا ما يجعلها حصرية متبادلة.\n\nحدد value لكل زر. استخدم <fieldset> مع <legend> للتجميع الدلالي.',
    },
    'radio',
    {
      caption: { en: 'Radio buttons: only one option can be selected per group (same name). Use <fieldset> with <legend> for accessible grouping.', ar: 'أزرار الراديو: يمكن اختيار خيار واحد فقط لكل مجموعة.' },
    },
    '<fieldset>\n  <legend>Select your preferred language</legend>\n  <label><input type="radio" name="preferred_lang" value="arabic" checked> Arabic</label>\n  <label><input type="radio" name="preferred_lang" value="english"> English</label>\n  <label><input type="radio" name="preferred_lang" value="french"> French</label>\n  <label><input type="radio" name="preferred_lang" value="spanish"> Spanish</label>\n</fieldset>\n<fieldset>\n  <legend>Experience Level</legend>\n  <label><input type="radio" name="experience" value="beginner"> Beginner</label>\n  <label><input type="radio" name="experience" value="intermediate"> Intermediate</label>\n  <label><input type="radio" name="experience" value="advanced"> Advanced</label>\n</fieldset>',
    [
      { lineOrElement: '<input type="radio" name="preferred_lang" value="arabic">', explanationEn: 'Radio button. All radios with same name form a mutually exclusive group. value is what gets submitted (e.g., preferred_lang=arabic). Without value, browser submits "on".', explanationAr: 'زر راديو. كل الأزرار بنفس name تشكل مجموعة حصرية.' },
      { lineOrElement: 'checked attribute', explanationEn: 'Marks the default selected radio. Only one per group should have checked. If none checked, users cannot deselect after choosing (radio buttons are one-way).', explanationAr: 'يحدد الزر المختار افتراضياً. زر واحد فقط يجب أن يحمل checked.' },
      { lineOrElement: '<fieldset><legend> for grouping', explanationEn: 'Groups radio buttons semantically. <legend> provides the group name screen readers announce. Essential for accessibility — without it users hear options without context.', explanationAr: 'يجمع الأزرار دلالياً. <legend> يوفر اسم المجموعة لقارئات الشاشة.' },
    ]
  ),

  H(
    'html-select-dropdowns',
    7,
    5,
    { en: 'Select & Dropdowns', ar: 'HTML - القوائم المنسدلة' },
    {
      en: 'The <select> element creates a dropdown menu. Each option is defined by <option>. The selected attribute marks the default choice. The first <option> with empty value acts as a placeholder (not selectable for validation). Use <optgroup> to group related options with labels.\n\nUse the multiple attribute (with size) for multi-select lists. <select> is preferred over radio buttons when there are more than 5 options.',
      ar: 'عنصر <select> ينشئ قائمة منسدلة. كل خيار يُعرف بـ <option>. أول <option> بقيمة فارغة يعمل كعنصر نائب. استخدم <optgroup> لتجميع الخيارات.\n\nاستخدم multiple مع size لقوائم متعددة الاختيار.',
    },
    'select',
    {
      caption: { en: 'Dropdown <select> with <option> items. <optgroup> groups related options. Use multiple for multi-select lists.', ar: 'قائمة منسدلة <select> مع عناصر <option>. <optgroup> يجمع الخيارات.' },
    },
    '<label for="country">Country:</label>\n<select id="country" name="country" required>\n  <option value="">-- Select your country --</option>\n  <option value="eg">Egypt</option>\n  <option value="sa">Saudi Arabia</option>\n  <option value="ae">United Arab Emirates</option>\n  <option value="qa">Qatar</option>\n  <option value="kw">Kuwait</option>\n</select>\n\n<label for="browser">Choose browser:</label>\n<select id="browser" name="browser">\n  <optgroup label="Desktop">\n    <option value="chrome">Google Chrome</option>\n    <option value="firefox">Mozilla Firefox</option>\n    <option value="edge">Microsoft Edge</option>\n  </optgroup>\n  <optgroup label="Mobile">\n    <option value="safari">Safari</option>\n    <option value="chrome-android">Chrome Android</option>\n  </optgroup>\n</select>\n\n<label for="colors">Favorite colors:</label>\n<select id="colors" name="colors" multiple size="4">\n  <option value="red">Red</option>\n  <option value="green" selected>Green</option>\n  <option value="blue" selected>Blue</option>\n  <option value="yellow">Yellow</option>\n</select>',
    [
      { lineOrElement: '<option value="">-- Select --</option>', explanationEn: 'Placeholder option — empty value (value="") so validation (required) forces user selection. The placeholder text is a visual prompt. Required pattern for required <select>.', explanationAr: 'خيار placeholder — بقيمة فارغة ليجبر التحقق المستخدم على اختيار خيار حقيقي.' },
      { lineOrElement: '<optgroup label="Desktop">', explanationEn: 'Option group — visually groups related options under a non-selectable label. Improves usability for long dropdowns. Screen readers announce the group name before its options.', explanationAr: 'مجموعة خيارات — تجمع الخيارات تحت تسمية غير قابلة للاختيار.' },
      { lineOrElement: '<select multiple size="4">', explanationEn: 'Multi-select — users select multiple options with Ctrl/Cmd+click. size shows 4 visible items. Server receives multiple values for the same key.', explanationAr: 'اختيار متعدد — يختار المستخدم عدة خيارات بالضغط على Ctrl.' },
    ]
  ),

  H(
    'html-ranges',
    8,
    5,
    { en: 'Range Sliders', ar: 'HTML - نطاقات الإختيار' },
    {
      en: 'The range input (type="range") creates a slider for selecting a numeric value within a range. Default range is 0 to 100. Use min and max to customize, step for increment granularity, and value for initial position.\n\nThe range input does NOT display the current value — you must use JavaScript or CSS to show it. Use for approximate values (volume, brightness, price filters). Style with CSS accent-color.',
      ar: 'إدخال النطاق (type="range") ينشئ منزلقاً لاختيار قيمة رقمية ضمن نطاق. النطاق الافتراضي 0 إلى 100.\n\nلا يعرض القيمة الحالية بصرياً — استخدم JavaScript لإظهارها. استخدم للقيم التقريبية.',
    },
    'range',
    {
      caption: { en: 'Range slider with min, max, step, and value. The current value must be displayed via JavaScript. Style with CSS accent-color.', ar: 'منزلق نطاق مع min و max و step و value.' },
    },
    '<form>\n  <div>\n    <label for="volume">Volume: <span id="volume-value">50</span>%</label>\n    <input type="range" id="volume" name="volume" min="0" max="100" step="1" value="50"\n      oninput="document.getElementById(\'volume-value\').textContent = this.value">\n    <div><span>0%</span><span>100%</span></div>\n  </div>\n  <div>\n    <label for="price">Price range: $<span id="price-value">25</span></label>\n    <input type="range" id="price" name="price" min="5" max="200" step="5" value="25"\n      oninput="document.getElementById(\'price-value\').textContent = this.value">\n  </div>\n  <div>\n    <label for="rating">Rating:</label>\n    <input type="range" id="rating" name="rating" min="1" max="5" step="1" value="3"\n      oninput="document.getElementById(\'rating-value\').textContent = this.value">\n    <span id="rating-value">3</span> / 5\n  </div>\n</form>',
    [
      { lineOrElement: '<input type="range" min="0" max="100" step="1" value="50">', explanationEn: 'Range slider. min=0, max=100, step=1 by default. value sets initial thumb position. All attributes are optional but recommended for predictable behavior.', explanationAr: 'منزلق نطاق. min و max و step لها قيم افتراضية.' },
      { lineOrElement: 'oninput to display value', explanationEn: 'The oninput event fires continuously as the slider moves. Update a display element with the current value. The input event fires more frequently than change.', explanationAr: 'حدث oninput يُطلق باستمرار أثناء تحريك المنزلق.' },
      { lineOrElement: 'CSS accent-color', explanationEn: 'The accent-color CSS property changes the form control color. Example: input[type="range"] { accent-color: #6366f1; }. Simplest cross-browser theming method.', explanationAr: 'خاصية accent-color تغير لون عنصر التحكم.' },
    ]
  ),

  H(
    'html-fieldset-legend',
    9,
    5,
    { en: 'Fieldset & Legend', ar: 'HTML - تجميع العناصر' },
    {
      en: 'The <fieldset> element groups related form controls into a visual and semantic unit. The <legend> element provides a caption for the grouped controls. This is essential for complex forms with multiple sections.\n\nScreen readers announce the legend when entering the fieldset, providing context. <fieldset> with <legend> is particularly important for radio button groups and checkbox sets.',
      ar: 'عنصر <fieldset> يجمع عناصر التحكم المرتبطة في وحدة بصرية ودلالية. <legend> يوفر تسمية للمجموعة.\n\nتعلن قارئات الشاشة نص legend عند دخول المجموعة. مهم لمجموعات أزرار الراديو.',
    },
    'fieldset',
    {
      caption: { en: '<fieldset> groups related form controls with a visible border. <legend> provides the group label announced by screen readers.', ar: '<fieldset> يجمع عناصر التحكم بحد مرئي. <legend> يقدم تسمية المجموعة.' },
    },
    '<form>\n  <fieldset>\n    <legend>Personal Information</legend>\n    <label for="fname">First Name:</label>\n    <input type="text" id="fname" name="fname" required>\n    <label for="lname">Last Name:</label>\n    <input type="text" id="lname" name="lname" required>\n    <label for="birth-date">Date of Birth:</label>\n    <input type="date" id="birth-date" name="birth_date">\n  </fieldset>\n  <fieldset>\n    <legend>Shipping Address</legend>\n    <label for="address">Address:</label>\n    <input type="text" id="address" name="address" required>\n    <label for="city">City:</label>\n    <input type="text" id="city" name="city" required>\n    <label for="zip">ZIP Code:</label>\n    <input type="text" id="zip" name="zip" pattern="[0-9]{5}">\n  </fieldset>\n  <fieldset>\n    <legend>Payment Method</legend>\n    <label><input type="radio" name="payment" value="credit" checked> Credit Card</label>\n    <label><input type="radio" name="payment" value="paypal"> PayPal</label>\n    <label><input type="radio" name="payment" value="cod"> Cash on Delivery</label>\n  </fieldset>\n  <button type="submit">Place Order</button>\n</form>',
    [
      { lineOrElement: '<fieldset> ... </fieldset>', explanationEn: 'Groups related controls with a visual border. Screen readers use fieldsets to group controls semantically. Remove the default border with CSS border: none if undesired.', explanationAr: 'يجمع عناصر التحكم بحد بصري. تعلن قارئات الشاشة المجموعة.' },
      { lineOrElement: '<legend>Personal Information</legend>', explanationEn: 'Provides a caption for the fieldset. Placed in the border by default. Screen readers announce the legend before the first control inside the fieldset.', explanationAr: 'يوفر تسمية لـ fieldset. توضع في الحد العلوي افتراضياً.' },
      { lineOrElement: 'Nested fieldsets for multi-level grouping', explanationEn: 'Fieldset can be nested inside another for hierarchical grouping. Each nested fieldset has its own legend, creating a multi-level grouping structure.', explanationAr: 'يمكن تداخل fieldset داخل آخر للتجميع الهرمي.' },
    ]
  ),

  // ═══════════════════════════════════════════════════════════════
  // CHAPTER 6: Internationalization & i18n (4 topics)
  // ═══════════════════════════════════════════════════════════════

  H(
    'html-direction',
    1,
    6,
    { en: 'Text Direction (RTL/LTR)', ar: 'HTML - تحديد إتجاه المحتوى' },
    {
      en: 'The dir attribute sets text direction: dir="ltr" (left-to-right, default) or dir="rtl" (right-to-left, for Arabic, Hebrew, Persian). The attribute can be set on <html> (entire page), on a section, or on individual elements for mixed-direction content.\n\nWhen dir="rtl" is set on <html>, the browser reverses the entire layout: text alignment, list bullets, table columns, form fields, and scrollbars. CSS logical properties (margin-inline-start instead of margin-left) automatically adapt to direction.',
      ar: 'السمة dir تحدد اتجاه النص: dir="ltr" (من اليسار لليمين، افتراضي) أو dir="rtl" (من اليمين لليسار، للعربية والعبرية والفارسية). يمكن وضعها على <html> (الصفحة بأكملها) أو على أقسام أو عناصر فردية.\n\nعند ضبط dir="rtl" على <html>، يعكس المتصفح التخطيط بالكامل: محاذاة النص، نقاط القوائم، أعمدة الجداول، حقول النماذج، وأشرطة التمرير.',
    },
    'direction',
    {
      caption: { en: 'dir="ltr" (English, default) vs dir="rtl" (Arabic, Hebrew) — both can coexist in the same HTML document. The direction affects layout, text alignment, and form controls.', ar: 'dir="ltr" (إنجليزي، افتراضي) مقابل dir="rtl" (عربي، عبري) — كلاهما يمكن أن يتعايشا في نفس المستند.' },
    },
    '<!DOCTYPE html>\n<html dir="rtl" lang="ar">\n<head>\n  <meta charset="UTF-8">\n  <title>موقعي بالعربية</title>\n</head>\n<body>\n  <h1>مرحباً بكم في موقعي</h1>\n  <p>هذا النص يقرأ من اليمين إلى اليسار.</p>\n  \n  <!-- Mixed direction: English phrase inside Arabic text -->\n  <p>استخدم زر <bdi dir="ltr">Save</bdi> لحفظ التغييرات.</p>\n  \n  <!-- Unidirectional override for specific content -->\n  <p dir="ltr">This paragraph is in English, inside an RTL page.</p>\n</body>\n</html>',
    [
      { lineOrElement: '<html dir="rtl" lang="ar">', explanationEn: 'Sets the entire page to RTL mode. This reverses the layout: text aligns right, lists bullets appear on the right, table columns flow right-to-left. The lang="ar" attribute complements dir for screen reader pronunciation.', explanationAr: 'يضبط الصفحة بأكملها لوضع RTL. يعكس التخطيط بالكامل.' },
      { lineOrElement: '<bdi dir="ltr">Save</bdi>', explanationEn: 'Bidirectional Isolation (<bdi>) isolates an embedded LTR phrase within RTL text. This prevents the browser from reordering the English text in confusing ways. Use for user-generated content that may contain mixed-direction text.', explanationAr: 'العزل ثنائي الاتجاه (<bdi>) يعزل نصاً LTR داخل نص RTL. يمنع إعادة ترتيب النص بطريقة مربكة.' },
      { lineOrElement: 'CSS logical properties', explanationEn: 'Instead of margin-left/margin-right, use margin-inline-start/margin-inline-end. These adapt automatically to dir. padding-block-start/padding-block-end for vertical equivalents. Essential for internationalized sites.', explanationAr: 'استخدم خصائص CSS المنطقية بدلاً من left/right. تتكيف تلقائياً مع اتجاه النص.' },
    ]
  ),

  H(
    'html-language-codes',
    2,
    6,
    { en: 'Language Codes', ar: 'HTML - رموز اللغات' },
    {
      en: 'The lang attribute declares the language of an element\'s content. It follows ISO 639-1 two-letter codes (e.g., en, ar, fr, de, es, zh, ja). Add regional subtags for dialects: en-US (American English), en-GB (British English), ar-EG (Egyptian Arabic), ar-SA (Saudi Arabic).\n\nThe lang attribute is critical for: screen reader pronunciation, browser translation features, search engine language targeting, and font rendering. Always set lang on the <html> element and on any element whose language differs from the parent.',
      ar: 'السمة lang تعلن لغة محتوى العنصر. تتبع رموز ISO 639-1 المكونة من حرفين (مثل en، ar، fr). أضف رموزاً مناطقية: ar-EG (مصري)، ar-SA (سعودي).\n\nالسمة lang ضرورية لـ: نطق قارئات الشاشة، ترجمة المتصفح، استهداف محركات البحث، وعرض الخطوط. اضبط lang على <html> دائماً.',
    },
    'language-codes',
    {
      caption: { en: 'ISO 639-1 language codes with optional regional subtags. Use lang="ar-EG" for Egyptian Arabic, lang="en-US" for American English.', ar: 'رموز اللغة ISO 639-1 مع رموز مناطقية اختيارية.' },
    },
    '<!DOCTYPE html>\n<html lang="ar-EG">\n<head>\n  <meta charset="UTF-8">\n  <title>موقع مصري</title>\n</head>\n<body>\n  <p lang="ar-EG">مرحباً باللهجة المصرية.</p>\n  <p lang="ar-SA">مرحباً باللهجة السعودية.</p>\n  \n  <!-- English phrase within Arabic page -->\n  <p>Our brand is <span lang="en">AwesomeTech</span>.</p>\n  \n  <!-- French quote in English page -->\n  <blockquote lang="fr">\n    <p>Ceci est une citation en français.</p>\n  </blockquote>\n</body>\n</html>',
    [
      { lineOrElement: 'lang="ar-EG"', explanationEn: 'Language + region code. ar = Arabic, EG = Egypt. Screen readers use the region for dialect-specific pronunciation. Search engines use it for geographic targeting. Always use the most specific lang value appropriate.', explanationAr: 'رمز لغة + منطقة. ar = عربي، EG = مصر. تستخدمه قارئات الشاشة للنطق باللهجة المحلية.' },
      { lineOrElement: '<span lang="en">AwesomeTech</span>', explanationEn: 'Inline language override. When a foreign word or phrase appears inside an Arabic paragraph, wrap it with lang="en" so the screen reader switches pronunciation. Without this, it would try to read English words with Arabic rules.', explanationAr: 'تجاوز لغة سطري. يلف الكلمة الأجنبية بلغتها الأصلية لنطقها بشكل صحيح.' },
      { lineOrElement: 'lang on <html> is mandatory', explanationEn: 'Always set lang on the root <html> element. This is an HTML validation requirement and WCAG success criterion. Without it, screen readers default to the OS language, causing incorrect pronunciation.', explanationAr: 'اضبط lang على <html> دائماً. هذا مطلب تحقق HTML ومعيار نجاح WCAG.' },
    ]
  ),

  H(
    'html-country-codes',
    3,
    6,
    { en: 'Country Codes', ar: 'HTML - رموز البلدان' },
    {
      en: 'Country codes are used in conjunction with language codes (e.g., ar-EG, en-US, fr-CA) to specify regional dialects. They follow ISO 3166-1 alpha-2 standard (two capital letters: EG, US, SA, AE, GB, FR, DE, JP, CN, RU).\n\nCountry codes are NOT language codes — they represent geographical regions. ar-SA means Arabic as spoken in Saudi Arabia, while ar-EG is Egyptian Arabic. Also used in href attributes with country-specific top-level domains and in regional content targeting.',
      ar: 'رموز البلدان تُستخدم مع رموز اللغة (ar-EG، en-US) لتحديد اللهجات الإقليمية. تتبع معيار ISO 3166-1 alpha-2 (حرفان كبيران: EG، US، SA، AE).\n\nرموز البلدان ليست رموز لغة — إنها تمثل مناطق جغرافية. ar-SA تعني العربية في السعودية، ar-EG عربية مصرية.',
    },
    'language-codes',
    {
      caption: { en: 'ISO 3166-1 alpha-2 country codes combined with language codes for precise regional targeting (ar-EG, en-US, fr-CA, zh-CN).', ar: 'رموز البلدان ISO 3166-1 مع رموز اللغة للاستهداف الإقليمي الدقيق.' },
    },
    '<!DOCTYPE html>\n<html lang="ar-AE">\n<head>\n  <meta charset="UTF-8">\n  <title>موقع إماراتي</title>\n</head>\n<body>\n  <!-- Regional language variants -->\n  <p lang="ar-AE">مرحباً من الإمارات.</p>\n  <p lang="ar-EG">مرحباً من مصر.</p>\n  <p lang="en-GB">Colour (British English)</p>\n  <p lang="en-US">Color (American English)</p>\n  \n  <!-- Country-specific domain links -->\n  <a href="https://example.co.uk" hreflang="en-GB">UK Site</a>\n  <a href="https://example.ae" hreflang="ar-AE">الموقع الإماراتي</a>\n</body>\n</html>',
    [
      { lineOrElement: 'lang="en-GB" vs lang="en-US"', explanationEn: 'Same language (English), different regions. GB = United Kingdom, US = United States. Affects spelling variations (colour vs color) and screen reader pronunciation. Search engines return region-specific results.', explanationAr: 'نفس اللغة (إنجليزية)، مناطق مختلفة. تؤثر على الاختلافات الإملائية ونطق قارئات الشاشة.' },
      { lineOrElement: 'hreflang="en-GB" attribute', explanationEn: 'The hreflang attribute on <a> or <link> tells search engines which language/region the linked page is for. Essential for multilingual SEO. Prevents duplicate content penalties across language variants.', explanationAr: 'السمة hreflang تخبر محركات البحث بلغة/منطقة الصفحة المرتبطة. ضروري لتحسين محركات البحث متعدد اللغات.' },
    ]
  ),

  H(
    'html-translated-pages',
    4,
    6,
    { en: 'Translated Pages', ar: 'HTML - الصفحات المترجمة' },
    {
      en: 'Multilingual websites serve content in multiple languages. Use the hreflang attribute on <link> elements in <head> to tell search engines about alternate language versions. The <link rel="alternate" hreflang="x" href="..."> pattern is the standard SEO approach.\n\nUse the hreflang="x-default" for a fallback page when no language matches. The rel="canonical" prevents duplicate content. Serve the correct language version based on the user\'s Accept-Language HTTP header or a language selector.',
      ar: 'المواقع متعددة اللغات تقدم المحتوى بعدة لغات. استخدم hreflang في <head> لإخبار محركات البحث عن النسخ اللغوية المختلفة. \n\nاستخدم hreflang="x-default" للصفحة الاحتياطية. قدم النسخة الصحيحة بناءً على رأس Accept-Language أو منتقي اللغة.',
    },
    'html-syntax',
    {
      variant: 'document',
      caption: { en: 'Multilingual page structure using hreflang for SEO. Each language variant links to the others via <link rel="alternate"> in the <head>.', ar: 'هيكل صفحة متعددة اللغات باستخدام hreflang لتحسين محركات البحث.' },
      blocks: [
        { tag: '<link rel="alternate" hreflang="ar" href="/ar/">', attrs: null, content: 'Arabic version', bg: 'bg-white dark:bg-zinc-800' },
        { tag: '<link rel="alternate" hreflang="en" href="/en/">', attrs: null, content: 'English version', bg: 'bg-zinc-50 dark:bg-zinc-800/50' },
        { tag: '<link rel="alternate" hreflang="fr" href="/fr/">', attrs: null, content: 'French version', bg: 'bg-white dark:bg-zinc-800' },
        { tag: '<link rel="alternate" hreflang="x-default" href="/">', attrs: null, content: 'Default fallback', bg: 'bg-zinc-50 dark:bg-zinc-800/50' },
        { tag: '<link rel="canonical" href="https://site.com/ar/">', attrs: null, content: 'Canonical (prevents dupes)', bg: 'bg-white dark:bg-zinc-800' },
      ],
    },
    '<!DOCTYPE html>\n<html lang="ar" dir="rtl">\n<head>\n  <meta charset="UTF-8">\n  <title>الصفحة العربية</title>\n  \n  <!-- Link to alternate language versions -->\n  <link rel="alternate" hreflang="ar" href="https://site.com/ar/" />\n  <link rel="alternate" hreflang="en" href="https://site.com/en/" />\n  <link rel="alternate" hreflang="fr" href="https://site.com/fr/" />\n  <link rel="alternate" hreflang="x-default" href="https://site.com/" />\n  \n  <!-- Prevent duplicate content -->\n  <link rel="canonical" href="https://site.com/ar/" />\n</head>\n<body>\n  <!-- Language switcher -->\n  <nav>\n    <a href="/ar/" lang="ar" hreflang="ar">العربية</a> |\n    <a href="/en/" lang="en" hreflang="en">English</a> |\n    <a href="/fr/" lang="fr" hreflang="fr">Français</a>\n  </nav>\n  \n  <h1>مرحباً بكم في موقعنا متعدد اللغات</h1>\n  <p>هذه هي النسخة العربية من الموقع.</p>\n</body>\n</html>',
    [
      { lineOrElement: '<link rel="alternate" hreflang="ar" href="/ar/">', explanationEn: 'Declares an alternate language version of this page. hreflang="ar" targets Arabic speakers. Google uses these links to show the correct version in search results based on the user\'s language.', explanationAr: 'يعلن عن نسخة لغة بديلة للصفحة. يستخدمها Google لعرض النسخة الصحيحة في نتائج البحث.' },
      { lineOrElement: 'hreflang="x-default"', explanationEn: 'Fallback language. When the user\'s language does not match any declared hreflang, serve this page. Usually the homepage or a language selector page. Must be present for valid multilingual SEO markup.', explanationAr: 'اللغة الاحتياطية. عندما لا تتطابق لغة المستخدم مع أي hreflang، تُعرض هذه الصفحة.' },
      { lineOrElement: '<link rel="canonical" href="/ar/">', explanationEn: 'Canonical URL — tells search engines which URL is the authoritative version. Prevents duplicate content penalties when the same page is accessible through multiple URLs. Must point to itself on each language version.', explanationAr: 'URL الأساسي — يخبر محركات البحث عن الإصدار المعتمد. يمنع عقوبات المحتوى المكرر.' },
    ]
  ),

  // ═══════════════════════════════════════════════════════════════
  // CHAPTER 7: Comprehensive Character References (12 topics)
  // ═══════════════════════════════════════════════════════════════

  H(
    'html-all-tags',
    1,
    7,
    { en: 'All HTML Tags & Entities', ar: 'HTML - جميع الوسوم' },
    {
      en: 'HTML entities are special codes that represent reserved characters and symbols. They start with & and end with ;. Common entities: &lt; (&lt;), &gt; (&gt;), &amp; (&amp;), &quot; (&quot;), &apos; (&apos;), &nbsp; (non-breaking space), &copy; (&copy;), &reg; (&reg;).\n\nHTML entities are essential when you want to display characters that have special meaning in HTML (like < and >) or characters not available on your keyboard. Use numeric character references (&#x...; hex or &#...; decimal) for any Unicode character.',
      ar: 'كيانات HTML هي رموز خاصة تمثل أحرفاً ورموزاً محجوزة. تبدأ بـ & وتنتهي بـ ;. الكيانات الشائعة: &lt; و &gt; و &amp; و &quot; و &nbsp; و &copy;.\n\nكيانات HTML ضرورية عند عرض أحرف لها معنى خاص في HTML (مثل < و >) أو أحرف غير متوفرة على لوحة المفاتيح.',
    },
    'symbols-grid',
    {
      caption: { en: 'Common HTML entities and their character codes. Use &name; or &#code; to display reserved characters in HTML.', ar: 'كيانات HTML الشائعة ورموزها. استخدم &name; أو &#code; لعرض الأحرف المحجوزة.' },
      symbols: [
        S('&lt;', '&amp;lt;'), S('&gt;', '&amp;gt;'), S('&amp;', '&amp;amp;'), S('&quot;', '&amp;quot;'),
        S('&apos;', '&amp;apos;'), S('&nbsp;', '&amp;nbsp;'), S('&copy;', '&amp;copy;'), S('&reg;', '&amp;reg;'),
        S('&trade;', '&amp;trade;'), S('&deg;', '&amp;deg;'), S('&plusmn;', '&amp;plusmn;'), S('&micro;', '&amp;micro;'),
        S('&para;', '&amp;para;'), S('&sect;', '&amp;sect;'), S('&cent;', '&amp;cent;'), S('&pound;', '&amp;pound;'),
        S('&yen;', '&amp;yen;'), S('&euro;', '&amp;euro;'), S('&times;', '&amp;times;'), S('&divide;', '&amp;divide;'),
        S('&ne;', '&amp;ne;'), S('&le;', '&amp;le;'), S('&ge;', '&amp;ge;'), S('&larr;', '&amp;larr;'),
      ],
      columns: 6,
    },
    '<p>Use &amp;lt; to display the less-than sign: &lt;</p>\n<p>Use &amp;amp; to display the ampersand: &amp;</p>\n<p>Copyright symbol: &amp;copy; = &copy;</p>\n<p>Non-breaking space: &amp;nbsp; prevents line breaks.</p>\n<p>Decimal reference: &amp;#128169; = &#128169;</p>\n<p>Hex reference: &amp;#x1F4A9; = &#x1F4A9;</p>',
    [
      { lineOrElement: '&amp;lt; (&lt;) and &amp;gt; (&gt;)', explanationEn: 'Entity names for angle brackets. Use these to display HTML tag syntax in your code examples. Without these, the browser would interpret < and > as HTML tags and hide the code.', explanationAr: 'كيانات الأقواس الزاوية. استخدمها لعرض أكواد HTML حرفياً.' },
      { lineOrElement: '&amp;amp; (&amp;)', explanationEn: 'The ampersand entity. Since & starts every entity, you must use &amp; to display a literal ampersand in HTML. Double-escape: &amp;amp; displays as &amp; in the source.', explanationAr: 'كيان علامة العطف. استخدم &amp; لعرض & حرفياً.' },
      { lineOrElement: '&amp;nbsp; (non-breaking space)', explanationEn: 'Non-breaking space — prevents line breaks between two words. Unlike a regular space, the browser will not break the line at this point. Use sparingly; CSS white-space: nowrap is often better.', explanationAr: 'مسافة غير قابلة للكسر — تمنع فاصل الأسطر بين كلمتين.' },
      { lineOrElement: '&#128169; (decimal) and &#x1F4A9; (hex)', explanationEn: 'Numeric character references. &#128169; is decimal (base 10). &#x1F4A9; is hexadecimal (base 16). Both refer to the same Unicode code point U+1F4A9. Hex is more common in modern HTML.', explanationAr: 'مراجع أحرف رقمية. عشرية وست عشرية. كلاهما يشير إلى نفس نقطة كود Unicode.' },
    ]
  ),

  H(
    'html-currency-symbols',
    2,
    7,
    { en: 'Currency Symbols', ar: 'HTML - رموز العملات' },
    {
      en: 'HTML supports currency symbols from around the world via entities and Unicode. Common currency entities: &dollar; ($), &cent; (&cent;), &pound; (&pound;), &euro; (&euro;), &yen; (&yen;). For newer currencies like Bitcoin (&dollar;), use the decimal or hex numeric reference.\n\nCurrency symbols should be placed before the amount (e.g., $50) or after depending on locale (e.g., 50&euro; in some European countries). Use CSS to handle currency formatting for localization.',
      ar: 'يدعم HTML رموز العملات من جميع أنحاء العالم عبر الكيانات و Unicode. الرموز الشائعة: &dollar; ($)، &cent; (&cent;)، &pound; (&pound;)، &euro; (&euro;)، &yen; (&yen;).\n\nتوضع رموز العملات قبل المبلغ أو بعده حسب اللغة المحلية.',
    },
    'symbols-grid',
    {
      caption: { en: 'Currency symbols from around the world: US Dollar, Euro, British Pound, Japanese Yen, Arabic Dinar, and more.', ar: 'رموز العملات من جميع أنحاء العالم: الدولار، اليورو، الجنيه، الين، الدينار، وغيرها.' },
      symbols: [
        S('$', 'U+0024'), S('&cent;', 'U+00A2'), S('&pound;', 'U+00A3'), S('&euro;', 'U+20AC'),
        S('&yen;', 'U+00A5'), S('₹', 'U+20B9'), S('₽', 'U+20BD'), S('₺', 'U+20BA'),
        S('₪', 'U+20AA'), S('₫', 'U+20AB'), S('₦', 'U+20A6'), S('₩', 'U+20A9'),
        S('₿', 'U+20BF'), S('₮', 'U+20AE'), S('₸', 'U+20B8'), S('₼', 'U+20BC'),
        S('₴', 'U+20B4'), S('₲', 'U+20B2'), S('₵', 'U+20B5'), S('₰', 'U+20B0'),
        S('฿', 'U+0E3F'), S('﷼', 'U+FDFC'), S('₤', 'U+20A4'), S('₳', 'U+20B3'),
      ],
      columns: 6,
    },
    '<p>Price: &amp;dollar;99.99 (US Dollars)</p>\n<p>Price: &amp;pound;49.99 (British Pounds)</p>\n<p>Price: 59.99 &amp;euro; (Euros)</p>\n<p>Price: &amp;yen;1500 (Japanese Yen)</p>\n<p>Price: &amp;#1585;&amp;#1740;&amp;#1575;&amp;#1604; 100 (Saudi Riyal)</p>',
    [
      { lineOrElement: '&amp;pound; for British Pound', explanationEn: 'Named entity for the British Pound Sterling symbol. Also accessible as &#163; (decimal) or &#xA3; (hex). Display depends on the font — some fonts may not have all currency symbols.', explanationAr: 'كيان اسمي للجنيه الإسترليني. متاح أيضاً كـ &#163; أو &#xA3;.' },
      { lineOrElement: '&amp;euro; for Euro', explanationEn: 'The Euro symbol entity. The Euro sign was introduced in 1996. All modern fonts include it. Can also use &#8364; (decimal) or &#x20AC; (hex).', explanationAr: 'كيان اليورو. تم تقديم علامة اليورو عام 1996.' },
      { lineOrElement: '₹ for Indian Rupee', explanationEn: 'Newer currency symbols like ₹ (Indian Rupee, U+20B9) may not have named entities. Use the Unicode hex reference &#x20B9; or decimal &#8377;. Always verify font support for rare currencies.', explanationAr: 'رموز العملات الأحدث قد لا يكون لها كيانات مسماة. استخدم مرجع Unicode السداسي عشري.' },
    ]
  ),

  H(
    'html-arrow-symbols',
    3,
    7,
    { en: 'Arrow Symbols', ar: 'HTML - رموز الأسهم' },
    {
      en: 'Arrow symbols are used for navigation, direction indicators, sorting, and UI controls. HTML provides named entities for common arrows: &larr; (&larr;), &uarr; (&uarr;), &rarr; (&rarr;), &darr; (&darr;), &harr; (&harr;). For more arrow types, use Unicode references.\n\nArrows are available in various styles: simple (→, ←), double (⇒, ⇐), dashed (⇢, ⇠), curved (↩, ↪), and heavy (➡, ⬅). Use CSS for interactive arrow styling rather than relying on arrow entities.',
      ar: 'رموز الأسهم تُستخدم للتنقل ومؤشرات الاتجاه والفرز وعناصر تحكم الواجهة. يوفر HTML كيانات مسماة للأسهم الشائعة: &larr; و &uarr; و &rarr; و &darr;.\n\nالأسهم متوفرة بأنماط مختلفة: بسيطة، مزدوجة، منقطة، منحنية.',
    },
    'symbols-grid',
    {
      caption: { en: 'Arrow symbols for navigation, direction, and UI controls: simple, double, dashed, curved, and heavy arrows.', ar: 'رموز الأسهم للتنقل والاتجاه وعناصر تحكم الواجهة: بسيطة، مزدوجة، منقطة، منحنية.' },
      symbols: [
        S('&larr;', 'U+2190'), S('&uarr;', 'U+2191'), S('&rarr;', 'U+2192'), S('&darr;', 'U+2193'),
        S('&harr;', 'U+2194'), S('&lArr;', 'U+21D0'), S('&uArr;', 'U+21D1'), S('&rArr;', 'U+21D2'),
        S('&dArr;', 'U+21D3'), S('&hArr;', 'U+21D4'), S('↩', 'U+21A9'), S('↪', 'U+21AA'),
        S('↖', 'U+2196'), S('↗', 'U+2197'), S('↘', 'U+2198'), S('↙', 'U+2199'),
        S('⬅', 'U+2B05'), S('⬆', 'U+2B06'), S('➡', 'U+27A1'), S('⬇', 'U+2B07'),
        S('➤', 'U+27A4'), S('⇦', 'U+21E6'), S('⇨', 'U+21E8'), S('➢', 'U+27A2'),
      ],
      columns: 6,
    },
    '<nav>\n  <a href="/prev">&amp;larr; Previous</a>\n  <a href="/next">Next &amp;rarr;</a>\n</nav>\n<p>Sort: <button>&amp;uarr; Price &amp;darr;</button></p>\n<p>Back to top: <a href="#top">&amp;uarr;</a></p>\n<p>Return &amp;rarr; &amp;larr; Forward</p>',
    [
      { lineOrElement: '&amp;larr; (&larr;) and &amp;rarr; (&rarr;)', explanationEn: 'Left and right arrows. Commonly used in navigation (previous/next) with text. The &larr; entity gives U+2190, &rarr; gives U+2192. Arrow entities are more semantic than using Unicode characters directly.', explanationAr: 'أسهم اليسار واليمين. شائعة في التنقل (سابق/تالي).' },
      { lineOrElement: '&amp;uarr; and &amp;darr; for sorting', explanationEn: 'Up and down arrows. Used in table headers for sort direction indicators. Also used for scroll-to-top buttons (&uarr;). Combine with CSS transforms to animate direction changes.', explanationAr: 'أسهم الأعلى والأسفل. تستخدم في رؤوس الجداول لمؤشرات اتجاه الفرز.' },
      { lineOrElement: 'Double arrows &amp;rArr; (&rArr;)', explanationEn: 'Double-line arrows (&#x21D2;) indicate implication or stronger direction. Useful for logical flow diagrams and mathematical notation. The hollow double arrow is distinct from the solid single arrow.', explanationAr: 'الأسهم المزدوجة تشير إلى استلزام أو اتجاه أقوى.' },
    ]
  ),

  H(
    'html-punctuation-symbols',
    4,
    7,
    { en: 'Punctuation & Special Characters', ar: 'HTML - رموز التنقيط' },
    {
      en: 'HTML provides entities for punctuation and special characters that are not easily typed on standard keyboards. These include quotation marks, dashes, spaces, and editorial marks.\n\nKey punctuation entities: &ldquo; (&ldquo;) and &rdquo; (&rdquo;) for curly double quotes, &lsquo; (&lsquo;) and &rsquo; (&rsquo;) for curly single quotes, &mdash; (&mdash;) for em dash, &ndash; (&ndash;) for en dash, &hellip; (&hellip;) for ellipsis, &bull; (&bull;) for bullet.',
      ar: 'يوفر HTML كيانات لعلامات الترقيم والأحرف الخاصة التي لا يمكن كتابتها بسهولة على لوحات المفاتيح القياسية. وتشمل علامات الاقتباس والشرطات والمسافات والعلامات التحريرية.\n\nالكيانات الرئيسية: &ldquo; و &rdquo; لعلامات الاقتباس، &mdash; للشرطة الطويلة، &hellip; للحذف.',
    },
    'symbols-grid',
    {
      caption: { en: 'Punctuation and special typographic characters: curly quotes, dashes, spaces, and editorial marks.', ar: 'علامات الترقيم والأحرف الخاصة المطبعية: اقتباسات، شرطات، مسافات.' },
      symbols: [
        S('&ldquo;', 'U+201C'), S('&rdquo;', 'U+201D'), S('&lsquo;', 'U+2018'), S('&rsquo;', 'U+2019'),
        S('&laquo;', 'U+00AB'), S('&raquo;', 'U+00BB'), S('&bdquo;', 'U+201E'), S('&dagger;', 'U+2020'),
        S('&Dagger;', 'U+2021'), S('&mdash;', 'U+2014'), S('&ndash;', 'U+2013'), S('&hellip;', 'U+2026'),
        S('&bull;', 'U+2022'), S('&prime;', 'U+2032'), S('&Prime;', 'U+2033'), S('&permil;', 'U+2030'),
        S('&lsaquo;', 'U+2039'), S('&rsaquo;', 'U+203A'), S('&oline;', 'U+203E'), S('&frasl;', 'U+2044'),
        S('&iexcl;', 'U+00A1'), S('&iquest;', 'U+00BF'), S('&brvbar;', 'U+00A6'), S('&curren;', 'U+00A4'),
      ],
      columns: 6,
    },
    '<p>She said: &amp;ldquo;Hello, world!&amp;rdquo;</p>\n<p>It&rsquo;s a beautiful day&hellip;</p>\n<p>Em dash &amp;mdash; used for a break in thought.</p>\n<p>En dash &amp;ndash; for ranges: 10&amp;ndash;20.</p>\n<p>Bullet list: &amp;bull; First item</p>',
    [
      { lineOrElement: '&amp;ldquo; and &amp;rdquo; (curly quotes)', explanationEn: 'Smart/curly double quotation marks. Use &ldquo; (left) and &rdquo; (right) instead of straight quotes for professional typography. Screen readers handle these correctly.', explanationAr: 'علامات اقتباس مزدوجة منحنية. استخدمها بدلاً من المستقيمة للطباعة الاحترافية.' },
      { lineOrElement: '&amp;mdash; (em dash) and &amp;ndash; (en dash)', explanationEn: 'Em dash (—) is the width of the letter "m" — used for breaks in thought. En dash (–) is the width of "n" — used for number ranges (10–20) and connections (Cairo–London).', explanationAr: 'الشرطة الطويلة (عرض m) لفواصل الفكر. الشرطة المتوسطة (عرض n) لنطاقات الأرقام.' },
      { lineOrElement: '&amp;hellip; (ellipsis)', explanationEn: 'Horizontal ellipsis (three dots) — indicates omitted text or a trailing thought. Use the single entity rather than three periods to keep them together as one character, preventing line breaks between dots.', explanationAr: 'علامة الحذف (ثلاث نقاط) — تشير إلى نص محذوف أو فكرة متقطعة.' },
    ]
  ),

  H(
    'html-math-symbols',
    5,
    7,
    { en: 'Math Symbols', ar: 'HTML - رموز الرياضيات' },
    {
      en: 'HTML supports mathematical symbols for equations, formulas, and scientific notation. Common math entities: &plusmn; (&plusmn;), &times; (&times;), &divide; (&divide;), &minus; (&minus;), &radic; (&radic;), &infin; (&infin;), &sum; (&sum;), &prod; (&prod;), &int; (&int;), &ne; (&ne;), &le; (&le;), &ge; (&ge;), &there4; (&there4;).\n\nFor complex mathematical notation, use MathML (Mathematical Markup Language) with the &lt;math&gt; element. MathML provides precise rendering of formulas, fractions, integrals, and matrices.',
      ar: 'يدعم HTML الرموز الرياضية للمعادلات والصيغ والتدوين العلمي. الكيانات الشائعة: &plusmn; و &times; و &divide; و &radic; و &infin; و &sum; و &ne; و &le; و &ge;.\n\nللتدوين الرياضي المعقد، استخدم MathML مع عنصر &lt;math&gt;.',
    },
    'symbols-grid',
    {
      caption: { en: 'Mathematical symbols for equations, formulas, and scientific notation: operators, Greek letters, and logical symbols.', ar: 'الرموز الرياضية للمعادلات والصيغ: العوامل، الحروف اليونانية، الرموز المنطقية.' },
      symbols: [
        S('&plusmn;', 'U+00B1'), S('&times;', 'U+00D7'), S('&divide;', 'U+00F7'), S('&minus;', 'U+2212'),
        S('&radic;', 'U+221A'), S('&infin;', 'U+221E'), S('&sum;', 'U+2211'), S('&prod;', 'U+220F'),
        S('&int;', 'U+222B'), S('&ne;', 'U+2260'), S('&le;', 'U+2264'), S('&ge;', 'U+2265'),
        S('&sim;', 'U+223C'), S('&cong;', 'U+2245'), S('&asymp;', 'U+2248'), S('&prop;', 'U+221D'),
        S('&there4;', 'U+2234'), S('&ang;', 'U+2220'), S('&perp;', 'U+22A5'), S('&nabla;', 'U+2207'),
        S('&part;', 'U+2202'), S('&empty;', 'U+2205'), S('&forall;', 'U+2200'), S('&exist;', 'U+2203'),
      ],
      columns: 6,
    },
    '<p>Plus/minus: 10 &amp;plusmn; 0.5</p>\n<p>Multiplication: 5 &amp;times; 3 = 15</p>\n<p>Division: 10 &amp;divide; 2 = 5</p>\n<p>Square root: &amp;radic;25 = 5</p>\n<p>Infinity: &amp;infin;</p>\n<p>Not equal: 5 &amp;ne; 6</p>\n<p>Less/greater: x &amp;le; 10 &amp;ge; y</p>\n<p>Summation: &amp;sum; x<sub>i</sub></p>',
    [
      { lineOrElement: '&amp;plusmn; (&plusmn;) and &amp;times; (&times;)', explanationEn: 'Plus-minus sign and multiplication sign. &plusmn; indicates tolerance (5 ± 0.5). &times; is used for multiplication expressions (3 × 4 = 12), distinct from the letter x.', explanationAr: 'علامة زائد-ناقص وعلامة الضرب. &plusmn; تشير إلى التسامح.' },
      { lineOrElement: '&amp;radic; (&radic;) and &amp;infin; (&infin;)', explanationEn: 'Square root and infinity symbols. &radic; is used for square roots (√x). &infin; represents infinity in limits, asymptotes, and unbounded sets.', explanationAr: 'الجذر التربيعي واللانهاية.' },
      { lineOrElement: '&amp;sum; (&sum;) and &amp;int; (&int;)', explanationEn: 'Summation and integral signs. &sum; for series summation (Σ x_i). &int; for calculus integrals (∫ f(x) dx). For proper formulas, wrap in &lt;math&gt; MathML element.', explanationAr: 'علامتا المجموع والتكامل. للصيغ الصحيحة، استخدم MathML.' },
    ]
  ),

  H(
    'html-border-symbols',
    6,
    7,
    { en: 'Box Drawing & Border Symbols', ar: 'HTML - رموز الحدود' },
    {
      en: 'Box drawing characters (Unicode block U+2500–U+257F) allow creating text-based diagrams, tables, and borders in monospace environments. These are essential for ASCII art, terminal interfaces, and code documentation.\n\nCharacters range from simple lines (─ │) to corners (┌ ┐ └ ┘), junctions (├ ┤ ┬ ┴ ┼), and double-line variants (═ ║ ╔ ╗ ╚ ╝ ╠ ╣ ╦ ╩ ╬). Use monospace font (Consolas, Courier New) for proper alignment.',
      ar: 'أحرف رسم الصناديق (كتلة Unicode U+2500–U+257F) تسمح بإنشاء رسوم بيانية وجداول وحدود نصية في بيئات الأحادي المسافة. ضرورية لفن ASCII وواجهات الطرفية.\n\nتتراوح الأحرف من الخطوط البسيطة إلى الزوايا والتقاطعات.',
    },
    'symbols-grid',
    {
      caption: { en: 'Box drawing and border characters: single-line, double-line, corners, junctions, and mixed variants for text-based diagrams.', ar: 'أحرف رسم الصناديق والحدود: خطوط مفردة ومزدوجة وزوايا وتقاطعات.' },
      symbols: [
        S('─', 'U+2500'), S('│', 'U+2502'), S('┌', 'U+250C'), S('┐', 'U+2510'), S('└', 'U+2514'), S('┘', 'U+2518'),
        S('├', 'U+251C'), S('┤', 'U+2524'), S('┬', 'U+252C'), S('┴', 'U+2534'), S('┼', 'U+253C'),
        S('═', 'U+2550'), S('║', 'U+2551'), S('╔', 'U+2554'), S('╗', 'U+2557'), S('╚', 'U+255A'), S('╝', 'U+255D'),
        S('╠', 'U+2560'), S('╣', 'U+2563'), S('╦', 'U+2566'), S('╩', 'U+2569'), S('╬', 'U+256C'),
        S('╒', 'U+2552'), S('╓', 'U+2553'), S('╕', 'U+2555'), S('╖', 'U+2556'), S('╘', 'U+2558'), S('╙', 'U+2559'),
      ],
      columns: 6,
    },
    '<pre>\n  Single box:\n  ┌──────────┐\n  │  Hello!  │\n  └──────────┘\n\n  Double box:\n  ╔══════════╗\n  ║  Warning ║\n  ╚══════════╝\n\n  Mixed:\n  ┌──────┬──────┐\n  │ Left │ Right│\n  ├──────┼──────┤\n  │   A  │   1  │\n  └──────┴──────┘\n</pre>',
    [
      { lineOrElement: '┌ ┐ └ ┘ (corners) with ─ │ (lines)', explanationEn: 'Basic box drawing: use corners (┌ ┐ └ ┘) for the corners and horizontal (─) and vertical (│) lines for the edges. These 6 characters build any single-line rectangular box. Must be in monospace font for alignment.', explanationAr: 'رسم الصناديق الأساسي: استخدم الزوايا والخطوط الأفقية والعمودية. يجب استخدام خط أحادي المسافة للمحاذاة.' },
      { lineOrElement: '├ ┤ ┬ ┴ ┼ (junctions)', explanationEn: 'Junction characters for creating grids and multi-cell tables. ├ connects left line to crossing, ┤ connects right, ┬ connects top, ┴ connects bottom, ┼ connects all four directions. Essential for table diagrams.', explanationAr: 'أحرف التقاطع لإنشاء شبكات وجداول متعددة الخلايا.' },
      { lineOrElement: 'Double-line variants ═ ║ ╔ ╗ ╚ ╝', explanationEn: 'Double-line box drawing. ═ (horizontal double), ║ (vertical double), with matching corners (╔ ╗ ╚ ╝). Used for emphasis or hierarchy in text-based UIs. Mixed single/double junctions also available.', explanationAr: 'رسم الصناديق بخط مزدوج. يستخدم للتأكيد أو التسلسل الهرمي.' },
    ]
  ),

  H(
    'html-block-symbols',
    7,
    7,
    { en: 'Block & Shade Symbols', ar: 'HTML - رموز الكتل' },
    {
      en: 'Block and shade symbols are used for creating progress bars, gradients, and text-based visual effects. The Unicode block elements range from full blocks to partial blocks and shading patterns.\n\nCharacters include: Full block (█, U+2588), Dark shade (▓, U+2593), Medium shade (▒, U+2592), Light shade (░, U+2591), and partial blocks for building custom shapes (▌▐▀▄▌▐). These were essential in early computing for graphics and remain useful for terminal applications.',
      ar: 'رموز الكتل والتظليل تُستخدم لإنشاء أشرطة تقدم وتدرجات وتأثيرات بصرية نصية. تتراوح من الكتل الكاملة إلى الكتل الجزئية وأنماط التظليل.\n\nالأحرف تشمل: كتلة كاملة (█)، تظليل داكن (▓)، تظليل متوسط (▒)، تظليل فاتح (░).',
    },
    'symbols-grid',
    {
      caption: { en: 'Block and shade characters: full blocks, partial blocks, and shading patterns for text-based graphics and progress bars.', ar: 'أحرف الكتل والتظليل: كتل كاملة وجزئية وأنماط تظليل للرسوم النصية.' },
      symbols: [
        S('█', 'U+2588'), S('▉', 'U+2589'), S('▊', 'U+258A'), S('▋', 'U+258B'), S('▌', 'U+258C'), S('▍', 'U+258D'),
        S('▎', 'U+258E'), S('▏', 'U+258F'), S('▐', 'U+2590'), S('░', 'U+2591'), S('▒', 'U+2592'), S('▓', 'U+2593'),
        S('▔', 'U+2594'), S('▕', 'U+2595'), S('▀', 'U+2580'), S('▁', 'U+2581'), S('▂', 'U+2582'), S('▃', 'U+2583'),
        S('▄', 'U+2584'), S('▅', 'U+2585'), S('▆', 'U+2586'), S('▇', 'U+2587'), S('▬', 'U+25AC'), S('▰', 'U+25B0'),
      ],
      columns: 6,
    },
    '<pre>\n  Progress: ██████████ 100%\n  Progress: ████████░░ 80%\n  Progress: ██████░░░░ 60%\n  Progress: ████░░░░░░ 40%\n  Progress: ██░░░░░░░░ 20%\n  \n  Gradient bar: ░░▒▒▓▓████\n  \n  Block art:\n  ▄▄▄▄▄▄▄▄▄▄\n  █        █\n  █  Hello █\n  ▀▀▀▀▀▀▀▀▀▀\n</pre>',
    [
      { lineOrElement: '█ (full block) and ░ ▒ ▓ (shades)', explanationEn: 'Full block (U+2588) is completely filled. Light (░), medium (▒), and dark (▓) shades create a grayscale effect from 25% to 75% fill. Combine for progress bars and visual weight indicators.', explanationAr: 'الكتلة الكاملة ممتلئة بالكامل. التظليل (فاتح، متوسط، داكن) ينشئ تأثير تدرج رمادي.' },
      { lineOrElement: '▀ ▄ ▌ ▐ (half blocks)', explanationEn: 'Upper (▀), lower (▄), left (▌), and right (▐) half blocks. These are useful for building custom shapes and pixel-art approximations at double resolution in monospace environments.', explanationAr: 'نصف الكتل (علوي، سفلي، يسار، يمين). مفيدة لبناء أشكال مخصصة.' },
      { lineOrElement: 'Progress bars with block characters', explanationEn: 'Each full block (█) represents approximately 10% progress. The partial shade (░) fills remaining space. Modern CSS progress bars (<progress> or <meter>) are preferred for web apps, but blocks work in plain text.', explanationAr: 'أشرطة التقدم باستخدام أحرف الكتل. كل كتلة كاملة تمثل حوالي 10%.' },
    ]
  ),

  H(
    'html-geometric-shapes',
    8,
    7,
    { en: 'Geometric Shapes', ar: 'HTML - رموز الأشكال الهندسية' },
    {
      en: 'Geometric shapes (Unicode block U+25A0–U+25FF) include squares, circles, triangles, diamonds, and other basic shapes. Used for bullets, icons, ratings, and decorative elements without requiring SVG or images.\n\nCommon shapes: ■ (black square), □ (white square), ● (black circle), ○ (white circle), ▲ (black triangle up), ▼ (black triangle down), ◆ (black diamond), ◇ (white diamond). Use CSS for coloring — color property changes the shape\'s fill.',
      ar: 'الأشكال الهندسية (كتلة Unicode U+25A0–U+25FF) تشمل المربعات والدوائر والمثلثات والمعينات. تُستخدم كنقاط وأيقونات وتقييمات.\n\nالأشكال الشائعة: ■ مربع أسود، □ مربع أبيض، ● دائرة سوداء، ○ دائرة بيضاء، ▲ مثلث لأعلى، ▼ مثلث لأسفل.',
    },
    'symbols-grid',
    {
      caption: { en: 'Geometric shapes: squares, circles, triangles, diamonds, and stars for UI elements and decorative designs.', ar: 'الأشكال الهندسية: مربعات، دوائر، مثلثات، معينات، نجوم لعناصر الواجهة.' },
      symbols: [
        S('■', 'U+25A0'), S('□', 'U+25A1'), S('▢', 'U+25A2'), S('▪', 'U+25AA'), S('▫', 'U+25AB'),
        S('●', 'U+25CF'), S('○', 'U+25CB'), S('◉', 'U+25C9'), S('◎', 'U+25CE'), S('◌', 'U+25CC'),
        S('▲', 'U+25B2'), S('△', 'U+25B3'), S('▶', 'U+25B6'), S('▷', 'U+25B7'), S('▼', 'U+25BC'),
        S('▽', 'U+25BD'), S('◀', 'U+25C0'), S('◁', 'U+25C1'), S('◆', 'U+25C6'), S('◇', 'U+25C7'),
        S('★', 'U+2605'), S('☆', 'U+2606'), S('✦', 'U+2726'), S('✧', 'U+2727'),
      ],
      columns: 6,
    },
    '<p>Bullet list with shapes:</p>\n<ul style="list-style: none;">\n  <li>■ Item one</li>\n  <li>● Item two</li>\n  <li>▲ Item three</li>\n  <li>◆ Item four</li>\n</ul>\n<p>Star rating: ★ ★ ★ ☆ ☆ (3/5)</p>\n<p>Directions: ▲ Up ▼ Down ◀ Back ▶ Forward</p>\n<p>Status: ● Online ◉ Away ○ Offline</p>',
    [
      { lineOrElement: '■ ● ▲ (basic shapes)', explanationEn: 'Solid shapes as bullet alternatives. The CSS color property changes their fill color. Use as decorative bullets in unstyled lists. Screen readers may not announce these — add aria-hidden="true" when purely decorative.', explanationAr: 'أشكال صلبة كبدائل للنقاط. تغير خاصية CSS color لون التعبئة.' },
      { lineOrElement: '★ ☆ for star ratings', explanationEn: 'Filled (★) and empty (☆) stars. Combine for rating displays: ★★★★☆ = 4/5. Works without images. Color them with CSS. For interactive ratings, use CSS or JavaScript to toggle between filled and empty on click.', explanationAr: 'نجوم ممتلئة وفارغة للتقييمات. ★★★★☆ = 4/5.' },
      { lineOrElement: '● ◉ ○ for status indicators', explanationEn: 'Solid circle (● = online/busy/active), circle with dot (◉ = away/idle), empty circle (○ = offline/inactive). Common in chat apps and dashboards. Color with CSS: green, orange, red.', explanationAr: 'دوائر لحالات الاتصال. ● متصل، ◉ غير نشط، ○ غير متصل.' },
    ]
  ),

  H(
    'html-letterlike-symbols',
    9,
    7,
    { en: 'Letterlike Symbols', ar: 'HTML - رموز تشبه الأحرف' },
    {
      en: 'Letterlike symbols are Unicode characters that resemble letters but have special meanings. They include mathematical notation, scientific abbreviations, and other specialized forms that look like Roman letters but are distinct characters.\n\nCommon letterlike symbols: ℂ (complex numbers), ℍ (quaternions), ℕ (natural numbers), ℙ (prime numbers), ℚ (rational numbers), ℝ (real numbers), ℤ (integers), ℡ (telephone sign), ℠ (service mark), ℗ (sound recording copyright), ℞ (prescription symbol), ℧ (inverted ohm sign).',
      ar: 'الرموز الشبيهة بالأحرف هي أحرف Unicode تشبه الحروف ولكن لها معانٍ خاصة. تشمل التدوين الرياضي والاختصارات العلمية.\n\nالرموز الشائعة: ℂ (الأعداد المركبة)، ℝ (الأعداد الحقيقية)، ℕ (الأعداد الطبيعية)، ℚ (الأعداد النسبية)، ℤ (الأعداد الصحيحة).',
    },
    'symbols-grid',
    {
      caption: { en: 'Letterlike symbols: mathematical double-struck letters (ℝ, ℂ, ℕ), scientific symbols, and specialized character forms.', ar: 'الرموز الشبيهة بالأحرف: الحروف الرياضية (ℝ، ℂ، ℕ) والرموز العلمية.' },
      symbols: [
        S('ℂ', 'U+2102'), S('ℍ', 'U+210D'), S('ℕ', 'U+2115'), S('ℙ', 'U+2119'), S('ℚ', 'U+211A'),
        S('ℝ', 'U+211D'), S('ℤ', 'U+2124'), S('K', 'U+212A'), S('Å', 'U+212B'), S('ℬ', 'U+212C'),
        S('ℭ', 'U+212D'), S('ℰ', 'U+2130'), S('ℱ', 'U+2131'), S('ℳ', 'U+2133'), S('Ⅎ', 'U+2132'),
        S('ℊ', 'U+210A'), S('ℋ', 'U+210B'), S('ℌ', 'U+210C'), S('ℐ', 'U+2110'), S('ℑ', 'U+2111'),
        S('ℓ', 'U+2113'), S('℘', 'U+2118'), S('℗', 'U+2117'), S('℞', 'U+211E'),
      ],
      columns: 6,
    },
    '<p>Number sets: ℕ ⊆ ℤ ⊆ ℚ ⊆ ℝ ⊆ ℂ</p>\n<p>Complex plane: ℂ is the set of complex numbers.</p>\n<p>Real numbers: ℝ represents all real numbers.</p>\n<p>℞ Only: Prescription symbol for medical forms.</p>\n<p>Service mark: BrandName℠</p>\n<p>Sound recording: &amp;copy;2026 ℗</p>',
    [
      { lineOrElement: 'ℝ ℂ ℕ ℤ ℚ (number sets)', explanationEn: 'Double-struck (blackboard bold) letters for number sets. ℝ = real numbers, ℂ = complex numbers, ℕ = natural numbers, ℤ = integers, ℚ = rational numbers. Distinct from regular italic letters in mathematical contexts.', explanationAr: 'الحروف المضاعفة (داكنة) لمجموعات الأعداد. ℝ = حقيقية، ℂ = مركبة، ℕ = طبيعية.' },
      { lineOrElement: '℞ (prescription symbol)', explanationEn: 'Medical prescription symbol (U+211E). Used in pharmaceutical contexts and medical forms. Represents the Latin word "recipe" meaning "take". Also available as &rx; in some HTML entity sets.', explanationAr: 'رمز الوصفة الطبية. يُستخدم في السياقات الصيدلانية. يرمز للكلمة اللاتينية recipe بمعنى "خذ".' },
      { lineOrElement: '℠ (service mark) and ℗ (sound recording)', explanationEn: 'Service mark (℠) is used for service-related branding, similar to ™ for trademarks. ℗ indicates copyright on a sound recording, distinct from © for general copyright works.', explanationAr: 'علامة الخدمة (℠) للعلامات التجارية للخدمات. ℗ لحقوق الطبع للتسجيلات الصوتية.' },
    ]
  ),

  H(
    'html-misc-symbols',
    10,
    7,
    { en: 'Miscellaneous Symbols', ar: 'HTML - رموز متنوعة' },
    {
      en: 'Miscellaneous symbols include a wide range of Unicode characters used for UI elements, indicators, and decorative purposes. This category includes weather symbols, celestial bodies, warning signs, and other useful icons.\n\nNotable symbols: ☀ (sun), ☁ (cloud), ☂ (umbrella), ☃ (snowman), ★ (star), ☆ (empty star), ☎ (telephone), ☐ (empty checkbox), ☑ (checked checkbox), ☒ (cross mark), ☠ (skull and crossbones), ♡ (heart), ♥ (filled heart), ♠ ♣ ♥ ♦ (card suits).',
      ar: 'الرموز المتنوعة تشمل مجموعة واسعة من أحرف Unicode لعناصر الواجهة والمؤشرات والأغراض الزخرفية. تشمل رموز الطقس والأجرام السماوية وعلامات التحذير.\n\nالرموز البارزة: ☀ شمس، ☁ سحاب، ★ نجمة، ☎ هاتف، ☑ خانة اختيار، ♥ قلب، ♠ ♣ ♥ ♦ أوراق اللعب.',
    },
    'symbols-grid',
    {
      caption: { en: 'Miscellaneous symbols: weather, celestial, card suits, check marks, and other useful UI characters.', ar: 'رموز متنوعة: الطقس، الأجرام السماوية، أوراق اللعب، علامات الاختيار.' },
      symbols: [
        S('☀', 'U+2600'), S('☁', 'U+2601'), S('☂', 'U+2602'), S('☃', 'U+2603'), S('☄', 'U+2604'),
        S('★', 'U+2605'), S('☆', 'U+2606'), S('☇', 'U+2607'), S('☈', 'U+2608'), S('☉', 'U+2609'),
        S('☊', 'U+260A'), S('☋', 'U+260B'), S('☌', 'U+260C'), S('☍', 'U+260D'), S('☎', 'U+260E'),
        S('☏', 'U+260F'), S('☐', 'U+2610'), S('☑', 'U+2611'), S('☒', 'U+2612'), S('☓', 'U+2613'),
        S('♠', 'U+2660'), S('♣', 'U+2663'), S('♥', 'U+2665'), S('♦', 'U+2666'),
      ],
      columns: 6,
    },
    '<p>Weather: ☀ Sunny &nbsp; ☁ Cloudy &nbsp; ☂ Rainy &nbsp; ☃ Snowy</p>\n<p>Toast: ☑ Completed &nbsp; ☐ Pending &nbsp; ☒ Cancelled</p>\n<p>Card suits: ♠ ♣ ♥ ♦</p>\n<p>Phone: ☎ Call us</p>\n<p>Heart: I ♥ HTML</p>',
    [
      { lineOrElement: '☐ ☑ ☒ (checkbox symbols)', explanationEn: 'Empty box (☐ = unchecked), check mark in box (☑ = checked), cross in box (☒ = cancelled/error). Useful for printed forms or visual-only checklists. For interactive forms, always use real <input type="checkbox"> elements.', explanationAr: 'رموز خانات الاختيار. للنماذج المطبوعة أو قوائم التحقق البصرية فقط.' },
      { lineOrElement: '♠ ♣ ♥ ♦ (card suits)', explanationEn: 'Playing card suits. Black spade (♠), club (♣), heart (♥), diamond (♦). ♥ and ♦ are rendered as red in most browsers and can be colored with CSS. ♥ is often used as a heart symbol in social contexts.', explanationAr: 'أوراق اللعب: سبيد، كلوب، هارت، دايموند.' },
      { lineOrElement: '☎ ☏ (telephone symbols)', explanationEn: 'Telephone symbols: ☎ (U+260E, filled) and ☏ (U+260F, outlined). Use these sparingly — the modern convention is to use SVG icons or emoji (📞) for telephone indicators.', explanationAr: 'رموز الهاتف. استخدمها باعتدال — الاتجاه الحديث لاستخدام أيقونات SVG.' },
    ]
  ),

  H(
    'html-typographic-symbols',
    11,
    7,
    { en: 'Typography & Dingbats', ar: 'HTML - رموز مطبعية' },
    {
      en: 'Typography symbols include decorative ornaments, dingbats, and specialized typographic marks used in publishing and design. The Unicode Dingbats block (U+2700–U+27BF) contains many of these characters.\n\nKey symbols: ✁ (scissors), ✉ (envelope), ✍ (writing hand), ✔ (heavy check mark), ✘ (heavy cross), ✦ (black four-pointed star), ✨ (sparkles), ✱ (heavy asterisk), ❝ (heavy double turned comma quote), ❞ (heavy double comma quote), ❤ (heavy black heart), ➤ (black rightwards arrowhead).',
      ar: 'الرموز المطبعية تشمل الزخارف والحلي والعلامات المطبعية المتخصصة المستخدمة في النشر والتصميم.\n\nالرموز الرئيسية: ✁ مقص، ✉ ظرف، ✍ يد تكتب، ✔ علامة صح، ✘ علامة خطأ، ✨ بريق، ❤ قلب أسود.',
    },
    'symbols-grid',
    {
      caption: { en: 'Typographic ornaments and dingbats: scissors, envelopes, check marks, crosses, stars, and decorative flourishes.', ar: 'الزخارف المطبعية: مقص، أظرف، علامات صح وخطأ، نجوم، زخارف.' },
      symbols: [
        S('✁', 'U+2701'), S('✂', 'U+2702'), S('✃', 'U+2703'), S('✄', 'U+2704'), S('✆', 'U+2706'),
        S('✇', 'U+2707'), S('✈', 'U+2708'), S('✉', 'U+2709'), S('✌', 'U+270C'), S('✍', 'U+270D'),
        S('✓', 'U+2713'), S('✔', 'U+2714'), S('✕', 'U+2715'), S('✖', 'U+2716'), S('✗', 'U+2717'),
        S('✘', 'U+2718'), S('✝', 'U+271D'), S('✞', 'U+271E'), S('✟', 'U+271F'), S('✠', 'U+2720'),
        S('✩', 'U+2729'), S('✪', 'U+272A'), S('✫', 'U+272B'), S('✬', 'U+272C'),
      ],
      columns: 6,
    },
    '<p>Actions: ✁ Cut &nbsp; ✂ Copy &nbsp; ✉ Email</p>\n<p>Status: ✓ Approved &nbsp; ✔ Confirmed &nbsp; ✗ Rejected &nbsp; ✘ Cancelled</p>\n<p>Ornaments: ✦ ✧ ✦ ✧</p>\n<p>Travel: ✈ Airlines &nbsp; ✆ Phone support</p>',
    [
      { lineOrElement: '✓ ✔ ✗ ✘ (check marks and crosses)', explanationEn: 'Light check mark (✓, U+2713), heavy check mark (✔, U+2714), light cross (✗, U+2717), heavy cross (✘, U+2718). The heavy variants are bolder and more visible. Use for approval/rejection indicators.', explanationAr: 'علامات الصح والخطأ. المتغيرات الغامقة أكثر وضوحاً.' },
      { lineOrElement: '✁ ✂ ✄ (scissors) and ✉ (envelope)', explanationEn: 'Scissors symbols (✁ single blade, ✂ black scissors, ✃ lower blade, ✄ white scissors). ✉ (envelope) is the universal symbol for email. More modern alternatives: 📧 (email emoji) or SVG icons.', explanationAr: 'رموز المقص والظرف. البدائل الأحدث: 📧 إيموجي أو أيقونات SVG.' },
      { lineOrElement: '✌ ✍ (hand symbols)', explanationEn: 'Victory hand (✌, U+270C) and writing hand (✍, U+270D). These are contextual and may not render in all fonts. Emoji equivalents (✌️, ✍️) with variation selector-16 may display better on modern devices.', explanationAr: 'رموز اليد. قد لا تظهر في كل الخطوط. الإيموجي يعرض بشكل أفضل.' },
    ]
  ),

  H(
    'html-emoji-symbols',
    12,
    7,
    { en: 'Emoji & Pictographs', ar: 'HTML - رموز الإيموجي' },
    {
      en: '<p>Emoji are <strong>pictographs</strong> (picture-characters) that originated from Japanese mobile phones. HTML supports emoji through Unicode characters, HTML entities, and direct UTF-8 encoding. Emoji are part of the <strong>Universal Coded Character Set (Unicode)</strong> and are standardized by the Unicode Consortium.</p><p>There are <strong>three ways</strong> to display emoji in HTML:</p><ol><li><strong>Direct UTF-8:</strong> Paste the emoji directly into HTML — e.g., <code>😀</code> (requires <code>&lt;meta charset="UTF-8"&gt;</code>)</li><li><strong>Hex entity:</strong> <code>&amp;#x1F600;</code> — uses the Unicode code point in base-16</li><li><strong>Decimal entity:</strong> <code>&amp;#128512;</code> — uses the same code point in base-10</li></ol><p>Emoji support <strong>skin tone modifiers</strong> based on the Fitzpatrick scale:</p><ul><li><code>&amp;#x1F3FB;</code> 🏻 — Light skin tone</li><li><code>&amp;#x1F3FC;</code> 🏼 — Medium-light</li><li><code>&amp;#x1F3FD;</code> 🏽 — Medium</li><li><code>&amp;#x1F3FE;</code> 🏾 — Medium-dark</li><li><code>&amp;#x1F3FF;</code> 🏿 — Dark</li></ul><p>The modifier is placed immediately after the base emoji: <code>👋</code> + <code>🏽</code> = <code>👋🏽</code>. Note: only <strong>human-form emoji</strong> support skin tone modifiers.</p><p><strong>Accessibility considerations:</strong> Emoji are text, not images. Screen readers read their Unicode description (e.g., "GRINNING FACE"). Use <code>role="img"</code> with <code>aria-label</code> for critical emoji, and <code>aria-hidden="true"</code> for decorative ones. Avoid excessive emoji use that may overwhelm screen reader users.</p>',
      ar: '<p>الإيموجي هي <strong>صور رمزية</strong> نشأت من الهواتف المحمولة اليابانية. يدعم HTML الإيموجي من خلال أحرف <strong>Unicode</strong> وكيانات HTML وترميز UTF-8 المباشر. الإيموجي جزء من مجموعة الأحرف العالمية (Unicode).</p><p><strong>ثلاث طرق</strong> لعرض الإيموجي في HTML:</p><ol><li><strong>UTF-8 مباشر:</strong> الصق الإيموجي مباشرة — مثل <code>😀</code> (يتطلب <code>&lt;meta charset="UTF-8"&gt;</code>)</li><li><strong>كيان سداسي عشري:</strong> <code>&amp;#x1F600;</code> — يستخدم نقطة كود Unicode بالقاعدة 16</li><li><strong>كيان عشري:</strong> <code>&amp;#128512;</code> — نفس نقطة الكود بالقاعدة 10</li></ol><p>يمكن تعديل <strong>لون بشرة</strong> الإيموجي باستخدام معدلات: 🏻 (فاتح)، 🏼 (متوسط-فاتح)، 🏽 (متوسط)، 🏾 (متوسط-غامق)، 🏿 (غامق). يوضع المعدل مباشرة بعد الإيموجي الأساسي.</p><p><strong>اعتبارات إمكانية الوصول:</strong> الإيموجي نصوص وليست صورًا. قارئات الشاشة تقرأ وصف Unicode. استخدم <code>role="img"</code> مع <code>aria-label</code> للإيموجي المهم و <code>aria-hidden="true"</code> للزخرفي.</p>',
    },
    'emoji-grid',
    {
      caption: { en: 'Emoji rendered via HTML entity or UTF-8 character — cross-platform compatible. Smileys, gestures, symbols, and objects.', ar: 'الإيموجي يُعرض عبر كيان HTML أو حرف UTF-8 — متوافق عبر جميع المنصات.' },
    },
    '<!-- Method 1: Direct UTF-8 emoji (requires <meta charset="UTF-8">) -->\n<p>😀 😂 🤔 😍 🤩 🎉</p>\n\n<!-- Method 2: Hex HTML entity -->\n<p>&#x1F600; (U+1F600 = 😀 GRINNING FACE)</p>\n<p>&#x1F44D; (U+1F44D = 👍 THUMBS UP SIGN)</p>\n\n<!-- Method 3: Decimal HTML entity -->\n<p>&#128512; (decimal for U+1F600)</p>\n<p>&#128077; (decimal for U+1F44D)</p>\n\n<!-- Skin tone modifiers -->\n<p>👋 Wave: 👋 (base), 👋🏽 (medium skin tone), 👋🏿 (dark skin tone)</p>\n<p>👍 Thumbs up: 👍 (base), 👍🏻 (light), 👍🏿 (dark)</p>\n\n<!-- Emoji with text for accessibility -->\n<p role="img" aria-label="Smiling face with sunglasses">😎</p>\n<p><span aria-hidden="true">🔥</span> Trending now</p>',
    [
      { lineOrElement: '😀 Direct UTF-8 emoji', explanationEn: 'Simplest method — paste emoji directly into HTML. Requires the page to have <meta charset="UTF-8">. All modern editors support emoji paste. The emoji will render on any device that supports the character. This is the most readable approach for developers.', explanationAr: 'أبسط طريقة — الصق الإيموجي مباشرة في HTML. يتطلب <meta charset="UTF-8">.' },
      { lineOrElement: '&#x1F600; Hex entity', explanationEn: 'Hexadecimal HTML entity. &#x1F600; uses the Unicode code point (U+1F600) in base-16. The &#x prefix starts a hex reference, ; ends it. This method works even if the developer cannot type emoji directly (e.g., in older editors or terminal-based workflows).', explanationAr: 'كيان سداسي عشري. يستخدم نقطة كود Unicode بالقاعدة 16. يعمل حتى بدون القدرة على كتابة الإيموجي مباشرة.' },
      { lineOrElement: '&#128512; Decimal entity', explanationEn: 'Decimal HTML entity. &#128512; uses the same Unicode code point as &#x1F600; but in base-10. Both produce the exact same emoji. Decimal was more common historically; hex is preferred today as it directly matches the Unicode standard notation (U+1F600 → &#x1F600;).', explanationAr: 'كيان عشري. يستخدم نفس نقطة كود Unicode بالقاعدة 10. كلاهما ينتج نفس الإيموجي.' },
      { lineOrElement: 'Skin tone modifiers', explanationEn: 'Five skin tone modifiers: 🏻 (U+1F3FB, light), 🏼 (U+1F3FC, medium-light), 🏽 (U+1F3FD, medium), 🏾 (U+1F3FE, medium-dark), 🏿 (U+1F3FF, dark). The modifier must immediately follow the base emoji: 👋 + 🏽 = 👋🏽. Not all emoji support skin tone modifiers — only human-form emoji.', explanationAr: 'معدلات لون البشرة. يجب أن يتبع المعدل الإيموجي الأساسي مباشرة. فقط إيموجي الشكل البشري يدعمها.' },
      { lineOrElement: 'role="img" aria-label for accessibility', explanationEn: 'Accessibility best practice: set role="img" and provide a descriptive aria-label for critical emoji. Use aria-hidden="true" on decorative emoji so screen readers skip them. Without these, screen readers read the Unicode description which may be overly verbose (e.g., "FACE WITH TEARS OF JOY" instead of "laughing").', explanationAr: 'ممارسة إمكانية الوصول: استخدم role="img" و aria-label للإيموجي المهم. استخدم aria-hidden="true" للإيموجي الزخرفي.' },
      { lineOrElement: 'Emoji as semantic enrichment', explanationEn: 'Use emoji to enhance — not replace — text. Emoji can indicate tone (😊 friendly), category (📚 documents), or status (✅ completed). Avoid emoji-only communications. Emoji rendering varies across platforms (Apple, Google, Microsoft, Samsung have different designs). The Unicode standard defines the meaning, not the visual design.', explanationAr: 'استخدم الإيموجي لتعزيز النص — وليس استبداله. يمكن أن يشير إلى النبرة أو الفئة أو الحالة. يختلف مظهر الإيموجي عبر المنصات.' },
    ],
    '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Emoji Reference</title>\n  <style>\n    body { font-family: system-ui, sans-serif; padding: 24px; max-width: 640px; margin: 0 auto; color: #1e293b; }\n    h2 { color: #6366f1; }\n    .emoji-grid { display: grid; grid-template-columns: repeat(6, 1fr); gap: 8px; margin: 16px 0; }\n    .emoji-cell { display: flex; flex-direction: column; align-items: center; padding: 12px 4px; border: 1px solid #e2e8f0; border-radius: 8px; background: #f8fafc; font-size: 13px; }\n    .emoji-cell span:first-child { font-size: 28px; }\n    .emoji-cell .code { font-size: 9px; color: #64748b; font-family: monospace; margin-top: 4px; }\n    code { background: #eef2ff; padding: 2px 6px; border-radius: 4px; font-size: 0.85em; }\n  </style>\n</head>\n<body>\n  <h2>Emoji in HTML</h2>\n  <p>Emoji can be displayed <strong>three ways</strong>:</p>\n  <ul>\n    <li><strong>Direct UTF-8:</strong> 😀 😂 🎉</li>\n    <li><strong>Hex entity:</strong> <code>&amp;#x1F600;</code> → &#x1F600;</li>\n    <li><strong>Decimal entity:</strong> <code>&amp;#128512;</code> → &#128512;</li>\n  </ul>\n  <div class="emoji-grid">\n    <div class="emoji-cell"><span>😀</span><span class="code">U+1F600</span></div>\n    <div class="emoji-cell"><span>😂</span><span class="code">U+1F602</span></div>\n    <div class="emoji-cell"><span>😍</span><span class="code">U+1F60D</span></div>\n    <div class="emoji-cell"><span>🎉</span><span class="code">U+1F389</span></div>\n    <div class="emoji-cell"><span>❤️</span><span class="code">U+2764</span></div>\n    <div class="emoji-cell"><span>🔥</span><span class="code">U+1F525</span></div>\n    <div class="emoji-cell"><span>🚀</span><span class="code">U+1F680</span></div>\n    <div class="emoji-cell"><span>⭐</span><span class="code">U+2B50</span></div>\n    <div class="emoji-cell"><span>✅</span><span class="code">U+2705</span></div>\n    <div class="emoji-cell"><span>💡</span><span class="code">U+1F4A1</span></div>\n    <div class="emoji-cell"><span>🎯</span><span class="code">U+1F3AF</span></div>\n    <div class="emoji-cell"><span>☕</span><span class="code">U+2615</span></div>\n  </div>\n</body>\n</html>'
  ),
];


export default topics;

export function getTopicById(id) {
  return topics.find(t => t.id === id) || null;
}

export function getTopicsByChapter(chapterId) {
  return topics.filter(t => t.chapter === chapterId).sort((a, b) => a.order - b.order);
}

export { chapters, DEFAULT_BOILERPLATE };

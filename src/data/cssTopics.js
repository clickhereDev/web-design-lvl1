const C = (id, order, chapter, title, explanation, codeSample, codeBreakdown, boilerplateCode) => ({
  id, category: 'css', chapter, order, title, explanation,
  mockupType: null, mockup: null, codeSample, codeBreakdown,
  boilerplateCode: boilerplateCode || '',
});

const DEFAULT_CSS_BOILERPLATE = '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>CSS Playground</title>\n  <style>\n    /* Edit your CSS here */\n  </style>\n</head>\n<body>\n  <!-- Edit your HTML here -->\n</body>\n</html>';

export { DEFAULT_CSS_BOILERPLATE };

const cssChapters = [
  { id: 1, title: { en: 'Foundations & Syntax', ar: 'أساسيات اللغة وقواعد الكتابة' } },
  { id: 2, title: { en: 'Styling & Box Model', ar: 'أساسيات التنسيق والنموذج الصندوقي' } },
  { id: 3, title: { en: 'Typography & Visual Effects', ar: 'النصوص والخطوط والمظهر' } },
  { id: 4, title: { en: 'Layout & Positioning', ar: 'تخطيط وتدفق العناصر' } },
  { id: 5, title: { en: 'Advanced Components & Selectors', ar: 'العناصر المتقدمة والخصائص' } },
];

const cssTopics = [

  // ══════════════════════════════════════════════════════════
  // Module 1: Foundations & Syntax (Chapter 1)
  // ══════════════════════════════════════════════════════════

  C('css-overview', 1, 1,
    { en: 'CSS — Overview', ar: 'CSS - نظرة عامة' },
    {
      en: 'CSS (Cascading Style Sheets) is the language used to control the presentation and layout of HTML documents. While HTML defines the structure and meaning of content, CSS defines how that content looks — colors, fonts, spacing, positioning, and responsiveness. CSS follows a cascading rule system where multiple style sources (browser defaults, user styles, author styles) are combined into a final computed style. Understanding CSS requires mastery of the box model, the cascade, specificity, and the various layout modes (normal flow, flexbox, grid).',
      ar: 'CSS هي لغة التحكم في مظهر وتخطيط مستندات HTML. بينما يحدد HTML بنية المحتوى ومعناه، تحدد CSS كيف يبدو هذا المحتوى — الألوان والخطوط والتباعد وتحديد المواقع والاستجابة. تتبع CSS نظام قواعد متتالية حيث يتم دمج مصادر أنماط متعددة في نمط نهائي محسوب.',
    },
    '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>CSS Overview</title>\n  <style>\n    body { font-family: system-ui, sans-serif; padding: 24px; background: #f8fafc; color: #1e293b; }\n    h1 { color: #6366f1; }\n    p { line-height: 1.6; }\n  </style>\n</head>\n<body>\n  <h1>Hello, CSS!</h1>\n  <p>This text is styled with CSS rules.</p>\n</body>\n</html>',
    [
      { lineOrElement: '<style>', explanationEn: 'Opens the CSS block inside the HTML document. All CSS rules go between <style> and </style>.', explanationAr: 'يفتح كتلة CSS داخل مستند HTML. جميع قواعد CSS توضع بين <style> و </style>.' },
      { lineOrElement: 'body { ... }', explanationEn: 'Selects the <body> element and applies a font, padding, background color, and text color.', explanationAr: 'يحدد عنصر <body> ويطبق خطًا وحشوة ولون خلفية ولون نص.' },
      { lineOrElement: 'h1 { color: #6366f1; }', explanationEn: 'Selects all <h1> elements and changes their text color to indigo.', explanationAr: 'يحدد جميع عناصر <h1> ويغير لون نصهم إلى نيلي.' },
    ],
    DEFAULT_CSS_BOILERPLATE
  ),

  C('css-syntax', 2, 1,
    { en: 'CSS — Syntax', ar: 'CSS - قواعد كتابة الكود' },
    {
      en: 'A CSS rule consists of a selector and a declaration block. The selector targets HTML elements. The declaration block contains one or more declarations separated by semicolons. Each declaration is a property: value pair. CSS is whitespace-insensitive but well-formatted indentation is critical for maintainability. Comments use /* */. Properties are case-insensitive but the convention is lowercase-with-hyphens (kebab-case).',
      ar: 'تتكون قاعدة CSS من محدد (selector) وكتلة إعلان (declaration block). يستهدف المحدد عناصر HTML. تحتوي كتلة الإعلان على إعلان واحد أو أكثر مفصولة بفواصل منقوطة. كل إعلان هو زوج خاصية: قيمة. CSS لا يتحسس المسافات البيضاء لكن التنسيق الجيد ضروري للصيانة.',
    },
    '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>CSS Syntax</title>\n  <style>\n    /* This is a CSS comment */\n    .card {\n      background: white;\n      border-radius: 12px;\n      padding: 24px;\n      box-shadow: 0 2px 8px rgba(0,0,0,0.1);\n    }\n  </style>\n</head>\n<body>\n  <div class="card">\n    <h2>A Card</h2>\n    <p>Styled with standard CSS syntax.</p>\n  </div>\n</body>\n</html>',
    [
      { lineOrElement: '/* comment */', explanationEn: 'A CSS comment — ignored by the browser, used for documentation.', explanationAr: 'تعليق CSS — يتجاهله المتصفح، يُستخدم للتوثيق.' },
      { lineOrElement: '.card { }', explanationEn: 'Class selector targeting elements with class="card". The declaration block is enclosed in { }.', explanationAr: 'محدد فئة يستهدف العناصر ذات class="card". كتلة الإعلان محاطة بـ { }.' },
      { lineOrElement: 'background: white;', explanationEn: 'A declaration — property name followed by colon, space, then value, terminated by semicolon.', explanationAr: 'إعلان — اسم الخاصية يتبعه نقطتان ومسافة ثم القيمة وتنتهي بفاصلة منقوطة.' },
    ],
    DEFAULT_CSS_BOILERPLATE
  ),

  // ── SEEDED: CSS Selectors ──
  C('css-selectors', 3, 1,
    { en: 'CSS — Selectors', ar: 'CSS - تحديد العناصر' },
    {
      en: 'Selectors are the mechanism by which CSS targets HTML elements. The fundamental selectors are: universal (*) targets every element; element selectors (e.g., p, h1) target all instances of that tag; class selectors (.classname) target elements with a specific class attribute; ID selectors (#idname) target a single element with that ID. Combinators expand this: descendant (div p) targets p inside div; child (div > p) targets direct children; adjacent sibling (h1 + p) targets the first p immediately after h1; general sibling (h1 ~ p) targets all p siblings after h1. Pseudo-classes like :hover, :first-child, :nth-child() apply styles based on state or position.',
      ar: 'المحددات هي الآلية التي تستهدف بها CSS عناصر HTML. المحددات الأساسية هي: العام (*) يستهدف كل العناصر؛ محددات العناصر (مثل p, h1) تستهدف كل مثيلات تلك الوسم؛ محددات الفئة (.classname) تستهدف العناصر ذات سمة class محددة؛ محددات المعرف (#idname) تستهدف عنصرًا واحدًا بهذا المعرف. توسع الأدوات المدموجة هذا: السليل (div p) يستهدف p داخل div؛ الطفل (div > p) يستهدف الأبناء المباشرين؛ الأخ المجاور (h1 + p) يستهدف أول p بعد h1 مباشرة؛ الأخ العام (h1 ~ p) يستهدف كل إخوة p بعد h1.',
    },
    '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>CSS Selectors Demo</title>\n  <style>\n    * { box-sizing: border-box; margin: 0; }\n    body { font-family: system-ui, sans-serif; padding: 32px; background: #f8fafc; color: #1e293b; }\n    .card { background: white; border-radius: 16px; padding: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.08); margin-bottom: 20px; }\n    #special { border-left: 4px solid #6366f1; }\n    .card h2 { color: #6366f1; margin-bottom: 8px; }\n    .card p { line-height: 1.7; color: #475569; }\n    .highlight { background: #fef9c3; padding: 4px 8px; border-radius: 4px; }\n    a:hover { color: #6366f1; text-decoration: underline; }\n    ul li:first-child { font-weight: bold; }\n    ul li:last-child { color: #94a3b8; }\n  </style>\n</head>\n<body>\n  <div class="card">\n    <h2>Selector Types</h2>\n    <p>This uses <strong>element</strong> and <strong>class</strong> selectors.</p>\n  </div>\n  <div class="card" id="special">\n    <h2>ID Selector</h2>\n    <p>This <span class="highlight">card</span> is targeted by its ID.</p>\n  </div>\n  <ul>\n    <li>First child (bold)</li>\n    <li>Middle item</li>\n    <li>Last child (faded)</li>\n  </ul>\n  <p><a href="#">Hover over this link</a></p>\n</body>\n</html>',
    [
      { lineOrElement: '* { box-sizing: border-box; }', explanationEn: 'Universal selector — applies to every element on the page. Useful for global resets.', explanationAr: 'المحدد العام — يطبق على كل عنصر في الصفحة. مفيد لإعادة التعيين العامة.' },
      { lineOrElement: '.card { ... }', explanationEn: 'Class selector — targets all elements with class="card". Reusable across many elements.', explanationAr: 'محدد الفئة — يستهدف كل العناصر ذات class="card". قابل لإعادة الاستخدام عبر عناصر متعددة.' },
      { lineOrElement: '#special { ... }', explanationEn: 'ID selector — targets the single element with id="special". IDs must be unique per page.', explanationAr: 'محدد المعرف — يستهدف العنصر الوحيد ذا id="special". المعرفات يجب أن تكون فريدة لكل صفحة.' },
      { lineOrElement: '.card h2 { ... }', explanationEn: 'Descendant combinator — targets any <h2> that is a descendant of an element with class="card".', explanationAr: 'أداة السليل — تستهدف أي <h2> هو سليل عنصر بفئة class="card".' },
      { lineOrElement: 'a:hover { ... }', explanationEn: 'Pseudo-class — applies styles when the mouse hovers over the anchor element.', explanationAr: 'فئة زائفة — تطبق الأنماط عند مرور الماوس فوق عنصر الرابط.' },
      { lineOrElement: 'ul li:first-child', explanationEn: 'Pseudo-class :first-child — targets the first <li> inside <ul>.', explanationAr: 'الفئة الزائفة :first-child — تستهدف أول <li> داخل <ul>.' },
      { lineOrElement: 'ul li:last-child', explanationEn: 'Pseudo-class :last-child — targets the last <li> inside <ul>.', explanationAr: 'الفئة الزائفة :last-child — تستهدف آخر <li> داخل <ul>.' },
    ],
    '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>CSS Selectors Lab</title>\n  <style>\n    /* Experiment with different selectors! */\n\n\n  </style>\n</head>\n<body>\n  <h1>Selector Playground</h1>\n  <div class="box first">Box 1</div>\n  <div class="box">Box 2</div>\n  <div class="box" id="unique">Box 3</div>\n  <p>Paragraph sibling</p>\n  <ul>\n    <li>Item A</li>\n    <li>Item B</li>\n    <li>Item C</li>\n  </ul>\n  <a href="#">Link</a>\n</body>\n</html>'
  ),

  C('css-comments', 4, 1,
    { en: 'CSS — Comments', ar: 'CSS - التعليقات' },
    {
      en: 'CSS comments begin with /* and end with */. They can span multiple lines and are completely ignored by the browser. Comments are essential for documenting complex rules, disabling rules temporarily during debugging, and organizing stylesheets into logical sections. Unlike HTML comments, CSS comments cannot be used inside declaration blocks in an inline context — they must be placed in a <style> block or external stylesheet.',
      ar: 'تبدأ تعليقات CSS بـ /* وتنتهي بـ */. يمكن أن تمتد عبر أسطر متعددة ويتجاهلها المتصفح تمامًا. التعليقات ضرورية لتوثيق القواعد المعقدة وتعطيل القواعد مؤقتًا أثناء التصحيح وتنظيم أوراق الأنماط إلى أقسام منطقية.',
    },
    '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>CSS Comments</title>\n  <style>\n    /* ===== Reset & Base ===== */\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    body { font-family: system-ui, sans-serif; padding: 32px; }\n    /* h1 { color: red; } — disabled during debugging */\n    h1 { color: #6366f1; }\n  </style>\n</head>\n<body>\n  <h1>CSS Comments</h1>\n  <p>/* comments */ help organize and debug stylesheets.</p>\n</body>\n</html>',
    [
      { lineOrElement: '/* ===== Reset & Base ===== */', explanationEn: 'A section-header comment for organizing rules logically.', explanationAr: 'تعليق رأس قسم لتنظيم القواعد منطقيًا.' },
      { lineOrElement: '/* h1 { color: red; } */', explanationEn: 'A commented-out rule — the browser ignores it. Useful for debugging.', explanationAr: 'قاعدة معلّقة — المتصفح يتجاهلها. مفيدة للتصحيح.' },
    ],
    DEFAULT_CSS_BOILERPLATE
  ),

  // ── SEEDED: CSS Specificity ──
  C('css-specificity', 5, 1,
    { en: 'CSS — Specificity', ar: 'CSS - أولوية التحديد' },
    {
      en: 'Specificity is the algorithm browsers use to determine which CSS rule applies when multiple rules target the same element. Each selector type carries a weight: inline styles (highest — weight 1000), ID selectors (weight 100), class/pseudo-class/attribute selectors (weight 10), and element/pseudo-element selectors (weight 1). The universal selector (*) and combinators (>, +, ~) add no weight. !important overrides all specificity rules but should be used sparingly. When two selectors have equal specificity, the one declared last wins (source order). Understanding specificity is critical for writing maintainable CSS without !important hacks.',
      ar: 'الأولوية (Specificity) هي الخوارزمية التي تستخدمها المتصفحات لتحديد قاعدة CSS التي تنطبق عندما تستهدف قواعد متعددة نفس العنصر. كل نوع محدد يحمل وزنًا: الأنماط المضمنة (الأعلى — وزن 1000)، محددات المعرف (وزن 100)، محددات الفئة/الفئة الزائفة/السمة (وزن 10)، ومحددات العنصر/العنصر الزائف (وزن 1). المحدد العام (*) والأدوات (> + ~) لا تضيف وزنًا. !important يتجاوز جميع قواعد الأولوية لكن يجب استخدامه بحذر.',
    },
    '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>CSS Specificity</title>\n  <style>\n    /* Element selector — weight: 1 */\n    div { color: #64748b; font-size: 18px; padding: 16px; border: 2px solid #e2e8f0; margin: 8px; }\n    /* Class selector — weight: 10 */\n    .text { color: #2563eb; }\n    /* Element + Class — weight: 11 */\n    div.text { border-color: #2563eb; }\n    /* ID selector — weight: 100 */\n    #main { color: #7c3aed; border-color: #7c3aed; font-weight: bold; }\n    /* Class wins over element. ID wins over class. */\n    .highlight { background: #fef9c3; padding: 4px 8px; border-radius: 4px; }\n  </style>\n</head>\n<body>\n  <div>Element selector (weight 1) — slate text</div>\n  <div class="text">Class selector (weight 10) — blue text</div>\n  <div class="text" id="main">ID selector (weight 100) — purple text, wins!</div>\n  <p>Specificity: <span class="highlight">inline &gt; ID &gt; class &gt; element</span></p>\n</body>\n</html>',
    [
      { lineOrElement: 'div { color: #64748b; }', explanationEn: 'Element selector — specificity weight 1. Targets all <div> elements.', explanationAr: 'محدد عنصر — وزن الأولوية 1. يستهدف كل عناصر <div>.' },
      { lineOrElement: '.text { color: #2563eb; }', explanationEn: 'Class selector — weight 10. Overrides the element selector because 10 > 1.', explanationAr: 'محدد فئة — وزن 10. يتجاوز محدد العنصر لأن 10 > 1.' },
      { lineOrElement: 'div.text { border-color: #2563eb; }', explanationEn: 'Element + Class — weight 11 (1 + 10). More specific than class alone.', explanationAr: 'عنصر + فئة — وزن 11 (1 + 10). أكثر تحديدًا من الفئة وحدها.' },
      { lineOrElement: '#main { color: #7c3aed; }', explanationEn: 'ID selector — weight 100. Overrides both element (1) and class (10) selectors.', explanationAr: 'محدد معرف — وزن 100. يتجاوز محددات العنصر (1) والفئة (10).' },
      { lineOrElement: 'Specificity hierarchy', explanationEn: 'Inline styles > ID > Class/Attribute/Pseudo-class > Element/Pseudo-element. !important overrides everything.', explanationAr: 'الأنماط المضمنة > المعرف > الفئة/السمة/الفئة الزائفة > العنصر/العنصر الزائف. !important يتجاوز كل شيء.' },
    ],
    '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Specificity Lab</title>\n  <style>\n    /* Try to override these rules. Which wins? */\n    p { color: #64748b; }\n    .intro { color: #2563eb; }\n    #lead { color: #7c3aed; }\n  </style>\n</head>\n<body>\n  <p>Element selector</p>\n  <p class="intro">Class selector</p>\n  <p class="intro" id="lead">ID selector</p>\n</body>\n</html>'
  ),

  // ══════════════════════════════════════════════════════════
  // Module 2: Styling & Box Model (Chapter 2)
  // ══════════════════════════════════════════════════════════

  C('css-colors', 1, 2,
    { en: 'CSS — Colors', ar: 'CSS - الألوان' },
    {
      en: 'CSS offers multiple ways to specify colors: named colors (red, blue, tomato), hexadecimal (#ff0000, #f00, #6366f1), RGB/rgba (rgb(255,0,0), rgba(99,102,241,0.5)), HSL/hsla (hsl(0,100%,50%), hsla(239,84%,67%,0.5)). HSL is often more intuitive for humans: hue (0-360 on the color wheel), saturation (0-100%), and lightness (0-100%). The alpha channel (opacity) is available via rgba, hsla, or the separate opacity property. Modern CSS supports currentColor which inherits the element\'s computed color value.',
      ar: 'تقدم CSS طرقًا متعددة لتحديد الألوان: ألوان مسماة، ست عشري، RGB/rgba، HSL/hsla. HSL غالبًا أكثر بديهية للبشر: تدرج اللون (0-360)، التشبع (0-100%)، والإضاءة (0-100%). قناة الشفافية متاحة عبر rgba أو hsla أو خاصية opacity المنفصلة.',
    },
    '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>CSS Colors</title>\n  <style>\n    body { font-family: system-ui, sans-serif; padding: 32px; background: #f8fafc; }\n    .box { padding: 16px; margin: 8px 0; border-radius: 8px; color: white; }\n    .hex { background: #6366f1; }\n    .rgb { background: rgb(239, 68, 68); }\n    .hsl { background: hsl(160, 84%, 39%); }\n    .rgba { background: rgba(168, 85, 247, 0.8); }\n  </style>\n</head>\n<body>\n  <div class="box hex">Hex: #6366f1 (Indigo)</div>\n  <div class="box rgb">RGB: rgb(239, 68, 68) (Red)</div>\n  <div class="box hsl">HSL: hsl(160, 84%, 39%) (Emerald)</div>\n  <div class="box rgba">RGBA: rgba(168, 85, 247, 0.8) (Purple, 80% opacity)</div>\n</body>\n</html>',
    [
      { lineOrElement: '#6366f1', explanationEn: 'Hex color — 6-digit RGB hexadecimal. #RRGGBB.', explanationAr: 'لون سداسي عشري — RGB سداسي عشري بـ 6 أرقام.' },
      { lineOrElement: 'rgb(239, 68, 68)', explanationEn: 'RGB color — red, green, blue values from 0-255.', explanationAr: 'لون RGB — قيم الأحمر والأخضر والأزرق من 0-255.' },
      { lineOrElement: 'hsl(160, 84%, 39%)', explanationEn: 'HSL color — hue (0-360°), saturation, lightness. More intuitive for adjustments.', explanationAr: 'لون HSL — تدرج اللون (0-360°)، التشبع، الإضاءة. أكثر بديهية للتعديلات.' },
    ],
    DEFAULT_CSS_BOILERPLATE
  ),

  C('css-background', 2, 2,
    { en: 'CSS — Background', ar: 'CSS - الخلفيات' },
    {
      en: 'The background property is a shorthand for: background-color, background-image, background-repeat, background-position, background-size, and background-attachment. background-color fills the element\'s background with a solid color. background-image accepts url(path) or CSS gradients (linear-gradient, radial-gradient). background-repeat controls tiling (repeat, no-repeat, repeat-x, repeat-y). background-size can be cover (covers entire area, may crop) or contain (fits entirely, may leave space). Multiple backgrounds can be layered by comma-separating values.',
      ar: 'خاصية background هي اختصار لـ: background-color، background-image، background-repeat، background-position، background-size، وbackground-attachment. يمكن تكديس خلفيات متعددة بفصل القيم بفاصلة.',
    },
    '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>CSS Background</title>\n  <style>\n    body { font-family: system-ui, sans-serif; padding: 32px; }\n    .solid { background: #eef2ff; padding: 24px; border-radius: 12px; margin-bottom: 16px; }\n    .gradient { background: linear-gradient(135deg, #6366f1, #a855f7); color: white; padding: 32px; border-radius: 12px; }\n  </style>\n</head>\n<body>\n  <div class="solid">Solid background: #eef2ff</div>\n  <div class="gradient">Gradient background: linear-gradient</div>\n</body>\n</html>',
    [
      { lineOrElement: 'background: #eef2ff', explanationEn: 'Solid background color using a hex value.', explanationAr: 'لون خلفية صلب باستخدام قيمة سداسية عشرية.' },
      { lineOrElement: 'background: linear-gradient(135deg, #6366f1, #a855f7)', explanationEn: 'CSS gradient — transitions between colors along a specified angle.', explanationAr: 'تدرج CSS — انتقال بين الألوان بزاوية محددة.' },
    ],
    DEFAULT_CSS_BOILERPLATE
  ),

  C('css-border', 3, 2,
    { en: 'CSS — Border', ar: 'CSS - الحدود' },
    {
      en: 'The border property surrounds an element\'s padding and content. Shorthand: border: width style color (e.g., border: 2px solid #6366f1). Styles include solid, dashed, dotted, double, groove, ridge, inset, outset, and none. Each side can be styled independently: border-top, border-right, border-bottom, border-left. border-radius rounds the corners — a single value applies to all corners; four values go top-left, top-right, bottom-right, bottom-left (clockwise). border-radius: 50% creates a circle on a square element.',
      ar: 'خاصية border تحيط بحشوة العنصر ومحتواه. الاختصار: border: width style color. يمكن تصميم كل جانب بشكل مستقل: border-top، border-right، border-bottom، border-left. border-radius يدور الزوايا.',
    },
    '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>CSS Border</title>\n  <style>\n    body { font-family: system-ui, sans-serif; padding: 32px; display: flex; gap: 16px; flex-wrap: wrap; }\n    .box { padding: 24px 32px; font-weight: 600; text-align: center; }\n    .solid { border: 3px solid #6366f1; border-radius: 12px; }\n    .dashed { border: 3px dashed #ef4444; border-radius: 8px; }\n    .dotted { border: 3px dotted #22c55e; border-radius: 50%; width: 100px; height: 100px; display: flex; align-items: center; justify-content: center; }\n  </style>\n</head>\n<body>\n  <div class="box solid">Solid · rounded</div>\n  <div class="box dashed">Dashed</div>\n  <div class="box dotted">Dotted<br>circle</div>\n</body>\n</html>',
    [
      { lineOrElement: 'border: 3px solid #6366f1', explanationEn: 'Border shorthand: width, style, color. All three are required for a visible border.', explanationAr: 'اختصار border: العرض، النمط، اللون. الثلاثة مطلوبة لحدود مرئية.' },
      { lineOrElement: 'border-radius: 12px', explanationEn: 'Rounds all four corners by 12px.', explanationAr: 'يدور جميع الزوايا الأربع بـ 12px.' },
      { lineOrElement: 'border-radius: 50%', explanationEn: 'Creates a perfect circle on square elements (equal width and height).', explanationAr: 'ينشئ دائرة مثالية على العناصر المربعة (عرض وارتفاع متساويان).' },
    ],
    DEFAULT_CSS_BOILERPLATE
  ),

  // ── SEEDED: CSS Padding ──
  C('css-padding', 4, 2,
    { en: 'CSS — Padding', ar: 'CSS - الهوامش الداخلية' },
    {
      en: 'Padding is the space between an element\'s content and its border. It is part of the element\'s total width/height calculation (unless box-sizing: border-box is set). Shorthand: padding: top right bottom left (clockwise). Three values: top, left-right, bottom. Two values: top-bottom, left-right. One value: all four sides. Individual properties: padding-top, padding-right, padding-bottom, padding-left. Padding inherits the element\'s background color and is transparent to click events through it. Negative padding is not allowed. Padding values can be in px, em, rem, %, or vw.',
      ar: 'الحشوة (Padding) هي المسافة بين محتوى العنصر وحدوده. هي جزء من حساب العرض/الارتفاع الكلي للعنصر (إلا إذا تم تعيين box-sizing: border-box). الاختصار: padding: أعلى يمين أسفل يسار (باتجاه عقارب الساعة). ثلاث قيم: أعلى، يسار-يمين، أسفل. قيمتان: أعلى-أسفل، يسار-يمين. قيمة واحدة: جميع الجوانب الأربعة.',
    },
    '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>CSS Padding</title>\n  <style>\n    body { font-family: system-ui, sans-serif; padding: 32px; background: #f1f5f9; }\n    .box { background: white; margin-bottom: 20px; border: 2px solid #e2e8f0; border-radius: 8px; }\n    .box h3 { background: #6366f1; color: white; margin: 0; padding: 8px 16px; font-size: 14px; }\n    .content { background: #eef2ff; }\n    .p-sm { padding: 8px; }\n    .p-md { padding: 16px 24px; }\n    .p-lg { padding: 32px 24px 8px; }\n    .p-individual { padding-top: 4px; padding-right: 32px; padding-bottom: 16px; padding-left: 8px; }\n    code { background: #f1f5f9; padding: 2px 6px; border-radius: 4px; font-size: 13px; }\n  </style>\n</head>\n<body>\n  <div class="box"><h3>padding: 8px (all sides)</h3><div class="content p-sm">Equal padding on all four sides.</div></div>\n  <div class="box"><h3>padding: 16px 24px (top-bottom / left-right)</h3><div class="content p-md">Vertical: 16px, Horizontal: 24px.</div></div>\n  <div class="box"><h3>padding: 32px 24px 8px (top / left-right / bottom)</h3><div class="content p-lg">Top: 32px, Sides: 24px, Bottom: 8px.</div></div>\n  <div class="box"><h3>Individual padding-* properties</h3><div class="content p-individual">Each side set independently: top=4px, right=32px, bottom=16px, left=8px.</div></div>\n</body>\n</html>',
    [
      { lineOrElement: 'padding: 8px', explanationEn: 'One value — applies 8px padding to all four sides equally.', explanationAr: 'قيمة واحدة — تطبق حشوة 8px على جميع الجوانب الأربعة بالتساوي.' },
      { lineOrElement: 'padding: 16px 24px', explanationEn: 'Two values: first = top & bottom (16px), second = left & right (24px).', explanationAr: 'قيمتان: الأولى = أعلى وأسفل (16px)، الثانية = يسار ويمين (24px).' },
      { lineOrElement: 'padding: 32px 24px 8px', explanationEn: 'Three values: top (32px), left & right (24px), bottom (8px).', explanationAr: 'ثلاث قيم: أعلى (32px)، يسار ويمين (24px)، أسفل (8px).' },
      { lineOrElement: 'padding-top / padding-right / padding-bottom / padding-left', explanationEn: 'Individual side control. Each can be set independently without shorthand.', explanationAr: 'تحكم فردي بكل جانب. يمكن تعيين كل جانب بشكل مستقل دون اختصار.' },
    ],
    '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Padding Lab</title>\n  <style>\n    body { font-family: system-ui, sans-serif; padding: 32px; background: #f1f5f9; }\n    .card { background: white; border: 2px solid #e2e8f0; border-radius: 12px; margin-bottom: 16px; }\n    .card h3 { margin: 0; background: #6366f1; color: white; font-size: 14px; padding: 8px 16px; }\n    /* Try changing the padding values below */\n    .card-content {\n      padding: 24px;\n    }\n  </style>\n</head>\n<body>\n  <div class="card">\n    <h3>Experiment with padding</h3>\n    <div class="card-content">\n      <p>Adjust the padding in the &lt;style&gt; block above.</p>\n      <p>Try: <code>padding: 8px 32px;</code> or <code>padding: 40px 16px;</code></p>\n    </div>\n  </div>\n</body>\n</html>'
  ),

  C('css-margin', 5, 2,
    { en: 'CSS — Margin', ar: 'CSS - الهوامش الخارجية' },
    {
      en: 'Margin is the space outside an element\'s border, separating it from adjacent elements. Unlike padding, margin is always transparent (does not show background color). Margin collapsing: vertical margins (top and bottom) between adjacent block elements collapse into a single margin equal to the larger of the two. Horizontal margins (left and right) do NOT collapse. Auto margins (margin: 0 auto) center a block element horizontally when width is set. Negative margins pull elements in the opposite direction, overlapping them.',
      ar: 'الهامش (Margin) هو المسافة خارج حدود العنصر، تفصله عن العناصر المجاورة. على عكس padding، الهامش دائمًا شفاف. انهيار الهامش: الهوامش الرأسية بين عناصر الكتلة المجاورة تنهار في هامش واحد يساوي الأكبر. الهوامش الأفقية لا تنهار أبدًا.',
    },
    '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>CSS Margin</title>\n  <style>\n    body { font-family: system-ui, sans-serif; padding: 32px; background: #f1f5f9; }\n    .box { background: white; border: 2px solid #e2e8f0; border-radius: 8px; padding: 16px; }\n    .box + .box { margin-top: 32px; }\n    .center { width: 300px; margin: 0 auto; text-align: center; background: #eef2ff; border-color: #6366f1; }\n  </style>\n</head>\n<body>\n  <div class="box">Box with default margin (bottom margin collapses)</div>\n  <div class="box">Second box — 32px gap above via margin-top</div>\n  <div class="box center">Centered with margin: 0 auto</div>\n</body>\n</html>',
    [
      { lineOrElement: '.box + .box { margin-top: 32px; }', explanationEn: 'Adjacent sibling combinator — adds margin-top to every .box that follows another .box.', explanationAr: 'أداة الأخ المجاور — تضيف هامشًا علويًا لكل .box تلي .box أخرى.' },
      { lineOrElement: 'margin: 0 auto', explanationEn: 'Auto horizontally centers a block element when width is set. Left and right margins share remaining space equally.', explanationAr: 'Auto يوسّط عنصر الكتلة أفقيًا عند تعيين العرض. يتشارك الهامشان الأيمن والأيسر المساحة المتبقية بالتساوي.' },
      { lineOrElement: 'margin collapse', explanationEn: 'Vertical margins between adjacent blocks collapse to the larger value. 20px + 30px = 30px, not 50px.', explanationAr: 'الهوامش الرأسية بين الكتل المجاورة تنهار إلى القيمة الأكبر. 20px + 30px = 30px، وليس 50px.' },
    ],
    DEFAULT_CSS_BOILERPLATE
  ),

  C('css-outline', 6, 2,
    { en: 'CSS — Outline', ar: 'CSS - الحدود الخارجية' },
    {
      en: 'Outline is a line drawn outside the element\'s border edge, in the margin area. Unlike border, outline does NOT affect the element\'s size or layout — it overlays on top of adjacent content. Outline follows the same style syntax as border (width, style, color) but does NOT support individual side control (no outline-top). Common use: focus indicators for accessibility (:focus-visible { outline: 2px solid #6366f1; outline-offset: 2px; }). outline-offset adds space between the border and the outline.',
      ar: 'الخط الخارجي (Outline) هو خط يُرسم خارج حافة حدود العنصر، في منطقة الهامش. على عكس border، لا يؤثر outline على حجم العنصر أو تخطيطه — يتراكب فوق المحتوى المجاور. لا يدعم التحكم الفردي بالجوانب.',
    },
    '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>CSS Outline</title>\n  <style>\n    body { font-family: system-ui, sans-serif; padding: 32px; }\n    button { padding: 12px 24px; font-size: 16px; border: 2px solid #6366f1; border-radius: 8px; background: white; cursor: pointer; margin: 8px; }\n    button:focus-visible { outline: 3px solid #a855f7; outline-offset: 2px; }\n    .demo { border: 3px solid #22c55e; outline: 3px solid #ef4444; padding: 16px; margin: 32px; }\n  </style>\n</head>\n<body>\n  <button>Focus me (Tab key)</button>\n  <div class="demo">Green border + Red outline (outline does not affect layout)</div>\n</body>\n</html>',
    [
      { lineOrElement: 'outline: 3px solid #ef4444', explanationEn: 'Outline shorthand — similar to border but does not affect element dimensions.', explanationAr: 'اختصار outline — مشابه لـ border لكن لا يؤثر على أبعاد العنصر.' },
      { lineOrElement: 'outline-offset: 2px', explanationEn: 'Adds space between the border edge and the outline.', explanationAr: 'يضيف مسافة بين حافة الحدود والخط الخارجي.' },
    ],
    DEFAULT_CSS_BOILERPLATE
  ),

  C('css-dimensions', 7, 2,
    { en: 'CSS — Dimensions', ar: 'CSS - العرض و الطول' },
    {
      en: 'The width and height properties control element dimensions. width/height: auto lets the browser compute the size. Fixed units: px, cm, mm. Relative units: % (percentage of parent), em (relative to element\'s font-size), rem (relative to root font-size), vw (1% of viewport width), vh (1% of viewport height). min-width/min-height set a lower bound; max-width/max-height set an upper bound. The box-sizing property controls whether width/height include padding and border (border-box) or only content (content-box, default).',
      ar: 'تتحكم خاصيتا width و height في أبعاد العنصر. الوحدات النسبية: % (نسبة مئوية من الأصل)، em (نسبة إلى حجم خط العنصر)، rem (نسبة إلى حجم خط الجذر)، vw/vh (نسبة مئوية من منفذ العرض). min-width/max-width تحدد الحدود الدنيا/العليا.',
    },
    '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>CSS Dimensions</title>\n  <style>\n    body { font-family: system-ui, sans-serif; padding: 32px; }\n    .parent { background: #eef2ff; padding: 16px; border-radius: 8px; }\n    .child { background: #6366f1; color: white; padding: 12px; border-radius: 6px; }\n    .w50 { width: 50%; }\n    .w200 { width: 200px; }\n    .max-w { max-width: 400px; }\n  </style>\n</head>\n<body>\n  <div class="parent">\n    <div class="child w50">width: 50% (of parent)</div>\n    <div class="child w200" style="margin-top: 8px;">width: 200px</div>\n    <div class="child max-w" style="margin-top: 8px;">max-width: 400px</div>\n  </div>\n</body>\n</html>',
    [
      { lineOrElement: 'width: 50%', explanationEn: 'Relative unit — 50% of the parent element\'s width.', explanationAr: 'وحدة نسبية — 50% من عرض العنصر الأب.' },
      { lineOrElement: 'width: 200px', explanationEn: 'Fixed unit — 200 pixels regardless of parent size.', explanationAr: 'وحدة ثابتة — 200 بكسل بغض النظر عن حجم الأصل.' },
      { lineOrElement: 'max-width: 400px', explanationEn: 'Upper bound — element cannot exceed 400px but can be smaller.', explanationAr: 'حد أعلى — لا يمكن للعنصر تجاوز 400px لكن يمكن أن يكون أصغر.' },
    ],
    DEFAULT_CSS_BOILERPLATE
  ),

  // ══════════════════════════════════════════════════════════
  // Module 3: Typography & Visual Effects (Chapter 3)
  // ══════════════════════════════════════════════════════════

  C('css-texts', 1, 3,
    { en: 'CSS — Texts', ar: 'CSS - النصوص' },
    {
      en: 'CSS text properties control the appearance of text content. text-align: left | center | right | justify. text-decoration: underline | overline | line-through | none. text-transform: uppercase | lowercase | capitalize. letter-spacing adjusts space between characters. word-spacing adjusts space between words. line-height controls the vertical space between lines (best set unitless, e.g., 1.6). text-shadow adds a shadow to text. white-space controls how whitespace is handled (normal, nowrap, pre, pre-wrap).',
      ar: 'تتحكم خصائص نص CSS في مظهر المحتوى النصي. text-align: الاتجاه. text-decoration: الزخرفة. text-transform: التحويل. letter-spacing: تباعد الأحرف. word-spacing: تباعد الكلمات. line-height: ارتفاع السطر. text-shadow: ظل النص.',
    },
    '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>CSS Texts</title>\n  <style>\n    body { font-family: system-ui, sans-serif; padding: 32px; }\n    .center { text-align: center; }\n    .decorated { text-decoration: underline wavy #6366f1; }\n    .caps { text-transform: uppercase; letter-spacing: 2px; }\n    .spaced { line-height: 2; letter-spacing: 1px; }\n  </style>\n</head>\n<body>\n  <h2 class="center">Centered Heading</h2>\n  <p class="decorated">Wavy underlined text</p>\n  <p class="caps">Uppercase with letter spacing</p>\n  <p class="spaced">This paragraph has generous line-height and letter-spacing for readability.</p>\n</body>\n</html>',
    [
      { lineOrElement: 'text-align: center', explanationEn: 'Centers inline content (text) horizontally within the element.', explanationAr: 'يوسّط المحتوى النصي أفقيًا داخل العنصر.' },
      { lineOrElement: 'text-decoration: underline wavy #6366f1', explanationEn: 'Shorthand for underline style and color in one declaration.', explanationAr: 'اختصار لنمط التسطير ولونه في إعلان واحد.' },
      { lineOrElement: 'text-transform: uppercase; letter-spacing: 2px', explanationEn: 'Transforms text to uppercase and adds 2px between characters.', explanationAr: 'يحول النص إلى أحرف كبيرة ويضيف 2px بين الأحرف.' },
    ],
    DEFAULT_CSS_BOILERPLATE
  ),

  C('css-fonts', 2, 3,
    { en: 'CSS — Fonts', ar: 'CSS - الخطوط' },
    {
      en: 'The font property and its sub-properties control typeface appearance. font-family defines the typeface (serif, sans-serif, monospace, or a specific font name). Use fallback stacks: font-family: "Inter", "Segoe UI", system-ui, sans-serif. font-size controls size (px, rem, em, %). font-weight controls thickness (normal: 400, bold: 700, or numeric 100-900). font-style: normal | italic | oblique. @font-face loads custom fonts; Google Fonts provides hosted font families via <link>.',
      ar: 'تتحكم خاصية font ومتفرعاتها في مظهر الخط. font-family: نوع الخط. استخدم تسلسلات احتياطية. font-size: حجم الخط. font-weight: سمك الخط. @font-face: تحميل خطوط مخصصة. Google Fonts توفر خطوطًا مستضافة.',
    },
    '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>CSS Fonts</title>\n  <style>\n    .sans { font-family: system-ui, sans-serif; }\n    .serif { font-family: Georgia, "Times New Roman", serif; }\n    .mono { font-family: "Courier New", monospace; }\n    .bold { font-weight: 700; }\n    .italic { font-style: italic; }\n    .size { font-size: 1.25rem; }\n  </style>\n</head>\n<body>\n  <p class="sans">System-ui sans-serif</p>\n  <p class="serif">Georgia / serif <span class="italic">(italic)</span></p>\n  <p class="mono bold">Monospace bold</p>\n  <p class="size">This is larger text (1.25rem)</p>\n</body>\n</html>',
    [
      { lineOrElement: 'font-family: system-ui, sans-serif', explanationEn: 'Font stack — the browser uses the first available font, falling back through the list.', explanationAr: 'تسلسل الخط — يستخدم المتصفح أول خط متاح، وينتقل للخلف عبر القائمة.' },
      { lineOrElement: 'font-weight: 700', explanationEn: 'Numeric weight — 400 = normal, 700 = bold, range 100-900.', explanationAr: 'الوزن الرقمي — 400 = عادي، 700 = عريض، النطاق 100-900.' },
    ],
    DEFAULT_CSS_BOILERPLATE
  ),

  C('css-shadows', 3, 3,
    { en: 'CSS — Shadows', ar: 'CSS - تأثيرات الظل' },
    {
      en: 'text-shadow adds shadow to text characters: text-shadow: offsetX offsetY blurRadius color. box-shadow adds shadow to element boxes: box-shadow: offsetX offsetY blurRadius spreadRadius color. Multiple shadows are comma-separated. The inset keyword creates an inner shadow. Common patterns: small subtle shadows for depth (0 2px 4px rgba(0,0,0,0.1)), large shadows for elevation (0 20px 60px rgba(0,0,0,0.15)), and colored shadows for accent glow effects.',
      ar: 'text-shadow: ظل للنص. box-shadow: ظل للصندوق. ظلال متعددة تفصل بفواصل. inset: ظل داخلي. ظلال صغيرة للعمق، كبيرة للارتفاع، وملونة لتأثير التوهج.',
    },
    '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>CSS Shadows</title>\n  <style>\n    body { font-family: system-ui, sans-serif; padding: 32px; background: #f8fafc; }\n    .text-shadow { font-size: 32px; font-weight: bold; text-shadow: 2px 2px 4px rgba(0,0,0,0.2); }\n    .card { background: white; border-radius: 16px; padding: 32px; box-shadow: 0 8px 32px rgba(0,0,0,0.08); margin-bottom: 16px; }\n    .inner { box-shadow: inset 0 2px 8px rgba(0,0,0,0.1); padding: 24px; border-radius: 12px; background: #fef9c3; }\n  </style>\n</head>\n<body>\n  <p class="text-shadow">Text Shadow Effect</p>\n  <div class="card">Box shadow card</div>\n  <div class="inner">Inner shadow (inset)</div>\n</body>\n</html>',
    [
      { lineOrElement: 'text-shadow: 2px 2px 4px rgba(0,0,0,0.2)', explanationEn: 'Text shadow: offsetX, offsetY, blurRadius, color.', explanationAr: 'ظل نص: الإزاحة الأفقية، الإزاحة الرأسية، نصف قطر التمويه، اللون.' },
      { lineOrElement: 'box-shadow: 0 8px 32px rgba(0,0,0,0.08)', explanationEn: 'Box shadow: offsetX, offsetY, blurRadius, color. No spread radius.', explanationAr: 'ظل صندوق: الإزاحة الأفقية، الإزاحة الرأسية، نصف قطر التمويه، اللون.' },
      { lineOrElement: 'box-shadow: inset 0 2px 8px rgba(0,0,0,0.1)', explanationEn: 'Inset shadow — the shadow is cast inside the element.', explanationAr: 'ظل داخلي — الظل يُلقى داخل العنصر.' },
    ],
    DEFAULT_CSS_BOILERPLATE
  ),

  C('css-icons', 4, 3,
    { en: 'CSS — Icons', ar: 'CSS - الأيقونات' },
    {
      en: 'Icons in CSS are typically implemented via icon fonts (Font Awesome, Material Icons) or SVG sprites. Icon fonts use the @font-face mechanism to load a font containing glyphs instead of letters — the icon is rendered via a character code, and CSS properties like color, font-size, and text-shadow style it like text. SVG icons are scalable, multi-color capable, and offer better accessibility. Modern CSS can also create simple icons using borders, gradients, and pseudo-elements without external dependencies.',
      ar: 'تُنفذ الأيقونات في CSS عادةً عبر خطوط الأيقونات أو SVGs. خطوط الأيقونات تحمل رموزًا بدلاً من الحروف، ويمكن تصميمها بخصائص CSS النصية. أيقونات SVG قابلة للتطوير وتدعم ألوانًا متعددة.',
    },
    '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>CSS Icons</title>\n  <style>\n    body { font-family: system-ui, sans-serif; padding: 32px; }\n    .icon-row { display: flex; gap: 24px; align-items: center; }\n    .icon { font-size: 32px; color: #6366f1; transition: all 0.2s; }\n    .icon:hover { color: #a855f7; transform: scale(1.2); }\n    .css-icon { width: 32px; height: 32px; background: #6366f1; border-radius: 8px 0; display: inline-block; }\n  </style>\n</head>\n<body>\n  <div class="icon-row">\n    <span class="icon">&#9733;</span>\n    <span class="icon">&#9829;</span>\n    <span class="icon">&#9889;</span>\n    <span class="icon">&#10148;</span>\n    <span class="css-icon" title="CSS-only icon"></span>\n  </div>\n</body>\n</html>',
    [
      { lineOrElement: 'font-size: 32px; color: #6366f1', explanationEn: 'Icon fonts inherit text properties — color, size, shadow all apply.', explanationAr: 'خطوط الأيقونات ترث خصائص النص — اللون والحجم والظل كلها تنطبق.' },
      { lineOrElement: '.icon:hover { transform: scale(1.2); }', explanationEn: 'CSS transform scales the icon on hover for interactive feedback.', explanationAr: 'تحويل CSS يكبّر الأيقونة عند التمرير لتغذية راجعة تفاعلية.' },
    ],
    DEFAULT_CSS_BOILERPLATE
  ),

  C('css-links', 5, 3,
    { en: 'CSS — Links', ar: 'CSS - الروابط' },
    {
      en: 'Links (anchor elements <a>) have several pseudo-class states that should be styled: :link (unvisited), :visited (visited), :hover (mouse over), :active (being clicked). The recommended order is LVHA: link, visited, hover, active. Common styling: remove default underline (text-decoration: none), add underline on hover for affordance, use distinct colors for visited vs unvisited, and add focus styles for keyboard accessibility. Links are inline elements by default; display: block or display: inline-block makes them easier to click.',
      ar: 'للروابط عدة حالات فئة زائفة: :link (غير مُزار)، :visited (مُزار)، :hover (تمرير الماوس)، :active (أثناء النقر). الترتيب الموصى به: LVHA. قم بإزالة التسطير الافتراضي وأضفه عند التمرير. استخدم ألوانًا مميزة للمُزار وغير المُزار.',
    },
    '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>CSS Links</title>\n  <style>\n    body { font-family: system-ui, sans-serif; padding: 32px; }\n    a { color: #6366f1; text-decoration: none; font-weight: 500; transition: all 0.2s; padding: 4px 8px; border-radius: 4px; }\n    a:visited { color: #7c3aed; }\n    a:hover { text-decoration: underline; background: #eef2ff; }\n    a:active { color: #a855f7; }\n    a:focus-visible { outline: 2px solid #6366f1; outline-offset: 2px; }\n    .btn { display: inline-block; background: #6366f1; color: white; padding: 10px 20px; border-radius: 8px; }\n    .btn:hover { background: #4f46e5; text-decoration: none; }\n  </style>\n</head>\n<body>\n  <a href="#">Normal link</a>\n  <a href="#" style="margin-left:16px;">Styled link (hover me)</a>\n  <br><br>\n  <a href="#" class="btn">Button-style link</a>\n</body>\n</html>',
    [
      { lineOrElement: 'a:link / a:visited / a:hover / a:active', explanationEn: 'LVHA order — the four pseudo-class states for links. Order matters for proper cascade.', explanationAr: 'ترتيب LVHA — حالات الفئة الزائفة الأربع للروابط. الترتيب مهم للتتالي الصحيح.' },
      { lineOrElement: 'a:focus-visible', explanationEn: 'Focus indicator for keyboard navigation — critical for accessibility.', explanationAr: 'مؤشر التركيز للتنقل بلوحة المفاتيح — ضروري لإمكانية الوصول.' },
    ],
    DEFAULT_CSS_BOILERPLATE
  ),

  C('css-overflow', 6, 3,
    { en: 'CSS — Overflow', ar: 'CSS - المحتوى الفائض' },
    {
      en: 'The overflow property controls what happens when content exceeds its container\'s dimensions. overflow: visible (default — content overflows outside the box). overflow: hidden (clips overflow, no scrollbar). overflow: scroll (always shows scrollbars). overflow: auto (shows scrollbars only when needed). Separate axis control: overflow-x and overflow-y. text-overflow: ellipsis shows "..." when text overflows (requires overflow: hidden and white-space: nowrap).',
      ar: 'تتحكم خاصية overflow في ما يحدث عندما يتجاوز المحتوى أبعاد حاويته. visible: الافتراضي — يفيض للخارج. hidden: يقص الفائض. scroll: دائمًا أشرطة التمرير. auto: أشرطة التمرير عند الحاجة فقط.',
    },
    '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>CSS Overflow</title>\n  <style>\n    body { font-family: system-ui, sans-serif; padding: 32px; }\n    .box { width: 200px; height: 80px; border: 2px solid #e2e8f0; border-radius: 8px; padding: 8px; margin-bottom: 16px; }\n    .hidden { overflow: hidden; }\n    .scroll { overflow: scroll; }\n    .auto { overflow: auto; }\n    .ellipsis { width: 200px; overflow: hidden; white-space: nowrap; text-overflow: ellipsis; border: 2px solid #e2e8f0; border-radius: 8px; padding: 8px; }\n  </style>\n</head>\n<body>\n  <div class="box hidden"><p>Overflow hidden — this text is clipped at the box boundary.</p></div>\n  <div class="box scroll"><p>Always scrollable — scrollbar visible even without overflow.</p></div>\n  <div class="box auto"><p>Auto — scrollbar only when content overflows.</p></div>\n  <div class="ellipsis">Very long text that gets truncated with an ellipsis...</div>\n</body>\n</html>',
    [
      { lineOrElement: 'overflow: hidden', explanationEn: 'Clips any content that extends beyond the container boundaries.', explanationAr: 'يقص أي محتوى يمتد خارج حدود الحاوية.' },
      { lineOrElement: 'text-overflow: ellipsis', explanationEn: 'Adds "..." when text overflows. Requires overflow: hidden and white-space: nowrap.', explanationAr: 'يضيف "..." عندما يفيض النص. يتطلب overflow: hidden و white-space: nowrap.' },
    ],
    DEFAULT_CSS_BOILERPLATE
  ),

  // ══════════════════════════════════════════════════════════
  // Module 4: Layout & Positioning (Chapter 4)
  // ══════════════════════════════════════════════════════════

  C('css-display', 1, 4,
    { en: 'CSS — Display', ar: 'CSS - أساليب العرض' },
    {
      en: 'The display property determines how an element behaves in the layout flow. block: takes full width, starts on a new line (div, p, h1). inline: sits on the same line, width/height ignored (span, a, strong). inline-block: like inline but respects width/height. none: removes element from the layout entirely (not visible, no space). flex: enables Flexbox layout model for the container. grid: enables CSS Grid layout model. table/table-cell: makes elements behave like table cells.',
      ar: 'تحدد خاصية display كيفية تصرف العنصر في تدفق التخطيط. block: عرض كامل، سطر جديد. inline: على نفس السطر، العرض/الارتفاع مهمل. inline-block: مثل inline لكن يحترم العرض/الارتفاع. none: يزيل العنصر تمامًا.',
    },
    '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>CSS Display</title>\n  <style>\n    body { font-family: system-ui, sans-serif; padding: 32px; }\n    .block { display: block; background: #eef2ff; padding: 8px; margin: 4px 0; }\n    .inline { display: inline; background: #fef9c3; padding: 4px; margin: 4px; }\n    .inline-block { display: inline-block; background: #dcfce7; padding: 12px; margin: 4px; width: 120px; text-align: center; border-radius: 6px; }\n    .hidden { display: none; }\n  </style>\n</head>\n<body>\n  <div class="block">Block A (full width)</div>\n  <div class="block">Block B (new line)</div>\n  <p>\n    <span class="inline">Inline 1</span>\n    <span class="inline">Inline 2</span>\n  </p>\n  <p class="inline-block">Inline-block 1</p>\n  <p class="inline-block">Inline-block 2</p>\n</body>\n</html>',
    [
      { lineOrElement: 'display: block', explanationEn: 'Block elements take full width and start on a new line.', explanationAr: 'عناصر الكتلة تأخذ العرض الكامل وتبدأ في سطر جديد.' },
      { lineOrElement: 'display: inline', explanationEn: 'Inline elements sit on the same line; width/height and top/bottom margin are ignored.', explanationAr: 'العناصر المضمنة تجلس على نفس السطر؛ العرض/الارتفاع مهملان.' },
      { lineOrElement: 'display: inline-block', explanationEn: 'Sits inline but respects width, height, padding, and margin like a block.', explanationAr: 'تجلس في السطر لكن تحترم العرض والارتفاع والحشوة والهامش.' },
    ],
    DEFAULT_CSS_BOILERPLATE
  ),

  C('css-float', 2, 4,
    { en: 'CSS — Float', ar: 'CSS - تدفق العناصر' },
    {
      en: 'The float property pushes an element to the left or right, allowing text and inline elements to wrap around it. Common values: left, right, none. Floated elements are removed from normal flow but remain part of the layout (text wrapping). The clear property (left, right, both) forces an element below any floated elements on the specified side. The clearing fix (overflow: hidden on parent, or ::after { clear: both; display: table }) is needed to contain floated children.',
      ar: 'خاصية float تدفع العنصر لليسار أو اليمين، مما يسمح للنص والعناصر المضمنة بالالتفاف حوله. العناصر العائمة تُزال من التدفق الطبيعي. خاصية clear تجبر العنصر على النزول أسفل العناصر العائمة.',
    },
    '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>CSS Float</title>\n  <style>\n    body { font-family: system-ui, sans-serif; padding: 32px; }\n    .float-left { float: left; margin: 0 16px 8px 0; width: 120px; height: 120px; background: #6366f1; color: white; display: flex; align-items: center; justify-content: center; border-radius: 12px; font-weight: bold; }\n    .clearfix::after { content: ""; display: table; clear: both; }\n  </style>\n</head>\n<body>\n  <div class="clearfix">\n    <div class="float-left">Floated</div>\n    <p>This text wraps around the floated box. The clearfix on the parent prevents layout collapse. Float was historically used for layouts but has been superseded by Flexbox and Grid.</p>\n  </div>\n</body>\n</html>',
    [
      { lineOrElement: 'float: left', explanationEn: 'Floats the element to the left; subsequent content wraps around its right side.', explanationAr: 'يطفو العنصر لليسار؛ المحتوى التالي يلتف حول جانبه الأيمن.' },
      { lineOrElement: '.clearfix::after { clear: both; }', explanationEn: 'The clearfix hack — forces the parent to contain its floated children.', explanationAr: 'اختراق clearfix — يجبر الأصل على احتواء أطفاله العائمين.' },
    ],
    DEFAULT_CSS_BOILERPLATE
  ),

  C('css-position', 3, 4,
    { en: 'CSS — Position', ar: 'CSS - مواقع العناصر' },
    {
      en: 'The position property controls how an element is positioned in the document. Values: static (default — normal flow), relative (positioned relative to its normal position, space preserved), absolute (removed from flow, positioned relative to nearest positioned ancestor), fixed (removed from flow, positioned relative to viewport — stays on scroll), sticky (toggles between relative and fixed based on scroll position). The offset properties (top, right, bottom, left) activate the position. z-index controls stacking order of positioned elements.',
      ar: 'تتحكم خاصية position في وضع العنصر في المستند. static: التدفق الطبيعي. relative: نسبة إلى موضعه الطبيعي. absolute: نسبة إلى أقرب سلف مُموضع. fixed: نسبة إلى منفذ العرض. sticky: يتبدل بين relative و fixed حسب التمرير.',
    },
    '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>CSS Position</title>\n  <style>\n    body { font-family: system-ui, sans-serif; padding: 32px; height: 200vh; }\n    .container { position: relative; height: 200px; background: #eef2ff; border-radius: 12px; margin-bottom: 24px; }\n    .relative { position: relative; top: 20px; left: 20px; background: #6366f1; color: white; padding: 12px; border-radius: 8px; width: fit-content; }\n    .absolute { position: absolute; bottom: 16px; right: 16px; background: #ef4444; color: white; padding: 12px; border-radius: 8px; }\n    .fixed { position: fixed; bottom: 24px; right: 24px; background: #22c55e; color: white; padding: 12px 20px; border-radius: 8px; z-index: 999; }\n  </style>\n</head>\n<body>\n  <div class="container">\n    <div class="relative">Relative (offset from normal position)</div>\n    <div class="absolute">Absolute (relative to container)</div>\n  </div>\n  <div class="fixed">Fixed (stays on screen)</div>\n</body>\n</html>',
    [
      { lineOrElement: 'position: relative; top: 20px; left: 20px', explanationEn: 'Relative — offset from where the element would normally be. Original space is preserved.', explanationAr: 'Relative — إزاحة من حيث سيكون العنصر عادة. المساحة الأصلية محفوظة.' },
      { lineOrElement: 'position: absolute; bottom: 16px; right: 16px', explanationEn: 'Absolute — positioned relative to the nearest positioned ancestor. Removed from normal flow.', explanationAr: 'Absolutely — مموضع نسبة إلى أقرب سلف مُموضع. يُزال من التدفق الطبيعي.' },
      { lineOrElement: 'position: fixed; bottom: 24px; right: 24px', explanationEn: 'Fixed — relative to the viewport. Stays visible during scroll. Removed from normal flow.', explanationAr: 'Fixed — نسبة إلى منفذ العرض. يبقى مرئيًا أثناء التمرير.' },
    ],
    DEFAULT_CSS_BOILERPLATE
  ),

  C('css-navbar', 4, 4,
    { en: 'CSS — Navbar', ar: 'CSS - قوائم الروابط' },
    {
      en: 'A navbar (navigation bar) is typically an unordered list (<ul>) styled horizontally with Flexbox. The pattern: nav > ul { display: flex; list-style: none; } li a { display: block; padding: ...; text-decoration: none; }. Common enhancements: sticky/fixed positioning so the navbar stays visible on scroll, dropdown submenus, hamburger menu for mobile (using @media queries), and a brand/logo element floated to the left. Active page highlighting (current class) provides navigation context.',
      ar: 'شريط التنقل عادةً قائمة غير مرتبة (<ul>) مصممة أفقيًا بـ Flexbox. النمط: nav > ul { display: flex; list-style: none; }. التحسينات الشائعة: تثبيت الشريط، قوائم منسدلة، قائمة هامبورجر للجوال، وتمييز الصفحة النشطة.',
    },
    '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>CSS Navbar Demo</title>\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    body { font-family: system-ui, sans-serif; }\n    nav { background: #1e293b; padding: 0 24px; }\n    ul { display: flex; list-style: none; gap: 4px; }\n    a { display: block; color: white; text-decoration: none; padding: 16px 20px; font-size: 14px; font-weight: 500; transition: background 0.2s; }\n    a:hover { background: #334155; }\n    .active { background: #6366f1; }\n  </style>\n</head>\n<body>\n  <nav>\n    <ul>\n      <li><a href="#" class="active">Home</a></li>\n      <li><a href="#">About</a></li>\n      <li><a href="#">Services</a></li>\n      <li><a href="#">Contact</a></li>\n    </ul>\n  </nav>\n  <main style="padding: 32px;">\n    <h1>Navbar Example</h1>\n    <p>A Flexbox-based horizontal navigation bar.</p>\n  </main>\n</body>\n</html>',
    [
      { lineOrElement: 'nav ul { display: flex; list-style: none; }', explanationEn: 'Flexbox converts the vertical <ul> into a horizontal navigation row.', explanationAr: 'Flexbox يحول <ul> الرأسي إلى صف تنقل أفقي.' },
      { lineOrElement: '.active { background: #6366f1; }', explanationEn: 'Active page indicator — highlights the current section in the navbar.', explanationAr: 'مؤشر الصفحة النشطة — يبرز القسم الحالي في شريط التنقل.' },
    ],
    DEFAULT_CSS_BOILERPLATE
  ),

  C('css-dropdowns', 5, 4,
    { en: 'CSS — Dropdowns', ar: 'CSS - القوائم المنسدلة' },
    {
      en: 'CSS dropdowns use the :hover pseudo-class to show/hide a submenu. The pattern: a parent <li> contains both the trigger <a> and a nested <ul> (the dropdown). The nested ul has display: none by default and display: block on parent hover. Enhancements: position: absolute on dropdown with position: relative on parent for proper positioning, min-width for consistent sizing, and transition delays to prevent accidental closing. JavaScript-free dropdowns rely on :hover but fail on touch devices.',
      ar: 'تستخدم القوائم المنسدلة الفئة الزائفة :hover لإظهار/إخفاء القائمة الفرعية. النمط: <li> أب يحتوي على <a> المشغل و <ul> متداخل. ul المتداخل display: none افتراضيًا و display: block عند التمرير. بدون JavaScript، تعتمد على :hover.',
    },
    '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>CSS Dropdown</title>\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    body { font-family: system-ui, sans-serif; padding: 32px; }\n    nav { background: #1e293b; border-radius: 12px; padding: 0 16px; }\n    ul { list-style: none; display: flex; gap: 0; }\n    a { display: block; color: white; text-decoration: none; padding: 14px 20px; font-size: 14px; }\n    li { position: relative; }\n    li:hover { background: #334155; }\n    .dropdown { display: none; position: absolute; top: 100%; left: 0; background: #1e293b; min-width: 180px; border-radius: 0 0 8px 8px; flex-direction: column; }\n    li:hover .dropdown { display: flex; }\n    .dropdown a { padding: 12px 20px; }\n    .dropdown a:hover { background: #6366f1; }\n  </style>\n</head>\n<body>\n  <nav>\n    <ul>\n      <li><a href="#">Home</a></li>\n      <li>\n        <a href="#">Services &#9660;</a>\n        <ul class="dropdown">\n          <li><a href="#">Web Design</a></li>\n          <li><a href="#">Development</a></li>\n          <li><a href="#">Consulting</a></li>\n        </ul>\n      </li>\n      <li><a href="#">Contact</a></li>\n    </ul>\n  </nav>\n  <main style="padding: 32px;"><h2>Hover over "Services"</h2></main>\n</body>\n</html>',
    [
      { lineOrElement: '.dropdown { display: none; }', explanationEn: 'The dropdown submenu is hidden by default.', explanationAr: 'القائمة المنسدلة مخفية افتراضيًا.' },
      { lineOrElement: 'li:hover .dropdown { display: flex; }', explanationEn: 'On parent <li> hover, the dropdown becomes visible. Pure CSS, no JavaScript needed.', explanationAr: 'عند تمرير الماوس على <li> الأصل، تظهر القائمة المنسدلة. CSS خالصة، لا حاجة لـ JavaScript.' },
    ],
    DEFAULT_CSS_BOILERPLATE
  ),

  // ══════════════════════════════════════════════════════════
  // Module 5: Advanced Components & Selectors (Chapter 5)
  // ══════════════════════════════════════════════════════════

  C('css-lists', 1, 5,
    { en: 'CSS — Lists', ar: 'CSS - قوائم التعداد' },
    {
      en: 'HTML lists (<ul>, <ol>, <dl>) can be styled extensively with CSS. list-style-type controls the marker: disc, circle, square, decimal, lower-alpha, upper-roman, none. list-style-position: inside | outside controls whether the marker wraps with text. list-style-image: url(path) uses a custom image as marker. The shorthand list-style combines type, position, and image. Custom counters via ::marker pseudo-element allow rich list styling. The padding-left on <ul>/<ol> controls the marker indentation.',
      ar: 'يمكن تصميم قوائم HTML بشكل واسع بـ CSS. list-style-type: نوع العلامة. list-style-position: موضع العلامة. list-style-image: صورة مخصصة. ::marker: تخصيص العلامة. padding-left: يتحكم في مسافة البدء.',
    },
    '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>CSS Lists</title>\n  <style>\n    body { font-family: system-ui, sans-serif; padding: 32px; }\n    ul { list-style-type: square; color: #6366f1; }\n    ol { list-style-type: upper-roman; color: #059669; }\n    .custom { list-style: none; padding: 0; }\n    .custom li { padding: 8px 0 8px 24px; position: relative; }\n    .custom li::before { content: "\\2713"; position: absolute; left: 0; color: #6366f1; font-weight: bold; }\n  </style>\n</head>\n<body>\n  <ul><li>Item with square marker</li><li>Second item</li></ul>\n  <ol><li>Roman numeral I</li><li>Roman numeral II</li></ol>\n  <ul class="custom">\n    <li>Custom checkmark via ::before</li>\n    <li>No default list-style</li>\n  </ul>\n</body>\n</html>',
    [
      { lineOrElement: 'list-style-type: square', explanationEn: 'Changes bullet markers from default disc to squares.', explanationAr: 'يغير علامات التعداد من القرص الافتراضي إلى المربعات.' },
      { lineOrElement: 'list-style: none; li::before { content: "\\2713"; }', explanationEn: 'Removes default marker and adds a custom Unicode checkmark via ::before pseudo-element.', explanationAr: 'يزيل العلامة الافتراضية ويضيف علامة اختيار Unicode مخصصة عبر ::before.' },
    ],
    DEFAULT_CSS_BOILERPLATE
  ),

  C('css-tables', 2, 5,
    { en: 'CSS — Tables', ar: 'CSS - الجداول' },
    {
      en: 'CSS table styling improves data presentation. border-collapse: collapse merges adjacent cell borders into a single line instead of double borders. border-spacing controls gap between cells (only works with separate borders). The <th> elements are typically styled with background and bold text for header distinction. Alternating row colors (striped tables) use tr:nth-child(even) { background: ... }. text-align on cells aligns content. Responsive tables may require horizontal scroll on small screens.',
      ar: 'تحسين جداول البيانات بـ CSS. border-collapse: collapse يدمج الحدود المتجاورة. tr:nth-child(even): تلوين الصفوف المخططة. text-align: محاذاة المحتوى. الجداول المتجاوبة قد تتطلب تمريرًا أفقيًا.',
    },
    '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>CSS Tables</title>\n  <style>\n    body { font-family: system-ui, sans-serif; padding: 32px; }\n    table { width: 100%; border-collapse: collapse; border-radius: 8px; overflow: hidden; }\n    th { background: #6366f1; color: white; padding: 12px 16px; text-align: left; font-weight: 600; }\n    td { padding: 10px 16px; border-bottom: 1px solid #e2e8f0; }\n    tr:nth-child(even) { background: #f8fafc; }\n    tr:hover { background: #eef2ff; }\n  </style>\n</head>\n<body>\n  <table>\n    <thead><tr><th>Name</th><th>Role</th><th>Status</th></tr></thead>\n    <tbody>\n      <tr><td>Alice</td><td>Designer</td><td>Active</td></tr>\n      <tr><td>Bob</td><td>Developer</td><td>Active</td></tr>\n      <tr><td>Carol</td><td>Manager</td><td>Inactive</td></tr>\n    </tbody>\n  </table>\n</body>\n</html>',
    [
      { lineOrElement: 'border-collapse: collapse', explanationEn: 'Merges adjacent cell borders, creating clean single-line borders.', explanationAr: 'يدمج الحدود المتجاورة، منشئًا حدودًا نظيفة من خط واحد.' },
      { lineOrElement: 'tr:nth-child(even) { background: #f8fafc; }', explanationEn: 'Alternating row colors — even rows get a subtle background for readability.', explanationAr: 'تلوين الصفوف المتناوبة — الصفوف الزوجية تحصل على خلفية خفيفة.' },
    ],
    DEFAULT_CSS_BOILERPLATE
  ),

  C('css-pseudo-elements', 3, 5,
    { en: 'CSS — Pseudo-elements ::before / ::after', ar: 'CSS - بداية و نهاية العنصر' },
    {
      en: 'Pseudo-elements create virtual elements in the DOM that can be styled with CSS. ::before inserts content before an element\'s actual content; ::after inserts after. Both require the content property (can be empty string "" for decorative elements). Uses: decorative icons, clearfix, tooltips, custom list markers, overlay gradients, visual separators. The double colon (::) distinguishes pseudo-elements from pseudo-classes (:). They are inline by default; display: block or position: absolute makes them layout-capable.',
      ar: 'العناصر الزائفة تنشئ عناصر افتراضية في DOM يمكن تصميمها بـ CSS. ::before قبل المحتوى الفعلي؛ ::after بعده. كلاهما يتطلب خاصية content. الاستخدامات: أيقونات زخرفية، clearfix، تلميحات، علامات قوائم مخصصة.',
    },
    '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Pseudo-elements</title>\n  <style>\n    body { font-family: system-ui, sans-serif; padding: 32px; }\n    .quote { font-size: 1.25rem; font-style: italic; color: #475569; padding: 16px 24px; background: #f8fafc; border-radius: 12px; }\n    .quote::before { content: "\\201C"; font-size: 3rem; color: #6366f1; line-height: 1; display: block; }\n    .tooltip { position: relative; color: #6366f1; cursor: help; }\n    .tooltip::after { content: attr(data-tip); position: absolute; bottom: 120%; left: 50%; transform: translateX(-50%); background: #1e293b; color: white; padding: 6px 12px; border-radius: 6px; font-size: 12px; white-space: nowrap; display: none; }\n    .tooltip:hover::after { display: block; }\n  </style>\n</head>\n<body>\n  <div class="quote">Design is not just what it looks like. Design is how it works.</div>\n  <p style="margin-top: 48px;">Hover <span class="tooltip" data-tip="Hello! I am a tooltip">here</span> to see a CSS tooltip.</p>\n</body>\n</html>',
    [
      { lineOrElement: '.quote::before { content: "\\201C"; }', explanationEn: 'Inserts a Unicode left double-quote before the element\'s content via ::before.', explanationAr: 'يدخل علامة اقتباس مزدوجة Unicode قبل محتوى العنصر عبر ::before.' },
      { lineOrElement: '.tooltip::after { content: attr(data-tip); }', explanationEn: 'Reads the value of the data-tip HTML attribute and displays it as generated content.', explanationAr: 'يقرأ قيمة سمة HTML data-tip ويعرضها كمحتوى مُنشأ.' },
    ],
    DEFAULT_CSS_BOILERPLATE
  ),

  C('css-counters', 4, 5,
    { en: 'CSS — Counters', ar: 'CSS - العدادات' },
    {
      en: 'CSS counters provide automatic numbering via CSS alone. Use counter-reset to initialize a counter on a parent element, counter-increment to increment it on child elements, and content: counter(name) to display the value in a ::before or ::after pseudo-element. Counters can be nested for multi-level numbering (e.g., 1, 1.1, 1.2). The counter() function accepts a second argument for list-style-type (counter(name, upper-roman)). CSS counters replace manual numbering in HTML.',
      ar: 'العدادات توفر ترقيمًا تلقائيًا عبر CSS وحدها. counter-reset: تهيئة العداد. counter-increment: زيادته. content: counter(name): عرض القيمة. يمكن تداخل العداد للترقيم متعدد المستويات.',
    },
    '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>CSS Counters</title>\n  <style>\n    body { font-family: system-ui, sans-serif; padding: 32px; counter-reset: section; }\n    h2::before { counter-increment: section; content: "Section " counter(section) ": "; color: #6366f1; }\n    ol { counter-reset: item; list-style: none; padding-left: 0; }\n    li::before { counter-increment: item; content: counters(item, ".") " "; color: #6366f1; font-weight: bold; }\n  </style>\n</head>\n<body>\n  <h2>Introduction</h2>\n  <ol>\n    <li>First item</li>\n    <li>Second item<ol><li>Sub-item</li><li>Sub-item</li></ol></li>\n    <li>Third item</li>\n  </ol>\n  <h2>Conclusion</h2>\n</body>\n</html>',
    [
      { lineOrElement: 'counter-reset: section', explanationEn: 'Initializes a counter named "section" starting at 0.', explanationAr: 'يهيئ عدادًا باسم "section" يبدأ من 0.' },
      { lineOrElement: 'counter-increment: section', explanationEn: 'Increments the counter by 1 each time the element appears.', explanationAr: 'يزيد العداد بمقدار 1 كل مرة يظهر فيها العنصر.' },
      { lineOrElement: 'content: counter(section)', explanationEn: 'Renders the current counter value as generated content.', explanationAr: 'يعرض قيمة العداد الحالية كمحتوى مُنشأ.' },
    ],
    DEFAULT_CSS_BOILERPLATE
  ),

  C('css-image-sprites', 5, 5,
    { en: 'CSS — Image Sprites', ar: 'CSS - الصور المقتطعة' },
    {
      en: 'An image sprite is a single image containing multiple smaller images combined. CSS uses background-position to show only the desired portion of the sprite. Benefits: reduces HTTP requests, improves load time. Technique: set the element\'s width/height to the individual icon size, set background-image to the sprite, and adjust background-position (usually negative values) to shift the visible area. Sprites are less critical with HTTP/2 (multiplexing) and SVG icons but remain a valid optimization technique.',
      ar: 'الصورة المقتطعة (Sprite) هي صورة واحدة تحتوي على صور متعددة مدمجة. تستخدم CSS خاصية background-position لإظهار الجزء المطلوب فقط. الفوائد: تقليل طلبات HTTP، تحسين وقت التحميل.',
    },
    '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>CSS Image Sprites</title>\n  <style>\n    body { font-family: system-ui, sans-serif; padding: 32px; }\n    .sprite-demo { display: flex; gap: 24px; }\n    .sprite { width: 48px; height: 48px; background-image: url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 144 48"><rect width="48" height="48" rx="8" fill="%236366f1"/><rect x="48" width="48" height="48" rx="8" fill="%23ef4444"/><rect x="96" width="48" height="48" rx="8" fill="%2322c55e"/></svg>\'); background-size: 144px 48px; border-radius: 8px; }\n    .icon1 { background-position: 0 0; }\n    .icon2 { background-position: -48px 0; }\n    .icon3 { background-position: -96px 0; }\n  </style>\n</head>\n<body>\n  <h2>Image Sprite Demo</h2>\n  <p>All three colored squares come from one sprite image.</p>\n  <div class="sprite-demo">\n    <div class="sprite icon1" title="Icon 1"></div>\n    <div class="sprite icon2" title="Icon 2"></div>\n    <div class="sprite icon3" title="Icon 3"></div>\n  </div>\n</body>\n</html>',
    [
      { lineOrElement: 'background-position: -48px 0', explanationEn: 'Shifts the sprite left by 48px, revealing the second icon in the sprite sheet.', explanationAr: 'يحوّل الصورة المقتطعة لليسار بمقدار 48px، كاشفًا عن الأيقونة الثانية.' },
    ],
    DEFAULT_CSS_BOILERPLATE
  ),

  C('css-attribute-selectors', 6, 5,
    { en: 'CSS — Attribute Selectors', ar: 'CSS - محددات الخصائص' },
    {
      en: 'Attribute selectors target elements based on attribute presence or value. Basic: [attr] (has attribute), [attr=value] (exact match), [attr~=value] (space-separated list contains word), [attr|=value] (starts with value followed by hyphen). Advanced: [attr^=value] (starts with), [attr$=value] (ends with), [attr*=value] (contains substring). Case-insensitive modifier: [attr=value i]. Examples: a[href^="https"] (secure links), img[alt] (images with alt text), input[type="submit"] (submit buttons).',
      ar: 'محددات الخصائص تستهدف العناصر بناءً على وجود أو قيمة السمة. الأساسية: [attr]، [attr=value]، [attr~=value]، [attr|=value]. المتقدمة: [attr^=value] يبدأ بـ، [attr$=value] ينتهي بـ، [attr*=value] يحتوي على.',
    },
    '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Attribute Selectors</title>\n  <style>\n    body { font-family: system-ui, sans-serif; padding: 32px; }\n    [data-type] { padding: 8px 12px; margin: 4px 0; border-radius: 6px; }\n    [data-type="primary"] { background: #eef2ff; color: #6366f1; font-weight: bold; }\n    [data-type="secondary"] { background: #fef9c3; color: #a16207; }\n    a[href^="https"] { color: #059669; }\n    a[href$=".pdf"]::after { content: " (PDF)"; font-size: 0.8em; color: #ef4444; }\n  </style>\n</head>\n<body>\n  <div data-type="primary">Primary item</div>\n  <div data-type="secondary">Secondary item</div>\n  <div>No data-type attribute (no style)</div>\n  <p><a href="https://example.com">Secure link (https)</a></p>\n  <p><a href="document.pdf">PDF document</a></p>\n</body>\n</html>',
    [
      { lineOrElement: '[data-type] { ... }', explanationEn: 'Selects any element with the data-type attribute, regardless of its value.', explanationAr: 'يحدد أي عنصر بسمة data-type، بغض النظر عن قيمتها.' },
      { lineOrElement: '[data-type="primary"] { ... }', explanationEn: 'Exact match — only elements with data-type="primary".', explanationAr: 'مطابقة تامة — فقط العناصر ذات data-type="primary".' },
      { lineOrElement: 'a[href^="https"] { ... }', explanationEn: 'Selects links where href starts with "https" (secure links only).', explanationAr: 'يحدد الروابط حيث يبدأ href بـ "https" (الروابط الآمنة فقط).' },
      { lineOrElement: 'a[href$=".pdf"]::after', explanationEn: 'Selects links ending in ".pdf" and appends a label via ::after.', explanationAr: 'يحدد الروابط المنتهية بـ ".pdf" ويضيف تسمية عبر ::after.' },
    ],
    DEFAULT_CSS_BOILERPLATE
  ),

  C('css-forms', 7, 5,
    { en: 'CSS — Forms', ar: 'CSS - عناصر النماذج' },
    {
      en: 'CSS form styling improves usability and brand consistency. Common patterns: input { width: 100%; padding: 10px 14px; border: 2px solid #e2e8f0; border-radius: 8px; font-size: 14px; } for consistent text inputs. :focus { border-color: ...; box-shadow: ... } for focus indicators. Styling select elements requires vendor-specific pseudo-elements (::-ms-expand). Checkboxes and radios use :checked pseudo-class. Invalid states: :invalid, :user-invalid. Custom form styling is limited by browser rendering engines; appearance: none overrides default OS styling.',
      ar: 'تصميم النماذج بـ CSS يحسن سهولة الاستخدام. الأنماط الشائعة: توحيد حقول الإدخال، تأثيرات التركيز، تخصيص الخيارات المنسدلة. :checked للحالات المحددة. :invalid للحالات غير الصالحة. appearance: none يلغي التصميم الافتراضي لنظام التشغيل.',
    },
    '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>CSS Forms</title>\n  <style>\n    body { font-family: system-ui, sans-serif; padding: 32px; max-width: 400px; }\n    input, textarea { width: 100%; padding: 10px 14px; border: 2px solid #e2e8f0; border-radius: 8px; font-size: 14px; margin-top: 4px; margin-bottom: 16px; box-sizing: border-box; transition: all 0.2s; }\n    input:focus, textarea:focus { outline: none; border-color: #6366f1; box-shadow: 0 0 0 3px rgba(99,102,241,0.15); }\n    input:invalid { border-color: #ef4444; }\n    label { font-weight: 600; font-size: 14px; color: #334155; }\n    button { background: #6366f1; color: white; border: none; padding: 12px 24px; border-radius: 8px; font-size: 14px; font-weight: 600; cursor: pointer; transition: background 0.2s; }\n    button:hover { background: #4f46e5; }\n  </style>\n</head>\n<body>\n  <form>\n    <label for="name">Name</label>\n    <input type="text" id="name" required>\n    <label for="email">Email</label>\n    <input type="email" id="email" required>\n    <label for="bio">Bio</label>\n    <textarea id="bio" rows="2"></textarea>\n    <button type="submit">Submit</button>\n  </form>\n</body>\n</html>',
    [
      { lineOrElement: 'input:focus { border-color: #6366f1; box-shadow: ...; }', explanationEn: 'Focus state — styled border and glow for keyboard/click focus.', explanationAr: 'حالة التركيز — حدود متوهجة للتركيز بلوحة المفاتيح/النقر.' },
      { lineOrElement: 'input:invalid { border-color: #ef4444; }', explanationEn: 'Shows a red border when the input value fails validation (e.g., invalid email).', explanationAr: 'يظهر حدًا أحمر عندما تفشل قيمة الإدخال في التحقق (مثل بريد إلكتروني غير صالح).' },
    ],
    DEFAULT_CSS_BOILERPLATE
  ),
];

const allCssTopics = cssTopics;

export function getCssTopicById(id) {
  return allCssTopics.find(t => t.id === id) || null;
}

export function getCssTopicsByChapter(chapterId) {
  return allCssTopics.filter(t => t.chapter === chapterId).sort((a, b) => a.order - b.order);
}

export { cssChapters };
export default allCssTopics;
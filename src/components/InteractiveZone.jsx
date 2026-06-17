import { useState, useMemo } from 'react';
import { useLanguage } from '../context/LanguageContext';

function BasicsInteractive({ t, lang, onHtmlChange }) {
  const [mode, setMode] = useState('full');
  const modes = [
    { id: 'full', labelEn: 'Complete HTML', labelAr: 'HTML كامل' },
    { id: 'minimal', labelEn: 'Minimal Skeleton', labelAr: 'الهيكل الأساسي' },
    { id: 'structure', labelEn: 'Tags Explained', labelAr: 'شروحات الوسوم' },
  ];
  const previews = {
    full: '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><title>My Page</title></head><body><h1>Welcome!</h1><p>This is a complete HTML document with all required parts.</p></body></html>',
    minimal: '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><title>Minimal Page</title></head><body><h1>Hello World</h1><p>Minimal valid HTML5 document.</p></body></html>',
    structure: '<div style="font-family:monospace;font-size:14px;line-height:2"><div style="color:#e11d48">&lt;!DOCTYPE html&gt;</div><div style="color:#6366f1;margin-left:16px">&lt;html&gt;</div><div style="color:#d97706;margin-left:32px">&lt;head&gt;</div><div style="color:#059669;margin-left:48px">&lt;title&gt;Page Title&lt;/title&gt;</div><div style="color:#d97706;margin-left:32px">&lt;/head&gt;</div><div style="color:#6366f1;margin-left:32px">&lt;body&gt;</div><div style="color:#8b5cf6;margin-left:48px">&lt;h1&gt;Heading&lt;/h1&gt;</div><div style="color:#8b5cf6;margin-left:48px">&lt;p&gt;Paragraph text&lt;/p&gt;</div><div style="color:#6366f1;margin-left:32px">&lt;/body&gt;</div><div style="color:#6366f1;margin-left:16px">&lt;/html&gt;</div></div>',
  };
  return (
    <div className="space-y-4">
      <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
        {t({ en: 'View Mode', ar: 'وضع العرض' })}
      </p>
      <div className="flex flex-wrap gap-2">
        {modes.map((m) => (
          <button
            key={m.id}
            onClick={() => { setMode(m.id); onHtmlChange(previews[m.id]); }}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 press-effect ${
              mode === m.id
                ? 'bg-brand-500 text-white shadow-sm'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
            }`}
          >
            {lang === 'ar' ? m.labelAr : m.labelEn}
          </button>
        ))}
      </div>
      <p className="text-xs text-slate-400 dark:text-slate-500 leading-relaxed">
        {t({ en: 'Click different view modes to see how the HTML document structure changes — from the full specification to a minimal valid skeleton.', ar: 'انقر على أوضاع العرض المختلفة لترى كيف يتغير هيكل مستند HTML — من المواصفة الكاملة إلى الهيكل الأساسي الصحيح.' })}
      </p>
    </div>
  );
}

function InputTypesInteractive({ t, lang, onHtmlChange }) {
  const [type, setType] = useState('text');
  const types = ['text', 'email', 'password', 'number', 'tel', 'url', 'date', 'color'];
  const previews = {
    text: '<label style="display:block;margin-bottom:8px;font-weight:600;font-size:14px">Name:</label><input type="text" placeholder="Enter your name" style="width:100%;padding:10px 14px;border:2px solid #e2e8f0;border-radius:8px;font-size:14px;box-sizing:border-box"><p style="margin-top:12px;font-size:13px;color:#64748b;font-family:monospace">type="text" — default single-line input</p>',
    email: '<label style="display:block;margin-bottom:8px;font-weight:600;font-size:14px">Email:</label><input type="email" placeholder="name@example.com" style="width:100%;padding:10px 14px;border:2px solid #e2e8f0;border-radius:8px;font-size:14px;box-sizing:border-box"><p style="margin-top:12px;font-size:13px;color:#64748b;font-family:monospace">type="email" — validates email format; shows @ key on mobile</p>',
    password: '<label style="display:block;margin-bottom:8px;font-weight:600;font-size:14px">Password:</label><input type="password" placeholder="••••••••" style="width:100%;padding:10px 14px;border:2px solid #e2e8f0;border-radius:8px;font-size:14px;box-sizing:border-box"><p style="margin-top:12px;font-size:13px;color:#64748b;font-family:monospace">type="password" — masks characters; secure input</p>',
    number: '<label style="display:block;margin-bottom:8px;font-weight:600;font-size:14px">Age:</label><input type="number" placeholder="25" min="0" max="150" style="width:100%;padding:10px 14px;border:2px solid #e2e8f0;border-radius:8px;font-size:14px;box-sizing:border-box"><p style="margin-top:12px;font-size:13px;color:#64748b;font-family:monospace">type="number" — numeric keyboard; min/max validation</p>',
    tel: '<label style="display:block;margin-bottom:8px;font-weight:600;font-size:14px">Phone:</label><input type="tel" placeholder="+20 100 000 0000" pattern="[0-9]{10,15}" style="width:100%;padding:10px 14px;border:2px solid #e2e8f0;border-radius:8px;font-size:14px;box-sizing:border-box"><p style="margin-top:12px;font-size:13px;color:#64748b;font-family:monospace">type="tel" — telephone keypad on mobile; pattern validation</p>',
    url: '<label style="display:block;margin-bottom:8px;font-weight:600;font-size:14px">Website:</label><input type="url" placeholder="https://example.com" style="width:100%;padding:10px 14px;border:2px solid #e2e8f0;border-radius:8px;font-size:14px;box-sizing:border-box"><p style="margin-top:12px;font-size:13px;color:#64748b;font-family:monospace">type="url" — validates URL format; shows .com key on mobile</p>',
    date: '<label style="display:block;margin-bottom:8px;font-weight:600;font-size:14px">Date:</label><input type="date" style="width:100%;padding:10px 14px;border:2px solid #e2e8f0;border-radius:8px;font-size:14px;box-sizing:border-box"><p style="margin-top:12px;font-size:13px;color:#64748b;font-family:monospace">type="date" — native date picker; shows calendar on mobile</p>',
    color: '<label style="display:block;margin-bottom:8px;font-weight:600;font-size:14px">Pick a color:</label><input type="color" value="#6366f1" style="width:60px;height:44px;padding:2px;border:2px solid #e2e8f0;border-radius:8px;cursor:pointer"><p style="margin-top:12px;font-size:13px;color:#64748b;font-family:monospace">type="color" — native color picker; returns hex value</p>',
  };
  return (
    <div className="space-y-4">
      <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
        {t({ en: 'Interactive Input Tester', ar: 'اختبار الإدخال التفاعلي' })}
      </p>
      <div className="flex flex-wrap gap-1.5">
        {types.map((t) => (
          <button
            key={t}
            onClick={() => onHtmlChange(previews[t])}
            className={`px-3 py-1.5 rounded-lg text-[11px] font-mono font-semibold transition-all duration-200 press-effect ${
              type === t
                ? 'bg-brand-500 text-white shadow-sm'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
            }`}
          >
            {t}
          </button>
        ))}
      </div>
      <p className="text-xs text-slate-400 dark:text-slate-500 leading-relaxed">
        {t({ en: 'Click any type above to see how the input field changes. Each <input type> triggers different browser behavior, validation rules, and mobile keyboards.', ar: 'انقر على أي نوع أعلاه لترى كيف يتغير حقل الإدخال. كل <input type> يُفعّل سلوك متصفح مختلف وقواعد تحقق ولوحات مفاتيح مختلفة.' })}
      </p>
    </div>
  );
}

function EmojiSearchInteractive({ t, lang, onHtmlChange }) {
  const [query, setQuery] = useState('');
  const emojis = [
    { char: '😀', name: 'Grinning Face', hex: 'U+1F600' },
    { char: '😂', name: 'Face with Tears of Joy', hex: 'U+1F602' },
    { char: '😍', name: 'Smiling Face with Heart-Eyes', hex: 'U+1F60D' },
    { char: '🤔', name: 'Thinking Face', hex: 'U+1F914' },
    { char: '😎', name: 'Smiling Face with Sunglasses', hex: 'U+1F60E' },
    { char: '🙌', name: 'Raising Hands', hex: 'U+1F64C' },
    { char: '💪', name: 'Flexed Biceps', hex: 'U+1F4AA' },
    { char: '🔥', name: 'Fire', hex: 'U+1F525' },
    { char: '⭐', name: 'Star', hex: 'U+2B50' },
    { char: '❤️', name: 'Red Heart', hex: 'U+2764' },
    { char: '🎉', name: 'Party Popper', hex: 'U+1F389' },
    { char: '✅', name: 'Check Mark', hex: 'U+2705' },
    { char: '📚', name: 'Books', hex: 'U+1F4DA' },
    { char: '💡', name: 'Light Bulb', hex: 'U+1F4A1' },
    { char: '🎯', name: 'Direct Hit', hex: 'U+1F3AF' },
    { char: '🚀', name: 'Rocket', hex: 'U+1F680' },
    { char: '🎨', name: 'Artist Palette', hex: 'U+1F3A8' },
    { char: '🏆', name: 'Trophy', hex: 'U+1F3C6' },
    { char: '☕', name: 'Hot Beverage', hex: 'U+2615' },
    { char: '⚡', name: 'High Voltage', hex: 'U+26A1' },
  ];
  const filtered = useMemo(() => {
    if (!query.trim()) return emojis;
    const q = query.toLowerCase();
    return emojis.filter((e) => e.name.toLowerCase().includes(q) || e.hex.toLowerCase().includes(q) || e.char.includes(q));
  }, [query]);

  const previewHtml = `<div style="font-family:system-ui,sans-serif;padding:8px">
    <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:8px">
      ${filtered.map((e) => `<div style="display:flex;flex-direction:column;align-items:center;justify-content:center;padding:12px 8px;border:1px solid #e2e8f0;border-radius:8px;background:#f8fafc">
        <span style="font-size:28px;line-height:1.2">${e.char}</span>
        <span style="font-size:9px;color:#64748b;font-family:monospace;margin-top:4px;text-align:center">${e.hex}</span>
      </div>`).join('')}
    </div>
    ${filtered.length === 0 ? '<p style="text-align:center;color:#94a3b8;padding:24px;font-size:14px">No emojis match your search.</p>' : ''}
  </div>`;

  return (
    <div className="space-y-4">
      <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
        {t({ en: 'Emoji Search', ar: 'بحث الإيموجي' })}
      </p>
      <div className="relative">
        <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
        <input
          type="text"
          value={query}
          onChange={(e) => { setQuery(e.target.value); onHtmlChange(previewHtml); }}
          placeholder={lang === 'ar' ? 'ابحث عن إيموجي...' : 'Search emojis...'}
          className="w-full h-10 pl-10 pr-4 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-sm text-slate-700 dark:text-slate-300 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500/30 focus:border-brand-500"
        />
      </div>
      <p className="text-xs text-slate-400 dark:text-slate-500">
        {filtered.length} / {emojis.length} {t({ en: 'emojis match', ar: 'إيموجي متطابق' })}
      </p>
      <p className="text-xs text-slate-400 dark:text-slate-500 leading-relaxed">
        {t({ en: 'Type a keyword (e.g., "face", "heart", "fire") to filter emojis in real time. Each emoji can be rendered via its Unicode hex code.', ar: 'اكتب كلمة مفتاحية (مثل "face" أو "قلب" أو "نار") لتصفية الإيموجي في الوقت الفعلي. يمكن عرض كل إيموجي عبر رمز Unicode السداسي العشري.' })}
      </p>
    </div>
  );
}

function LinksInteractive({ t, lang, onHtmlChange }) {
  const [target, setTarget] = useState('_self');
  const html = `<div style="font-family:system-ui,sans-serif;padding:16px">
    <p style="margin-bottom:12px;font-size:14px;color:#334155">
      ${lang === 'ar' ? 'انقر على الرابط أدناه لاختبار السلوك:' : 'Click the link below to test behavior:'}
    </p>
    <a href="https://example.com" target="${target}" rel="noopener noreferrer" style="color:#6366f1;font-size:16px;font-weight:600;text-decoration:underline">
      ${lang === 'ar' ? 'زيارة example.com' : 'Visit example.com'}
    </a>
    <p style="margin-top:12px;font-size:13px;color:#64748b;font-family:monospace">target="${target}"</p>
  </div>`;
  return (
    <div className="space-y-4">
      <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
        {t({ en: 'Link Behavior Toggle', ar: 'تبديل سلوك الرابط' })}
      </p>
      <div className="flex items-center gap-3">
        <span className="text-sm text-slate-600 dark:text-slate-400">{t({ en: 'Open in:', ar: 'فتح في:' })}</span>
        <button onClick={() => { setTarget('_self'); onHtmlChange(html); }}
          className={`px-4 py-2 rounded-lg text-sm font-mono font-semibold transition-all press-effect ${target === '_self' ? 'bg-brand-500 text-white shadow-sm' : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400'}`}>_self</button>
        <button onClick={() => { setTarget('_blank'); onHtmlChange(html); }}
          className={`px-4 py-2 rounded-lg text-sm font-mono font-semibold transition-all press-effect ${target === '_blank' ? 'bg-brand-500 text-white shadow-sm' : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400'}`}>_blank</button>
      </div>
      <p className="text-xs text-slate-400 dark:text-slate-500 leading-relaxed">
        {t({ en: 'Toggle target="_self" (same tab) vs target="_blank" (new tab). Always add rel="noopener noreferrer" for security with _blank.', ar: 'بدّل بين target="_self" (نفس التبويب) و target="_blank" (تبويب جديد). أضف rel="noopener noreferrer" دائماً للأمان مع _blank.' })}
      </p>
    </div>
  );
}

function ListsInteractive({ t, lang, onHtmlChange }) {
  const [type, setType] = useState('decimal');
  const html = `<ol type="${type}" style="font-family:system-ui,sans-serif;font-size:15px;line-height:1.8;padding-left:24px">
    <li style="color:#334155">${lang === 'ar' ? 'العنصر الأول' : 'First item'}</li>
    <li style="color:#334155">${lang === 'ar' ? 'العنصر الثاني' : 'Second item'}</li>
    <li style="color:#334155">${lang === 'ar' ? 'العنصر الثالث' : 'Third item'}</li>
  </ol>
  <p style="margin-top:8px;font-size:13px;color:#64748b;font-family:monospace">&lt;ol type="${type}"&gt;</p>`;
  return (
    <div className="space-y-4">
      <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
        {t({ en: 'List Type Toggle', ar: 'تبديل نوع القائمة' })}
      </p>
      <div className="flex flex-wrap gap-2">
        {[
          { value: '1', label: '1, 2, 3' },
          { value: 'A', label: 'A, B, C' },
          { value: 'a', label: 'a, b, c' },
          { value: 'I', label: 'I, II, III' },
          { value: 'i', label: 'i, ii, iii' },
        ].map((opt) => (
          <button key={opt.value} onClick={() => { setType(opt.value); onHtmlChange(html); }}
            className={`px-3 py-1.5 rounded-lg text-sm font-mono font-semibold transition-all press-effect ${type === opt.value ? 'bg-brand-500 text-white shadow-sm' : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400'}`}>{opt.label}</button>
        ))}
      </div>
      <p className="text-xs text-slate-400 dark:text-slate-500 leading-relaxed">
        {t({ en: 'The type attribute controls the numbering style: 1 (numbers), A (uppercase), a (lowercase), I (Roman), i (lowercase Roman).', ar: 'تتحكم السمة type في نمط الترقيم: 1 (أرقام)، A (أحرف كبيرة)، a (أحرف صغيرة)، I (رومانية)، i (رومانية صغيرة).' })}
      </p>
    </div>
  );
}

export default function InteractiveZone({ topic, lang, onHtmlChange }) {
  const { t } = useLanguage();
  const id = topic?.id || '';

  if (id === 'html-basics') return <BasicsInteractive t={t} lang={lang} onHtmlChange={onHtmlChange} />;
  if (id === 'html-input-types') return <InputTypesInteractive t={t} lang={lang} onHtmlChange={onHtmlChange} />;
  if (id === 'html-emoji-symbols') return <EmojiSearchInteractive t={t} lang={lang} onHtmlChange={onHtmlChange} />;
  if (id === 'html-links') return <LinksInteractive t={t} lang={lang} onHtmlChange={onHtmlChange} />;
  if (id === 'html-ordered-lists' || id === 'html-unordered-lists') return <ListsInteractive t={t} lang={lang} onHtmlChange={onHtmlChange} />;

  return null;
}
import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

function HtmlSyntaxMockup({ mockup, t }) {
  const variant = mockup?.variant || 'document';
  const blocks = mockup?.blocks || [];
  return (
    <div className="w-full max-w-lg mx-auto space-y-3">
      <div className="flex items-center justify-center gap-1.5 mb-2">
        <span className="inline-flex items-center gap-1 px-2 py-0.5 text-[10px] font-mono font-semibold rounded bg-rose-100 dark:bg-rose-900/40 text-rose-600 dark:text-rose-400 ring-1 ring-rose-200/50 dark:ring-rose-800/50">&lt;tag&gt;</span>
        <span className="inline-flex items-center gap-1 px-2 py-0.5 text-[10px] font-mono font-semibold rounded bg-amber-100 dark:bg-amber-900/40 text-amber-600 dark:text-amber-400 ring-1 ring-amber-200/50 dark:ring-amber-800/50">attribute="value"</span>
        <span className="inline-flex items-center gap-1 px-2 py-0.5 text-[10px] font-mono font-semibold rounded bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400 ring-1 ring-emerald-200/50 dark:ring-emerald-800/50">{t({ en: 'Content', ar: 'محتوى' })}</span>
      </div>
      <div className="border border-slate-200/60 dark:border-slate-800/80 rounded-xl overflow-hidden divide-y divide-slate-200/60 dark:divide-slate-800/80 mockup-card bg-micro-grid">
        {blocks.map((block, i) => (
          <div key={i} className={`flex items-stretch ${block.bg || 'bg-white/80 dark:bg-slate-900/50'}`}>
            <div className="px-3 py-2.5 flex items-center border-r-2 rtl:border-r-0 rtl:border-l-2 border-rose-300 dark:border-rose-700 bg-rose-50/80 dark:bg-rose-950/30 min-w-[90px]">
              <span className="text-[11px] font-mono font-semibold text-rose-600 dark:text-rose-400 whitespace-nowrap">{block.tag}</span>
            </div>
            {block.attrs && (
              <div className="px-3 py-2.5 flex items-center border-r-2 rtl:border-r-0 rtl:border-l-2 border-amber-300 dark:border-amber-700 bg-amber-50/80 dark:bg-amber-950/30">
                <span className="text-[11px] font-mono text-amber-600 dark:text-amber-400 whitespace-nowrap">{block.attrs}</span>
              </div>
            )}
            <div className="flex-1 px-3 py-2.5 flex items-center">
              <span className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400">{block.content}</span>
            </div>
          </div>
        ))}
      </div>
      {mockup?.variant === 'document' && (
        <div className="flex items-center justify-center gap-2 text-[10px] font-mono text-slate-400 dark:text-slate-500">
          <span className="flex items-center gap-1"><span className="w-2 h-2 rounded bg-rose-400" /> Tag</span>
          <span className="flex items-center gap-1"><span className="w-2 h-2 rounded bg-amber-400" /> Attribute</span>
          <span className="flex items-center gap-1"><span className="w-2 h-2 rounded bg-emerald-400" /> Content</span>
        </div>
      )}
    </div>
  );
}

function HyperlinksMockup({ t }) {
  return (
    <div className="w-full max-w-lg mx-auto space-y-5">
      <div className="p-5 bg-white/80 dark:bg-slate-900/50 rounded-xl border border-slate-200/60 dark:border-slate-800/80 mockup-card bg-micro-grid">
        <div className="text-[11px] font-semibold text-slate-400 dark:text-slate-500 mb-3 uppercase tracking-wider">{t({ en: 'Absolute URL (External)', ar: 'رابط مطلق (خارجي)' })}</div>
        <div className="flex items-center gap-2 text-sm">
          <span className="font-mono text-brand-500 dark:text-brand-400 text-[13px]">{'<a'}</span>
          <span className="font-mono text-amber-500 dark:text-amber-400 text-[13px]">href=</span>
          <span className="font-mono text-emerald-500 dark:text-emerald-400 text-[13px]">&quot;https://example.com/page&quot;</span>
          <span className="font-mono text-brand-500 dark:text-brand-400 text-[13px]">{'>'}</span>
        </div>
        <div className="mt-3 flex items-center gap-2">
          <div className="flex-1 h-2 rounded-full bg-gradient-to-r from-brand-400 via-purple-400 to-rose-400" />
          <span className="text-[10px] font-mono text-slate-400">https://example.com/page</span>
        </div>
      </div>
      <div className="p-5 bg-white/80 dark:bg-slate-900/50 rounded-xl border border-slate-200/60 dark:border-slate-800/80 mockup-card bg-micro-grid">
        <div className="text-[11px] font-semibold text-slate-400 dark:text-slate-500 mb-3 uppercase tracking-wider">{t({ en: 'Relative URL (Internal)', ar: 'رابط نسبي (داخلي)' })}</div>
        <div className="flex items-center gap-2 text-sm">
          <span className="font-mono text-brand-500 dark:text-brand-400 text-[13px]">{'<a'}</span>
          <span className="font-mono text-amber-500 dark:text-amber-400 text-[13px]">href=</span>
          <span className="font-mono text-emerald-500 dark:text-emerald-400 text-[13px]">&quot;/about&quot;</span>
          <span className="font-mono text-brand-500 dark:text-brand-400 text-[13px]">{'>'}</span>
        </div>
        <div className="mt-3 flex items-center gap-2">
          <div className="flex-1 h-2 rounded-full bg-gradient-to-r from-emerald-400 to-teal-400" />
          <span className="text-[10px] font-mono text-slate-400">/about</span>
        </div>
      </div>
      <div className="flex items-center justify-center gap-4 text-[11px] text-slate-400 dark:text-slate-500">
        <span className="flex items-center gap-1.5"><span className="w-3 h-0.5 rounded bg-brand-400" /> {t({ en: 'Full path to server', ar: 'المسار الكامل للخادم' })}</span>
        <span className="flex items-center gap-1.5"><span className="w-3 h-0.5 rounded bg-emerald-400" /> {t({ en: 'Relative to domain root', ar: 'نسبة إلى جذر النطاق' })}</span>
      </div>
    </div>
  );
}

function MediaMockup({ t }) {
  return (
    <div className="w-full max-w-md mx-auto">
      <div className="rounded-xl border border-slate-200/60 dark:border-slate-800/80 bg-white/80 dark:bg-slate-900/50 mockup-card overflow-hidden">
        <div className="bg-slate-900 px-4 py-2 flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-500" />
          <span className="ml-auto text-[10px] font-mono text-slate-500">media.mp4</span>
        </div>
        <div className="bg-slate-950 aspect-video flex items-center justify-center">
          <svg className="w-14 h-14 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><polygon points="5 3 19 12 5 21 5 3" /></svg>
        </div>
        <div className="px-4 py-3 bg-slate-100 dark:bg-slate-900 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-slate-300 dark:bg-slate-700 flex items-center justify-center">
              <svg className="w-3 h-3 text-slate-500" fill="currentColor" viewBox="0 0 24 24"><polygon points="19 12 5 3 5 21 19 12" /></svg>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-5 h-1 rounded bg-slate-300 dark:bg-slate-600" />
              <div className="w-3 h-1 rounded bg-slate-300 dark:bg-slate-600" />
              <div className="w-8 h-1 rounded bg-brand-500" />
              <div className="w-5 h-1 rounded bg-slate-300 dark:bg-slate-600" />
            </div>
          </div>
          <div className="flex items-center gap-1">
            <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M11 19l-7-7 7-7M18 19l-7-7 7-7" /></svg>
            <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M9 8h6"/></svg>
          </div>
        </div>
      </div>
      <div className="mt-3 flex items-center justify-center gap-4 text-[10px] font-mono text-slate-400 dark:text-slate-500">
        <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-brand-500" /> {t({ en: 'Video element', ar: 'عنصر فيديو' })}</span>
        <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-slate-400" /> {t({ en: 'Controls bar', ar: 'شريط التحكم' })}</span>
      </div>
    </div>
  );
}

function FormMockup({ t }) {
  return (
    <div className="w-full max-w-md mx-auto space-y-4 p-6 bg-white/80 dark:bg-slate-900/50 rounded-xl border border-slate-200/60 dark:border-slate-800/80 mockup-card bg-micro-grid">
      <div className="space-y-1.5">
        <label className="block text-[11px] font-medium text-slate-500 dark:text-slate-400">{t({ en: 'Full Name', ar: 'الاسم الكامل' })}</label>
        <div className="h-10 w-full bg-slate-50 dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 flex items-center px-3 transition-all duration-200 focus-within:ring-2 focus-within:ring-brand-500/30 focus-within:border-brand-500">
          <span className="text-xs text-slate-400">{t({ en: 'Enter your name', ar: 'أدخل اسمك' })}</span>
        </div>
      </div>
      <div className="space-y-1.5">
        <label className="block text-[11px] font-medium text-slate-500 dark:text-slate-400">{t({ en: 'Email', ar: 'البريد الإلكتروني' })}</label>
        <div className="h-10 w-full bg-slate-50 dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 flex items-center px-3 transition-all duration-200 focus-within:ring-2 focus-within:ring-brand-500/30 focus-within:border-brand-500">
          <span className="text-xs text-slate-400">{t({ en: 'name@example.com', ar: 'name@example.com' })}</span>
        </div>
      </div>
      <div className="space-y-1.5">
        <label className="block text-[11px] font-medium text-slate-500 dark:text-slate-400">{t({ en: 'Message', ar: 'الرسالة' })}</label>
        <div className="h-20 w-full bg-slate-50 dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 p-3 transition-all duration-200 focus-within:ring-2 focus-within:ring-brand-500/30 focus-within:border-brand-500">
          <span className="text-xs text-slate-400">{t({ en: 'Type your message...', ar: 'اكتب رسالتك...' })}</span>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <input type="checkbox" id="subscribe" className="rounded border-slate-300 dark:border-slate-600 text-brand-500 focus:ring-brand-500/30 focus:ring-offset-0" defaultChecked />
        <label htmlFor="subscribe" className="text-[11px] text-slate-500 dark:text-slate-400">{t({ en: 'Subscribe to newsletter', ar: 'اشتراك في النشرة البريدية' })}</label>
      </div>
      <button className="w-full h-11 bg-cta-500 hover:bg-cta-600 rounded-xl text-sm font-semibold text-white shadow-sm shadow-cta-500/20 transition-all duration-200 press-effect">
        {t({ en: 'Send Message', ar: 'إرسال الرسالة' })}
      </button>
    </div>
  );
}

function PageLayoutDiagram({ mockup, t }) {
  const regions = mockup?.regions || [];
  const header = regions.find((r) => r.id === 'header');
  const nav = regions.find((r) => r.id === 'nav');
  const main = regions.find((r) => r.id === 'main');
  const article = regions.find((r) => r.id === 'article');
  const aside = regions.find((r) => r.id === 'aside');
  const footer = regions.find((r) => r.id === 'footer');
  return (
    <div className="relative w-full max-w-lg mx-auto">
      <div className="rounded-t-xl bg-slate-200 dark:bg-slate-800 border-b border-slate-300 dark:border-slate-700 px-4 py-2 flex items-center gap-2">
        <span className="w-3 h-3 rounded-full bg-red-500" /><span className="w-3 h-3 rounded-full bg-yellow-500" /><span className="w-3 h-3 rounded-full bg-green-500" />
        <span className="ml-2 rtl:ml-0 rtl:mr-2 flex-1 h-5 rounded bg-slate-300 dark:bg-slate-700" />
      </div>
      <div className="border border-t-0 border-slate-300 dark:border-slate-700 rounded-b-xl overflow-hidden divide-y divide-slate-300 dark:divide-slate-700 mockup-card">
        {header && <RegionBlock region={header} />}
        {nav && <RegionBlock region={nav} />}
        {(main || article || aside) && (
          <div className="flex flex-col sm:flex-row divide-y sm:divide-y-0 sm:divide-x rtl:sm:divide-x-reverse divide-slate-300 dark:divide-slate-700">
            <div className="flex-1 flex flex-col divide-y divide-slate-300 dark:divide-slate-700">
              {main && <RegionBlock region={main} />}
              {article && <RegionBlock region={article} />}
            </div>
            {aside && <div className="sm:w-1/3"><RegionBlock region={aside} /></div>}
          </div>
        )}
        {footer && <RegionBlock region={footer} />}
      </div>
    </div>
  );
}

function RegionBlock({ region }) {
  return (
    <div className={`px-4 py-4 sm:py-5 text-center ${region.color} transition-all duration-200 diagram-region`}>
      <span className="text-xs sm:text-sm font-semibold text-white tracking-wide drop-shadow-sm">{region.label.en}</span>
    </div>
  );
}

function SymbolsGridMockup({ mockup, t }) {
  const symbols = mockup?.symbols || [];
  const columns = mockup?.columns || 6;
  return (
    <div className="w-full max-w-lg mx-auto">
      <div className="grid gap-2" style={{ gridTemplateColumns: `repeat(${Math.min(columns, 6)}, minmax(0, 1fr))` }}>
        {symbols.slice(0, 36).map((sym, i) => (
          <div key={i} className="aspect-square rounded-xl border border-slate-200/60 dark:border-slate-800/80 bg-white/80 dark:bg-slate-900/50 mockup-card flex flex-col items-center justify-center p-1 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
            <span className="text-lg sm:text-xl leading-none">{sym.char}</span>
            <span className="text-[8px] font-mono text-slate-400 dark:text-slate-500 mt-1 truncate max-w-full px-0.5">{sym.code}</span>
          </div>
        ))}
      </div>
      {symbols.length > 36 && (
        <p className="mt-3 text-[10px] text-center text-slate-400 dark:text-slate-500 font-mono">
          {t({ en: `+${symbols.length - 36} more symbols available`, ar: `+${symbols.length - 36} رمزاً إضافياً` })}
        </p>
      )}
    </div>
  );
}

function IframeMockup({ t }) {
  return (
    <div className="w-full max-w-lg mx-auto">
      <div className="rounded-xl border border-slate-200/60 dark:border-slate-800/80 bg-white/80 dark:bg-slate-900/50 mockup-card overflow-hidden">
        <div className="bg-slate-900 px-4 py-2 flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500" /><span className="w-2.5 h-2.5 rounded-full bg-yellow-500" /><span className="w-2.5 h-2.5 rounded-full bg-green-500" />
          <span className="ml-auto text-[10px] font-mono text-slate-500">maps.google.com</span>
        </div>
        <div className="aspect-video bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
          <div className="text-center">
            <svg className="w-10 h-10 mx-auto text-slate-300 dark:text-slate-600 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M8 12h8M12 8v8"/></svg>
            <span className="text-[10px] font-mono text-slate-400 dark:text-slate-500">{t({ en: 'Embedded Content (iframe)', ar: 'محتوى مدمج (iframe)' })}</span>
          </div>
        </div>
        <div className="px-4 py-2 bg-slate-50 dark:bg-slate-900 flex items-center justify-between text-[10px] font-mono text-slate-400">
          <span>&lt;iframe src=&quot;https://maps.google.com&quot;&gt;&lt;/iframe&gt;</span>
        </div>
      </div>
    </div>
  );
}

function NestedTagsMockup({ t }) {
  const [expanded, setExpanded] = useState(true);
  return (
    <div className="w-full max-w-lg mx-auto">
      <div className="border border-slate-200/60 dark:border-slate-800/80 rounded-xl overflow-hidden mockup-card bg-micro-grid">
        <div className="divide-y divide-slate-200/60 dark:divide-slate-800/80 font-mono text-[12px]">
          <div className="px-4 py-2.5 bg-rose-50/80 dark:bg-rose-950/30 border-l-4 border-rose-400 text-rose-600 dark:text-rose-400 flex items-center gap-2">
            <span className="text-rose-400">&lt;</span><span className="font-bold">html</span><span className="text-rose-400">&gt;</span>
            <span className="text-[9px] text-rose-400/60 ml-auto">{t({ en: 'Root element', ar: 'العنصر الجذر' })}</span>
          </div>
          <div className="px-4 py-2.5 ml-4 bg-amber-50/80 dark:bg-amber-950/30 border-l-4 border-amber-400 text-amber-600 dark:text-amber-400 flex items-center gap-2">
            <span className="text-amber-400">&lt;</span><span className="font-bold">head</span><span className="text-amber-400">&gt;</span>
            <span className="text-[9px] text-amber-400/60 ml-auto">{t({ en: 'Metadata', ar: 'بيانات وصفية' })}</span>
          </div>
          <div className="px-4 py-2.5 ml-8 bg-sky-50/80 dark:bg-sky-950/30 border-l-4 border-sky-400 text-sky-600 dark:text-sky-400 flex items-center gap-2">
            <span className="text-sky-400">&lt;</span><span className="font-bold">title</span><span className="text-sky-400">&gt;</span>
            <span className="text-emerald-500">Page Title</span>
            <span className="text-sky-400">&lt;/</span><span className="font-bold">title</span><span className="text-sky-400">&gt;</span>
          </div>
          <div className="px-4 py-2.5 ml-4 bg-emerald-50/80 dark:bg-emerald-950/30 border-l-4 border-emerald-400 text-emerald-600 dark:text-emerald-400 flex items-center gap-2">
            <span className="text-emerald-400">&lt;</span><span className="font-bold">body</span><span className="text-emerald-400">&gt;</span>
            <span className="text-[9px] text-emerald-400/60 ml-auto">{t({ en: 'Visible content', ar: 'المحتوى المرئي' })}</span>
          </div>
          <div className="px-4 py-2.5 ml-8 bg-brand-50/80 dark:bg-brand-950/30 border-l-4 border-brand-400 text-brand-600 dark:text-brand-400 flex items-center gap-2">
            <span className="text-brand-400">&lt;</span><span className="font-bold">h1</span><span className="text-brand-400">&gt;</span>
            <span className="text-emerald-500">{t({ en: 'Main Heading', ar: 'عنوان رئيسي' })}</span>
            <span className="text-brand-400">&lt;/</span><span className="font-bold">h1</span><span className="text-brand-400">&gt;</span>
          </div>
          <div className="px-4 py-2.5 ml-8 bg-brand-50/80 dark:bg-brand-950/30 border-l-4 border-brand-400 text-brand-600 dark:text-brand-400 flex items-center gap-2">
            <span className="text-brand-400">&lt;</span><span className="font-bold">p</span><span className="text-brand-400">&gt;</span>
            <span className="text-emerald-500">{t({ en: 'Paragraph text here...', ar: 'نص الفقرة هنا...' })}</span>
            <span className="text-brand-400">&lt;/</span><span className="font-bold">p</span><span className="text-brand-400">&gt;</span>
          </div>
          <div className="px-4 py-2.5 ml-8 bg-brand-50/80 dark:bg-brand-950/30 border-l-4 border-brand-400 text-brand-600 dark:text-brand-400 flex items-center gap-2">
            <span className="text-brand-400">&lt;</span><span className="font-bold">img</span>
            <span className="text-amber-500"> src=</span><span className="text-emerald-500">&quot;photo.jpg&quot;</span>
            <span className="text-amber-500"> alt=</span><span className="text-emerald-500">&quot;Description&quot;</span>
            <span className="text-brand-400"> /&gt;</span>
          </div>
          <div className="px-4 py-2.5 ml-4 bg-violet-50/80 dark:bg-violet-950/30 border-l-4 border-violet-400 text-violet-600 dark:text-violet-400 flex items-center gap-2">
            <span className="text-violet-400">&lt;/</span><span className="font-bold">body</span><span className="text-violet-400">&gt;</span>
          </div>
          <div className="px-4 py-2.5 bg-rose-50/80 dark:bg-rose-950/30 border-l-4 border-rose-400 text-rose-600 dark:text-rose-400 flex items-center gap-2">
            <span className="text-rose-400">&lt;/</span><span className="font-bold">html</span><span className="text-rose-400">&gt;</span>
          </div>
        </div>
      </div>
      <div className="mt-3 flex items-center justify-center gap-3 text-[10px] text-slate-400 dark:text-slate-500">
        <span className="flex items-center gap-1"><span className="w-2 h-2 rounded bg-rose-400" /> html</span>
        <span className="flex items-center gap-1"><span className="w-2 h-2 rounded bg-amber-400" /> head</span>
        <span className="flex items-center gap-1"><span className="w-2 h-2 rounded bg-emerald-400" /> body</span>
        <span className="flex items-center gap-1"><span className="w-2 h-2 rounded bg-brand-400" /> content</span>
      </div>
    </div>
  );
}

function InputTypesMockup({ t }) {
  const inputTypes = [
    { type: 'text', placeholder: 'Enter text' },
    { type: 'email', placeholder: 'name@example.com' },
    { type: 'password', placeholder: '••••••••' },
    { type: 'number', placeholder: '42' },
    { type: 'tel', placeholder: '+20 100 000 0000' },
    { type: 'url', placeholder: 'https://example.com' },
    { type: 'date', placeholder: '2026-06-17' },
    { type: 'color', placeholder: '#6366f1' },
    { type: 'file', placeholder: 'Choose file...' },
  ];
  return (
    <div className="w-full max-w-lg mx-auto space-y-2">
      <div className="flex items-center justify-center gap-1.5 mb-3 flex-wrap">
        <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-brand-50 dark:bg-brand-900/30 text-brand-500 dark:text-brand-400 ring-1 ring-brand-200/50 dark:ring-brand-800/50">type="text"</span>
        <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-emerald-50 dark:bg-emerald-900/30 text-emerald-500 dark:text-emerald-400 ring-1 ring-emerald-200/50 dark:ring-emerald-800/50">type="email"</span>
        <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-amber-50 dark:bg-amber-900/30 text-amber-500 dark:text-amber-400 ring-1 ring-amber-200/50 dark:ring-amber-800/50">type="password"</span>
      </div>
      <div className="p-5 bg-white/80 dark:bg-slate-900/50 rounded-xl border border-slate-200/60 dark:border-slate-800/80 mockup-card bg-micro-grid space-y-3">
        {inputTypes.map((item, i) => (
          <div key={i} className="flex items-center gap-3">
            <span className="w-16 text-[10px] font-mono font-semibold text-slate-400 dark:text-slate-500 shrink-0">{item.type}</span>
            {item.type === 'color' ? (
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg border border-slate-200 dark:border-slate-700" style={{ backgroundColor: '#6366f1' }} />
                <span className="text-xs font-mono text-slate-500 dark:text-slate-400">#6366f1</span>
              </div>
            ) : item.type === 'file' ? (
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700">
                <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
                <span className="text-xs text-slate-400">{t({ en: 'Choose file...', ar: 'اختر ملفاً...' })}</span>
              </div>
            ) : (
              <div className="flex-1 h-9 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 px-3 flex items-center">
                <span className="text-xs text-slate-400">{item.placeholder}</span>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center text-[10px] text-slate-400 dark:text-slate-500 gap-2">
        <span className="w-2 h-2 rounded bg-brand-500" />
        <span>{t({ en: 'Each type enables browser-native validation and input mode', ar: 'كل نوع يُفعّل التحقق المضمن في المتصفح ووضع الإدخال المناسب' })}</span>
      </div>
    </div>
  );
}

function EmojiGridMockup({ t }) {
  const emojis = [
    { char: '😀', code: 'U+1F600' }, { char: '😂', code: 'U+1F602' }, { char: '😍', code: 'U+1F60D' },
    { char: '🤔', code: 'U+1F914' }, { char: '😎', code: 'U+1F60E' }, { char: '🙌', code: 'U+1F64C' },
    { char: '💪', code: 'U+1F4AA' }, { char: '🔥', code: 'U+1F525' }, { char: '⭐', code: 'U+2B50' },
    { char: '❤️', code: 'U+2764' }, { char: '🎉', code: 'U+1F389' }, { char: '✅', code: 'U+2705' },
    { char: '📚', code: 'U+1F4DA' }, { char: '💡', code: 'U+1F4A1' }, { char: '🎯', code: 'U+1F3AF' },
    { char: '🌍', code: 'U+1F30D' }, { char: '🚀', code: 'U+1F680' }, { char: '📝', code: 'U+1F4DD' },
    { char: '🎨', code: 'U+1F3A8' }, { char: '🏆', code: 'U+1F3C6' }, { char: '👨‍💻', code: 'U+1F468' },
    { char: '📱', code: 'U+1F4F1' }, { char: '🔒', code: 'U+1F512' }, { char: '🔄', code: 'U+1F504' },
    { char: '👋', code: 'U+1F44B' }, { char: '✨', code: 'U+2728' }, { char: '🎵', code: 'U+1F3B5' },
    { char: '🌈', code: 'U+1F308' }, { char: '🍕', code: 'U+1F355' }, { char: '☕', code: 'U+2615' },
    { char: '⚡', code: 'U+26A1' }, { char: '🎮', code: 'U+1F3AE' }, { char: '📸', code: 'U+1F4F8' },
    { char: '🔧', code: 'U+1F527' }, { char: '💎', code: 'U+1F48E' }, { char: '🎓', code: 'U+1F393' },
  ];
  return (
    <div className="w-full max-w-lg mx-auto">
      <div className="grid grid-cols-6 gap-2">
        {emojis.map((emoji, i) => (
          <div key={i} className="aspect-square rounded-xl border border-slate-200/60 dark:border-slate-800/80 bg-white/80 dark:bg-slate-900/50 mockup-card flex flex-col items-center justify-center p-1 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
            <span className="text-xl sm:text-2xl leading-none">{emoji.char}</span>
            <span className="text-[7px] font-mono text-slate-400 dark:text-slate-500 mt-0.5 truncate max-w-full px-0.5">{emoji.code}</span>
          </div>
        ))}
      </div>
      <p className="mt-3 text-[10px] text-center text-slate-400 dark:text-slate-500 font-mono">
        {t({ en: 'Emoji rendered via HTML entity or UTF-8 character — cross-platform compatible', ar: 'الإيموجي يُعرض عبر كيان HTML أو حرف UTF-8 — متوافق عبر جميع المنصات' })}
      </p>
    </div>
  );
}

function FilePathsMockup({ t }) {
  return (
    <div className="w-full max-w-lg mx-auto space-y-4">
      <div className="p-5 bg-white/80 dark:bg-slate-900/50 rounded-xl border border-slate-200/60 dark:border-slate-800/80 mockup-card bg-micro-grid">
        <div className="text-[11px] font-semibold text-slate-400 dark:text-slate-500 mb-3 uppercase tracking-wider">{t({ en: 'File System Tree', ar: 'شجرة نظام الملفات' })}</div>
        <div className="font-mono text-[12px] space-y-1.5">
          <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
            <svg className="w-4 h-4 text-amber-500" fill="currentColor" viewBox="0 0 24 24"><path d="M3 3h18v18H3V3zm2 2v14h14V5H5zm2 2h10v2H7V7zm0 4h10v2H7v-2zm0 4h7v2H7v-2z"/></svg>
            <span className="font-semibold text-slate-700 dark:text-slate-300">project/</span>
          </div>
          <div className="ml-6 flex items-center gap-2 text-slate-500 dark:text-slate-400">
            <svg className="w-4 h-4 text-amber-500" fill="currentColor" viewBox="0 0 24 24"><path d="M3 3h18v18H3V3zm2 2v14h14V5H5zm2 2h10v2H7V7zm0 4h10v2H7v-2zm0 4h7v2H7v-2z"/></svg>
            <span className="text-slate-700 dark:text-slate-300">css/</span>
          </div>
          <div className="ml-12 flex items-center gap-2 text-slate-400 dark:text-slate-500">
            <span className="w-4 h-4 flex items-center justify-center text-[10px]">└─</span>
            <span className="text-emerald-500">style.css</span>
          </div>
          <div className="ml-6 flex items-center gap-2 text-slate-500 dark:text-slate-400">
            <svg className="w-4 h-4 text-amber-500" fill="currentColor" viewBox="0 0 24 24"><path d="M3 3h18v18H3V3zm2 2v14h14V5H5zm2 2h10v2H7V7zm0 4h10v2H7v-2zm0 4h7v2H7v-2z"/></svg>
            <span className="text-slate-700 dark:text-slate-300">images/</span>
          </div>
          <div className="ml-12 flex items-center gap-2 text-slate-400 dark:text-slate-500">
            <span className="w-4 h-4 flex items-center justify-center text-[10px]">├─</span>
            <span className="text-emerald-500">logo.png</span>
          </div>
          <div className="ml-12 flex items-center gap-2 text-slate-400 dark:text-slate-500">
            <span className="w-4 h-4 flex items-center justify-center text-[10px]">└─</span>
            <span className="text-emerald-500">banner.jpg</span>
          </div>
          <div className="ml-6 flex items-center gap-2 text-slate-400 dark:text-slate-500">
            <span className="w-4 h-4 flex items-center justify-center text-[10px]">└─</span>
            <span className="font-semibold text-brand-500">index.html</span>
            <span className="text-[9px] text-brand-400/60">← {t({ en: 'current file', ar: 'الملف الحالي' })}</span>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center gap-4 text-[10px] text-slate-400 dark:text-slate-500">
        <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded bg-amber-500" /> {t({ en: 'Directory', ar: 'مجلد' })}</span>
        <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded bg-emerald-500" /> {t({ en: 'File', ar: 'ملف' })}</span>
        <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded bg-brand-500" /> {t({ en: 'Current', ar: 'حالي' })}</span>
      </div>
    </div>
  );
}

function DirectionMockup({ t }) {
  return (
    <div className="w-full max-w-lg mx-auto space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="p-5 bg-white/80 dark:bg-slate-900/50 rounded-xl border border-slate-200/60 dark:border-slate-800/80 mockup-card" dir="ltr">
          <div className="text-[11px] font-semibold text-slate-400 dark:text-slate-500 mb-3 uppercase tracking-wider">{t({ en: 'LTR (English)', ar: 'LTR (إنجليزي)' })}</div>
          <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">This text flows left-to-right. The first word is on the left.</p>
          <div className="mt-3 flex gap-1">
            <span className="w-6 h-6 rounded bg-brand-200 dark:bg-brand-800" />
            <span className="w-6 h-6 rounded bg-brand-300 dark:bg-brand-700" />
            <span className="w-6 h-6 rounded bg-brand-400 dark:bg-brand-600" />
            <span className="w-6 h-6 rounded bg-brand-500" />
          </div>
        </div>
        <div className="p-5 bg-white/80 dark:bg-slate-900/50 rounded-xl border border-slate-200/60 dark:border-slate-800/80 mockup-card" dir="rtl">
          <div className="text-[11px] font-semibold text-slate-400 dark:text-slate-500 mb-3 uppercase tracking-wider">{t({ en: 'RTL (Arabic)', ar: 'RTL (عربي)' })}</div>
          <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">هذا النص يتدفق من اليمين إلى اليسار. الكلمة الأولى على اليمين.</p>
          <div className="mt-3 flex gap-1">
            <span className="w-6 h-6 rounded bg-brand-500" />
            <span className="w-6 h-6 rounded bg-brand-400 dark:bg-brand-600" />
            <span className="w-6 h-6 rounded bg-brand-300 dark:bg-brand-700" />
            <span className="w-6 h-6 rounded bg-brand-200 dark:bg-brand-800" />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center text-[10px] text-slate-400 dark:text-slate-500">
        <span className="w-2 h-2 rounded bg-brand-500" />
        <span className="ml-1.5">{t({ en: 'dir="ltr" (default) vs dir="rtl" — both in one HTML document', ar: 'dir="ltr" (افتراضي) مقابل dir="rtl" — كلاهما في مستند HTML واحد' })}</span>
      </div>
    </div>
  );
}

function CheckboxesMockup({ t }) {
  return (
    <div className="w-full max-w-lg mx-auto p-5 bg-white/80 dark:bg-slate-900/50 rounded-xl border border-slate-200/60 dark:border-slate-800/80 mockup-card bg-micro-grid space-y-3">
      <div className="flex items-center gap-3">
        <input type="checkbox" id="c1" className="w-4 h-4 rounded border-slate-300 dark:border-slate-600 text-brand-500 focus:ring-brand-500/30" defaultChecked />
        <label htmlFor="c1" className="text-sm text-slate-700 dark:text-slate-300">{t({ en: 'HTML Fundamentals', ar: 'أساسيات HTML' })}</label>
      </div>
      <div className="flex items-center gap-3">
        <input type="checkbox" id="c2" className="w-4 h-4 rounded border-slate-300 dark:border-slate-600 text-brand-500 focus:ring-brand-500/30" defaultChecked />
        <label htmlFor="c2" className="text-sm text-slate-700 dark:text-slate-300">{t({ en: 'CSS Styling', ar: 'تنسيق CSS' })}</label>
      </div>
      <div className="flex items-center gap-3">
        <input type="checkbox" id="c3" className="w-4 h-4 rounded border-slate-300 dark:border-slate-600 text-brand-500 focus:ring-brand-500/30" />
        <label htmlFor="c3" className="text-sm text-slate-700 dark:text-slate-300">{t({ en: 'JavaScript Basics', ar: 'أساسيات JavaScript' })}</label>
      </div>
      <div className="flex items-center gap-3">
        <input type="checkbox" id="c4" className="w-4 h-4 rounded border-slate-300 dark:border-slate-600 text-brand-500 focus:ring-brand-500/30" disabled />
        <label htmlFor="c4" className="text-sm text-slate-400 dark:text-slate-500 line-through">{t({ en: 'Advanced Topics (locked)', ar: 'مواضيع متقدمة (مقفول)' })}</label>
      </div>
      <div className="flex items-center justify-center text-[10px] text-slate-400 dark:text-slate-500 gap-2 mt-2">
        <span className="w-2 h-2 rounded bg-brand-500" />
        <span>{t({ en: 'Checkboxes allow multiple selections — unlike radio buttons', ar: 'خانات الاختيار تسمح بتحديدات متعددة — على عكس أزرار الراديو' })}</span>
      </div>
    </div>
  );
}

function RadioMockup({ t }) {
  const [selected, setSelected] = useState('option1');
  return (
    <div className="w-full max-w-lg mx-auto p-5 bg-white/80 dark:bg-slate-900/50 rounded-xl border border-slate-200/60 dark:border-slate-800/80 mockup-card bg-micro-grid space-y-3">
      {[1, 2, 3].map((n) => (
        <label key={n} className="flex items-center gap-3 cursor-pointer">
          <input
            type="radio" name="radio-group" value={`option${n}`}
            checked={selected === `option${n}`}
            onChange={(e) => setSelected(e.target.value)}
            className="w-4 h-4 border-slate-300 dark:border-slate-600 text-brand-500 focus:ring-brand-500/30"
          />
          <span className="text-sm text-slate-700 dark:text-slate-300">
            {t({ en: `Option ${n}`, ar: `خيار ${n}` })}
          </span>
          {selected === `option${n}` && (
            <span className="text-[10px] font-mono text-brand-500 bg-brand-50 dark:bg-brand-900/30 px-1.5 py-0.5 rounded">
              {t({ en: 'selected', ar: 'مختار' })}
            </span>
          )}
        </label>
      ))}
      <div className="flex items-center justify-center text-[10px] text-slate-400 dark:text-slate-500 gap-2 mt-2">
        <span className="w-2 h-2 rounded bg-brand-500" />
        <span>{t({ en: 'Only ONE radio button can be selected at a time within the same name group', ar: 'يمكن اختيار زر راديو واحد فقط في نفس مجموعة الاسم' })}</span>
      </div>
    </div>
  );
}

function SelectMockup({ t }) {
  return (
    <div className="w-full max-w-lg mx-auto p-5 bg-white/80 dark:bg-slate-900/50 rounded-xl border border-slate-200/60 dark:border-slate-800/80 mockup-card bg-micro-grid space-y-4">
      <div className="space-y-1.5">
        <label className="block text-[11px] font-medium text-slate-500 dark:text-slate-400">{t({ en: 'Choose a country', ar: 'اختر دولة' })}</label>
        <div className="relative">
          <select className="w-full h-10 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 px-3 text-sm text-slate-700 dark:text-slate-300 appearance-none cursor-pointer focus:ring-2 focus:ring-brand-500/30 focus:border-brand-500">
            <option value="">{t({ en: '-- Select --', ar: '-- اختر --' })}</option>
            <option value="eg">{t({ en: 'Egypt', ar: 'مصر' })}</option>
            <option value="sa">{t({ en: 'Saudi Arabia', ar: 'المملكة العربية السعودية' })}</option>
            <option value="ae">{t({ en: 'UAE', ar: 'الإمارات' })}</option>
            <option value="us">{t({ en: 'United States', ar: 'الولايات المتحدة' })}</option>
            <option value="gb">{t({ en: 'United Kingdom', ar: 'المملكة المتحدة' })}</option>
          </select>
          <svg className="absolute top-1/2 -translate-y-1/2 right-3 rtl:right-auto rtl:left-3 w-4 h-4 text-slate-400 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>
        </div>
      </div>
      <div className="flex items-center justify-center text-[10px] text-slate-400 dark:text-slate-500 gap-2">
        <span className="w-2 h-2 rounded bg-brand-500" />
        <span>{t({ en: '<select> creates a dropdown — <option> defines each choice', ar: '<select> ينشئ قائمة منسدلة — <option> يحدد كل خيار' })}</span>
      </div>
    </div>
  );
}

function RangeMockup({ t }) {
  const [val, setVal] = useState(50);
  return (
    <div className="w-full max-w-lg mx-auto p-5 bg-white/80 dark:bg-slate-900/50 rounded-xl border border-slate-200/60 dark:border-slate-800/80 mockup-card bg-micro-grid space-y-4">
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400">{t({ en: 'Volume', ar: 'مستوى الصوت' })}</span>
          <span className="text-sm font-mono font-semibold text-brand-500 dark:text-brand-400">{val}%</span>
        </div>
        <input type="range" min="0" max="100" value={val} onChange={(e) => setVal(Number(e.target.value))} className="w-full accent-brand-500 h-2 rounded-full appearance-none cursor-pointer bg-slate-200 dark:bg-slate-700" />
        <div className="flex justify-between text-[10px] text-slate-400">
          <span>{t({ en: '0%', ar: '٠٪' })}</span>
          <span>{t({ en: '100%', ar: '١٠٠٪' })}</span>
        </div>
      </div>
      <div className="flex items-center justify-center text-[10px] text-slate-400 dark:text-slate-500 gap-2">
        <span className="w-2 h-2 rounded bg-brand-500" />
        <span>{t({ en: 'type="range" — slider control with min, max, and value attributes', ar: 'type="range" — عنصر تحكم منزلق مع سمات min و max و value' })}</span>
      </div>
    </div>
  );
}

function FieldsetMockup({ t }) {
  return (
    <div className="w-full max-w-lg mx-auto">
      <div className="border border-slate-200/60 dark:border-slate-800/80 rounded-xl p-5 bg-white/80 dark:bg-slate-900/50 mockup-card bg-micro-grid">
        <fieldset className="border border-slate-300 dark:border-slate-700 rounded-xl p-5 space-y-3">
          <legend className="px-3 text-sm font-semibold text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-900 rounded-lg">
            {t({ en: 'Personal Information', ar: 'المعلومات الشخصية' })}
          </legend>
          <div className="space-y-1.5">
            <div className="h-9 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 px-3 flex items-center">
              <span className="text-xs text-slate-400">{t({ en: 'Full Name', ar: 'الاسم الكامل' })}</span>
            </div>
            <div className="h-9 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 px-3 flex items-center">
              <span className="text-xs text-slate-400">{t({ en: 'Email Address', ar: 'البريد الإلكتروني' })}</span>
            </div>
          </div>
        </fieldset>
        <fieldset className="border border-slate-300 dark:border-slate-700 rounded-xl p-5 mt-4 space-y-3">
          <legend className="px-3 text-sm font-semibold text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-900 rounded-lg">
            {t({ en: 'Payment Details', ar: 'معلومات الدفع' })}
          </legend>
          <div className="h-9 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 px-3 flex items-center">
            <span className="text-xs text-slate-400">{t({ en: 'Card Number', ar: 'رقم البطاقة' })}</span>
          </div>
        </fieldset>
      </div>
      <div className="mt-3 flex items-center justify-center text-[10px] text-slate-400 dark:text-slate-500 gap-2">
        <span className="w-2 h-2 rounded bg-brand-500" />
        <span>{t({ en: '<fieldset> groups related inputs — <legend> provides the group label for accessibility', ar: '<fieldset> يجمع المدخلات المرتبطة — <legend> يقدم تسمية المجموعة للوصولية' })}</span>
      </div>
    </div>
  );
}

function LanguageCodesMockup({ t }) {
  const codes = [
    { code: 'ar', lang: { en: 'Arabic', ar: 'العربية' }, native: 'العربية' },
    { code: 'en', lang: { en: 'English', ar: 'الإنجليزية' }, native: 'English' },
    { code: 'fr', lang: { en: 'French', ar: 'الفرنسية' }, native: 'Français' },
    { code: 'de', lang: { en: 'German', ar: 'الألمانية' }, native: 'Deutsch' },
    { code: 'es', lang: { en: 'Spanish', ar: 'الإسبانية' }, native: 'Español' },
    { code: 'zh', lang: { en: 'Chinese', ar: 'الصينية' }, native: '中文' },
    { code: 'ja', lang: { en: 'Japanese', ar: 'اليابانية' }, native: '日本語' },
    { code: 'ru', lang: { en: 'Russian', ar: 'الروسية' }, native: 'Русский' },
    { code: 'hi', lang: { en: 'Hindi', ar: 'الهندية' }, native: 'हिन्दी' },
    { code: 'pt', lang: { en: 'Portuguese', ar: 'البرتغالية' }, native: 'Português' },
  ];
  return (
    <div className="w-full max-w-lg mx-auto">
      <div className="rounded-xl border border-slate-200/60 dark:border-slate-800/80 overflow-hidden mockup-card">
        <div className="grid grid-cols-3 gap-px bg-slate-200/60 dark:bg-slate-800/80">
          <div className="px-3 py-2 text-[10px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-900">{t({ en: 'Code', ar: 'الرمز' })}</div>
          <div className="px-3 py-2 text-[10px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-900">{t({ en: 'Language', ar: 'اللغة' })}</div>
          <div className="px-3 py-2 text-[10px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-900">{t({ en: 'Native', ar: 'الاسم الأصلي' })}</div>
          {codes.map((item, i) => (
            <>
              <div key={`code-${i}`} className="px-3 py-2 text-xs font-mono font-semibold text-brand-500 dark:text-brand-400 bg-white dark:bg-slate-900/50">{item.code}</div>
              <div key={`lang-${i}`} className="px-3 py-2 text-xs text-slate-600 dark:text-slate-400 bg-white dark:bg-slate-900/50">{t(item.lang)}</div>
              <div key={`native-${i}`} className="px-3 py-2 text-xs text-slate-500 dark:text-slate-500 bg-white dark:bg-slate-900/50">{item.native}</div>
            </>
          ))}
        </div>
      </div>
      <div className="mt-3 flex items-center justify-center text-[10px] text-slate-400 dark:text-slate-500">
        <span>{t({ en: 'ISO 639-1 language codes — used in lang="..." attribute', ar: 'رموز اللغة ISO 639-1 — تُستخدم في السمة lang="..."' })}</span>
      </div>
    </div>
  );
}

function LabelsMockup({ t }) {
  return (
    <div className="w-full max-w-lg mx-auto p-5 bg-white/80 dark:bg-slate-900/50 rounded-xl border border-slate-200/60 dark:border-slate-800/80 mockup-card bg-micro-grid space-y-4">
      <div className="space-y-1.5">
        <label htmlFor="name-field" className="block text-[11px] font-medium text-slate-500 dark:text-slate-400">{t({ en: 'Your Name', ar: 'اسمك' })} <span className="text-red-400">*</span></label>
        <div className="h-10 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 px-3 flex items-center focus-within:ring-2 focus-within:ring-brand-500/30 focus-within:border-brand-500">
          <span className="text-xs text-slate-400">{t({ en: 'Enter your full name', ar: 'أدخل اسمك الكامل' })}</span>
        </div>
        <p className="text-[10px] text-slate-400">{t({ en: 'Click on "Your Name" text to focus the input field', ar: 'انقر على نص "اسمك" لتركيز حقل الإدخال' })}</p>
      </div>
      <div className="space-y-1.5">
        <label className="flex items-center gap-2 text-[11px] font-medium text-slate-500 dark:text-slate-400">
          <input type="checkbox" className="rounded border-slate-300 dark:border-slate-600 text-brand-500 focus:ring-brand-500/30" />
          {t({ en: 'I agree to the terms (clicking label toggles checkbox)', ar: 'أوافق على الشروط (النقر على التسمية يبدّل خانة الاختيار)' })}
        </label>
      </div>
      <div className="flex items-center justify-center text-[10px] text-slate-400 dark:text-slate-500 gap-2">
        <span className="w-2 h-2 rounded bg-brand-500" />
        <span>{t({ en: '<label for="id"> associates text with <input id="id"> — mandatory for WCAG', ar: '<label for="id"> يربط النص بـ <input id="id"> — إلزامي لـ WCAG' })}</span>
      </div>
    </div>
  );
}

function ButtonsMockup({ t }) {
  return (
    <div className="w-full max-w-lg mx-auto p-5 bg-white/80 dark:bg-slate-900/50 rounded-xl border border-slate-200/60 dark:border-slate-800/80 mockup-card bg-micro-grid space-y-4">
      <div className="text-[11px] font-semibold text-slate-400 dark:text-slate-500 mb-2 uppercase tracking-wider">{t({ en: 'Button Types', ar: 'أنواع الأزرار' })}</div>
      <div className="flex flex-wrap gap-3">
        <button className="px-5 py-2.5 rounded-xl bg-brand-500 hover:bg-brand-600 text-white text-sm font-semibold shadow-sm shadow-brand-500/20 transition-all hover:-translate-y-0.5 press-effect">{t({ en: 'Submit', ar: 'إرسال' })}</button>
        <button className="px-5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 text-sm font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 transition-all hover:-translate-y-0.5 press-effect">{t({ en: 'Reset', ar: 'إعادة تعيين' })}</button>
        <button className="px-5 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-400 text-sm font-semibold cursor-not-allowed" disabled>{t({ en: 'Disabled', ar: 'معطل' })}</button>
      </div>
      <div className="flex flex-wrap gap-3">
        <button className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-semibold shadow-sm transition-all hover:-translate-y-0.5 press-effect">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M5 13l4 4L19 7"/></svg>
          {t({ en: 'Save', ar: 'حفظ' })}
        </button>
        <button className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-rose-500 hover:bg-rose-600 text-white text-sm font-semibold shadow-sm transition-all hover:-translate-y-0.5 press-effect">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M6 18L18 6M6 6l12 12"/></svg>
          {t({ en: 'Delete', ar: 'حذف' })}
        </button>
      </div>
      <div className="flex items-center justify-center text-[10px] text-slate-400 dark:text-slate-500 gap-2">
        <span className="w-2 h-2 rounded bg-brand-500" />
        <span>{t({ en: '<button type="submit|reset|button"> vs <input type="submit"> — button allows HTML content inside', ar: '<button> يسمح بمحتوى HTML داخله على عكس <input>' })}</span>
      </div>
    </div>
  );
}

export default function VisualDiagram({ mockupType = 'text', mockup }) {
  const { t } = useLanguage();

  return (
    <figure className="my-8">
      <div className="rounded-2xl border border-slate-200/60 dark:border-slate-800/80 bg-white dark:bg-slate-900/50 p-6 sm:p-8 mockup-card">
        <div className="text-center mb-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-500 dark:text-brand-400 bg-brand-50 dark:bg-brand-900/30 rounded-lg ring-1 ring-brand-200/50 dark:ring-brand-800/50">
            <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>
            {t({ en: 'Visual Diagram', ar: 'رسم توضيحي' })}
          </span>
        </div>

        {mockupType === 'html-syntax' && <HtmlSyntaxMockup mockup={mockup} t={t} />}
        {mockupType === 'hyperlinks' && <HyperlinksMockup t={t} />}
        {mockupType === 'media' && <MediaMockup t={t} />}
        {mockupType === 'form' && <FormMockup t={t} />}
        {mockupType === 'semantic' && <PageLayoutDiagram mockup={mockup} t={t} />}
        {mockupType === 'symbols-grid' && <SymbolsGridMockup mockup={mockup} t={t} />}
        {mockupType === 'iframe' && <IframeMockup t={t} />}
        {mockupType === 'nested-tags' && <NestedTagsMockup t={t} />}
        {mockupType === 'input-types' && <InputTypesMockup t={t} />}
        {mockupType === 'emoji-grid' && <EmojiGridMockup t={t} />}
        {mockupType === 'file-paths' && <FilePathsMockup t={t} />}
        {mockupType === 'direction' && <DirectionMockup t={t} />}
        {mockupType === 'checkboxes' && <CheckboxesMockup t={t} />}
        {mockupType === 'radio' && <RadioMockup t={t} />}
        {mockupType === 'select' && <SelectMockup t={t} />}
        {mockupType === 'range' && <RangeMockup t={t} />}
        {mockupType === 'fieldset' && <FieldsetMockup t={t} />}
        {mockupType === 'language-codes' && <LanguageCodesMockup t={t} />}
        {mockupType === 'labels' && <LabelsMockup t={t} />}
        {mockupType === 'buttons' && <ButtonsMockup t={t} />}

        {mockup?.caption && (
          <figcaption className="mt-5 text-sm text-center text-slate-500 dark:text-slate-400 leading-relaxed max-w-lg mx-auto">
            {t(mockup.caption)}
          </figcaption>
        )}
      </div>
    </figure>
  );
}
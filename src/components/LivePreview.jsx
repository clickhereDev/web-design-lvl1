import { useMemo } from 'react';
import { useLanguage } from '../context/LanguageContext';

function wrapInDocument(html) {
  const isFullDoc = /<!DOCTYPE html/i.test(html) || /<html[\s>]/i.test(html);
  if (isFullDoc) return html;
  return `<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
<body style="font-family:system-ui,sans-serif;padding:16px;margin:0;line-height:1.6">${html}</body>
</html>`;
}

export default function LivePreview({ code, customHtml }) {
  const { lang } = useLanguage();
  const html = useMemo(() => {
    const src = customHtml || code || '';
    return wrapInDocument(src);
  }, [code, customHtml]);

  return (
    <div className="my-8">
      <div className="rounded-xl border border-slate-200/60 dark:border-slate-800/80 bg-white dark:bg-slate-900/50 overflow-hidden shadow-sm">
        <div className="flex items-center gap-2 px-4 py-2.5 bg-slate-50 dark:bg-slate-900/80 border-b border-slate-200/60 dark:border-slate-800/80">
          <svg className="w-3.5 h-3.5 text-emerald-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
          </svg>
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            {lang === 'ar' ? 'نتيجة الكود' : 'Output Preview'}
          </span>
        </div>
        <div className="bg-white dark:bg-[#0b0f19]">
          <iframe
            title="Live Preview"
            srcDoc={html}
            className="w-full border-0"
            style={{ minHeight: 180, height: 'auto' }}
            sandbox="allow-same-origin"
            onLoad={(e) => {
              const doc = e.target.contentDocument;
              if (doc) {
                const body = doc.body;
                const height = body ? body.scrollHeight : 180;
                e.target.style.height = Math.max(180, height + 32) + 'px';
                const links = doc.querySelectorAll('a');
                links.forEach((a) => { a.target = '_blank'; a.rel = 'noopener'; });
              }
            }}
          />
        </div>
      </div>
    </div>
  );
}
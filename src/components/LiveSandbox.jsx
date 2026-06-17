import { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';

function wrapInDocument(html) {
  if (/<!DOCTYPE html/i.test(html) || /<html[\s>]/i.test(html)) return html;
  return `<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
<body style="font-family:system-ui,sans-serif;padding:16px;margin:0;line-height:1.6">${html}</body>
</html>`;
}

export default function LiveSandbox({ boilerplateCode }) {
  const { lang, t } = useLanguage();
  const { resolved } = useTheme();
  const [code, setCode] = useState(boilerplateCode || '');
  const editorRef = useRef(null);
  const lineNumRef = useRef(null);

  const isDark = resolved === 'dark';

  const docHtml = useMemo(() => wrapInDocument(code), [code]);

  const lineCount = code.split('\n').length;

  const autoResize = useCallback(() => {
    const ta = editorRef.current;
    if (!ta) return;
    ta.style.height = 'auto';
    ta.style.height = ta.scrollHeight + 'px';
  }, []);

  useEffect(() => {
    setCode(boilerplateCode || '');
  }, [boilerplateCode]);

  useEffect(() => {
    autoResize();
  }, [code, autoResize]);

  const handleChange = (e) => {
    setCode(e.target.value);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
          {t({ en: 'HTML Playground', ar: 'معمل الكود التفاعلي' })}
        </span>
        <div className="flex items-center gap-2">
          <span className="flex items-center gap-1 text-[10px] text-slate-400">
            <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
            {t({ en: 'Real-time', ar: 'فوري' })}
          </span>
        </div>
      </div>

      <div className={`rounded-xl border overflow-hidden transition-colors duration-200 ${
        isDark ? 'border-slate-700/80' : 'border-slate-200/60'
      }`}>
        {/* Editor header */}
        <div className={`flex items-center gap-2 px-4 py-2 border-b ${
          isDark ? 'bg-slate-900/80 border-slate-700/60' : 'bg-slate-50 border-slate-200/60'
        }`}>
          <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
          <span className={`ml-auto text-[10px] font-mono ${
            isDark ? 'text-slate-500' : 'text-slate-400'
          }`}>
            {t({ en: 'Write your code here', ar: 'اكتب الكود هنا' })}
          </span>
        </div>

        {/* Editor + Line numbers */}
        <div className="flex flex-row items-stretch">
          {/* Line numbers */}
          <div
            ref={lineNumRef}
            className={`select-none text-right px-3 py-3 font-mono text-sm leading-6 whitespace-pre border-r ${
              isDark ? 'bg-slate-950 text-slate-600 border-slate-800' : 'bg-slate-50 text-slate-300 border-slate-200'
            }`}
            style={{ minWidth: 44 }}
            aria-hidden="true"
          >
            {Array.from({ length: lineCount || 1 }, (_, i) => i + 1).join('\n')}
          </div>

          {/* Textarea */}
          <textarea
            ref={editorRef}
            value={code}
            onChange={handleChange}
            spellCheck={false}
            className={`flex-1 py-3 px-4 font-mono text-sm leading-6 whitespace-pre overflow-x-auto overflow-y-hidden outline-none border-0 transition-colors duration-200 ${
              isDark
                ? 'bg-slate-950 text-slate-200 placeholder-slate-600'
                : 'bg-white text-slate-800 placeholder-slate-300'
            }`}
            style={{ minHeight: 120 }}
            placeholder={t({ en: 'Type your HTML code here...', ar: 'اكتب كود HTML هنا...' })}
          />
        </div>
      </div>

      {/* Live Output */}
      <div className={`rounded-xl border overflow-hidden shadow-sm transition-colors duration-200 ${
        isDark ? 'border-slate-700/80' : 'border-slate-200/60'
      }`}>
        <div className={`flex items-center gap-2 px-4 py-2.5 border-b ${
          isDark ? 'bg-slate-900/80 border-slate-700/60' : 'bg-slate-50 border-slate-200/60'
        }`}>
          <svg className={`w-3.5 h-3.5 ${isDark ? 'text-emerald-400' : 'text-emerald-500'}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
          <span className={`text-xs font-semibold uppercase tracking-wider ${
            isDark ? 'text-slate-400' : 'text-slate-500'
          }`}>
            {t({ en: 'Live Output', ar: 'النتيجة الحية' })}
          </span>
          {code !== (boilerplateCode || '') && (
            <span className={`ml-auto text-[10px] px-2 py-0.5 rounded font-medium ${
              isDark ? 'bg-emerald-900/40 text-emerald-400' : 'bg-emerald-50 text-emerald-600'
            }`}>
              {t({ en: 'Modified', ar: 'مُعدّل' })}
            </span>
          )}
        </div>
        <div className={isDark ? 'bg-[#0b0f19]' : 'bg-white'}>
          <iframe
            title="Live Sandbox Output"
            srcDoc={docHtml}
            className="w-full border-0"
            style={{ minHeight: 160, height: 'auto' }}
            sandbox="allow-same-origin"
            onLoad={(e) => {
              const doc = e.target.contentDocument;
              if (doc) {
                const h = doc.body ? doc.body.scrollHeight : 160;
                e.target.style.height = Math.max(160, h + 32) + 'px';
                doc.querySelectorAll('a').forEach((a) => { a.target = '_blank'; a.rel = 'noopener'; });
              }
            }}
          />
        </div>
      </div>
    </div>
  );
}
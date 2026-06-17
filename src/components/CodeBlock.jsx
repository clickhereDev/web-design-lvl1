import { useLanguage } from '../context/LanguageContext';

export default function CodeBlock({ code, language = 'html' }) {
  const { t } = useLanguage();

  return (
    <section className="my-8">
      <div className="flex items-center justify-between mb-3">
        <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/30 rounded-lg ring-1 ring-emerald-200/50 dark:ring-emerald-800/50">
          {t({ en: 'Code Example', ar: 'مثال كود حقيقي' })}
        </span>
        <span className="text-xs font-mono text-slate-400 dark:text-slate-500 uppercase tracking-wider">{language}</span>
      </div>
      <div className="relative rounded-2xl bg-[#1a1b26] border border-slate-700/60 overflow-hidden code-block-wrapper shadow-lg shadow-black/10 dark:shadow-black/30">
        {/* Window chrome dots */}
        <div className="flex items-center gap-1.5 px-5 pt-3.5 pb-2.5 border-b border-slate-700/40">
          <span className="w-3 h-3 rounded-full bg-red-500/80" aria-hidden="true" />
          <span className="w-3 h-3 rounded-full bg-yellow-500/80" aria-hidden="true" />
          <span className="w-3 h-3 rounded-full bg-green-500/80" aria-hidden="true" />
          <span className="ml-2 rtl:ml-0 rtl:mr-2 text-[10px] font-mono text-slate-500">{language === 'html' ? 'index.html' : 'styles.css'}</span>
        </div>
        <pre
          className="overflow-x-auto p-5 sm:p-6 text-sm leading-relaxed scrollbar-thin"
          dir="ltr"
        >
          <code className="font-mono text-[#a9b1d6] whitespace-pre">{code}</code>
        </pre>
        {/* Subtle bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-t from-[#1a1b26] to-transparent pointer-events-none" />
      </div>
    </section>
  );
}

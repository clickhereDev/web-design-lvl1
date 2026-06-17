import { useLanguage } from '../context/LanguageContext';

function resolveExplanation(item, lang) {
  if (item.explanationEn !== undefined) {
    return lang === 'ar' ? (item.explanationAr || item.explanationEn) : item.explanationEn;
  }
  if (item.en !== undefined) {
    return lang === 'ar' ? (item.ar || item.en) : item.en;
  }
  return '';
}

export default function BreakdownSection({ breakdown }) {
  const { lang } = useLanguage();

  if (!breakdown || !Array.isArray(breakdown) || breakdown.length === 0) return null;

  return (
    <div className="space-y-3">
      {breakdown.map((item, i) => {
        const lineOrElement = item.lineOrElement || item.lines || '';
        const explanation = resolveExplanation(item, lang);

        return (
          <div
            key={i}
            className="rounded-2xl border border-slate-200/60 dark:border-slate-800/80 bg-white dark:bg-slate-900/50 overflow-hidden transition-all duration-200 hover:shadow-md hover:shadow-slate-200/50 dark:hover:shadow-black/10"
          >
            <div className="px-4 sm:px-6 py-3 bg-slate-50 dark:bg-slate-900/80 border-b border-slate-200/60 dark:border-slate-800/80 flex items-center gap-3">
              <span className="shrink-0 flex items-center justify-center w-5 h-5 rounded bg-brand-50 dark:bg-brand-900/30 text-brand-500 dark:text-brand-400 text-[10px] font-bold ring-1 ring-brand-200/50 dark:ring-brand-800/50">
                {i + 1}
              </span>
              <code className="text-sm font-mono font-semibold text-brand-500 dark:text-brand-400 leading-relaxed break-all">
                {lineOrElement}
              </code>
            </div>
            <div className="px-4 sm:px-6 py-4">
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm sm:text-base whitespace-pre-line">
                {explanation}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

import { useLanguage } from '../../context/LanguageContext';
import translations from '../../data/translations';

export default function Footer() {
  const { t } = useLanguage();
  const T = translations;

  return (
    <footer className="border-t border-[var(--color-border-color)] bg-muted" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
          <p className="text-sm text-secondary leading-relaxed">
            {t(T.footer.copyright)}
          </p>
          <div className="flex items-center gap-3 flex-wrap justify-center">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-full border border-accent-300/60 dark:border-accent-700/60 bg-accent-50 dark:bg-accent-900/20 text-accent-600 dark:text-accent-400">
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>
              HTML Reference Hub
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-full border border-sky-300/60 dark:border-sky-700/60 bg-sky-50 dark:bg-sky-900/20 text-sky-600 dark:text-sky-400">
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
              React + Tailwind
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

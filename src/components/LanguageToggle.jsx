import { Languages } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function LanguageToggle() {
  const { lang, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="relative flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-medium press-effect
        bg-slate-100 dark:bg-slate-800/60
        text-slate-600 dark:text-slate-300
        hover:bg-slate-200 dark:hover:bg-slate-700/60
        border border-slate-200/60 dark:border-slate-700/60
        transition-all duration-200
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2
        dark:focus-visible:ring-offset-[#0b0f19]"
      aria-label={`Current language: ${lang === 'en' ? 'English' : 'Arabic'}. Click to switch.`}
    >
      <Languages className="w-4 h-4" aria-hidden="true" />
      <span className="font-semibold tracking-wide uppercase">{lang}</span>
    </button>
  );
}

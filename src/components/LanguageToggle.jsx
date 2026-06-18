import { Languages } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function LanguageToggle() {
  const { lang, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="relative flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-black tracking-widest uppercase press-effect
        glass-hud text-[var(--color-text-primary)]
        hover:border-[var(--color-brand-primary)] hover:shadow-[0_0_20px_color-mix(in srgb,var(--color-brand-primary)_30%,transparent)]
        transition-all duration-300
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-primary)] focus-visible:ring-offset-2"
      aria-label={`Current language: ${lang === 'en' ? 'English' : 'Arabic'}. Click to switch.`}
    >
      <Languages className="w-4 h-4" aria-hidden="true" />
      <span className="font-semibold tracking-wide uppercase">{lang}</span>
    </button>
  );
}

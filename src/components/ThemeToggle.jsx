import { Sun, Moon, Monitor } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';

const ICON_MAP = {
  light: Sun,
  dark: Moon,
  system: Monitor,
};

export default function ThemeToggle() {
  const { mode, toggleTheme } = useTheme();
  const { t } = useLanguage();
  const Icon = ICON_MAP[mode];

  return (
    <button
      onClick={toggleTheme}
      className="relative flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-medium press-effect
        bg-slate-100 dark:bg-slate-800/60
        text-slate-600 dark:text-slate-300
        hover:bg-slate-200 dark:hover:bg-slate-700/60
        border border-slate-200/60 dark:border-slate-700/60
        transition-all duration-200
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2
        dark:focus-visible:ring-offset-[#0b0f19]"
      aria-label={`Current theme: ${mode}. Click to change.`}
    >
      <Icon className="w-4 h-4" aria-hidden="true" />
      <span className="hidden sm:inline">{t({ en: mode.charAt(0).toUpperCase() + mode.slice(1), ar: { light: 'فاتح', dark: 'داكن', system: 'النظام' }[mode] })}</span>
    </button>
  );
}

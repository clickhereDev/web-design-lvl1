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
      className="relative flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-black tracking-widest uppercase press-effect
        glass-hud text-[var(--color-text-primary)]
        hover:border-[var(--color-brand-primary)] hover:shadow-[0_0_20px_color-mix(in srgb,var(--color-brand-primary)_30%,transparent)]
        transition-all duration-300
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-primary)] focus-visible:ring-offset-2"
      aria-label={`Current theme: ${mode}. Click to change.`}
    >
      <Icon className="w-4 h-4" aria-hidden="true" />
      <span className="hidden sm:inline">{t({ en: mode.charAt(0).toUpperCase() + mode.slice(1), ar: { light: 'فاتح', dark: 'داكن', system: 'النظام' }[mode] })}</span>
    </button>
  );
}

import { BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import ThemeToggle from '../ThemeToggle';
import LanguageToggle from '../LanguageToggle';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/60 dark:border-slate-800/80 glass">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            to="/"
            className="flex items-center gap-2.5 text-lg font-bold text-brand-500 hover:text-brand-600 dark:text-brand-400 dark:hover:text-brand-300 transition-all duration-200 press-effect"
          >
            <BookOpen className="w-6 h-6" aria-hidden="true" />
            <span>web-design-lvl1</span>
          </Link>

          <nav className="flex items-center gap-2 sm:gap-3" aria-label="Configuration">
            <ThemeToggle />
            <LanguageToggle />
          </nav>
        </div>
      </div>
    </header>
  );
}

import { BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import ThemeToggle from '../ThemeToggle';
import LanguageToggle from '../LanguageToggle';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full glass">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-[68px]">
          <Link
            to="/"
            className="group flex items-center gap-2.5 text-lg font-bold text-brand-500 dark:text-brand-400 hover:opacity-80 transition-all duration-200 press-effect"
          >
            <div className="w-8 h-8 rounded-lg bg-brand-50 dark:bg-brand-900/30 flex items-center justify-center ring-1 ring-brand-200/50 dark:ring-brand-700/50 group-hover:ring-brand-300/80 dark:group-hover:ring-brand-600/80 transition-all duration-300">
              <BookOpen className="w-5 h-5 text-brand-500 dark:text-brand-400" aria-hidden="true" />
            </div>
            <span>Web Design Track</span>
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

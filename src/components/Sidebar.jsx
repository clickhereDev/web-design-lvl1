import { ChevronDown, ChevronLeft, BookMarked } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useNavigation } from '../context/NavigationContext';
import { chapters as htmlChapters, getTopicsByChapter as getHtmlTopics } from '../data/topics';
import { cssChapters, getCssTopicsByChapter } from '../data/cssTopics';
import translations from '../data/translations';

function ChapterSection({ chapter, topics, activeTopicId, selectTopic, t, T, defaultOpen }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center gap-2 px-3 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/40 transition-all duration-200 press-effect"
      >
        <BookMarked className="w-3 h-3 shrink-0" />
        <span className="flex-1 text-left rtl:text-right">{t(chapter.title)}</span>
        <span className="text-[10px] text-slate-400 dark:text-slate-500 font-mono">{topics.length}</span>
        {isOpen ? <ChevronDown className="w-3 h-3" /> : <ChevronLeft className="w-3 h-3" />}
      </button>
      {isOpen && (
        <ul className="space-y-0.5 mt-0.5 ml-2 rtl:mr-2 border-l-2 rtl:border-l-0 rtl:border-r-2 border-slate-100 dark:border-slate-800/60 pl-2 rtl:pr-2" role="list">
          {topics.map((topic) => (
            <li key={topic.id}>
              <button
                onClick={() => selectTopic(topic.id)}
                className={`w-full text-left rtl:text-right px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 press-effect
                  ${activeTopicId === topic.id
                    ? 'bg-brand-50 dark:bg-brand-900/30 text-brand-600 dark:text-brand-300 font-semibold sidebar-active'
                    : 'text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800/40 hover:text-slate-700 dark:hover:text-slate-200'
                  }
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2
                  dark:focus-visible:ring-offset-[#0b0f19]`}
                aria-current={activeTopicId === topic.id ? 'true' : undefined}
              >
                {t(topic.title)}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function Sidebar() {
  const { t } = useLanguage();
  const { activeTopicId, activeTrack, selectTopic } = useNavigation();
  const T = translations;

  const chapters = activeTrack === 'css' ? cssChapters : htmlChapters;
  const getTopics = activeTrack === 'css' ? getCssTopicsByChapter : getHtmlTopics;

  const allChapterTopics = chapters.map((ch) => ({
    chapter: ch,
    topics: getTopics(ch.id),
  }));
  const firstChapterId = chapters.length > 0 ? chapters[0].id : null;

  return (
    <aside className="w-full" aria-label={`${activeTrack === 'css' ? 'CSS' : 'HTML'} documentation topics`}>
      <nav className="space-y-1">
        {allChapterTopics.map(({ chapter, topics }) => (
          <ChapterSection
            key={chapter.id}
            chapter={chapter}
            topics={topics}
            activeTopicId={activeTopicId}
            selectTopic={selectTopic}
            t={t}
            T={T}
            defaultOpen={chapter.id === firstChapterId}
          />
        ))}
      </nav>
    </aside>
  );
}
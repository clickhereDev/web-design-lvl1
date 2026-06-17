import { ArrowLeft, BookOpen, FileText, Hash, Code2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { useNavigation } from '../context/NavigationContext';
import { getTopicById as getHtmlTopic, chapters as htmlChapters, getTopicsByChapter as getHtmlTopics } from '../data/topics';
import { getCssTopicById, cssChapters, getCssTopicsByChapter } from '../data/cssTopics';
import translations from '../data/translations';
import Sidebar from './Sidebar';
import TopicContent from './TopicContent';

export default function DocumentationHub() {
  const { lang, t } = useLanguage();
  const { activeTopicId, activeTrack, selectTrack } = useNavigation();
  const navigate = useNavigate();
  const T = translations;

  const getTopic = activeTrack === 'css' ? getCssTopicById : getHtmlTopic;
  const chapters = activeTrack === 'css' ? cssChapters : htmlChapters;
  const getTopics = activeTrack === 'css' ? getCssTopicsByChapter : getHtmlTopics;

  const activeTopic = activeTopicId ? getTopic(activeTopicId) : null;
  const totalTopics = chapters.reduce((sum, ch) => sum + getTopics(ch.id).length, 0);

  return (
    <div className="flex-1 flex flex-col" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      <div className="border-b border-slate-200/60 dark:border-slate-800/80 bg-slate-50/80 dark:bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5">
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-all duration-200 press-effect"
          >
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            {t(T.docs.backToHome)}
          </button>
        </div>
      </div>

      <div className="flex-1 mx-auto w-full px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8 py-8 max-w-7xl mx-auto">
          <div className="w-full lg:w-72 shrink-0">
            <div className="lg:sticky lg:top-24 lg:max-h-[calc(100vh-8rem)] lg:overflow-y-auto sidebar-scroll">
              <div className="flex gap-1 mb-4 px-3">
                <button
                  onClick={() => selectTrack('html')}
                  className={`flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all duration-200 press-effect ${
                    activeTrack === 'html'
                      ? 'bg-brand-50 dark:bg-brand-900/30 text-brand-600 dark:text-brand-300 shadow-sm ring-1 ring-brand-200/50 dark:ring-brand-800/50'
                      : 'text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/40'
                  }`}
                >
                  <Code2 className="w-3.5 h-3.5" aria-hidden="true" />
                  {t(T.docs.tracks.html)}
                </button>
                <button
                  onClick={() => selectTrack('css')}
                  className={`flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all duration-200 press-effect ${
                    activeTrack === 'css'
                      ? 'bg-brand-50 dark:bg-brand-900/30 text-brand-600 dark:text-brand-300 shadow-sm ring-1 ring-brand-200/50 dark:ring-brand-800/50'
                      : 'text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/40'
                  }`}
                >
                  <Hash className="w-3.5 h-3.5" aria-hidden="true" />
                  {t(T.docs.tracks.css)}
                </button>
              </div>

              <div className="flex items-center justify-between mb-1 px-3">
                <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100 tracking-tight">
                  {t(T.docs.title)}
                </h2>
                <FileText className="w-4 h-4 text-slate-400 dark:text-slate-500" aria-hidden="true" />
              </div>
              <p className="text-xs text-slate-400 dark:text-slate-500 mb-6 px-3 flex items-center gap-1.5">
                <Hash className="w-3 h-3" aria-hidden="true" />
                {t({
                  en: activeTopic
                    ? `${totalTopics} topics · viewing "${t(activeTopic.title)}"`
                    : `${totalTopics} topics total`,
                  ar: activeTopic
                    ? `${totalTopics} موضوع · الآن: "${t(activeTopic.title)}"`
                    : `إجمالي ${totalTopics} موضوع`,
                })}
              </p>
              <Sidebar />
            </div>
          </div>

          <div className="flex-1 min-w-0 max-w-3xl">
            {activeTopic ? (
              <TopicContent topic={activeTopic} />
            ) : (
              <div className="flex flex-col items-center justify-center py-20 text-center">
                <div className="w-16 h-16 rounded-2xl bg-slate-100 dark:bg-slate-800/60 flex items-center justify-center mb-6 shadow-sm">
                  <BookOpen className="w-8 h-8 text-slate-400 dark:text-slate-500" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-2 tracking-tight">
                  {t(T.docs.noTopicSelected)}
                </h3>
                <p className="text-slate-500 dark:text-slate-400 max-w-sm leading-relaxed">
                  {t({
                    en: 'Choose a topic from the sidebar to view its documentation, code examples, and detailed breakdown.',
                    ar: 'اختر موضوعًا من القائمة الجانبية لعرض توثيقه وأمثلته البرمجية وتحليله التفصيلي.',
                  })}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

import { ArrowRight, ArrowLeft, BookOpen, Users, Target, CheckCircle, GraduationCap, Cpu, Layers, FileCode, Palette, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import translations from '../data/translations';

function SectionHeading({ id, children }) {
  return (
    <h2 id={id} className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
      {children}
    </h2>
  );
}

function Card({ icon: Icon, title, children, className = '' }) {
  return (
    <div className={`group relative p-6 sm:p-8 rounded-2xl border border-slate-200/60 dark:border-slate-800/80 bg-white dark:bg-slate-900/50 hover:shadow-lg hover:shadow-slate-200/50 dark:hover:shadow-black/20 transition-all duration-300 hover:-translate-y-0.5 ${className}`}>
      <div className="flex items-start gap-4">
        <div className="shrink-0 w-10 h-10 rounded-xl bg-brand-50 dark:bg-brand-900/30 flex items-center justify-center ring-1 ring-brand-200/50 dark:ring-brand-800/50">
          <Icon className="w-5 h-5 text-brand-500 dark:text-brand-400" aria-hidden="true" />
        </div>
        <div className="min-w-0">
          {title && <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-2">{title}</h3>}
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{children}</p>
        </div>
      </div>
    </div>
  );
}

function ValueCard({ icon: Icon, title, description }) {
  return (
    <div className="p-6 rounded-2xl border border-slate-200/60 dark:border-slate-800/80 bg-white dark:bg-slate-900/50 hover:shadow-md hover:shadow-slate-200/50 dark:hover:shadow-black/20 transition-all duration-300 hover:-translate-y-0.5">
      <div className="w-12 h-12 rounded-xl bg-brand-50 dark:bg-brand-900/30 flex items-center justify-center mb-4 ring-1 ring-brand-200/50 dark:ring-brand-800/50">
        <Icon className="w-6 h-6 text-brand-500 dark:text-brand-400" aria-hidden="true" />
      </div>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-2">{title}</h3>
      <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{description}</p>
    </div>
  );
}

export default function LandingPage() {
  const { lang, t } = useLanguage();
  const navigate = useNavigate();
  const T = translations;
  const isRtl = lang === 'ar';
  const Arrow = isRtl ? ArrowLeft : ArrowRight;

  return (
    <main>
      {/* ─── Hero ─── */}
      <section className="relative overflow-hidden border-b border-slate-200/60 dark:border-slate-800/80 bg-dot-grid">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-50/80 via-slate-50/50 to-cta-50/40 dark:from-brand-950/30 dark:via-slate-950/30 dark:to-cta-950/20 pointer-events-none" />
        <div className="absolute top-0 -left-40 w-96 h-96 bg-brand-200/20 dark:bg-brand-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 -right-40 w-96 h-96 bg-cta-200/20 dark:bg-cta-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 mb-6 text-sm font-medium rounded-full bg-brand-50 dark:bg-brand-900/30 text-brand-600 dark:text-brand-300 border border-brand-200/60 dark:border-brand-800/60 shadow-sm">
              <Sparkles className="w-4 h-4" aria-hidden="true" />
              {t(T.hero.badge)}
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100 leading-[1.1] mb-6">
              {t(T.hero.title)}
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 leading-relaxed mb-10 max-w-2xl">
              {t(T.hero.subtitle)}
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => navigate('/docs')}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-base font-semibold press-effect
                  bg-cta-500 hover:bg-cta-600 text-white shadow-lg shadow-cta-500/30 dark:shadow-cta-500/20
                  hover:shadow-xl hover:shadow-cta-500/40 dark:hover:shadow-cta-500/30
                  hover:-translate-y-0.5 transition-all duration-200
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2
                  dark:focus-visible:ring-offset-[#0b0f19]"
              >
                {t(T.hero.cta)}
                <Arrow className="w-5 h-5" aria-hidden="true" />
              </button>
              <a
                href="#course-identity"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-base font-medium press-effect
                  bg-white dark:bg-slate-800/60 text-slate-700 dark:text-slate-300
                  border border-slate-200/60 dark:border-slate-700/60
                  hover:bg-slate-50 dark:hover:bg-slate-800 hover:shadow-sm hover:-translate-y-0.5
                  transition-all duration-200"
              >
                {t(T.hero.secondaryCta)}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="course-identity" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <div className="max-w-4xl">
          <SectionHeading id="course-identity-heading">{t(T.courseIdentity.title)}</SectionHeading>
          <p className="mt-8 text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            {t(T.courseIdentity.content)}
          </p>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <Card icon={FileCode} title={isRtl ? 'هندسة دلالية' : 'Semantic Engineering'}>
            {isRtl ? 'فهم عميق لبنية HTML الدلالية ومعايير الوصول WCAG' : 'Deep understanding of semantic HTML structure and WCAG accessibility standards'}
          </Card>
          <Card icon={Layers} title={isRtl ? 'بناء النماذج' : 'Forms & Validation'}>
            {isRtl ? 'إتقان جميع أنواع حقول الإدخال والتحقق المضمنة في HTML5' : 'Master all HTML5 input types, validation patterns, and form structuring'}
          </Card>
          <Card icon={Cpu} title={isRtl ? 'عقلية هندسية' : 'Engineering Mindset'}>
            {isRtl ? 'التفكير في الأنماط والهياكل — وليس فقط الأكواد' : 'Think in patterns and structures — not just code'}
          </Card>
          <Card icon={GraduationCap} title={isRtl ? 'مستوى أكاديمي' : 'Academic Grade'}>
            {isRtl ? 'نفس الأساس المستخدم في أفضل برامج علوم الحاسوب الجامعية' : 'The same foundation used in top university CS programs'}
          </Card>
        </div>
      </section>

      <section className="border-t border-slate-200/60 dark:border-slate-800/80 bg-slate-100/50 dark:bg-slate-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <SectionHeading id="goals-heading">{t(T.goals.title)}</SectionHeading>
          <div className="mt-10 space-y-3">
            {T.goals.items.map((item, i) => (
              <div key={i} className="flex items-start gap-4 p-4 sm:p-6 rounded-2xl bg-white dark:bg-slate-900/50 border border-slate-200/60 dark:border-slate-800/80 hover:shadow-sm transition-all duration-200">
                <div className="shrink-0 w-8 h-8 rounded-full bg-brand-50 dark:bg-brand-900/30 flex items-center justify-center mt-0.5 ring-1 ring-brand-200/50 dark:ring-brand-800/50">
                  <span className="text-sm font-bold text-brand-500 dark:text-brand-400">{i + 1}</span>
                </div>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">{t(item)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <SectionHeading id="audience-heading">{t(T.audience.title)}</SectionHeading>
        <div className="mt-10 grid sm:grid-cols-2 gap-4 sm:gap-6">
          {T.audience.items.map((item, i) => (
            <div key={i} className="flex items-start gap-4 p-6 rounded-2xl bg-white dark:bg-slate-900/50 border border-slate-200/60 dark:border-slate-800/80 hover:shadow-sm transition-all duration-200">
              <Users className="w-6 h-6 text-brand-500 shrink-0 mt-1" aria-hidden="true" />
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{t(item)}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-slate-200/60 dark:border-slate-800/80 bg-slate-100/50 dark:bg-slate-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <SectionHeading id="prerequisites-heading">{t(T.prerequisites.title)}</SectionHeading>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {T.prerequisites.items.map((item, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white dark:bg-slate-900/50 border border-slate-200/60 dark:border-slate-800/80 text-center hover:shadow-sm transition-all duration-200 hover:-translate-y-0.5">
                <div className="w-12 h-12 rounded-full bg-emerald-50 dark:bg-emerald-900/30 flex items-center justify-center mx-auto mb-4 ring-1 ring-emerald-200/50 dark:ring-emerald-800/50">
                  <CheckCircle className="w-6 h-6 text-emerald-500 dark:text-emerald-400" aria-hidden="true" />
                </div>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{t(item)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <SectionHeading id="outcomes-heading">{t(T.outcomes.title)}</SectionHeading>
        <div className="mt-10 grid sm:grid-cols-2 gap-6">
          {T.outcomes.items.map((item, i) => (
            <ValueCard key={i} icon={[Layers, FileCode, Palette, Target][i]} title={t(item.title)} description={t(item)} />
          ))}
        </div>
        <p className="mt-10 text-center text-slate-500 dark:text-slate-400 italic max-w-2xl mx-auto leading-relaxed">
          {t(T.outcomes.certification)}
        </p>
        <div className="mt-10 text-center">
          <button
            onClick={() => navigate('/docs')}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-base font-semibold press-effect
              bg-cta-500 hover:bg-cta-600 text-white shadow-lg shadow-cta-500/30 dark:shadow-cta-500/20
              hover:shadow-xl hover:shadow-cta-500/40 dark:hover:shadow-cta-500/30
              hover:-translate-y-0.5 transition-all duration-200
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2
              dark:focus-visible:ring-offset-[#0b0f19]"
          >
            {t(T.hero.cta)}
            <Arrow className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>
      </section>
    </main>
  );
}

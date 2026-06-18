import { ArrowRight, ArrowLeft, Users, Target, CheckCircle, GraduationCap, Cpu, Layers, FileCode, Palette, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import translations from '../data/translations';

function SectionHeading({ id, children }) {
  return (
    <h2 id={id} className="text-3xl sm:text-4xl font-black tracking-tighter text-[var(--color-text-primary)] leading-[1.1] section-decoration pb-6 uppercase">
      {children}
    </h2>
  );
}

function MeshPattern() {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.15] dark:opacity-[0.1]"
      viewBox="0 0 800 600"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        <filter id="glow">
          <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
        <pattern id="mesh" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
          <circle cx="20" cy="20" r="3" fill="var(--color-brand-primary)" filter="url(#glow)" />
          <circle cx="80" cy="20" r="2.5" fill="var(--color-brand-primary)" filter="url(#glow)" />
          <circle cx="50" cy="60" r="4" fill="var(--color-brand-primary)" filter="url(#glow)" />
          <circle cx="100" cy="80" r="2.5" fill="var(--color-brand-primary)" filter="url(#glow)" />
          <circle cx="20" cy="100" r="2" fill="var(--color-brand-primary)" filter="url(#glow)" />
          <circle cx="70" cy="110" r="3" fill="var(--color-brand-primary)" filter="url(#glow)" />
          <line x1="20" y1="20" x2="80" y2="20" stroke="var(--color-brand-primary)" strokeWidth="1.5" strokeOpacity="0.4" />
          <line x1="20" y1="20" x2="50" y2="60" stroke="var(--color-brand-primary)" strokeWidth="1.5" strokeOpacity="0.4" />
          <line x1="80" y1="20" x2="50" y2="60" stroke="var(--color-brand-primary)" strokeWidth="1.5" strokeOpacity="0.4" />
          <line x1="50" y1="60" x2="100" y2="80" stroke="var(--color-brand-primary)" strokeWidth="1.5" strokeOpacity="0.4" />
          <line x1="50" y1="60" x2="20" y2="100" stroke="var(--color-brand-primary)" strokeWidth="1.5" strokeOpacity="0.4" />
          <line x1="100" y1="80" x2="70" y2="110" stroke="var(--color-brand-primary)" strokeWidth="1.5" strokeOpacity="0.4" />
          <line x1="20" y1="100" x2="70" y2="110" stroke="var(--color-brand-primary)" strokeWidth="1.5" strokeOpacity="0.4" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#mesh)" />
    </svg>
  );
}

function GlowingCard({ icon: Icon, title, children, className = '' }) {
  return (
    <div className={`group glass-hud hud-corner-brackets p-6 sm:p-8 rounded-xl border border-[var(--color-brand-primary)]/20 hover:border-[var(--color-brand-primary)] hover:shadow-2xl hover:shadow-[var(--color-brand-primary)]/10 hover:scale-[1.03] transition-all duration-300 ${className}`}>
      <div className="flex items-start gap-4 sm:gap-5">
        <div className="shrink-0 w-12 h-12 rounded-lg bg-[var(--color-brand-primary)]/10 flex items-center justify-center ring-1 ring-[var(--color-brand-primary)]/30 group-hover:ring-[var(--color-brand-primary)] group-hover:bg-[var(--color-brand-primary)]/20 transition-all duration-300">
          <Icon className="w-6 h-6 text-[var(--color-brand-primary)]" aria-hidden="true" />
        </div>
        <div className="min-w-0">
          {title && <h3 className="text-xl font-bold text-[var(--color-text-primary)] mb-3 tracking-tight">{title}</h3>}
          <p className="text-[var(--color-text-secondary)] leading-relaxed text-[15px]">{children}</p>
        </div>
      </div>
    </div>
  );
}

function ThinCard({ icon: Icon, children }) {
  return (
    <div className="group glass-hud hud-corner-brackets flex items-start gap-4 sm:gap-5 p-6 sm:p-8 rounded-xl border border-[var(--color-brand-primary)]/20 hover:border-[var(--color-brand-primary)] hover:shadow-xl hover:shadow-[var(--color-brand-primary)]/5 transition-all duration-300">
      <div className="shrink-0 w-12 h-12 rounded-lg bg-[var(--color-brand-primary)]/10 flex items-center justify-center ring-1 ring-[var(--color-brand-primary)]/30 group-hover:ring-[var(--color-brand-primary)] group-hover:bg-[var(--color-brand-primary)]/20 transition-all duration-300">
        <Icon className="w-6 h-6 text-[var(--color-brand-primary)]" aria-hidden="true" />
      </div>
      <p className="text-[var(--color-text-secondary)] leading-relaxed text-[15px]  font-medium">{children}</p>
    </div>
  );
}

function NeonValueCard({ icon: Icon, title, description }) {
  return (
    <div className="group glass-hud hud-corner-brackets p-6 sm:p-8 rounded-xl neon-glow">
      <div className="w-14 h-14 rounded-lg bg-[var(--color-brand-primary)]/10 flex items-center justify-center mb-6 ring-1 ring-[var(--color-brand-primary)]/30 group-hover:ring-[var(--color-brand-primary)] group-hover:bg-[var(--color-brand-primary)]/20 transition-all duration-300">
        <Icon className="w-8 h-8 text-[var(--color-brand-primary)]" aria-hidden="true" />
      </div>
      <h3 className="text-2xl font-bold text-[var(--color-text-primary)] mb-3 tracking-tighter uppercase">{title}</h3>
      <p className="text-[var(--color-text-primary)]/80 leading-relaxed text-[15px] ">{description}</p>
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
    <main className="bg-[var(--color-bg-base)] selection:bg-[var(--color-brand-primary)] selection:text-white">
      {/* ─── Hero ─── */}
      <section className="relative overflow-hidden border-b border-[var(--color-brand-primary)]/20 min-h-[80vh] flex items-center">
        <MeshPattern />

        {/* Aggressive Glow Orbs */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-[var(--color-brand-primary)]/20 to-[var(--color-brand-accent)]/15 rounded-full blur-[140px] pointer-events-none animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-gradient-to-br from-[var(--color-brand-accent)]/15 to-[var(--color-brand-primary)]/20 rounded-full blur-[120px] pointer-events-none animate-pulse-glow" style={{ animationDelay: '2s' }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-5 py-2 mb-8 text-xs font-black tracking-[0.2em] rounded-full bg-[var(--color-brand-primary)]/10 text-[var(--color-brand-primary)] border border-[var(--color-brand-primary)]/30 backdrop-blur-md uppercase">
              <Sparkles className="w-4 h-4" aria-hidden="true" />
              {t(T.hero.badge)}
            </span>
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tighter text-[var(--color-text-primary)] leading-[0.95] mb-8 uppercase">
              {t(T.hero.title)}
            </h1>
            <p className="text-xl sm:text-2xl text-[var(--color-text-primary)]/90 leading-tight mb-12 max-w-2xl font-medium">
              {t(T.hero.subtitle)}
            </p>
            <div className="flex flex-wrap gap-6">
              <button
                onClick={() => navigate('/docs')}
                className="group relative inline-flex items-center gap-3 px-10 py-5 rounded-full text-lg font-black press-effect
                  btn-neon-gradient text-white overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-3">
                  {t(T.hero.cta)}
                  <Arrow className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" aria-hidden="true" />
                </span>
              </button>
              <a
                href="#course-identity"
                className="group glass-hud inline-flex items-center gap-3 px-10 py-5 rounded-full text-lg font-bold press-effect
                  text-[var(--color-text-primary)] border border-[var(--color-brand-primary)]/40
                  hover:border-[var(--color-brand-primary)] hover:shadow-[0_0_30px_color-mix(in srgb,var(--color-brand-primary)_20%,transparent)]
                  transition-all duration-300"
              >
                {t(T.hero.secondaryCta)}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Section 1: What Is This Course? ─── */}
      <section id="course-identity" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 relative">
        <div className="max-w-4xl relative z-10">
          <SectionHeading id="course-identity-heading">{t(T.courseIdentity.title)}</SectionHeading>
          <p className="mt-8 text-xl text-[var(--color-text-primary)]/90 leading-relaxed font-medium">
            {t(T.courseIdentity.content)}
          </p>
        </div>
        <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
          <GlowingCard icon={FileCode} title={isRtl ? 'هندسة دلالية' : 'Semantic Engineering'}>
            {isRtl ? 'فهم عميق لبنية HTML الدلالية ومعايير الوصول WCAG' : 'Deep understanding of semantic HTML structure and WCAG accessibility standards'}
          </GlowingCard>
          <GlowingCard icon={Layers} title={isRtl ? 'بناء النماذج' : 'Forms & Validation'}>
            {isRtl ? 'إتقان جميع أنواع حقول الإدخال والتحقق المضمنة في HTML5' : 'Master all HTML5 input types, validation patterns, and form structuring'}
          </GlowingCard>
          <GlowingCard icon={Cpu} title={isRtl ? 'عقلية هندسية' : 'Engineering Mindset'}>
            {isRtl ? 'التفكير في الأنماط والهياكل — وليس فقط الأكواد' : 'Think in patterns and structures — not just code'}
          </GlowingCard>
          <GlowingCard icon={GraduationCap} title={isRtl ? 'مستوى أكاديمي' : 'Academic Grade'}>
            {isRtl ? 'نفس الأساس المستخدم في أفضل برامج علوم الحاسوب الجامعية' : 'The same foundation used in top university CS programs'}
          </GlowingCard>
        </div>
      </section>

      {/* ─── Section 2: Core Goals (Timeline) ─── */}
      <section className="relative border-y border-[var(--color-brand-primary)]/20 bg-[var(--color-bg-base)] overflow-hidden">
        {/* Section Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--color-brand-primary)]/5 rounded-full blur-[160px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 relative">
          <SectionHeading id="goals-heading">{t(T.goals.title)}</SectionHeading>
          <div className="mt-20 timeline-track space-y-12 sm:space-y-20">
            {T.goals.items.map((item, i) => (
              <div key={i} className="group relative flex flex-col sm:flex-row items-start gap-8 sm:gap-16">
                {/* HUD Timeline badge */}
                <div className="hud-badge shrink-0">
                  <span className="relative z-10">{i + 1}</span>
                </div>
                {/* Content card */}
                <div className="flex-1 w-full glass-hud hud-corner-brackets p-8 sm:p-10 rounded-2xl border border-[var(--color-brand-primary)]/20 hover:border-[var(--color-brand-primary)] hover:shadow-[0_0_40px_color-mix(in srgb,var(--color-brand-primary)_15%,transparent)] transition-all duration-500">
                  <p className="text-[var(--color-text-primary)] leading-relaxed text-lg sm:text-xl font-bold tracking-tight">{t(item)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Section 3: Who Is This For? ─── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <SectionHeading id="audience-heading">{t(T.audience.title)}</SectionHeading>
        <div className="mt-16 grid sm:grid-cols-2 gap-6">
          {T.audience.items.map((item, i) => (
            <ThinCard key={i} icon={Users}>
              {t(item)}
            </ThinCard>
          ))}
        </div>
      </section>

      {/* ─── Section 4: Prerequisites ─── */}
      <section className="relative border-t border-[var(--color-brand-primary)]/20 bg-[var(--color-bg-base)] overflow-hidden">
        <div className="absolute inset-0 bg-dot-grid opacity-[0.05] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 relative">
          <SectionHeading id="prerequisites-heading">{t(T.prerequisites.title)}</SectionHeading>
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {T.prerequisites.items.map((item, i) => (
              <div
                key={i}
                className="group glass-hud hud-corner-brackets p-8 rounded-2xl text-center prereq-glow-aggressive transition-all duration-500 hover:scale-105"
              >
                <div className="w-16 h-16 rounded-full bg-[var(--color-brand-primary)]/10 flex items-center justify-center mx-auto mb-6 ring-1 ring-[var(--color-brand-primary)]/30 group-hover:ring-[var(--color-brand-primary)] group-hover:bg-[var(--color-brand-primary)]/20 transition-all duration-300">
                  <CheckCircle className="w-8 h-8 text-[var(--color-brand-primary)]" aria-hidden="true" />
                </div>
                <p className="text-[var(--color-text-primary)]/90 leading-relaxed  font-bold tracking-tight">{t(item)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Section 5: Learning Outcomes ─── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 relative overflow-hidden">
        {/* Immersive ambient lighting */}
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[var(--color-brand-accent)]/5 rounded-full blur-[140px] pointer-events-none" />
        
        <SectionHeading id="outcomes-heading">{t(T.outcomes.title)}</SectionHeading>
        <div className="mt-16 grid sm:grid-cols-2 gap-8 lg:gap-12 relative z-10">
          {T.outcomes.items.map((item, i) => (
            <NeonValueCard key={i} icon={[Layers, FileCode, Palette, Target][i]} title={t(item.title)} description={t(item)} />
          ))}
        </div>
        <div className="mt-24 text-center relative z-10">
          <p className="text-[var(--color-text-primary)] opacity-80 font-bold italic max-w-2xl mx-auto leading-relaxed mb-12 text-lg">
            {t(T.outcomes.certification)}
          </p>
          <button
            onClick={() => navigate('/docs')}
            className="group relative inline-flex items-center gap-3 px-12 py-6 rounded-full text-xl font-black press-effect
              btn-neon-gradient text-white"
          >
            {t(T.hero.cta)}
            <Arrow className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" aria-hidden="true" />
          </button>
        </div>
      </section>
    </main>
  );
}

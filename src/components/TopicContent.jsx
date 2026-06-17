import { useLanguage } from '../context/LanguageContext';
import RichExplanation from './RichExplanation';
import CodeBlock from './CodeBlock';
import LivePreview from './LivePreview';
import LiveSandbox from './LiveSandbox';
import BreakdownSection from './BreakdownSection';
import { DEFAULT_BOILERPLATE } from '../data/topics';
import { DEFAULT_CSS_BOILERPLATE } from '../data/cssTopics';

function TierBadge({ number, label }) {
  return (
    <div className="flex items-center gap-2 mb-3">
      <span className="shrink-0 flex items-center justify-center w-7 h-7 rounded-lg bg-brand-50 dark:bg-brand-900/30 text-brand-500 dark:text-brand-400 text-xs font-bold ring-1 ring-brand-200/50 dark:ring-brand-800/50">
        {number}
      </span>
      <span className="text-xs font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500">
        {label}
      </span>
    </div>
  );
}

export default function TopicContent({ topic }) {
  const { lang, t } = useLanguage();

  if (!topic) return null;

  const isCss = topic.category === 'css';
  const boilerplate = topic.boilerplateCode || (isCss ? DEFAULT_CSS_BOILERPLATE : DEFAULT_BOILERPLATE);
  const codeLang = isCss ? 'css' : 'html';

  return (
    <article className="max-w-none space-y-12">
      {/* Tier 1: Explanation */}
      <section className="tier-section">
        <TierBadge number={1} label={t({ en: 'Conceptual Explanation', ar: 'الوصف المستفيض' })} />
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100 mb-6">
          {t(topic.title)}
        </h1>
        <RichExplanation text={t(topic.explanation)} lang={lang} />
      </section>

      {/* ═══ Segment A: Static Code + Output Preview ═══ */}
      <div className="space-y-10">
        {/* A1: Static Code */}
        <section className="tier-section" style={{ animationDelay: '0.1s' }}>
          <TierBadge number={2} label={t({ en: 'Code Example', ar: 'مثال كود حقيقي' })} />
          <CodeBlock code={topic.codeSample} language={codeLang} />
        </section>

        {/* A2: Instant Output Preview */}
        <section className="tier-section" style={{ animationDelay: '0.15s' }}>
          <TierBadge number={3} label={t({ en: 'Browser Preview', ar: 'معاينة المتصفح' })} />
          <LivePreview code={topic.codeSample} />
        </section>
      </div>

      {/* ═══ Segment B: Interactive Live Code Sandbox ═══ */}
      <section className="tier-section" style={{ animationDelay: '0.2s' }}>
        <TierBadge number={4} label={t(isCss
          ? { en: 'CSS Playground', ar: 'معمل CSS التفاعلي' }
          : { en: 'HTML Playground', ar: 'معمل HTML التفاعلي' }
        )} />
        <div className="rounded-2xl border border-slate-200/60 dark:border-slate-800/80 bg-white dark:bg-slate-900/50 p-6 sm:p-8 mockup-card">
          <LiveSandbox boilerplateCode={boilerplate} />
        </div>
      </section>

      {/* ═══ Segment C: Code Breakdown ═══ */}
      <section className="tier-section" style={{ animationDelay: '0.25s' }}>
        <TierBadge number={5} label={t({ en: 'Code Breakdown', ar: 'شرح تفصيلي للكود' })} />
        <BreakdownSection breakdown={topic.codeBreakdown} />
      </section>
    </article>
  );
}
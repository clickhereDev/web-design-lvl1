import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import {
  ArrowLeft, BookOpen, Code2, ClipboardList, Calendar, Award, Target, CheckCircle,
  Users, Clock, Mic, HelpCircle, BarChart3, ChevronDown, ChevronUp, GitBranch, Flag,
  UsersRound, ListChecks, GraduationCap, Lightbulb, Sparkles, MessageSquare, Brain,
  Presentation, Eye, FileCode, CheckSquare, AlignLeft
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import lecturesData, { SOFT_SKILLS } from '../data/instructor';

const TABS = { RULES: 'rules', SCHEDULE: 'schedule' };

function TabButton({ active, onClick, icon: Icon, label }) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold transition-all duration-200 press-effect ${
        active
          ? 'bg-brand-50 dark:bg-brand-900/30 text-brand-600 dark:text-brand-300 shadow-sm ring-1 ring-brand-200/50 dark:ring-brand-800/50'
          : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/40'
      }`}
    >
      <Icon className="w-4 h-4" />
      <span>{label}</span>
    </button>
  );
}

function RuleCard({ icon: Icon, title, children }) {
  const { resolved } = useTheme();
  const isDark = resolved === 'dark';
  return (
    <div className={`p-5 rounded-xl border transition-colors duration-200 ${
      isDark ? 'border-slate-700/60 bg-slate-900/40' : 'border-slate-200/60 bg-white'
    }`}>
      <div className="flex items-start gap-3">
        <div className="shrink-0 w-9 h-9 rounded-lg bg-brand-50 dark:bg-brand-900/30 flex items-center justify-center ring-1 ring-brand-200/50 dark:ring-brand-800/50">
          <Icon className="w-4.5 h-4.5 text-brand-500 dark:text-brand-400" />
        </div>
        <div>
          <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-1.5 text-sm">{title}</h4>
          <div className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed space-y-1">{children}</div>
        </div>
      </div>
    </div>
  );
}

function EvaluationBar({ label, pct, color }) {
  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between text-sm">
        <span className="font-medium text-slate-700 dark:text-slate-300">{label}</span>
        <span className="font-bold text-slate-900 dark:text-slate-100">{pct}%</span>
      </div>
      <div className="h-2.5 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
        <div className="h-full rounded-full transition-all duration-500" style={{ width: `${pct}%`, backgroundColor: color }} />
      </div>
    </div>
  );
}

const PHASE_STYLES = {
  html: {
    badge: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300 ring-indigo-200/50 dark:ring-indigo-800/50',
    dot: 'bg-indigo-500',
    labelEn: 'HTML Sprint',
    labelAr: 'سباق HTML',
  },
  css: {
    badge: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300 ring-emerald-200/50 dark:ring-emerald-800/50',
    dot: 'bg-emerald-500',
    labelEn: 'CSS Sprint',
    labelAr: 'سباق CSS',
  },
  capstone: {
    badge: 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300 ring-amber-200/50 dark:ring-amber-800/50',
    dot: 'bg-amber-500',
    labelEn: 'Team Formation',
    labelAr: 'تشكيل الفرق',
  },
  review: {
    badge: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300 ring-purple-200/50 dark:ring-purple-800/50',
    dot: 'bg-purple-500',
    labelEn: 'Review & Mentoring',
    labelAr: 'مراجعة وتوجيه',
  },
};

const PHASE_ICONS = { html: Flag, css: Flag, capstone: UsersRound, review: GraduationCap };

const SOFT_SKILL_ICONS = {
  1: MessageSquare,
  2: Clock,
  3: Brain,
  4: Presentation,
};

const WEEK_NAMES = {
  1: { en: 'Week 1', ar: 'الأسبوع 1' },
  2: { en: 'Week 2', ar: 'الأسبوع 2' },
  3: { en: 'Week 3', ar: 'الأسبوع 3' },
  4: { en: 'Week 4', ar: 'الأسبوع 4' },
};

function SoftSkillsBanner({ week, lang, isDark }) {
  const skill = SOFT_SKILLS[week];
  if (!skill) return null;
  const Icon = SOFT_SKILL_ICONS[week] || Lightbulb;

  return (
    <div className={`relative overflow-hidden rounded-xl border transition-colors duration-200 ${
      isDark ? 'border-amber-700/40 bg-amber-900/15' : 'border-amber-200/60 bg-amber-50/70'
    }`}>
      <div className="absolute top-0 right-0 w-32 h-32 -mr-8 -mt-8 rounded-full bg-amber-400/10 dark:bg-amber-500/5 blur-2xl pointer-events-none" />
      <div className="relative flex items-start gap-4 p-5">
        <div className={`shrink-0 w-10 h-10 rounded-xl flex items-center justify-center ${
          isDark ? 'bg-amber-900/40 text-amber-300' : 'bg-amber-100 text-amber-600'
        }`}>
          <Icon className="w-5 h-5" />
        </div>
        <div className="flex-1 min-w-0">
          <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider mb-2 ${
            isDark ? 'bg-amber-900/30 text-amber-300 ring-1 ring-amber-700/40' : 'bg-amber-100 text-amber-700 ring-1 ring-amber-200/50'
          }`}>
            <Sparkles className="w-3 h-3" />
            {lang === 'ar' ? 'مهارات سوق العمل' : 'Soft Skills Focus'}
          </span>
          <h4 className="font-bold text-slate-900 dark:text-slate-100 text-sm mb-1">
            {lang === 'ar' ? skill.ar : skill.en}
          </h4>
          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
            {lang === 'ar' ? skill.description.ar : skill.description.en}
          </p>
        </div>
      </div>
    </div>
  );
}

function LectureCard({ lecture, lang, isDark }) {
  const [expanded, setExpanded] = useState(false);
  const [showSolution, setShowSolution] = useState(false);

  const phaseStyle = PHASE_STYLES[lecture.phase];
  const PhaseIcon = PHASE_ICONS[lecture.phase];
  const task = lecture.assignedTask;
  const hasInClass = lecture.inClassTopics && lecture.inClassTopics.en && lecture.inClassTopics.en.length > 0;
  const hasSelfLearn = lecture.selfLearningTopics && lecture.selfLearningTopics.en && lecture.selfLearningTopics.en.length > 0;

  const topics = lang === 'ar' ? lecture.inClassTopics?.ar : lecture.inClassTopics?.en;
  const selfLearnTopics = lang === 'ar' ? lecture.selfLearningTopics?.ar : lecture.selfLearningTopics?.en;
  const requirements = lang === 'ar' ? task?.requirements?.ar : task?.requirements?.en;
  const objectives = lang === 'ar' ? task?.objectives?.ar : task?.objectives?.en;

  return (
    <div className={`rounded-xl border transition-colors duration-200 overflow-hidden ${
      isDark ? 'border-slate-700/60 bg-slate-900/40' : 'border-slate-200/60 bg-white'
    }`}>
      {/* Header */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-center justify-between px-5 py-4 text-left"
      >
        <div className="flex items-center gap-3">
          <span className={`shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold ring-1 ${
            isDark ? 'bg-brand-900/30 text-brand-400 ring-brand-800/50' : 'bg-brand-50 text-brand-600 ring-brand-200/50'
          }`}>
            {lecture.lectureId}
          </span>
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                {lang === 'ar'
                  ? `الأسبوع ${lecture.week} · المحاضرة ${lecture.session}`
                  : `Week ${lecture.week} · Session ${lecture.session}`}
              </span>
              <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider ring-1 ${phaseStyle.badge}`}>
                {PhaseIcon && <PhaseIcon className="w-3 h-3" />}
                {lang === 'ar' ? phaseStyle.labelAr : phaseStyle.labelEn}
              </span>
            </div>
            <h4 className="font-semibold text-slate-900 dark:text-slate-100 text-sm mt-0.5">
              {lang === 'ar' ? lecture.title.ar : lecture.title.en}
            </h4>
          </div>
        </div>
        {expanded ? <ChevronUp className="w-4 h-4 text-slate-400 shrink-0" /> : <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />}
      </button>

      {/* Expanded Content: 4-Tier Layout */}
      {expanded && (
        <div className="px-5 pb-6 border-t border-slate-100 dark:border-slate-800 pt-4 space-y-5">

          {/* ═══ TIER 1: In-Class Topics ═══ */}
          {hasInClass && (
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-indigo-500 shrink-0" />
                <h5 className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                  {lang === 'ar' ? 'المواضيع التي سيشرحها المدرب' : 'In-Class Topics'}
                </h5>
              </div>
              <ul className="space-y-1.5">
                {topics.map((topic, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                    <span className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 ${
                      lecture.phase === 'html' ? 'bg-indigo-400' : 'bg-emerald-400'
                    }`} />
                    <span>{topic}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* ═══ TIER 2: Self-Learning ═══ */}
          {hasSelfLearn && (
            <div className={`rounded-xl p-4 border transition-colors duration-200 ${
              isDark ? 'bg-slate-800/40 border-slate-700/40' : 'bg-slate-50/80 border-slate-200/60'
            }`}>
              <div className="flex items-center gap-2 mb-2">
                <Eye className="w-4 h-4 text-amber-500 shrink-0" />
                <h5 className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
                  {lang === 'ar' ? 'التعلم الذاتي' : 'Self-Learning'}
                </h5>
              </div>
              <ul className="space-y-1.5">
                {selfLearnTopics.map((topic, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0" />
                    <span>{topic}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* ═══ TIER 3: Practical Task ═══ */}
          {task && (
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <ClipboardList className="w-4 h-4 text-cta-500 shrink-0" />
                <h5 className="text-xs font-bold uppercase tracking-wider text-cta-600 dark:text-cta-400">
                  {lang === 'ar' ? 'التاسك العملي المُنظّم' : 'Practical Task'}
                </h5>
              </div>
              <div className={`rounded-xl p-4 border transition-colors duration-200 ${
                isDark ? 'border-slate-700/40 bg-slate-900/60' : 'border-slate-200/60 bg-white'
              }`}>
                {/* Task Title */}
                <p className="font-semibold text-sm text-slate-800 dark:text-slate-200 mb-3">
                  {lang === 'ar' ? 'عنوان التاسك:' : 'Task Title:'}{' '}
                  <span className="font-normal text-slate-600 dark:text-slate-400">
                    {lang === 'ar' ? task.title.ar : task.title.en}
                  </span>
                </p>

                {/* Objectives */}
                {objectives && objectives.length > 0 && (
                  <div className="mb-3">
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5">
                      {lang === 'ar' ? 'الأهداف:' : 'Objectives:'}
                    </p>
                    <ul className="space-y-1">
                      {objectives.map((obj, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400">
                          <Target className="w-3 h-3 text-brand-500 mt-0.5 shrink-0" />
                          <span>{obj}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Requirements as Checkboxes */}
                {requirements && requirements.length > 0 && (
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5">
                      {lang === 'ar' ? 'المتطلبات التقنية:' : 'Technical Requirements:'}
                    </p>
                    <ul className="space-y-1">
                      {requirements.map((req, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400">
                          <CheckSquare className="w-3.5 h-3.5 text-emerald-500 mt-0.5 shrink-0" />
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* ═══ TIER 4: Model Solution Accordion ═══ */}
          {lecture.taskSolutionCode && (
            <div>
              <button
                onClick={() => setShowSolution(!showSolution)}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-200 press-effect border ${
                  isDark
                    ? 'border-brand-800/50 text-brand-400 hover:bg-brand-900/30'
                    : 'border-brand-200/50 text-brand-600 hover:bg-brand-50'
                }"
              >
                <FileCode className="w-4 h-4" />
                {showSolution
                  ? (lang === 'ar' ? 'إخفاء الحل البرمجي' : 'Hide Solution Code')
                  : (lang === 'ar' ? 'عرض الحل البرمجي النموذجي' : 'View Code Solution')}
                {showSolution ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
              </button>
              {showSolution && (
                <pre className={`mt-3 p-4 sm:p-5 rounded-xl text-sm leading-relaxed overflow-x-auto font-mono border ${
                  isDark ? 'bg-slate-950 text-slate-300 border-slate-700/60' : 'bg-[#1a1b26] text-[#a9b1d6] border-slate-200/60'
                }`} dir="ltr">
                  <code className="whitespace-pre">{lecture.taskSolutionCode}</code>
                </pre>
              )}
            </div>
          )}

        </div>
      )}
    </div>
  );
}

export default function InstructorPage() {
  const { lang, t } = useLanguage();
  const { resolved } = useTheme();
  const navigate = useNavigate();
  const isDark = resolved === 'dark';
  const [activeTab, setActiveTab] = useState(TABS.RULES);

  const lectures = lecturesData;

  return (
    <div className="flex-1 flex flex-col" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      {/* Top bar */}
      <div className="border-b border-slate-200/60 dark:border-slate-800/80 bg-slate-50/80 dark:bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5">
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-all duration-200 press-effect"
          >
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            {lang === 'ar' ? 'العودة إلى الرئيسية' : 'Back to Home'}
          </button>
        </div>
      </div>

      <div className="max-w-5xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12">

        {/* Page Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-brand-500 dark:text-brand-400 mb-2">
            <Award className="w-3.5 h-3.5" />
            <span>{lang === 'ar' ? 'صفحة المعلم' : 'Instructor Portal'}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
            {lang === 'ar' ? 'Bootcamp Planner & تقويم المعلم' : 'Bootcamp Planner & Instructor Dashboard'}
          </h1>
          <p className="mt-2 text-slate-500 dark:text-slate-400 max-w-2xl leading-relaxed">
            {lang === 'ar'
              ? 'دليل المدرب الشامل لإدارة الدورة التدريبية — قواعد التدريب، نظام التقييم، والجدول الزمني الكامل لأربعة أسابيع.'
              : 'Comprehensive instructor guide for managing the bootcamp — training rules, evaluation system, and full 4-week schedule.'}
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex gap-2 mb-8 pb-6 border-b border-slate-200/60 dark:border-slate-800/80">
          <TabButton
            active={activeTab === TABS.RULES}
            onClick={() => setActiveTab(TABS.RULES)}
            icon={ClipboardList}
            label={lang === 'ar' ? 'قواعد التدريب والتقييم' : 'Rules & Evaluation'}
          />
          <TabButton
            active={activeTab === TABS.SCHEDULE}
            onClick={() => setActiveTab(TABS.SCHEDULE)}
            icon={Calendar}
            label={lang === 'ar' ? 'الجدول الزمني للشهر' : '4-Week Schedule'}
          />
        </div>

        {/* ═══ Tab 1: Rules & Evaluation ═══ */}
        {activeTab === TABS.RULES && (
          <div className="space-y-10">
            <section>
              <div className="flex items-center gap-2 mb-5">
                <BookOpen className="w-5 h-5 text-brand-500" />
                <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                  {lang === 'ar' ? 'قواعد التدريب أثناء المحاضرة' : 'Training Rules & Etiquette'}
                </h2>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <RuleCard icon={Clock} title={lang === 'ar' ? 'الالتزام بالوقت' : 'Time Commitment'}>
                  {lang === 'ar' ? (
                    <ul className="list-disc list-inside space-y-1">
                      <li>الحضور في الوقت المحدد — المحاضرة تبدأ في موعدها دون انتظار.</li>
                      <li>التأخير أكثر من 5 دقائق يُخصم من درجة الحضور.</li>
                      <li>المحاضرة مدتها ساعتان كاملتان (120 دقيقة).</li>
                      <li>فاصل قصير (5 دقائق) بعد أول ساعة.</li>
                    </ul>
                  ) : (
                    <ul className="list-disc list-inside space-y-1">
                      <li>Arrive on time — class starts promptly at the scheduled time.</li>
                      <li>Lateness over 5 minutes deducts from attendance grade.</li>
                      <li>Each session is 2 full hours (120 minutes).</li>
                      <li>A 5-minute break after the first hour.</li>
                    </ul>
                  )}
                </RuleCard>
                <RuleCard icon={Code2} title={lang === 'ar' ? 'ممنوع كتابة الكود أثناء الشرح' : 'No Coding During Explanation'}>
                  {lang === 'ar' ? (
                    <ul className="list-disc list-inside space-y-1">
                      <li>الاستماع والفهم أولاً — لا يُسمح بكتابة الكود أثناء شرح المفاهيم الجديدة.</li>
                      <li>سيتم تخصيص وقت كافٍ للتطبيق العملي بعد الشرح.</li>
                      <li>التركيز الكامل على المحاضر يضمن فهمًا أعمق.</li>
                    </ul>
                  ) : (
                    <ul className="list-disc list-inside space-y-1">
                      <li>Listen and understand first — no coding during concept explanations.</li>
                      <li>Ample hands-on practice time is provided after explanations.</li>
                      <li>Full attention to the instructor ensures deeper comprehension.</li>
                    </ul>
                  )}
                </RuleCard>
                <RuleCard icon={Mic} title={lang === 'ar' ? 'آداب الكاميرا والميكروفون' : 'Camera & Microphone Etiquette'}>
                  {lang === 'ar' ? (
                    <ul className="list-disc list-inside space-y-1">
                      <li>يفضّل فتح الكاميرا لزيادة التفاعل (اختياري لكن مشجع).</li>
                      <li>كتم الميكروفون إلا عند الرغبة في المشاركة.</li>
                      <li>استخدام خاصية "رفع اليد" قبل التحدث.</li>
                    </ul>
                  ) : (
                    <ul className="list-disc list-inside space-y-1">
                      <li>Camera on is preferred for engagement (optional but encouraged).</li>
                      <li>Mute microphone unless you want to speak.</li>
                      <li>Use the "raise hand" feature before speaking.</li>
                    </ul>
                  )}
                </RuleCard>
                <RuleCard icon={HelpCircle} title={lang === 'ar' ? 'قاعدة "اسأل ثلاثة قبل أن تسألني"' : '"Ask Three Before Me" Rule'}>
                  {lang === 'ar' ? (
                    <ul className="list-disc list-inside space-y-1">
                      <li>قبل طرح سؤال على المدرب، حاول البحث أو سؤال 3 زملاء أولاً.</li>
                      <li>هذا يبني مهارات حل المشكلات والاعتماد على النفس.</li>
                      <li>إذا لم يتم حل المشكلة بعد 3 محاولات، المدرب متاح للمساعدة.</li>
                    </ul>
                  ) : (
                    <ul className="list-disc list-inside space-y-1">
                      <li>Before asking the instructor, try searching or asking 3 peers first.</li>
                      <li>This builds problem-solving skills and self-reliance.</li>
                      <li>If unresolved after 3 attempts, the instructor is available to help.</li>
                    </ul>
                  )}
                </RuleCard>
              </div>
            </section>

            <section>
              <div className="flex items-center gap-2 mb-5">
                <BarChart3 className="w-5 h-5 text-brand-500" />
                <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                  {lang === 'ar' ? 'طريقة تقييم الطلاب طوال الشهر' : 'Student Evaluation System'}
                </h2>
              </div>
              <div className={`p-6 rounded-xl border transition-colors duration-200 ${
                isDark ? 'border-slate-700/60 bg-slate-900/40' : 'border-slate-200/60 bg-white'
              }`}>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-5">
                    <EvaluationBar label={lang === 'ar' ? 'الحضور والالتزام' : 'Attendance & Punctuality'} pct={20} color="#6366f1" />
                    <EvaluationBar label={lang === 'ar' ? 'التاسكات النصف أسبوعية' : 'Bi-weekly Assignments'} pct={40} color="#22c55e" />
                    <EvaluationBar label={lang === 'ar' ? 'اختبارات التعلم الذاتي' : 'Self-Learning Quizzes'} pct={20} color="#f59e0b" />
                    <EvaluationBar label={lang === 'ar' ? 'المشروع النهائي المتكامل' : 'Final Capstone Project'} pct={20} color="#ef4444" />
                  </div>
                  <div className={`rounded-xl p-5 border transition-colors duration-200 ${
                    isDark ? 'bg-slate-950/50 border-slate-700/40' : 'bg-slate-50 border-slate-200/60'
                  }`}>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
                      {lang === 'ar' ? 'ملخص التقييم' : 'Evaluation Summary'}
                    </h4>
                    <div className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
                      <p className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />{lang === 'ar' ? 'النجاح يتطلب تجميع 70% من إجمالي الدرجات.' : 'Passing requires 70% of total grade.'}</p>
                      <p className="flex items-center gap-2"><Target className="w-4 h-4 text-brand-500 shrink-0" />{lang === 'ar' ? 'الدرجة النهائية = 20% حضور + 40% تاسكات + 20% اختبارات + 20% مشروع.' : 'Final grade = 20% attendance + 40% assignments + 20% quizzes + 20% project.'}</p>
                      <p className="flex items-center gap-2"><Award className="w-4 h-4 text-amber-500 shrink-0" />{lang === 'ar' ? 'الدرجة النهائية من 100 — الحد الأدنى للنجاح 70.' : 'Final score out of 100 — minimum passing score is 70.'}</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* ═══ Tab 2: 4-Week Schedule ═══ */}
        {activeTab === TABS.SCHEDULE && (
          <div className="space-y-8">
            <div className="flex items-center gap-2 mb-2">
              <Calendar className="w-5 h-5 text-brand-500" />
              <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                {lang === 'ar' ? 'الجدول الزمني — 4 أسابيع (8 محاضرات)' : 'Schedule — 4 Weeks (8 Lectures)'}
              </h2>
            </div>

            {/* Milestone legend */}
            <div className="flex flex-wrap gap-3">
              {Object.values(PHASE_STYLES).map((ps) => (
                <span key={ps.labelEn} className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider ring-1 ${ps.badge}`}>
                  <span className={`w-2 h-2 rounded-full ${ps.dot}`} />
                  {lang === 'ar' ? ps.labelAr : ps.labelEn}
                </span>
              ))}
            </div>

            <p className="text-sm text-slate-500 dark:text-slate-400">
              {lang === 'ar'
                ? 'محاضرتان كل أسبوع، كل محاضرة ساعتان. اضغط على المحاضرة لعرض التفاصيل.'
                : 'Two lectures per week, 2 hours each. Click a lecture to expand details.'}
            </p>

            {/* Lectures grouped by week */}
            {[1, 2, 3, 4].map((week) => {
              const weekLectures = lectures.filter((l) => l.week === week);
              if (weekLectures.length === 0) return null;
              return (
                <div key={week} className="space-y-4">
                  {/* Week Header with Soft Skills */}
                  <div className="flex items-center gap-3">
                    <span className={`text-sm font-bold uppercase tracking-wider px-3 py-1 rounded-lg ${
                      isDark ? 'bg-slate-800 text-slate-300' : 'bg-slate-100 text-slate-600'
                    }`}>
                      {WEEK_NAMES[week]?.[lang === 'ar' ? 'ar' : 'en'] || `Week ${week}`}
                    </span>
                    <div className="flex-1 h-px bg-slate-200/60 dark:bg-slate-700/60" />
                  </div>

                  <SoftSkillsBanner week={week} lang={lang} isDark={isDark} />

                  <div className="space-y-3">
                    {weekLectures.map((lec) => (
                      <LectureCard key={lec.lectureId} lecture={lec} lang={lang} isDark={isDark} />
                    ))}
                  </div>
                </div>
              );
            })}

            {/* Milestone Map */}
            <div className={`mt-8 p-5 rounded-xl border text-sm transition-colors duration-200 ${
              isDark ? 'border-slate-700/60 bg-slate-900/40' : 'border-slate-200/60 bg-white'
            }`}>
              <div className="flex items-start gap-3">
                <ListChecks className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <p className="font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    {lang === 'ar' ? 'مراحل الدورة التدريبية' : 'Bootcamp Milestone Map'}
                  </p>
                  <ul className="space-y-1 text-slate-500 dark:text-slate-400">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-indigo-500 shrink-0" />
                      {lang === 'ar' ? 'المرحلة 1 — HTML Sprint (المحاضرات 1–3): جميع مواضيع HTML الـ 43 تُغطى وتُختتم.' : 'Phase 1 — HTML Sprint (Lectures 1–3): All 43 HTML topics covered and finalized.'}
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                      {lang === 'ar' ? 'المرحلة 2 — CSS Sprint (المحاضرات 4–6): جميع مواضيع CSS الـ 31 تُشرح وتُختتم.' : 'Phase 2 — CSS Sprint (Lectures 4–6): All 31 CSS topics taught and wrapped up.'}
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-amber-500 shrink-0" />
                      {lang === 'ar' ? 'المرحلة 3 — انطلاق المشروع النهائي (المحاضرة 7): تشكيل الفرق، Git، وبدء المشروع.' : 'Phase 3 — Capstone Launch (Lecture 7): Team formation, Git, project kickoff.'}
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-purple-500 shrink-0" />
                      {lang === 'ar' ? 'المرحلة 4 — فحص المشاريع (المحاضرة 8): لا مواضيع جديدة — توجيه مباشر، تقييم، إنجاز المتراكم.' : 'Phase 4 — Project Scrutiny (Lecture 8): No new topics — live mentoring, evaluation, backlog clearing.'}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

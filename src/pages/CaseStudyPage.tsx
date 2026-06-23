import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import { getCaseStudy } from '../data/case-studies';
import { useLanguage } from '../lib/i18n';

export default function CaseStudyPage() {
  const { slug } = useParams<{ slug: string }>();
  const { t } = useLanguage();
  const cs = slug ? getCaseStudy(slug) : undefined;

  if (!cs) {
    return (
      <div className="min-h-screen bg-white text-slate-800 font-sans antialiased flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <h1 className="text-2xl font-bold text-slate-900 mb-3">{t.caseStudy.notFound}</h1>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-accent-700 hover:text-accent-800"
          >
            <ArrowLeft size={16} />
            {t.caseStudy.backToPortfolio}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans antialiased">
      <header className="border-b border-slate-100 bg-white/90 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
          >
            <ArrowLeft size={16} />
            {t.caseStudy.backToPortfolio}
          </Link>
          <span className="text-sm font-semibold text-slate-800">Klairs</span>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="mb-3">
          <span className="text-sm font-semibold text-accent-600 uppercase tracking-wider">{t.caseStudy.eyebrow}</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-3">{cs.title}</h1>
        <p className="text-sm text-slate-500 mb-10">{cs.subtitle}</p>

        <section className="mb-12">
          <h2 className="text-xl font-bold text-slate-900 mb-4">{t.caseStudy.projectOverview}</h2>
          <div className="space-y-4">
            {cs.overview.map((p) => (
              <p key={p} className="text-sm text-slate-600 leading-relaxed">
                {p}
              </p>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold text-slate-900 mb-4">{t.caseStudy.workflow}</h2>
          <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6">
            {cs.workflow.map((line) => (
              <p key={line} className="text-sm text-slate-700 leading-relaxed font-mono">
                {line}
              </p>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold text-slate-900 mb-4">{t.caseStudy.toolsUsed}</h2>
          <div className="flex flex-wrap gap-2">
            {cs.tools.map((tool) => (
              <span
                key={tool}
                className="px-3 py-1 rounded-full bg-accent-50 border border-accent-100 text-accent-700 text-xs font-medium"
              >
                {tool}
              </span>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold text-slate-900 mb-6">{t.caseStudy.implementationSteps}</h2>
          <div className="space-y-6">
            {cs.steps.map((step) => (
              <div key={step.title} className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
                <h3 className="text-base font-bold text-slate-900 mb-3">{step.title}</h3>
                <div className="space-y-3 mb-4">
                  {step.paragraphs.map((p) => (
                    <p key={p} className="text-sm text-slate-600 leading-relaxed">
                      {p}
                    </p>
                  ))}
                </div>
                {step.bullets && (
                  <ul className="space-y-1.5">
                    {step.bullets.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
                        <CheckCircle2 size={13} className="text-accent-500 mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold text-slate-900 mb-4">{t.caseStudy.finalResult}</h2>
          <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 space-y-2">
            {cs.finalResult.map((line) => (
              <p key={line} className="text-sm text-slate-700 leading-relaxed">
                {line}
              </p>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold text-slate-900 mb-4">{t.caseStudy.outcome}</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">{cs.outcome.intro}</p>
          <ul className="space-y-1.5">
            {cs.outcome.bullets.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
                <CheckCircle2 size={13} className="text-accent-500 mt-0.5 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold text-slate-900 mb-4">{t.caseStudy.futureImprovements}</h2>
          <ul className="space-y-1.5">
            {cs.futureImprovements.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
                <CheckCircle2 size={13} className="text-accent-500 mt-0.5 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="bg-accent-50/50 rounded-2xl border border-accent-100 p-6">
          <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3">
            {t.caseStudy.portfolioSummary}
          </h2>
          <p className="text-sm text-slate-700 leading-relaxed">{cs.portfolioSummary}</p>
        </section>
      </main>
    </div>
  );
}

import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { BrootUseCaseSection } from '../components/BrootUseCaseSection';
import { useLanguage } from '../lib/i18n';

export default function BrootUseCasePage() {
  const { t } = useLanguage();
  const project = t.projects.items.broot;

  return (
    <div className="min-h-screen text-slate-800 font-sans antialiased">
      <header className="border-b border-slate-200/80 bg-white/85 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link
            to="/#projects"
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
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-3">{project.title}</h1>
        <p className="text-sm text-slate-500 mb-10">{project.subtitle}</p>

        <div className="bg-white/90 rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-card backdrop-blur-sm">
          <BrootUseCaseSection />
        </div>
      </main>
    </div>
  );
}

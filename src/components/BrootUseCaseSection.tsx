import { CheckCircle2 } from 'lucide-react';
import { brootUseCase } from '../data/broot-use-case';

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-1.5">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
          <CheckCircle2 size={13} className="text-accent-600 mt-0.5 shrink-0" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function Paragraphs({ items }: { items: string[] }) {
  return (
    <>
      {items.map((paragraph) => (
        <p key={paragraph} className="text-sm text-slate-600 leading-relaxed mb-3 last:mb-0">
          {paragraph}
        </p>
      ))}
    </>
  );
}

function SubsectionTitle({ children }: { children: string }) {
  return <h4 className="text-sm font-bold text-slate-900 mt-6 mb-3 first:mt-0">{children}</h4>;
}

export function BrootUseCaseSection() {
  const content = brootUseCase;

  return (
    <div className="mb-2">
      <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4">{content.sectionTitle}</h4>

      <SubsectionTitle>{content.overview.title}</SubsectionTitle>
      <Paragraphs items={content.overview.paragraphs} />
      <ol className="list-decimal list-inside space-y-1.5 mb-3 text-sm text-slate-600">
        {content.overview.actions.map((action) => (
          <li key={action}>{action}</li>
        ))}
      </ol>
      <p className="text-sm text-slate-600 leading-relaxed mb-1">{content.overview.closing}</p>

      <SubsectionTitle>{content.businessScenario.title}</SubsectionTitle>
      <p className="text-sm text-slate-600 leading-relaxed mb-3">{content.businessScenario.paragraphs[0]}</p>
      <p className="text-sm text-slate-600 leading-relaxed mb-2">{content.businessScenario.paragraphs[1]}</p>
      <BulletList items={content.businessScenario.captureSources} />
      <p className="text-sm text-slate-600 leading-relaxed mt-3 mb-2">{content.businessScenario.paragraphs[2]}</p>
      <p className="text-sm text-slate-600 leading-relaxed mb-2">{content.businessScenario.paragraphs[3]}</p>
      <ul className="space-y-1.5 mb-3">
        {content.businessScenario.tagItems.map((item) => (
          <li key={item.label} className="flex items-start gap-2 text-sm text-slate-600">
            <CheckCircle2 size={13} className="text-accent-600 mt-0.5 shrink-0" />
            <span>
              <span className="font-semibold text-slate-800">{item.label}</span> — {item.description}
            </span>
          </li>
        ))}
      </ul>
      <p className="text-sm text-slate-600 leading-relaxed">{content.businessScenario.closing}</p>

      <SubsectionTitle>{content.whyTagsMatter.title}</SubsectionTitle>
      <Paragraphs items={content.whyTagsMatter.paragraphs} />
      <ul className="space-y-1.5 mb-3">
        {content.whyTagsMatter.tagItems.map((item) => (
          <li key={item.label} className="flex items-start gap-2 text-sm text-slate-600">
            <CheckCircle2 size={13} className="text-accent-600 mt-0.5 shrink-0" />
            <span>
              <span className="font-semibold text-slate-800">{item.label}</span> {item.description}
            </span>
          </li>
        ))}
      </ul>
      <p className="text-sm text-slate-600 leading-relaxed mb-2">
        This classification makes the automation more useful because it allows the workflow to:
      </p>
      <BulletList items={content.whyTagsMatter.benefits} />
      <p className="text-sm text-slate-600 leading-relaxed mt-4">{content.whyTagsMatter.workflowNote}</p>

      <SubsectionTitle>{content.workflowTrigger.title}</SubsectionTitle>
      <p className="text-sm text-slate-600 leading-relaxed mb-2">The workflow is triggered when:</p>
      <BulletList items={content.workflowTrigger.bullets} />
      <p className="text-sm text-slate-600 leading-relaxed mt-3">{content.workflowTrigger.closing}</p>

      <SubsectionTitle>{content.automationFlow.title}</SubsectionTitle>
      <div className="space-y-5">
        {content.automationFlow.steps.map((step) => (
          <div key={step.title} className="rounded-xl border border-slate-100 bg-slate-50/60 p-4">
            <h5 className="text-sm font-semibold text-slate-900 mb-2">{step.title}</h5>
            {step.paragraphs && <Paragraphs items={step.paragraphs} />}
            {step.bullets && <BulletList items={step.bullets} />}
          </div>
        ))}
      </div>

      <SubsectionTitle>{content.crmSyncBranches.title}</SubsectionTitle>
      <div className="space-y-4">
        {content.crmSyncBranches.branches.map((branch) => (
          <div key={branch.title} className="rounded-xl border border-slate-100 bg-white p-4">
            <h5 className="text-sm font-semibold text-slate-900 mb-2">{branch.title}</h5>
            <BulletList items={branch.bullets} />
          </div>
        ))}
      </div>

      <SubsectionTitle>{content.outcome.title}</SubsectionTitle>
      <p className="text-sm text-slate-600 leading-relaxed mb-3">
        The workflow creates a reusable lead capture and CRM sync system for event-based customer acquisition. It helps
        teams:
      </p>
      <BulletList items={content.outcome.bullets} />
    </div>
  );
}

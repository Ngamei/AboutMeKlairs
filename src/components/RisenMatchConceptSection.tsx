import { CheckCircle2 } from 'lucide-react';
import { risenMatchConcept } from '../data/risen-match-concept';

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

function SubsectionTitle({ children }: { children: string }) {
  return <h4 className="text-sm font-bold text-slate-900 mt-8 mb-3 first:mt-0">{children}</h4>;
}

function PersonaCard({ name, role, sections }: { name: string; role: string; sections: { label: string; content: string }[] }) {
  return (
    <div className="rounded-xl border border-slate-100 bg-slate-50/60 p-4">
      <h5 className="text-sm font-semibold text-slate-900">{name}</h5>
      <p className="text-xs text-slate-500 mb-3">{role}</p>
      <div className="space-y-2">
        {sections.map((section) => (
          <div key={section.label}>
            <p className="text-xs font-semibold text-slate-800">{section.label}</p>
            <p className="text-sm text-slate-600 leading-relaxed">{section.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function RisenMatchConceptSection() {
  const content = risenMatchConcept;

  return (
    <div>
      <p className="text-2xl mb-2" aria-hidden="true">
        🧘‍♀️
      </p>
      <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4">{content.overviewTitle}</h4>
      <p className="text-sm text-slate-600 leading-relaxed mb-6">{content.overviewIntro}</p>

      <SubsectionTitle>Key Value Propositions</SubsectionTitle>
      <div className="space-y-4">
        {content.valuePropositions.map((item) => (
          <div key={item.title}>
            <p className="text-sm font-semibold text-slate-900 mb-1">{item.title}</p>
            <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>

      <SubsectionTitle>The Core Vision</SubsectionTitle>
      <p className="text-sm text-slate-600 leading-relaxed">{content.coreVision}</p>

      <SubsectionTitle>{content.prd.title}</SubsectionTitle>
      <p className="text-xs text-slate-500 mb-4">
        Document Status: {content.prd.status} · Target Audience: {content.prd.audience}
      </p>

      <h5 className="text-sm font-bold text-slate-900 mb-2">{content.prd.objective.title}</h5>
      <p className="text-sm font-semibold text-slate-800 mb-1">The Problem</p>
      <p className="text-sm text-slate-600 leading-relaxed mb-3">{content.prd.objective.problem}</p>
      <p className="text-sm font-semibold text-slate-800 mb-1">The Solution</p>
      <p className="text-sm text-slate-600 leading-relaxed mb-4">{content.prd.objective.solution}</p>

      <h5 className="text-sm font-bold text-slate-900 mb-3">{content.prd.featureMatrix.title}</h5>
      <div className="overflow-x-auto rounded-xl border border-slate-200 mb-4">
        <table className="w-full min-w-[640px] text-left text-sm">
          <thead className="bg-slate-50 border-b border-slate-200">
            <tr>
              <th className="px-3 py-2 font-semibold text-slate-900">Module</th>
              <th className="px-3 py-2 font-semibold text-slate-900">Feature Name</th>
              <th className="px-3 py-2 font-semibold text-slate-900">Core Function</th>
              <th className="px-3 py-2 font-semibold text-slate-900">MVP Priority</th>
            </tr>
          </thead>
          <tbody>
            {content.prd.featureMatrix.rows.map((row) => (
              <tr key={`${row.module}-${row.featureName}`} className="border-b border-slate-100 last:border-0">
                <td className="px-3 py-2 text-slate-600 align-top">{row.module}</td>
                <td className="px-3 py-2 text-slate-800 align-top font-medium">{row.featureName}</td>
                <td className="px-3 py-2 text-slate-600 align-top">{row.coreFunction}</td>
                <td className="px-3 py-2 text-slate-600 align-top">{row.mvpPriority}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h5 className="text-sm font-bold text-slate-900 mb-3">{content.prd.userJourney.title}</h5>
      <ol className="space-y-4">
        {content.prd.userJourney.steps.map((step, index) => (
          <li key={step.title} className="rounded-xl border border-slate-100 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900 mb-1">
              {index + 1}. {step.title}
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">{step.body}</p>
          </li>
        ))}
      </ol>

      <h5 className="text-sm font-bold text-slate-900 mt-6 mb-2">{content.prd.matchEngine.title}</h5>
      <p className="text-sm text-slate-600 leading-relaxed mb-3">{content.prd.matchEngine.intro}</p>
      <p className="text-sm font-semibold text-slate-800 mb-2">{content.prd.matchEngine.dataInputs.title}</p>
      <BulletList items={content.prd.matchEngine.dataInputs.items} />
      <p className="text-sm font-semibold text-slate-800 mt-4 mb-2">{content.prd.matchEngine.matchLogic.title}</p>
      <BulletList items={content.prd.matchEngine.matchLogic.items} />
      <p className="text-sm text-slate-600 leading-relaxed mt-3">{content.prd.matchEngine.matchLogic.output}</p>

      <h5 className="text-sm font-bold text-slate-900 mt-6 mb-3">{content.prd.scope.title}</h5>
      <p className="text-sm font-semibold text-slate-800 mb-2">{content.prd.scope.inScope.title}</p>
      <BulletList items={content.prd.scope.inScope.items} />
      <p className="text-sm font-semibold text-slate-800 mt-4 mb-2">{content.prd.scope.outOfScope.title}</p>
      <BulletList items={content.prd.scope.outOfScope.items} />

      <h5 className="text-sm font-bold text-slate-900 mt-6 mb-3">{content.prd.metrics.title}</h5>
      <BulletList items={content.prd.metrics.items} />

      <SubsectionTitle>{content.personas.title}</SubsectionTitle>
      <p className="text-sm text-slate-600 leading-relaxed mb-4">{content.personas.intro}</p>

      <h5 className="text-sm font-bold text-slate-900 mb-3">{content.personas.demandTitle}</h5>
      <div className="space-y-4 mb-6">
        {content.personas.demand.map((persona) => (
          <PersonaCard key={persona.name} {...persona} />
        ))}
      </div>

      <h5 className="text-sm font-bold text-slate-900 mb-3">{content.personas.supplyTitle}</h5>
      <div className="space-y-4 mb-6">
        {content.personas.supply.map((persona) => (
          <PersonaCard key={persona.name} {...persona} />
        ))}
      </div>

      <div className="rounded-xl border border-accent-100 bg-accent-50/40 p-4">
        <h5 className="text-sm font-bold text-slate-900 mb-2">{content.personas.synthesis.title}</h5>
        <p className="text-sm text-slate-700 leading-relaxed">{content.personas.synthesis.body}</p>
      </div>
    </div>
  );
}

import { CheckCircle2 } from 'lucide-react';
import { risenMatchRoadmap } from '../data/risen-match-roadmap';

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

function PhaseBlock({ phase }: { phase: (typeof risenMatchRoadmap.phases)[number] }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-sm">
      <div className="mb-3">
        <h4 className="text-base font-bold text-slate-900">{phase.title}</h4>
        <p className="text-xs font-medium text-accent-700 mt-1">{phase.timeline}</p>
      </div>

      <p className="text-sm font-semibold text-slate-800 mb-1">The Goal</p>
      <p className="text-sm text-slate-600 leading-relaxed mb-4">{phase.goal}</p>

      {phase.intro && <p className="text-sm font-medium text-slate-700 mb-3 italic">{phase.intro}</p>}
      {phase.target && (
        <>
          <p className="text-sm font-semibold text-slate-800 mb-1">The Target</p>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">{phase.target}</p>
        </>
      )}

      {phase.buildItems && (
        <>
          <p className="text-sm font-semibold text-slate-800 mb-2">What you build</p>
          <div className="space-y-3 mb-4">
            {phase.buildItems.map((item, index) => (
              <div key={item.title} className="rounded-xl border border-slate-100 bg-slate-50/60 p-3">
                <p className="text-sm font-semibold text-slate-900">
                  {index + 1}. {item.title}
                </p>
                <p className="text-sm text-slate-600 leading-relaxed mt-1">{item.description}</p>
              </div>
            ))}
          </div>
        </>
      )}

      {phase.consumerFeatures && (
        <>
          <p className="text-sm font-semibold text-slate-800 mb-2">Consumer App (iOS Native or Flutter)</p>
          <BulletList items={phase.consumerFeatures} />
        </>
      )}

      {phase.studioFeatures && (
        <div className="mt-4">
          <p className="text-sm font-semibold text-slate-800 mb-2">Studio Portal (Responsive Web-App)</p>
          <BulletList items={phase.studioFeatures} />
        </div>
      )}

      {phase.supplyFeatures && (
        <div className="mb-4">
          <p className="text-sm font-semibold text-slate-800 mb-2">Supply Side (The Tech Leap)</p>
          <BulletList items={phase.supplyFeatures} />
        </div>
      )}

      {phase.consumerSideFeatures && (
        <div className="mb-4">
          <p className="text-sm font-semibold text-slate-800 mb-2">Consumer Side</p>
          <BulletList items={phase.consumerSideFeatures} />
        </div>
      )}

      {phase.bullets && <BulletList items={phase.bullets} />}

      <div className="mt-5 rounded-xl border border-accent-100 bg-accent-50/40 p-4">
        {phase.callout && <p className="text-xs font-bold text-accent-800 uppercase tracking-wider mb-1">{phase.callout}</p>}
        <p className="text-sm text-slate-700 leading-relaxed">{phase.gate}</p>
      </div>
    </div>
  );
}

export function RisenMatchRoadmapSection() {
  const content = risenMatchRoadmap;

  return (
    <div>
      {content.intro.map((paragraph) => (
        <p key={paragraph} className="text-sm text-slate-600 leading-relaxed mb-3">
          {paragraph}
        </p>
      ))}

      <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mt-6 mb-5">{content.strategyTitle}</h4>

      <div className="space-y-6">
        {content.phases.map((phase) => (
          <PhaseBlock key={phase.id} phase={phase} />
        ))}
      </div>

      <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50/60 p-5">
        <h4 className="text-sm font-bold text-slate-900 mb-3">{content.devPhilosophy.title}</h4>
        <ol className="list-decimal list-inside space-y-2 text-sm text-slate-600">
          {content.devPhilosophy.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}

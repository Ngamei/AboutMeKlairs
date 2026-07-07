import { useEffect, useState, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import {
  Github,
  Mail,
  Linkedin,
  Menu,
  X,
  Send,
  Clock,
  Check,
  AlertCircle,
} from 'lucide-react';
import { submitContactForm } from './lib/contact';
import { useLanguage } from './lib/i18n';

/* ─── SVG Icons ─────────────────────────────────────── */
const IconGithub = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
);

const IconLinkedin = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const IconMail = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const IconDoc = () => (
  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
    <polyline points="14 2 14 8 20 8" />
  </svg>
);

const IconGlobe = () => (
  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" />
  </svg>
);

const IconPen = () => (
  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
  </svg>
);

const IconGithubSm = () => (
  <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
);

/* ─── Contact Modal ──────────────────────────────────── */
interface ContactModalProps { open: boolean; onClose: () => void; }

function ContactModal({ open, onClose }: ContactModalProps) {
  const { t } = useLanguage();
  const m = t.modal;
  const [form, setForm] = useState({
    full_name: '', email: '', company_project: '', contact_reason: '',
    message: '', relevant_link: '', preferred_contact: '', timeline: '', consent: false,
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const modalRef = useRef<HTMLDivElement>(null);

  const reset = useCallback(() => {
    setForm({ full_name: '', email: '', company_project: '', contact_reason: '',
      message: '', relevant_link: '', preferred_contact: '', timeline: '', consent: false });
    setStatus('idle');
  }, []);

  useEffect(() => {
    if (!open) { reset(); return; }
    const handleKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [open, onClose, reset]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.full_name.trim() || !form.email.trim() || !form.message.trim() || !form.consent) return;
    setStatus('submitting');
    let message = form.message.trim();
    if (form.relevant_link.trim()) message += `\n\nRelevant link: ${form.relevant_link.trim()}`;
    if (form.timeline) message += `\n\nTimeline: ${form.timeline}`;
    try {
      await submitContactForm({
        name: form.full_name.trim(), email: form.email.trim(), company: form.company_project.trim(),
        role: form.contact_reason, projectType: form.contact_reason,
        preferredContact: form.preferred_contact, message, source: 'Klairs Portfolio Website',
      });
      reset(); setStatus('success');
    } catch { setStatus('error'); }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={onClose} />
      <div ref={modalRef} className="relative bg-white rounded-2xl shadow-2xl border border-slate-200 w-full max-w-lg max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 pb-0">
          <div>
            <h3 className="text-xl font-bold text-slate-900">{m.title}</h3>
            <p className="text-sm text-slate-500 mt-1">{m.subtitle}</p>
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-600 transition-colors"><X size={20} /></button>
        </div>
        <div className="p-6">
          {status === 'success' ? (
            <div className="text-center py-10">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-50 border border-blue-200 text-blue-700 mb-4"><Check size={24} /></div>
              <p className="text-base text-slate-700 leading-relaxed mb-6">{m.thanks}</p>
              <button onClick={onClose} className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#4A6FA5] text-white text-sm font-medium hover:bg-[#3A5F95] transition-colors">{m.close}</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {status === 'error' && (
                <div className="flex items-start gap-2 rounded-lg bg-red-50 border border-red-100 p-3 text-sm text-red-700">
                  <AlertCircle size={16} className="mt-0.5 shrink-0" /><span>{m.error}</span>
                </div>
              )}
              {[
                { label: m.fullName, key: 'full_name', type: 'text', placeholder: m.fullNamePlaceholder, required: true },
                { label: m.email, key: 'email', type: 'email', placeholder: m.emailPlaceholder, required: true },
                { label: m.companyProject, key: 'company_project', type: 'text', placeholder: m.companyPlaceholder, required: false },
              ].map(({ label, key, type, placeholder, required }) => (
                <div key={key}>
                  <label className="block text-sm font-medium text-slate-700 mb-1">{label}</label>
                  <input required={required} type={type} value={(form as any)[key]}
                    onChange={(e) => setForm((f) => ({ ...f, [key]: e.target.value }))}
                    placeholder={placeholder}
                    className="w-full px-3 py-2.5 rounded-lg border border-slate-200 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-400 transition-all" />
                </div>
              ))}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">{m.message}</label>
                <textarea required value={form.message} onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                  placeholder={m.messagePlaceholder} rows={4}
                  className="w-full px-3 py-2.5 rounded-lg border border-slate-200 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-400 transition-all resize-none" />
              </div>
              <div className="flex items-start gap-2">
                <input id="consent" type="checkbox" checked={form.consent}
                  onChange={(e) => setForm((f) => ({ ...f, consent: e.target.checked }))}
                  className="mt-1 w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-200" />
                <label htmlFor="consent" className="text-sm text-slate-600 leading-relaxed">{m.consent}</label>
              </div>
              <button type="submit" disabled={status === 'submitting' || !form.consent}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#4A6FA5] text-white text-sm font-medium hover:bg-[#3A5F95] transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
                {status === 'submitting' ? (<><Clock size={16} className="animate-spin" />{m.sending}</>) : (<><Send size={16} />{m.sendMessage}</>)}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

/* ─── FnLink helpers ─────────────────────────────────── */
function FnLink({ href, to, icon, children }: { href?: string; to?: string; icon: React.ReactNode; children: React.ReactNode }) {
  const cls = "fn-link";
  if (href) return <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>{icon}{children}</a>;
  if (to)   return <Link to={to} className={cls}>{icon}{children}</Link>;
  return null;
}

function FnLinkDark({ href, to, icon, children }: { href?: string; to?: string; icon: React.ReactNode; children: React.ReactNode }) {
  const cls = "fn-link-dark";
  if (href) return <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>{icon}{children}</a>;
  if (to)   return <Link to={to} className={cls}>{icon}{children}</Link>;
  return null;
}

/* ─── Main App ───────────────────────────────────────── */
export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { id: 'about',    label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'concepts', label: 'Concepts' },
    { id: 'evidence', label: 'Evidence' },
    { id: 'skills',   label: 'Skills' },
  ];

  return (
    <div style={{ fontFamily: 'Georgia, serif', background: '#F7F3EE', color: '#1C2030' }}>

      {/* ── Nav ─────────────────────────────────────── */}
      <nav style={{
        background: scrolled ? 'rgba(247,243,238,0.95)' : '#F7F3EE',
        backdropFilter: scrolled ? 'blur(8px)' : 'none',
        borderBottom: '1px solid rgba(0,0,0,0.06)',
        position: 'sticky', top: 0, zIndex: 50,
        padding: '14px 48px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        transition: 'background 0.2s',
      }}>
        <button onClick={() => scrollTo('hero')} style={{
          fontFamily: "'Helvetica Neue', Arial, sans-serif", fontSize: 12, fontWeight: 600,
          letterSpacing: '0.18em', textTransform: 'uppercase', color: '#1C2030', background: 'none', border: 'none', cursor: 'pointer',
        }}>Klairs</button>

        <div className="hidden md:flex" style={{ alignItems: 'center', gap: 24 }}>
          {navLinks.map(({ id, label }) => (
            <button key={id} onClick={() => scrollTo(id)} style={{
              fontFamily: "'Helvetica Neue', Arial, sans-serif", fontSize: 10, letterSpacing: '0.15em',
              textTransform: 'uppercase', color: '#8A8A9A', background: 'none', border: 'none', cursor: 'pointer',
            }}>{label}</button>
          ))}
          <button onClick={() => setModalOpen(true)} style={{
            border: '1px solid #4A6FA5', color: '#4A6FA5', padding: '6px 16px',
            fontFamily: "'Helvetica Neue', Arial, sans-serif", fontSize: 10, letterSpacing: '0.15em',
            textTransform: 'uppercase', cursor: 'pointer', background: 'none',
          }}>Contact</button>
        </div>

        <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#1C2030' }}>
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {mobileMenuOpen && (
        <div style={{ background: '#F7F3EE', borderBottom: '1px solid rgba(0,0,0,0.07)', padding: '12px 24px' }}>
          {[...navLinks, { id: 'contact', label: 'Contact' }].map(({ id, label }) => (
            <button key={id} onClick={() => scrollTo(id)} style={{
              display: 'block', width: '100%', textAlign: 'left', padding: '10px 0',
              fontFamily: "'Helvetica Neue', Arial, sans-serif", fontSize: 10, letterSpacing: '0.15em',
              textTransform: 'uppercase', color: '#4A6FA5', background: 'none', border: 'none', cursor: 'pointer',
            }}>{label}</button>
          ))}
        </div>
      )}

      {/* ── Hero ────────────────────────────────────── */}
      <section id="hero" style={{ background: '#1C2030', color: '#F7F3EE', padding: '72px 48px 64px', position: 'relative', overflow: 'hidden' }}>
        <svg style={{ position: 'absolute', top: 40, right: 48, opacity: 0.05 }} width="200" height="200" viewBox="0 0 300 300" fill="none">
          <rect x="20" y="20" width="260" height="260" stroke="white" strokeWidth="0.8" fill="none"/>
          <rect x="60" y="60" width="180" height="180" stroke="white" strokeWidth="0.5" fill="none"/>
          <line x1="20" y1="20" x2="60" y2="60" stroke="white" strokeWidth="0.5"/>
          <line x1="280" y1="20" x2="240" y2="60" stroke="white" strokeWidth="0.5"/>
          <line x1="20" y1="280" x2="60" y2="240" stroke="white" strokeWidth="0.5"/>
          <line x1="280" y1="280" x2="240" y2="240" stroke="white" strokeWidth="0.5"/>
          <circle cx="150" cy="150" r="60" stroke="white" strokeWidth="0.5" fill="none"/>
        </svg>

        <div style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif", fontSize: 10, letterSpacing: '0.25em', textTransform: 'uppercase', color: '#4A6FA5', marginBottom: 20 }}>
          Product Operations · Customer Success · AI Automation
        </div>
        <h1 style={{ fontSize: 'clamp(36px, 6vw, 48px)', fontWeight: 300, letterSpacing: '-0.01em', lineHeight: 1.1, color: '#F7F3EE', marginBottom: 8 }}>
          I turn confusion<br />into <em style={{ color: '#C8D4E3' }}>systems.</em>
        </h1>
        <div style={{ width: 48, height: 1, background: '#4A6FA5', margin: '18px 0' }} />
        <p style={{ fontSize: 14, fontWeight: 300, color: 'rgba(200,212,227,0.55)', maxWidth: 400, lineHeight: 1.8, marginBottom: 36 }}>
          Product Ops & CS specialist bridging customer feedback, operational gaps, and AI automation into practical delivery.
        </p>

        <div style={{ display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap' }}>
          <button onClick={() => setModalOpen(true)} style={{
            background: '#4A6FA5', color: '#F7F3EE', padding: '11px 24px',
            fontFamily: "'Helvetica Neue', Arial, sans-serif", fontSize: 10, letterSpacing: '0.15em',
            textTransform: 'uppercase', cursor: 'pointer', fontWeight: 500, border: 'none',
          }}>Contact Me</button>

          <button onClick={() => scrollTo('projects')} style={{
            border: '1px solid rgba(200,212,227,0.25)', color: '#F7F3EE', padding: '11px 24px',
            fontFamily: "'Helvetica Neue', Arial, sans-serif", fontSize: 10, letterSpacing: '0.15em',
            textTransform: 'uppercase', cursor: 'pointer', background: 'none',
          }}>View Projects</button>

          <div style={{ width: 1, height: 20, background: 'rgba(255,255,255,0.1)', margin: '0 4px' }} />

          <a href="https://github.com/Ngamei" target="_blank" rel="noopener noreferrer" className="social-icon" title="GitHub"><IconGithub /></a>
          <a href="https://www.linkedin.com/in/klairshr/" target="_blank" rel="noopener noreferrer" className="social-icon" title="LinkedIn"><IconLinkedin /></a>
          <a href="mailto:ngamei2912@gmail.com" className="social-icon" title="Email"><IconMail /></a>
        </div>
      </section>

      {/* ── About ───────────────────────────────────── */}
      <section id="about" className="kl-page">
        <span className="kl-label">01 — About</span>
        <h2 className="kl-title">About <em>Klairs</em></h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'clamp(120px,15vw,160px) 1fr', gap: 36, alignItems: 'start' }}>
          <img src="/klairs-profile.png" alt="Klairs" style={{ aspectRatio: '1 / 1.2', objectFit: 'cover', objectPosition: 'top', width: '100%', display: 'block' }} />
          <div>
            <p style={{ fontSize: 14, color: '#3A3A4A', lineHeight: 1.85, marginBottom: 14 }}>
              I grew up in the gap between customers and product teams — the place where honest feedback disappears into a Slack thread, where merchants stop using a tool because nobody translated their frustration into a requirement.
            </p>
            <p style={{ fontSize: 13, color: '#8A8A9A', lineHeight: 1.85, marginBottom: 16 }}>
              I've worked across SaaS, FinTech, AI automation, and marketplace platforms — always in that in-between role that's hard to name but easy to feel the absence of.
            </p>
            <div className="kl-pull">"Customer empathy, product thinking, technical curiosity — none of those work as well alone."</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 2, marginTop: 14 }}>
              {['SaaS', 'FinTech', 'AI Automation', 'Marketplace', 'CRM Integration'].map((tag, i) => (
                <span key={tag} className={i % 2 === 0 ? 'kl-tag' : 'kl-tag kl-tag-alt'}>{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Capabilities ─────────────────────────────── */}
      <section id="capabilities" className="kl-page-tinted">
        <span className="kl-label">02 — Capabilities</span>
        <h2 className="kl-title">What I <em>do</em></h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 2 }}>
          {[
            { bg: '#EBF0F7', title: 'Product & Workflow Thinking', text: 'I translate unclear customer or merchant issues into structured requirements, user stories, QA notes, and product improvements.' },
            { bg: '#DDE5F0', title: 'QA & Edge Case Testing', text: 'I test workflows end to end, document edge cases, reproduce issues clearly, and help teams understand what is actually happening.' },
            { bg: '#E3EAF6', title: 'AI-Assisted Systems', text: 'I build AI-supported tools, documentation flows, automations, and internal assistants that reduce confusion and improve execution.' },
          ].map(({ bg, title, text }) => (
            <div key={title} style={{ background: bg, padding: '28px 24px' }}>
              <h3 style={{ fontSize: 15, fontWeight: 400, color: '#1C2030', marginBottom: 10 }}>{title}</h3>
              <p style={{ fontSize: 13, color: '#6A6A7A', lineHeight: 1.75 }}>{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Featured Product Projects ─────────────── */}
      <section id="projects" className="kl-page">
        <span className="kl-label">03 — Featured Product Projects</span>
        <h2 className="kl-title">4 projects shipped <em>in under 2 months</em></h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>

          {/* Hello Clever */}
          <div className="proj-card">
            <div className="proj-top" style={{ background: '#EBF0F7' }}>
              <div style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif", fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#4A6FA5', marginBottom: 6 }}>01 · AI · QA</div>
              <h3 style={{ fontSize: 16, fontWeight: 400, color: '#1C2030', marginBottom: 8 }}>Hello Clever — Support AI Engine</h3>
              <p style={{ fontSize: 13, color: '#6A6A7A', lineHeight: 1.7, marginBottom: 14 }}>Support teams were writing merchant replies by hand, inconsistently, for 7 different ticket types. Built a GPT-powered engine that classifies and generates replies — validated with a full Playwright regression suite.</p>
              <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 0 }}>
                {['Next.js', 'OpenAI', 'Playwright'].map((t, i) => <span key={t} className={i % 2 === 0 ? 'kl-tag' : 'kl-tag kl-tag-alt'}>{t}</span>)}
              </div>
              <div className="fn-row">
                <FnLink href="https://ksupportai.klairsthefirst.com/workspace" icon={<IconGlobe />}>Live Site</FnLink>
                <FnLink href="https://github.com/Ngamei/klever-support-engineer-ai" icon={<IconGithubSm />}>GitHub</FnLink>
              </div>
            </div>
            <div className="proj-outcome" style={{ background: '#1C2030' }}>
              <div>
                <div style={{ fontSize: 36, fontWeight: 300, color: '#F7F3EE', lineHeight: 1 }}>132/132</div>
                <div style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif", fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#4A6FA5', marginTop: 6 }}>Test cases passing</div>
                <div style={{ fontSize: 12, color: '#C8D4E3', marginTop: 10, lineHeight: 1.7 }}>7 reply types · Matrix test suite · Zero regressions</div>
              </div>
              <div className="fn-row-dark" style={{ borderTop: 'none', marginTop: 0 }}>
                <FnLinkDark href="https://ksupportai.klairsthefirst.com/workspace" icon={<IconGlobe />}>Live Site</FnLinkDark>
                <FnLinkDark href="https://github.com/Ngamei/klever-support-engineer-ai" icon={<IconGithubSm />}>GitHub</FnLinkDark>
              </div>
            </div>
          </div>

          {/* Brand Hub */}
          <div className="proj-card">
            <div className="proj-top" style={{ background: '#DDE5F0' }}>
              <div style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif", fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#4A6FA5', marginBottom: 6 }}>02 · Internal Tools · MVP Shipped</div>
              <h3 style={{ fontSize: 16, fontWeight: 400, color: '#1C2030', marginBottom: 8 }}>Brand Hub</h3>
              <p style={{ fontSize: 13, color: '#6A6A7A', lineHeight: 1.7, marginBottom: 14 }}>A multi-brand business had no single source of truth. Built a private internal hub with role-based access, brand portals, 8-phase roadmap, dashboard, decision log, and admin panel. Built, tested, deployed.</p>
              <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                {['Next.js 15', 'Clerk', 'Supabase', 'Playwright'].map((t, i) => <span key={t} className={i % 2 === 0 ? 'kl-tag' : 'kl-tag kl-tag-alt'}>{t}</span>)}
              </div>
              <div className="fn-row">
                <FnLink to="/case-studies/anh-nga-diamond-brand-hub" icon={<IconDoc />}>Project Notes</FnLink>
                <FnLink href="https://brandhub.klairsthefirst.com/" icon={<IconGlobe />}>Live Site</FnLink>
                <FnLink href="https://github.com/Ngamei" icon={<IconGithubSm />}>GitHub</FnLink>
              </div>
            </div>
            <div className="proj-outcome" style={{ background: '#1C3254' }}>
              <div>
                <div style={{ fontSize: 20, fontWeight: 300, color: '#F7F3EE', lineHeight: 1.35 }}>3 roles · 8+ routes · Live on Vercel</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 3, marginTop: 12 }}>
                  {['Milestones A–E2 complete', 'Dashboard, admin, brand portals', 'Full Playwright test suite'].map(c => (
                    <div key={c} style={{ fontSize: 11, color: '#C8D4E3' }}>✓ {c}</div>
                  ))}
                </div>
              </div>
              <div className="fn-row-dark" style={{ borderTop: 'none', marginTop: 0 }}>
                <FnLinkDark to="/case-studies/anh-nga-diamond-brand-hub" icon={<IconDoc />}>Project Notes</FnLinkDark>
                <FnLinkDark href="https://brandhub.klairsthefirst.com/" icon={<IconGlobe />}>Live Site</FnLinkDark>
                <FnLinkDark href="https://github.com/Ngamei" icon={<IconGithubSm />}>GitHub</FnLinkDark>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── Automation & Integration ──────────────── */}
      <section className="kl-page-tinted">
        <span className="kl-label">04 — Automation & Integration Workflows</span>
        <h2 className="kl-title">Systems that <em>run themselves</em></h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>

          {/* Broot */}
          <div className="proj-card">
            <div className="proj-top" style={{ background: '#E3EAF6' }}>
              <div style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif", fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#4A6FA5', marginBottom: 6 }}>03 · CRM · Automation</div>
              <h3 style={{ fontSize: 16, fontWeight: 400, color: '#1C2030', marginBottom: 8 }}>Broot → CRM Sync</h3>
              <p style={{ fontSize: 13, color: '#6A6A7A', lineHeight: 1.7, marginBottom: 14 }}>Trade show contacts were going cold — no routing, no follow-up, no CRM path. Built a Hot/Warm/Cold tagging system with instant follow-up triggers and sync into 3 CRMs. Zero manual entry required.</p>
              <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                {['n8n', 'HubSpot', 'Zoho', 'Streak'].map((t, i) => <span key={t} className={i % 2 === 0 ? 'kl-tag' : 'kl-tag kl-tag-alt'}>{t}</span>)}
              </div>
              <div className="fn-row">
                <FnLink to="/case-studies/broot-crm-sync" icon={<IconPen />}>View Case Study</FnLink>
                <FnLink href="https://ngamei2912.app.n8n.cloud/" icon={<IconGlobe />}>Live Site</FnLink>
                <FnLink href="https://github.com/Ngamei" icon={<IconGithubSm />}>GitHub</FnLink>
              </div>
            </div>
            <div className="proj-outcome" style={{ background: '#DDE5F0', borderLeft: '3px solid #4A6FA5' }}>
              <div style={{ fontSize: 20, fontWeight: 300, color: '#1C2030', lineHeight: 1.35 }}>3 CRMs · 1 automated flow · 0 manual steps</div>
              <div style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif", fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#4A6FA5', display: 'flex', alignItems: 'center', gap: 6 }}>
                <span style={{ width: 5, height: 5, background: '#4A6FA5', borderRadius: '50%', display: 'inline-block' }} />
                Guidde demo available
              </div>
            </div>
          </div>

          {/* Contact Automation */}
          <div className="proj-card">
            <div className="proj-top" style={{ background: '#DDE5F0' }}>
              <div style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif", fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#4A6FA5', marginBottom: 6 }}>04 · Automation · Portfolio</div>
              <h3 style={{ fontSize: 16, fontWeight: 400, color: '#1C2030', marginBottom: 8 }}>Portfolio Contact Automation</h3>
              <p style={{ fontSize: 13, color: '#6A6A7A', lineHeight: 1.7, marginBottom: 14 }}>Built the contact infrastructure for this portfolio — form submission → webhook → Google Sheets logging + email notification, deployed end-to-end with Vercel, custom domain, and Cloudflare DNS.</p>
              <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                {['Apps Script', 'Vercel', 'Cloudflare'].map((t, i) => <span key={t} className={i % 2 === 0 ? 'kl-tag' : 'kl-tag kl-tag-alt'}>{t}</span>)}
              </div>
              <div className="fn-row">
                <FnLink to="/case-studies/portfolio-contact-automation" icon={<IconPen />}>View Case Study</FnLink>
                <FnLink href="https://aboutme.klairsthefirst.com" icon={<IconGlobe />}>Live Site</FnLink>
                <FnLink href="https://github.com/Ngamei/AboutMeKlairs" icon={<IconGithubSm />}>GitHub</FnLink>
              </div>
            </div>
            <div className="proj-outcome" style={{ background: '#1C2030' }}>
              <div>
                <div style={{ fontSize: 20, fontWeight: 300, color: '#F7F3EE', lineHeight: 1.35 }}>End-to-end · Live · Self-documented</div>
                <div style={{ fontSize: 12, color: '#C8D4E3', marginTop: 8 }}>Custom domain · Auto-logging · Email alerts</div>
              </div>
              <div className="fn-row-dark" style={{ borderTop: 'none', marginTop: 0 }}>
                <FnLinkDark to="/case-studies/portfolio-contact-automation" icon={<IconPen />}>Case Study</FnLinkDark>
                <FnLinkDark href="https://aboutme.klairsthefirst.com" icon={<IconGlobe />}>Live Site</FnLinkDark>
                <FnLinkDark href="https://github.com/Ngamei/AboutMeKlairs" icon={<IconGithubSm />}>GitHub</FnLinkDark>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── Product Ideas & Concepts ─────────────── */}
      <section id="concepts" className="kl-page">
        <span className="kl-label">05 — Product Ideas & Concepts</span>
        <h2 className="kl-title">How I think about <em>what could exist</em></h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>

          {/* Klairs PM Assistance */}
          <div className="proj-card">
            <div className="proj-top" style={{ background: '#EDF1F8' }}>
              <div style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif", fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#4A6FA5', marginBottom: 6 }}>Concept · AI · Product Management</div>
              <h3 style={{ fontSize: 16, fontWeight: 400, color: '#1C2030', marginBottom: 8 }}>Klairs PM Assistance</h3>
              <p style={{ fontSize: 13, color: '#6A6A7A', lineHeight: 1.7, marginBottom: 14 }}>
                A personal AI workflow concept that converts merchant issues, onboarding friction, payment setup problems, dashboard UX gaps, support tickets, and product feedback into structured PM outputs — requirements, discovery questions, QA scenarios, prioritization notes, stakeholder summaries, and engineering handoff.
              </p>
              <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                {['AI Workflow', 'Merchant Experience', 'PM Ops'].map((t, i) => <span key={t} className={i % 2 === 0 ? 'kl-tag' : 'kl-tag kl-tag-alt'}>{t}</span>)}
              </div>
            </div>
          </div>

          {/* Rise-n-Match */}
          <div className="proj-card">
            <div className="proj-top" style={{ background: '#E3EAF6' }}>
              <div style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif", fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#4A6FA5', marginBottom: 6 }}>Concept · Marketplace · Booking</div>
              <h3 style={{ fontSize: 16, fontWeight: 400, color: '#1C2030', marginBottom: 8 }}>Rise-n-Match</h3>
              <p style={{ fontSize: 13, color: '#6A6A7A', lineHeight: 1.7, marginBottom: 14 }}>
                A centralized Pilates marketplace concept that helps users discover studios, get matched to the right class, and book in one place — while helping studios fill off-peak beds with higher-intent leads.
              </p>
              <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                {['Marketplace', 'Matching', 'MVP Roadmap'].map((t, i) => <span key={t} className={i % 2 === 0 ? 'kl-tag' : 'kl-tag kl-tag-alt'}>{t}</span>)}
              </div>
              <div className="fn-row">
                <FnLink to="/concepts/risen-match" icon={<IconDoc />}>View Concept</FnLink>
                <FnLink to="/concepts/risen-match/roadmap" icon={<IconPen />}>MVP Roadmap</FnLink>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── Evidence ─────────────────────────────── */}
      <section id="evidence" className="kl-navy">
        <span className="kl-label">06 — Evidence</span>
        <h2 className="kl-title">I don't just complete tasks — <em>I create evidence.</em></h2>
        <p style={{ fontSize: 14, color: '#C8D4E3', maxWidth: 500, lineHeight: 1.85, marginBottom: 20 }}>
          My work is documented as it ships: case studies, workflow demos, before/after results, and clear reasoning. Not just what I built — but how I think.
        </p>
        <div style={{ width: 48, height: 1, background: '#4A6FA5', margin: '18px 0' }} />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0, maxWidth: 540 }}>
          <div style={{ fontSize: 13, color: '#C8D4E3', lineHeight: 1.9 }}>
            <div>→ Documentation &amp; SOPs</div>
            <div>→ Workflow screenshots &amp; demos</div>
            <div>→ Before/after comparisons</div>
          </div>
          <div style={{ fontSize: 13, color: '#C8D4E3', lineHeight: 1.9 }}>
            <div>→ Clear reasoning &amp; decisions</div>
            <div>→ Evidence-based outcomes</div>
            <div>→ User-focused thinking</div>
          </div>
        </div>

        {/* Artifact links table */}
        <div style={{ marginTop: 40, overflowX: 'auto' }}>
          <table style={{ width: '100%', maxWidth: 760, borderCollapse: 'collapse', fontSize: 13 }}>
            <thead>
              <tr>
                {['Artifact', 'Type', 'Link'].map(h => (
                  <th key={h} style={{ textAlign: 'left', padding: '10px 14px', fontFamily: "'Helvetica Neue', Arial, sans-serif", fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#4A6FA5', borderBottom: '1px solid rgba(200,212,227,0.25)', fontWeight: 500 }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                { name: 'GitHub Profile', type: 'Code', label: 'View Profile', href: 'https://github.com/Ngamei' },
                { name: 'Hello Clever Support Engineer AI', type: 'Repository', label: 'View Repository', href: 'https://github.com/Ngamei/klever-support-engineer-ai' },
                { name: 'CrewAnywhere', type: 'Repository', label: 'View Repository', href: 'https://github.com/Ngamei/CrewAnywhere' },
                { name: 'Broot Automation Demo', type: 'Guidde Walkthrough', label: 'Watch Demo', href: 'https://app.guidde.com/playbooks/playlist/bJf686sP6H9wSqw9x2W7WG?origin=zoab0ogvHsgFE4oEVUArPm8Tyqo1&active=0' },
                { name: 'n8n Automation Workspace', type: 'Workspace', label: 'Open Workspace', href: 'https://ngamei2912.app.n8n.cloud/' },
                { name: 'Broot → Streak CRM Webhook Setup', type: 'Documentation', label: 'Request Document', href: 'mailto:ngamei2912@gmail.com?subject=Request%3A%20Broot%20%E2%86%92%20Streak%20CRM%20Webhook%20Setup%20document' },
                { name: 'Product Manager Resume', type: 'Resume', label: 'Request Document', href: 'mailto:ngamei2912@gmail.com?subject=Request%3A%20Product%20Manager%20Resume' },
                { name: 'Rise-n-Match Concept & MVP Roadmap', type: 'Concept Pages', label: 'View Concept', to: '/concepts/risen-match' },
              ].map(({ name, type, label, href, to }) => (
                <tr key={name}>
                  <td style={{ padding: '11px 14px', color: '#F7F3EE', borderBottom: '1px solid rgba(200,212,227,0.12)' }}>{name}</td>
                  <td style={{ padding: '11px 14px', color: '#C8D4E3', borderBottom: '1px solid rgba(200,212,227,0.12)', fontFamily: "'Helvetica Neue', Arial, sans-serif", fontSize: 11, letterSpacing: '0.08em', textTransform: 'uppercase' }}>{type}</td>
                  <td style={{ padding: '11px 14px', borderBottom: '1px solid rgba(200,212,227,0.12)' }}>
                    {to
                      ? <Link to={to} style={{ color: '#C8D4E3', textDecoration: 'underline', textUnderlineOffset: 3 }}>{label} →</Link>
                      : <a href={href} target={href!.startsWith('mailto:') ? undefined : '_blank'} rel="noopener noreferrer" style={{ color: '#C8D4E3', textDecoration: 'underline', textUnderlineOffset: 3 }}>{label} →</a>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ── Selected Outcomes ────────────────────── */}
      <section id="outcomes" className="kl-page-tinted">
        <span className="kl-label">07 — Selected Outcomes</span>
        <h2 className="kl-title">Results, <em>not just activity</em></h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 2 }}>
          {[
            'Built an AI merchant support engine with structured classification and merchant-ready reply generation',
            'Created a V3 Merchant Reply Engine with 132/132 matrix cases passing',
            'Designed CrewAnywhere as a marketplace and operations platform with onboarding, jobs, assignments, shifts, wallets, payments, and withdrawals',
            'Designed and tested webhook and CRM integration workflows across Broot, n8n, HubSpot, Zoho, and Streak',
            'Created webhook and CRM integration documentation for Streak API setup and nested CRM field mapping',
            'Supported customer onboarding, implementation, UAT, regression testing, release validation, and workflow automation',
          ].map((outcome, i) => (
            <div key={outcome} style={{ background: i % 2 === 0 ? '#EBF0F7' : '#E3EAF6', padding: '22px 24px', display: 'flex', gap: 14, alignItems: 'flex-start' }}>
              <span style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif", fontSize: 10, letterSpacing: '0.1em', color: '#4A6FA5', marginTop: 3 }}>{String(i + 1).padStart(2, '0')}</span>
              <p style={{ fontSize: 13, color: '#3A3A4A', lineHeight: 1.7 }}>{outcome}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Skills ───────────────────────────────── */}
      <section id="skills" className="kl-page">
        <span className="kl-label">08 — Skills</span>
        <h2 className="kl-title">How I <em>work</em></h2>
        <div className="kl-skills">
          {[
            { label: 'Product & Ops',     val: 'Discovery, roadmap, backlog, user stories, PRD/FRD, UAT, release readiness' },
            { label: 'Customer Success',  val: 'SaaS onboarding, implementation, adoption, escalation handling, SOPs, playbooks' },
            { label: 'AI & Automation',   val: 'Prompt engineering, OpenAI/GPT, n8n, Zapier, chatbot workflow design, automation QA' },
            { label: 'API / Integration', val: 'REST APIs, webhooks, JSON, Postman, CRM integrations, field mapping, regression testing' },
            { label: 'Build',             val: 'Next.js 15, React, TypeScript, Tailwind, Clerk, Supabase, Vercel, Playwright, GitHub' },
            { label: 'CRM & Tools',       val: 'HubSpot, Zoho CRM, Streak, Jira, Notion, Monday.com, Guidde, Google Sheets, Figma' },
          ].map(({ label, val }) => (
            <div key={label} className="kl-skill-row">
              <div className="kl-skill-label">{label}</div>
              <div className="kl-skill-val">{val}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Contact ──────────────────────────────── */}
      <section id="contact" className="kl-navy">
        <span className="kl-label">09 — Contact</span>
        <p style={{ fontSize: 'clamp(20px,3vw,26px)', fontWeight: 300, color: '#F7F3EE', maxWidth: 440, lineHeight: 1.5, marginBottom: 14 }}>
          Building a product, fixing an ops gap, or need someone who moves between customers and engineering?
        </p>
        <div style={{ width: 48, height: 1, background: '#4A6FA5', margin: '18px 0' }} />
        <p style={{ fontSize: 14, color: '#C8D4E3', maxWidth: 380, lineHeight: 1.8, marginBottom: 28 }}>
          Open to roles and projects in Product Operations, Customer Success, AI Automation, and SaaS implementation.
        </p>
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 20 }}>
          <button onClick={() => setModalOpen(true)} style={{
            background: '#4A6FA5', color: '#F7F3EE', padding: '11px 24px', border: 'none',
            fontFamily: "'Helvetica Neue', Arial, sans-serif", fontSize: 10, letterSpacing: '0.15em',
            textTransform: 'uppercase', cursor: 'pointer', fontWeight: 500,
          }}>Contact Me</button>
          <a href="https://www.linkedin.com/in/klairshr/" target="_blank" rel="noopener noreferrer" style={{
            border: '1px solid rgba(200,212,227,0.3)', color: '#C8D4E3', padding: '11px 24px',
            fontFamily: "'Helvetica Neue', Arial, sans-serif", fontSize: 10, letterSpacing: '0.15em',
            textTransform: 'uppercase', cursor: 'pointer', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 6,
          }}><Linkedin size={12} />LinkedIn</a>
          <a href="https://github.com/Ngamei" target="_blank" rel="noopener noreferrer" style={{
            border: '1px solid rgba(200,212,227,0.3)', color: '#C8D4E3', padding: '11px 24px',
            fontFamily: "'Helvetica Neue', Arial, sans-serif", fontSize: 10, letterSpacing: '0.15em',
            textTransform: 'uppercase', cursor: 'pointer', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 6,
          }}><Github size={12} />GitHub</a>
        </div>
        <div style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif", fontSize: 11, color: 'rgba(200,212,227,0.35)', letterSpacing: '0.06em' }}>ngamei2912@gmail.com</div>
      </section>

      {/* ── Footer ───────────────────────────────── */}
      <footer style={{ background: '#1C2030', color: '#4A5A6A', padding: '20px 48px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontFamily: "'Helvetica Neue', Arial, sans-serif", fontSize: 11, letterSpacing: '0.08em', flexWrap: 'wrap', gap: 8 }}>
        <div><span style={{ color: '#4A6FA5' }}>Klairs</span> — Portfolio 2025</div>
        <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
          <a href="https://github.com/Ngamei" target="_blank" rel="noopener noreferrer" style={{ color: '#4A5A6A', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 4 }}><Github size={13} />GitHub</a>
          <a href="mailto:ngamei2912@gmail.com" style={{ color: '#4A5A6A', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 4 }}><Mail size={13} />Email</a>
          <a href="https://www.linkedin.com/in/klairshr/" target="_blank" rel="noopener noreferrer" style={{ color: '#4A5A6A', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 4 }}><Linkedin size={13} />LinkedIn</a>
        </div>
      </footer>

      <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}

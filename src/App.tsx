import { useEffect, useState, useRef, useCallback } from 'react';
import {
  Github,
  Mail,
  Linkedin,
  ExternalLink,
  Menu,
  X,
  Brain,
  CheckCircle2,
  Send,
  FileText,
  Eye,
  Clock,
  Check,
  AlertCircle,
  Award,
  Target,
  Zap,
} from 'lucide-react';
import { submitContactForm } from './lib/contact';
import { useLanguage, LanguageSelector } from './lib/i18n';
import { projectConfigs, conceptConfigs, evidenceConfigs, skillGroupIds } from './portfolio-data';

/* ─── Contact Modal ─── */
interface ContactModalProps {
  open: boolean;
  onClose: () => void;
}

function ContactModal({ open, onClose }: ContactModalProps) {
  const { t } = useLanguage();
  const m = t.modal;
  const [form, setForm] = useState({
    full_name: '',
    email: '',
    company_project: '',
    contact_reason: '',
    message: '',
    relevant_link: '',
    preferred_contact: '',
    timeline: '',
    consent: false,
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const modalRef = useRef<HTMLDivElement>(null);

  const reset = useCallback(() => {
    setForm({
      full_name: '',
      email: '',
      company_project: '',
      contact_reason: '',
      message: '',
      relevant_link: '',
      preferred_contact: '',
      timeline: '',
      consent: false,
    });
    setStatus('idle');
  }, []);

  useEffect(() => {
    if (!open) {
      reset();
      return;
    }
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [open, onClose, reset]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.full_name.trim() || !form.email.trim() || !form.message.trim()) return;
    if (!form.consent) return;

    setStatus('submitting');

    let message = form.message.trim();
    if (form.relevant_link.trim()) {
      message += `\n\nRelevant link: ${form.relevant_link.trim()}`;
    }
    if (form.timeline) {
      message += `\n\nTimeline: ${form.timeline}`;
    }

    const payload = {
      name: form.full_name.trim(),
      email: form.email.trim(),
      company: form.company_project.trim(),
      role: form.contact_reason,
      projectType: form.contact_reason,
      preferredContact: form.preferred_contact,
      message,
      source: 'Klairs Portfolio Website',
    };

    try {
      await submitContactForm(payload);
      setForm({
        full_name: '',
        email: '',
        company_project: '',
        contact_reason: '',
        message: '',
        relevant_link: '',
        preferred_contact: '',
        timeline: '',
        consent: false,
      });
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={onClose} />
      <div
        ref={modalRef}
        className="relative bg-white rounded-2xl shadow-2xl border border-slate-200 w-full max-w-lg max-h-[90vh] overflow-y-auto"
      >
        <div className="flex items-center justify-between p-6 pb-0">
          <div>
            <h3 className="text-xl font-bold text-slate-900">{m.title}</h3>
            <p className="text-sm text-slate-500 mt-1">{m.subtitle}</p>
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-600 transition-colors">
            <X size={20} />
          </button>
        </div>

        <div className="p-6">
          {status === 'success' ? (
            <div className="text-center py-10">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent-50 text-accent-600 mb-4">
                <Check size={24} />
              </div>
              <p className="text-base text-slate-700 leading-relaxed mb-6">{m.thanks}</p>
              <button
                onClick={onClose}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-slate-900 text-white text-sm font-medium hover:bg-slate-800 transition-colors"
              >
                {m.close}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {status === 'error' && (
                <div className="flex items-start gap-2 rounded-lg bg-red-50 border border-red-100 p-3 text-sm text-red-700">
                  <AlertCircle size={16} className="mt-0.5 shrink-0" />
                  <span>{m.error}</span>
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">{m.fullName}</label>
                <input
                  required
                  type="text"
                  value={form.full_name}
                  onChange={(e) => setForm((f) => ({ ...f, full_name: e.target.value }))}
                  placeholder={m.fullNamePlaceholder}
                  className="w-full px-3 py-2.5 rounded-lg border border-slate-200 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-accent-200 focus:border-accent-400 transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">{m.email}</label>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                  placeholder={m.emailPlaceholder}
                  className="w-full px-3 py-2.5 rounded-lg border border-slate-200 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-accent-200 focus:border-accent-400 transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">{m.companyProject}</label>
                <input
                  type="text"
                  value={form.company_project}
                  onChange={(e) => setForm((f) => ({ ...f, company_project: e.target.value }))}
                  placeholder={m.companyPlaceholder}
                  className="w-full px-3 py-2.5 rounded-lg border border-slate-200 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-accent-200 focus:border-accent-400 transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">{m.contactReason}</label>
                <select
                  value={form.contact_reason}
                  onChange={(e) => setForm((f) => ({ ...f, contact_reason: e.target.value }))}
                  className="w-full px-3 py-2.5 rounded-lg border border-slate-200 text-sm text-slate-800 bg-white focus:outline-none focus:ring-2 focus:ring-accent-200 focus:border-accent-400 transition-all"
                >
                  <option value="">{m.selectOption}</option>
                  {m.reasons.map((reason) => (
                    <option key={reason} value={reason}>
                      {reason}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">{m.message}</label>
                <textarea
                  required
                  value={form.message}
                  onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                  placeholder={m.messagePlaceholder}
                  rows={4}
                  className="w-full px-3 py-2.5 rounded-lg border border-slate-200 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-accent-200 focus:border-accent-400 transition-all resize-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">{m.relevantLink}</label>
                <input
                  type="url"
                  value={form.relevant_link}
                  onChange={(e) => setForm((f) => ({ ...f, relevant_link: e.target.value }))}
                  placeholder={m.relevantLinkPlaceholder}
                  className="w-full px-3 py-2.5 rounded-lg border border-slate-200 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-accent-200 focus:border-accent-400 transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">{m.preferredContact}</label>
                <select
                  value={form.preferred_contact}
                  onChange={(e) => setForm((f) => ({ ...f, preferred_contact: e.target.value }))}
                  className="w-full px-3 py-2.5 rounded-lg border border-slate-200 text-sm text-slate-800 bg-white focus:outline-none focus:ring-2 focus:ring-accent-200 focus:border-accent-400 transition-all"
                >
                  <option value="">{m.selectOption}</option>
                  {m.contactMethods.map((method) => (
                    <option key={method} value={method}>
                      {method}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">{m.timeline}</label>
                <select
                  value={form.timeline}
                  onChange={(e) => setForm((f) => ({ ...f, timeline: e.target.value }))}
                  className="w-full px-3 py-2.5 rounded-lg border border-slate-200 text-sm text-slate-800 bg-white focus:outline-none focus:ring-2 focus:ring-accent-200 focus:border-accent-400 transition-all"
                >
                  <option value="">{m.selectOption}</option>
                  {m.timelines.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex items-start gap-2">
                <input
                  id="consent"
                  type="checkbox"
                  checked={form.consent}
                  onChange={(e) => setForm((f) => ({ ...f, consent: e.target.checked }))}
                  className="mt-1 w-4 h-4 rounded border-slate-300 text-accent-600 focus:ring-accent-200"
                />
                <label htmlFor="consent" className="text-sm text-slate-600 leading-relaxed">
                  {m.consent}
                </label>
              </div>

              <button
                type="submit"
                disabled={status === 'submitting' || !form.consent}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-slate-900 text-white text-sm font-medium hover:bg-slate-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'submitting' ? (
                  <>
                    <Clock size={16} className="animate-spin" />
                    {m.sending}
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    {m.sendMessage}
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

/* ─── Main App ─── */
function App() {
  const { t } = useLanguage();
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
      const sections = ['hero', 'about', 'work', 'projects', 'concepts', 'evidence', 'skills', 'outcomes', 'approach', 'contact'];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(id);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const navItems = [
    { id: 'about', label: t.nav.about },
    { id: 'projects', label: t.nav.projects },
    { id: 'evidence', label: t.nav.evidence },
    { id: 'skills', label: t.nav.skills },
    { id: 'contact', label: t.nav.contact },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans antialiased">
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-100' : 'bg-transparent'
        }`}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <button
              onClick={() => scrollTo('hero')}
              className="text-base font-semibold text-slate-800 tracking-tight hover:text-accent-600 transition-colors"
            >
              Klairs
            </button>

            <div className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`text-sm font-medium transition-colors ${
                    activeSection === item.id ? 'text-accent-600' : 'text-slate-500 hover:text-slate-800'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <LanguageSelector />
            </div>

            <div className="flex md:hidden items-center gap-2">
              <LanguageSelector />
              <button
                className="p-2 text-slate-600 hover:text-slate-800"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-100 shadow-sm">
            <div className="px-4 py-3 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`block w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    activeSection === item.id
                      ? 'bg-accent-50 text-accent-700'
                      : 'text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* ─── Hero ─── */}
      <section id="hero" className="relative pt-32 pb-20 md:pt-44 md:pb-32 px-4 sm:px-6 lg:px-8 scroll-mt-16">
        <div className="max-w-3xl mx-auto">
          <div className="mb-6 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-50 border border-accent-100 text-accent-700 text-sm font-medium">
            <span>{t.hero.badge[0]}</span>
            <span className="text-accent-300">·</span>
            <span>{t.hero.badge[1]}</span>
            <span className="text-accent-300">·</span>
            <span>{t.hero.badge[2]}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 tracking-tight leading-[1.1] mb-6">
            {t.hero.headline}
          </h1>
          <p className="text-lg sm:text-xl text-slate-500 leading-relaxed max-w-2xl mb-10">
            {t.hero.description}
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => setModalOpen(true)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 text-white text-sm font-medium hover:bg-slate-800 transition-colors"
            >
              <Mail size={16} />
              {t.hero.contactMe}
            </button>
            <button
              onClick={() => scrollTo('projects')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-slate-700 border border-slate-200 text-sm font-medium hover:bg-slate-50 transition-colors"
            >
              <Eye size={16} />
              {t.hero.viewProjects}
            </button>
          </div>

          <div className="mt-16 flex items-center gap-6 text-sm text-slate-400">
            <a
              href="https://github.com/Ngamei"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-slate-600 transition-colors"
            >
              <Github size={14} />
              {t.hero.github}
            </a>
            <a
              href="https://www.linkedin.com/in/klairshr/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-slate-600 transition-colors"
            >
              <Linkedin size={14} />
              {t.hero.linkedin}
            </a>
            <a
              href="mailto:ngamei2912@gmail.com"
              className="flex items-center gap-1.5 hover:text-slate-600 transition-colors"
            >
              <Mail size={14} />
              {t.hero.email}
            </a>
          </div>
        </div>
      </section>

      {/* ─── About Klairs ─── */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 scroll-mt-16">
        <div className="max-w-5xl mx-auto">
          <div className="mb-3">
            <span className="text-sm font-semibold text-accent-600 uppercase tracking-wider">{t.about.eyebrow}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-12 tracking-tight">{t.about.title}</h2>

          <div className="grid md:grid-cols-[300px_1fr] gap-10 md:gap-14 items-start">
            <div className="mx-auto md:mx-0 w-full max-w-[300px]">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-white">
                <img
                  src="/klairs-profile.png"
                  alt={t.about.photoAlt}
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-base text-slate-700 leading-relaxed">{t.about.bio1}</p>
              <p className="text-sm text-slate-600 leading-relaxed">{t.about.bio2}</p>

              <div>
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3">{t.about.specialization}</h3>
                <ul className="space-y-2">
                  {t.about.specializations.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
                      <CheckCircle2 size={14} className="text-accent-500 mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3">{t.about.industryExperience}</h3>
                <div className="flex flex-wrap gap-2">
                  {t.about.industries.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-accent-50 border border-accent-100 text-accent-700 text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <blockquote className="bg-slate-50 rounded-2xl border border-slate-200 p-6 shadow-sm">
                <p className="text-sm text-slate-700 leading-relaxed italic">{t.about.quote}</p>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* ─── What I Do ─── */}
      <section id="work" className="py-20 px-4 sm:px-6 lg:px-8 scroll-mt-16 bg-slate-50/50">
        <div className="max-w-5xl mx-auto">
          <div className="mb-3">
            <span className="text-sm font-semibold text-accent-600 uppercase tracking-wider">{t.work.eyebrow}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-12 tracking-tight">{t.work.title}</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {t.work.cards.map((card, i) => {
              const icons = [Brain, CheckCircle2, Zap];
              const Icon = icons[i];
              return (
                <div key={card.title} className="bg-white rounded-2xl border border-slate-200 p-7 shadow-sm hover:shadow-md transition-shadow">
                  <div className="p-2.5 rounded-xl bg-accent-50 text-accent-600 w-fit mb-5">
                    <Icon size={22} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{card.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{card.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Featured Projects ─── */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 scroll-mt-16">
        <div className="max-w-5xl mx-auto">
          <div className="mb-3">
            <span className="text-sm font-semibold text-accent-600 uppercase tracking-wider">{t.projects.eyebrow}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight">{t.projects.title}</h2>
          <p className="text-slate-500 mb-12 max-w-xl">{t.projects.description}</p>

          <div className="space-y-8">
            {projectConfigs.map((config) => {
              const Icon = config.icon;
              const project = t.projects.items[config.id];
              return (
                <div
                  key={config.id}
                  className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow group"
                >
                  <div className="p-6 sm:p-8">
                    <div className="flex items-center gap-2 mb-4 flex-wrap">
                      <div className="p-2 rounded-lg bg-accent-50 text-accent-600">
                        <Icon size={18} />
                      </div>
                      {project.tags.map((tag) => (
                        <span key={tag} className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-600 text-xs font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-accent-700 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-slate-500 mb-3">{project.subtitle}</p>
                    <p className="text-sm text-slate-600 leading-relaxed mb-6">{project.summary}</p>

                    <div className="grid sm:grid-cols-2 gap-5 mb-6">
                      <div>
                        <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">{t.projects.myRole}</h4>
                        <p className="text-sm text-slate-600 leading-relaxed">{project.role}</p>
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">{t.projects.outcome}</h4>
                        <p className="text-sm text-slate-600 leading-relaxed">{project.outcome}</p>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">{t.projects.keyWork}</h4>
                      <ul className="space-y-1.5">
                        {project.keyWork.map((item) => (
                          <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
                            <CheckCircle2 size={13} className="text-accent-500 mt-0.5 shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">{t.projects.techTools}</h4>
                      <p className="text-sm text-slate-600 leading-relaxed">{project.tech}</p>
                    </div>

                    <div className="flex items-center gap-4 flex-wrap pt-4 border-t border-slate-100">
                      {config.links.map((link) => {
                        const LinkIcon = link.icon;
                        return (
                          <a
                            key={link.labelKey}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
                          >
                            <LinkIcon size={14} />
                            {t.links[link.labelKey]}
                            <ExternalLink size={12} className="text-slate-400" />
                          </a>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Product Ideas & Concepts ─── */}
      <section id="concepts" className="py-20 px-4 sm:px-6 lg:px-8 scroll-mt-16 bg-slate-50/50">
        <div className="max-w-5xl mx-auto">
          <div className="mb-3">
            <span className="text-sm font-semibold text-accent-600 uppercase tracking-wider">{t.concepts.eyebrow}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight">{t.concepts.title}</h2>
          <p className="text-slate-500 mb-12 max-w-xl">{t.concepts.description}</p>

          <div className="grid md:grid-cols-2 gap-6">
            {conceptConfigs.map((config) => {
              const Icon = config.icon;
              const concept = t.concepts.items[config.id];
              return (
                <div
                  key={config.id}
                  className="bg-white rounded-2xl border border-slate-200 p-7 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="p-2.5 rounded-xl bg-accent-50 text-accent-600 w-fit mb-5">
                    <Icon size={22} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1">{concept.title}</h3>
                  <p className="text-sm text-slate-500 mb-4">{concept.subtitle}</p>
                  <p className="text-sm text-slate-600 leading-relaxed">{concept.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Evidence & Artifacts ─── */}
      <section id="evidence" className="py-20 px-4 sm:px-6 lg:px-8 scroll-mt-16">
        <div className="max-w-5xl mx-auto">
          <div className="mb-3">
            <span className="text-sm font-semibold text-accent-600 uppercase tracking-wider">{t.evidence.eyebrow}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight">{t.evidence.title}</h2>
          <p className="text-slate-500 mb-12 max-w-xl">{t.evidence.description}</p>

          <div className="grid sm:grid-cols-2 gap-5">
            {evidenceConfigs.map((config) => {
              const Icon = config.icon;
              const item = t.evidence.items[config.id];
              return (
                <div
                  key={config.id}
                  className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <div className="p-2 rounded-lg bg-accent-50 text-accent-600 shrink-0">
                      <Icon size={18} />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-slate-900">{item.title}</h3>
                      <p className="text-sm text-slate-600 leading-relaxed mt-1">{item.description}</p>
                    </div>
                  </div>
                  <div className="mt-auto pt-4">
                    {config.href ? (
                      <a
                        href={config.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-accent-700 hover:text-accent-800 transition-colors"
                      >
                        {item.linkLabel}
                        <ExternalLink size={12} />
                      </a>
                    ) : (
                      <button
                        onClick={() => setModalOpen(true)}
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
                      >
                        <FileText size={14} />
                        {t.evidence.requestDocument}
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Tech Skills & Tools ─── */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 scroll-mt-16 bg-slate-50/50">
        <div className="max-w-5xl mx-auto">
          <div className="mb-3">
            <span className="text-sm font-semibold text-accent-600 uppercase tracking-wider">{t.skills.eyebrow}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight">{t.skills.title}</h2>
          <p className="text-slate-500 mb-12 max-w-xl">{t.skills.description}</p>

          <div className="grid sm:grid-cols-2 gap-5">
            {skillGroupIds.map((id) => {
              const group = t.skills.groups[id];
              return (
                <div
                  key={id}
                  className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <h3 className="text-base font-bold text-slate-900 mb-3">{group.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{group.items}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Selected Outcomes ─── */}
      <section id="outcomes" className="py-20 px-4 sm:px-6 lg:px-8 scroll-mt-16">
        <div className="max-w-5xl mx-auto">
          <div className="mb-3">
            <span className="text-sm font-semibold text-accent-600 uppercase tracking-wider">{t.outcomes.eyebrow}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-12 tracking-tight">{t.outcomes.title}</h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {t.outcomes.items.map((outcome, index) => (
              <div
                key={outcome}
                className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className="p-1.5 rounded-lg bg-accent-50 text-accent-600">
                    {index === 1 ? <Target size={16} /> : <Award size={16} />}
                  </div>
                  {index === 1 && (
                    <span className="text-lg font-bold text-accent-700">132/132</span>
                  )}
                </div>
                <p className="text-sm text-slate-700 leading-relaxed">{outcome}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── How I Work ─── */}
      <section id="approach" className="py-20 px-4 sm:px-6 lg:px-8 scroll-mt-16 bg-slate-50/50">
        <div className="max-w-3xl mx-auto">
          <div className="mb-3">
            <span className="text-sm font-semibold text-accent-600 uppercase tracking-wider">{t.approach.eyebrow}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-8 tracking-tight">{t.approach.title}</h2>

          <div className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-10 shadow-sm">
            <p className="text-lg text-slate-700 leading-relaxed mb-6">{t.approach.lead}</p>
            <p className="text-sm text-slate-600 leading-relaxed mb-6">{t.approach.body}</p>
            <div className="grid sm:grid-cols-2 gap-3">
              {t.approach.items.map((item) => (
                <div key={item} className="flex items-start gap-2 text-sm text-slate-700">
                  <CheckCircle2 size={14} className="text-accent-500 mt-0.5 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Contact ─── */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 scroll-mt-16">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-3">
            <span className="text-sm font-semibold text-accent-600 uppercase tracking-wider">{t.contact.eyebrow}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6 tracking-tight">{t.contact.title}</h2>
          <p className="text-base text-slate-600 leading-relaxed mb-10">{t.contact.description}</p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => setModalOpen(true)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 text-white text-sm font-medium hover:bg-slate-800 transition-colors"
            >
              <Send size={16} />
              {t.contact.contactMe}
            </button>
            <a
              href="mailto:ngamei2912@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-slate-700 border border-slate-200 text-sm font-medium hover:bg-slate-50 transition-colors"
            >
              <Mail size={16} />
              {t.contact.email}
            </a>
            <a
              href="https://www.linkedin.com/in/klairshr/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-slate-700 border border-slate-200 text-sm font-medium hover:bg-slate-50 transition-colors"
            >
              <Linkedin size={16} />
              {t.contact.linkedin}
            </a>
          </div>
        </div>
      </section>

      {/* ─── Footer ─── */}
      <footer className="py-8 px-4 border-t border-slate-100 bg-white">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-400">&copy; {new Date().getFullYear()} Klairs. {t.footer.rights}</p>
          <div className="flex items-center gap-5">
            <a
              href="https://github.com/Ngamei"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-slate-700 transition-colors"
            >
              <Github size={16} />
              {t.footer.github}
            </a>
            <a
              href="mailto:ngamei2912@gmail.com"
              className="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-slate-700 transition-colors"
            >
              <Mail size={16} />
              {t.footer.email}
            </a>
            <a
              href="https://www.linkedin.com/in/klairshr/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-slate-700 transition-colors"
            >
              <Linkedin size={16} />
              {t.footer.linkedin}
            </a>
          </div>
        </div>
      </footer>

      {/* Contact Modal */}
      <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}

export default App;

import { useEffect, useState } from 'react';
import { FiArrowUpRight, FiMail, FiMenu, FiX, } from 'react-icons/fi';
import SectionTitle from './components/SectionTitle.jsx';
import SkillCard from './components/SkillCard.jsx';
import ProjectCard from './components/ProjectCard.jsx';
import TimelineItem from './components/TimelineItem.jsx';
import DarkModeToggle from './components/DarkModeToggle.jsx';
import { navLinks, skillGroups, experiences, projects, socials } from './data/portfolioData.js';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);
  const resumeUrl = `${import.meta.env.BASE_URL}resume.pdf`;

  useEffect(() => {
    const storedTheme = window.localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldUseDark = storedTheme ? storedTheme === 'dark' : prefersDark;
    setDarkMode(shouldUseDark);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      window.localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      window.localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setResumeOpen(false);
      }
    };

    document.body.style.overflow = resumeOpen ? 'hidden' : '';
    window.addEventListener('keydown', handleEscape);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleEscape);
    };
  }, [resumeOpen]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 transition-colors duration-500 dark:bg-slate-950 dark:text-slate-100">
      <header className="sticky top-0 z-40 border-b border-slate-200/90 bg-white/90 backdrop-blur-xl dark:border-slate-800/90 dark:bg-slate-950/80">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="#home" className="text-lg font-semibold tracking-tight text-slate-950 dark:text-white">
            R. Kishore
          </a>
          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-600 transition hover:text-cyan-600 dark:text-slate-300 dark:hover:text-cyan-300"
              >
                {link.title}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-slate-100 text-slate-700 transition hover:bg-slate-200 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800 md:hidden"
              onClick={() => setMobileOpen((value) => !value)}
              aria-label="Toggle navigation menu"
            >
              {mobileOpen ? <FiX className="h-5 w-5" /> : <FiMenu className="h-5 w-5" />}
            </button>
          </div>
        </div>
        {mobileOpen && (
          <div className="border-t border-slate-200/80 bg-slate-50 px-6 py-4 dark:border-slate-800/80 dark:bg-slate-950">
            <div className="space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-2xl px-4 py-3 text-base font-medium text-slate-700 transition hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-900"
                >
                  {link.title}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      <main className="relative overflow-hidden">
        <section id="home" className="relative overflow-hidden bg-hero-glow px-6 py-20 sm:px-8 lg:px-10">
          <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-cyan-500/20 to-transparent blur-3xl" />
          <div className="mx-auto flex max-w-7xl flex-col gap-16 lg:flex-row lg:items-center lg:gap-24">
            <div className="relative z-10 max-w-2xl">
              <span className="inline-flex rounded-full bg-cyan-500/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.32em] text-cyan-700 dark:bg-cyan-400/10 dark:text-cyan-200">
                MERN Stack Developer
              </span>
              <h1 className="mt-8 text-5xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-6xl">
                Building modern, responsive web experiences with React and Node.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
                I am R. Kishore, a MERN Stack developer . I specialize in polished frontend design, API-driven backends, and elegant JavaScript applications.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/10 transition hover:bg-cyan-600"
                >
                  <FiMail className="h-4 w-4" />
                  Contact Me
                </a>
                <button
                  type="button"
                  onClick={() => window.open('/resume.pdf', '_blank')}
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:border-cyan-400 hover:bg-cyan-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800"
                >
                  <FiArrowUpRight className="h-4 w-4" />
                  View Resume
                </button>
              </div>
            </div>
            <div className="relative z-10 flex flex-1 items-center justify-center">
              <div className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-8 shadow-soft shadow-cyan-500/10 dark:border-slate-700">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(59,130,246,0.45),_transparent_40%)]" />
                <div className="relative rounded-[1.75rem] border border-white/10 bg-slate-950/95 p-10 text-center shadow-2xl shadow-slate-950/20">
                  <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Featured value</p>
                  <h2 className="mt-6 text-3xl font-semibold text-white">Creative, reliable, and ready for your next project.</h2>
                  <p className="mt-4 text-slate-300">
                    I deliver polished React interfaces, solid REST API integrations, and clean code patterns on every build.
                  </p>
                  <div className="mt-8 grid gap-4 sm:grid-cols-2">
                    <div className="rounded-3xl border border-slate-800/80 bg-slate-900/80 p-5 text-left">
                      <p className="text-sm text-slate-400">Location</p>
                      <p className="mt-2 text-lg font-semibold text-white">Erode, Tamil Nadu</p>
                    </div>
                    <div className="rounded-3xl border border-slate-800/80 bg-slate-900/80 p-5 text-left">
                      <p className="text-sm text-slate-400">Email</p>
                      <p className="mt-2 text-lg font-semibold text-white">rkishorekishore3333@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10">
          <SectionTitle
            number="1"
            title="About"
            description="Background in Computer Engineering with internship and industry experience. Focused on building scalable applications and creating polished user experiences."
          />
          <div className="grid gap-8 lg:grid-cols-[1.5fr_0.7fr]">
            <div className="space-y-6 rounded-3xl border border-slate-200/80 bg-white/80 p-10 shadow-soft backdrop-blur-xl dark:border-slate-800/80 dark:bg-slate-900/70">
              <p className="text-base leading-8 text-slate-700 dark:text-slate-300">
                I am a Computer Engineering graduate with MERN Stack internship experience and 2 years of industry experience as a Zone Leader and Process Developer. I enjoy crafting responsive React applications, building Node.js powered APIs, and working with MongoDB to deliver full-stack results.
              </p>
              <p className="text-base leading-8 text-slate-700 dark:text-slate-300">
                My experience includes building responsive interfaces, writing clean backend services, collaborating with teams using Git, and delivering reliable projects that scale. I am currently seeking software developer opportunities where I can grow and contribute to meaningful products.
              </p>
            </div>
            <div className="space-y-6 rounded-3xl border border-slate-200/80 bg-slate-50/80 p-8 shadow-soft dark:border-slate-800/80 dark:bg-slate-900/70">
              <div className="rounded-3xl bg-gradient-to-br from-cyan-500/15 via-violet-500/10 to-slate-50 p-6 text-slate-900 dark:from-cyan-400/15 dark:via-violet-500/10 dark:to-slate-900 dark:text-white">
                <span className="text-sm uppercase tracking-[0.3em] text-cyan-500">Experience</span>
                <p className="mt-4 text-2xl font-semibold">2+ years of professional teamwork and process delivery.</p>
                <p className="mt-3 text-slate-600 dark:text-slate-300">Strong communicator, dependable problem solver, and a proactive developer mindset.</p>
              </div>
              <div className="rounded-3xl border border-slate-200/90 bg-white/90 p-6 dark:border-slate-800/90 dark:bg-slate-950/80">
                <h3 className="text-sm uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">Qualifications</h3>
                <ul className="mt-4 space-y-3 text-slate-700 dark:text-slate-300">
                  <li>• BCA</li>
                  <li>• Diploma in Computer Engineering</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10">
          <SectionTitle
            number="2"
            title="Skills"
            description="A balanced skillset across frontend, backend, database, and productivity tools used to ship reliable web applications."
          />
          <div className="grid gap-6 lg:grid-cols-2">
            {skillGroups.map((group) => (
              <SkillCard key={group.title} title={group.title} items={group.items} />
            ))}
          </div>
        </section>

        <section id="experience" className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10">
          <SectionTitle
            number="3"
            title="Experience"
            description="Professional milestones and patterns of delivery from internship work to leadership in production environments."
          />
          <div className="space-y-6">
            {experiences.map((experience) => (
              <TimelineItem key={experience.title} {...experience} />
            ))}
          </div>
        </section>

        <section id="projects" className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10">
          <SectionTitle
            number="4"
            title="Projects"
            description="Featured projects that highlight React, MERN architecture, and polished UX details."
          />
          <div className="grid gap-6 xl:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10">
          <SectionTitle
            number="5"
            title="Contact"
            description="Reach out for a new role, contract work, or a collaborative project. I am open to opportunities and ready to contribute."
          />
          <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr]">
            <div className="rounded-3xl border border-slate-200/80 bg-white/80 p-10 shadow-soft backdrop-blur-xl dark:border-slate-800/80 dark:bg-slate-900/70">
              <h3 className="text-2xl font-semibold text-slate-950 dark:text-slate-100">Let’s build something great.</h3>
              <p className="mt-4 text-slate-600 dark:text-slate-300">
                I’m available for MERN stack roles, freelance projects, and collaboration on modern web applications.
              </p>
              <div className="mt-8 space-y-5">
                <div className="rounded-3xl bg-slate-50 p-5 dark:bg-slate-950">
                  <p className="text-sm uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">Email</p>
                  <a href="mailto:rkishorekishore3333@gmail.com" className="mt-2 block text-lg font-semibold text-slate-900 dark:text-slate-100">
                    rkishorekishore3333@gmail.com
                  </a>
                </div>
                <div className="rounded-3xl bg-slate-50 p-5 dark:bg-slate-950">
                  <p className="text-sm uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">Location</p>
                  <p className="mt-2 text-lg font-semibold text-slate-900 dark:text-slate-100">Erode, Tamil Nadu, India</p>
                </div>
              </div>
            </div>
            <div className="rounded-3xl border border-slate-200/80 bg-gradient-to-br from-cyan-50 via-slate-100 to-white p-10 shadow-soft dark:border-slate-800/80 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900">
              <div className="text-slate-950 dark:text-slate-100">
                <h3 className="text-2xl font-semibold">Available for new roles</h3>
                <p className="mt-4 text-slate-600 dark:text-slate-300">You can contact me directly over email or connect on GitHub and LinkedIn.</p>
                <div className="mt-8 flex flex-wrap gap-4">
                  {socials.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-cyan-600"
                    >
                      {social.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200/80 bg-white/90 px-6 py-8 text-slate-600 dark:border-slate-800/80 dark:bg-slate-950/90 dark:text-slate-400">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 R. Kishore. Built with React, Tailwind, and Framer Motion.</p>
          <div className="flex flex-wrap items-center gap-4">
            {socials.map((social) => (
              <a key={social.name} href={social.href} target="_blank" rel="noreferrer" className="font-semibold text-slate-700 transition hover:text-cyan-600 dark:text-slate-300">
                {social.name}
              </a>
            ))}
          </div>
        </div>
      </footer>

      {resumeOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label="Resume preview"
          onClick={() => setResumeOpen(false)}
        >
          <div
            className="flex h-[88vh] w-full max-w-5xl flex-col overflow-hidden rounded-3xl border border-white/20 bg-white shadow-2xl dark:border-slate-700 dark:bg-slate-950"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4 dark:border-slate-800">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-600 dark:text-slate-300">Resume</p>
              <button
                type="button"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-700 transition hover:bg-slate-200 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800"
                onClick={() => setResumeOpen(false)}
                aria-label="Close resume preview"
              >
                <FiX className="h-5 w-5" />
              </button>
            </div>
            <iframe
              src={resumeUrl}
              title="Resume preview"
              className="h-full w-full bg-white"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;

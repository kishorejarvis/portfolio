import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { motion } from 'framer-motion';

export default function ProjectCard({ title, description, tech, github, demo }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      className="group rounded-3xl border border-slate-200/80 bg-white/80 p-6 shadow-soft backdrop-blur-xl transition duration-500 hover:-translate-y-1 hover:shadow-xl dark:border-slate-800/80 dark:bg-slate-900/70"
    >
      <div className="mb-4 flex items-center justify-between gap-4">
        <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">{title}</h3>
        <span className="rounded-full bg-cyan-500/15 px-3 py-1 text-sm font-semibold text-cyan-600 dark:text-cyan-300">
          Project
        </span>
      </div>
      <p className="text-slate-600 dark:text-slate-300">{description}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {tech.map((item) => (
          <span key={item} className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700 dark:bg-slate-800 dark:text-slate-200">
            {item}
          </span>
        ))}
      </div>
      <div className="mt-6 flex flex-wrap gap-3">
        <a
          href={github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-900 transition hover:border-cyan-400 hover:bg-cyan-50 dark:border-slate-700 dark:text-slate-100 dark:hover:bg-slate-800"
        >
          <FiGithub className="h-4 w-4" />
          GitHub
        </a>
        <a
          href={demo}
          className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-cyan-500 dark:bg-cyan-500 dark:text-slate-950"
        >
          <FiExternalLink className="h-4 w-4" />
          Live Demo
        </a>
      </div>
    </motion.article>
  );
}

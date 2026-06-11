import { motion } from 'framer-motion';

export default function TimelineItem({ title, company, date, highlights }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      className="relative rounded-3xl border border-slate-200/80 bg-white/80 p-6 shadow-soft backdrop-blur-xl dark:border-slate-800/80 dark:bg-slate-900/70"
    >
      <span className="absolute left-0 top-10 h-2 w-2 -translate-x-1/2 rounded-full bg-cyan-500"></span>
      <div className="flex items-center justify-between gap-4">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">{title}</h3>
        <p className="text-sm font-medium text-slate-500 dark:text-slate-400">{date}</p>
      </div>
      <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{company}</p>
      <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-600 dark:text-slate-300">
        {highlights.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </motion.div>
  );
}

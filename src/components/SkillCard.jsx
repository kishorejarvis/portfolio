import { motion } from 'framer-motion';

export default function SkillCard({ title, items }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      className="rounded-3xl border border-slate-200/80 bg-white/80 p-6 shadow-soft backdrop-blur-xl transition duration-500 hover:-translate-y-1 hover:shadow-xl dark:border-slate-800/80 dark:bg-slate-900/70"
    >
      <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">{title}</h3>
      <div className="mt-4 space-y-2">
        {items.map((item) => (
          <p key={item} className="text-slate-600 dark:text-slate-300">
            • {item}
          </p>
        ))}
      </div>
    </motion.div>
  );
}

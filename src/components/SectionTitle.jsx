import { motion } from 'framer-motion';

export default function SectionTitle({ number, title, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      className="mb-10 max-w-3xl"
    >
      <p className="text-sm font-medium uppercase tracking-[0.35em] text-cyan-300">
        0{number} • {title}
      </p>
      <h2 className="mt-3 text-3xl font-semibold sm:text-4xl text-slate-900 dark:text-slate-100">
        {title}
      </h2>
      <p className="mt-4 text-slate-600 dark:text-slate-300 sm:text-lg">
        {description}
      </p>
    </motion.div>
  );
}

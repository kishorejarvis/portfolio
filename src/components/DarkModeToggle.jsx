import { FiMoon, FiSun } from 'react-icons/fi';

export default function DarkModeToggle({ darkMode, setDarkMode }) {
  return (
    <button
      type="button"
      onClick={() => setDarkMode((current) => !current)}
      aria-label="Toggle dark mode"
      className="inline-flex items-center gap-2 rounded-full border border-slate-200/90 bg-white/90 px-4 py-2 text-sm font-semibold text-slate-900 shadow-soft transition hover:border-cyan-300 hover:bg-cyan-50 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100 dark:hover:bg-slate-800"
    >
      {darkMode ? <FiSun className="h-4 w-4" /> : <FiMoon className="h-4 w-4" />}
      {darkMode ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
}

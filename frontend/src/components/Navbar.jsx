import ThemeToggle from "./ThemeToggle";
function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-slate-200/80 bg-white/80 backdrop-blur-xl transition-colors duration-300 dark:border-white/10 dark:bg-slate-950/70">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 font-bold text-white">
            E
          </div>

          <span className="text-xl font-bold text-slate-900 dark:text-white">
            Edu<span className="text-purple-600 dark:text-purple-400">Access</span>
          </span>
        </a>

        {/* Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#home"
            className="text-sm text-slate-600 transition hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
          >
            Home
          </a>

          <a
            href="#features"
            className="text-sm text-slate-600 transition hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
          >
            Features
          </a>

          <a
            href="#how-it-works"
            className="text-sm text-slate-600 transition hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
          >
            How It Works
          </a>

          <a
            href="#about"
            className="text-sm text-slate-600 transition hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
          >
            About
          </a>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <ThemeToggle />

          <button className="hidden rounded-lg border border-slate-300 px-4 py-2 text-sm text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-white/5 sm:block">
            Log in
          </button>

          <button className="rounded-lg bg-purple-600 px-5 py-2 text-sm font-medium text-white shadow-lg shadow-purple-600/20 transition hover:bg-purple-500">
            Get Started
          </button>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
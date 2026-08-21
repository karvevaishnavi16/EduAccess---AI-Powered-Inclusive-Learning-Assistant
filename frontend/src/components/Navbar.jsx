function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-5">
      <h1 className="text-xl font-bold text-white">
        EduAccess
      </h1>

      <div className="flex items-center gap-6 text-sm text-slate-300">
        <a href="#">Home</a>
        <a href="#">Features</a>
        <a href="#">How It Works</a>
        <a href="#">About</a>
      </div>

      <button className="rounded-lg bg-purple-600 px-5 py-2 text-sm font-medium text-white hover:bg-purple-500 transition">
        Get Started
      </button>
    </nav>
  );
}

export default Navbar;
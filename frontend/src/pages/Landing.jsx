import Navbar from "../components/Navbar";

function Landing() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-white">

      <Navbar />

      {/* ================= HERO SECTION ================= */}
      <main
        id="home"
        className="relative overflow-hidden px-8 pt-40 pb-24"
      >

        {/* Background Glow */}
        <div className="absolute left-1/2 top-20 -z-0 h-96 w-96 -translate-x-1/2 rounded-full bg-purple-600/20 blur-3xl" />

        <div className="relative mx-auto max-w-5xl text-center">

          {/* Badge */}
          <div className="mb-6 inline-flex rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-sm font-medium text-purple-600 dark:text-purple-300">
            ✨ AI-Powered Inclusive Learning Assistant
          </div>

          {/* Main Heading */}
          <h2 className="text-5xl font-bold leading-tight md:text-7xl text-slate-900 dark:text-white">
            One classroom.
            <br />

            One source of{" "}
            <span className="text-purple-600 dark:text-purple-400">
              knowledge.
            </span>

            <br />

            <span className="bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 bg-clip-text text-transparent">
              Multiple ways to learn.
            </span>
          </h2>

          {/* Description */}
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-400">
            EduAccess transforms lectures and educational content
            into accessible and understandable formats based on
            how you want to learn.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex justify-center gap-4">

            <button className="rounded-xl bg-purple-600 px-7 py-3.5 font-medium text-white shadow-lg shadow-purple-600/20 transition hover:bg-purple-500">
              Get Started
            </button>

            <button className="rounded-xl border border-slate-300 bg-white px-7 py-3.5 font-medium text-slate-700 shadow-sm transition hover:bg-slate-100 dark:border-slate-700 dark:bg-transparent dark:text-slate-200 dark:shadow-none dark:hover:bg-slate-900">
              Explore Features
            </button>

          </div>

          {/* Feature Indicators */}
          <div className="mt-12 flex flex-wrap justify-center gap-4">

            <span className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 shadow-sm dark:border-slate-800 dark:bg-slate-900/60 dark:text-slate-300 dark:shadow-none">
              ✨ AI Powered
            </span>

            <span className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 shadow-sm dark:border-slate-800 dark:bg-slate-900/60 dark:text-slate-300 dark:shadow-none">
              🌐 Multilingual
            </span>

            <span className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 shadow-sm dark:border-slate-800 dark:bg-slate-900/60 dark:text-slate-300 dark:shadow-none">
              ♿ Accessible
            </span>

            <span className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 shadow-sm dark:border-slate-800 dark:bg-slate-900/60 dark:text-slate-300 dark:shadow-none">
              🧠 Smart & Simple
            </span>

          </div>

          {/* ================= PRODUCT PREVIEW ================= */}
          <div className="mx-auto mt-20 max-w-5xl">

            <div className="relative rounded-3xl border border-slate-200/80 bg-white/80 p-3 shadow-2xl shadow-purple-500/10 backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/70 dark:shadow-purple-900/20">

              {/* Browser Top Bar */}
              <div className="flex items-center gap-2 border-b border-slate-200 px-4 py-3 dark:border-white/10">

                <div className="h-3 w-3 rounded-full bg-red-400/70" />
                <div className="h-3 w-3 rounded-full bg-yellow-400/70" />
                <div className="h-3 w-3 rounded-full bg-green-400/70" />

                <div className="ml-4 flex-1 rounded-lg bg-slate-100 px-4 py-1.5 text-left text-xs text-slate-500 dark:bg-slate-800 dark:text-slate-500">
                  app.eduaccess.ai
                </div>

              </div>

              {/* Dashboard Preview */}
              <div className="grid gap-4 p-5 md:grid-cols-[180px_1fr]">

                {/* Sidebar */}
                <div className="hidden rounded-2xl border border-slate-200/80 bg-slate-50/80 p-4 md:block dark:border-white/5 dark:bg-slate-950/70">

                  <div className="mb-8 text-sm font-semibold text-slate-900 dark:text-white">
                    Edu<span className="text-purple-600 dark:text-purple-400">Access</span>
                  </div>

                  <div className="space-y-2 text-sm">

                    <div className="rounded-lg bg-purple-500/10 px-3 py-2 font-medium text-purple-600 dark:text-purple-300">
                      Dashboard
                    </div>

                    <div className="px-3 py-2 text-slate-600 dark:text-slate-500">
                      My Lectures
                    </div>

                    <div className="px-3 py-2 text-slate-600 dark:text-slate-500">
                      Study Mode
                    </div>

                    <div className="px-3 py-2 text-slate-600 dark:text-slate-500">
                      Quizzes
                    </div>

                  </div>
                </div>

                {/* Main Dashboard */}
                <div className="rounded-2xl border border-slate-200/80 bg-white p-5 dark:border-white/5 dark:bg-slate-950/50">

                  <div className="flex items-center justify-between">

                    <div>
                      <p className="text-xs font-semibold text-slate-400 dark:text-slate-500">
                        GOOD MORNING
                      </p>

                      <h3 className="mt-1 text-xl font-semibold text-slate-900 dark:text-white">
                        Welcome back 👋
                      </h3>
                    </div>

                    <div className="rounded-full border border-purple-500/20 bg-purple-500/10 px-3 py-1 text-xs text-purple-600 dark:text-purple-300">
                      AI Assistant
                    </div>

                  </div>

                  {/* Learning Cards */}
                  <div className="mt-6 grid gap-4 md:grid-cols-3">

                    <PreviewCard
                      icon="🎙️"
                      title="Live Captions"
                      text="Follow lectures in real time."
                    />

                    <PreviewCard
                      icon="🧠"
                      title="Simplify"
                      text="Make difficult concepts easier."
                    />

                    <PreviewCard
                      icon="🌐"
                      title="Translate"
                      text="Learn in your preferred language."
                    />

                  </div>

                  {/* Current Lecture */}
                  <div className="mt-5 rounded-2xl border border-slate-200/80 bg-slate-50/70 p-5 dark:border-white/5 dark:bg-slate-900/70">

                    <div className="flex items-center justify-between">

                      <div>
                        <p className="text-xs font-semibold text-slate-400 dark:text-slate-500">
                          CURRENT LECTURE
                        </p>

                        <h4 className="mt-1 font-semibold text-slate-900 dark:text-white">
                          Computer Networks
                        </h4>
                      </div>

                      <span className="rounded-full bg-green-500/10 px-3 py-1 text-xs font-medium text-green-600 dark:text-green-400">
                        ● Live
                      </span>

                    </div>

                    <div className="mt-5 rounded-xl border border-slate-200/60 bg-white p-4 dark:border-transparent dark:bg-slate-950">

                      <p className="text-sm leading-6 text-slate-700 dark:text-slate-300">
                        TCP establishes a reliable connection using a
                        three-way handshake before data transmission begins.
                      </p>

                      <div className="mt-4 h-1 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">

                        <div className="h-full w-2/3 rounded-full bg-gradient-to-r from-purple-500 to-blue-500" />

                      </div>

                    </div>

                  </div>

                </div>
              </div>
            </div>
          </div>

        </div>
      </main>


      {/* ================= FEATURES SECTION ================= */}
      <section
        id="features"
        className="px-8 py-24"
      >

        <div className="mx-auto max-w-6xl">

          {/* Section Heading */}
          <div className="text-center">

            <p className="text-sm font-semibold tracking-wider text-purple-600 dark:text-purple-400">
              BUILT FOR EVERY LEARNER
            </p>

            <h3 className="mt-3 text-4xl font-bold text-slate-900 dark:text-white">
              Learn the way that works for you.
            </h3>

            <p className="mx-auto mt-4 max-w-2xl text-slate-600 dark:text-slate-400">
              Turn the same educational content into different
              formats based on your needs and preferences.
            </p>

          </div>


          {/* Feature Cards */}
          <div className="mt-14 grid gap-6 md:grid-cols-3">

            <FeatureCard
              icon="🎙️"
              title="Live Captions"
              description="Convert lectures into real-time text so students can follow along."
            />

            <FeatureCard
              icon="🧠"
              title="Simplify Content"
              description="Turn complex explanations into easy, step-by-step language."
            />

            <FeatureCard
              icon="🌐"
              title="Multiple Languages"
              description="Understand educational content in your preferred language."
            />

            <FeatureCard
              icon="📝"
              title="AI Quiz Generator"
              description="Generate questions from lectures and study material."
            />

            <FeatureCard
              icon="💬"
              title="Ask Your Lecture"
              description="Ask questions and get context-aware answers using RAG."
            />

            <FeatureCard
              icon="🤟"
              title="Accessibility Support"
              description="Provide alternative communication and learning formats."
            />

          </div>

        </div>
      </section>

    </div>
  );
}


/* ================= FEATURE CARD ================= */

function FeatureCard({ icon, title, description }) {
  return (
    <div className="group rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-purple-500/40 hover:shadow-md dark:border-slate-800 dark:bg-slate-900/50 dark:shadow-none dark:hover:bg-slate-900">

      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/10 text-2xl">
        {icon}
      </div>

      <h4 className="mt-5 text-xl font-semibold text-slate-900 dark:text-white">
        {title}
      </h4>

      <p className="mt-3 leading-7 text-slate-600 dark:text-slate-400">
        {description}
      </p>

    </div>
  );
}


/* ================= PRODUCT PREVIEW CARD ================= */

function PreviewCard({ icon, title, text }) {
  return (
    <div className="rounded-2xl border border-slate-200/80 bg-slate-50/70 p-4 transition hover:border-purple-500/30 dark:border-white/5 dark:bg-slate-900/70">

      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/10 text-xl">
        {icon}
      </div>

      <h4 className="mt-4 text-sm font-semibold text-slate-900 dark:text-white">
        {title}
      </h4>

      <p className="mt-2 text-xs leading-5 text-slate-600 dark:text-slate-500">
        {text}
      </p>

    </div>
  );
}


export default Landing;
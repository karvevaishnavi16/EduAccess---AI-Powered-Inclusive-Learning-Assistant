import Navbar from "../components/Navbar";

function Landing() {
  return (
    <div className="min-h-screen bg-white text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-white">

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
          <div className="mb-6 inline-flex rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-sm text-purple-300">
            ✨ AI-Powered Inclusive Learning Assistant
          </div>

          {/* Main Heading */}
          <h2 className="text-5xl font-bold leading-tight md:text-7xl">
            One classroom.
            <br />

            One source of{" "}
            <span className="text-purple-400">
              knowledge.
            </span>

            <br />

            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Multiple ways to learn.
            </span>
          </h2>

          {/* Description */}
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-slate-400">
            EduAccess transforms lectures and educational content
            into accessible and understandable formats based on
            how you want to learn.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex justify-center gap-4">

            <button className="rounded-xl bg-purple-600 px-7 py-3.5 font-medium shadow-lg shadow-purple-600/20 transition hover:bg-purple-500">
              Get Started
            </button>

            <button className="rounded-xl border border-slate-700 px-7 py-3.5 font-medium text-slate-200 transition hover:bg-slate-900">
              Explore Features
            </button>

          </div>

          {/* Feature Indicators */}
          <div className="mt-12 flex flex-wrap justify-center gap-4">

            <span className="rounded-full border border-slate-800 bg-slate-900/60 px-4 py-2 text-sm text-slate-300">
              ✨ AI Powered
            </span>

            <span className="rounded-full border border-slate-800 bg-slate-900/60 px-4 py-2 text-sm text-slate-300">
              🌐 Multilingual
            </span>

            <span className="rounded-full border border-slate-800 bg-slate-900/60 px-4 py-2 text-sm text-slate-300">
              ♿ Accessible
            </span>

            <span className="rounded-full border border-slate-800 bg-slate-900/60 px-4 py-2 text-sm text-slate-300">
              🧠 Smart & Simple
            </span>

          </div>

          {/* ================= PRODUCT PREVIEW ================= */}
          <div className="mx-auto mt-20 max-w-5xl">

            <div className="relative rounded-3xl border border-white/10 bg-slate-900/70 p-3 shadow-2xl shadow-purple-900/20 backdrop-blur-xl">

              {/* Browser Top Bar */}
              <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">

                <div className="h-3 w-3 rounded-full bg-red-400/70" />
                <div className="h-3 w-3 rounded-full bg-yellow-400/70" />
                <div className="h-3 w-3 rounded-full bg-green-400/70" />

                <div className="ml-4 flex-1 rounded-lg bg-slate-800 px-4 py-1.5 text-left text-xs text-slate-500">
                  app.eduaccess.ai
                </div>

              </div>

              {/* Dashboard Preview */}
              <div className="grid gap-4 p-5 md:grid-cols-[180px_1fr]">

                {/* Sidebar */}
                <div className="hidden rounded-2xl border border-white/5 bg-slate-950/70 p-4 md:block">

                  <div className="mb-8 text-sm font-semibold">
                    Edu<span className="text-purple-400">Access</span>
                  </div>

                  <div className="space-y-2 text-sm">

                    <div className="rounded-lg bg-purple-500/10 px-3 py-2 text-purple-300">
                      Dashboard
                    </div>

                    <div className="px-3 py-2 text-slate-500">
                      My Lectures
                    </div>

                    <div className="px-3 py-2 text-slate-500">
                      Study Mode
                    </div>

                    <div className="px-3 py-2 text-slate-500">
                      Quizzes
                    </div>

                  </div>
                </div>

                {/* Main Dashboard */}
                <div className="rounded-2xl border border-white/5 bg-slate-950/50 p-5">

                  <div className="flex items-center justify-between">

                    <div>
                      <p className="text-xs text-slate-500">
                        GOOD MORNING
                      </p>

                      <h3 className="mt-1 text-xl font-semibold">
                        Welcome back 👋
                      </h3>
                    </div>

                    <div className="rounded-full border border-purple-500/20 bg-purple-500/10 px-3 py-1 text-xs text-purple-300">
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
                  <div className="mt-5 rounded-2xl border border-white/5 bg-slate-900/70 p-5">

                    <div className="flex items-center justify-between">

                      <div>
                        <p className="text-xs text-slate-500">
                          CURRENT LECTURE
                        </p>

                        <h4 className="mt-1 font-semibold">
                          Computer Networks
                        </h4>
                      </div>

                      <span className="rounded-full bg-green-500/10 px-3 py-1 text-xs text-green-400">
                        ● Live
                      </span>

                    </div>

                    <div className="mt-5 rounded-xl bg-slate-950 p-4">

                      <p className="text-sm leading-6 text-slate-300">
                        TCP establishes a reliable connection using a
                        three-way handshake before data transmission begins.
                      </p>

                      <div className="mt-4 h-1 overflow-hidden rounded-full bg-slate-800">

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

            <p className="text-sm font-medium text-purple-400">
              BUILT FOR EVERY LEARNER
            </p>

            <h3 className="mt-3 text-4xl font-bold">
              Learn the way that works for you.
            </h3>

            <p className="mx-auto mt-4 max-w-2xl text-slate-400">
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
    <div className="group rounded-2xl border border-slate-800 bg-slate-900/50 p-7 transition hover:-translate-y-1 hover:border-purple-500/40 hover:bg-slate-900">

      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/10 text-2xl">
        {icon}
      </div>

      <h4 className="mt-5 text-xl font-semibold">
        {title}
      </h4>

      <p className="mt-3 leading-7 text-slate-400">
        {description}
      </p>

    </div>
  );
}


/* ================= PRODUCT PREVIEW CARD ================= */

function PreviewCard({ icon, title, text }) {
  return (
    <div className="rounded-2xl border border-white/5 bg-slate-900/70 p-4 transition hover:border-purple-500/30">

      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/10 text-xl">
        {icon}
      </div>

      <h4 className="mt-4 text-sm font-semibold">
        {title}
      </h4>

      <p className="mt-2 text-xs leading-5 text-slate-500">
        {text}
      </p>

    </div>
  );
}


export default Landing;
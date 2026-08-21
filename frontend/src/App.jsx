import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <main className="flex min-h-[80vh] items-center justify-center">
        <div className="text-center">
          <h2 className="text-5xl font-bold">
            One classroom.
            <br />
            One source of{" "}
            <span className="text-purple-400">
              knowledge.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-slate-400">
            Multiple ways to learn. EduAccess makes educational
            content accessible and understandable for every learner.
          </p>

          <button className="mt-8 rounded-xl bg-purple-600 px-7 py-3 font-medium hover:bg-purple-500 transition">
            Get Started
          </button>
        </div>
      </main>
    </div>
  );
}

export default App;
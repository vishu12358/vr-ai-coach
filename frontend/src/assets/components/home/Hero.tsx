export default function Hero() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center bg-slate-950 px-6 text-center text-white">
      <span className="rounded-full bg-blue-600/20 px-4 py-2 text-blue-400">
        🚀 AI Powered English Learning
      </span>

      <h1 className="mt-8 text-6xl font-extrabold md:text-7xl">
        Learn English with
        <span className="text-blue-500"> AI</span>
      </h1>

      <p className="mt-6 max-w-3xl text-xl text-slate-300">
        Speak naturally with your AI tutor, improve grammar,
        pronunciation, vocabulary, and confidence through real-time conversations.
      </p>

      <div className="mt-10 flex gap-4">
        <button className="rounded-xl bg-blue-600 px-8 py-4 font-semibold hover:bg-blue-700">
          🎙 Start Speaking
        </button>

        <button className="rounded-xl border border-slate-700 px-8 py-4 hover:bg-slate-900">
          Learn More
        </button>
      </div>
    </section>
  );
}
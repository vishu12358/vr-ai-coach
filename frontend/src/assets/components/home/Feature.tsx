const features = [
  {
    title: "AI Conversation",
    description: "Talk naturally with your AI English tutor."
  },
  {
    title: "Grammar Correction",
    description: "Receive instant corrections and explanations."
  },
  {
    title: "Pronunciation",
    description: "Practice speaking with real-time feedback."
  },
  {
    title: "Progress Tracking",
    description: "Monitor your improvement every day."
  }
];

export default function Features() {
  return (
    <section className="bg-slate-900 py-20 text-white">
      <h2 className="mb-14 text-center text-4xl font-bold">
        Why Choose VR AI Coach?
      </h2>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 md:grid-cols-2 lg:grid-cols-4">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="rounded-2xl bg-slate-800 p-6 transition hover:-translate-y-2 hover:bg-slate-700"
          >
            <h3 className="mb-3 text-xl font-bold">
              {feature.title}
            </h3>

            <p className="text-slate-300">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
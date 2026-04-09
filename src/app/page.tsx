export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 py-20">
      <section className="text-center max-w-3xl">
        <h1 className="text-5xl font-bold tracking-tight">
          Ace the <span style={{ color: "var(--accent)" }}>HSK</span>
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
          Free practice questions for HSK levels 1–6 with reading, listening, and writing exercises powered by AI analytics.
        </p>
        <div className="mt-8 flex gap-4 justify-center">
          <a href="/learn" className="rounded-lg px-6 py-3 font-semibold text-white" style={{ backgroundColor: "var(--accent)" }}>Start Studying Free</a>
          <a href="/pricing" className="rounded-lg border px-6 py-3 font-semibold">View Plans</a>
        </div>
      </section>
      <section className="mt-20 grid md:grid-cols-3 gap-8 max-w-5xl w-full">
        {[
          { title: "HSK 1–6 Coverage", desc: "Practice questions across all six HSK levels with vocabulary, reading, and listening." },
          { title: "AI Study Guide", desc: "Cortex-powered analytics identify weak areas and build a personalised study path." },
          { title: "Character Drills", desc: "Targeted Hanzi recognition and writing exercises aligned with each HSK level." },
        ].map((f) => (
          <div key={f.title} className="rounded-xl border p-6">
            <h3 className="font-semibold text-lg">{f.title}</h3>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{f.desc}</p>
          </div>
        ))}
      </section>
      <footer className="mt-20 text-center text-xs text-gray-500 max-w-2xl">
        <p>HSK is administered by the Center for Language Education and Cooperation (CLEC). Koydo is not affiliated with, endorsed by, or connected to CLEC or any Chinese government agency. All product names, logos, and brands are the property of their respective owners.</p>
      </footer>
    </main>
  );
}

function HowItWorks() {
  const steps = [
    {
      title: 'Hop into voice',
      desc: 'Jump into a channel, say hi, and share what you’re building. Cameras optional, vibes mandatory.'
    },
    {
      title: 'Find a squad',
      desc: 'Join a pod aligned with your interests. Pair up, share tasks, and keep each other accountable.'
    },
    {
      title: 'Show and tell',
      desc: 'End the week with demos. Get feedback, celebrate wins, and tee up the next sprint.'
    }
  ]

  return (
    <section id="how" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">How it works</h2>
          <p className="mt-3 text-slate-300/80">It’s simple: we hang out, we focus up, and we ship.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-tr from-blue-500/20 to-cyan-500/20 text-white/90 ring-1 ring-white/10">{i + 1}</div>
              <h3 className="mt-4 text-white font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-300/80">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks

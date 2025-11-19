import { Mic, Users, Rocket, Calendar, Headphones, Timer } from 'lucide-react'

function Feature({ icon: Icon, title, desc }) {
  return (
    <div className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:bg-white/10">
      <div className="mb-4 inline-flex rounded-lg bg-gradient-to-tr from-blue-500/20 to-cyan-500/20 p-2 ring-1 ring-inset ring-white/10">
        <Icon className="h-5 w-5 text-cyan-300" />
      </div>
      <h3 className="text-white font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-slate-300/80">{desc}</p>
    </div>
  )
}

function Features() {
  return (
    <section id="about" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(50%_50%_at_50%_0%,rgba(56,189,248,0.15),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">A space for focused builders</h2>
          <p className="mt-3 text-slate-300/80">Drop into voice, share screens, and pair program. We host sprints, demos, and accountability sessions to keep momentum high.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Feature icon={Mic} title="Always-on voice" desc="Hop into channels to co-work with makers from around the world." />
          <Feature icon={Users} title="Small squads" desc="Join interest pods to collaborate on AI, web3, startups, and more." />
          <Feature icon={Rocket} title="Ship fast" desc="Weekly demo days and build sprints to push projects forward." />
          <Feature icon={Calendar} title="Events" desc="Workshops, AMAs, and code-alongs run by the community." />
          <Feature icon={Headphones} title="Chill vibes" desc="Lo-fi rooms and quiet focus spaces when you need to grind." />
          <Feature icon={Timer} title="Deep work" desc="Pomodoro sessions with check-ins to stay accountable." />
        </div>
      </div>
    </section>
  )
}

export default Features

function Schedule() {
  const sessions = [
    { day: 'Mon', title: 'Kickoff + Standups', time: '9:00 AM PST' },
    { day: 'Tue', title: 'Co-work + Pomodoro', time: 'All day' },
    { day: 'Wed', title: 'Workshop / AMA', time: '12:00 PM PST' },
    { day: 'Thu', title: 'Pair Programming', time: '3:00 PM PST' },
    { day: 'Fri', title: 'Demo Day', time: '4:00 PM PST' },
  ]

  return (
    <section id="schedule" className="relative py-24">
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">Weekly rhythm</h2>
          <p className="mt-3 text-slate-300/80">A lightweight structure that keeps the energy up without killing spontaneity.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {sessions.map((s) => (
            <div key={s.day} className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
              <div className="text-xs font-medium uppercase tracking-wider text-cyan-300">{s.day}</div>
              <div className="mt-2 text-white font-semibold">{s.title}</div>
              <div className="text-sm text-slate-300/80">{s.time}</div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col sm:flex-row gap-3">
          <a
            href="https://discord.com/invite/your-link"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 px-5 py-3 text-white font-medium shadow hover:from-blue-600 hover:to-cyan-600 transition-colors"
          >
            Join the Discord
          </a>
          <a
            href="#how"
            className="inline-flex items-center justify-center rounded-lg border border-white/15 bg-white/5 px-5 py-3 text-white/90 backdrop-blur hover:bg-white/10 transition-colors"
          >
            How it works
          </a>
        </div>
      </div>
    </section>
  )
}

export default Schedule

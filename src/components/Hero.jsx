import Spline from '@splinetool/react-spline'

function Hero() {
  const discordUrl = 'https://discord.com/invite/your-link'

  return (
    <section className="relative h-screen w-screen overflow-hidden bg-black text-white">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle dark overlay to improve contrast */}
      <div className="pointer-events-none absolute inset-0 bg-black/25" />

      {/* Center overlay: simulated keys labeled JOIN DISCORD */}
      <div className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center">
        <div className="grid grid-cols-5 gap-2 sm:gap-3 md:gap-4 opacity-70">
          {Array.from({ length: 25 }).map((_, i) => (
            <div
              key={i}
              className="select-none rounded-md border border-white/30 bg-white/5 px-3 py-2 text-[10px] sm:text-xs md:text-sm tracking-widest uppercase text-white/90 backdrop-blur-sm"
            >
              Join Discord
            </div>
          ))}
        </div>
      </div>

      {/* Full-screen clickable layer: make every key/button act as Discord link */}
      <a
        href={discordUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="Join Discord"
        className="absolute inset-0 z-10 block cursor-pointer"
        title="Join Discord"
      />
    </section>
  )
}

export default Hero

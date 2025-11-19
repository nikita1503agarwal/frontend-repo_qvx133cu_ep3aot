import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section className="relative h-screen w-screen overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-black/20" />

      <div className="absolute inset-x-0 bottom-10 z-10 flex items-center justify-center">
        <a
          href="https://discord.com/invite/your-link"
          target="_blank"
          rel="noreferrer"
          className="pointer-events-auto inline-flex items-center justify-center rounded-full border border-white px-6 py-3 text-sm font-medium text-white hover:bg-white hover:text-black transition-colors"
        >
          Join Discord
        </a>
      </div>
    </section>
  )
}

export default Hero

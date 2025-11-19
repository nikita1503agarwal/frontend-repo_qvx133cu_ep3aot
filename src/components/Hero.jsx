import Spline from '@splinetool/react-spline'

function Hero() {
  const discordUrl = 'https://discord.com/invite/your-link'

  const handleMouseDown = (e) => {
    try {
      const name = e?.target?.name?.toLowerCase?.() || ''
      if (name.includes('key') || name.includes('keyboard') || name.includes('button')) {
        window.open(discordUrl, '_blank', 'noopener,noreferrer')
      }
    } catch (_) {
      // no-op
    }
  }

  const handleLoad = (spline) => {
    try {
      // Try to orient and center the keyboard if present
      const candidates = ['Keyboard', 'keyboard', 'Keys', 'keys', 'Piano', 'piano']
      for (const n of candidates) {
        const obj = spline.findObjectByName?.(n)
        if (obj) {
          if (obj.rotation) {
            obj.rotation.x = 0
            obj.rotation.y = 0
            obj.rotation.z = 0
          }
          if (obj.position) {
            obj.position.x = 0
            obj.position.y = 0
            obj.position.z = 0
          }
          break
        }
      }

      // Optionally bring camera to face forward if available
      if (spline?.scene?.camera) {
        const cam = spline.scene.camera
        if (cam?.rotation) {
          cam.rotation.x = 0
          cam.rotation.y = 0
          cam.rotation.z = 0
        }
      }
    } catch (_) {
      // best-effort adjustments only
    }
  }

  return (
    <section className="relative h-screen w-screen overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
          onMouseDown={handleMouseDown}
          onLoad={handleLoad}
        />
      </div>

      {/* Subtle overlay for contrast */}
      <div className="pointer-events-none absolute inset-0 bg-black/20" />
    </section>
  )
}

export default Hero

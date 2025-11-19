import Spline from '@splinetool/react-spline'

function Hero() {
  const discordUrl = 'https://discord.gg/Hz3KCKusWz'

  const isWelcomeKey = (rawName = '') => {
    const name = String(rawName).toLowerCase()

    // Accept common naming patterns: "key_w", "Key-W", "W", "Enter", etc.
    const cleaned = name.replace(/[^a-z]/g, '') // keep letters only

    // Single-letter keys for WELCOME
    const welcomeLetters = new Set(['w', 'e', 'l', 'c', 'o', 'm'])

    if (cleaned === 'enter' || name.includes('enter')) return true
    if (welcomeLetters.has(cleaned)) return true

    // Handle patterns like key_w, keyw, key-w
    const parts = name.split(/[^a-z]+/g).filter(Boolean)
    if (parts.includes('enter')) return true
    if (parts.some((p) => welcomeLetters.has(p))) return true

    return false
  }

  const handleMouseDown = (e) => {
    try {
      const targetName = e?.target?.name
      if (isWelcomeKey(targetName)) {
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

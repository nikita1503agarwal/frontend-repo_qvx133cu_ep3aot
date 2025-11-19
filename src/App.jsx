import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Schedule from './components/Schedule'
import HowItWorks from './components/HowItWorks'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <div className="absolute inset-0 -z-0 bg-[radial-gradient(100%_50%_at_0%_0%,rgba(59,130,246,0.15),transparent_50%),radial-gradient(100%_50%_at_100%_0%,rgba(34,211,238,0.15),transparent_50%)]" />

      <Navbar />
      <main>
        <Hero />
        <Features />
        <Schedule />
        <HowItWorks />
      </main>

      <footer className="relative border-t border-white/10 py-10">
        <div className="mx-auto max-w-7xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-400">© {new Date().getFullYear()} Virtual Hackerhouse. Community-run. Not affiliated with Discord.</p>
          <a href="/test" className="text-sm text-slate-400 hover:text-white">System check</a>
        </div>
      </footer>
    </div>
  )
}

export default App

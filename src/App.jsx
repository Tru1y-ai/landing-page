import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'

const SECTIONS = [
  { id: 'mission',        label: 'Mission' },
  { id: 'product',        label: 'Product' },
  { id: 'pricing',        label: 'Pricing' },
  { id: 'request-a-demo', label: 'Request a Demo' },
]

export default function App() {
  return (
    <div className="min-h-screen bg-white text-black" style={{ fontFamily: 'Geist, sans-serif', fontWeight: 500 }}>
      <Navbar />

      <Hero />

      {/* Content sections */}
      {SECTIONS.map(({ id, label }) => (
        <section
          key={id}
          id={id}
          className="flex flex-col items-center justify-center min-h-screen border-t border-black/8 px-6 text-center"
        >
          <h2 className="text-4xl tracking-tight mb-4" style={{ fontWeight: 500 }}>
            {label}
          </h2>
          <p className="text-base text-black/40">Content coming soon.</p>
        </section>
      ))}
      <Footer />
    </div>
  )
}

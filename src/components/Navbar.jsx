import GradualBlur from './GradualBlur'
import logo from '/trulylogo.png'

const NAV_LINKS = ['Mission', 'Product', 'Pricing', 'Request a Demo']

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Background blur — sits behind everything, never overlaps content */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10"
        style={{
          backdropFilter: 'blur(14px)',
          WebkitBackdropFilter: 'blur(14px)',
          backgroundColor: 'rgba(255,255,255,0.75)',
          borderBottom: '1px solid rgba(0,0,0,0.07)',
        }}
      />

      {/* GradualBlur on the background div only — scoped so it never touches nav text */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 pointer-events-none"
      >
        <GradualBlur
          target="parent"
          position="bottom"
          height="2.5rem"
          strength={1}
          divCount={6}
          curve="bezier"
          opacity={0.5}
          zIndex={0}
        />
      </div>

      {/* Nav links — centered relative to the full viewport width */}
      <nav className="absolute inset-0 flex items-center justify-center gap-8 pointer-events-none">
        {NAV_LINKS.map(link => (
          <a
            key={link}
            href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
            className="text-sm text-black/70 hover:text-black transition-colors duration-150 no-underline pointer-events-auto"
            style={{ fontFamily: 'Geist, sans-serif', fontWeight: 500 }}
          >
            {link}
          </a>
        ))}
      </nav>

      {/* Logo + brand — absolutely positioned so it doesn't affect nav centering */}
      <a
        href="/"
        className="absolute flex items-center gap-2.5 no-underline"
        style={{ left: '10%', top: '50%', transform: 'translateY(-50%)' }}
      >
        <img src={logo} alt="Truly logo" className="h-7 w-auto" />
        <span
          className="text-black text-lg tracking-tight"
          style={{ fontFamily: 'Geist, sans-serif', fontWeight: 500 }}
        >
          Truly
        </span>
      </a>

      {/* Spacer so header has height */}
      <div className="h-16" />
    </header>
  )
}

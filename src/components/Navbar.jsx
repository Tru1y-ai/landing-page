import logo from '/trulylogo.png'

const NAV_LINKS = ['Mission', 'Product', 'Pricing', 'Request a Demo']

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Frosted blur that fades naturally into the page below */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 -z-10 w-full backdrop-blur-2xl"
        style={{
          height: '6rem',
          background: 'linear-gradient(180deg, rgba(255,255,255,0.82) 0%, rgba(255,255,255,0.00) 100%)',
          maskImage: 'linear-gradient(to bottom, black 50%, rgba(0,0,0,0.7) 72%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 50%, rgba(0,0,0,0.7) 72%, transparent 100%)',
        }}
      />

      {/* Nav links — centered relative to the full viewport width */}
      <nav className="absolute inset-0 flex items-center justify-center gap-8 pointer-events-none">
        {NAV_LINKS.map(link => (
          <a
            key={link}
            href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
            className="relative text-sm text-black/60 no-underline pointer-events-auto transition-colors duration-200 hover:text-black after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-0 after:bg-black after:transition-all after:duration-200 hover:after:w-full"
            style={{ fontFamily: 'Geist, sans-serif', fontWeight: 500 }}
          >
            {link}
          </a>
        ))}
      </nav>

      {/* Logo + brand — absolutely positioned so it doesn't affect nav centering */}
      <a
        href="/"
        className="absolute flex items-center gap-1.5 no-underline"
        style={{ left: '10%', top: '50%', transform: 'translateY(-50%)' }}
      >
        <img src={logo} alt="Truly logo" className="h-9 w-auto" />
        <span
          className="text-black text-xl tracking-tight"
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

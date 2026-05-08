import logo from '/trulylogo.png'
import GlassSurface from './GlassSurface'

const NAV_LINKS = ['Mission', 'What We Do', 'Request a Demo']

export default function Navbar() {
  return (
    <header className="fixed top-4 left-0 right-0 z-50 flex justify-center pointer-events-none">
      <GlassSurface
        width="auto"
        height={60}
        borderRadius={999}
        backgroundOpacity={0.18}
        saturation={1.4}
        brightness={55}
        opacity={0.92}
        blur={12}
        distortionScale={-160}
        className="pointer-events-auto"
        style={{ minWidth: 1100, paddingLeft: '2rem', paddingRight: '2rem' }}
      >
        <div className="relative flex items-center w-full">
          {/* Logo + brand */}
          <a href="/" className="flex items-center gap-1.5 no-underline shrink-0">
            <img src={logo} alt="Truly logo" className="h-7 w-auto" />
            <span className="text-black text-lg tracking-tight" style={{ fontFamily: 'Geist, sans-serif', fontWeight: 500 }}>
              Truly
            </span>
          </a>

          {/* Nav links — absolutely centered */}
          <nav className="absolute left-1/2 -translate-x-1/2 flex items-center gap-8">
            {NAV_LINKS.map(link => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                className="relative text-sm text-black/60 no-underline transition-colors duration-200 hover:text-black after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-0 after:bg-black after:transition-all after:duration-200 hover:after:w-full"
                style={{ fontFamily: 'Geist, sans-serif', fontWeight: 500 }}
              >
                {link}
              </a>
            ))}
          </nav>
        </div>
      </GlassSurface>
    </header>
  )
}

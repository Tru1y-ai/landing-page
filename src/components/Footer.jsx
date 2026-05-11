import logo from '/trulylogo.png'
import SplitText from './SplitText'

const LINKS = {
  Resources: [
    { label: 'Manifesto', href: '#' },
    { label: 'Press',     href: '#' },
  ],
  Support: [
    { label: 'Help Center', href: '#' },
    { label: 'Contact Us',  href: 'mailto:hello@truly.com' },
  ],
  Legal: [
    { label: 'Privacy Policy',   href: '#' },
    { label: 'Terms of Service', href: '#' },
  ],
}

const SOCIALS = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/trulyai',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452H17.21v-5.569c0-1.327-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.987V9h3.12v1.561h.046c.434-.823 1.494-1.691 3.075-1.691 3.291 0 3.9 2.167 3.9 4.984v6.598zM5.337 7.433a1.808 1.808 0 1 1 0-3.616 1.808 1.808 0 0 1 0 3.616zM6.961 20.452H3.71V9h3.251v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: 'GitHub',
    href: 'https://github.com/Tru1y-ai',
    icon: (
      <svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" clipRule="evenodd" d="M10 0.258C4.5.258 0 4.758 0 10.258c0 4.375 2.875 8.125 6.875 9.5.5.125.625-.25.625-.5v-1.75C4.75 18.133 4.125 16.258 4.125 16.258c-.5-1.125-1.125-1.5-1.125-1.5-.875-.625.125-.625.125-.625 1 .125 1.5 1 1.5 1 .875 1.625 2.375 1.125 2.875.875.125-.625.375-1.125.625-1.375-2.25-.25-4.5-1.125-4.5-5 0-1.125.375-2 1-2.625-.125-.25-.5-1.25.125-2.625 0 0 .875-.25 2.75 1.25.75-.25 1.625-.375 2.5-.375s1.75.125 2.5.375c1.875-1.25 2.75-1.25 2.75-1.25.625 1.375.25 2.375.125 2.625.625.625 1 1.5 1 2.625 0 3.875-2.375 4.625-4.625 4.875.375.5.75 1.125.75 2v2.75c0 .25.125.625.625.5 4-1.375 6.875-5.125 6.875-9.5C20 4.758 15.5.258 10 .258z" />
      </svg>
    ),
  },
]

export default function Footer() {
  return (
    <footer
      className="relative bg-[#f6f6f6]"
      style={{ fontFamily: 'Geist, sans-serif', fontWeight: 500, paddingTop: '5rem', paddingBottom: '2rem'}}
    >
      {/* Fade from white page into footer bg */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -translate-y-full h-28"
        style={{ background: 'linear-gradient(to bottom, transparent, #f6f6f6)' }}
      />

      <div style={{ maxWidth: '1300px', margin: '0 auto', padding: '0 4rem' }}>

        {/* Main row */}
        <div className="flex flex-col lg:flex-row lg:justify-between">

          {/* Logo — left 50% */}
          <div className="lg:w-1/2">
            <a href="/" className="inline-flex items-center gap-2 no-underline">
              <img src={logo} alt="Truly logo" className="h-8 w-auto" />
              <SplitText
                text="Truly"
                tag="span"
                className="text-black text-xl tracking-tight"
                delay={25}
                duration={0.8}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 15 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-10px"
                textAlign="left"
              />
            </a>
          </div>

          {/* Link columns — right 50% */}
          <nav className="mt-8 grid grid-cols-2 gap-x-6 gap-y-8 lg:mt-0 lg:w-1/2" style={{ gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem', paddingLeft: '3rem' }}>
            {Object.entries(LINKS).map(([section, links]) => (
              <div key={section}>
                <SplitText
                  text={section}
                  tag="h3"
                  className="text-lg text-black tracking-tight mb-3"
                  delay={22}
                  duration={0.8}
                  ease="power3.out"
                  splitType="chars"
                  from={{ opacity: 0, y: 20 }}
                  to={{ opacity: 1, y: 0 }}
                  threshold={0.1}
                  rootMargin="-10px"
                  textAlign="left"
                />
                <ul className="mt-3 flex flex-col gap-y-2">
                  {links.map(({ label, href }) => (
                    <li key={label}>
                      <a
                        href={href}
                        className="text-sm text-black/40 hover:text-black transition-colors duration-200 no-underline tracking-tight"
                      >
                        <SplitText
                          text={label}
                          tag="span"
                          className=""
                          delay={15}
                          duration={0.7}
                          ease="power2.out"
                          splitType="chars"
                          from={{ opacity: 0, y: 12 }}
                          to={{ opacity: 1, y: 0 }}
                          threshold={0.1}
                          rootMargin="-10px"
                          textAlign="left"
                        />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col md:flex-row items-center justify-between gap-4"
          style={{ marginTop: '4rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(0,0,0,0.1)' }}
        >
          <SplitText
            text={`© ${new Date().getFullYear()} Truly. All rights reserved.`}
            tag="p"
            className="text-xs text-black/35 tracking-tight order-2 md:order-1"
            delay={15}
            duration={0.7}
            ease="power2.out"
            splitType="words"
            from={{ opacity: 0, y: 10 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-10px"
            textAlign="left"
          />
          <div className="flex items-center gap-5 order-1 md:order-2">
            {SOCIALS.map(({ label, href, icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-black/30 hover:text-black transition-colors duration-200"
                aria-label={label}
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  )
}

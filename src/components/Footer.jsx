import logo from '/trulylogo.png'

const LINKS = {
  Product: [
    { label: 'Mission',        href: '#mission' },
    { label: 'Product',        href: '#product' },
    { label: 'Pricing',        href: '#pricing' },
    { label: 'Request a Demo', href: '#request-a-demo' },
  ],
  Company: [
    { label: 'About',   href: '#' },
    { label: 'Careers', href: '#' },
    { label: 'Blog',    href: '#' },
    { label: 'Press',   href: '#' },
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
  // {
  //   label: 'X / Twitter',
  //   href: 'https://x.com',
  //   icon: (
  //     <svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor">
  //       <path d="M14.6009 2H17.0544L11.6943 8.35385L18 17H13.0627L9.19566 11.7562L4.77087 17H2.31595L8.04904 10.2038L2 2H7.06262L10.5581 6.79308L14.6009 2ZM13.7399 15.4769H15.0993L6.32392 3.44308H4.86506L13.7399 15.4769Z" />
  //     </svg>
  //   ),
  // },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/trulyai',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452H17.21v-5.569c0-1.327-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.987V9h3.12v1.561h.046c.434-.823 1.494-1.691 3.075-1.691 3.291 0 3.9 2.167 3.9 4.984v6.598zM5.337 7.433a1.808 1.808 0 1 1 0-3.616 1.808 1.808 0 0 1 0 3.616zM6.961 20.452H3.71V9h3.251v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  // {
  //   label: 'Instagram',
  //   href: 'https://instagram.com',
  //   icon: (
  //     <svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor">
  //       <path d="M10 1C7.555 1 7.25 1.011 6.29 1.054 5.331 1.099 4.679 1.25 4.105 1.473 3.513 1.702 3.011 2.01 2.511 2.511 2.01 3.011 1.701 3.513 1.473 4.105 1.25 4.679 1.098 5.331 1.054 6.29 1.009 7.25 1 7.555 1 10c0 2.445 1.011 2.75.054 3.71.099 4.668 1.25 5.321 1.473 5.895 1.702 6.486 2.01 6.989 2.511 7.49 3.011 7.989 3.513 8.299 4.105 8.528 4.679 8.75 5.332 8.902 6.29 8.946 7.25 8.991 7.555 9 10 9c2.445 0 2.75-.011 3.71-.054.668-.901 1.321-.131 1.895-.473 1.895-.702 6.486-1.989 6.989-2.511 7.49-3.011 7.989-3.513 8.298-4.105 8.528-4.679 8.75-5.321 8.902-6.29 8.946-7.25 8.991-7.555 9-10 9c0-2.445-.011-2.75-.054-3.71-.901-5.332-.131-5.322-.473-5.895-.702-6.486-1.989-6.989-2.511-7.49-3.011-7.989-3.513-8.298-4.105-8.528-4.679-8.75-5.321-8.902-6.29-8.946C12.75 1.009 12.445 1 10 1zm0 1.622c2.403 0 2.688.012 3.638.074.877.041 1.354.186 1.671.311.42.163.719.358 1.034.672.315.315.51.614.672 1.034.125.317.27.794.311 1.671.062.95.074 1.235.074 3.638s-.012 2.688-.074 3.638c-.041.877-.186 1.354-.311 1.671-.163.42-.358.719-.672 1.034-.315.315-.614.51-1.034.672-.317.125-.794.27-1.671.311-.95.062-1.235.074-3.638.074s-2.688-.012-3.638-.074c-.877-.041-1.354-.186-1.671-.311a2.785 2.785 0 01-1.034-.672 2.785 2.785 0 01-.672-1.034c-.125-.317-.27-.794-.311-1.671C2.632 12.688 2.62 12.403 2.62 10s.012-2.688.074-3.638c.041-.877.186-1.354.311-1.671.163-.42.358-.719.672-1.034.315-.315.614-.51 1.034-.672.317-.125.794-.27 1.671-.311.95-.062 1.235-.074 3.638-.074zM10 5.378a4.622 4.622 0 100 9.244 4.622 4.622 0 000-9.244zM10 13a3 3 0 110-6 3 3 0 010 6zm5.884-7.804a1.079 1.079 0 100-2.158 1.079 1.079 0 000 2.158z" />
  //     </svg>
  //   ),
  // },
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
              <span className="text-black text-xl tracking-tight">Truly</span>
            </a>
          </div>

          {/* Link columns — right 50% */}
          <nav className="mt-8 grid grid-cols-2 gap-x-6 gap-y-8 lg:mt-0 lg:w-1/2" style={{ gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem', paddingLeft: '3rem' }}>
            {Object.entries(LINKS).map(([section, links]) => (
              <div key={section}>
                <h3 className="text-lg text-black tracking-tight mb-3">{section}</h3>
                <ul className="mt-3 flex flex-col gap-y-2">
                  {links.map(({ label, href }) => (
                    <li key={label}>
                      <a
                        href={href}
                        className="text-sm text-black/40 hover:text-black transition-colors duration-200 no-underline tracking-tight"
                      >
                        {label}
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
          <p className="text-xs text-black/35 tracking-tight order-2 md:order-1">
            © {new Date().getFullYear()} Truly. All rights reserved.
          </p>
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

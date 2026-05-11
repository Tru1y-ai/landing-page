import { useState } from 'react'
import SplitText from './SplitText'

const BENEFITS = [
  'AI-native assessments tailored to each job posting',
  'Full AI usage tracking — prompts, tokens, and reasoning',
  'Centralized platform for candidates, no repeated tests',
  'Replaces CodeSignal, HackerRank, and HireVue',
  'Detailed performance reports delivered to your team',
]

export default function RequestDemoSection() {
  const [form, setForm] = useState({ name: '', company: '', email: '', role: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  const handleSubmit = e => { e.preventDefault(); setSubmitted(true) }

  return (
    <section id="request-a-demo" className="border-t border-black/8" style={{ padding: '7rem 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 4rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'start' }}>

        {/* Left — pitch */}
        <div>
          <SplitText
            text="Get Started"
            tag="p"
            className="text-xs uppercase tracking-[0.2em] text-black/35 mb-7"
            delay={20}
            duration={0.7}
            ease="power2.out"
            splitType="chars"
            from={{ opacity: 0, y: 15 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-10px"
            textAlign="left"
          />
          <SplitText
            text="See Truly in action."
            tag="h2"
            className="text-5xl tracking-tight text-black"
            delay={30}
            duration={1}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.2}
            rootMargin="-60px"
            textAlign="left"
          />
          <SplitText
            text="Tell us a bit about your team and we'll set up a personalized walkthrough within one business day."
            tag="p"
            className="mt-6 text-lg text-black/45 leading-relaxed"
            delay={20}
            duration={0.9}
            ease="power2.out"
            splitType="words"
            from={{ opacity: 0, y: 20 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-20px"
            textAlign="left"
          />

          <ul className="mt-10 flex flex-col gap-4">
            {BENEFITS.map(b => (
              <li key={b} className="flex items-start gap-3">
                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-black/30 flex-shrink-0" />
                <SplitText
                  text={b}
                  tag="span"
                  className="text-sm text-black/55 leading-relaxed"
                  delay={15}
                  duration={0.8}
                  ease="power2.out"
                  splitType="words"
                  from={{ opacity: 0, y: 15 }}
                  to={{ opacity: 1, y: 0 }}
                  threshold={0.1}
                  rootMargin="-10px"
                  textAlign="left"
                />
              </li>
            ))}
          </ul>
        </div>

        {/* Right — form */}
        <div>
          {submitted ? (
            <div className="text-center py-20 border border-black/8 rounded-2xl">
              <SplitText
                text="Thanks, we'll be in touch."
                tag="p"
                className="text-2xl tracking-tight text-black mb-3"
                delay={25}
                duration={0.9}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 20 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="0px"
                textAlign="center"
              />
              <SplitText
                text="Expect a reply within one business day."
                tag="p"
                className="text-sm text-black/40"
                delay={18}
                duration={0.8}
                ease="power2.out"
                splitType="words"
                from={{ opacity: 0, y: 15 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="0px"
                textAlign="center"
              />
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label className="text-xs text-black/40 tracking-wide uppercase">Name</label>
                  <input required name="name" value={form.name} onChange={handleChange} placeholder="Jane Smith"
                    className="w-full px-4 py-3.5 text-sm border border-black/10 rounded-xl bg-white text-black placeholder-black/25 outline-none focus:border-black/30 transition-colors" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs text-black/40 tracking-wide uppercase">Company</label>
                  <input required name="company" value={form.company} onChange={handleChange} placeholder="Acme Corp"
                    className="w-full px-4 py-3.5 text-sm border border-black/10 rounded-xl bg-white text-black placeholder-black/25 outline-none focus:border-black/30 transition-colors" />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs text-black/40 tracking-wide uppercase">Work Email</label>
                <input required type="email" name="email" value={form.email} onChange={handleChange} placeholder="jane@acme.com"
                  className="w-full px-4 py-3.5 text-sm border border-black/10 rounded-xl bg-white text-black placeholder-black/25 outline-none focus:border-black/30 transition-colors" />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs text-black/40 tracking-wide uppercase">Your Role</label>
                <select name="role" value={form.role} onChange={handleChange}
                  className="w-full px-4 py-3.5 text-sm border border-black/10 rounded-xl bg-white text-black outline-none focus:border-black/30 transition-colors appearance-none">
                  <option value="" disabled>Select one…</option>
                  <option>Head of Talent / Recruiting</option>
                  <option>Engineering Manager</option>
                  <option>Founder / Executive</option>
                  <option>HR / People Ops</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs text-black/40 tracking-wide uppercase">
                  Anything else? <span className="normal-case opacity-60">(optional)</span>
                </label>
                <textarea name="message" value={form.message} onChange={handleChange} rows={4}
                  placeholder="Team size, current tools, specific use case…"
                  className="w-full px-4 py-3.5 text-sm border border-black/10 rounded-xl bg-white text-black placeholder-black/25 outline-none focus:border-black/30 transition-colors resize-none" />
              </div>

              <button type="submit"
                className="mt-1 w-full px-6 py-4 bg-black text-white text-sm rounded-xl hover:bg-black/80 transition-colors duration-200 tracking-tight">
                Request a Demo
              </button>

              <SplitText
                text="No spam. We'll only contact you about your demo request."
                tag="p"
                className="text-xs text-black/25"
                delay={15}
                duration={0.7}
                ease="power2.out"
                splitType="words"
                from={{ opacity: 0, y: 10 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-10px"
                textAlign="center"
              />
            </form>
          )}
        </div>

      </div>
    </section>
  )
}

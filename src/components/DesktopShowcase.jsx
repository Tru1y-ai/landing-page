export default function DesktopShowcase() {
  return (
    <section className="showcase" id="showcase" data-screen-label="Desktop showcase">
      <div className="showcase-head">
        <p className="label">A real session, captured live</p>
        <h2 className="h2">Their machine.<br /><span className="outline">Their real workflow.</span></h2>
      </div>
      <div className="desktop-stage" id="desktop-stage">
        <div className="desktop" id="desktop">

          <span className="wall-glow a"></span>
          <span className="wall-glow b"></span>
          <span className="wall-glow c"></span>

          {/* menu bar */}
          <div className="menubar">
            <svg className="mb-logo" viewBox="0 0 24 24" fill="#fff"><path d="M17 11.5c0-2 1.6-3 1.7-3.1-1-1.4-2.4-1.6-2.9-1.6-1.2-.1-2.4.7-3 .7-.6 0-1.6-.7-2.6-.7-1.3 0-2.6.8-3.3 2-1.4 2.4-.4 6 1 8 .7 1 1.4 2.1 2.4 2 1-.04 1.3-.6 2.5-.6s1.5.6 2.6.6c1 0 1.7-1 2.4-2 .5-.7.7-1.4.8-1.5-.02 0-1.6-.6-1.6-2.5zM15 5.4c.5-.7.9-1.6.8-2.4-.8 0-1.7.5-2.2 1.1-.5.6-.9 1.5-.8 2.3.9.07 1.7-.4 2.2-1z" /></svg>
            <b>Truly</b>
            <span className="mb-i">File</span><span className="mb-i">Edit</span><span className="mb-i">View</span><span className="mb-i">Run</span><span className="mb-i">Window</span>
            <div className="mb-right"><span>2:47 PM</span><span className="mb-batt"></span></div>
          </div>

          {/* code editor */}
          <div className="win w-editor">
            <div className="win-tb"><div className="tl"><i className="r"></i><i className="y"></i><i className="g"></i></div><span className="win-name">rate_limiter.py <span className="muted">— assessment</span></span><span className="win-x">VS Code</span></div>
            <div className="ed-body">
              <div className="ed-side">
                <p className="ed-sec">Assessment</p>
                <div className="ed-file act">rate_limiter.py</div>
                <div className="ed-file">test_limiter.py</div>
                <div className="ed-file">brief.md</div>
                <div className="ed-file">notes.txt</div>
              </div>
              <div className="ed-main">
                <div className="ed-gutter" dangerouslySetInnerHTML={{ __html: Array.from({ length: 17 }, (_, i) => i + 1).join('<br>') }} />
                <div className="ed-code">
                  <div className="tln" style={{ animationDelay: '.2s' }}><span className="cc"># rate_limiter.py</span></div>
                  <div className="tln" style={{ animationDelay: '.6s' }}><span className="ck">from</span> collections <span className="ck">import</span> deque</div>
                  <div className="tln" style={{ animationDelay: '1.0s' }}><span className="ck">import</span> time, threading</div>
                  <div className="tln" style={{ animationDelay: '1.3s' }}>&nbsp;</div>
                  <div className="tln" style={{ animationDelay: '1.6s' }}><span className="ck">class</span> <span style={{ color: '#ffcb6b' }}>RateLimiter</span>:</div>
                  <div className="tln" style={{ animationDelay: '2.0s' }}>&nbsp;&nbsp;<span className="ck">def</span> <span className="cf">__init__</span>(self, rate, window):</div>
                  <div className="tln" style={{ animationDelay: '2.4s' }}>&nbsp;&nbsp;&nbsp;&nbsp;self.rate, self.window = rate, window</div>
                  <div className="tln" style={{ animationDelay: '2.8s' }}>&nbsp;&nbsp;&nbsp;&nbsp;self._log = <span className="cf">deque</span>()</div>
                  <div className="tln" style={{ animationDelay: '3.2s' }}>&nbsp;&nbsp;&nbsp;&nbsp;self._lock = threading.<span className="cf">Lock</span>()</div>
                  <div className="tln" style={{ animationDelay: '3.6s' }}>&nbsp;</div>
                  <div className="tln" style={{ animationDelay: '4.0s' }}>&nbsp;&nbsp;<span className="ck">def</span> <span className="cf">allow</span>(self, key):</div>
                  <div className="tln" style={{ animationDelay: '4.6s' }}>&nbsp;&nbsp;&nbsp;&nbsp;<span className="ck">with</span> self._lock:</div>
                  <div className="tln" style={{ animationDelay: '5.2s' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;now = time.<span className="cf">monotonic</span>()</div>
                  <div className="tln" style={{ animationDelay: '5.8s' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self._<span className="cf">prune</span>(now)</div>
                  <div className="tln" style={{ animationDelay: '6.4s' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="ck">if</span> <span className="cf">len</span>(self._log) &lt; self.rate:</div>
                  <div className="tln" style={{ animationDelay: '7.0s' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self._log.<span className="cf">append</span>(now)</div>
                  <div className="tln" style={{ animationDelay: '7.6s' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="ck">return</span> <span className="cn">True</span><span className="curblink"></span></div>
                </div>
              </div>
            </div>
          </div>

          {/* terminal */}
          <div className="win w-term">
            <div className="win-tb"><div className="tl"><i className="r"></i><i className="y"></i><i className="g"></i></div><span className="win-name">zsh <span className="muted">— pytest</span></span></div>
            <div className="term-body">
              <div className="tl2" style={{ animationDelay: '8.0s' }}><span className="prompt">$</span> pytest test_limiter.py -v</div>
              <div className="tl2" style={{ animationDelay: '8.6s' }}><span className="ok">test_allows_under_limit</span> <span className="pass">PASSED</span></div>
              <div className="tl2" style={{ animationDelay: '9.0s' }}><span className="ok">test_blocks_over_limit</span> <span className="pass">PASSED</span></div>
              <div className="tl2" style={{ animationDelay: '9.4s' }}><span className="ok">test_concurrent_burst</span> <span className="pass">PASSED</span></div>
              <div className="tl2" style={{ animationDelay: '9.8s' }}><span className="ok">test_window_expiry</span> <span className="pass">PASSED</span></div>
              <div className="tl2" style={{ animationDelay: '10.4s' }}>&nbsp;</div>
              <div className="tl2" style={{ animationDelay: '10.6s' }}><span className="pass">═══ 4 passed in 0.42s ═══</span></div>
              <div className="tl2" style={{ animationDelay: '11.0s' }}><span className="prompt">$</span> <span className="curblink" style={{ height: '13px' }}></span></div>
            </div>
          </div>

          {/* AI chat (floating) */}
          <div className="win w-ai">
            <div className="win-tb"><div className="tl"><i className="r"></i><i className="y"></i><i className="g"></i></div><span className="win-name">AI Assistant</span></div>
            <div className="ai-body">
              <p className="ai-head">Session · tracked</p>
              <div className="msg u" style={{ animationDelay: '1.2s' }}>How do I make <code>allow()</code> safe under concurrent bursts?</div>
              <div className="msg a" style={{ animationDelay: '2.6s' }}>Wrap the read-modify-write in <code>self._lock</code> so two calls can&apos;t both pass the limit. Prune inside the lock too.</div>
              <div className="msg u" style={{ animationDelay: '4.4s' }}>Should I use <code>time()</code> or <code>monotonic()</code>?</div>
              <div className="msg a" style={{ animationDelay: '5.6s' }}><code>monotonic()</code> — it won&apos;t jump if the system clock is adjusted mid-window.</div>
              <div className="ai-typing" style={{ animationDelay: '7.2s' }}><span className="t">ANALYZING PROMPTS</span><span className="d"></span><span className="d"></span><span className="d"></span></div>
            </div>
          </div>

          {/* animated cursor */}
          <svg className="os-cursor" viewBox="0 0 24 24" fill="#fff" stroke="#000" strokeWidth="1"><path d="M5 3l14 7-6 1.5L10 19 5 3z" /></svg>

          {/* dock */}
          <div className="dock">
            <i data-g="</>" className="on"></i>
            <i data-g="›_" className="on"></i>
            <i data-g="AI" className="on"></i>
            <i data-g="◷"></i>
            <i data-g="✦"></i>
          </div>

        </div>
      </div>
    </section>
  );
}

/**
 * One small 3D diagram per extractor agent. Each shows what the agent
 * *watches* rather than what it emits — the payload shape is an
 * implementation detail nobody scanning a landing page needs.
 * All motion is CSS keyframes; see `.av-*` in index.css.
 */

function Screen() {
  return (
    // a terminal being read line by line
    <div className="av-plate av-term">
      <div className="av-term-bar"><i /><i /><i /></div>
      <div className="av-term-body">
        <div className="av-term-l"><span className="av-prompt">$</span> npm test</div>
        <div className="av-term-l av-fail">● 4 assertions failed</div>
        <div className="av-term-l av-pass">✓ 18 passing</div>
      </div>
      <div className="av-scan" />
    </div>
  );
}

function Session() {
  return (
    // a screen recording being sampled: frames pulled off the capture at
    // a fixed interval and stacked back into depth as they age
    <div className="av-frames">
      <div className="av-frame av-f3" />
      <div className="av-frame av-f2" />
      <div className="av-frame av-f1">
        {/* the captured screen: window chrome, a doc, a browser beside it */}
        <div className="av-cap">
          <div className="av-cap-bar"><i /><i /><i /></div>
          <div className="av-cap-body">
            <div className="av-cap-pane">
              <span style={{ width: '78%' }} />
              <span style={{ width: '56%' }} />
              <span style={{ width: '86%' }} />
              <span style={{ width: '42%' }} />
            </div>
            <div className="av-cap-side">
              <span style={{ width: '84%' }} />
              <span style={{ width: '62%' }} />
            </div>
          </div>
        </div>
        <div className="av-rec"><i />REC</div>
        {/* the sampling shutter */}
        <div className="av-shutter" />
      </div>
      <div className="av-scrub"><i /></div>
      <div className="av-tick"><span className="av-tick-dot" />sampled continuously</div>
    </div>
  );
}

function Code() {
  return (
    // a diff: what grew, what went
    <div className="av-plate av-diff">
      <div className="av-diff-file">Login.tsx</div>
      <div className="av-diff-rows">
        <div className="av-row av-add"><b>+</b><i style={{ width: '72%' }} /></div>
        <div className="av-row av-add"><b>+</b><i style={{ width: '54%' }} /></div>
        <div className="av-row av-del"><b>−</b><i style={{ width: '38%' }} /></div>
        <div className="av-row av-add"><b>+</b><i style={{ width: '64%' }} /></div>
      </div>
      <div className="av-diff-sum">
        <span className="av-plus">+18</span>
        <span className="av-minus">−5</span>
        <span className="av-clean">lint clean</span>
      </div>
    </div>
  );
}

function Ai() {
  return (
    // a prompt, a reply, and whether the answer was taken as-is
    <div className="av-chat">
      <div className="av-bubble av-ask">retry or queue here?</div>
      <div className="av-bubble av-reply">
        Queue — retries amplify load under failure
      </div>
      <div className="av-edited">
        <span className="av-caret">▌</span> rewrote the answer before using it
      </div>
    </div>
  );
}

const MAP = {
  screen: Screen,
  session: Session,
  code: Code,
  ai: Ai,
};

export default function AgentVisual({ kind }) {
  const Body = MAP[kind];
  return (
    <div className="av" aria-hidden="true">
      <div className="av-stage">
        <Body />
      </div>
    </div>
  );
}

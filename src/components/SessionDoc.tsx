/**
 * The reverse of the CV sheet: the same candidate, as a recorded work session.
 * Same physical page, entirely different kind of information.
 */

const LOG = [
  { t: '00:07', body: <>sketched the approach in <b>NOTES.md</b> before coding</> },
  { t: '00:15', body: <>asked the model <em>&quot;retry or queue — what breaks first?&quot;</em></> },
  { t: '00:24', body: <>wrote the failing test, <b>then</b> the implementation</> },
  { t: '00:31', body: <>teammate flags a deadline conflict on the same service</> },
  { t: '00:33', body: <>negotiated scope and put the risk in writing</> },
  { t: '00:47', body: <>refactored after review — suite green, <b>142/142</b></> },
];

const SCORES = [
  { k: 'Design process', v: 92 },
  { k: 'Code quality', v: 88 },
  { k: 'AI fluency', v: 90 },
  { k: 'Collaboration', v: 85 },
];

export default function SessionDoc() {
  return (
    <div className="sdoc">
      <div className="sdoc-head">
        <div>
          <div className="sdoc-title">Session Evidence</div>
          <div className="sdoc-name">Jordan Ellis Carter</div>
          <div className="sdoc-role">senior-backend · simulation 041</div>
        </div>
        <div className="sdoc-live"><i />RECORDED</div>
      </div>

      <div className="sdoc-rule" />

      <div className="sdoc-h">Timeline</div>
      {LOG.map((l) => (
        <div className="sdoc-line" key={l.t}>
          <span className="sdoc-t">{l.t}</span>
          <span>{l.body}</span>
        </div>
      ))}

      <div className="sdoc-h sdoc-h-gap">Evaluator signal</div>
      {SCORES.map((s) => (
        <div className="sdoc-score" key={s.k}>
          <span className="sdoc-score-k">{s.k}</span>
          <span className="sdoc-bar"><i style={{ width: `${s.v}%` }} /></span>
          <span className="sdoc-score-v">{s.v}</span>
        </div>
      ))}

      <div className="sdoc-verdict">
        <b>Strong hire.</b> Reasons before coding, uses AI to interrogate
        trade-offs rather than outsource them, and surfaces risk early in
        writing.
      </div>

      <div className="sdoc-foot">Every score links to the events that produced it</div>
    </div>
  );
}

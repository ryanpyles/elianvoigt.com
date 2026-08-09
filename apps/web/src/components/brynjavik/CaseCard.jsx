import React from 'react';
import { Link } from 'react-router-dom';

export default function CaseCard({ caseData }) {
  const c = caseData;
  return (
    <article className="brk-case">
      <div className="brk-case-head">
        <span className="brk-case-n brk-mono">{c.n}.</span>
        <span className="brk-case-name">{c.name}</span>
      </div>
      <p className="brk-case-english">{c.english}</p>
      <p>{c.rule}</p>
      {c.icelandic && (
        <div className="brk-case-example">
          <p className="brk-display" style={{ fontStyle: 'italic', margin: '0 0 4px' }}>{c.icelandic}</p>
          <p className="brk-mono brk-sm brk-muted" style={{ margin: 0 }}>{c.translation}</p>
        </div>
      )}
      {c.danger && <p className="brk-case-danger">{c.danger}</p>}
      <div>
        <span className="brk-case-status">{c.status}</span>
      </div>
      {c.link && (
        <p className="brk-mono brk-sm" style={{ marginTop: '10px' }}>
          <Link to={c.link} className="brk-sea-text">Read the full field note →</Link>
        </p>
      )}
    </article>
  );
}

import React from 'react';

export default function RetrievalPanel() {
  return (
    <aside className="retrieval-panel hidden md:block dense-section">
      <div className="mb-12">
        <div className="metadata-text font-bold mb-2">RETRIEVAL STATUS</div>
        <div className="metadata-label">PARTIAL RELEASE</div>
      </div>

      <div className="mt-4 pt-3 border-t border-foreground/10 opacity-50 dense-section">
        <div className="flex flex-col">
          <span className="metadata-label">RELEASED</span>
          <span className="metadata-value">2026</span>
        </div>
      </div>
    </aside>
  );
}

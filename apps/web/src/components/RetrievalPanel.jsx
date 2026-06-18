import React, { useState, useEffect } from 'react';

export default function RetrievalPanel() {
  const [counts, setCounts] = useState({
    available: 17,
    withheld: 4,
    unstable: 3
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setCounts(prev => ({
        available: prev.available + (Math.random() > 0.5 ? 1 : -1),
        withheld: prev.withheld + (Math.random() > 0.5 ? 1 : -1),
        unstable: prev.unstable + (Math.random() > 0.5 ? 1 : -1)
      }));
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <aside className="retrieval-panel animate-panel-pulse hidden md:block dense-section">
      <div className="mb-12">
        <div className="metadata-text font-bold mb-2">RETRIEVAL STATUS</div>
        <div className="metadata-label">PARTIAL RELEASE</div>
      </div>
      
      <div className="space-y-4">
        <div className="flex flex-col dense-section">
          <span className="metadata-label">AVAILABLE</span>
          <span className="metadata-value">{counts.available.toString().padStart(2, '0')}</span>
        </div>
        <div className="flex flex-col dense-section">
          <span className="metadata-label">WITHHELD</span>
          <span className="metadata-value">{counts.withheld.toString().padStart(2, '0')}</span>
        </div>
      </div>

      <div className="mt-4 pt-4 border-t border-foreground/10 dense-section">
        <div className="flex flex-col">
          <span className="metadata-label">UNSTABLE</span>
          <span className="metadata-value">
            {counts.unstable.toString().padStart(2, '0')}
            <span className="metadata-footnote ml-1">*</span>
          </span>
          <div className="metadata-footnote mt-1">
            *count disputed after restoration
          </div>
        </div>
      </div>

      <div className="mt-4 pt-3 border-t border-foreground/10 opacity-50 space-y-3 dense-section">
        <div className="flex flex-col">
          <span className="metadata-label">RELEASED</span>
          <span className="metadata-value">2026</span>
        </div>
        <div className="flex flex-col">
          <span className="metadata-label">LAST VERIFIED</span>
          <span className="metadata-value">2024</span>
        </div>
      </div>
    </aside>
  );
}
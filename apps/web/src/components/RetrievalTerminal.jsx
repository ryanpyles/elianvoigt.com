import React, { useState, useEffect } from 'react';

export default function RetrievalTerminal() {
  const [counts, setCounts] = useState({ available: 17, withheld: 4, unstable: 3 });

  useEffect(() => {
    // Fluctuate counts to simulate instability
    const fluctuateTimer = setTimeout(() => {
      setCounts((prev) => ({
        available: prev.available + (Math.random() > 0.5 ? 1 : -1),
        withheld: prev.withheld + (Math.random() > 0.5 ? 1 : -1),
        unstable: prev.unstable + (Math.random() > 0.5 ? 1 : -1),
      }));
    }, 1500);

    // Restore original counts
    const resetTimer = setTimeout(() => {
      setCounts({ available: 17, withheld: 4, unstable: 3 });
    }, 3000);

    return () => {
      clearTimeout(fluctuateTimer);
      clearTimeout(resetTimer);
    };
  }, []);

  const formatCount = (num) => num.toString().padStart(2, '0');

  return (
    <div className="retrieval-terminal animate-terminal-pulse weathered-texture scan-lines crease-effect ink-bleed">
      <div className="terminal-section">
        <div className="terminal-header">RETRIEVAL STATUS</div>
        <div className="terminal-status animate-metadata-drift stamp-element rotate-[-2deg] mt-2 mb-4 text-destructive border-destructive">PARTIAL RELEASE</div>
        <div className="terminal-counts">
          <div className="leader-container count-instability">
            <span className="leader-label">AVAILABLE</span>
            <span className="leader-dots"></span>
            <span className="leader-value">{formatCount(counts.available)}</span>
          </div>
          <div className="leader-container count-instability">
            <span className="leader-label">WITHHELD</span>
            <span className="leader-dots"></span>
            <span className="leader-value">{formatCount(counts.withheld)}</span>
          </div>
          <div className="leader-container count-instability">
            <span className="leader-label">UNSTABLE</span>
            <span className="leader-dots"></span>
            <span className="leader-value">{formatCount(counts.unstable)}</span>
            <span className="anomaly-marker">*</span>
          </div>
        </div>
      </div>

      <div className="terminal-section">
        <div className="terminal-header">AUTHORIZATION</div>
        <div className="terminal-status mt-2">AUTHORIZED PARTIAL</div>
      </div>

      <div className="terminal-section">
        <div className="terminal-header">RECOVERY STATUS</div>
        <div className="terminal-status mt-2">STABLE RECOVERY</div>
      </div>

      <div className="terminal-section">
        <div className="terminal-header">VISIBILITY</div>
        <div className="terminal-note mt-2">
          PRIOR RELEASES MAY REMAIN VISIBLE IN SHADOW CACHE. DO NOT TRUST UNVERIFIED FRAGMENTS.
        </div>
      </div>

      <div className="terminal-section">
        <div className="terminal-header">PROCEDURAL NOTICES</div>
        <div className="terminal-counts warning-flicker mt-2">
          <div className="leader-container">
            <span className="leader-label">GROUP</span>
            <span className="leader-dots"></span>
            <span className="leader-value">04</span>
          </div>
          <div className="leader-container">
            <span className="leader-label">RELEASED</span>
            <span className="leader-dots"></span>
            <span className="leader-value">2026</span>
          </div>
          <div className="leader-container">
            <span className="leader-label">VERIFIED</span>
            <span className="leader-dots"></span>
            <span className="leader-value">2024</span>
          </div>
          <div className="leader-container">
            <span className="leader-label">CLASS</span>
            <span className="leader-dots"></span>
            <span className="leader-value">RETAINED</span>
          </div>
        </div>
      </div>

      <div className="mt-auto pt-8 flex flex-col gap-2">
        <div className="reference-code">XP:7 / LEMG 6:204</div>
        <div className="coordinate-marker">56:37'N · 10104'C</div>
      </div>
    </div>
  );
}
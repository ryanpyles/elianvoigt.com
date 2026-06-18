import React from 'react';

function BackgroundTexture() {
  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden bg-background">
      {/* 1. Paper degradation layer (SVG Filter) */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.03] mix-blend-overlay">
        <filter id="paper-noise">
          <feTurbulence type="fractalNoise" baseFrequency="0.01" numOctaves="5" result="noise" />
          <feColorMatrix type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.5 0" in="noise" />
        </filter>
        <rect width="100%" height="100%" filter="url(#paper-noise)" />
      </svg>

      {/* 2. Archival scanning artifacts */}
      <div className="texture-archival"></div>

      {/* 3. Low-opacity ledger grid */}
      <div 
        className="absolute inset-0 opacity-[0.015] mix-blend-screen"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '4rem 4rem',
          backgroundPosition: 'center center'
        }}
      ></div>

      {/* 4. Geographic contour lines / Rear texture */}
      <div className="texture-rear"></div>

      {/* 5. Water stains (SVG organic shapes) */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.02] mix-blend-multiply blur-[1px]">
        <path d="M 100 100 Q 150 50 200 150 T 300 200 T 150 300 Z" fill="currentColor" transform="scale(2) translate(100, 50)" />
        <path d="M 800 600 Q 850 550 900 650 T 1000 700 T 850 800 Z" fill="currentColor" transform="scale(1.5) translate(-200, -100)" />
      </svg>

      {/* 6. Offset print noise / Foreground grain */}
      <div className="texture-grain"></div>

      {/* 7. Faded index numbers in corners */}
      <div className="absolute top-8 left-8 font-mono text-[10px] text-foreground opacity-[0.03] tracking-widest rotate-90 origin-left">
        REF: EV-ARCHIVE-001
      </div>
      <div className="absolute bottom-8 right-8 font-mono text-[10px] text-foreground opacity-[0.03] tracking-widest -rotate-90 origin-right">
        VOL. IV / INCOMPLETE
      </div>

      {/* 8. Drifting overlay layer */}
      <div className="texture-drift"></div>
    </div>
  );
}

export default BackgroundTexture;
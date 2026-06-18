import React from 'react';

export default function FormaetrixMap() {
  return (
    <div className="relative w-full my-8 weathered-texture scan-lines crease-effect ink-bleed border border-border/20 p-4 bg-background/50">
      <svg 
        className="formaetrix-map font-typewriter" 
        viewBox="0 0 1200 800" 
        preserveAspectRatio="xMidYMid meet"
        xmlns="http://www.w3.org/2000/svg"
        style={{ margin: 0 }}
      >
        <defs>
          <filter id="handDrawn" x="-20%" y="-20%" width="140%" height="140%">
            <feTurbulence type="fractalNoise" baseFrequency="0.05" numOctaves="3" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="1.5" xChannelSelector="R" yChannelSelector="G" />
          </filter>
          
          <linearGradient id="fadeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0.6" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0.2" />
          </linearGradient>
          
          <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
            <path d="M 50 0 L 0 0 0 50" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.02" />
          </pattern>
        </defs>

        {/* BACKGROUND GRID */}
        <rect width="100%" height="100%" fill="url(#grid)" />

        {/* CORNER MARKERS */}
        <text x="1180" y="30" fill="currentColor" fontSize="0.6rem" opacity="0.4" textAnchor="end" letterSpacing="0.05em">XP:7 / LEMG 6:204</text>
        <text x="20" y="780" fill="currentColor" fontSize="0.6rem" opacity="0.4" textAnchor="start" letterSpacing="0.05em">56:37'N · 10104'C</text>

        {/* CONNECTORS */}
        <g filter="url(#handDrawn)">
          {/* FORMÆTRIX -> FORMÆTRIX IMPRINT */}
          <line x1="600" y1="115" x2="300" y2="288" stroke="currentColor" strokeWidth="1" opacity="0.6" />
          
          {/* FORMÆTRIX -> LANGUAGE PRESSURE */}
          <line x1="600" y1="115" x2="600" y2="288" stroke="currentColor" strokeWidth="1" opacity="0.6" />
          
          {/* FORMÆTRIX -> ARCHIVAL SYSTEMS (Broken/Damaged) */}
          <path 
            d="M 600 115 L 650 145 M 670 158 L 750 210 M 780 230 L 850 275 M 880 295 L 900 300" 
            stroke="currentColor" 
            strokeWidth="0.5" 
            opacity="0.35" 
            fill="none" 
          />

          {/* FORMÆTRIX IMPRINT -> ELIAN VOIGT */}
          <line x1="300" y1="312" x2="250" y2="438" stroke="currentColor" strokeWidth="0.75" strokeDasharray="3,2" opacity="0.5" />
          
          {/* ELIAN VOIGT -> RYAN J. PYLES (Fading) */}
          <line x1="250" y1="462" x2="250" y2="588" stroke="url(#fadeGradient)" strokeWidth="0.75" />

          {/* LANGUAGE PRESSURE -> FIELD NOTES */}
          <line x1="600" y1="312" x2="550" y2="438" stroke="currentColor" strokeWidth="0.75" strokeDasharray="3,2" opacity="0.5" />
          
          {/* LANGUAGE PRESSURE -> TAXONOMY (Broken/Damaged) */}
          <path 
            d="M 600 312 L 610 340 M 615 355 L 630 395 M 640 420 L 650 438" 
            stroke="currentColor" 
            strokeWidth="0.5" 
            opacity="0.4" 
            fill="none" 
          />

          {/* ARCHIVAL SYSTEMS -> RETRIEVAL PROTOCOLS */}
          <line x1="900" y1="312" x2="850" y2="438" stroke="currentColor" strokeWidth="0.75" strokeDasharray="3,2" opacity="0.5" />
          
          {/* ARCHIVAL SYSTEMS -> RESTORATION PROCEDURES */}
          <line x1="900" y1="312" x2="900" y2="438" stroke="currentColor" strokeWidth="0.75" strokeDasharray="3,2" opacity="0.5" />
          
          {/* ARCHIVAL SYSTEMS -> VERIFICATION STANDARDS */}
          <line x1="900" y1="312" x2="950" y2="438" stroke="currentColor" strokeWidth="0.75" strokeDasharray="3,2" opacity="0.5" />
        </g>

        {/* NODES & LABELS */}

        {/* Primary Node: FORMÆTRIX */}
        <g transform="translate(600, 100)">
          <circle cx="0" cy="0" r="15" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.7" filter="url(#handDrawn)" />
          <text y="-25" fill="currentColor" fontSize="0.85rem" letterSpacing="0.1em" opacity="0.8" textAnchor="middle">FORMÆTRIX</text>
          <text y="35" fill="currentColor" fontSize="0.6rem" letterSpacing="0.12em" opacity="0.4" textAnchor="middle">[ACTIVE]</text>
        </g>

        {/* Secondary Node: FORMÆTRIX IMPRINT */}
        <g transform="translate(300, 300)">
          <circle cx="0" cy="0" r="12" fill="none" stroke="currentColor" strokeWidth="0.75" opacity="0.6" filter="url(#handDrawn)" />
          <text y="-20" fill="currentColor" fontSize="0.75rem" letterSpacing="0.08em" opacity="0.7" textAnchor="middle">FORMÆTRIX IMPRINT</text>
          <text y="25" fill="currentColor" fontSize="0.6rem" letterSpacing="0.12em" opacity="0.4" textAnchor="middle">[ACTIVE]</text>
        </g>

        {/* Secondary Node: LANGUAGE PRESSURE */}
        <g transform="translate(600, 300)">
          <circle cx="0" cy="0" r="12" fill="none" stroke="currentColor" strokeWidth="0.75" opacity="0.6" filter="url(#handDrawn)" />
          <text y="-20" fill="currentColor" fontSize="0.75rem" letterSpacing="0.08em" opacity="0.7" textAnchor="middle">LANGUAGE PRESSURE</text>
          <text y="25" fill="currentColor" fontSize="0.6rem" letterSpacing="0.12em" opacity="0.4" textAnchor="middle">[PARTIAL]</text>
        </g>

        {/* Secondary Node: ARCHIVAL SYSTEMS */}
        <g transform="translate(900, 300)">
          <circle cx="0" cy="0" r="12" fill="none" stroke="currentColor" strokeWidth="0.75" opacity="0.6" filter="url(#handDrawn)" />
          <text y="-20" fill="currentColor" fontSize="0.75rem" letterSpacing="0.08em" opacity="0.7" textAnchor="middle">ARCHIVAL SYSTEMS</text>
          <text y="25" fill="currentColor" fontSize="0.6rem" letterSpacing="0.12em" opacity="0.4" textAnchor="middle">[DISPUTED]</text>
        </g>

        {/* Tertiary Node: ELIAN VOIGT */}
        <g transform="translate(250, 450)">
          <circle cx="0" cy="0" r="10" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.5" filter="url(#handDrawn)" />
          <text y="-18" fill="currentColor" fontSize="0.65rem" letterSpacing="0.1em" opacity="0.5" textAnchor="middle">ELIAN VOIGT</text>
        </g>

        {/* Tertiary Node: RYAN J. PYLES */}
        <g transform="translate(250, 600)">
          <circle cx="0" cy="0" r="10" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.3" filter="url(#handDrawn)" />
          <text y="-18" fill="currentColor" fontSize="0.65rem" letterSpacing="0.1em" opacity="0.3" textAnchor="middle">RYAN J. PYLES</text>
          <text y="22" fill="currentColor" fontSize="0.6rem" letterSpacing="0.12em" opacity="0.2" textAnchor="middle">[ARCHIVED]</text>
        </g>

        {/* Tertiary Node: FIELD NOTES */}
        <g transform="translate(550, 450)">
          <circle cx="0" cy="0" r="10" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.5" filter="url(#handDrawn)" />
          <text y="-18" fill="currentColor" fontSize="0.65rem" letterSpacing="0.1em" opacity="0.5" textAnchor="middle">FIELD NOTES</text>
        </g>

        {/* Tertiary Node: TAXONOMY */}
        <g transform="translate(650, 450)">
          <circle cx="0" cy="0" r="10" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.5" filter="url(#handDrawn)" />
          <text y="-18" fill="currentColor" fontSize="0.65rem" letterSpacing="0.1em" opacity="0.5" textAnchor="middle">TAXONOMY</text>
        </g>

        {/* Tertiary Node: RETRIEVAL PROTOCOLS */}
        <g transform="translate(850, 450)">
          <circle cx="0" cy="0" r="10" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.5" filter="url(#handDrawn)" />
          <text y="-18" fill="currentColor" fontSize="0.65rem" letterSpacing="0.1em" opacity="0.5" textAnchor="middle">RETRIEVAL PROTOCOLS</text>
        </g>

        {/* Tertiary Node: RESTORATION PROCEDURES */}
        <g transform="translate(900, 450)">
          <circle cx="0" cy="0" r="10" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.5" filter="url(#handDrawn)" />
          <text y="22" fill="currentColor" fontSize="0.65rem" letterSpacing="0.1em" opacity="0.5" textAnchor="middle">RESTORATION PROCEDURES</text>
        </g>

        {/* Tertiary Node: VERIFICATION STANDARDS */}
        <g transform="translate(950, 450)">
          <circle cx="0" cy="0" r="10" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.5" filter="url(#handDrawn)" />
          <text y="-18" fill="currentColor" fontSize="0.65rem" letterSpacing="0.1em" opacity="0.5" textAnchor="middle">VERIFICATION STANDARDS</text>
        </g>

      </svg>
    </div>
  );
}
import React from 'react';

// The Æ ligature mark from the brand refresh (elian_voigt_site_assets),
// with the compass-construction rule behind it. Only meaningful inside a
// .voigt-brand scope, which supplies the rust color via --brand-rust.
export default function BrandMark({ size = 40, withRule = true, className = '' }) {
  return (
    <span
      className={`relative inline-flex items-center justify-center ${className}`}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      {withRule && (
        <svg viewBox="0 0 100 100" className="voigt-mark-rule-svg absolute inset-0" style={{ color: 'hsl(var(--brand-rust))' }}>
          <circle cx="50" cy="50" r="46" fill="none" stroke="currentColor" strokeWidth="0.6" opacity="0.4" />
          <line x1="50" y1="2" x2="50" y2="18" stroke="currentColor" strokeWidth="0.6" opacity="0.4" />
          <line x1="50" y1="82" x2="50" y2="98" stroke="currentColor" strokeWidth="0.6" opacity="0.4" />
          <line x1="2" y1="50" x2="18" y2="50" stroke="currentColor" strokeWidth="0.6" opacity="0.4" />
          <line x1="82" y1="50" x2="98" y2="50" stroke="currentColor" strokeWidth="0.6" opacity="0.4" />
        </svg>
      )}
      <span
        className="voigt-mark relative leading-none"
        style={{ fontSize: size * 0.46, fontWeight: 600 }}
      >
        Æ
      </span>
    </span>
  );
}

import React from 'react';

export default function ArchivalInterruptionNotice({ message, spacing = 'standard' }) {
  const margins = {
    dense: 'my-3',
    standard: 'my-6',
    sparse: 'my-10'
  };

  return (
    <div className={`w-full text-center py-4 border-institutional mono-text-small text-[0.7rem] tracking-[0.1em] opacity-40 ${margins[spacing]}`}>
      {message}
    </div>
  );
}
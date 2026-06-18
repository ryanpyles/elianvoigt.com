import React from 'react';

export default function ShadowRecord({ record }) {
  return (
    <div className="font-mono text-sm opacity-50 border-l border-dashed border-border/40 pl-4 py-3 my-2">
      <div className="flex justify-between items-center mb-1">
        <span className="uppercase tracking-widest">[{record.shadowRecordStatus}]</span>
        <span className="text-[0.7rem] opacity-60">ID: {record.id.toUpperCase()}</span>
      </div>
      <div className="text-[0.8rem] italic opacity-70 mb-1">
        Reason: {record.shadowRecordReason || '[UNAVAILABLE]'}
      </div>
      <div className="text-[0.7rem] opacity-60">
        Removal/Release Date: {record.shadowRecordRemovalDate || '[RESTRICTED]'}
      </div>
    </div>
  );
}
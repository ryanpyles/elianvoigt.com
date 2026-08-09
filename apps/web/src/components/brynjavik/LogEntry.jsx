import React from 'react';
import { motion } from 'framer-motion';

export default function LogEntry({ label, title, note, index, redacted }) {
  return (
    <motion.div
      className="brk-log-row"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 1, delay: (index % 6) * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <span className="brk-log-label">{label}</span>
      <div className={redacted ? 'brk-log-redacted' : undefined}>
        <h3>{title}</h3>
        <p>{note}</p>
      </div>
    </motion.div>
  );
}

import React from 'react';
import { motion } from 'framer-motion';

export default function FloorRow({ floor, index }) {
  return (
    <motion.div
      className="tou-floor-row"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 1.1, delay: (index % 6) * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <span className="tou-floor-level">{floor.level}</span>
      <div>
        <h3>{floor.name}</h3>
        <p>{floor.note}</p>
      </div>
    </motion.div>
  );
}

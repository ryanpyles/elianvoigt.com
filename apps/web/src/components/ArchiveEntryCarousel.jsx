import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ArchiveEntryCard from './ArchiveEntryCard';

function ArchiveEntryCarousel({ books }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextBook = () => {
    setCurrentIndex((prev) => (prev + 1) % books.length);
  };

  const prevBook = () => {
    setCurrentIndex((prev) => (prev - 1 + books.length) % books.length);
  };

  if (!books || books.length === 0) return null;

  return (
    <div className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-background border-y border-border/30">
      <AnimatePresence mode="wait">
        <ArchiveEntryCard key={currentIndex} book={books[currentIndex]} />
      </AnimatePresence>

      {/* Navigation Controls */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-between items-center px-6 lg:px-12 z-20 pointer-events-none">
        <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
          {currentIndex + 1} OF {books.length}
        </div>
        
        <div className="flex gap-4 pointer-events-auto">
          <button onClick={prevBook} className="p-3 border border-border/50 hover:bg-foreground hover:text-background transition-colors duration-500" aria-label="Previous Entry">
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button onClick={nextBook} className="p-3 border border-border/50 hover:bg-foreground hover:text-background transition-colors duration-500" aria-label="Next Entry">
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ArchiveEntryCarousel;
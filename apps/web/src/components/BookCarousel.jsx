import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

function BookCarousel({ books }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextBook = () => {
    setCurrentIndex((prev) => (prev + 1) % books.length);
  };

  const prevBook = () => {
    setCurrentIndex((prev) => (prev - 1 + books.length) % books.length);
  };

  return (
    <div className="relative min-h-[80vh] flex items-center justify-center overflow-hidden py-24">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, filter: 'blur(10px)' }}
          animate={{ opacity: 1, filter: 'blur(0px)' }}
          exit={{ opacity: 0, filter: 'blur(10px)' }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="w-full max-w-[90rem] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
        >
          {/* Metadata & Controls (Left) */}
          <div className="lg:col-span-3 flex flex-col justify-between h-full order-2 lg:order-1">
            <div className="space-y-8">
              <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground space-y-2">
                <p>Status: {books[currentIndex].status}</p>
                <p>Ref: {books[currentIndex].slug.substring(0, 8).toUpperCase()}</p>
              </div>
              
              <div className="flex gap-4">
                <button onClick={prevBook} className="p-2 border border-border/50 hover:bg-foreground hover:text-background transition-colors duration-500">
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button onClick={nextBook} className="p-2 border border-border/50 hover:bg-foreground hover:text-background transition-colors duration-500">
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Main Content (Center) */}
          <div className="lg:col-span-6 text-center order-1 lg:order-2">
            <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl mb-8 ink-bleed">
              {books[currentIndex].title}
            </h2>
            <p className="font-serif italic text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              "{books[currentIndex].longline}"
            </p>
            <Link 
              to={`/books/${books[currentIndex].slug}`}
              className="ghost-button inline-block"
            >
              Examine Document
            </Link>
          </div>

          {/* Decorative/Context (Right) */}
          <div className="lg:col-span-3 hidden lg:flex flex-col justify-end h-full order-3 text-right">
            <div className="vertical-text font-mono text-xs uppercase tracking-widest text-muted-foreground/40 ml-auto">
              Archive Entry {String(currentIndex + 1).padStart(2, '0')}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default BookCarousel;
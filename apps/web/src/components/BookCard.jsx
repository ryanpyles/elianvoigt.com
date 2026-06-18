import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

function BookCard({ title, longline, status, slug, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-card border border-border rounded-2xl p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
    >
      <div className="flex flex-col h-full">
        <div className="mb-4">
          <Badge variant="secondary" className="mb-4 font-mono text-xs tracking-wide">
            {status}
          </Badge>
          <h3 className="text-2xl md:text-3xl font-semibold mb-3 text-balance">
            {title}
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            {longline}
          </p>
        </div>

        <div className="mt-auto pt-6">
          <Button asChild variant="outline" className="w-full group-hover:bg-accent group-hover:text-accent-foreground group-hover:border-accent transition-all duration-200">
            <Link to={`/books/${slug}`}>
              View Book
            </Link>
          </Button>
        </div>
      </div>
    </motion.div>
  );
}

export default BookCard;
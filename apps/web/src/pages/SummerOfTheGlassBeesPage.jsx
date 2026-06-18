import React from 'react';
import BookDetailTemplate from '@/components/BookDetailTemplate.jsx';
import { booksData } from '@/data/books.js';

function SummerOfTheGlassBeesPage() {
  const bookData = booksData.find(b => b.slug === 'summer-of-the-glass-bees');
  
  if (!bookData) return null;

  return <BookDetailTemplate {...bookData} />;
}

export default SummerOfTheGlassBeesPage;
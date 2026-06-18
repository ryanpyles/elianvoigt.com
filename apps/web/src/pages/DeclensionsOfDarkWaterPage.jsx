import React from 'react';
import BookDetailTemplate from '@/components/BookDetailTemplate.jsx';
import { booksData } from '@/data/books.js';

function DeclensionsOfDarkWaterPage() {
  const bookData = booksData.find(b => b.slug === 'declensions-of-dark-water');
  
  if (!bookData) return null;

  return <BookDetailTemplate {...bookData} />;
}

export default DeclensionsOfDarkWaterPage;
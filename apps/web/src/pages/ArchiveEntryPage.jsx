import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import BookDetailTemplate from '@/components/BookDetailTemplate.jsx';
import { booksData } from '@/data/books.js';

export default function ArchiveEntryPage() {
  const { slug } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    const found = booksData.find(b => b.slug === slug);
    if (found) {
      // Primary location override for books context
      found.contextualLocation = "65.9°N 21.8°W"; 
      setBook(found);
    }
  }, [slug]);

  if (!book) {
    return (
      <div className="min-h-screen bg-background flex flex-col justify-center items-center">
        <Helmet><title>Entry Not Found — Elian Voigt</title></Helmet>
        <Header />
        <div className="text-center font-mono">
          <p className="text-muted-foreground mb-4">ERR_ENTRY_NOT_LOCATED</p>
          <Link to="/" className="editorial-link">Return to Index</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{`${book.title} — Archive Entry ${book.archiveEntry}`}</title>
      </Helmet>
      
      <Header />
      
      <main className="pt-24 pb-24">
        <BookDetailTemplate book={book} />
      </main>
      
      <Footer />
    </div>
  );
}
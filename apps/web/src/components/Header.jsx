import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

export default function Header() {
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md md:ml-[140px]">
      <div className="absolute top-2 right-6 metadata-footnote pointer-events-none">
        ARCHIVE STATUS: PARTIAL RELEASE
      </div>
      
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between relative">
        <Link to="/" className="flex flex-col group">
          <span className="font-serif text-2xl tracking-[0.08em] uppercase group-hover:opacity-80 transition-opacity">
            Elian Voigt
          </span>
          <div className="header-metadata">
            <div className="metadata-text opacity-40" style={{ margin: 0, fontSize: '0.6rem' }}>LITERARY IDENTITY RECORD</div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8 metadata-text">
          <Link 
            to="/archive/field-notes"
            className={`transition-opacity duration-150 ease-linear ${
              location.pathname.startsWith('/archive/field-notes')
                ? 'opacity-90' 
                : 'opacity-50 hover:opacity-70'
            }`}
          >
            Field Notes
          </Link>
          
          <Link 
            to="/archive/taxonomy"
            className={`transition-opacity duration-150 ease-linear ${
              location.pathname.startsWith('/archive/taxonomy')
                ? 'opacity-90' 
                : 'opacity-50 hover:opacity-70'
            }`}
          >
            Taxonomy
          </Link>

          <Link 
            to="/publishing-catalogue"
            className={`transition-opacity duration-150 ease-linear ${
              location.pathname === '/publishing-catalogue'
                ? 'opacity-90' 
                : 'opacity-50 hover:opacity-70'
            }`}
          >
            Catalogue
          </Link>
          
          <div className="relative group flex flex-col items-center">
            <Link 
              to="/about"
              className={`transition-opacity duration-150 ease-linear ${
                location.pathname === '/about'
                  ? 'opacity-90'
                  : 'opacity-50 hover:opacity-70'
              }`}
            >
              About
            </Link>
          </div>
        </nav>

        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="w-5 h-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-background border-l border-border/30">
            <nav className="flex flex-col gap-8 mt-16 metadata-text">
              <Link to="/archive/field-notes" className="opacity-50">Field Notes</Link>
              <Link to="/archive/taxonomy" className="opacity-50">Taxonomy</Link>
              <Link to="/publishing-catalogue" className="opacity-50">Catalogue</Link>
              <Link to="/about" className="opacity-50">About</Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
      
      {/* Procedural Divider */}
      <div className="procedural-divider absolute bottom-0 left-0"></div>
    </header>
  );
}
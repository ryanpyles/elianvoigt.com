import React from 'react';
import { Route, Routes, BrowserRouter as Router, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Toaster } from '@/components/ui/sonner.jsx';
import { Helmet } from 'react-helmet';
import ScrollToTop from './components/ScrollToTop.jsx';

import HomePage from './pages/HomePage.jsx';
import ArchiveEntryPage from './pages/ArchiveEntryPage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage.jsx';
import FieldNotesArchivePage from './pages/FieldNotesArchivePage.jsx';
import FieldNoteDetailPage from './pages/FieldNoteDetailPage.jsx';
import PublishingCataloguePage from './pages/PublishingCataloguePage.jsx';
import BookDetailPage from './pages/BookDetailPage.jsx';
import TermsOfUnbeingPage from './pages/TermsOfUnbeingPage.jsx';

// Vikamal Archive System
import VikamalArchivePage from './pages/VikamalArchivePage.jsx';
import FieldNote004_17Page from './pages/FieldNote004_17Page.jsx';
import FieldNote004_18Page from './pages/FieldNote004_18Page.jsx';
import FieldNote004_19Page from './pages/FieldNote004_19Page.jsx';
import FieldNote004_20Page from './pages/FieldNote004_20Page.jsx';
import FieldNote004_21Page from './pages/FieldNote004_21Page.jsx';
import FieldNote004_22Page from './pages/FieldNote004_22Page.jsx';
import FieldNote004_23Page from './pages/FieldNote004_23Page.jsx';
import FieldNote004_24Page from './pages/FieldNote004_24Page.jsx';
import FieldNote004_25Page from './pages/FieldNote004_25Page.jsx';
import FieldNote004_26Page from './pages/FieldNote004_26Page.jsx';

// New Archive Departments
import FieldNotesIndexPage from './pages/FieldNotesIndexPage.jsx';
import DeclensionsOfDarkWaterArchive from './pages/DeclensionsOfDarkWaterArchive.jsx';
import SummerOfTheGlassBeesArchive from './pages/SummerOfTheGlassBeesArchive.jsx';
import TermsOfUnbeingArchive from './pages/TermsOfUnbeingArchive.jsx';
import WhatSurvivesIsProofArchive from './pages/WhatSurvivesIsProofArchive.jsx';

// Taxonomy & Themes & Terminology
import TaxonomyPage from './pages/TaxonomyPage.jsx';
import TerminologyPage from './pages/TerminologyPage.jsx';
import LanguageThemePage from './pages/LanguageThemePage.jsx';
import GriefThemePage from './pages/GriefThemePage.jsx';
import InstitutionsThemePage from './pages/InstitutionsThemePage.jsx';

// Faust Luxury Residences — immersive Terms of Unbeing institution site.
// Not linked from Header.jsx or any index page; reachable by URL only, same
// convention as VikamalArchivePage and the FieldNote004_* pages above.
import FaustResidencesHub from './pages/faust/FaustResidencesHub.jsx';
import ResidentDirectoryPage from './pages/faust/ResidentDirectoryPage.jsx';
import LeaseExplorerPage from './pages/faust/LeaseExplorerPage.jsx';
import BuildingBlueprintPage from './pages/faust/BuildingBlueprintPage.jsx';
import TribunalArchivePage from './pages/faust/TribunalArchivePage.jsx';
import Apartment6APage from './pages/faust/Apartment6APage.jsx';

// Brynjavík Field Station Archive — immersive Declensions of Dark Water
// institution site. Same pattern as pages/faust/*.
import BrynjavikHub from './pages/brynjavik/BrynjavikHub.jsx';
import GrammarArchivePage from './pages/brynjavik/GrammarArchivePage.jsx';
import CoastalLogPage from './pages/brynjavik/CoastalLogPage.jsx';
import EighthDeclensionPage from './pages/brynjavik/EighthDeclensionPage.jsx';

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/archive/:slug" element={<ArchiveEntryPage />} />
        
        {/* Core Field Notes */}
        <Route path="/field-notes" element={<FieldNotesArchivePage />} />
        <Route path="/field-notes/:slug" element={<FieldNoteDetailPage />} />
        
        {/* Vikamál Fragment System */}
        <Route path="/field-notes/vikamal-coastal-grammar" element={<VikamalArchivePage />} />
        <Route path="/field-notes/field-note-004-17" element={<FieldNote004_17Page />} />
        <Route path="/field-notes/field-note-004-18" element={<FieldNote004_18Page />} />
        <Route path="/field-notes/field-note-004-19" element={<FieldNote004_19Page />} />
        <Route path="/field-notes/field-note-004-20" element={<FieldNote004_20Page />} />
        <Route path="/field-notes/field-note-004-21" element={<FieldNote004_21Page />} />
        <Route path="/field-notes/field-note-004-22" element={<FieldNote004_22Page />} />
        <Route path="/field-notes/field-note-004-23" element={<FieldNote004_23Page />} />
        <Route path="/field-notes/field-note-004-24" element={<FieldNote004_24Page />} />
        <Route path="/field-notes/field-note-004-25" element={<FieldNote004_25Page />} />
        <Route path="/field-notes/field-note-004-26" element={<FieldNote004_26Page />} />

        {/* Archive Departments */}
        <Route path="/archive/field-notes" element={<FieldNotesIndexPage />} />
        <Route path="/archive/declensions-of-dark-water" element={<DeclensionsOfDarkWaterArchive />} />
        <Route path="/archive/summer-of-the-glass-bees" element={<SummerOfTheGlassBeesArchive />} />
        <Route path="/archive/terms-of-unbeing" element={<TermsOfUnbeingArchive />} />
        <Route path="/archive/what-survives-is-proof" element={<WhatSurvivesIsProofArchive />} />

        {/* Taxonomy, Terminology & Themes */}
        <Route path="/archive/taxonomy" element={<TaxonomyPage />} />
        <Route path="/archive/terminology" element={<TerminologyPage />} />
        <Route path="/archive/themes/language" element={<LanguageThemePage />} />
        <Route path="/archive/themes/grief" element={<GriefThemePage />} />
        <Route path="/archive/themes/institutions" element={<InstitutionsThemePage />} />

        {/* Faust Luxury Residences — immersive institution site (unlinked) */}
        <Route path="/faust-luxury-residences" element={<FaustResidencesHub />} />
        <Route path="/faust-luxury-residences/residents" element={<ResidentDirectoryPage />} />
        <Route path="/faust-luxury-residences/lease" element={<LeaseExplorerPage />} />
        <Route path="/faust-luxury-residences/building" element={<BuildingBlueprintPage />} />
        <Route path="/faust-luxury-residences/tribunal" element={<TribunalArchivePage />} />
        <Route path="/faust-luxury-residences/6a" element={<Apartment6APage />} />

        {/* Brynjavík Field Station Archive — immersive institution site */}
        <Route path="/brynjavik" element={<BrynjavikHub />} />
        <Route path="/brynjavik/grammar" element={<GrammarArchivePage />} />
        <Route path="/brynjavik/log" element={<CoastalLogPage />} />
        <Route path="/brynjavik/eighth-declension" element={<EighthDeclensionPage />} />

        {/* General Pages */}
        <Route path="/publishing-catalogue" element={<PublishingCataloguePage />} />
        <Route path="/books/terms-of-unbeing" element={<TermsOfUnbeingPage />} />
        <Route path="/terms-of-unbeing" element={<TermsOfUnbeingPage />} />
        <Route path="/catalogue/:bookId" element={<BookDetailPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/privacy" element={<PrivacyPolicyPage />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <AnimatedRoutes />
      <Toaster />
    </Router>
  );
}

export default App;
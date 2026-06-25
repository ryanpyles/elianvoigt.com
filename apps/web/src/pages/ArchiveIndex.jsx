import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import BreadcrumbSchema from '@/components/BreadcrumbSchema.jsx';

export default function ArchiveIndex() {
  const departments = [
    {
      title: 'Declensions of Dark Water',
      path: '/archive/declensions-of-dark-water',
      desc: 'Coastal linguistics, weather anomalies, and the grammar of the drowned.',
      status: 'ACTIVE RECOVERY'
    },
    {
      title: 'Summer of the Glass Bees',
      path: '/archive/summer-of-the-glass-bees',
      desc: 'Municipal records, sterilization protocols, and memory degradation.',
      status: 'QUARANTINED'
    },
    {
      title: 'Terms of Unbeing',
      path: '/archive/terms-of-unbeing',
      desc: 'Contractual paradoxes, recursive clauses, and legal unmaking.',
      status: 'UNDER REVIEW'
    },
    {
      title: 'What Survives Is Proof',
      path: '/archive/what-survives-is-proof',
      desc: 'Forensic fragments, evidence boards, and incomplete timelines.',
      status: 'EVIDENCE LOGGED'
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet><title>Institutional Archive — Elian Voigt | FORMÆTRIX Imprint</title></Helmet>

      <BreadcrumbSchema items={[
        { name: "Home", url: "/" },
        { name: "Archive", url: "/archive" }
      ]} />

      <Header />
      
      <main className="pt-32 pb-32 max-w-4xl mx-auto px-6 sparse-section">
        <h1 className="literary-statement-secondary border-b border-border/30 pb-8" style={{ padding: 0, margin: '0 0 2rem 0' }}>
          Institutional Archive
        </h1>
        
        <div className="mb-12 operational-description">
          <p>
            Welcome to the central node of the Elian Voigt institutional archive. The records below are organized by structural failure points: where language breaks down, where institutions sterilize reality, where grief flattens identity, and where contracts rewrite the past.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 medium-section">
          {departments.map((dept) => (
            <Link key={dept.path} to={dept.path} className="block p-8 border border-border/30 hover:bg-muted/10 transition-colors group">
              <div className="metadata-label mb-4">STATUS: <span className="metadata-value">{dept.status}</span></div>
              <h2 className="literary-statement-secondary mb-4 group-hover:text-muted-foreground transition-colors" style={{ padding: 0, margin: 0, fontSize: '1.5rem' }}>{dept.title}</h2>
              <p className="operational-text">{dept.desc}</p>
            </Link>
          ))}
        </div>

        <section className="pt-8 border-t border-border/30 dense-section">
          <h2 className="metadata-label mb-6">Archive Subsystems</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <Link to="/archive/field-notes" className="metadata-text hover:underline">→ Field Notes Aggregation</Link>
            <Link to="/archive/taxonomy" className="metadata-text hover:underline">→ Institutional Taxonomy</Link>
            <Link to="/archive/themes/institutions" className="metadata-text hover:underline">→ Thematic Hubs</Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
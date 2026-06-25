import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import pb from '@/lib/pocketbaseClient.js';
import { ENTITY_RELATIONSHIPS } from '@/lib/relationshipMaps.js';

export default function RelatedRecords({ currentTheme, currentClassification, currentLocation, currentBook }) {
  const [relatedNotes, setRelatedNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRelated = async () => {
      try {
        setLoading(true);
        const notes = await pb.collection('field_notes').getFullList({
          $autoCancel: false,
          sort: '-created'
        });
        
        let filtered = [];
        
        if (currentTheme) {
          filtered = (notes || []).filter(n => 
            (n?.subjects || []).includes(currentTheme.toUpperCase()) || 
            (n?.classification || '').includes(currentTheme.toUpperCase())
          );
        } else if (currentClassification) {
          filtered = (notes || []).filter(n => n?.classification === currentClassification);
        } else if (currentLocation) {
          filtered = (notes || []).filter(n => (n?.recoverySource || '').includes(currentLocation));
        } else if (currentBook) {
          filtered = (notes || []).filter(n => (n?.relatedBooks || []).includes(currentBook));
        }

        setRelatedNotes((filtered || []).slice(0, 4));
      } catch (err) {
        console.error("[RelatedRecords] Error fetching related records:", err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchRelated();
  }, [currentTheme, currentClassification, currentLocation, currentBook]);

  const crossThematic = currentTheme && ENTITY_RELATIONSHIPS?.themes?.[currentTheme] 
    ? (ENTITY_RELATIONSHIPS.themes[currentTheme].relatedThemes || [])
    : [];

  const relatedClassifications = currentTheme && ENTITY_RELATIONSHIPS?.themes?.[currentTheme]
    ? (ENTITY_RELATIONSHIPS.themes[currentTheme].classifications || [])
    : [];

  const relatedLocationsData = currentTheme && ENTITY_RELATIONSHIPS?.themes?.[currentTheme]
    ? (ENTITY_RELATIONSHIPS.themes[currentTheme].locations || [])
    : [];

  const bookData = currentBook && ENTITY_RELATIONSHIPS?.books?.[currentBook] 
    ? ENTITY_RELATIONSHIPS.books[currentBook] 
    : null;

  if (loading) return <div className="mt-24 pt-8 border-t border-border/30 metadata-text opacity-50">LOCATING RELATED RECORDS...</div>;
  if (error) return <div className="mt-24 pt-8 border-t border-border/30 metadata-text text-destructive opacity-80">ERR_RETRIEVAL_FAILED</div>;

  return (
    <section className="mt-24 pt-8 border-t border-border/30 medium-section">
      <h2 className="operational-label mb-8 opacity-60">
        Cross-Referenced Institutional Network
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {crossThematic.length > 0 && (
          <div>
            <h3 className="metadata-label mb-4">Cross-Thematic Links</h3>
            <ul className="bibliography-list">
              {crossThematic.map((conn, idx) => (
                <li key={idx} className="operational-text">
                  <Link to={`/archive/themes/${(conn?.theme || '').toLowerCase()}`} className="hover:opacity-100 transition-opacity duration-300">
                    {conn?.theme || 'Unknown'} Hub. Thematic intersection.
                  </Link>
                  <div className="metadata-footnote mt-1">
                    [THEMATIC HUB / {(conn?.theme || 'UNKNOWN').toUpperCase()}]
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}

        {bookData && (bookData?.primaryThemes || []).length > 0 && (
          <div>
            <h3 className="metadata-label mb-4">Entity Bindings</h3>
            <ul className="bibliography-list">
              {(bookData.primaryThemes || []).map((theme, idx) => (
                <li key={idx} className="operational-text">
                  <Link to={`/archive/themes/${(theme || '').toLowerCase()}`} className="hover:opacity-100 transition-opacity duration-300">
                    {theme}. Primary thematic classification.
                  </Link>
                  <div className="metadata-footnote mt-1">
                    [THEME / {(theme || '').toUpperCase()}]
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}

        {(relatedClassifications.length > 0 || relatedLocationsData.length > 0) && (
          <div>
            <h3 className="metadata-label mb-4">Structural Data</h3>
            <ul className="bibliography-list">
              {relatedClassifications.map((cls, idx) => (
                <li key={`cls-${idx}`} className="operational-text">
                  <Link to="/archive/taxonomy" className="hover:opacity-100 transition-opacity duration-300">
                    {cls}. Institutional classification standard.
                  </Link>
                  <div className="metadata-footnote mt-1">
                    [TAXONOMY / {(cls || '').toUpperCase()}]
                  </div>
                </li>
              ))}
              {relatedLocationsData.map((loc, idx) => (
                <li key={`loc-${idx}`} className="operational-text">
                  {loc}. Geographic site record.
                  <div className="metadata-footnote mt-1">
                    [LOCATION / {(loc || '').toUpperCase()}]
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}

        {relatedNotes.length > 0 && (
          <div>
            <h3 className="metadata-label mb-4">Active Fragments</h3>
            <ul className="bibliography-list">
              {relatedNotes.map((note) => (
                <li key={note?.id || Math.random()} className="operational-text">
                  <Link to={`/field-notes/${note?.slug || ''}`} className="hover:opacity-100 transition-opacity duration-300">
                    {note?.title || 'Untitled Fragment'}. Field Note FN-{note?.fieldNoteNumber || note?.id?.substring(0,4) || 'XXXX'}.
                  </Link>
                  <div className="metadata-footnote mt-1">
                    [FIELD NOTE / {note?.classification || 'UNASSIGNED'}]
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}

      </div>
    </section>
  );
}
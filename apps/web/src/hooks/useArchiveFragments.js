import { useState, useCallback } from 'react';
import archiveFragmentsData from '@/data/archive_fragments.json';

export function useArchiveFragments() {
  const [fragments] = useState(archiveFragmentsData);

  const getFragments = useCallback((filters = {}) => {
    return fragments.filter((fragment) => {
      let matches = true;
      if (filters.type && fragment.type !== filters.type) matches = false;
      if (filters.placement && fragment.placement !== filters.placement) matches = false;
      if (filters.relatedTo && fragment.relatedTo !== filters.relatedTo) matches = false;
      if (filters.language && fragment.language !== filters.language) matches = false;
      if (filters.damaged !== undefined && fragment.damaged !== filters.damaged) matches = false;
      return matches;
    });
  }, [fragments]);

  const getRandomFragments = useCallback((count = 1, filters = {}) => {
    const filtered = getFragments(filters);
    if (filtered.length === 0) return [];
    
    const shuffled = [...filtered].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  }, [getFragments]);

  const getByType = useCallback((type) => {
    return getFragments({ type });
  }, [getFragments]);

  const getByDocument = useCallback((documentId) => {
    return getFragments({ relatedTo: documentId });
  }, [getFragments]);

  return {
    fragments,
    getFragments,
    getRandomFragments,
    getByType,
    getByDocument
  };
}
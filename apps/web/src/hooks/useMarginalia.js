import { useState, useCallback } from 'react';
import marginaliaData from '@/data/marginalia.json';

export function useMarginalia() {
  const [marginalia] = useState(marginaliaData);

  const getMarginalia = useCallback((filters = {}) => {
    return marginalia.filter((entry) => {
      let matches = true;
      if (filters.associatedDocument && entry.associatedDocument !== filters.associatedDocument) matches = false;
      if (filters.language && entry.language !== filters.language) matches = false;
      if (filters.handwrittenStyle && entry.handwrittenStyle !== filters.handwrittenStyle) matches = false;
      if (filters.placement && entry.placement !== filters.placement) matches = false;
      if (filters.damaged !== undefined && entry.damaged !== filters.damaged) matches = false;
      return matches;
    });
  }, [marginalia]);

  const getRandomMarginalia = useCallback((count = 1, filters = {}) => {
    const filtered = getMarginalia(filters);
    if (filtered.length === 0) return [];
    
    const shuffled = [...filtered].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  }, [getMarginalia]);

  const getByDocument = useCallback((documentId) => {
    return getMarginalia({ associatedDocument: documentId });
  }, [getMarginalia]);

  const getByStyle = useCallback((style) => {
    return getMarginalia({ handwrittenStyle: style });
  }, [getMarginalia]);

  return {
    marginalia,
    getMarginalia,
    getRandomMarginalia,
    getByDocument,
    getByStyle
  };
}
import { useMemo } from 'react';

export const useSearch = (items, query) => {
  return useMemo(() => {
    if (!query || query.trim() === '') {
      return items;
    }
    
    const cleanQuery = query.toLowerCase().trim();
    
    return items.filter(item => {
      const matchName = item.name.toLowerCase().includes(cleanQuery);
      const matchIngredients = item.ingredients.toLowerCase().includes(cleanQuery);
      const matchDescription = item.description 
        ? item.description.toLowerCase().includes(cleanQuery) 
        : false;
        
      return matchName || matchIngredients || matchDescription;
    });
  }, [items, query]);
};

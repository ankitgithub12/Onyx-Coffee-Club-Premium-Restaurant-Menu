import { useMemo } from 'react';

export const useFilter = (items, { vegOnly, popularOnly, selectedCategory }) => {
  return useMemo(() => {
    let result = items;

    // Filter by Category — only apply if a specific category is selected
    // When selectedCategory === cat.id (inside MenuGrid), items already belong
    // to that category (enriched with categoryId), so we still filter to be safe.
    if (selectedCategory && selectedCategory !== 'all') {
      result = result.filter(item => item.categoryId === selectedCategory);
    }

    // Filter by Veg status
    if (vegOnly) {
      result = result.filter(item => item.veg);
    }

    // Filter by Popular badge
    if (popularOnly) {
      result = result.filter(item => item.popular);
    }

    return result;
  }, [items, vegOnly, popularOnly, selectedCategory]);
};

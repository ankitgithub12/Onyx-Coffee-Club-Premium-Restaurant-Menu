import React, { useContext } from 'react';
import { MenuContext } from '../../context/MenuContext';
import { categories } from '../../data/menuData';
import { useSearch } from '../../hooks/useSearch';
import { useFilter } from '../../hooks/useFilter';
import MenuCategory from './MenuCategory';
import RestaurantLogo from './RestaurantLogo';
import LoadingSkeleton from '../common/LoadingSkeleton';
import SlideUp from '../animations/SlideUp';
import { FaCoffee, FaSearch } from 'react-icons/fa';

const MenuGrid = () => {
  const { 
    searchQuery, 
    selectedCategory, 
    vegOnly, 
    popularOnly 
  } = useContext(MenuContext);

  // Filter items in each category
  const processedCategories = categories.map((cat) => {
    // Apply search filter to items in this category
    const searchedItems = useSearch(cat.items, searchQuery);
    
    // Apply checkbox/tab filters to items in this category
    const filteredItems = useFilter(searchedItems, {
      vegOnly,
      popularOnly,
      selectedCategory: selectedCategory === 'all' ? cat.id : selectedCategory
    });

    return {
      ...cat,
      items: filteredItems
    };
  });

  // Check if we have any items across any category
  const totalProcessedItems = processedCategories.reduce((sum, cat) => sum + cat.items.length, 0);

  // Separate categories by column for the 3-column layout
  const leftColCats = processedCategories.filter(cat => cat.column === 'left');
  const centerColCats = processedCategories.filter(cat => cat.column === 'center');
  const rightColCats = processedCategories.filter(cat => cat.column === 'right');

  // If search matches nothing, show empty state
  if (totalProcessedItems === 0) {
    return (
      <SlideUp className="text-center py-16 px-4">
        <div className="inline-flex p-4 bg-primary/5 dark:bg-zinc-800 rounded-full mb-4 text-accent animate-bounce">
          <FaCoffee className="text-3xl" />
        </div>
        <h4 className="font-playfair text-xl font-bold text-text-dark dark:text-zinc-200 uppercase tracking-wide">
          No Menu Items Found
        </h4>
        <p className="font-inter text-xs text-text-muted dark:text-zinc-400 mt-2 max-w-sm mx-auto">
          We couldn't find anything matching your filters or search criteria. Try modifying your search or toggles.
        </p>
      </SlideUp>
    );
  }

  // If a single category is selected, render it in a balanced centered grid layout
  if (selectedCategory !== 'all') {
    const activeCategory = processedCategories.find(cat => cat.id === selectedCategory);
    return (
      <div className="max-w-4xl mx-auto px-2">
        <SlideUp>
          {activeCategory && <MenuCategory category={activeCategory} />}
        </SlideUp>
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* 3 Column Grid for Desktop / Tablet Stacking */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
        
        {/* Left Column: Hot Coffee, Cold Coffee, Milkshakes, Fries, Sandwiches */}
        <div className="space-y-8 flex flex-col">
          {leftColCats.map((cat, index) => (
            <SlideUp key={cat.id} delay={index * 0.1}>
              <MenuCategory category={cat} />
            </SlideUp>
          ))}
        </div>

        {/* Center Column: Branding Center + Signature Drinks, Soft Drinks */}
        <div className="space-y-8 flex flex-col">
          
          {/* Logo Branding - visible on desktop, styled at top of menu */}
          <div className="hidden lg:flex flex-col bg-white/40 dark:bg-zinc-900/40 rounded-2xl border border-border-gold/20 p-8 shadow-sm">
            <RestaurantLogo size="md" />
          </div>

          {centerColCats.map((cat, index) => (
            <SlideUp key={cat.id} delay={(index + 2) * 0.1}>
              <MenuCategory category={cat} />
            </SlideUp>
          ))}
        </div>

        {/* Right Column: Pizza, Pasta, Burgers, Shots */}
        <div className="space-y-8 flex flex-col">
          {rightColCats.map((cat, index) => (
            <SlideUp key={cat.id} delay={(index + 4) * 0.1}>
              <MenuCategory category={cat} />
            </SlideUp>
          ))}
        </div>

      </div>
    </div>
  );
};

export default MenuGrid;

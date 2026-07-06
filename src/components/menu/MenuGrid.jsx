import React, { useContext } from 'react';
import { MenuContext } from '../../context/MenuContext';
import { categories } from '../../data/menuData';
import { useSearch } from '../../hooks/useSearch';
import { useFilter } from '../../hooks/useFilter';
import MenuCategory from './MenuCategory';
import RestaurantLogo from './RestaurantLogo';
import LoadingSkeleton from '../common/LoadingSkeleton';
import SlideUp from '../animations/SlideUp';
import { FaCoffee, FaSearch, FaUtensils } from 'react-icons/fa';

const MenuGrid = () => {
  const {
    searchQuery,
    selectedCategory,
    vegOnly,
    popularOnly,
    menuSection
  } = useContext(MenuContext);

  // Process ALL categories first so hook count stays constant across renders.
  // Filtering by section happens AFTER the hooks to avoid the "fewer hooks" error.
  const allProcessedCategories = categories.map((cat) => {
    const searchedItems = useSearch(cat.items, searchQuery);

    const filteredItems = useFilter(searchedItems, {
      vegOnly,
      popularOnly,
      selectedCategory: selectedCategory === 'all' ? 'all' : selectedCategory
    });

    return {
      ...cat,
      items: filteredItems
    };
  });

  // Now filter by the active section
  const processedCategories = allProcessedCategories.filter(cat => cat.section === menuSection);

  // Check if we have any items across any category
  const totalProcessedItems = processedCategories.reduce((sum, cat) => sum + cat.items.length, 0);

  // Separate categories by column for the 3-column layout
  const leftColCats = processedCategories.filter(cat => cat.column === 'left');
  const centerColCats = processedCategories.filter(cat => cat.column === 'center');
  const rightColCats = processedCategories.filter(cat => cat.column === 'right');

  // If search matches nothing, show empty state
  if (totalProcessedItems === 0) {
    const EmptyIcon = menuSection === 'food' ? FaUtensils : FaCoffee;
    return (
      <SlideUp className="text-center py-20 px-4">
        <div className="inline-flex p-5 bg-amber-50 rounded-full mb-4 text-amber-600 shadow-inner">
          <EmptyIcon className="text-4xl" />
        </div>
        <h4 className="font-playfair text-2xl font-bold text-amber-800 uppercase tracking-wide mt-2">
          No Items Found
        </h4>
        <p className="font-inter text-sm text-amber-700/70 mt-3 max-w-sm mx-auto">
          We couldn't find anything matching your filters. Try clearing your search or changing the category.
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
    <div className="w-full relative">
      {/* Decorative Premium Floating Images (Visible on desktop/large screens) */}
      {menuSection === 'beverages' && (
        <div className="hidden xl:block pointer-events-none select-none">
          <img
            src="/images/coffee_latte_art.png"
            alt="Premium Latte Art"
            className="menu-deco-image w-52 h-52 rounded-full absolute"
            style={{ top: '5%', left: '-14rem', transform: 'rotate(-10deg)' }}
          />
          <img
            src="/images/iced_frappe_glass.png"
            alt="Premium Iced Frappé"
            className="menu-deco-image w-56 h-56 rounded-full absolute"
            style={{ top: '40%', right: '-15rem', transform: 'rotate(15deg)' }}
          />
          <img
            src="/images/colorful_mocktails.png"
            alt="Premium Mocktails"
            className="menu-deco-image w-52 h-52 rounded-full absolute"
            style={{ bottom: '15%', left: '-14rem', transform: 'rotate(5deg)' }}
          />
        </div>
      )}

      {/* 3 Column Grid for Desktop / Tablet Stacking */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start relative z-10">

        {/* Left Column */}
        <div className="space-y-6 flex flex-col">
          {leftColCats.map((cat, index) => (
            <SlideUp key={cat.id} delay={index * 0.1}>
              <MenuCategory category={cat} />
            </SlideUp>
          ))}
        </div>

        {/* Center Column: Branding Center + categories */}
        <div className="space-y-6 flex flex-col">
          {/* Logo Branding - visible on desktop */}
          <div className="hidden lg:flex flex-col rounded-2xl p-8 glass-card border border-amber-100/30 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-orange-500/10 pointer-events-none" />
            <RestaurantLogo size="md" />
          </div>

          {centerColCats.map((cat, index) => (
            <SlideUp key={cat.id} delay={(index + 2) * 0.1}>
              <MenuCategory category={cat} />
            </SlideUp>
          ))}
        </div>

        {/* Right Column */}
        <div className="space-y-6 flex flex-col">
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

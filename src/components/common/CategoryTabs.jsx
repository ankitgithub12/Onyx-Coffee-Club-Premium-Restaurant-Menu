import React, { useContext } from 'react';
import { MenuContext } from '../../context/MenuContext';
import { categories } from '../../data/menuData';
import { getCategoryIcon } from '../../utils/helpers';
import { motion } from 'framer-motion';
import { FaLeaf, FaFire } from 'react-icons/fa';

const CategoryTabs = () => {
  const {
    selectedCategory,
    setSelectedCategory,
    vegOnly,
    setVegOnly,
    popularOnly,
    setPopularOnly
  } = useContext(MenuContext);

  const tabs = [
    { id: 'all', name: 'All Menu', iconName: 'FaBorderAll' },
    ...categories
  ];

  return (
    <div className="w-full flex flex-col space-y-6 no-print">
      
      {/* Category Tabs Scroll */}
      <div className="w-full overflow-x-auto pb-2 scrollbar-none flex items-center justify-start md:justify-center">
        <div className="flex space-x-3 px-4 sm:px-6">
          {tabs.map((tab) => {
            const isActive = selectedCategory === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id)}
                className={`relative flex items-center space-x-2 px-4 py-2.5 rounded-2xl text-xs md:text-sm font-semibold whitespace-nowrap transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'text-bg-cream shadow-md z-10'
                    : 'bg-white/60 dark:bg-zinc-900/60 text-text-dark dark:text-zinc-300 hover:bg-zinc-200/50 dark:hover:bg-zinc-800'
                }`}
              >
                {/* Active Indicator Layer */}
                {isActive && (
                  <motion.div
                    layoutId="activeTabIndicator"
                    className="absolute inset-0 bg-primary rounded-2xl -z-10"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className={isActive ? 'text-bg-cream' : 'text-accent'}>
                  {getCategoryIcon(tab.iconName || 'FaBorderAll', 'text-sm')}
                </span>
                <span>{tab.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Filter Toggles Row */}
      <div className="flex flex-wrap items-center justify-center gap-4 px-4 font-inter text-xs">
        
        {/* Veg Only Toggle */}
        <button
          onClick={() => setVegOnly(!vegOnly)}
          className={`flex items-center space-x-2 px-4 py-2 rounded-xl border font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
            vegOnly
              ? 'bg-green-600/10 border-green-600/30 text-green-600 dark:text-green-400 dark:bg-green-950/20'
              : 'bg-white/40 dark:bg-zinc-900/40 border-border-gold/20 text-text-dark dark:text-zinc-300 hover:border-border-gold/45'
          }`}
        >
          <FaLeaf className={vegOnly ? 'text-green-600 dark:text-green-400' : 'text-zinc-400'} />
          <span>Veg Only</span>
        </button>

        {/* Popular Only Toggle */}
        <button
          onClick={() => setPopularOnly(!popularOnly)}
          className={`flex items-center space-x-2 px-4 py-2 rounded-xl border font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
            popularOnly
              ? 'bg-amber-500/10 border-amber-500/30 text-amber-600 dark:text-amber-400 dark:bg-amber-950/20'
              : 'bg-white/40 dark:bg-zinc-900/40 border-border-gold/20 text-text-dark dark:text-zinc-300 hover:border-border-gold/45'
          }`}
        >
          <FaFire className={popularOnly ? 'text-amber-500' : 'text-zinc-400'} />
          <span>Popular Only</span>
        </button>

      </div>
    </div>
  );
};

export default CategoryTabs;

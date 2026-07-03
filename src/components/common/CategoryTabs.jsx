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
    <div className="w-full flex flex-col space-y-5 no-print">

      {/* Category Tabs Scroll */}
      <div className="w-full overflow-x-auto pb-2 scrollbar-none">
        <div className="flex gap-2.5 px-2 sm:px-0 min-w-max sm:min-w-0 sm:flex-wrap sm:justify-center">
          {tabs.map((tab) => {
            const isActive = selectedCategory === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id)}
                className="relative flex items-center gap-2 px-4 py-2.5 rounded-full text-xs md:text-sm font-semibold whitespace-nowrap transition-all duration-300 cursor-pointer border"
                style={isActive ? {
                  background: 'linear-gradient(135deg, #92400e 0%, #d97706 100%)',
                  color: '#fff',
                  borderColor: 'transparent',
                  boxShadow: '0 4px 14px rgba(146, 64, 14, 0.35)',
                } : {
                  background: '#fff',
                  color: '#57534e',
                  borderColor: '#fde68a',
                }}
              >
                {/* Active Indicator Layer */}
                {isActive && (
                  <motion.div
                    layoutId="activeTabIndicator"
                    className="absolute inset-0 rounded-full -z-10"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className={isActive ? 'text-amber-200' : 'text-amber-600'}>
                  {getCategoryIcon(tab.iconName || 'FaBorderAll', 'text-sm')}
                </span>
                <span>{tab.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Filter Toggles Row */}
      <div className="flex flex-wrap items-center justify-center gap-3 px-2 font-inter text-xs">

        {/* Veg Only Toggle */}
        <button
          onClick={() => setVegOnly(!vegOnly)}
          className={`flex items-center gap-2 px-4 py-2 rounded-full border font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
            vegOnly
              ? 'bg-green-50 border-green-400 text-green-700 shadow-sm'
              : 'bg-white border-amber-200 text-stone-600 hover:border-green-300'
          }`}
        >
          <FaLeaf className={vegOnly ? 'text-green-600' : 'text-stone-400'} />
          <span>Veg Only</span>
        </button>

        {/* Popular Only Toggle */}
        <button
          onClick={() => setPopularOnly(!popularOnly)}
          className={`flex items-center gap-2 px-4 py-2 rounded-full border font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
            popularOnly
              ? 'bg-amber-50 border-amber-400 text-amber-700 shadow-sm'
              : 'bg-white border-amber-200 text-stone-600 hover:border-amber-300'
          }`}
        >
          <FaFire className={popularOnly ? 'text-amber-500' : 'text-stone-400'} />
          <span>Popular</span>
        </button>

      </div>
    </div>
  );
};

export default CategoryTabs;

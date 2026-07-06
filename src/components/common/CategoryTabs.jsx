import React, { useContext } from 'react';
import { MenuContext } from '../../context/MenuContext';
import { categories } from '../../data/menuData';
import { getCategoryIcon } from '../../utils/helpers';
import { motion } from 'framer-motion';
import { FaLeaf, FaFire, FaCoffee, FaUtensils } from 'react-icons/fa';

const CategoryTabs = () => {
  const {
    selectedCategory,
    setSelectedCategory,
    vegOnly,
    setVegOnly,
    popularOnly,
    setPopularOnly,
    menuSection,
    switchMenuSection
  } = useContext(MenuContext);

  // Filter categories by the active section
  const sectionCategories = categories.filter(cat => cat.section === menuSection);

  const tabs = [
    { id: 'all', name: 'All Menu', iconName: 'FaBorderAll' },
    ...sectionCategories
  ];

  return (
    <div className="w-full flex flex-col space-y-5 no-print">

      {/* Section Toggle: Beverages / Food */}
      <div className="flex justify-center">
        <div className="inline-flex rounded-full bg-white border-2 border-amber-200/60 p-1 shadow-md shadow-amber-100/40">
          <button
            onClick={() => switchMenuSection('beverages')}
            className={`flex items-center gap-2.5 px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-400 cursor-pointer ${
              menuSection === 'beverages'
                ? 'bg-gradient-to-r from-amber-600 to-amber-700 text-white shadow-lg shadow-amber-600/25'
                : 'text-stone-500 hover:text-amber-700 hover:bg-amber-50/50'
            }`}
          >
            <FaCoffee className={menuSection === 'beverages' ? 'text-amber-200' : 'text-amber-500'} />
            <span>Beverages</span>
          </button>
          <button
            onClick={() => switchMenuSection('food')}
            className={`flex items-center gap-2.5 px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-400 cursor-pointer ${
              menuSection === 'food'
                ? 'bg-gradient-to-r from-orange-600 to-red-600 text-white shadow-lg shadow-orange-600/25'
                : 'text-stone-500 hover:text-orange-700 hover:bg-orange-50/50'
            }`}
          >
            <FaUtensils className={menuSection === 'food' ? 'text-orange-200' : 'text-orange-500'} />
            <span>Food</span>
          </button>
        </div>
      </div>

      {/* Category Tabs Scroll */}
      <div className="w-full overflow-x-auto pb-2 scrollbar-none">
        <div className="flex gap-2.5 px-2 sm:px-0 min-w-max sm:min-w-0 sm:flex-wrap sm:justify-center">
          {tabs.map((tab) => {
            const isActive = selectedCategory === tab.id;
            const isFood = menuSection === 'food';
            return (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id)}
                className="relative flex items-center gap-2 px-4 py-2.5 rounded-full text-xs md:text-sm font-semibold whitespace-nowrap transition-all duration-300 cursor-pointer border"
                style={isActive ? {
                  background: isFood
                    ? 'linear-gradient(135deg, #c2410c 0%, #ea580c 100%)'
                    : 'linear-gradient(135deg, #92400e 0%, #d97706 100%)',
                  color: '#fff',
                  borderColor: 'transparent',
                  boxShadow: isFood
                    ? '0 4px 14px rgba(194, 65, 12, 0.35)'
                    : '0 4px 14px rgba(146, 64, 14, 0.35)',
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
                <span className={isActive ? 'text-amber-200' : (isFood ? 'text-orange-600' : 'text-amber-600')}>
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

import React from 'react';
import Card from '../common/Card';
import MenuPrice from './MenuPrice';
import IngredientList from './IngredientList';
import { FaCoffee, FaCocktail, FaSnowflake, FaPlusCircle, FaLeaf, FaMugHot } from 'react-icons/fa';
import { GiMilkCarton, GiTeapot, GiIceCube } from 'react-icons/gi';
import { MdOutlineLocalCafe } from 'react-icons/md';

// Category decorative color map
const categoryColors = {
  'hot-coffee': { bg: '#fef3c7', text: '#92400e', icon: <FaCoffee /> },
  'hot-choco': { bg: '#fde68a', text: '#78350f', icon: <FaMugHot /> },
  'hot-tea': { bg: '#d9f99d', text: '#3f6212', icon: <GiTeapot /> },
  'icy-coffee': { bg: '#e0f2fe', text: '#0369a1', icon: <MdOutlineLocalCafe /> },
  'iced-tea': { bg: '#ccfbf1', text: '#0f766e', icon: <GiIceCube /> },
  'frappe': { bg: '#fce7f3', text: '#9d174d', icon: <GiMilkCarton /> },
  'brain': { bg: '#e0e7ff', text: '#4338ca', icon: <FaSnowflake /> },
  'mocktail': { bg: '#ecfdf5', text: '#065f46', icon: <FaCocktail /> },
  'shake': { bg: '#eff6ff', text: '#1d4ed8', icon: <GiMilkCarton /> },
  'extra': { bg: '#fef9c3', text: '#854d0e', icon: <FaPlusCircle /> },
  'pizza': { bg: '#fef3c7', text: '#c2410c', icon: <FaCoffee /> },
  'pasta': { bg: '#fff7ed', text: '#9a3412', icon: <FaCoffee /> },
  'burger': { bg: '#fef9c3', text: '#a16207', icon: <FaCoffee /> },
  'sandwich': { bg: '#fff1f2', text: '#be123c', icon: <FaCoffee /> },
  'french': { bg: '#fffbeb', text: '#b45309', icon: <FaCoffee /> },
  'shot': { bg: '#ecfdf5', text: '#059669', icon: <FaCoffee /> },
  default: { bg: '#fef3c7', text: '#92400e', icon: <FaCoffee /> },
};

const getCategoryStyle = (categoryId = '') => {
  const key = Object.keys(categoryColors).find(k => categoryId.includes(k)) || 'default';
  return categoryColors[key];
};

const MenuCard = ({ item }) => {
  const style = getCategoryStyle(item.categoryId || '');

  return (
    <div className="flex flex-col justify-between h-full rounded-2xl p-5 relative overflow-hidden card-warm group print-card">
      {/* Decorative corner blob */}
      <div
        className="absolute -top-10 -right-10 w-28 h-28 rounded-[40%_60%_70%_30%_/_40%_50%_60%_50%] opacity-40 transition-all duration-500 ease-out group-hover:opacity-60 group-hover:scale-125 group-hover:rotate-12 pointer-events-none"
        style={{ background: style.bg }}
      />

      <div className="relative z-10 space-y-4">

        {/* Badges & Icon */}
        <div className="flex justify-between items-start">
          <div className="flex flex-wrap gap-1.5 max-w-[70%]">
            {item.veg && (
              <span className="inline-flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-wider bg-green-50/90 text-green-700 border border-green-200/60 px-2.5 py-0.5 rounded-full shadow-sm">
                <FaLeaf className="text-[7.5px] text-green-600 animate-pulse-soft" /> Veg
              </span>
            )}
            {item.popular && (
              <span className="inline-flex items-center gap-1 text-[9px] font-bold uppercase tracking-wider bg-amber-50/90 text-amber-700 border border-amber-200/60 px-2.5 py-0.5 rounded-full shadow-sm">
                ⭐ Popular
              </span>
            )}
          </div>

          <div
            className="p-3 rounded-2xl text-2xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-sm"
            style={{ background: style.bg, color: style.text }}
          >
            {style.icon}
          </div>
        </div>

        {/* Text Details */}
        <div className="space-y-1.5">
          <h4 className="font-playfair text-lg md:text-xl font-bold uppercase tracking-wide truncate group-hover:text-amber-800 transition-colors" style={{ color: '#1c1917' }}>
            {item.name}
          </h4>
          <p className="text-xs text-stone-500 font-inter leading-relaxed line-clamp-2 min-h-[32px]">
            {item.description || 'Freshly prepared to order using the finest selected ingredients for absolute serenity.'}
          </p>
        </div>

        {/* Ingredients */}
        <div className="pt-3 border-t border-amber-100/60">
          <span className="text-[10px] font-bold uppercase text-amber-700/80 tracking-wider block mb-1">Ingredients</span>
          <IngredientList ingredients={item.ingredients} className="text-xs" />
        </div>

      </div>

      {/* Pricing */}
      <div className="relative z-10 pt-3 flex items-center justify-start border-t border-amber-100/60 mt-4">
        <MenuPrice
          price={item.price}
          priceRegular={item.priceRegular}
          priceLarge={item.priceLarge}
          className="text-lg md:text-xl bg-gradient-to-r from-amber-800 to-amber-900 bg-clip-text text-transparent"
        />
        {item.priceRegular && item.priceLarge && (
          <span className="text-[9px] text-stone-400 font-inter ml-2 uppercase tracking-wider">Reg / Lg</span>
        )}
      </div>

    </div>
  );
};

export default MenuCard;

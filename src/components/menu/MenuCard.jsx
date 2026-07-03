import React, { useContext } from 'react';
import { MenuContext } from '../../context/MenuContext';
import Card from '../common/Card';
import MenuPrice from './MenuPrice';
import IngredientList from './IngredientList';
import Button from '../common/Button';
import { FaPlus, FaCheck, FaCoffee, FaCocktail, FaPizzaSlice, FaHamburger, FaLeaf } from 'react-icons/fa';
import { GiFrenchFries, GiNoodles, GiMilkCarton } from 'react-icons/gi';

// Category decorative color map
const categoryColors = {
  coffee: { bg: '#fef3c7', text: '#92400e', icon: <FaCoffee /> },
  drink: { bg: '#ecfdf5', text: '#065f46', icon: <FaCocktail /> },
  shot: { bg: '#fdf4ff', text: '#7e22ce', icon: <FaCocktail /> },
  pizza: { bg: '#fff7ed', text: '#c2410c', icon: <FaPizzaSlice /> },
  burger: { bg: '#fef9c3', text: '#854d0e', icon: <FaHamburger /> },
  sandwich: { bg: '#fef9c3', text: '#854d0e', icon: <FaHamburger /> },
  milkshake: { bg: '#eff6ff', text: '#1d4ed8', icon: <GiMilkCarton /> },
  fries: { bg: '#fefce8', text: '#a16207', icon: <GiFrenchFries /> },
  pasta: { bg: '#fff1f2', text: '#9f1239', icon: <GiNoodles /> },
  default: { bg: '#fef3c7', text: '#92400e', icon: <FaCoffee /> },
};

const getCategoryStyle = (categoryId = '') => {
  const key = Object.keys(categoryColors).find(k => categoryId.includes(k)) || 'default';
  return categoryColors[key];
};

const MenuCard = ({ item }) => {
  const { addToShortlist, shortlist } = useContext(MenuContext);
  const isInShortlist = shortlist.some(i => i.id === item.id);
  const currentQty = shortlist.find(i => i.id === item.id)?.quantity || 0;
  const style = getCategoryStyle(item.categoryId || '');

  return (
    <div
      className="flex flex-col justify-between h-full rounded-2xl border border-amber-100 p-5 relative overflow-hidden transition-all duration-300 hover:-translate-y-1 group"
      style={{ background: '#fff', boxShadow: '0 4px 20px rgba(146, 64, 14, 0.09)' }}
    >
      {/* Decorative corner blob */}
      <div
        className="absolute -top-10 -right-10 w-28 h-28 rounded-full opacity-60 transition-all duration-300 group-hover:opacity-80 group-hover:scale-110"
        style={{ background: style.bg }}
      />

      <div className="relative z-10 space-y-4">

        {/* Badges & Icon */}
        <div className="flex justify-between items-start">
          <div className="flex flex-wrap gap-1.5 max-w-[70%]">
            {item.veg && (
              <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider bg-green-50 text-green-700 border border-green-200 px-2 py-0.5 rounded-full">
                <FaLeaf className="text-[8px]" /> Veg
              </span>
            )}
            {item.popular && (
              <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider bg-amber-50 text-amber-700 border border-amber-200 px-2 py-0.5 rounded-full">
                ⭐ Popular
              </span>
            )}
          </div>

          <div
            className="p-3 rounded-2xl text-2xl"
            style={{ background: style.bg, color: style.text }}
          >
            {style.icon}
          </div>
        </div>

        {/* Text Details */}
        <div className="space-y-1.5">
          <h4 className="font-playfair text-lg md:text-xl font-bold uppercase tracking-wide truncate" style={{ color: '#1c1917' }}>
            {item.name}
          </h4>
          <p className="text-xs text-stone-500 font-inter line-clamp-2 min-h-[32px]">
            {item.description || 'Freshly prepared to order using the finest selected ingredients for absolute serenity.'}
          </p>
        </div>

        {/* Ingredients */}
        <div className="pt-2 border-t border-amber-100">
          <span className="text-[10px] font-bold uppercase text-amber-700/80 tracking-wider block mb-0.5">Ingredients</span>
          <IngredientList ingredients={item.ingredients} className="text-xs" />
        </div>

      </div>

      {/* Pricing & Add Button */}
      <div className="relative z-10 pt-4 flex items-center justify-between border-t border-amber-100 mt-4">
        <MenuPrice price={item.price} className="text-lg md:text-xl" />

        <button
          onClick={() => addToShortlist(item)}
          className="flex items-center gap-1.5 px-4 py-2 rounded-full font-bold text-xs uppercase tracking-wide transition-all duration-300 hover:scale-105 cursor-pointer shadow-sm"
          style={isInShortlist ? {
            background: '#fef3c7',
            color: '#92400e',
            border: '1.5px solid #fde68a',
          } : {
            background: 'linear-gradient(135deg, #92400e 0%, #d97706 100%)',
            color: '#fff',
            border: '1.5px solid transparent',
          }}
        >
          {isInShortlist ? (
            <>
              <FaCheck className="text-xs" />
              <span>Added ({currentQty})</span>
            </>
          ) : (
            <>
              <FaPlus className="text-xs" />
              <span>Add to Tray</span>
            </>
          )}
        </button>
      </div>

    </div>
  );
};

export default MenuCard;

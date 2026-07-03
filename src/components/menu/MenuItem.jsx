import React, { useContext, useState } from 'react';
import { MenuContext } from '../../context/MenuContext';
import Badge from '../common/Badge';
import MenuPrice from './MenuPrice';
import IngredientList from './IngredientList';
import { FaPlus, FaCheck } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const MenuItem = ({ item }) => {
  const { addToShortlist, shortlist } = useContext(MenuContext);
  const [isHovered, setIsHovered] = useState(false);

  const isInShortlist = shortlist.some(i => i.id === item.id);
  const currentQty = shortlist.find(i => i.id === item.id)?.quantity || 0;

  return (
    <div
      className="group flex flex-col border-b border-amber-50 py-3 transition-all duration-200 hover:bg-amber-50/60 px-2 rounded-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >

      {/* 3-Column Layout */}
      <div className="grid grid-cols-12 gap-2 items-center">

        {/* Col 1: Item Name + Badges */}
        <div className="col-span-6 flex items-center gap-2 min-w-0">
          {item.veg && <span className="veg-dot flex-shrink-0" title="Vegetarian" />}

          <div className="flex flex-col min-w-0">
            <span className="font-semibold text-xs sm:text-sm text-stone-800 group-hover:text-amber-800 transition-colors truncate font-inter">
              {item.name}
            </span>

            {item.popular && (
              <div className="mt-0.5 self-start">
                <span className="inline-flex items-center gap-0.5 text-[9px] font-bold uppercase tracking-wider text-amber-700 bg-amber-100 px-1.5 py-0.5 rounded-full">
                  ⭐ Popular
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Col 2: Price */}
        <div className="col-span-2 text-right">
          <MenuPrice price={item.price} />
        </div>

        {/* Col 3: Main Ingredient + Quick Add */}
        <div className="col-span-4 text-right flex items-center justify-end gap-2 pl-1">
          <IngredientList ingredients={item.ingredients} />

          {/* Quick Add Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              addToShortlist(item);
            }}
            className={`no-print flex-shrink-0 p-1.5 rounded-lg border transition-all duration-300 cursor-pointer ${
              isInShortlist
                ? 'bg-amber-100 border-amber-300 text-amber-700'
                : 'bg-white border-amber-200 text-amber-700 hover:bg-amber-600 hover:text-white hover:border-amber-600 hover:scale-105'
            }`}
            title={isInShortlist ? `Added ${currentQty} to Tray` : 'Add to Tray'}
          >
            {isInShortlist ? (
              <span className="flex items-center text-[10px] font-bold gap-0.5">
                <FaCheck className="text-[9px]" />
                <span className="hidden sm:inline">{currentQty}</span>
              </span>
            ) : (
              <FaPlus className="text-[10px]" />
            )}
          </button>
        </div>

      </div>

      {/* Expandable description on hover */}
      <AnimatePresence>
        {isHovered && item.description && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden mt-1.5 text-left pl-5"
          >
            <p className="text-[11px] text-stone-500 font-inter leading-relaxed max-w-xl">
              {item.description}
            </p>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default MenuItem;

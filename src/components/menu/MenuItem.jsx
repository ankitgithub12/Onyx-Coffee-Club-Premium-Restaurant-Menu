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

  // Check if item is already in shortlist
  const isInShortlist = shortlist.some(i => i.id === item.id);
  const currentQty = shortlist.find(i => i.id === item.id)?.quantity || 0;

  return (
    <div 
      className="group flex flex-col border-b border-zinc-100 dark:border-zinc-800/40 py-3 transition-colors duration-250 hover:bg-primary/5 dark:hover:bg-zinc-850 px-2 rounded-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      
      {/* 3-Column Layout Matching Menu */}
      <div className="grid grid-cols-12 gap-2 items-center">
        
        {/* Col 1: Item Name + Badges */}
        <div className="col-span-6 flex items-center space-x-2">
          {item.veg && <Badge type="veg" className="flex-shrink-0" />}
          
          <div className="flex flex-col min-w-0">
            <span className="font-semibold text-xs sm:text-sm md:text-base text-text-dark dark:text-zinc-100 group-hover:text-primary dark:group-hover:text-border-gold transition-colors truncate font-inter">
              {item.name}
            </span>
            
            {/* Show item.popular as a small badge */}
            {item.popular && (
              <div className="mt-0.5 self-start">
                <Badge type="popular" className="text-[8px] px-1.5 py-0.2" />
              </div>
            )}
          </div>
        </div>

        {/* Col 2: Price */}
        <div className="col-span-2 text-right">
          <MenuPrice price={item.price} />
        </div>

        {/* Col 3: Main Ingredient */}
        <div className="col-span-4 text-right flex items-center justify-end space-x-2 pl-2">
          <IngredientList ingredients={item.ingredients} />
          
          {/* Quick Add Button (visible on hover, or always on touch screens) */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              addToShortlist(item);
            }}
            className={`no-print flex-shrink-0 p-1.5 rounded-lg border transition-all duration-300 cursor-pointer ${
              isInShortlist 
                ? 'bg-accent/10 border-accent/40 text-accent dark:bg-accent/25 dark:text-bg-cream' 
                : 'bg-white dark:bg-zinc-800 border-border-gold/30 text-primary hover:bg-primary hover:text-white hover:scale-105'
            }`}
            title={isInShortlist ? `Added ${currentQty} to Tray` : "Add to Tray"}
          >
            {isInShortlist ? (
              <span className="flex items-center text-[10px] font-bold space-x-0.5">
                <FaCheck className="text-[9px]" />
                <span className="hidden sm:inline">{currentQty}</span>
              </span>
            ) : (
              <FaPlus className="text-[10px]" />
            )}
          </button>
        </div>

      </div>

      {/* Expandable description on hover / active */}
      <AnimatePresence>
        {isHovered && item.description && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden mt-1.5 text-left pl-6"
          >
            <p className="text-[11px] md:text-xs text-text-muted dark:text-zinc-400 font-inter leading-relaxed max-w-xl">
              {item.description}
            </p>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default MenuItem;

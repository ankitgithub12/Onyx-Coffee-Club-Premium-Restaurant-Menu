import React, { useState } from 'react';
import Badge from '../common/Badge';
import MenuPrice from './MenuPrice';
import IngredientList from './IngredientList';
import { motion, AnimatePresence } from 'framer-motion';

const MenuItem = ({ item }) => {
  const [isHovered, setIsHovered] = useState(false);
  const hasDualPrice = item.priceRegular && item.priceLarge;

  return (
    <div
      className="group flex flex-col border-b border-amber-50/50 py-3 transition-all duration-300 hover:bg-amber-50/40 hover:shadow-[0_2px_12px_rgba(146,64,14,0.03)] px-2 rounded-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >

      {/* 3-Column Layout */}
      <div className="grid grid-cols-12 gap-2 items-center">

        {/* Col 1: Item Name + Badges */}
        <div className={`${hasDualPrice ? 'col-span-5' : 'col-span-6'} flex items-center gap-2 min-w-0`}>
          {item.veg && <span className="veg-dot flex-shrink-0" title="Vegetarian" />}

          <div className="flex flex-col min-w-0">
            <span className="font-semibold text-xs sm:text-sm text-stone-800 group-hover:text-amber-900 transition-colors truncate font-inter">
              {item.name}
            </span>

            {item.popular && (
              <div className="mt-0.5 self-start">
                <span className="inline-flex items-center gap-0.5 text-[8.5px] font-bold uppercase tracking-wider text-amber-700 bg-amber-50/90 border border-amber-200/50 px-1.5 py-0.5 rounded-full shadow-sm">
                  ⭐ Popular
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Col 2: Price */}
        <div className={`${hasDualPrice ? 'col-span-3' : 'col-span-2'} text-center`}>
          <MenuPrice
            price={item.price}
            priceRegular={item.priceRegular}
            priceLarge={item.priceLarge}
            className="font-bold text-stone-800 group-hover:text-amber-800 transition-colors"
          />
        </div>

        {/* Col 3: Main Ingredient */}
        <div className="col-span-4 text-right flex items-center justify-end gap-2 pl-1">
          <IngredientList ingredients={item.ingredients} />
        </div>

      </div>

      {/* Expandable description on hover */}
      <AnimatePresence>
        {isHovered && item.description && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, cubicBezier: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden mt-2 text-left pl-3.5 border-l-2 border-amber-300/40 ml-4"
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

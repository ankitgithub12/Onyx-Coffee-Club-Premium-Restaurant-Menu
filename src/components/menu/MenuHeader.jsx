import React from 'react';
import { getCategoryIcon } from '../../utils/helpers';
import Divider from '../common/Divider';

const MenuHeader = ({ name, iconName }) => {
  return (
    <div className="mb-3 select-none">
      
      {/* Title & Icon */}
      <div className="flex items-center space-x-3 mb-3">
        <div className="p-2 bg-primary/10 dark:bg-zinc-800 text-primary dark:text-border-gold rounded-xl">
          {getCategoryIcon(iconName, 'text-lg md:text-xl')}
        </div>
        <h3 className="text-xl md:text-2xl font-bold font-merriweather text-primary dark:text-border-gold uppercase tracking-wider">
          {name}
        </h3>
      </div>
      
      <Divider className="my-1.5" />
      
      {/* Column Titles */}
      <div className="grid grid-cols-12 gap-2 text-[10px] md:text-xs font-bold text-accent dark:text-border-gold/75 uppercase tracking-wider font-inter pb-1">
        <div className="col-span-6">Item</div>
        <div className="col-span-2 text-right">Price</div>
        <div className="col-span-4 text-right">Main Ingredient</div>
      </div>
      
      {/* Underline separator */}
      <div className="h-[1.5px] w-full bg-border-gold/30 dark:bg-zinc-800 mb-3"></div>
    </div>
  );
};

export default MenuHeader;

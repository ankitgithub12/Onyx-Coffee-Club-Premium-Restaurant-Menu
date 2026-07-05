import React from 'react';
import { getCategoryIcon } from '../../utils/helpers';

const MenuHeader = ({ name, iconName, hasSizes }) => {
  return (
    <div className="mb-3 select-none print-header">

      {/* Title & Icon */}
      <div className="flex items-center gap-3 mb-3">
        <div className="p-2 rounded-xl text-amber-700" style={{ background: 'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)' }}>
          {getCategoryIcon(iconName, 'text-lg md:text-xl')}
        </div>
        <h3 className="text-xl md:text-2xl font-bold font-merriweather uppercase tracking-wider"
          style={{ color: '#92400e' }}>
          {name}
        </h3>
      </div>

      {/* Gradient divider */}
      <div className="h-px w-full mb-3" style={{ background: 'linear-gradient(to right, #f59e0b, #fde68a, transparent)' }} />

      {/* Column Titles */}
      <div className="grid grid-cols-12 gap-2 text-[10px] md:text-xs font-bold uppercase tracking-wider font-inter pb-1 text-amber-700/80">
        <div className={hasSizes ? 'col-span-5' : 'col-span-6'}>Item</div>
        <div className={`${hasSizes ? 'col-span-3' : 'col-span-2'} text-center`}>
          {hasSizes ? (
            <div className="flex justify-center items-baseline gap-1">
              <span>Price</span>
              <span className="text-[8px] text-amber-500/70 font-semibold tracking-wide">(Regular / Large)</span>
            </div>
          ) : (
            'Price'
          )}
        </div>
        <div className="col-span-4 text-right">Main Ingredient</div>
      </div>

      {/* Underline separator */}
      <div className="h-px w-full bg-amber-100 mb-2" />
    </div>
  );
};

export default MenuHeader;

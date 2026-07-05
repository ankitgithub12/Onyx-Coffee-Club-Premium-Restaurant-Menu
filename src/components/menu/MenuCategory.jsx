import React from 'react';
import Card from '../common/Card';
import MenuHeader from './MenuHeader';
import MenuItem from './MenuItem';

const MenuCategory = ({ category }) => {
  // If the category contains no items (due to search or filters), do not render the card
  if (!category.items || category.items.length === 0) {
    return null;
  }

  return (
    <Card className="print-card" hoverEffect={true}>
      <MenuHeader name={category.name} iconName={category.iconName} />

      {/* Size header for dual-priced categories */}
      {category.hasSizes && (
        <div className="flex justify-end gap-6 px-2 pb-1 pt-0.5">
          <span className="text-[9px] font-bold uppercase tracking-widest text-amber-600/80 font-inter">Regular</span>
          <span className="text-[9px] font-bold uppercase tracking-widest text-amber-600/80 font-inter">Large</span>
        </div>
      )}

      <div className="flex flex-col space-y-1">
        {category.items.map((item) => (
          <MenuItem key={item.id} item={item} />
        ))}
      </div>
    </Card>
  );
};

export default MenuCategory;

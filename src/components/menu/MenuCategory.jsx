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
    <Card className="print-card" hoverEffect={true} glass={true}>
      <MenuHeader name={category.name} iconName={category.iconName} hasSizes={category.hasSizes} />

      <div className="flex flex-col space-y-1">
        {category.items.map((item) => (
          <MenuItem key={item.id} item={item} />
        ))}
      </div>
    </Card>
  );
};

export default MenuCategory;

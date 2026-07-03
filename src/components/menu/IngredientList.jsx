import React from 'react';

const IngredientList = ({ ingredients, className = '' }) => {
  return (
    <span 
      className={`text-[10px] sm:text-[11px] md:text-xs text-text-muted dark:text-zinc-400 font-inter italic ${className}`} 
      title="Main Ingredients"
    >
      {ingredients}
    </span>
  );
};

export default IngredientList;

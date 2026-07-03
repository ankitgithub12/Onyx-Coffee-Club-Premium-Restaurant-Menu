import React, { useContext } from 'react';
import { MenuContext } from '../../context/MenuContext';
import Card from '../common/Card';
import Badge from '../common/Badge';
import MenuPrice from './MenuPrice';
import IngredientList from './IngredientList';
import Button from '../common/Button';
import { FaPlus, FaCheck, FaCoffee, FaCocktail, FaPizzaSlice, FaHamburger } from 'react-icons/fa';

// Helper to render decorative illustrations based on category ID
const getDecorativeIcon = (categoryId, className = '') => {
  const baseClass = `text-5xl opacity-80 ${className}`;
  if (categoryId.includes('coffee')) {
    return <FaCoffee className={`${baseClass} text-primary`} />;
  }
  if (categoryId.includes('drink') || categoryId.includes('shot')) {
    return <FaCocktail className={`${baseClass} text-accent`} />;
  }
  if (categoryId.includes('pizza')) {
    return <FaPizzaSlice className={`${baseClass} text-amber-500`} />;
  }
  if (categoryId.includes('burger') || categoryId.includes('sandwich')) {
    return <FaHamburger className={`${baseClass} text-orange-500`} />;
  }
  return <FaCoffee className={`${baseClass} text-primary`} />;
};

const MenuCard = ({ item }) => {
  const { addToShortlist, shortlist } = useContext(MenuContext);
  const isInShortlist = shortlist.some(i => i.id === item.id);
  const currentQty = shortlist.find(i => i.id === item.id)?.quantity || 0;

  return (
    <Card 
      className="flex flex-col justify-between h-full bg-gradient-to-br from-white to-bg-cream/40 dark:from-zinc-900 dark:to-zinc-800/80 border border-border-gold/20 shadow-md relative overflow-hidden" 
      hoverEffect={true}
    >
      {/* Decorative top background circle */}
      <div className="absolute -top-12 -right-12 h-32 w-32 rounded-full bg-primary/5 dark:bg-zinc-850/40 z-0"></div>

      <div className="relative z-10 space-y-4">
        
        {/* Badges & Icon */}
        <div className="flex justify-between items-start">
          <div className="flex flex-wrap gap-1.5 max-w-[70%]">
            {item.veg && <Badge type="veg" />}
            {item.popular && <Badge type="popular" />}
            <Badge type="special" />
          </div>
          
          <div className="p-3 bg-primary/5 dark:bg-zinc-800/50 rounded-2xl">
            {getDecorativeIcon(item.categoryId || 'coffee')}
          </div>
        </div>

        {/* Text Details */}
        <div className="space-y-1.5">
          <h4 className="font-playfair text-lg md:text-xl font-bold text-text-dark dark:text-zinc-100 uppercase tracking-wide truncate">
            {item.name}
          </h4>
          <p className="text-xs text-text-muted dark:text-zinc-400 font-inter line-clamp-2 min-h-[32px]">
            {item.description || "Freshly prepared to order using the finest selected ingredients for absolute serenity."}
          </p>
        </div>

        {/* Ingredients */}
        <div className="pt-2 border-t border-border-gold/15 dark:border-zinc-800">
          <span className="text-[10px] font-bold uppercase text-accent tracking-wider block mb-0.5">Ingredients</span>
          <IngredientList ingredients={item.ingredients} className="text-xs" />
        </div>

      </div>

      {/* Pricing & tray actions */}
      <div className="relative z-10 pt-4 flex items-center justify-between border-t border-border-gold/15 dark:border-zinc-850 mt-4">
        <MenuPrice price={item.price} className="text-lg md:text-xl" />

        <Button
          variant={isInShortlist ? 'accent' : 'primary'}
          size="sm"
          onClick={() => addToShortlist(item)}
          className="flex items-center space-x-1.5 px-4 py-2 cursor-pointer shadow-sm"
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
        </Button>
      </div>

    </Card>
  );
};

export default MenuCard;

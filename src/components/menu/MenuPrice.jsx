import React from 'react';
import { formatPrice } from '../../utils/helpers';

const MenuPrice = ({ price, priceRegular, priceLarge, className = '' }) => {
  // Dual pricing (Regular / Large)
  if (priceRegular && priceLarge) {
    return (
      <span className={`font-inter font-bold text-primary dark:text-border-gold text-xs sm:text-sm md:text-base ${className}`}>
        <span>{formatPrice(priceRegular)}</span>
        <span className="text-stone-400 font-normal mx-1">/</span>
        <span>{formatPrice(priceLarge)}</span>
      </span>
    );
  }

  // Single pricing
  if (price) {
    return (
      <span className={`font-inter font-bold text-primary dark:text-border-gold text-xs sm:text-sm md:text-base ${className}`}>
        {formatPrice(price)}
      </span>
    );
  }

  return null;
};

export default MenuPrice;

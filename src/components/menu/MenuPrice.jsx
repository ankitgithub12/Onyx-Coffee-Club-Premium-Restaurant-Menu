import React from 'react';
import { formatPrice } from '../../utils/helpers';

const MenuPrice = ({ price, className = '' }) => {
  return (
    <span className={`font-inter font-bold text-primary dark:text-border-gold text-xs sm:text-sm md:text-base ${className}`}>
      {formatPrice(price)}
    </span>
  );
};

export default MenuPrice;

import React from 'react';
import { 
  FaCoffee, 
  FaPizzaSlice, 
  FaHamburger, 
  FaCocktail, 
  FaGlassMartini, 
  FaBorderAll, 
  FaCheckCircle 
} from 'react-icons/fa';
import { MdOutlineLocalCafe } from 'react-icons/md';
import { GiMilkCarton, GiFrenchFries, GiSandwich, GiSodaCan, GiNoodles } from 'react-icons/gi';

/**
 * Formats a numeric price to Indian Rupees (INR)
 * @param {number} amount - Price value
 * @returns {string} - Formatted currency string
 */
export const formatPrice = (amount) => {
  return `₹${amount}`;
};

/**
 * Returns the appropriate React Icon component based on standard names
 * @param {string} iconName - Standard icon identifier
 * @param {string} className - Tailwind CSS classes for the icon
 * @returns {React.Component} - The rendered icon component
 */
export const getCategoryIcon = (iconName, className = '') => {
  switch (iconName) {
    case 'FaCoffee':
      return <FaCoffee className={className} />;
    case 'MdOutlineLocalCafe':
      return <MdOutlineLocalCafe className={className} />;
    case 'GiMilkCarton':
      return <GiMilkCarton className={className} />;
    case 'GiFrenchFries':
      return <GiFrenchFries className={className} />;
    case 'GiSandwich':
      return <GiSandwich className={className} />;
    case 'BiDrink':
    case 'FaCocktail':
      return <FaCocktail className={className} />;
    case 'GiSodaCan':
      return <GiSodaCan className={className} />;
    case 'FaPizzaSlice':
      return <FaPizzaSlice className={className} />;
    case 'GiNoodles':
      return <GiNoodles className={className} />;
    case 'FaHamburger':
      return <FaHamburger className={className} />;
    case 'GiMartini':
    case 'FaGlassMartini':
      return <FaGlassMartini className={className} />;
    default:
      return <FaBorderAll className={className} />;
  }
};

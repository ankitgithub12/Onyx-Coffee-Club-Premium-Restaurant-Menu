import React from 'react';
import { 
  FaCoffee, 
  FaCocktail, 
  FaGlassMartini, 
  FaBorderAll, 
  FaCheckCircle,
  FaMugHot,
  FaSnowflake,
  FaPlusCircle,
  FaPizzaSlice,
  FaHamburger,
  FaGlassWhiskey
} from 'react-icons/fa';
import { MdOutlineLocalCafe } from 'react-icons/md';
import { GiMilkCarton, GiTeapot, GiIceCube, GiNoodles, GiBread, GiFrenchFries } from 'react-icons/gi';

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
    case 'FaMugHot':
      return <FaMugHot className={className} />;
    case 'MdOutlineLocalCafe':
      return <MdOutlineLocalCafe className={className} />;
    case 'GiTeapot':
      return <GiTeapot className={className} />;
    case 'GiIceCube':
      return <GiIceCube className={className} />;
    case 'GiMilkCarton':
      return <GiMilkCarton className={className} />;
    case 'FaSnowflake':
      return <FaSnowflake className={className} />;
    case 'FaCocktail':
    case 'BiDrink':
      return <FaCocktail className={className} />;
    case 'FaPlusCircle':
      return <FaPlusCircle className={className} />;
    case 'GiMartini':
    case 'FaGlassMartini':
      return <FaGlassMartini className={className} />;
    // Food icons
    case 'FaPizzaSlice':
      return <FaPizzaSlice className={className} />;
    case 'GiNoodles':
      return <GiNoodles className={className} />;
    case 'FaHamburger':
      return <FaHamburger className={className} />;
    case 'GiBread':
      return <GiBread className={className} />;
    case 'GiFrenchFries':
      return <GiFrenchFries className={className} />;
    case 'FaGlassWhiskey':
      return <FaGlassWhiskey className={className} />;
    default:
      return <FaBorderAll className={className} />;
  }
};

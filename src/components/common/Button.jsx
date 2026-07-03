import React from 'react';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  onClick, 
  ...props 
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer';
  
  const variants = {
    primary: 'bg-primary hover:bg-accent text-bg-cream shadow-md hover:shadow-lg focus:ring-primary',
    secondary: 'bg-zinc-200 dark:bg-zinc-800 hover:bg-zinc-300 dark:hover:bg-zinc-700 text-text-dark dark:text-zinc-200 focus:ring-zinc-400',
    outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-bg-cream focus:ring-primary dark:border-border-gold dark:text-border-gold dark:hover:bg-border-gold dark:hover:text-text-dark',
    accent: 'bg-accent hover:bg-primary text-bg-cream shadow-md hover:shadow-lg focus:ring-accent',
    text: 'text-primary dark:text-border-gold hover:text-accent dark:hover:text-accent font-semibold p-0 border-0 focus:ring-0 focus:ring-offset-0'
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-xs',
    md: 'px-5 py-2.5 text-sm',
    lg: 'px-7 py-3.5 text-base'
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;

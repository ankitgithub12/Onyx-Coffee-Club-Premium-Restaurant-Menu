import React from 'react';

const Badge = ({ type = 'popular', className = '', ...props }) => {
  const styles = {
    popular: 'bg-accent/10 dark:bg-accent/20 text-accent text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border border-accent/20',
    special: 'bg-primary text-bg-cream text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border border-primary/20 animate-pulse-subtle',
    veg: 'inline-flex items-center justify-center border border-green-600 dark:border-green-500 p-0.5 rounded w-4 h-4 bg-green-50 dark:bg-green-950/20',
    nonveg: 'inline-flex items-center justify-center border border-red-600 dark:border-red-500 p-0.5 rounded w-4 h-4 bg-red-50 dark:bg-red-950/20'
  };

  if (type === 'veg') {
    return (
      <span className={`${styles.veg} ${className}`} title="Vegetarian" {...props}>
        <span className="w-1.5 h-1.5 rounded-full bg-green-600 dark:bg-green-500 animate-pulse" />
      </span>
    );
  }

  if (type === 'nonveg') {
    return (
      <span className={`${styles.nonveg} ${className}`} title="Non-Vegetarian" {...props}>
        <span className="w-1.5 h-1.5 rounded-full bg-red-600 dark:bg-red-500" />
      </span>
    );
  }

  const label = type === 'popular' ? 'Popular' : "Special";

  return (
    <span className={`${styles[type]} ${className}`} {...props}>
      {label}
    </span>
  );
};

export default Badge;

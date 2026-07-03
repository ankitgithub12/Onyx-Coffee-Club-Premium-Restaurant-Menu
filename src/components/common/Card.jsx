import React from 'react';

const Card = ({ children, className = '', hoverEffect = true, ...props }) => {
  return (
    <div
      className={`bg-white dark:bg-zinc-900/90 rounded-2xl border border-border-gold/20 dark:border-zinc-800/80 shadow-md p-6 sm:p-8
      ${hoverEffect ? 'hover:shadow-xl hover:-translate-y-1 transition-all duration-300' : ''} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;

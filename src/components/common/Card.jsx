import React from 'react';

const Card = ({ children, className = '', hoverEffect = true, glass = false, ...props }) => {
  const baseClass = glass ? 'glass-card' : 'card-warm';

  return (
    <div
      className={`rounded-2xl border border-amber-100/30 p-5 sm:p-7 print-card ${baseClass}
      ${hoverEffect ? 'hover:-translate-y-1 transition-all duration-300' : ''} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;

import React from 'react';

const Card = ({ children, className = '', hoverEffect = true, ...props }) => {
  return (
    <div
      className={`bg-white rounded-2xl border border-amber-100 shadow-sm p-5 sm:p-7 print-card
      ${hoverEffect ? 'hover:shadow-lg hover:-translate-y-1 transition-all duration-300' : ''} ${className}`}
      style={{ boxShadow: '0 2px 16px rgba(146, 64, 14, 0.07)' }}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;

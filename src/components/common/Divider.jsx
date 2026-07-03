import React from 'react';

const Divider = ({ className = '', dashed = false }) => {
  return (
    <div 
      className={`w-full my-4 border-t ${dashed ? 'border-dashed' : 'border-solid'} border-border-gold/25 dark:border-zinc-850 ${className}`} 
    />
  );
};

export default Divider;

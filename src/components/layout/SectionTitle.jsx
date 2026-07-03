import React from 'react';

const SectionTitle = ({ title, subtitle, className = '' }) => {
  return (
    <div className={`text-center mb-6 ${className}`}>
      <h2
        className="text-3xl md:text-4xl font-bold tracking-wide font-playfair uppercase"
        style={{ color: '#92400e' }}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="mt-2 text-sm md:text-base font-merriweather italic" style={{ color: '#b45309' }}>
          {subtitle}
        </p>
      )}
      <div className="flex items-center justify-center mt-4">
        <div className="h-px w-14 bg-gradient-to-r from-transparent to-amber-400" />
        <div className="mx-3 text-amber-500 text-sm">◆</div>
        <div className="h-px w-14 bg-gradient-to-l from-transparent to-amber-400" />
      </div>
    </div>
  );
};

export default SectionTitle;

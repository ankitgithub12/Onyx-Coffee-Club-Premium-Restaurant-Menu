import React from 'react';

const SectionTitle = ({ title, subtitle, className = '' }) => {
  return (
    <div className={`text-center mb-8 ${className}`}>
      <h2 className="text-3xl md:text-4xl font-extrabold tracking-wide font-playfair uppercase bg-gradient-to-r from-amber-900 via-amber-800 to-amber-950 bg-clip-text text-transparent">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-2.5 text-xs md:text-sm font-inter text-stone-500 max-w-xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
      <div className="flex items-center justify-center mt-4">
        <div className="h-[1px] w-16 bg-gradient-to-r from-transparent to-amber-400/80" />
        <div className="mx-3.5 flex items-center justify-center">
          <svg className="w-3.5 h-3.5 text-amber-500 animate-pulse-subtle" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="5">
            <path d="M50 5 L95 50 L50 95 L5 50 Z" fill="currentColor" fillOpacity="0.15" />
            <circle cx="50" cy="50" r="14" fill="currentColor" />
          </svg>
        </div>
        <div className="h-[1px] w-16 bg-gradient-to-l from-transparent to-amber-400/80" />
      </div>
    </div>
  );
};

export default SectionTitle;

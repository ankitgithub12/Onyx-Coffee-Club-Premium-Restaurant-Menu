import React from 'react';

const SectionTitle = ({ title, subtitle, className = '' }) => {
  return (
    <div className={`text-center mb-8 ${className}`}>
      <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-wide font-playfair uppercase">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-2 text-sm md:text-base text-accent font-merriweather italic">
          {subtitle}
        </p>
      )}
      <div className="flex items-center justify-center mt-3">
        <div className="h-[1px] w-12 bg-border-gold"></div>
        <div className="mx-3 text-border-gold text-xs">◆</div>
        <div className="h-[1px] w-12 bg-border-gold"></div>
      </div>
    </div>
  );
};

export default SectionTitle;

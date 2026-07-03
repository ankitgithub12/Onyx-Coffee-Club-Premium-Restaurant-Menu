import React from 'react';
import logoImg from '../../assets/Onyx logo.jpeg';

const RestaurantLogo = ({ size = 'md', className = '' }) => {
  // Size variations
  const sizes = {
    sm: {
      crest: 'h-10 w-10',
      brand: 'text-3xl tracking-widest',
      sub: 'text-[9px] tracking-[0.2em]',
      tagline: 'text-[10px] tracking-[0.3em] mt-1',
      badge: 'h-20 w-20',
      cupIcon: 'text-lg',
    },
    md: {
      crest: 'h-16 w-16',
      brand: 'text-5xl tracking-[0.1em]',
      sub: 'text-xs tracking-[0.25em]',
      tagline: 'text-xs tracking-[0.35em] mt-2',
      badge: 'h-28 w-28',
      cupIcon: 'text-2xl',
    },
    lg: {
      crest: 'h-24 w-24',
      brand: 'text-6xl md:text-7xl tracking-[0.15em]',
      sub: 'text-sm md:text-base tracking-[0.3em]',
      tagline: 'text-sm tracking-[0.4em] mt-3',
      badge: 'h-36 w-36',
      cupIcon: 'text-3xl',
    }
  };

  const selectedSize = sizes[size] || sizes.md;

  return (
    <div className={`flex flex-col items-center justify-center text-center ${className}`}>
      
      {/* Top Diamond Crest */}
      <div className={`relative flex items-center justify-center border border-border-gold rounded-full p-2 mb-4 animate-pulse-subtle`}>
        <svg className={`${selectedSize.crest} text-primary`} viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
          {/* Geometric Diamond */}
          <path d="M50 5 L90 50 L50 95 L10 50 Z" />
          <path d="M50 5 L50 95" />
          <path d="M10 50 L90 50" />
          <path d="M30 27.5 L70 27.5 L70 72.5 L30 72.5 Z" />
          <circle cx="50" cy="50" r="8" fill="currentColor" />
        </svg>
      </div>

      {/* Main Typography */}
      <h1 className={`font-playfair font-black text-primary ${selectedSize.brand} select-none uppercase`}>
        ONYX
      </h1>
      <h2 className={`font-playfair font-bold text-accent ${selectedSize.sub} uppercase tracking-[0.3em] -mt-1`}>
        Coffee Club
      </h2>

      {/* Tagline */}
      <p className={`font-merriweather italic text-primary/80 dark:text-border-gold/80 ${selectedSize.tagline} uppercase`}>
        Coffee With Serenity
      </p>

      {/* Center Circular Stamp Badge */}
      <div className="mt-6 mb-4 relative select-none">
        <div className={`relative ${selectedSize.badge} rounded-full border-2 border-dashed border-primary dark:border-border-gold flex flex-col items-center justify-center bg-white dark:bg-zinc-900 shadow-md p-1 group hover:border-solid hover:scale-105 transition-all duration-500`}>
          
          {/* Rotated text along paths can be simplified with SVGs */}
          <svg className="absolute inset-0 w-full h-full animate-spin-slow" viewBox="0 0 120 120">
            <path id="badgeTextPath" d="M 60,60 m -45,0 a 45,45 0 1,1 90,0 a 45,45 0 1,1 -90,0" fill="none" />
            <text className="font-playfair text-[9.5px] font-bold fill-primary dark:fill-border-gold tracking-[0.16em]">
              <textPath href="#badgeTextPath" startOffset="0%">
                ★ ONYX COFFEE CLUB ★ EST. 2026 ★ ONYX COFFEE CLUB
              </textPath>
            </text>
          </svg>

          {/* Custom logo in stamp center */}
          <div className="absolute flex flex-col items-center justify-center p-0.5 rounded-full overflow-hidden h-[70%] w-[70%] bg-white dark:bg-zinc-800 border border-primary/20 dark:border-border-gold/20 shadow-inner">
            <img src={logoImg} alt="ONYX Logo" className="h-full w-full rounded-full object-cover" />
          </div>

        </div>
      </div>

    </div>
  );
};


export default RestaurantLogo;

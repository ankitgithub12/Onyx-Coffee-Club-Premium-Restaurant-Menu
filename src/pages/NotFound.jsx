import React from 'react';
import { FaCoffee } from 'react-icons/fa';
import Button from '../components/common/Button';
import SlideUp from '../components/animations/SlideUp';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-6 bg-[#180f0a] text-bg-cream select-none">
      
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 h-[350px] w-[350px] bg-primary/10 rounded-full blur-[100px] pointer-events-none"></div>

      <SlideUp className="space-y-6 relative z-10 max-w-md">
        
        {/* Animated icon */}
        <div className="inline-flex p-5 bg-border-gold/10 rounded-full text-border-gold animate-float">
          <FaCoffee className="text-5xl" />
        </div>

        <div className="space-y-2">
          <h1 className="font-playfair font-extrabold text-7xl text-border-gold tracking-wider">
            404
          </h1>
          <h2 className="font-playfair text-xl font-bold uppercase tracking-widest text-bg-cream">
            Lost In Serenity?
          </h2>
        </div>

        <p className="font-inter text-xs text-zinc-400 max-w-xs mx-auto leading-relaxed">
          The page you are looking for does not exist or has been brewed away. Let's get you back to comfort.
        </p>

        <div className="pt-4">
          <Button
            variant="primary"
            size="md"
            onClick={() => window.location.href = '/'}
            className="uppercase tracking-wider text-xs font-bold w-48 shadow-lg hover:shadow-xl"
          >
            Back to Sanctuary
          </Button>
        </div>

      </SlideUp>

    </div>
  );
};

export default NotFound;

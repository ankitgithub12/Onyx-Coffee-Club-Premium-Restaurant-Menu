import React from 'react';

const LoadingSkeleton = ({ count = 3 }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
      {Array.from({ length: count }).map((_, i) => (
        <div 
          key={i} 
          className="bg-white dark:bg-zinc-900/80 rounded-2xl border border-border-gold/20 shadow-md p-6 sm:p-8 animate-pulse space-y-6"
        >
          {/* Header Skeleton */}
          <div className="flex justify-between items-center">
            <div className="h-6 w-36 bg-zinc-200 dark:bg-zinc-800 rounded-md"></div>
            <div className="h-6 w-6 bg-zinc-200 dark:bg-zinc-800 rounded-full"></div>
          </div>
          <div className="h-[1px] w-full bg-zinc-200 dark:bg-zinc-800"></div>
          
          {/* Items Skeleton */}
          <div className="space-y-6">
            {Array.from({ length: 3 }).map((_, j) => (
              <div key={j} className="flex justify-between items-start space-x-4">
                <div className="space-y-2 flex-1">
                  <div className="flex items-center space-x-2">
                    <div className="h-3 w-3 bg-zinc-250 dark:bg-zinc-800 rounded"></div>
                    <div className="h-4 w-32 bg-zinc-200 dark:bg-zinc-800 rounded-md"></div>
                  </div>
                  <div className="h-3 w-48 bg-zinc-200 dark:bg-zinc-800 rounded-md"></div>
                </div>
                <div className="h-4 w-10 bg-zinc-200 dark:bg-zinc-800 rounded-md"></div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default LoadingSkeleton;

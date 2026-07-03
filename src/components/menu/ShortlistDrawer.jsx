import React, { useContext } from 'react';
import { MenuContext } from '../../context/MenuContext';
import { getCategoryIcon, formatPrice } from '../../utils/helpers';
import { FaTimes, FaPlus, FaMinus, FaTrash, FaCoffee, FaPrint, FaClipboardList } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const ShortlistDrawer = () => {
  const {
    shortlist,
    updateQuantity,
    removeFromShortlist,
    clearShortlist,
    totalAmount,
    totalItems,
    isShortlistOpen,
    setIsShortlistOpen
  } = useContext(MenuContext);

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      {isShortlistOpen && (
        <>
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsShortlistOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 no-print"
          />

          {/* Drawer Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full sm:w-[450px] bg-bg-cream dark:bg-zinc-900 border-l border-border-gold/20 shadow-2xl z-50 flex flex-col font-inter no-print"
          >
            {/* Header */}
            <div className="p-6 border-b border-border-gold/20 flex justify-between items-center bg-[#1e140f] text-bg-cream rounded-tl-2xl">
              <div className="flex items-center space-x-2.5">
                <FaClipboardList className="text-xl text-border-gold" />
                <div>
                  <h3 className="font-playfair text-lg font-bold uppercase tracking-wider text-border-gold">
                    My Order Tray
                  </h3>
                  <p className="text-[10px] text-zinc-400 font-inter">
                    {totalItems} {totalItems === 1 ? 'item' : 'items'} selected
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsShortlistOpen(false)}
                className="p-2 rounded-full hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors cursor-pointer"
              >
                <FaTimes className="text-lg" />
              </button>
            </div>

            {/* List Content */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {shortlist.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-3 opacity-60">
                  <div className="p-4 bg-primary/5 rounded-full text-accent animate-float">
                    <FaCoffee className="text-4xl" />
                  </div>
                  <h4 className="font-playfair text-base font-bold uppercase tracking-wide text-text-dark dark:text-zinc-300">
                    Tray is empty
                  </h4>
                  <p className="text-xs text-text-muted dark:text-zinc-400 max-w-xs leading-relaxed">
                    Browse the menu and click the "+" button next to items to build your selection.
                  </p>
                </div>
              ) : (
                shortlist.map((item) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="flex justify-between items-center bg-white dark:bg-zinc-800 border border-border-gold/15 dark:border-zinc-800/80 p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="flex-1 min-w-0 pr-4">
                      <h4 className="text-sm font-semibold text-text-dark dark:text-zinc-100 truncate">
                        {item.name}
                      </h4>
                      <p className="text-xs text-accent font-bold mt-0.5">
                        {formatPrice(item.price)}
                      </p>
                      <span className="text-[10px] text-text-muted dark:text-zinc-450 truncate block mt-0.5">
                        {item.categoryName}
                      </span>
                    </div>

                    {/* Quantity Selector */}
                    <div className="flex items-center space-x-2">
                      <div className="flex items-center border border-border-gold/30 dark:border-zinc-700 bg-bg-cream/40 dark:bg-zinc-850 rounded-lg overflow-hidden">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="px-2 py-1.5 hover:bg-zinc-200 dark:hover:bg-zinc-850 text-text-dark dark:text-zinc-300 transition-colors cursor-pointer"
                          aria-label="Decrease quantity"
                        >
                          <FaMinus className="text-[10px]" />
                        </button>
                        <span className="px-2 text-xs font-bold text-text-dark dark:text-zinc-100 select-none min-w-[20px] text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="px-2 py-1.5 hover:bg-zinc-200 dark:hover:bg-zinc-850 text-text-dark dark:text-zinc-300 transition-colors cursor-pointer"
                          aria-label="Increase quantity"
                        >
                          <FaPlus className="text-[10px]" />
                        </button>
                      </div>

                      <button
                        onClick={() => removeFromShortlist(item.id)}
                        className="p-2 text-zinc-400 hover:text-red-500 dark:hover:text-red-400 transition-colors cursor-pointer"
                        title="Remove item"
                      >
                        <FaTrash className="text-xs" />
                      </button>
                    </div>
                  </motion.div>
                ))
              )}
            </div>

            {/* Sticky Bill Summary Footer */}
            {shortlist.length > 0 && (
              <div className="p-6 border-t border-border-gold/25 bg-white dark:bg-zinc-950/80 rounded-t-2xl space-y-4">

                {/* Total Calc */}
                <div className="space-y-1.5 font-inter">
                  <div className="flex justify-between text-xs text-text-muted dark:text-zinc-400">
                    <span>Subtotal ({totalItems} items)</span>
                    <span>{formatPrice(totalAmount)}</span>
                  </div>
                  <div className="flex justify-between text-xs text-text-muted dark:text-zinc-400">
                    <span>Estimated Taxes (5% GST)</span>
                    <span>{formatPrice(Math.round(totalAmount * 0.05))}</span>
                  </div>
                  <div className="flex justify-between text-base font-bold text-text-dark dark:text-zinc-150 pt-2 border-t border-zinc-100 dark:border-zinc-800">
                    <span>Estimated Total</span>
                    <span className="text-primary dark:text-border-gold font-bold">
                      {formatPrice(totalAmount + Math.round(totalAmount * 0.05))}
                    </span>
                  </div>
                </div>

                {/* CTA buttons */}
                <div className="grid grid-cols-2 gap-3 pt-2">

                  {/* Clear Tray */}
                  <button
                    onClick={clearShortlist}
                    className="py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-850 text-xs font-semibold text-text-muted hover:bg-zinc-100 dark:hover:bg-zinc-850 dark:text-zinc-350 hover:text-red-500 transition-all cursor-pointer"
                  >
                    Clear Tray
                  </button>

                  {/* Print / Save */}
                  <button
                    onClick={handlePrint}
                    className="flex items-center justify-center space-x-1.5 py-2.5 rounded-xl bg-primary hover:bg-accent text-bg-cream text-xs font-bold shadow-md hover:shadow-lg transition-all cursor-pointer"
                  >
                    <FaPrint />
                    <span>Print Order</span>
                  </button>

                </div>

                <p className="text-[9px] text-center text-zinc-400 dark:text-zinc-500 leading-normal">
                  Show this list to your server when ordering at the table.
                </p>

              </div>
            )}
          </motion.div>

          {/* Print Slip Layout (Hidden on screen, shown when printing) */}
          <div className="hidden print:block absolute inset-0 bg-white text-black p-8 font-serif print-container">
            <div className="text-center border-b-2 border-black pb-4 mb-6">
              <h1 className="text-3xl font-extrabold tracking-widest uppercase">ONYX</h1>
              <h2 className="text-sm font-bold tracking-[0.2em] uppercase">COFFEE CLUB</h2>
              <p className="text-xs italic mt-1">Coffee With Serenity</p>
              <div className="text-[10px] mt-2 text-zinc-500">Estimated Order Slip - Est. 2026</div>
            </div>

            <div className="space-y-4 mb-6">
              <div className="grid grid-cols-12 font-bold text-xs uppercase pb-2 border-b">
                <div className="col-span-8">Item Name</div>
                <div className="col-span-2 text-right">Qty</div>
                <div className="col-span-2 text-right">Price</div>
              </div>

              {shortlist.map((item) => (
                <div key={item.id} className="grid grid-cols-12 text-sm">
                  <div className="col-span-8 font-bold">{item.name}</div>
                  <div className="col-span-2 text-right">{item.quantity}</div>
                  <div className="col-span-2 text-right">{formatPrice(item.price * item.quantity)}</div>
                </div>
              ))}
            </div>

            <div className="border-t pt-4 space-y-1.5 text-right font-sans text-sm">
              <div>Subtotal: <span className="font-bold">{formatPrice(totalAmount)}</span></div>
              <div>GST (5%): <span className="font-bold">{formatPrice(Math.round(totalAmount * 0.05))}</span></div>
              <div className="text-lg font-bold border-t pt-1 mt-2">
                Estimated Total: <span>{formatPrice(totalAmount + Math.round(totalAmount * 0.05))}</span>
              </div>
            </div>

            <div className="text-center text-xs mt-12 border-t pt-4 italic">
              Thank you for choosing ONYX Coffee Club. We serve coffee with serenity.
            </div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ShortlistDrawer;

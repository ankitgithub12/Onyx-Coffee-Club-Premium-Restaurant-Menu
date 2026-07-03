import React, { useContext, useState, useEffect } from 'react';
import { MenuContext } from '../../context/MenuContext';
import { FaSearch, FaClipboardList, FaBars, FaTimes, FaCoffee } from 'react-icons/fa';
import logoImg from '../../assets/Onyx logo.jpeg';

const Navbar = () => {
  const {
    totalItems,
    setIsShortlistOpen,
  } = useContext(MenuContext);

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const triggerSearchFocus = () => {
    handleNavClick('menu-section');
    setTimeout(() => {
      const searchInput = document.getElementById('menu-search-bar');
      if (searchInput) searchInput.focus();
    }, 400);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 no-print ${
        isScrolled
          ? 'py-3 border-b border-amber-200/60'
          : 'bg-transparent py-5'
      }`}
      style={isScrolled ? { background: 'rgba(255, 251, 244, 0.92)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)', boxShadow: '0 2px 20px rgba(146, 64, 14, 0.1)' } : {}}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">

          {/* Logo / Brand */}
          <div
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2.5 cursor-pointer group"
          >
            <div className="h-10 w-10 rounded-xl overflow-hidden border-2 border-amber-300/50 flex items-center justify-center shadow-sm group-hover:border-amber-400 group-hover:scale-105 transition-all duration-300 bg-white">
              <img src={logoImg} alt="ONYX Logo" className="h-full w-full object-cover" />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-playfair font-extrabold text-xl tracking-wider text-amber-800 uppercase group-hover:text-amber-600 transition-colors">
                ONYX
              </span>
              <span className="text-[10px] uppercase tracking-[0.25em] text-amber-600/80 font-semibold">
                Coffee Club
              </span>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8 font-inter">
            {[
              { label: 'Home', action: () => window.scrollTo({ top: 0, behavior: 'smooth' }) },
              { label: 'Menu', action: () => handleNavClick('menu-section') },
              { label: 'About', action: () => handleNavClick('about-section') },
              { label: 'Contact', action: () => handleNavClick('contact-section') },
            ].map(({ label, action }) => (
              <button
                key={label}
                onClick={action}
                className="text-sm font-semibold text-stone-700 hover:text-amber-700 transition-colors duration-200 cursor-pointer relative group"
              >
                {label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-amber-500 rounded-full group-hover:w-full transition-all duration-300" />
              </button>
            ))}
          </div>

          {/* Desktop Toolbar */}
          <div className="hidden md:flex items-center gap-3">

            {/* Search */}
            <button
              onClick={triggerSearchFocus}
              className="p-2.5 rounded-full hover:bg-amber-100 text-stone-600 hover:text-amber-700 transition-all duration-200 cursor-pointer"
              title="Search Menu"
            >
              <FaSearch className="text-base" />
            </button>

            {/* Order Tray */}
            <button
              onClick={() => setIsShortlistOpen(true)}
              className="relative flex items-center gap-2 px-4 py-2.5 rounded-full bg-amber-600 hover:bg-amber-700 text-white font-semibold text-sm transition-all duration-300 hover:scale-105 shadow-md cursor-pointer"
              title="Order Tray"
            >
              <FaClipboardList className="text-sm" />
              <span>Order Tray</span>
              {totalItems > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-red-500 text-white text-[9px] font-bold rounded-full w-5 h-5 flex items-center justify-center shadow-sm animate-pulse">
                  {totalItems}
                </span>
              )}
            </button>
          </div>

          {/* Mobile Toolbar */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={() => setIsShortlistOpen(true)}
              className="relative p-2.5 rounded-full bg-amber-600 text-white cursor-pointer"
            >
              <FaClipboardList className="text-sm" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[8px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-full hover:bg-amber-100 text-stone-700 cursor-pointer"
            >
              {mobileMenuOpen ? <FaTimes className="text-lg" /> : <FaBars className="text-lg" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-amber-100 px-4 pt-3 pb-6 space-y-1 flex flex-col font-inter"
          style={{ background: 'rgba(255, 251, 244, 0.97)', backdropFilter: 'blur(12px)' }}
        >
          {[
            { label: 'Home', action: () => { setMobileMenuOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); } },
            { label: 'Menu', action: () => handleNavClick('menu-section') },
            { label: 'About', action: () => handleNavClick('about-section') },
            { label: 'Contact', action: () => handleNavClick('contact-section') },
          ].map(({ label, action }) => (
            <button
              key={label}
              onClick={action}
              className="text-left py-3 px-2 border-b border-amber-100/70 text-sm font-semibold text-stone-700 hover:text-amber-700 transition-colors"
            >
              {label}
            </button>
          ))}

          <button
            onClick={() => { setMobileMenuOpen(false); triggerSearchFocus(); }}
            className="flex items-center gap-2 text-left py-3 px-2 text-sm font-semibold text-amber-700"
          >
            <FaSearch />
            <span>Search Menu</span>
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

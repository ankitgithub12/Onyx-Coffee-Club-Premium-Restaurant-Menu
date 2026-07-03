import React, { useContext, useState, useEffect } from 'react';
import { MenuContext } from '../../context/MenuContext';
import { FaSearch, FaSun, FaMoon, FaClipboardList, FaCoffee, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const { 
    darkMode, 
    toggleDarkMode, 
    totalItems, 
    setIsShortlistOpen, 
    setSearchQuery 
  } = useContext(MenuContext);

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Monitor scrolling to add background blur/shadow
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // height of sticky navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const triggerSearchFocus = () => {
    handleNavClick('menu-section');
    setTimeout(() => {
      const searchInput = document.getElementById('menu-search-bar');
      if (searchInput) {
        searchInput.focus();
      }
    }, 400);
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 no-print ${
      isScrolled 
        ? 'bg-bg-cream/90 dark:bg-zinc-900/90 backdrop-blur-md shadow-md py-3 border-b border-border-gold/20' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / Brand */}
          <div 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
            className="flex items-center space-x-2 cursor-pointer group"
          >
            <div className="p-2 bg-primary rounded-xl text-bg-cream group-hover:bg-accent transition-colors">
              <FaCoffee className="text-xl" />
            </div>
            <div className="flex flex-col">
              <span className="font-playfair font-extrabold text-lg md:text-xl tracking-wider text-primary dark:text-border-gold uppercase">
                ONYX
              </span>
              <span className="text-[10px] uppercase tracking-[0.25em] text-accent font-semibold -mt-1">
                Coffee Club
              </span>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-8 font-inter">
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
              className="text-sm font-medium hover:text-accent dark:text-zinc-300 dark:hover:text-border-gold transition-colors cursor-pointer"
            >
              Home
            </button>
            <button 
              onClick={() => handleNavClick('menu-section')} 
              className="text-sm font-medium hover:text-accent dark:text-zinc-300 dark:hover:text-border-gold transition-colors cursor-pointer"
            >
              Menu
            </button>
            <button 
              onClick={() => handleNavClick('about-section')} 
              className="text-sm font-medium hover:text-accent dark:text-zinc-300 dark:hover:text-border-gold transition-colors cursor-pointer"
            >
              About
            </button>
            <button 
              onClick={() => handleNavClick('contact-section')} 
              className="text-sm font-medium hover:text-accent dark:text-zinc-300 dark:hover:text-border-gold transition-colors cursor-pointer"
            >
              Contact
            </button>
          </div>

          {/* Desktop Toolbar */}
          <div className="hidden md:flex items-center space-x-4">
            
            {/* Search Toggle */}
            <button 
              onClick={triggerSearchFocus}
              className="p-2.5 rounded-full hover:bg-zinc-200/50 dark:hover:bg-zinc-800 text-text-dark dark:text-zinc-300 transition-colors cursor-pointer"
              title="Search Menu"
            >
              <FaSearch className="text-base" />
            </button>

            {/* Dark Mode Switch */}
            <button 
              onClick={toggleDarkMode}
              className="p-2.5 rounded-full hover:bg-zinc-200/50 dark:hover:bg-zinc-800 text-text-dark dark:text-zinc-300 transition-colors cursor-pointer"
              title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              {darkMode ? <FaSun className="text-base text-amber-500" /> : <FaMoon className="text-base" />}
            </button>

            {/* Shortlist Tray Toggle */}
            <button 
              onClick={() => setIsShortlistOpen(true)}
              className="relative p-2.5 rounded-full bg-primary hover:bg-accent text-bg-cream transition-colors cursor-pointer"
              title="Order Tray / Estimator"
            >
              <FaClipboardList className="text-base" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-accent border-2 border-bg-cream text-bg-cream text-[9px] font-bold rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
                  {totalItems}
                </span>
              )}
            </button>
          </div>

          {/* Mobile Toolbar (Menu Toggle and Shortlist) */}
          <div className="md:hidden flex items-center space-x-3">
            {/* Shortlist Tray Toggle */}
            <button 
              onClick={() => setIsShortlistOpen(true)}
              className="relative p-2 rounded-full bg-primary text-bg-cream cursor-pointer"
            >
              <FaClipboardList className="text-sm" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-accent border border-bg-cream text-bg-cream text-[8px] font-bold rounded-full w-4.5 h-4.5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>

            {/* Dark Mode Switch */}
            <button 
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-zinc-200/50 dark:hover:bg-zinc-800 text-text-dark dark:text-zinc-300 cursor-pointer"
            >
              {darkMode ? <FaSun className="text-sm text-amber-500" /> : <FaMoon className="text-sm" />}
            </button>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-full hover:bg-zinc-200/50 dark:hover:bg-zinc-800 text-text-dark dark:text-zinc-300 cursor-pointer"
            >
              {mobileMenuOpen ? <FaTimes className="text-lg" /> : <FaBars className="text-lg" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-bg-cream dark:bg-zinc-900 border-b border-border-gold/20 shadow-lg px-4 pt-2 pb-6 space-y-3 flex flex-col font-inter">
          <button 
            onClick={() => { setMobileMenuOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }} 
            className="text-left py-2 border-b border-zinc-200/40 dark:border-zinc-800 text-sm font-semibold hover:text-accent dark:text-zinc-300 dark:hover:text-border-gold transition-colors"
          >
            Home
          </button>
          <button 
            onClick={() => handleNavClick('menu-section')} 
            className="text-left py-2 border-b border-zinc-200/40 dark:border-zinc-800 text-sm font-semibold hover:text-accent dark:text-zinc-300 dark:hover:text-border-gold transition-colors"
          >
            Menu
          </button>
          <button 
            onClick={() => handleNavClick('about-section')} 
            className="text-left py-2 border-b border-zinc-200/40 dark:border-zinc-800 text-sm font-semibold hover:text-accent dark:text-zinc-300 dark:hover:text-border-gold transition-colors"
          >
            About
          </button>
          <button 
            onClick={() => handleNavClick('contact-section')} 
            className="text-left py-2 border-b border-zinc-200/40 dark:border-zinc-800 text-sm font-semibold hover:text-accent dark:text-zinc-300 dark:hover:text-border-gold transition-colors"
          >
            Contact
          </button>
          
          <button 
            onClick={() => { setMobileMenuOpen(false); triggerSearchFocus(); }}
            className="flex items-center space-x-2 text-left py-2 text-sm font-semibold text-primary dark:text-border-gold hover:text-accent transition-colors"
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

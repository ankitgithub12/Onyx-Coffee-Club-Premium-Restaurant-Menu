import React, { useState, useEffect } from 'react';
import { FaSearch, FaBars, FaTimes, FaCoffee } from 'react-icons/fa';
import logoImg from '../../assets/Onyx logo.jpeg';

const Navbar = () => {

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
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 no-print ${isScrolled
          ? 'py-3'
          : 'bg-transparent py-5'
        }`}
      style={isScrolled ? { background: 'rgba(255, 251, 244, 0.75)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(245, 158, 11, 0.2)', boxShadow: '0 4px 30px rgba(146, 64, 14, 0.05)' } : {}}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">

          {/* Logo / Brand */}
          <div className="flex-1 flex justify-start">
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
                className="text-sm font-semibold text-stone-700 hover:text-amber-800 transition-colors duration-200 cursor-pointer nav-link-underline"
              >
                {label}
              </button>
            ))}
          </div>

          {/* Toolbar (Desktop & Mobile) */}
          <div className="flex-1 flex justify-end items-center gap-3">
            {/* Desktop Search */}
            <div className="hidden md:flex items-center">
              <button
                onClick={triggerSearchFocus}
                className="p-2.5 rounded-full hover:bg-amber-100 text-stone-600 hover:text-amber-700 transition-all duration-200 cursor-pointer"
                title="Search Menu"
              >
                <FaSearch className="text-base" />
              </button>
            </div>
            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-full hover:bg-amber-100/70 text-stone-700 cursor-pointer transition-colors"
              >
                {mobileMenuOpen ? <FaTimes className="text-lg" /> : <FaBars className="text-lg" />}
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-amber-200/50 px-4 pt-3 pb-5 space-y-1.5 flex flex-col font-inter shadow-lg"
          style={{ background: 'rgba(255, 251, 244, 0.95)', backdropFilter: 'blur(20px)' }}
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
              className="text-left py-2.5 px-4 rounded-xl text-sm font-semibold text-stone-700 hover:text-amber-800 hover:bg-amber-50/80 transition-all duration-200"
            >
              {label}
            </button>
          ))}

          <button
            onClick={() => { setMobileMenuOpen(false); triggerSearchFocus(); }}
            className="flex items-center gap-2.5 text-left py-2.5 px-4 rounded-xl text-sm font-semibold text-amber-800 hover:bg-amber-100/40 transition-all duration-200"
          >
            <FaSearch className="text-sm" />
            <span>Search Menu</span>
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

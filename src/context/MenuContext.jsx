import React, { createContext, useState, useEffect } from 'react';

export const MenuContext = createContext();

export const MenuProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [vegOnly, setVegOnly] = useState(false);
  const [popularOnly, setPopularOnly] = useState(false);
  const [menuSection, setMenuSection] = useState('beverages'); // 'beverages' | 'food'
  // Always light mode — remove dark class on mount
  useEffect(() => {
    document.documentElement.classList.remove('dark');
    localStorage.removeItem('theme');
  }, []);

  // Reset category selection when switching sections
  const switchMenuSection = (section) => {
    setMenuSection(section);
    setSelectedCategory('all');
    setSearchQuery('');
  };

  return (
    <MenuContext.Provider value={{
      searchQuery,
      setSearchQuery,
      selectedCategory,
      setSelectedCategory,
      vegOnly,
      setVegOnly,
      popularOnly,
      setPopularOnly,
      menuSection,
      switchMenuSection,
      darkMode: false,
      toggleDarkMode: () => {}
    }}>
      {children}
    </MenuContext.Provider>
  );
};

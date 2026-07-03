import React, { createContext, useState, useEffect } from 'react';

export const MenuContext = createContext();

export const MenuProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [vegOnly, setVegOnly] = useState(false);
  const [popularOnly, setPopularOnly] = useState(false);
  // Always light mode — remove dark class on mount
  useEffect(() => {
    document.documentElement.classList.remove('dark');
    localStorage.removeItem('theme');
  }, []);

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
      darkMode: false,
      toggleDarkMode: () => {}
    }}>
      {children}
    </MenuContext.Provider>
  );
};

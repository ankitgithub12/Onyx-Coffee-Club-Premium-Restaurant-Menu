import React, { createContext, useState, useEffect } from 'react';

export const MenuContext = createContext();

export const MenuProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [vegOnly, setVegOnly] = useState(false);
  const [popularOnly, setPopularOnly] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [shortlist, setShortlist] = useState([]);
  const [isShortlistOpen, setIsShortlistOpen] = useState(false);

  // Load theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(prev => {
      const newVal = !prev;
      if (newVal) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
      return newVal;
    });
  };

  const addToShortlist = (item) => {
    setShortlist(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) {
        return prev.map(i => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i);
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const removeFromShortlist = (itemId) => {
    setShortlist(prev => prev.filter(i => i.id !== itemId));
  };

  const updateQuantity = (itemId, quantity) => {
    if (quantity <= 0) {
      removeFromShortlist(itemId);
      return;
    }
    setShortlist(prev => prev.map(i => i.id === itemId ? { ...i, quantity } : i));
  };

  const clearShortlist = () => {
    setShortlist([]);
  };

  const totalAmount = shortlist.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const totalItems = shortlist.reduce((sum, item) => sum + item.quantity, 0);

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
      darkMode,
      toggleDarkMode,
      shortlist,
      addToShortlist,
      removeFromShortlist,
      updateQuantity,
      clearShortlist,
      totalAmount,
      totalItems,
      isShortlistOpen,
      setIsShortlistOpen
    }}>
      {children}
    </MenuContext.Provider>
  );
};

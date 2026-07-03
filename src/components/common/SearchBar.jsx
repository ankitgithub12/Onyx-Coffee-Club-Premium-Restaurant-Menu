import React, { useContext } from 'react';
import { MenuContext } from '../../context/MenuContext';
import { FaSearch, FaTimes } from 'react-icons/fa';

const SearchBar = ({ className = '' }) => {
  const { searchQuery, setSearchQuery } = useContext(MenuContext);

  return (
    <div className={`relative w-full max-w-md ${className}`}>
      <span className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
        <FaSearch className="text-border-gold/80 text-sm" />
      </span>
      <input
        id="menu-search-bar"
        type="text"
        placeholder="Search coffee, pizza, burgers..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full pl-11 pr-10 py-3 rounded-2xl border border-border-gold/30 bg-white/70 dark:bg-zinc-900/60 dark:border-zinc-800/80 dark:text-zinc-200 text-text-dark focus:ring-2 focus:ring-primary dark:focus:ring-border-gold focus:border-transparent outline-none transition-all placeholder:text-zinc-400 font-inter text-sm shadow-inner"
      />
      {searchQuery && (
        <button
          onClick={() => setSearchQuery('')}
          className="absolute inset-y-0 right-0 pr-4 flex items-center text-zinc-400 hover:text-primary dark:hover:text-border-gold transition-colors cursor-pointer"
        >
          <FaTimes className="text-xs" />
        </button>
      )}
    </div>
  );
};

export default SearchBar;

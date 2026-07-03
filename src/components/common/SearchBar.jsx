import React, { useContext } from 'react';
import { MenuContext } from '../../context/MenuContext';
import { FaSearch, FaTimes } from 'react-icons/fa';

const SearchBar = ({ className = '' }) => {
  const { searchQuery, setSearchQuery } = useContext(MenuContext);

  return (
    <div className={`relative w-full max-w-md ${className}`}>
      <span className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
        <FaSearch className="text-amber-500/70 text-sm" />
      </span>
      <input
        id="menu-search-bar"
        type="text"
        placeholder="Search coffee, pizza, burgers..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full pl-11 pr-10 py-3.5 rounded-2xl border text-stone-800 font-inter text-sm outline-none transition-all placeholder-stone-400"
        style={{
          background: '#fff',
          borderColor: searchQuery ? '#f59e0b' : '#fde68a',
          boxShadow: searchQuery ? '0 0 0 3px rgba(245, 158, 11, 0.15)' : '0 2px 12px rgba(146, 64, 14, 0.08)',
        }}
        onFocus={(e) => {
          e.target.style.borderColor = '#f59e0b';
          e.target.style.boxShadow = '0 0 0 3px rgba(245, 158, 11, 0.15)';
        }}
        onBlur={(e) => {
          if (!searchQuery) {
            e.target.style.borderColor = '#fde68a';
            e.target.style.boxShadow = '0 2px 12px rgba(146, 64, 14, 0.08)';
          }
        }}
      />
      {searchQuery && (
        <button
          onClick={() => setSearchQuery('')}
          className="absolute inset-y-0 right-0 pr-4 flex items-center text-stone-400 hover:text-amber-600 transition-colors cursor-pointer"
        >
          <FaTimes className="text-sm" />
        </button>
      )}
    </div>
  );
};

export default SearchBar;

import React from 'react';
import Container from '../components/layout/Container';
import SectionTitle from '../components/layout/SectionTitle';
import SearchBar from '../components/common/SearchBar';
import CategoryTabs from '../components/common/CategoryTabs';
import MenuGrid from '../components/menu/MenuGrid';

const Menu = () => {
  return (
    <section id="menu-section" className="py-16 md:py-24 cream-gradient dark:bg-zinc-950/20">
      <Container className="space-y-10">
        
        {/* Header Title and Search Bar */}
        <div className="flex flex-col items-center space-y-4">
          <SectionTitle 
            title="The Serenity Menu" 
            subtitle="Freshly crafted, 100% vegetarian coffee, drinks, and gourmet snacks" 
          />
          <SearchBar />
        </div>
        
        {/* Filters and Horizontal Category tabs */}
        <CategoryTabs />
        
        {/* Rendered cards grid */}
        <div className="pt-4">
          <MenuGrid />
        </div>

      </Container>
    </section>
  );
};

export default Menu;

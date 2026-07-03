import React from 'react';
import Container from '../components/layout/Container';
import SectionTitle from '../components/layout/SectionTitle';
import SearchBar from '../components/common/SearchBar';
import CategoryTabs from '../components/common/CategoryTabs';
import MenuGrid from '../components/menu/MenuGrid';

const Menu = () => {
  return (
    <section
      id="menu-section"
      className="py-16 md:py-24"
      style={{ background: 'linear-gradient(180deg, #fffbf4 0%, #fff8ed 100%)' }}
    >
      <Container className="space-y-10">

        {/* Header Title and Search Bar */}
        <div className="flex flex-col items-center space-y-6">
          <SectionTitle
            title="The Serenity Menu"
            subtitle="Freshly crafted, 100% vegetarian coffee, drinks, and gourmet snacks"
          />
          <SearchBar />
        </div>

        {/* Category Tabs + Filters */}
        <CategoryTabs />

        {/* Menu Grid */}
        <div className="pt-4">
          <MenuGrid />
        </div>

      </Container>
    </section>
  );
};

export default Menu;

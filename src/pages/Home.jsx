import React, { useEffect, useState } from 'react';
import { allItems } from '../data/menuData';
import MenuCard from '../components/menu/MenuCard';
import Container from '../components/layout/Container';
import SectionTitle from '../components/layout/SectionTitle';
import Button from '../components/common/Button';
import SlideUp from '../components/animations/SlideUp';
import FadeIn from '../components/animations/FadeIn';
import { FaCoffee, FaChevronDown, FaUtensils, FaLeaf, FaHourglassHalf } from 'react-icons/fa';

const Home = () => {
  const [featuredItems, setFeaturedItems] = useState([]);

  // Select 3 random popular/veg items as today's specials
  useEffect(() => {
    const populars = allItems.filter(item => item.popular);
    // Shuffle and pick 3
    const shuffled = [...populars].sort(() => 0.5 - Math.random());
    setFeaturedItems(shuffled.slice(0, 3));
  }, []);

  const scrollToMenu = () => {
    const menuSection = document.getElementById('menu-section');
    if (menuSection) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = menuSection.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="space-y-24 pb-16">
      
      {/* 1. Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-[#180f0a] overflow-hidden select-none">
        
        {/* Decorative Background Glows */}
        <div className="absolute top-1/4 left-1/4 h-[300px] w-[300px] bg-primary/15 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 h-[400px] w-[400px] bg-accent/10 rounded-full blur-[120px] animate-pulse-subtle"></div>
        
        {/* Subtle Coffee Bean SVG Shapes in background */}
        <div className="absolute inset-0 opacity-5 dark:opacity-10 mix-blend-overlay pointer-events-none">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <pattern id="beansPattern" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M40 20 C25 20 20 30 20 40 C20 50 25 60 40 60 C55 60 60 50 60 40 C60 30 55 20 40 20 Z" fill="none" stroke="#D6B37A" strokeWidth="1" />
              <path d="M25 40 Q40 30 55 40" fill="none" stroke="#D6B37A" strokeWidth="0.5" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#beansPattern)" />
          </svg>
        </div>

        <Container className="relative z-10 flex flex-col items-center text-center px-4">
          
          <FadeIn delay={0.2} duration={0.8} className="flex flex-col items-center">
            {/* Top Badge */}
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full border border-border-gold/30 bg-primary/10 text-border-gold text-xs font-bold uppercase tracking-wider mb-6">
              <FaCoffee className="animate-float" />
              <span>Est. 2026</span>
            </div>

            {/* Title / Crest */}
            <h1 className="font-playfair font-black text-6xl md:text-8xl tracking-[0.12em] text-bg-cream uppercase select-none">
              ONYX
            </h1>
            <h2 className="font-playfair font-bold text-border-gold text-xl md:text-2xl tracking-[0.3em] uppercase -mt-2 md:-mt-4 mb-4">
              COFFEE CLUB
            </h2>
            
            {/* Divider */}
            <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-border-gold to-transparent my-4"></div>

            {/* Tagline */}
            <p className="font-merriweather italic text-zinc-300 text-sm md:text-lg max-w-lg mb-8 tracking-wide">
              "Coffee With Serenity"
            </p>

            <p className="font-inter text-zinc-400 text-xs md:text-sm max-w-md mb-10 leading-relaxed">
              Step into a sanctuary of flavor. We craft premium roasted coffees, refreshing signature drinks, and savory veg bites in a space designed for complete tranquility.
            </p>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Button 
                variant="primary" 
                size="lg" 
                onClick={scrollToMenu}
                className="w-48 sm:w-auto uppercase tracking-wider text-xs font-bold"
              >
                Explore Menu
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                onClick={() => {
                  const aboutSec = document.getElementById('about-section');
                  if (aboutSec) aboutSec.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-48 sm:w-auto uppercase tracking-wider text-xs font-bold"
              >
                Our Story
              </Button>
            </div>

          </FadeIn>

          {/* Bounce Down Indicator */}
          <button 
            onClick={scrollToMenu}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 text-border-gold hover:text-white transition-colors animate-bounce cursor-pointer p-2 rounded-full"
            aria-label="Scroll down to menu"
          >
            <FaChevronDown className="text-xl" />
          </button>

        </Container>

      </section>

      {/* 2. Featured Specials Section */}
      {featuredItems.length > 0 && (
        <section id="specials-section">
          <Container>
            <SectionTitle 
              title="Today's Serene Specials" 
              subtitle="Handcrafted selections prepared with extra care by our chef" 
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {featuredItems.map((item, index) => (
                <SlideUp key={item.id} delay={index * 0.15}>
                  <MenuCard item={item} />
                </SlideUp>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* 3. About Section */}
      <section id="about-section" className="bg-white/30 dark:bg-zinc-900/30 py-20 border-y border-border-gold/15 no-print">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Story Image / Decorative Card */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
              
              {/* SVG Illustration of Brewing Coffee */}
              <div className="relative bg-[#1e140f] rounded-2xl p-10 flex flex-col items-center justify-center text-bg-cream text-center shadow-xl border border-border-gold/20 h-96 overflow-hidden">
                
                {/* Decorative circle glow */}
                <div className="absolute h-56 w-56 rounded-full bg-primary/10 -top-12 -left-12"></div>
                <div className="absolute h-48 w-48 rounded-full bg-accent/5 -bottom-10 -right-10"></div>
                
                <svg className="h-40 w-40 text-border-gold animate-float" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M25 45 C25 25 35 20 50 20 C65 20 75 25 75 45 C75 65 65 75 50 75 C35 75 25 65 25 45 Z" />
                  <path d="M75 35 Q85 35 85 45 Q85 55 75 55" strokeWidth="3" />
                  <path d="M20 75 L80 75 L80 80 C80 83 77 86 74 86 L26 86 C23 86 20 83 20 80 Z" fill="currentColor" opacity="0.2" />
                  <path d="M40 10 Q43 14 40 17 Q37 20 40 24" strokeWidth="1.5" />
                  <path d="M50 8 Q53 12 50 15 Q47 18 50 22" strokeWidth="1.5" />
                  <path d="M60 10 Q63 14 60 17 Q57 20 60 24" strokeWidth="1.5" />
                </svg>
                
                <h4 className="font-playfair text-xl font-bold text-border-gold mt-6 uppercase tracking-wider">
                  The Serenity Standard
                </h4>
                <p className="font-inter text-xs text-zinc-400 mt-2 max-w-xs leading-relaxed">
                  We slow-roast single-origin beans at exactly 215°C to preserve their natural sweetness, delivering peaceful notes in every sip.
                </p>
              </div>
            </div>

            {/* Story Text */}
            <div className="space-y-6 flex flex-col justify-center">
              <span className="text-xs font-bold uppercase tracking-wider text-accent font-inter">Our Philosophy</span>
              
              <h3 className="font-playfair text-3xl md:text-4xl font-bold text-text-dark dark:text-zinc-100">
                Brewing Serenity Since 2026
              </h3>
              
              <p className="font-inter text-sm text-text-muted dark:text-zinc-400 leading-relaxed">
                At ONYX Coffee Club, we believe that coffee is more than just a morning stimulant — it's an opportunity for mindfulness. In our fast-paced world, we provide a peaceful respite where you can slow down, savor rich flavors, and reconnect with your serenity.
              </p>

              {/* Core Pillars */}
              <div className="grid grid-cols-2 gap-6 pt-4 font-inter">
                <div className="flex space-x-3">
                  <div className="flex-shrink-0 mt-1 text-primary dark:text-border-gold text-lg"><FaLeaf /></div>
                  <div>
                    <h5 className="font-bold text-sm text-text-dark dark:text-zinc-200">100% Pure Veg</h5>
                    <p className="text-xs text-text-muted dark:text-zinc-450 mt-0.5">Every meal is prepared strictly vegetarian.</p>
                  </div>
                </div>
                
                <div className="flex space-x-3">
                  <div className="flex-shrink-0 mt-1 text-primary dark:text-border-gold text-lg"><FaHourglassHalf /></div>
                  <div>
                    <h5 className="font-bold text-sm text-text-dark dark:text-zinc-200">Slow Brewed</h5>
                    <p className="text-xs text-text-muted dark:text-zinc-450 mt-0.5">Espressos extracted at optimal atmospheric pressure.</p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <Button 
                  variant="outline" 
                  size="md" 
                  onClick={scrollToMenu}
                  className="uppercase tracking-wider text-xs font-bold"
                >
                  View Full Menu
                </Button>
              </div>

            </div>

          </div>
        </Container>
      </section>

    </div>
  );
};

export default Home;

import React, { useEffect, useState } from 'react';
import { allItems } from '../data/menuData';
import MenuCard from '../components/menu/MenuCard';
import Container from '../components/layout/Container';
import SectionTitle from '../components/layout/SectionTitle';
import Button from '../components/common/Button';
import SlideUp from '../components/animations/SlideUp';
import FadeIn from '../components/animations/FadeIn';
import { FaCoffee, FaChevronDown, FaLeaf, FaHourglassHalf, FaStar, FaMapMarkerAlt } from 'react-icons/fa';

const Home = () => {
  const [featuredItems, setFeaturedItems] = useState([]);

  useEffect(() => {
    const populars = allItems.filter(item => item.popular);
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
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const stats = [
    { value: '115+', label: 'Menu Items' },
    { value: '100%', label: 'Vegetarian' },
    { value: '4.9★', label: 'Guest Rating' },
    { value: '2026', label: 'Est. Year' },
  ];

  return (
    <div className="pb-16">

      {/* ── Hero Section ── */}
      <section className="relative min-h-screen flex items-center justify-center pt-28 pb-12 overflow-hidden select-none">

        {/* Warm layered background */}
        <div className="absolute inset-0 hero-gradient opacity-95" />

        {/* Dynamic ambient blur auroras */}
        <div className="absolute w-[450px] h-[450px] rounded-full bg-amber-500/15 blur-[120px] pointer-events-none -top-10 -left-10 animate-aura-1" />
        <div className="absolute w-[400px] h-[400px] rounded-full bg-orange-600/10 blur-[100px] pointer-events-none -bottom-20 -right-10 animate-aura-2" />

        {/* Floating background coffee bean SVGs */}
        <div className="absolute top-[20%] left-[8%] opacity-15 pointer-events-none animate-drift-right hidden md:block">
          <svg className="w-10 h-10 text-amber-300" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
            <ellipse cx="50" cy="50" rx="20" ry="30" />
            <path d="M35 50 Q50 35 65 50" />
          </svg>
        </div>
        <div className="absolute bottom-[25%] right-[10%] opacity-10 pointer-events-none animate-drift-left hidden md:block">
          <svg className="w-14 h-14 text-amber-300" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5">
            <ellipse cx="50" cy="50" rx="20" ry="30" />
            <path d="M35 50 Q50 35 65 50" />
          </svg>
        </div>

        {/* Decorative concentric circles */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="absolute w-[700px] h-[700px] rounded-full border border-amber-300/10" />
          <div className="absolute w-[500px] h-[500px] rounded-full border border-amber-300/15" />
          <div className="absolute w-[320px] h-[320px] rounded-full border border-amber-300/20" />
        </div>

        {/* Radial glow in center */}
        <div className="absolute inset-0 bg-radial-gradient pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at center, rgba(251,191,36,0.15) 0%, transparent 65%)' }} />

        {/* Coffee bean pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <pattern id="beanPat" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <ellipse cx="30" cy="30" rx="14" ry="20" fill="none" stroke="#fbbf24" strokeWidth="1.2" />
              <path d="M18 30 Q30 22 42 30" fill="none" stroke="#fbbf24" strokeWidth="0.8" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#beanPat)" />
          </svg>
        </div>

        <Container className="relative z-10 flex flex-col items-center text-center px-4">
          <FadeIn delay={0.1} duration={0.8} className="flex flex-col items-center w-full">

            {/* Est badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-amber-400/30 bg-white/5 shadow-[0_0_15px_rgba(251,191,36,0.08)] backdrop-blur-sm text-amber-200 text-xs font-bold uppercase tracking-widest mb-8 select-none">
              <FaStar className="text-amber-300 animate-pulse-soft" />
              <span>Est. 2026 · Premium · 100% Vegetarian</span>
              <FaStar className="text-amber-300 animate-pulse-soft" />
            </div>

            {/* Brand Name */}
            <h1 className="font-playfair font-black text-white leading-none"
              style={{ fontSize: 'clamp(4rem, 14vw, 9rem)', letterSpacing: '0.1em', textShadow: '0 4px 24px rgba(0,0,0,0.35)' }}>
              ONYX
            </h1>

            {/* Subtitle */}
            <div className="flex items-center gap-4 my-2">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-amber-400" />
              <h2 className="font-playfair text-amber-300 tracking-[0.45em] text-base md:text-xl font-semibold uppercase">
                Coffee Club
              </h2>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-amber-400" />
            </div>

            {/* Tagline */}
            <p className="font-merriweather italic text-amber-100/90 text-base md:text-xl mt-4 mb-3 tracking-wide">
              "Coffee With Serenity"
            </p>

            {/* Description */}
            <p className="font-inter text-amber-100/70 text-sm md:text-base max-w-lg mb-10 leading-relaxed">
              Step into a sanctuary of flavor — where every cup is brewed with intention, every bite crafted with care.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 mb-12">
              <button
                onClick={scrollToMenu}
                className="w-48 sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-amber-950 font-bold text-sm uppercase tracking-widest transition-all duration-300 hover:scale-105 shadow-lg shadow-amber-500/20 cursor-pointer border-t border-amber-300/40"
              >
                Explore Menu
              </button>
              <button
                onClick={() => {
                  const aboutSec = document.getElementById('about-section');
                  if (aboutSec) aboutSec.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-48 sm:w-auto px-8 py-3.5 rounded-full border-2 border-amber-400/40 hover:border-amber-300 text-amber-200 hover:bg-white/5 backdrop-blur-sm font-bold text-sm uppercase tracking-widest transition-all duration-300 hover:scale-105 cursor-pointer shadow-md"
              >
                Our Story
              </button>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full max-w-lg sm:max-w-3xl px-2">
              {stats.map((s) => (
                <div key={s.label} className="flex flex-col items-center justify-center p-4 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md shadow-inner transition-transform duration-300 hover:scale-105 hover:bg-white/[0.06] hover:border-amber-400/30">
                  <span className="font-playfair text-2xl md:text-3xl font-extrabold text-amber-300 tracking-wide">{s.value}</span>
                  <span className="font-inter text-[10px] text-amber-100/70 uppercase tracking-widest mt-1.5 font-semibold text-center">{s.label}</span>
                </div>
              ))}
            </div>

          </FadeIn>

          {/* Scroll bounce indicator */}
          <button
            onClick={scrollToMenu}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 text-amber-300 hover:text-white transition-colors animate-bounce cursor-pointer p-2"
            aria-label="Scroll down to menu"
          >
            <FaChevronDown className="text-2xl" />
          </button>
        </Container>
      </section>

      {/* ── Featured Specials Section ── */}
      {featuredItems.length > 0 && (
        <section id="specials-section" className="py-20 bg-gradient-to-b from-amber-50 to-white">
          <Container>
            <SectionTitle
              title="Chef's Signature Creations"
              subtitle="Handpicked favourites — freshly prepared and bursting with flavour"
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
              {featuredItems.map((item, index) => (
                <SlideUp key={item.id} delay={index * 0.15}>
                  <MenuCard item={item} />
                </SlideUp>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* ── About Section ── */}
      <section id="about-section" className="py-20 bg-white border-y border-amber-100 no-print">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Decorative card */}
            <div className="relative group order-2 lg:order-1">
              <div className="absolute -inset-1.5 bg-gradient-to-r from-amber-500 to-orange-500 rounded-3xl blur-lg opacity-25 group-hover:opacity-40 transition-all duration-700" />

              <div
                className="relative rounded-2xl p-10 flex flex-col items-center justify-center text-center overflow-hidden h-96 shadow-xl"
                style={{ background: 'linear-gradient(135deg, #270f02 0%, #451a03 60%, #5c2507 100%)' }}
              >
                <div className="absolute w-52 h-52 rounded-full bg-amber-400/5 -top-16 -left-16" />
                <div className="absolute w-40 h-40 rounded-full bg-orange-400/5 -bottom-10 -right-10" />

                {/* Animated coffee cup SVG */}
                <svg className="h-36 w-36 text-amber-300 animate-float-slow" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M25 45 C25 25 35 20 50 20 C65 20 75 25 75 45 C75 65 65 75 50 75 C35 75 25 65 25 45 Z" />
                  <path d="M75 35 Q88 35 88 45 Q88 55 75 55" strokeWidth="2.5" />
                  <path d="M20 75 L80 75 L80 80 C80 84 77 86 74 86 L26 86 C23 86 20 84 20 80 Z" fill="currentColor" fillOpacity="0.2" />
                  <path d="M40 10 Q43 14 40 17 Q37 20 40 24" strokeWidth="1.5" />
                  <path d="M50 8 Q53 12 50 15 Q47 18 50 22" strokeWidth="1.5" />
                  <path d="M60 10 Q63 14 60 17 Q57 20 60 24" strokeWidth="1.5" />
                </svg>

                <h4 className="font-playfair text-xl font-bold text-amber-300 mt-5 uppercase tracking-wider">
                  The Serenity Standard
                </h4>
                <p className="font-inter text-xs text-amber-100/70 mt-2.5 max-w-xs leading-relaxed">
                  We slow-roast single-origin beans at exactly 215°C to preserve their natural sweetness, delivering peaceful notes in every sip.
                </p>
              </div>
            </div>

            {/* Story Text */}
            <div className="space-y-6 flex flex-col justify-center order-1 lg:order-2">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-700 font-inter">Our Philosophy</span>

              <h3 className="font-playfair text-3xl md:text-4xl font-bold text-stone-900 leading-snug">
                Brewing Serenity<br />
                <span className="gold-gradient-text font-extrabold">Since 2026</span>
              </h3>

              <p className="font-inter text-sm text-stone-600 leading-relaxed">
                At ONYX Coffee Club, we believe that coffee is more than a morning stimulant — it's an opportunity for mindfulness. In our fast-paced world, we provide a peaceful respite where you can slow down, savour rich flavours, and reconnect with your serenity.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex gap-3.5 p-4.5 rounded-2xl bg-amber-50/50 border border-amber-100/70 shadow-sm transition-all duration-300 hover:scale-[1.03] hover:shadow-md hover:bg-amber-50">
                  <div className="text-green-600 text-xl mt-0.5 flex-shrink-0"><FaLeaf className="animate-pulse-soft" /></div>
                  <div>
                    <h5 className="font-bold text-sm text-stone-850">100% Pure Veg</h5>
                    <p className="text-xs text-stone-500 mt-0.5 leading-relaxed">Every dish is strictly vegetarian.</p>
                  </div>
                </div>

                <div className="flex gap-3.5 p-4.5 rounded-2xl bg-amber-50/50 border border-amber-100/70 shadow-sm transition-all duration-300 hover:scale-[1.03] hover:shadow-md hover:bg-amber-50">
                  <div className="text-amber-600 text-xl mt-0.5 flex-shrink-0"><FaHourglassHalf className="animate-pulse-soft" /></div>
                  <div>
                    <h5 className="font-bold text-sm text-stone-850">Slow Brewed</h5>
                    <p className="text-xs text-stone-500 mt-0.5 leading-relaxed">Optimal pressure extraction, always.</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <FaMapMarkerAlt className="text-amber-600 flex-shrink-0 text-sm" />
                <span className="text-xs md:text-sm text-stone-500 font-inter leading-relaxed">
                  AC/209 Gyan Vihar Marg, Near Kanha Central Spine, Jagatpura, Jaipur, Rajasthan — 302017
                </span>
              </div>

              <div className="pt-2">
                <button
                  onClick={scrollToMenu}
                  className="px-7 py-3.5 rounded-full bg-amber-600 hover:bg-amber-700 text-white font-bold text-sm uppercase tracking-widest transition-all duration-300 hover:scale-105 shadow-md shadow-amber-600/20 cursor-pointer"
                >
                  View Full Menu
                </button>
              </div>
            </div>

          </div>
        </Container>
      </section>

    </div>
  );
};

export default Home;

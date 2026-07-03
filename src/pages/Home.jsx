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
    { value: '50+', label: 'Menu Items' },
    { value: '100%', label: 'Vegetarian' },
    { value: '4.9★', label: 'Guest Rating' },
    { value: '2026', label: 'Est. Year' },
  ];

  return (
    <div className="pb-16">

      {/* ── Hero Section ── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden select-none">

        {/* Warm layered background */}
        <div className="absolute inset-0 hero-gradient opacity-95" />

        {/* Decorative concentric circles */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="absolute w-[700px] h-[700px] rounded-full border border-amber-300/10" />
          <div className="absolute w-[500px] h-[500px] rounded-full border border-amber-300/15" />
          <div className="absolute w-[320px] h-[320px] rounded-full border border-amber-300/20" />
        </div>

        {/* Radial glow in center */}
        <div className="absolute inset-0 bg-radial-gradient pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at center, rgba(251,191,36,0.18) 0%, transparent 65%)' }} />

        {/* Coffee bean pattern overlay */}
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
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
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-amber-300/40 bg-white/10 backdrop-blur-sm text-amber-200 text-xs font-bold uppercase tracking-widest mb-8">
              <FaStar className="text-amber-300 animate-pulse-soft" />
              <span>Est. 2026 · Premium · 100% Vegetarian</span>
              <FaStar className="text-amber-300 animate-pulse-soft" />
            </div>

            {/* Brand Name */}
            <h1 className="font-playfair font-black text-white leading-none"
              style={{ fontSize: 'clamp(4rem, 14vw, 9rem)', letterSpacing: '0.1em', textShadow: '0 4px 24px rgba(0,0,0,0.3)' }}>
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
                className="w-48 sm:w-auto px-8 py-3.5 rounded-full bg-amber-400 hover:bg-amber-300 text-amber-900 font-bold text-sm uppercase tracking-widest transition-all duration-300 hover:scale-105 shadow-lg shadow-amber-400/30 cursor-pointer"
              >
                Explore Menu
              </button>
              <button
                onClick={() => {
                  const aboutSec = document.getElementById('about-section');
                  if (aboutSec) aboutSec.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-48 sm:w-auto px-8 py-3.5 rounded-full border-2 border-amber-300/60 text-amber-200 hover:bg-white/10 font-bold text-sm uppercase tracking-widest transition-all duration-300 cursor-pointer"
              >
                Our Story
              </button>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 w-full max-w-lg sm:max-w-2xl">
              {stats.map((s) => (
                <div key={s.label} className="flex flex-col items-center">
                  <span className="font-playfair text-2xl md:text-3xl font-bold text-amber-300">{s.value}</span>
                  <span className="font-inter text-[11px] text-amber-200/70 uppercase tracking-wider mt-1">{s.label}</span>
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
              title="Today's Specials"
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
              <div className="absolute -inset-1.5 bg-gradient-to-r from-amber-400 to-orange-400 rounded-3xl blur-lg opacity-20 group-hover:opacity-35 transition-all duration-700" />

              <div
                className="relative rounded-2xl p-10 flex flex-col items-center justify-center text-center overflow-hidden h-96"
                style={{ background: 'linear-gradient(135deg, #451a03 0%, #78350f 60%, #92400e 100%)' }}
              >
                <div className="absolute w-52 h-52 rounded-full bg-amber-400/10 -top-16 -left-16" />
                <div className="absolute w-40 h-40 rounded-full bg-orange-400/10 -bottom-10 -right-10" />

                {/* Animated coffee cup SVG */}
                <svg className="h-36 w-36 text-amber-300 animate-float" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.8">
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
                <p className="font-inter text-xs text-amber-100/70 mt-2 max-w-xs leading-relaxed">
                  We slow-roast single-origin beans at exactly 215°C to preserve their natural sweetness, delivering peaceful notes in every sip.
                </p>
              </div>
            </div>

            {/* Story Text */}
            <div className="space-y-6 flex flex-col justify-center order-1 lg:order-2">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-600 font-inter">Our Philosophy</span>

              <h3 className="font-playfair text-3xl md:text-4xl font-bold text-stone-900 leading-snug">
                Brewing Serenity<br />
                <span className="gold-gradient-text">Since 2026</span>
              </h3>

              <p className="font-inter text-sm text-stone-600 leading-relaxed">
                At ONYX Coffee Club, we believe that coffee is more than a morning stimulant — it's an opportunity for mindfulness. In our fast-paced world, we provide a peaceful respite where you can slow down, savour rich flavours, and reconnect with your serenity.
              </p>

              <div className="grid grid-cols-2 gap-6 pt-2">
                <div className="flex gap-3 p-4 rounded-2xl bg-amber-50 border border-amber-100">
                  <div className="text-green-600 text-xl mt-0.5 flex-shrink-0"><FaLeaf /></div>
                  <div>
                    <h5 className="font-bold text-sm text-stone-800">100% Pure Veg</h5>
                    <p className="text-xs text-stone-500 mt-0.5">Every dish is strictly vegetarian.</p>
                  </div>
                </div>

                <div className="flex gap-3 p-4 rounded-2xl bg-amber-50 border border-amber-100">
                  <div className="text-amber-600 text-xl mt-0.5 flex-shrink-0"><FaHourglassHalf /></div>
                  <div>
                    <h5 className="font-bold text-sm text-stone-800">Slow Brewed</h5>
                    <p className="text-xs text-stone-500 mt-0.5">Optimal pressure extraction, always.</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <FaMapMarkerAlt className="text-amber-600 flex-shrink-0" />
                <span className="text-sm text-stone-500 font-inter">Serenity Avenue, Cyber Hub, Gurgaon — 122011</span>
              </div>

              <div className="pt-2">
                <button
                  onClick={scrollToMenu}
                  className="px-7 py-3 rounded-full bg-amber-600 hover:bg-amber-700 text-white font-bold text-sm uppercase tracking-widest transition-all duration-300 hover:scale-105 shadow-md cursor-pointer"
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

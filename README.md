# ONYX Coffee Club - Interactive Digital Menu

A premium, responsive, and modern restaurant menu web application built using **React.js (Vite)**, **Tailwind CSS (v4)**, **Framer Motion**, and **React Icons**.

This application is a complete digital redesign of the ONYX Coffee Club menu, converting its layout into an interactive, visually stunning digital experience.

## 🚀 Technologies Used
* **Frontend Library:** React.js (v19)
* **Build Tool:** Vite (v8)
* **Styling Framework:** Tailwind CSS (v4) with `@tailwindcss/vite`
* **Animations:** Framer Motion (v12)
* **Routing:** React Router DOM (v7)
* **Icons:** React Icons

---

## ✨ Features
1. **Interactive Beverage Menu Grid:** distributed in a beautiful three-column layout on desktops (`lg:grid-cols-3`):
   * **Left Column:** Hot Coffee – With Milk, Hot Coffee (Black), Hot Choco, Hot Tea.
   * **Center Column:** Premium Glassmorphic Branding Stamp Card, Icy Coffee, Iced Tea, Frappé.
   * **Right Column:** Mocktails, Shakes (Milkshakes), Extras, Brain Freezers.
2. **Glassmorphic Design Aesthetics:** Premium glass-card effects (`glass-card`) with custom gradients, border highlights, glowing background auroras (`animate-aura-1`, `animate-aura-2`), and subtle floating coffee beans.
3. **Floating Illustrations:** Smoothly rotating and floating premium graphic elements for Latte Art, Iced Frappé, and Mocktails.
4. **Dual Pricing Support:** Supports dynamic pricing for Regular and Large sizes (with size labels inline with the Price header) in select categories, or single pricing where applicable.
5. **Search Engine:** Live matching filter that searches item names, ingredients, and descriptions (memoized hook `useSearch`).
6. **Smart Filter Bars:** Toggles for "Veg Only" (100% vegetarian options highlighted) and "Popular Only" (handpicked recommendations) tags.
7. **Order Tray / Bill Estimator:** Customers can shortlist items to build a tray, calculate a subtotal with taxes, and print their custom tray order.
8. **Fluid Animations:** Smooth page entries, hover-lift card tilts, expandable item descriptions, and category tab highlight sliders.
9. **Dark Mode:** Sleek dark UI scheme preserved in localStorage.
10. **Print Friendly:** Uses standard CSS `@media print` rules to optimize styles for physical printout slips.

---

## 📂 Project Structure
```
onyx-coffee-club/
├── public/
│   ├── images/                  # Decorative premium illustrations (Latte Art, Frappé, etc.)
│   └── logo.svg                 # Branding Vector Logo (Favicon)
├── src/
│   ├── assets/                  # Icons, fonts & local images
│   ├── components/
│   │   ├── common/              # Buttons, Cards, Badges, SearchBar, CategoryTabs, Skeletons
│   │   ├── layout/              # Navbar, Footer, Containers, SectionTitle
│   │   ├── menu/                # MenuItem, MenuCategory, MenuGrid, ShortlistDrawer, RestaurantLogo, MenuPrice, MenuHeader
│   │   └── animations/          # FadeIn, SlideUp Framer Motion wrappers
│   ├── context/
│   │   └── MenuContext.jsx      # Holds filter states and shortlist Tray list
│   ├── data/                    # Segmented beverage lists (hotCoffee.js, milkshakes.js, mocktails.js, etc.)
│   ├── hooks/                   # Custom memoized logic (useSearch.js, useFilter.js)
│   ├── styles/
│   │   ├── index.css            # Base Tailwind v4 configuration & premium glass styles
│   │   └── animations.css       # Keyframes for floating / stamp spinning / auroras
│   ├── App.jsx                  # Main wrapper shell
│   ├── main.jsx                 # Entrypoint
│   └── routes.jsx               # React Router configurations
├── package.json
├── tailwind.config.js           # Structural configurations
├── postcss.config.js            # Standard PostCSS config
└── README.md
```

---

## 🛠️ Installation & Setup

1. **Install Dependencies:**
   ```bash
   npm install
   ```

2. **Run Local Development Server:**
   ```bash
   npm run dev
   ```

3. **Production Build Compilation:**
   ```bash
   npm run build
   ```
   Preview the compiled build with:
   ```bash
   npm run preview
   ```

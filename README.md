# ONYX Coffee Club - Interactive Digital Menu

A premium, responsive, and modern restaurant menu web application built using **React.js (Vite)**, **Tailwind CSS (v4)**, **Framer Motion**, and **React Icons**.

This application is a complete redesign of the ONYX Coffee Club physical menu, converting its three-column print layout into an interactive digital experience.

## 🚀 Technologies Used
* **Frontend Library:** React.js (v19)
* **Build Tool:** Vite (v8)
* **Styling Framework:** Tailwind CSS (v4) with `@tailwindcss/vite`
* **Animations:** Framer Motion (v12)
* **Routing:** React Router DOM (v7)
* **Icons:** React Icons

---

## ✨ Features
1. **Interactive Menu Grid:** distributed in a beautiful three-column layout on desktops (`lg:grid-cols-3`):
   * **Left:** Coffee (Hot & Cold), Milkshakes, Fries, Sandwiches.
   * **Center:** Circular Branding Stamp Emblem, Signature Drinks, Soft Drinks.
   * **Right:** Veg Pizzas, Pastas, Burgers, Shots.
2. **Search Engine:** Live matching filter that searches item names, ingredients, and descriptions (memoized hook `useSearch`).
3. **Smart Filter Bars:** Toggles for "Veg Only" and "Popular Only" tags.
4. **Order Tray / Bill Estimator:** Customers can shortlist items to build a tray, calculate a subtotal with taxes, and print their custom tray order.
5. **Fluid Animations:** Smooth page entries, hover-lift card tilts, expandable item descriptions, and category tab highlight sliders.
6. **Dark Mode:** Sleek dark UI scheme preserved in localStorage.
7. **Print Friendly:** Uses standard CSS `@media print` rules to optimize styles for physical printout slips.

---

## 📂 Project Structure
```
onyx-coffee-club/
├── public/
│   └── logo.svg                 # Branding Vector Logo (Favicon)
├── src/
│   ├── assets/                  # Icons, fonts & local images
│   ├── components/
│   │   ├── common/              # Buttons, Cards, Badges, SearchBar, CategoryTabs, Skeletons
│   │   ├── layout/              # Navbar, Footer, Containers, SectionTitle
│   │   ├── menu/                # MenuItem, MenuCategory, MenuGrid, ShortlistDrawer, RestaurantLogo
│   │   └── animations/          # FadeIn, SlideUp Framer Motion wrappers
│   ├── context/
│   │   └── MenuContext.jsx      # Holds filter states and shortlist Tray list
│   ├── data/                    # Segmented menu lists (hotCoffee.js, burgers.js, etc.)
│   ├── hooks/                   # Custom memoized logic (useSearch.js, useFilter.js)
│   ├── styles/
│   │   ├── index.css            # Base Tailwind v4 configuration
│   │   └── animations.css       # Keyframes for floating / stamp spinning
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

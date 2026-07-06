# ONYX Coffee Club — Premium Interactive Digital Menu

A premium, responsive, and modern restaurant menu web application built using **React.js (Vite)**, **Tailwind CSS (v4)**, **Framer Motion**, and **React Icons**.

This application is a complete digital redesign of the ONYX Coffee Club menu, converting both the Beverage and Food offerings into an interactive, visually stunning digital experience.

---

## 🚀 Technologies Used
* **Frontend Library:** React.js (v19)
* **Build Tool:** Vite (v8)
* **Styling Framework:** Tailwind CSS (v4) with `@tailwindcss/vite`
* **Animations:** Framer Motion (v12)
* **Routing:** React Router DOM (v7)
* **Icons:** React Icons
* **Linter:** oxlint

---

## ✨ Features

### 🍵 Beverage Menu
1. **Interactive Beverage Menu Grid:** Distributed in a beautiful three-column layout on desktops (`lg:grid-cols-3`):
   * **Left Column:** Hot Coffee – With Milk, Hot Coffee (Black), Hot Choco, Hot Tea.
   * **Center Column:** Premium Glassmorphic Branding Stamp Card, Icy Coffee, Iced Tea, Frappé.
   * **Right Column:** Mocktails, Shakes (Milkshakes), Extras, Brain Freezers.
2. **Dual Pricing Support:** Dynamic pricing for Regular and Large sizes (with size labels inline with the Price header) in select categories, or single pricing where applicable.

### 🍕 Food Menu
3. **Full Food Menu Grid:** A dedicated food section with its own three-column layout:
   * **Left Column:** Pizzas (Veg), French Fries (Veg).
   * **Center Column:** Pasta (Veg), Burgers (Veg).
   * **Right Column:** Sandwiches (Veg), Shots (Non-Alcoholic).
4. **Ingredient Lists:** Each food item displays a curated list of ingredients for transparency.

### 🎨 Design & Aesthetics
5. **Glassmorphic Design Aesthetics:** Premium glass-card effects (`glass-card`) with custom gradients, border highlights, glowing background auroras (`animate-aura-1`, `animate-aura-2`), and subtle floating coffee beans.
6. **Floating Illustrations:** Smoothly rotating and floating premium graphic elements for Latte Art, Iced Frappé, and Mocktails.
7. **Dark Mode:** Sleek dark UI scheme preserved in `localStorage`.

### 🔍 Search & Filters
8. **Search Engine:** Live matching filter that searches item names, ingredients, and descriptions (memoized hook `useSearch`).
9. **Smart Filter Bars:** Toggles for "Veg Only" (100% vegetarian options highlighted) and "Popular Only" (handpicked recommendations) tags.
10. **Category Tabs:** Horizontal scrollable tab bar with animated highlight slider for fast navigation between Beverages and Food sections.

### 🛒 Order & Print
11. **Order Tray / Bill Estimator:** Customers can shortlist items to build a tray, calculate a subtotal with taxes, and print their custom tray order.
12. **Print Friendly:** Uses standard CSS `@media print` rules to optimize styles for physical printout slips.

### 💫 Animations & UX
13. **Fluid Animations:** Smooth page entries, hover-lift card tilts, expandable item descriptions, and category tab highlight sliders.
14. **FadeIn & SlideUp Wrappers:** Reusable Framer Motion animation components for consistent entrance effects.

---

## 📂 Project Structure
```
onyx-coffee-club/
├── public/
│   ├── images/                       # Decorative premium illustrations
│   │   ├── coffee_beans_bg.png       #   Background texture
│   │   ├── coffee_latte_art.png      #   Floating latte art graphic
│   │   ├── colorful_mocktails.png    #   Floating mocktails graphic
│   │   └── iced_frappe_glass.png     #   Floating frappé graphic
│   ├── favicon.svg                   # Browser tab favicon
│   ├── icons.svg                     # SVG icon sprite
│   └── logo.svg                      # Branding vector logo
├── src/
│   ├── assets/                       # Icons, fonts & local images
│   ├── components/
│   │   ├── animations/
│   │   │   ├── FadeIn.jsx            # Framer Motion fade-in wrapper
│   │   │   └── SlideUp.jsx           # Framer Motion slide-up wrapper
│   │   ├── common/
│   │   │   ├── Badge.jsx             # Veg / Popular tag badges
│   │   │   ├── Button.jsx            # Reusable styled button
│   │   │   ├── Card.jsx              # Base glassmorphic card shell
│   │   │   ├── CategoryTabs.jsx      # Horizontal scrollable category tab bar
│   │   │   ├── Divider.jsx           # Styled horizontal divider
│   │   │   ├── LoadingSkeleton.jsx   # Shimmer skeleton placeholders
│   │   │   └── SearchBar.jsx         # Live search input component
│   │   ├── layout/
│   │   │   ├── Container.jsx         # Max-width centered container
│   │   │   ├── Footer.jsx            # Site footer with branding & links
│   │   │   ├── Navbar.jsx            # Top navigation bar with dark mode toggle
│   │   │   └── SectionTitle.jsx      # Styled section heading
│   │   └── menu/
│   │       ├── IngredientList.jsx    # Renders ingredient tags for food items
│   │       ├── MenuCard.jsx          # Individual item card with add-to-tray
│   │       ├── MenuCategory.jsx      # Category section wrapper
│   │       ├── MenuGrid.jsx          # Three-column responsive grid layout
│   │       ├── MenuHeader.jsx        # Section header with pricing columns
│   │       ├── MenuItem.jsx          # Line-item row in a category
│   │       ├── MenuPrice.jsx         # Price display (single / dual sizes)
│   │       └── RestaurantLogo.jsx    # Glassmorphic stamp branding card
│   ├── context/
│   │   └── MenuContext.jsx           # Global state: filters, search, and tray
│   ├── data/
│   │   ├── beverages/
│   │   │   ├── brainFreezers.js      # Brain Freezers items
│   │   │   ├── extras.js             # Add-on extras
│   │   │   ├── frappe.js             # Frappé items
│   │   │   ├── hotChoco.js           # Hot Chocolate items
│   │   │   ├── hotCoffee.js          # Hot Coffee (with milk) items
│   │   │   ├── hotCoffeeBlack.js     # Hot Coffee (black) items
│   │   │   ├── hotTea.js             # Hot Tea items
│   │   │   ├── icedTea.js            # Iced Tea items
│   │   │   ├── icyCoffee.js          # Icy Coffee items
│   │   │   ├── milkshakes.js         # Milkshake items
│   │   │   └── mocktails.js          # Mocktail items
│   │   ├── food/
│   │   │   ├── burgers.js            # Burgers (Veg) items
│   │   │   ├── frenchFries.js        # French Fries (Veg) items
│   │   │   ├── pasta.js              # Pasta (Veg) items
│   │   │   ├── pizzas.js             # Pizzas (Veg) items
│   │   │   ├── sandwiches.js         # Sandwiches (Veg) items
│   │   │   └── shots.js              # Shots (Non-Alcoholic) items
│   │   └── menuData.js              # Central data aggregator & category definitions
│   ├── hooks/
│   │   ├── useFilter.js              # Memoized veg/popular filter hook
│   │   └── useSearch.js              # Memoized search hook
│   ├── pages/
│   │   ├── Home.jsx                  # Landing page: Hero, Specials, About & Contact
│   │   ├── Menu.jsx                  # Full menu page (Beverages + Food)
│   │   └── NotFound.jsx              # 404 fallback page
│   ├── styles/
│   │   ├── animations.css            # Keyframes: floating, stamp spin, auroras
│   │   └── index.css                 # Base Tailwind v4 config & premium glass styles
│   ├── utils/
│   │   └── helpers.jsx               # Shared utility functions & icon resolver
│   ├── App.jsx                       # Main app shell with Navbar, Routes & Footer
│   ├── main.jsx                      # Vite entrypoint
│   └── routes.jsx                    # React Router route definitions
├── .gitignore
├── .oxlintrc.json                    # oxlint configuration
├── package.json
├── tailwind.config.js                # Tailwind structural configuration
├── postcss.config.js                 # PostCSS config
├── vite.config.js                    # Vite build configuration
└── README.md
```

---

## 🛠️ Installation & Setup

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/ankitgithub12/Onyx-Coffee-Club-Premium-Restaurant-Menu.git
   cd Onyx-Coffee-Club-Premium-Restaurant-Menu
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Run Local Development Server:**
   ```bash
   npm run dev
   ```

4. **Lint the Codebase:**
   ```bash
   npm run lint
   ```

5. **Production Build:**
   ```bash
   npm run build
   ```
   Preview the compiled build:
   ```bash
   npm run preview
   ```

---

## 📄 Pages & Routes

| Route    | Page          | Description                                        |
|----------|---------------|----------------------------------------------------|
| `/`      | Home + Menu   | Landing hero, specials, and full interactive menu   |
| `/menu`  | Menu          | Standalone full menu (Beverages + Food)             |
| `*`      | 404 Not Found | Fallback page for unrecognized routes               |

---

## 🗂️ Menu Categories

### Beverages (11 categories)
| Category                | Column  | Dual Sizing |
|-------------------------|---------|-------------|
| Hot Coffee – With Milk  | Left    | ✅          |
| Hot Coffee (Black)      | Left    | ✅          |
| Hot Choco               | Left    | —           |
| Hot Tea                 | Left    | —           |
| Icy Coffee              | Center  | —           |
| Iced Tea                | Center  | —           |
| Frappé                  | Center  | —           |
| Mocktails               | Right   | —           |
| Shakes                  | Right   | —           |
| Extras                  | Right   | —           |
| Brain Freezers          | Right   | —           |

### Food (6 categories)
| Category                  | Column  |
|---------------------------|---------|
| Pizzas (Veg)              | Left    |
| French Fries (Veg)        | Left    |
| Pasta (Veg)               | Center  |
| Burgers (Veg)             | Center  |
| Sandwiches (Veg)          | Right   |
| Shots (Non-Alcoholic)     | Right   |

---

## 📝 License

This project is for demonstration and educational purposes.

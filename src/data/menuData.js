// ── Beverages ──
import { hotCoffee } from './beverages/hotCoffee';
import { hotCoffeeBlack } from './beverages/hotCoffeeBlack';
import { hotChoco } from './beverages/hotChoco';
import { hotTea } from './beverages/hotTea';
import { icyCoffee } from './beverages/icyCoffee';
import { icedTea } from './beverages/icedTea';
import { frappe } from './beverages/frappe';
import { brainFreezers } from './beverages/brainFreezers';
import { mocktails } from './beverages/mocktails';
import { milkshakes } from './beverages/milkshakes';
import { extras } from './beverages/extras';

// ── Food ──
import { pizzas } from './food/pizzas';
import { pasta } from './food/pasta';
import { burgers } from './food/burgers';
import { sandwiches } from './food/sandwiches';
import { frenchFries } from './food/frenchFries';
import { shots } from './food/shots';

// Helper: enrich items with categoryId and categoryName
const enrich = (items, categoryId, categoryName) =>
  items.map(item => ({ ...item, categoryId, categoryName }));

export const categories = [
  // ── Beverages ──
  {
    id: "hot-coffee-milk",
    name: "Hot Coffee – With Milk",
    iconName: "FaCoffee",
    items: enrich(hotCoffee, "hot-coffee-milk", "Hot Coffee – With Milk"),
    column: "left",
    section: "beverages",
    hasSizes: true
  },
  {
    id: "hot-coffee-black",
    name: "Hot Coffee (Black)",
    iconName: "FaCoffee",
    items: enrich(hotCoffeeBlack, "hot-coffee-black", "Hot Coffee (Black)"),
    column: "left",
    section: "beverages",
    hasSizes: true
  },
  {
    id: "hot-choco",
    name: "Hot Choco",
    iconName: "FaMugHot",
    items: enrich(hotChoco, "hot-choco", "Hot Choco"),
    column: "left",
    section: "beverages"
  },
  {
    id: "hot-tea",
    name: "Hot Tea",
    iconName: "GiTeapot",
    items: enrich(hotTea, "hot-tea", "Hot Tea"),
    column: "left",
    section: "beverages"
  },
  {
    id: "icy-coffee",
    name: "Icy Coffee",
    iconName: "MdOutlineLocalCafe",
    items: enrich(icyCoffee, "icy-coffee", "Icy Coffee"),
    column: "center",
    section: "beverages"
  },
  {
    id: "iced-tea",
    name: "Iced Tea",
    iconName: "GiIceCube",
    items: enrich(icedTea, "iced-tea", "Iced Tea"),
    column: "center",
    section: "beverages"
  },
  {
    id: "frappe",
    name: "Frappé",
    iconName: "GiMilkCarton",
    items: enrich(frappe, "frappe", "Frappé"),
    column: "center",
    section: "beverages"
  },
  {
    id: "mocktails",
    name: "Mocktails",
    iconName: "FaCocktail",
    items: enrich(mocktails, "mocktails", "Mocktails"),
    column: "right",
    section: "beverages"
  },
  {
    id: "shakes",
    name: "Shakes",
    iconName: "GiMilkCarton",
    items: enrich(milkshakes, "shakes", "Shakes"),
    column: "right",
    section: "beverages"
  },
  {
    id: "extras",
    name: "Extras",
    iconName: "FaPlusCircle",
    items: enrich(extras, "extras", "Extras"),
    column: "right",
    section: "beverages"
  },
  {
    id: "brain-freezers",
    name: "Brain Freezers",
    iconName: "FaSnowflake",
    items: enrich(brainFreezers, "brain-freezers", "Brain Freezers"),
    column: "right",
    section: "beverages"
  },

  // ── Food ──
  {
    id: "pizzas",
    name: "Pizzas (Veg)",
    iconName: "FaPizzaSlice",
    items: enrich(pizzas, "pizzas", "Pizzas (Veg)"),
    column: "left",
    section: "food"
  },
  {
    id: "pasta",
    name: "Pasta (Veg)",
    iconName: "GiNoodles",
    items: enrich(pasta, "pasta", "Pasta (Veg)"),
    column: "center",
    section: "food"
  },
  {
    id: "burgers",
    name: "Burgers (Veg)",
    iconName: "FaHamburger",
    items: enrich(burgers, "burgers", "Burgers (Veg)"),
    column: "center",
    section: "food"
  },
  {
    id: "sandwiches",
    name: "Sandwiches (Veg)",
    iconName: "GiBread",
    items: enrich(sandwiches, "sandwiches", "Sandwiches (Veg)"),
    column: "right",
    section: "food"
  },
  {
    id: "french-fries",
    name: "French Fries (Veg)",
    iconName: "GiFrenchFries",
    items: enrich(frenchFries, "french-fries", "French Fries (Veg)"),
    column: "left",
    section: "food"
  },
  {
    id: "shots",
    name: "Shots (Non-Alcoholic)",
    iconName: "FaGlassWhiskey",
    items: enrich(shots, "shots", "Shots (Non-Alcoholic)"),
    column: "right",
    section: "food"
  }
];

export const allItems = [
  // Beverages
  ...enrich(hotCoffee, "hot-coffee-milk", "Hot Coffee – With Milk"),
  ...enrich(hotCoffeeBlack, "hot-coffee-black", "Hot Coffee (Black)"),
  ...enrich(hotChoco, "hot-choco", "Hot Choco"),
  ...enrich(hotTea, "hot-tea", "Hot Tea"),
  ...enrich(icyCoffee, "icy-coffee", "Icy Coffee"),
  ...enrich(icedTea, "iced-tea", "Iced Tea"),
  ...enrich(frappe, "frappe", "Frappé"),
  ...enrich(brainFreezers, "brain-freezers", "Brain Freezers"),
  ...enrich(mocktails, "mocktails", "Mocktails"),
  ...enrich(milkshakes, "shakes", "Shakes"),
  ...enrich(extras, "extras", "Extras"),
  // Food
  ...enrich(pizzas, "pizzas", "Pizzas (Veg)"),
  ...enrich(pasta, "pasta", "Pasta (Veg)"),
  ...enrich(burgers, "burgers", "Burgers (Veg)"),
  ...enrich(sandwiches, "sandwiches", "Sandwiches (Veg)"),
  ...enrich(frenchFries, "french-fries", "French Fries (Veg)"),
  ...enrich(shots, "shots", "Shots (Non-Alcoholic)"),
];

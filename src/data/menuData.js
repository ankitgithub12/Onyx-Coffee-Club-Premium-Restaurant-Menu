import { hotCoffee } from './hotCoffee';
import { hotCoffeeBlack } from './hotCoffeeBlack';
import { hotChoco } from './hotChoco';
import { hotTea } from './hotTea';
import { icyCoffee } from './icyCoffee';
import { icedTea } from './icedTea';
import { frappe } from './frappe';
import { brainFreezers } from './brainFreezers';
import { mocktails } from './mocktails';
import { milkshakes } from './milkshakes';
import { extras } from './extras';

// Helper: enrich items with categoryId and categoryName
const enrich = (items, categoryId, categoryName) =>
  items.map(item => ({ ...item, categoryId, categoryName }));

export const categories = [
  {
    id: "hot-coffee-milk",
    name: "Hot Coffee – With Milk",
    iconName: "FaCoffee",
    items: enrich(hotCoffee, "hot-coffee-milk", "Hot Coffee – With Milk"),
    column: "left",
    hasSizes: true
  },
  {
    id: "hot-coffee-black",
    name: "Hot Coffee (Black)",
    iconName: "FaCoffee",
    items: enrich(hotCoffeeBlack, "hot-coffee-black", "Hot Coffee (Black)"),
    column: "left",
    hasSizes: true
  },
  {
    id: "hot-choco",
    name: "Hot Choco",
    iconName: "FaMugHot",
    items: enrich(hotChoco, "hot-choco", "Hot Choco"),
    column: "left"
  },
  {
    id: "hot-tea",
    name: "Hot Tea",
    iconName: "GiTeapot",
    items: enrich(hotTea, "hot-tea", "Hot Tea"),
    column: "left"
  },
  {
    id: "icy-coffee",
    name: "Icy Coffee",
    iconName: "MdOutlineLocalCafe",
    items: enrich(icyCoffee, "icy-coffee", "Icy Coffee"),
    column: "center"
  },
  {
    id: "iced-tea",
    name: "Iced Tea",
    iconName: "GiIceCube",
    items: enrich(icedTea, "iced-tea", "Iced Tea"),
    column: "center"
  },
  {
    id: "frappe",
    name: "Frappé",
    iconName: "GiMilkCarton",
    items: enrich(frappe, "frappe", "Frappé"),
    column: "center"
  },
  {
    id: "brain-freezers",
    name: "Brain Freezers",
    iconName: "FaSnowflake",
    items: enrich(brainFreezers, "brain-freezers", "Brain Freezers"),
    column: "center"
  },
  {
    id: "mocktails",
    name: "Mocktails",
    iconName: "FaCocktail",
    items: enrich(mocktails, "mocktails", "Mocktails"),
    column: "right"
  },
  {
    id: "shakes",
    name: "Shakes",
    iconName: "GiMilkCarton",
    items: enrich(milkshakes, "shakes", "Shakes"),
    column: "right"
  },
  {
    id: "extras",
    name: "Extras",
    iconName: "FaPlusCircle",
    items: enrich(extras, "extras", "Extras"),
    column: "right"
  }
];

export const allItems = [
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
];

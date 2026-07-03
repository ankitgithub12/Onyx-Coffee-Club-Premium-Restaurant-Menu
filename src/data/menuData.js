import { hotCoffee } from './hotCoffee';
import { coldCoffee } from './coldCoffee';
import { milkshakes } from './milkshakes';
import { fries } from './fries';
import { sandwiches } from './sandwiches';
import { signatureDrinks } from './signatureDrinks';
import { softDrinks } from './softDrinks';
import { pizza } from './pizza';
import { pasta } from './pasta';
import { burgers } from './burgers';
import { shots } from './shots';

// Helper: enrich items with categoryId and categoryName
const enrich = (items, categoryId, categoryName) =>
  items.map(item => ({ ...item, categoryId, categoryName }));

export const categories = [
  {
    id: "hot-coffee",
    name: "Hot Coffee",
    iconName: "FaCoffee",
    items: enrich(hotCoffee, "hot-coffee", "Hot Coffee"),
    column: "left"
  },
  {
    id: "cold-coffee",
    name: "Cold Coffee",
    iconName: "MdOutlineLocalCafe",
    items: enrich(coldCoffee, "cold-coffee", "Cold Coffee"),
    column: "left"
  },
  {
    id: "milkshakes",
    name: "Milkshakes",
    iconName: "GiMilkCarton",
    items: enrich(milkshakes, "milkshakes", "Milkshakes"),
    column: "left"
  },
  {
    id: "french-fries",
    name: "French Fries",
    iconName: "GiFrenchFries",
    items: enrich(fries, "french-fries", "French Fries"),
    column: "left"
  },
  {
    id: "sandwiches",
    name: "Sandwiches",
    iconName: "GiSandwich",
    items: enrich(sandwiches, "sandwiches", "Sandwiches"),
    column: "left"
  },
  {
    id: "signature-drinks",
    name: "Signature Drinks",
    iconName: "BiDrink",
    items: enrich(signatureDrinks, "signature-drinks", "Signature Drinks"),
    column: "center"
  },
  {
    id: "soft-drinks",
    name: "Soft Drinks",
    iconName: "GiSodaCan",
    items: enrich(softDrinks, "soft-drinks", "Soft Drinks"),
    column: "center"
  },
  {
    id: "pizza",
    name: "Veg Pizza",
    iconName: "FaPizzaSlice",
    items: enrich(pizza, "pizza", "Veg Pizza"),
    column: "right"
  },
  {
    id: "pasta",
    name: "Pasta",
    iconName: "GiNoodles",
    items: enrich(pasta, "pasta", "Pasta"),
    column: "right"
  },
  {
    id: "burgers",
    name: "Burgers",
    iconName: "FaHamburger",
    items: enrich(burgers, "burgers", "Burgers"),
    column: "right"
  },
  {
    id: "shots",
    name: "Shots",
    iconName: "GiMartini",
    items: enrich(shots, "shots", "Shots"),
    column: "right"
  }
];

export const allItems = [
  ...enrich(hotCoffee, "hot-coffee", "Hot Coffee"),
  ...enrich(coldCoffee, "cold-coffee", "Cold Coffee"),
  ...enrich(milkshakes, "milkshakes", "Milkshakes"),
  ...enrich(fries, "french-fries", "French Fries"),
  ...enrich(sandwiches, "sandwiches", "Sandwiches"),
  ...enrich(signatureDrinks, "signature-drinks", "Signature Drinks"),
  ...enrich(softDrinks, "soft-drinks", "Soft Drinks"),
  ...enrich(pizza, "pizza", "Veg Pizza"),
  ...enrich(pasta, "pasta", "Pasta"),
  ...enrich(burgers, "burgers", "Burgers"),
  ...enrich(shots, "shots", "Shots"),
];

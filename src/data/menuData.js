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

export const categories = [
  {
    id: "hot-coffee",
    name: "Hot Coffee",
    iconName: "FaCoffee",
    items: hotCoffee,
    column: "left"
  },
  {
    id: "cold-coffee",
    name: "Cold Coffee",
    iconName: "MdOutlineLocalCafe",
    items: coldCoffee,
    column: "left"
  },
  {
    id: "milkshakes",
    name: "Milkshakes",
    iconName: "GiMilkCarton",
    items: milkshakes,
    column: "left"
  },
  {
    id: "french-fries",
    name: "French Fries",
    iconName: "GiFrenchFries",
    items: fries,
    column: "left"
  },
  {
    id: "sandwiches",
    name: "Sandwiches",
    iconName: "GiSandwich",
    items: sandwiches,
    column: "left"
  },
  {
    id: "signature-drinks",
    name: "Signature Drinks",
    iconName: "BiDrink", // Using BiDrink or FaCocktail
    items: signatureDrinks,
    column: "center"
  },
  {
    id: "soft-drinks",
    name: "Soft Drinks",
    iconName: "GiSodaCan",
    items: softDrinks,
    column: "center"
  },
  {
    id: "pizza",
    name: "Veg Pizza",
    iconName: "FaPizzaSlice",
    items: pizza,
    column: "right"
  },
  {
    id: "pasta",
    name: "Pasta",
    iconName: "GiNoodles",
    items: pasta,
    column: "right"
  },
  {
    id: "burgers",
    name: "Burgers",
    iconName: "FaHamburger",
    items: burgers,
    column: "right"
  },
  {
    id: "shots",
    name: "Shots",
    iconName: "GiMartini",
    items: shots,
    column: "right"
  }
];

export const allItems = [
  ...hotCoffee.map(item => ({ ...item, categoryId: "hot-coffee", categoryName: "Hot Coffee" })),
  ...coldCoffee.map(item => ({ ...item, categoryId: "cold-coffee", categoryName: "Cold Coffee" })),
  ...milkshakes.map(item => ({ ...item, categoryId: "milkshakes", categoryName: "Milkshakes" })),
  ...fries.map(item => ({ ...item, categoryId: "french-fries", categoryName: "French Fries" })),
  ...sandwiches.map(item => ({ ...item, categoryId: "sandwiches", categoryName: "Sandwiches" })),
  ...signatureDrinks.map(item => ({ ...item, categoryId: "signature-drinks", categoryName: "Signature Drinks" })),
  ...softDrinks.map(item => ({ ...item, categoryId: "soft-drinks", categoryName: "Soft Drinks" })),
  ...pizza.map(item => ({ ...item, categoryId: "pizza", categoryName: "Veg Pizza" })),
  ...pasta.map(item => ({ ...item, categoryId: "pasta", categoryName: "Pasta" })),
  ...burgers.map(item => ({ ...item, categoryId: "burgers", categoryName: "Burgers" })),
  ...shots.map(item => ({ ...item, categoryId: "shots", categoryName: "Shots" }))
];

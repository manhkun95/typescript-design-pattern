import Espresso from "./espresso";
import Beverage from "./beverage";
import DarkRoast from "./darkroast";
import Mocha from "./mocha";
import Whip from "./whip";
import HouseBlend from "./houseblend";
import Soy from "./soy";

let beverage: Beverage = new Espresso();

console.log(beverage.getDescription() + " $" + beverage.cost());

let beverage2: Beverage = new DarkRoast();
beverage2 = new Mocha(beverage2);
beverage2 = new Mocha(beverage2);
beverage2 = new Whip(beverage2);

console.log(beverage2.getDescription() + " $" + beverage2.cost());

let beverage3: Beverage = new HouseBlend();
beverage3 = new Soy(beverage3);
beverage3 = new Mocha(beverage3);
beverage3 = new Whip(beverage3);

console.log(beverage3.getDescription() + " $" + beverage3.cost());
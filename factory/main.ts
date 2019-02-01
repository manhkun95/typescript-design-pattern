import PizzaStore from "./pizzastore";
import NYPizzaStore from "./nypizzastore";
import { Pizza } from "./pizza";

const nyStore: PizzaStore = new NYPizzaStore();
console.log('===================================');

let pizza: Pizza = nyStore.orderPizza('cheese');

console.log('Order1:', pizza.getName());
console.log('===================================');

pizza = nyStore.orderPizza('clam');

console.log('Order2:', pizza.getName());

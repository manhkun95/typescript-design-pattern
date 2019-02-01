import { Pizza } from './pizza';

abstract class PizzaStore {
    orderPizza(type: string): Pizza {
        let pizza: Pizza;

        pizza = this.createPizza(type);

        pizza.prepare();
        pizza.bake();
        pizza.cut();
        pizza.box();

        return pizza;
    }

    abstract createPizza(type: string): Pizza;
}

export default PizzaStore;
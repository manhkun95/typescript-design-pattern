import PizzaStore from "./pizzastore";
import { Pizza, NYStyleCheesePizza, NYStyleVeggiePizza, NYStyleClamPizza, NYStylePepperoniPizza } from "./pizza";

class NYPizzaStore extends PizzaStore {
    createPizza(item: string): Pizza {
        switch (item) {
            case 'cheese':
                return new NYStyleCheesePizza();
            case 'veggie':
                return new NYStyleVeggiePizza();
            case 'clam':
                return new NYStyleClamPizza();
            case 'pepperoni':
                return new NYStylePepperoniPizza();
            default:
                return null;
        }


    }
}

export default NYPizzaStore;
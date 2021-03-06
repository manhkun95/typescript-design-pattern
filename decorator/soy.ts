import CondimentDecorator from "./condiments";
import Beverage from './beverage';

class Soy extends CondimentDecorator {
    beverage: Beverage;
    constructor(beverage: Beverage) {
        super();
        this.beverage = beverage;
    }

    getDescription(): string {
        return this.beverage.getDescription() + ", Soy";
    }

    cost(): number {
        return 0.20 + this.beverage.cost();
    }
}

export default Soy;
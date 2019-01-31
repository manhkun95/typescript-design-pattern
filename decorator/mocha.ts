import CondimentDecorator from "./condiments";
import Beverage from './beverage';

class Mocha extends CondimentDecorator {
    beverage: Beverage;
    constructor(beverage: Beverage) {
        super();
        this.beverage = beverage;
    }

    getDescription(): string {
        return this.beverage.getDescription() + ", Mocha";
    }

    cost(): number {
        return 0.50 + this.beverage.cost();
    }
}

export default Mocha;
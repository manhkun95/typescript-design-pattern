import CondimentDecorator from "./condiments";
import Beverage from './beverage';

class Whip extends CondimentDecorator {
    beverage: Beverage;
    constructor(beverage: Beverage) {
        super();
        this.beverage = beverage;
    }

    getDescription(): string {
        return this.beverage.getDescription() + ", Whip";
    }

    cost(): number {
        return 0.20 + this.beverage.cost();
    }
}

export default Whip;
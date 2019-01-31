import Beverage from "./beverage";

class Espresso extends Beverage {
    constructor() {
        super();
        this.description = "Espresso";
    }

    cost(): number {
        return 1.99;
    }
}

export default Espresso;
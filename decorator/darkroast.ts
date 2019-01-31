import Beverage from "./beverage";

class DarkRoast extends Beverage {
    constructor() {
        super();
        this.description = "DarkRoast Coffee";
    }
    cost(): number {
        return 0.82;
    }
}

export default DarkRoast;
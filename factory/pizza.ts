abstract class Pizza {
    name: string;
    dough: string;
    sauce: string;
    prepare(): void {
        console.log('Preparing ' + this.name);
        console.log('Tossing dough...');
        console.log('Adding sauce...');
        console.log('Adding toppings...');
    }
    bake(): void {
        console.log('Bake for 25 minutes at 350');
    }
    cut(): void {
        console.log('Cutting the pizza into diagonal slices');
    }
    box(): void {
        console.log('Place pizza in official PizzaStore box');
    }

    getName(): string {
        return this.name;
    }
}

class NYStyleCheesePizza extends Pizza {
    constructor() {
        super();
        this.name = "NY Style Sauce and Cheese Pizza";
        this.dough = "Thin Crust Dough";
        this.sauce = "Marinara Sauce";
    }
}


class NYStyleVeggiePizza extends Pizza {
    constructor() {
        super();
        this.name = "NY Style Sauce and Veggie Pizza";
        this.dough = "Thin Crust Dough";
        this.sauce = "Marinara Sauce";
    }
}


class NYStyleClamPizza extends Pizza {
    constructor() {
        super();
        this.name = "NY Style Sauce and Clam Pizza";
        this.dough = "Thin Crust Dough";
        this.sauce = "Marinara Sauce";
    }
}

class NYStylePepperoniPizza extends Pizza {
    constructor() {
        super();
        this.name = "NY Style Sauce and Pepperoni Pizza";
        this.dough = "Thin Crust Dough";
        this.sauce = "Marinara Sauce";
    }
}

export { Pizza, NYStyleCheesePizza, NYStyleClamPizza, NYStyleVeggiePizza, NYStylePepperoniPizza };



// public interface PizzaIngredientFactory {
//     public Dough createDough();
//     public Sauce createSauce();
//     public Cheese createCheese();
//     public Veggies[] createVeggies();
//     public pepperoni createPepperoni();
//     public Clams createClam();
// }

// public class NYPizzaIngredientFactory implements PizzaIngredientFactory {
//     public Dough createDough() {
//         return new ThinCrustDough();
//     }
//     public Sauce createSauce() {
//         return new MarinaraSauce();
//     }
//     public Cheese createCheese() {
//         return new ReggianoChesse();
//     }
//     public Veggies[] createVeggies() {
//         Veggies veggies[] = { new Gerlic(), new Onion, new Mushrom(), new Redpepper() };
//         return veggies;
//     }
//     public Pepperoni createPepperoni() {
//         return new SlicedPepperoni();
//     }
//     public Clams createClam() {
//         return new FreshClams();
//     }
// }
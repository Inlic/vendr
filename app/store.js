import VendingMachine from "./Models/VendMachine.js";

let _state = {
  /** @type {VendingMachine} */
  vendingmachine: new VendingMachine('Snacks','/assets/vending-machine.png',[{name: "doritos", amount: 5, price: 1.50},{name: "mountain dew", amount: 5, price: 1.00}],0, 0)
};

class Store {
  /**
   * Provides access to application state data
   */
  get State() {
    return _state;
  }
}

const STORE = new Store();
export default STORE;

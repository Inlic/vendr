import VendingMachine from "./Models/VendMachine.js";

let _state = {
  /** @type {VendingMachine} */
  vendingmachine: new VendingMachine('Snacks','/assets/vending-maching.png',[{name: "doritos",price: 1.50},{name: "mountain dew", price: 1.00}],0, 0)
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

import Chips from "../app/Models/Chips.js"
import Soda from "../app/Models/Soda.js"
import VendMachine from "./Models/VendMachine.js";

let _state = {
  /**@type {VendMachine} */
  vendingmachine: new VendMachine("/assets/vending-machine.png",0,0),
  
  /**@type {Chips} */
  chips: new Chips("Doritos","/assets/doritos.jpg",1.25,5),

  /**@type {Soda} */
  soda: new Soda("Mountain Dew","/assets/mtndew.jpg",1.00,5)

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

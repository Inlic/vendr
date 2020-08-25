import STORE from "../store.js"

class VendingMachineService{
  constructor(){
    console.log("Creating Vending Machine Service",STORE)
  }
}

const SERVICE = new VendingMachineService();
export default SERVICE
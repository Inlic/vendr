import VendingMachineController from "./Controllers/VendMachineController.js";

class App {
  vendingmachineController = new VendingMachineController();
}

window["app"] = new App();

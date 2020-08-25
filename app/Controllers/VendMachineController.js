import VendingMachineService from "../Services/VendMachineService.js"
import STORE from "../store.js"

//PRIVATE

function _drawVend(){
  let vend = STORE.State.vendingmachine
  document.getElementById('vending').innerHTML = vend.Template
}

//PUBLIC

export default class VendingMachineController {
   constructor(){
     _drawVend()
   }
   addQuarter(){
    VendingMachineService.addQuarter()
    _drawVend()
   }
   buyChips(){
    VendingMachineService.buyChips()
    _drawVend()
   }
   buySoda(){
    VendingMachineService.buySoda()
    _drawVend()
   }


}
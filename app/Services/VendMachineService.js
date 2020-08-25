import STORE from "../store.js"

class VendingMachineService{
  constructor(){
    console.log("Creating Vending Machine Service",STORE)
  }
  addQuarter(){
    let vendingmachine = STORE.State.vendingmachine
    vendingmachine.totalMoney += 0.25
    vendingmachine.transactionMoney += 0.25
  }

  buyChips(){
    let price = STORE.State.chips.cost
    let money = STORE.State.vendingmachine.transactionMoney
    if(money >= price){
      console.log(`Bought ${STORE.State.chips.name}`)
      STORE.State.vendingmachine.transactionMoney -= price
      STORE.State.chips.amount--
    } else {
    console.log("Not enough money")
    }
  }
  buySoda(){
    let price = STORE.State.soda.cost
    let money = STORE.State.vendingmachine.transactionMoney
    if(money >= price){
      console.log(`Bought ${STORE.State.soda.name}`)
      STORE.State.vendingmachine.transactionMoney -= price
      STORE.State.soda.amount--
    } else {
    console.log("Not enough money")
    }
  }
}

const SERVICE = new VendingMachineService();
export default SERVICE
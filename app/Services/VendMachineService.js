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

  makeChange(){
    let vendingmachine = STORE.State.vendingmachine
    let change = vendingmachine.transactionMoney
    vendingmachine.transactionMoney -= change
    vendingmachine.totalMoney -= change
    console.log("You refunded your money")
  }

  buyChips(){
    let price = STORE.State.chips.cost
    let money = STORE.State.vendingmachine.transactionMoney
    let amount = STORE.State.chips.amount
    if(amount == 0){
      return console.log("Out of Chips")
    }
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
    let amount = STORE.State.soda.amount
    if(amount == 0){
      return console.log("Out of Soda")
    }
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
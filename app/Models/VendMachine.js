export default class VendMachine{
/**
 * 
 * @param {String} img 
 * @param {Number} transactionMoney 
 * @param {Number} totalMoney 
 */

  constructor(
    img,
    transactionMoney,
    totalMoney
  ){
    this.img = img
    this.transactionMoney = transactionMoney
    this.totalMoney = totalMoney
  }

  get Template(){
    return `
    <div class="card offset-3">
      <img class="card-img-top" src="${this.img}" alt="">
      <div class="card-body">
          <h3>Total Money Earned By Vending Machine: ${this.totalMoney}</h3>
          <h3 class="card-title">Total Money Added this Transaction: ${this.transactionMoney}</h3>
          <button onclick="app.vendingmachineController.addQuarter()">Add Quarter</button>
          <button onclick="app.vendingmachineController.makeChange()">Refund</button>
      </div>
    </div>
    `
  }
}
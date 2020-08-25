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
    this.transactionMoney = 0
    this.totalMoney = 0
  }

  get Template(){
    return `
    <div class="card">
      <img class="card-img-top" src="${this.img}" alt="">
      <div class="card-body">
          <h4 class="card-title">${this.transactionMoney}</h4>
          <button onclick="app.vendingmachineController.addQuarter()">Add Quarter</button>
      </div>
    </div>
    `
  }
}
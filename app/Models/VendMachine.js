export default class VendMachine{
/**
 * 
 * @param {String} type 
 * @param {String} img 
 * @param {Array.<Object>} inventory 
 * @param {Number} transactionMoney 
 * @param {Number} totalMoney 
 */

  constructor(
    type,
    img,
    inventory,
    transactionMoney,
    totalMoney
  ){
    this.type = type
    this.img = img
    this.inventory = inventory
    this.transactionMoney = transactionMoney
    this.totalMoney = totalMoney
  }

  get Template(){
    return `
    <div class="card">
      <img class="card-img-top" src="${this.img}" alt="">
      <div class="card-body">
          <h4 class="card-title">${this.type}</h4>
          <button onclick="app.VendingMachineController.buy()">Buy</button>
      </div>
    </div>
    `
  }
}
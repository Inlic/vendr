export default class Chips{
  /**
   * 
   * @param {String} name 
   * @param {String} img 
   * @param {Number} cost 
   * @param {Number} amount 
   */
  
    constructor(
      name,
      img,
      cost,
      amount,
    ){
      this.name = name
      this.img = img
      this.cost = cost
      this.amount = amount
    }
  
    get Template(){
      return `
      <div class="card">
        <img class="card-img-top" src="${this.img}" alt="">
        <div class="card-body">
            <h4 class="card-title">${this.type}</h4>
            <button onclick="app.VendingMachineController.buy()">Buy</button>
            <p>Cost: ${this.cost}</p>
            <p>Amount: ${this.amount}</p>
        </div>
      </div>
      `
    }
  }
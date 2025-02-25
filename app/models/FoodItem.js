

export class FoodItem {
  constructor(name, price, imgURL) {
    this.name = name
    this.price = price
    this.image = imgURL
  }

  get itemCardHTMLTemplate() {
    return `
    <div class="col-4">
      <div class="mt-3 card ${this.name} rounded-3 d-flex justify-content-end food-item-card">
        <div>
          <img src="${this.image}">
        </div>
        <div class="bg-dark text-light text-capitalize d-flex justify-content-between align-items-center py-3 px-2 fs-6">
          <div>
            <p class="my-0">${this.name}</p>
            <span>$${this.price.toFixed(2)}</span>
          </div>
          <div>
            <button onclick="app.walletController.requestWalletUpdate(${this.price * -1})" class="btn btn-warning fw-bold text-light text-shadow" role="button" title="Click to buy a ${this.name}">Buy</button>
          </div>
        </div>
      </div>
    </div>
    `
  }
}
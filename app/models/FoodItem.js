

export class FoodItem {
  constructor(name, price, imgURL) {
    this.name = name
    this.price = price
    this.image = imgURL
  }

  get itemCardHTMLTemplate() {
    return `
    <div class="col-4">
      <div class="mt-3 card ${this.name} d-flex justify-content-end food-item-card">
        <div class="bg-dark text-light d-flex justify-content-between py-3 px-2 fs-4">
          <p class="my-0">${this.name}</p>
          <span>${this.price}</span>
        </div>
      </div>
    </div>
    `
  }
}
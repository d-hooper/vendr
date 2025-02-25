import { AppState } from "../AppState.js"


export class FoodItemsController {
  constructor() {
    AppState.on('wallet', this.drawFoodItems)
    console.log('Food items are under my control!')
    this.drawFoodItems()
  }


  drawFoodItems() {
  let foodItemsContent = ''
  const foodItems = AppState.foodItems
  const foodItemsSectionElem = document.getElementById('foodItemsSection')
  foodItems.forEach(foodItem => foodItemsContent += foodItem.itemCardHTMLTemplate)
  foodItemsSectionElem.innerHTML = foodItemsContent
  }
}
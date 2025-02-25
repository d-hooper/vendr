import { FoodItemsController } from "./controllers/FoodItemsController.js"


class App {

foodItemsController = new FoodItemsController()

}

window['app'] = new App()



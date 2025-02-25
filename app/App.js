import { FoodItemsController } from "./controllers/FoodItemsController.js"
import { WalletController } from "./controllers/WalletController.js"


class App {

foodItemsController = new FoodItemsController()

walletController = new WalletController()

}

window['app'] = new App()



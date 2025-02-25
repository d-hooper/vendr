import { walletService } from "../services/WalletService.js";


export class WalletController {

constructor() {
 console.log('Your money is mine!');
 
}

requestWalletUpdate() {
  console.log('Requesting wallet update');
  
  walletService.changeWalletAmount()
}

}
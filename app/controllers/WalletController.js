import { AppState } from "../AppState.js";
import { walletService } from "../services/WalletService.js";


export class WalletController {

constructor() {
 console.log('Your money is mine!');
 AppState.on('wallet', this.drawWallet)

}

requestWalletUpdate(amount) {
  console.log(amount);
  walletService.changeWalletAmount(amount)
}

drawWallet() {
  const walletElem = document.getElementById('wallet')
  const wallet = AppState.wallet.toFixed(2)
  walletElem.innerText = `$${wallet.toString()}`
}

}
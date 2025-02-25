import { AppState } from "../AppState.js";

class WalletService {
  
  changeWalletAmount(amount) {
    const wallet = AppState.wallet
    if (amount < 0) {
      if (wallet < (amount * -1)) {
        // window.alert('You do not have enough money for that!')
        return
      }
    }
    AppState.wallet += amount
  }

}

export const walletService = new WalletService()
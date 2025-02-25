import { AppState } from "../AppState.js";

class WalletService {
  
  changeWalletAmount(amount) {
    const wallet = AppState.wallet
    AppState.wallet += amount
  }

}

export const walletService = new WalletService()
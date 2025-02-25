import { AppState } from "../AppState.js";

class WalletService {
  

  constructor() {

  }

  changeWalletAmount() {
    console.log('Update wallet amount');
    AppState.wallet += 0.25
    console.log(AppState.wallet);
  }

}

export const walletService = new WalletService()
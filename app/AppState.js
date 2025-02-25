import { FoodItem } from './models/FoodItem.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  foodItems = [
    new FoodItem('panini', 5.00, 'https://images.unsplash.com/photo-1604467707321-70d5ac45adda?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'), 
    new FoodItem('falafel', 6.50, 'https://plus.unsplash.com/premium_photo-1663853051660-91bd9b822799?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmFsYWZlbHxlbnwwfHwwfHx8MA%3D%3D'), 
    new FoodItem('ramen', 5.75, 'https://images.unsplash.com/photo-1617421753170-46511a8d73fc?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'), 

  ]

}

export const AppState = createObservableProxy(new ObservableAppState())
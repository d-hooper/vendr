import { FoodItem } from './models/FoodItem.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  foodItems = [
    new FoodItem('panini', 5.00, 'https://images.unsplash.com/photo-1621852004158-f3bc188ace2d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'), 
    new FoodItem('falafel', 6.50, 'https://images.unsplash.com/photo-1547058881-aa0edd92aab3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'), 
    new FoodItem('ramen', 5.75, 'https://images.unsplash.com/photo-1618889482923-38250401a84e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'), 

  ]

  wallet = 0

}

export const AppState = createObservableProxy(new ObservableAppState())
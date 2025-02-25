import { FoodItem } from './models/FoodItem.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  foodItems = [
    new FoodItem('panini', 7.00, 'https://images.unsplash.com/photo-1621852004158-f3bc188ace2d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'),
    new FoodItem('falafel', 8.50, 'https://images.unsplash.com/photo-1547058881-aa0edd92aab3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'),
    new FoodItem('ramen', 6.75, 'https://images.unsplash.com/photo-1618889482923-38250401a84e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'),
    new FoodItem('smoothie', 2.50, 'https://images.unsplash.com/photo-1570696516188-ade861b84a49?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'),
    new FoodItem('lemonade', 2.00, 'https://images.unsplash.com/photo-1507281549113-040fcfef650e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'),
    new FoodItem('milkshake', 3.25, 'https://images.unsplash.com/photo-1541658016709-82535e94bc69?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'),
    new FoodItem('danish', 1.50, 'https://images.unsplash.com/photo-1571870251082-d965ef9e7530?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZGFuaXNoJTIwcGFzdHJ5fGVufDB8MHwwfHx8Mg%3D%3D'),
    new FoodItem('cinnamon roll', 2.25, 'https://images.unsplash.com/photo-1593872570782-6c6e7069e67e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'),
    new FoodItem('croissant', 1.00, 'https://images.unsplash.com/photo-1501721358449-1505ca840822?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'),

  ]

  wallet = 0

}

export const AppState = createObservableProxy(new ObservableAppState())
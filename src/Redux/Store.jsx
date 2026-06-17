import { legacy_createStore, compose, combineReducers } from 'redux'
import { reducer as Cart_Reducer } from './cart_reducer/Reducer'
import { reducer as Product_Reducer } from './data_reducer/Reducer'

// combining Reducer into single
const rootReducer = combineReducers({
  Product: Product_Reducer,
  Cart: Cart_Reducer,
})

// Redux DevTools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// Store
const store = legacy_createStore(rootReducer, composeEnhancers())

export { store }

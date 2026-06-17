import { legacy_createStore, compose, combineReducers } from 'redux'
import { reducer as Cart_Reducer } from './cart_reducer/Reducer'
import { reducer as Product_Reducer } from './cart_reducer/Reducer'

// combining Reducer into single
const root_reducers = combineReducers({
  Product:Product_Reducer,
  Cart:Cart_Reducer
})

// Redux DevTools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// Store
const store = legacy_createStore(root_reducers, composeEnhancers())

export { store }
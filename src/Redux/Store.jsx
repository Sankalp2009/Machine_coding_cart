import { legacy_createStore, compose } from 'redux'
import { reducer as Cart_Reducer } from './cart_reducer/Reducer'

// Redux DevTools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// Store
const store = legacy_createStore(Cart_Reducer, composeEnhancers())

export { store }

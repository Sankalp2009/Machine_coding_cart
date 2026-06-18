import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import { store } from './Redux/Store.jsx'
import { Provider } from 'react-redux'
import SearchContextProvider from './Context/SearchContext.jsx'
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Provider store={store}>
      <SearchContextProvider>
        <App />
      </SearchContextProvider>
    </Provider>
  </BrowserRouter>
)
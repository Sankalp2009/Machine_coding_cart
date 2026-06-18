import { createContext, useState} from 'react'
export const GlobalSearch = createContext();

function SearchContextProvider({ children }) {

  const [query, setQuery] = useState("");
  const Value = {query, setQuery}
  return (
    <GlobalSearch.Provider value={Value}>{children}</GlobalSearch.Provider>
  )
}

export default SearchContextProvider
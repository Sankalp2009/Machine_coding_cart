import { useContext } from 'react'
import { GlobalSearch } from '../Context/SearchContext'
function Search() {
  const { query, setQuery } = useContext(GlobalSearch)

  return (
    <div>
      <input
        type="text"
        name="search"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value)
        }}
        placeholder="Enter Search..."
      />
    </div>
  )
}

export default Search
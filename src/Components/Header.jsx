import { useState } from 'react'
import { ShoppingCart } from 'lucide-react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router'
import Search from './Search'
function Header() {
  const [query, setQuery] = useState('')

  const cart = useSelector((state) => state?.Cart?.cart_data)
  const length = cart?.length || 0

  return (
    <div className="Header">
      <Link to="/">
        <h3>Home</h3>
      </Link>

      <h3>About</h3>
      <Search query={query} setQuery={setQuery} />
      <div className="cart-wrapper">
        <Link to="/cart">
          <ShoppingCart className="cart-icon" />
        </Link>
        <span className="cart-count">{length}</span>
      </div>
    </div>
  )
}

export default Header

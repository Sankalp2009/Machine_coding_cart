import { ShoppingCart } from 'lucide-react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router'
import Search from './Search'
function Header() {

  const cart = useSelector((state) => state?.Cart?.cart_data)
  const length = cart?.length || 0

  return (
    <div className="Header">
      <Link to="/">
        <h3>Home</h3>
      </Link>

      <h3>About</h3>
      <Search />
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

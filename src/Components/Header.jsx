import { ShoppingCart } from 'lucide-react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router'

function Header() {
  const cart = useSelector((state) => state.cart_data)
  const length = cart?.length || 0

  return (
    <div className="Header">
      <h3>Home</h3>
      <h3>About</h3>
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
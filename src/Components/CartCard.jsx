import { Trash2 } from 'lucide-react'
import { Action_Type } from '../Redux/cart_reducer/Action'
import { useDispatch } from 'react-redux'
function CartCard({ product }) {
  const { id, title, image, price, category } = product
  const dispatch = useDispatch()
  // Handle add yo cart data
  const HandleClick = () => {
    dispatch({
      type: Action_Type.Remove_cart,
      payload: id,
    })
  }
  return (
    <div className="product-card">
      {/* Image */}

      <div className="product-image-wrapper">
        <img src={image} alt={title} className="product-image" />
      </div>

      {/* Content */}

      <div className="product-content">
        <h3 className="product-title">{title}</h3>

        <h3>
          <span style={{ color: 'red' }}>Category</span>: {category}
        </h3>

        <p className="product-price">₹ {Math.floor(price)}</p>

        <div>
          <Trash2 onClick={HandleClick} />
        </div>
      </div>
    </div>
  )
}

export default CartCard

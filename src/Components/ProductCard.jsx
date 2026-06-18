import { Action_Type } from '../Redux/cart_reducer/Action'
import { useDispatch } from 'react-redux'
function ProductCard({ product }) {
  const dispatch = useDispatch()

  const { title, image, price, category } = product

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

        <button
          className="add-cart-btn"
          onClick={() => {
            dispatch({
              type: Action_Type.Add_cart,
              payload: product,
            })
          }}
        >
          Add To Cart
        </button>
      </div>
    </div>
  )
}

export default ProductCard

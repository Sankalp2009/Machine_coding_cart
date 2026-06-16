import { useSelector } from 'react-redux'
import CartCard from '../Components/CartCard'
CartCard
function Cart() {
  const cart = useSelector((state) => state.cart_data) || [];

  const TotalPrice = cart.reduce((acc, {price})=>{
    return acc + Math.floor(price)
  }, 0)

  return (
    <div className="products-wrapper">
      <h1>total Price : {TotalPrice}</h1>
      <div className="products-grid">
        {cart?.map((el) => (
          <CartCard key={el.id} product={el} />
        ))}
      </div>
    </div>
  )
}

export default Cart
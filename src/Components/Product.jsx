import ProductCard from './ProductCard'

function Product({ data }) {
  
  return (
    <div>
      {
        data && data?.map(el => {
          <div key={el.id}>
           <ProductCard product={el} />
          </div>
        })
      }
    </div>
  )

}

export default Product
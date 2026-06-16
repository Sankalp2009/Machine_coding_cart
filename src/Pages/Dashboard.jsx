import { useState, useEffect } from 'react'
import { getApi } from '../utils/Api'
import Product from '../Components/Product'
function Dashboard() {
  // state container
  const [product, setProduct] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(null)

  // Api calling
  useEffect(() => {
    const FetchProduct = async () => {
      try {
        setIsLoading(true)
        let res = await getApi('https://fakestoreapi.com/products')
        let data = await res
        setProduct(data)
      } catch (error) {
        console.log(error)
        setIsError(error)
      } finally {
        setIsLoading(false)
      }
    }

    FetchProduct()
  }, [])
  return (
    <div>
      {isLoading && <h2>Loading</h2>}
      {!isLoading && isError && <h2>{isError}</h2>}
      <Product data={product} />
    </div>
  )
}

export default Dashboard
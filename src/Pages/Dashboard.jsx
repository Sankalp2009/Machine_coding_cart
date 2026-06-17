import { useEffect } from 'react'
import { getApi } from '../utils/Api'
import Product from '../Components/Product'
import { useDispatch, useSelector } from 'react-redux'
import { Action_Type } from '../Redux/data_reducer/Action'
function Dashboard() {
  const product = useSelector((state) => state?.Product)
  const dispatch = useDispatch()
  const { isLoading, isError, error, items } = product

  // Api calling
  useEffect(() => {
    const FetchProduct = async () => {
      try {
        dispatch({
          type: Action_Type.Get_Request,
        })
        let res = await getApi('https://fakestoreapi.com/products')
        let data = await res
        dispatch({
          type: Action_Type.Get_Success,
          payload: data,
        })
      } catch (error) {
        dispatch({
          type: Action_Type.Get_Failure,
          payload: error,
        })
      }
    }

    FetchProduct()
  }, [dispatch])
  return (
    <div>
      {isLoading && <h2>Loading</h2>}
      {!isLoading && isError && <h2>{error}</h2>}
      <Product data={items} />
    </div>
  )
}

export default Dashboard

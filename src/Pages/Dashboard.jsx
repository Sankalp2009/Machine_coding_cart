import React, { useState, useEffect } from 'react'
import { getApi } from '../utils/Api'

function Dashboard() {
  
  // state container
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(null);


  // Api calling
  useEffect(()=>{
    getApi('https://fakestoreapi.com/products')
    .then(data => console.log(data));
  },[])
  return (
    <div>Dashboard</div>
  )
}

export default Dashboard
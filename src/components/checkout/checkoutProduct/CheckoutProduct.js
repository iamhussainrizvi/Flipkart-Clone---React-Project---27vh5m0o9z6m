import React, { useEffect, useState } from 'react'
import "./checkoutProduct.css"
import Loading from "../../loading/Loading"
import { useLocation } from 'react-router-dom'
import CheckoutCart from '../checkoutCart/CheckoutCart'


function CheckoutProduct() {
  
  const path = useLocation();
  const [product,setProduct]= useState(null);
  const [isLoading,setIsLoading] = useState(true);

  useEffect(()=>{

    const productId = path.pathname.split("/")[1];

    fetch(`https://fakestoreapi.com/products/${productId}`)
    .then( res => res.json())
    .then ( (data)=> {
      setProduct({...data})
      setIsLoading(false);
    } )
  })



  return isLoading?<Loading/>:(
    <CheckoutCart product={[product]} />
  )
}

export default CheckoutProduct
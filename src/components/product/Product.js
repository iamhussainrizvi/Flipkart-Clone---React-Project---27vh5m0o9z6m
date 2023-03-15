import React, { useEffect, useState } from 'react'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import "./product.css"
import { Link } from 'react-router-dom'
import {updateCart} from "../mainPage/mainPageSlice"
import { useDispatch,useSelector } from 'react-redux'

function Product({imgSrc,uid, productName, productPrice,clicked }) {

const [addedToCart, setAddedToCart] = useState(false);
const dispatch = useDispatch();
const cart = useSelector( (state) => state.mainPageSlice.userCart );

// console.log("updateCart",updateCart);

useEffect( ()=> {

const x = cart.includes(uid);
setAddedToCart(x);

})


function updateUserCart(){

  setAddedToCart( prev => !prev);
  dispatch( updateCart(uid) )
  if(clicked){
    clicked();
  }

}


  return (
    <>
    <div className='product_container'>
      <Link to={"/"+uid} onClick={()=> console.log(uid)}>
        <div className="product_image_holder">
            <img src={imgSrc} alt=""  />
        </div>
      </Link>
        <div className="product_details">
            <div className='product_name'>
              <h1>{productName}</h1>
            </div>
            <div className='product_price'>
              <h3> 
                <CurrencyRupeeIcon sx={{fontSize:15}}/> { (Number(productPrice)*75).toFixed(0)} Only 
                <span className='discount'>Rs. { (Number(productPrice)*93.75).toFixed(0)}</span>
              </h3>
              <button style={{color:!addedToCart?"#fff":"#2874f0", backgroundColor:addedToCart?"#fff":"#2874f0", cursor:"hover"}} onClick={updateUserCart }>{addedToCart?"Remove from Cart":"Add to cart"}</button>
            </div>
        </div>
        
    </div>
    
    
    </>
  )
}

export default Product
import React, { useEffect, useState } from 'react'
import { useLocation, Link } from 'react-router-dom'

import { updateCart } from '../mainPage/mainPageSlice';
import { useDispatch, useSelector } from 'react-redux';

import "./productPage.css"

import StarIcon from '@mui/icons-material/Star';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import Loading from '../loading/Loading';

function ProductPage() {

  const [productData, setProductData] = useState(false);
  const [isLoading,setIsLoading] = useState(true);
  const [isItemInCart , setIsItemInCart] =useState( true );
  const location = useLocation(); 
  const id=Number(location.pathname.split("/")[1]);
  const cart = useSelector( (state) => state.mainPageSlice.userCart );
  const dispatch = useDispatch();
  
  
  useState( ()=>{

    const x = cart.includes(id);
    // console.log(x,"x")
    setIsItemInCart(x);


  })
  
  function handleCartClick(){
    console.log(cart);
    // console.log("checking",ckeckCartForItem())
    setIsItemInCart( prev => !prev);
    dispatch( updateCart(id) );
  }
  

  
  useEffect(()=>{
    
    
    fetch(`https://fakestoreapi.com/products/${id}`)
    .then( res => res.json())
    .then( data => { 
      setProductData(data)
      setIsLoading(false);
      // console.log("data",data); 
    });

  },[]);

  
  return !isLoading?
  (
    <>
      <div className='Product_Page_wrapper'>
        <div className="left_wrapper">
          <div className="product_image_holder">
            <img src={productData?.image } alt="" />
          </div>
          <div className='call_to_action'>
              <div className="cart">
                  <ShoppingCartIcon/>
                  <p onClick={handleCartClick}>{isItemInCart?"Remove from Cart":"Add to cart"}</p> 
              </div>
              <div className='buyNow' onClick={ console.log("clicked on product page")}>
                  <ElectricBoltIcon/>
                  <Link to={"/"+id+"/checkout"}> <p>Buy Now </p></Link> 
              </div>
            </div>

          </div>
          

        <div className='product_data_details'>
          <div className='product_title' >
            <h1 className='title'>{productData?.title} </h1>
            <div className="product_details">
              <div className='rating_wrapper'>
                <div className='rating'>
                  <h4> {productData?.rating?.rate} </h4>
                  <StarIcon/>
                </div>
              </div>
          
              <div className='reviews_wrapper'>
                <h4> {(Number(productData?.rating?.count)*(3*25)).toFixed(0)} Ratings & {productData?.rating?.count} Reviews </h4>
              </div>
            </div>
          </div>

          <div className="product_price_wrapper">
            <div className='price_wrapper'>
              <h1>
                <CurrencyRupeeIcon/>
                {Number(productData?.price)*75}
              </h1> 
            </div>

            <div className="discount_details">
              <p className='discounted_price'> <CurrencyRupeeIcon/> {(Number(productData?.price)*93.75).toFixed(0) } </p>
              <p className='discount_percentage'>25% off</p>
            </div>
          </div>
          
          <div className="product_description">
            <p className='description'>
              {productData?.description}
            </p>
          </div>
        
        
        
        </div>




      </div>
    </>
  ):(<div className="loader"><Loading/></div> )
}

export default ProductPage
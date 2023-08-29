import React, { useEffect, useState } from 'react'
import { useLocation, Link } from 'react-router-dom'

import { updateCart } from '../mainPage/mainPageSlice';
import { useDispatch, useSelector } from 'react-redux';

import "./productPage.css"

import Name from '../NameComponent/Name';
import Price from '../PriceComponenet/Price';

import StarIcon from '@mui/icons-material/Star';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import Loading from '../loading/Loading';
import Description from '../productDesccriptionComponent/Description';
import Discount from '../discountComponent/Discount';
import Picture from '../productImageComponent/Picture';
// import { Discount } from '@mui/icons-material';


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
    // console.log(cart);
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

  },[id]);

  
  return !isLoading?
  (
    <>
      <div className='Product_Page_wrapper'>
        <div className="left_wrapper">
          <Picture imageSrc={productData?.image} />
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
          <Name productName={productData?.title} rateCount={productData?.rating.count} rating={productData?.rating.rate}/>
          <Discount productPrice={productData?.price} />
          <Description productDescription={productData?.description} />
        </div>
      </div>
    </>
  ):(<div className="loader"><Loading/></div> )
}

export default ProductPage
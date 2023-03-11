import React, { useEffect, useState } from 'react'
import "./cart.css"
import  {useSelector} from "react-redux"
import { Link } from 'react-router-dom'
import Product from "../product/Product"
import Loading from '../loading/Loading'

function Cart() {

    const cartData = useSelector( (state) => state.mainPageSlice.userCart);
    const [isLoading,setIsLoading]=useState(true);
    const [productData, setProductData] = useState([]);
    const [grandTotal,setGrandTotal] = useState(0);
    const [totalDiscount,setTotalDiscount] = useState(0);
    const [updateOnclick, setUpdateOnClick] = useState(0);


    function clicked(){

        setUpdateOnClick( prev => prev+1);
    }


    async function fetchCartDatafromServer(){

        const cartArr = await Promise.all( cartData.map( async (productId) => {

            const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
            const data = await response.json();
            // console.log("data",data);
            return data;    

        }))

        return cartArr;
    }

    useEffect( ()=> {

        async function getData(){

           const cartArr = await fetchCartDatafromServer()
           setProductData([...cartArr]);
           const totalPrice = cartArr.reduce( (total, {price}) => total+Number(price)*93.75,0 )
           setGrandTotal(totalPrice);
           
           const totalDiscount = cartArr.reduce( (total,{price}) => total+(Number(price)*18.75),0 );
           setTotalDiscount(totalDiscount)
           setIsLoading(false);
        } 

        getData();

    },[updateOnclick]);

    useEffect(()=>{

        // console.log("productData",productData);
    })
    

    
    
  return isLoading?(<Loading/>):
  productData.length>0?(
     <>
    <div className='cart_container'>
        
        <div className='cart_products_container'>
        {productData?.map( ({id,image,price,title}) => (
            <div className='cart_product_wrapper' key={id}>
                 <Product
                    
                    imgSrc={image} 
                    uid={id}
                    productName={title}
                    productPrice={price}
                    clicked={clicked}
                    /> 
            </div>))}
        </div>

        <div className='bill_details_wrapper'>

            <div className='cart_details'>
                <div className='heading'><p>Price Details</p></div>

                <div className="price_wrapper"> 
                    <span className='items_price'>Price ({productData?.length} {productData?.length>1?"Items":"Item"})</span>
                    <span className='Total_price'>Rs. {(grandTotal).toFixed(2)}</span>
                </div>
        
                <div className="discount_wrapper">
                    <span className='items_discount'>Discount (25%)</span>
                    <span className='Total_discount'>Rs. - {(totalDiscount).toFixed(2)}</span>
                </div>

                <div className="deliver_charges_wrapper">
                    <span className='deliver_charges'>Delivery Charges</span>
                    <span className='deliver_amount'> Free Delivery</span>
                </div>


                <div className="payable_amount_wrapper">
                    <span className='items_discount'>Total Payable</span>
                    <span className='Total_discount'>Rs. {(grandTotal - totalDiscount ).toFixed(2)}</span>
                </div>
            </div>

            <div className='checkout_button'>
                <Link to="/checkout">
                    <button className='checkout_btn'>Proceed to payment</button>
                </Link>
            </div>

        </div>
    </div>
    </>
  ):(<> <div className="empty_cart"> <p>Your cart is currently empty. <Link to="/"><span> Go to homepage</span></Link> to add items to the cart</p></div></>)
}

export default Cart
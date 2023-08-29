import React, { useEffect, useState } from 'react'
import "./checkoutCart.css"
import { useSelector } from 'react-redux'
import Product from '../../product/Product';
import { Link } from 'react-router-dom';
// import "./checkoutCart.css"

function CheckoutCart({product}) {

  const cart = useSelector( state => state.mainPageSlice.userCart);
  const [productData,setProductData] =useState([]);
  const [totalAmountPayable, setTotalAmoutPayable]= useState(0);
  const [deliveryMode, setDeliverMode] = useState(1);

  async function fetchCartDatafromServer(){

    const dataArr = await Promise.all( cart.map( async (productId) => {
      const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
      const data = await response.json();
      // console.log("data",data);
      return data;

    }))
    return dataArr
  }

  function updateDeliveryMode(e){
    const selectedMode = e.target.value;
    setDeliverMode(selectedMode);
    console.log("delivery mode update to ,", selectedMode);
  }

  async function getProductData(){
    const products = await fetchCartDatafromServer();
    console.log("products in cart", products)
    setProductData([...products]);
    const totalPayableAmount = products.reduce( (total, {price}) => total+Number(price)*75,0 );
    setTotalAmoutPayable(totalPayableAmount);
  
  }
  
  useEffect( ()=> {
    
    if(!product){
      getProductData();
      console.log("calling getProduct");
    }else{
      setProductData([product]);
      const totalPayableAmount = product.reduce( (total, {price}) => total+Number(price)*75,0 );
      setTotalAmoutPayable(totalPayableAmount);
    
    }
    
  },[])

  // {imgSrc,uid, productName, productPrice,clicked }

  return (
    <div className='checkout_cart_wrapper'>
      <div className="checkout_cart_container">
        {/* {productData?.map( ({image,id,price,title,rating}) => <Product key={id} imgSrc={image} productName={title} productPrice={price}   /> )} */}
      </div>

      <div className="checkout_cta">
        <div className="order_Summary">
          <h2>Order Summary</h2>
        </div>

        <div className="totalPayableAmount"> 
          <span>Total Amount ({productData.length} {productData.length>1?"Items":"Item"} )</span>
          <span>Rs. {totalAmountPayable.toFixed(2)}</span>
        </div>
        
        <div className="payment_options">
          <label htmlFor="select_payment_method">Select Payment Method</label>
          <select name="" id="select_payment_method" onChange={updateDeliveryMode}>
            <option value="1">Cash On Delivery</option>
            <option value="2">Credit Card</option>
            <option value="3">Debit Card</option>
            <option value="4">UPI</option>
          </select>
        </div>
        <div className="payment_method_details">
          {/* {deliveryMode ==1 && <p>COD</p>} */}
          {deliveryMode == 2 && <GetCardDetails cardType="Credit"/>}
          {deliveryMode ==3 && <GetCardDetails cardType="Debit"/>}
          {/* {deliveryMode==4 && <p>UPI</p> } */}
        </div>
        <div className="delivery_address">
          <label htmlFor="delivery_address">Deliver to</label>
          <input type="text" placeholder='Enter Delivery address'  id='delivery_address' />
        </div>
        <div className="complete_payment">
          {!product && <button> <Link to="/cart"> Update Cart </Link></button>}
          <button onClick={()=> alert("your Order has been placed sucessfully")} > Pay Securely</button>
        </div>
      </div>



    </div>
  )
}

export default CheckoutCart






function GetCardDetails({cardType}){

  return(
   <>
    <div className="card_details_wrapper">
      <div className="card_info">
        <h4>please fill the {cardType} card details</h4>
      </div>
      <div className="name_details">
        <label htmlFor="name_on_card">Name on the {cardType} Card</label>
        <input type="text" placeholder='John Doe' id='name_on_card' />
      </div>

      <div className="card_number_details">
      <label htmlFor="card_number">Enter {cardType} card number</label>
        <input type="number" id='card_number' placeholder={`${cardType} card number`} />
      </div>

      <div className='card_expiry_details'>
      <label htmlFor="expiry_details">{cardType} Card Valid till</label> <br />
        <input type="date" id='expiry_details' placeholder='Expiry data' />

      </div>
      
      <div className="cvv_details">
        <label htmlFor="cvv_details"> Enter your CVV</label>
        <br />
        <input type="number"  id='cvv_details' placeholder='007'/>
      </div>

    </div>
   </>   
    
  )

}
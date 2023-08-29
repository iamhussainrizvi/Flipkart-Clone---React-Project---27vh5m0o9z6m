import React from 'react'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';


function Discount({productPrice}) {
  return (
    <>
        <div className="product_price_wrapper">
            {/* <Price price ={productData?.price}/> */}

            <div className="discount_details">
              <p className='discounted_price'> <CurrencyRupeeIcon/> {(Number(productPrice)*93.75).toFixed(0) } </p>
              <p className='discount_percentage'>25% off</p>
            </div>
          </div>
    </>
  )
}

export default Discount
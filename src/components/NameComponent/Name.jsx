import React from 'react'
import Rating from '../ratingComponent/Rating'
import StarIcon from '@mui/icons-material/Star';
import '../NameComponent/name.css'


function  Name({productName, rateCount, rating}) {
  return (
    <>
        <div className='product_title' >
            <h1 className='title'>{productName} </h1>
            <div className="product_details">
              <div className='rating_wrapper'>
                <div className='rating'>
                  <h4> {rating} </h4>
                  <StarIcon/>
                </div>
              </div>
              <Rating ratingCount={rateCount} />  
            </div>
          </div>
    </>
  )
}

export default Name
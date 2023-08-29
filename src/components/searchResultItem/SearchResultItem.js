import React from 'react'
import './searchResultItem.css'
import { Link } from 'react-router-dom';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import StarIcon from '@mui/icons-material/Star';


function SearchResultItem({imgSrc,uid, productName, productPrice, category, rating,review ,clearSearchList }) {



    return (
        <>
        <div >

          <div className="container">
            <Link to={"/"+`${uid}`} onClick={()=> clearSearchList()} >
                <div className="image-container">
                    <img src={imgSrc}/>
                </div>
            </Link>
            <div className="details-container">
              <h3 className='product-name'>{productName}</h3>
              <div className='product-description'>Product Category: {category}  </div>
              
                <div className="product_price_wrapper">
                    <div className='price_wrapper'>
                        <h1>
                            <CurrencyRupeeIcon sx={{fontSize:20}} />
                            {Number(productPrice)*75}
                        </h1> 
                    </div>
                </div>
                <div className='product-details-container'>

                    <div className='rating_wrapper'>
                        <div className='rating'>
                            <h4> {rating} </h4>
                            <StarIcon sx={{fontSize:20}}/>
                        </div>
                    </div>

                        <div className='reviews_wrapper'>
                            <h4> {(Number(review)*(3*25)).toFixed(0)} Ratings & {review} Reviews </h4>
                        </div>
                </div>
                
          </div>
        </div>
        </div>
        </>
      );
}

export default SearchResultItem


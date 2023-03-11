import React, { useEffect, useState } from 'react'
import "./productHolder.css";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Loading from '../loading/Loading';

// importing components
import Product from '../product/Product';

function ProductHolder({text, productDataArray, category }) {


  return (
    <div className='product_holder'>
        <div className="generic_image_container" id='generic_image_container'>
            <div className="text_holder">
                <h2>{text}</h2>
                <div className="text_holder_button">
                    <button>VIEW ALL</button>
                </div>
            </div>
        </div>
        <div className='products_container'>
            {
                productDataArray?productDataArray?.map( ({image,id,price,title,rating}) => <Product key={id} imgSrc={image} productCategory={category} uid={id} productName={title} productPrice={price} />):<Loading/>

                         
            }
            
        </div>

        <div className='slider_btn_left slider_btn slider_btn_left'  style={{display:"none"}}  >
            <KeyboardArrowLeftIcon/>
        </div>
        <div className='slider_btn_right slider_btn slider_btn_right'   >
            <KeyboardArrowRightIcon/>
        </div>
        
    </div>
  )
}

export default ProductHolder
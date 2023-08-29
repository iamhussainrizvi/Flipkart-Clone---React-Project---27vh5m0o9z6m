import React, { useEffect, useState } from 'react'
import "./productHolder.css";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Loading from '../loading/Loading';
import { Link } from 'react-router-dom';


// importing components
import Product from '../product/Product';

function ProductHolder({text, productDataArray, category }) {

    const gradients = ['#4158D0','#C850C0','#8EC5FC','#E0C3FC','#FC00FF']

    const style = {
    "background-image":`linear-gradient(45deg, ${gradients[Math.floor(Math.random()*5)]} 0%, ${gradients[Math.ceil(Math.random()*5)]} 50%, ${gradients[Math.ceil(Math.random()*5)]} 100% )`,
    // 'background-color':"red"

    }


  return (
    <div className='product_holder'>
        <div className="generic_image_container" style={style} id='generic_image_container'>
            <div className="text_holder">
                <h2>{text}</h2>
                <div className="text_holder_button">
                    <button><Link to={`category/${category}`}>VIEW ALL</Link></button>
                </div>
            </div>
        </div>
        <div className='products_container'>
            {
                productDataArray?productDataArray.map( ({image,id,price,title,rating}) => <Product key={id} imgSrc={image} productCategory={category} uid={id} productName={title} productPrice={price} />):<Loading/>

                         
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
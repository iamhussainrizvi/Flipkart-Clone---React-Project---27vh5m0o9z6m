import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Loading from '../loading/Loading'
import { Link } from 'react-router-dom'
import "./categoryPage.css"
import Picture from '../productImageComponent/Picture'
import Description from '../productDesccriptionComponent/Description'
import Name from '../NameComponent/Name'
import Discount from '../discountComponent/Discount'
import Price from '../PriceComponenet/Price'

function CategoryPage() {

const [isLoading,setIsLoading]=useState(true);
const [productList, setProductList]= useState(null);
const location = useLocation();
const path = location.pathname;
const category = path.split("/")[2];


  useEffect(()=>{

    console.log(path.split("/"));
    console.log(category);

    setIsLoading(true);
    if(category ==='mostPopular'){

      fetch('https://fakestoreapi.com/products')
      .then( res => res.json())
      .then(data => {

        const categories = Object.keys(data);

        data.map()

      })

    }
    if(category==='bestSellers'){

    }
    else{

      fetch(`https://fakestoreapi.com/products/category/${category}`)
      .then( res => res.json())
      .then (data => {
        setProductList(data)
        // console.log(data);
        setIsLoading(false);
      } ) 
    }

  },[category])


  return isLoading? ( <Loading/> ):( <>

    <div className="content_wrapper">
      
      

    {productList.map( ({image,id,price,title,rating, description}) => (<div className='category-page-product-container' id='category-page-product-container'>
    <div>
    <Link to={`/${id}`}>
     <Picture imageSrc={image} />

    </Link>
    </div>
    <div>
     <Link to={`/${id}`}>
     <Name productName={title} rateCount={rating.count} rating={rating.rate} />
     <div className='price-discount-wrapper'>
      <Price price={price}/>
      <Discount productPrice={price}/>
     </div>
     </Link> 
     
     <Description productDescription={description}/>
     
    </div>
     
      </div> )) }

    </div>


  </>)
}

export default CategoryPage
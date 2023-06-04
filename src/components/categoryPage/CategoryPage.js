import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Loading from '../loading/Loading'
import Product from '../product/Product'

import "./categoryPage.css"

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
    fetch(`https://fakestoreapi.com/products/category/${category}`)
    .then( res => res.json())
    .then (data => {
      setProductList(data)
      // console.log(data);
      setIsLoading(false);
    } ) 

  },[category])


  return isLoading? ( <Loading/> ):( <>

    <div className="content_wrapper">

    {productList.map( ({image,id,price,title,rating, description}) => <Product key={id} imgSrc={image} productCategory={category} uid={id} productName={title} productPrice={price} description={description} /> )}

    </div>


  </>)
}

export default CategoryPage
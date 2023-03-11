import React,{useEffect,useState} from 'react'

import Caraousel from '../body/caraousel/Caraousel';
import ProductHolder from '../productHolder/ProductHolder';
import Footer from '../footer/Footer';


function MainPage() {

    const [productCatalouge, setProductCatalouge] = useState({});

  
    useEffect(()=>{
    
     async function fetchingData(){
    
        await fetchData("electronics");
        await fetchData("jewelery");
        await fetchData("men's clothing");
        await fetchData("women's clothing");
        }
        fetchingData();
    
    },[]);
    

  
  
    async function fetchData(category){
  
      const res = await fetch(`https://fakestoreapi.com/products/category/${category}`);
      const data = await res.json();
      // console.log("data",data);
      
      setProductCatalouge( prev => {
          return {
              ...prev,
              [category]: [...data]
          }
      
      })
      
      }




  return (
    <>

  <main>
      <div className="body_container">
      <Caraousel/>
      <ProductHolder  text="Best of Electronics"   productDataArray={productCatalouge.electronics} />
      <ProductHolder text="Men's Clothing"  productDataArray={productCatalouge.["men's clothing"]} />
      <ProductHolder text="Women's Clothing"  productDataArray={productCatalouge.["women's clothing"]} />
      <ProductHolder text="Women's Jwellery"  productDataArray={productCatalouge.jewelery} />
      </div>
    </main>
    <Footer/>

    </>
  )
}

export default MainPage


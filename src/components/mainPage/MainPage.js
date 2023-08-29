import React,{useEffect,useState} from 'react'

import Caraousel from '../body/caraousel/Caraousel';
import ProductHolder from '../productHolder/ProductHolder';
import { ProductFilter } from '../productFilter/ProductFilter';
import Footer from '../footer/Footer';


function MainPage() {

    const [productCatalouge, setProductCatalouge] = useState({mostPopular:[], bestSellers:[]});
    const [showProductCatalouge, setShowProductCatalouge] = useState({ 'electronics': true, 'jwellery':true,'menclothing':true,'womenclothing':true })

  
    useEffect(()=>{
    
     async function fetchingData(){
    
        await fetchData("electronics");
        await fetchData("jewelery");
        await fetchData("men's clothing");
        await fetchData("women's clothing");

        }
        fetchingData();
    
    },[]);

    function filterCategory(category,value){

      // console.log("filter car called",category,value);
      // console.log(showProductCatalouge);
      setShowProductCatalouge( prev => ({...prev, [category]:value}))
    }

    

  
  
    async function fetchData(category){
  
      const res = await fetch(`https://fakestoreapi.com/products/category/${category}`);
      const data = await res.json();
      console.log("data",data);
      
      setProductCatalouge( prev => {
          return {
              ...prev,
              [category]: [...data],
              mostPopular: [...prev.mostPopular,...data.filter( productObj => productObj.rating.rate > 4.5)],
              bestSellers: [...prev.bestSellers, ...data.filter(productObj => productObj.rating.count > 200)]
          }
      })
      
      }

      function sortByPrice(isAscending){
        
        setProductCatalouge( (prev) => {
          const productCategories = Object.keys(prev);
          // console.log("productCategories", productCategories);
          // console.log("productCategories", Array.isArray(productCategories));
          // console.log();
          if(isAscending){
          productCategories.map( category => prev[category].sort( (objA , objB) => objA.price - objB.price ) );

          }else{
            // prev["electronics"].length =2;
            productCategories.map( category => prev[category].sort( (objA , objB) => objB.price - objA.price ) );
            // console.log("length =2");
          }
          return {...prev};
          
        });  
      }

      function sortByPopularity(){

        setProductCatalouge( (prev) => {
          // console.log("prev",prev);
          const productCategories = Object.keys(prev);
          // console.log(productCategories);
          productCategories.map( category => (prev[category].sort( (objA, objB)=> objB.rating.count - objA.rating.count  )));

          return {...prev};

        })
      }

      function sortByRating(){

        setProductCatalouge( (prev) => {
          const productCategories = Object.keys(prev);
          // console.log(productCategories);
          productCategories.map( category => (prev[category].sort( (objA, objB)=> objB.rating.rate - objA.rating.rate  )));

          return {...prev};

        })
      }



  return (
    <>

  <main>
      <div className="body_container">
      <Caraousel/>
      <ProductFilter showProductCatalouge={showProductCatalouge} sortByPrice={sortByPrice} sortByPopularity={sortByPopularity} sortByRating={sortByRating} filterCategory={filterCategory}/>
      <ProductHolder text="Most Popular" productDataArray={productCatalouge.mostPopular} category='mostPopular' />
      {showProductCatalouge.electronics && <ProductHolder  text="Best of Electronics"   productDataArray={productCatalouge.electronics} category="electronics" />}
      {showProductCatalouge.menclothing && <ProductHolder text="Men's Clothing"  productDataArray={productCatalouge["men's clothing"]} category="men's clothing" />}
      {showProductCatalouge.womenclothing && <ProductHolder text="Women's Clothing"  productDataArray={productCatalouge["women's clothing"]} category="women's clothing" />}
      {showProductCatalouge.jwellery && <ProductHolder text="Women's Jwellery"  productDataArray={productCatalouge.jewelery} category="jewelery" />}
      <ProductHolder text="Best Sellers" productDataArray={productCatalouge.bestSellers} category='bestSellers' />
      </div>
    </main>
    <Footer/>

    </>
  )
}

export default MainPage


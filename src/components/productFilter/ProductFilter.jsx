import React from 'react'

import '../productFilter/productFilter.css'

export const ProductFilter = ({showProductCatalouge,sortByPrice, filterCategory, sortByPopularity, sortByRating}) => {


    function handleCategoryChange(e){

        console.log(e.target.id , e.target.checked);
        filterCategory(e.target.id,e.target.checked);
    }


  return (
    <>
    <div className='filter-container'>

    <div className='filter-wrapper'>

      <div>Filter products by</div>

      <div className='price-sort-container'>

          <p><span>Price</span></p>
          <label htmlFor='price'>
          <label htmlFor="ascending">Low to high</label>
          <input type="radio" name='price' id="ascending" onClick={()=> sortByPrice(true) } />
          <label htmlFor="descending">High to low</label>
          <input type="radio" id='descending' name='price' onClick={()=> sortByPrice(false) } />
          </label>
      </div>
    <div>
      <label htmlFor="rating">Highest rated</label>
      <input type='radio' id='rating' name='pop' onClick={()=>sortByRating()} />
      <label htmlFor="popularity">Most popular</label>
      <input type="radio"  id='popularity' name='pop' onClick={()=> sortByPopularity()} />
    </div>

    <div className='categories-sort-container'>
        <label htmlFor="">Product Categories</label>
        
        
        <div name='cat'>

        <label htmlFor="electronics">electronics</label>
        <input type="checkbox" checked={showProductCatalouge.electronics}  id='electronics' onChange={(e)=> handleCategoryChange(e)} />

        <label htmlFor="womenclothing">women's clothing</label>
        <input type="checkbox"  id='womenclothing' checked={showProductCatalouge.womenclothing}  onChange={(e)=> handleCategoryChange(e)}/>

        <label htmlFor="menclothing">men's clothing</label>
        <input type="checkbox"  id='menclothing' checked={showProductCatalouge.menclothing}  onChange={(e)=> handleCategoryChange(e)}/>

        <label htmlFor="jwellery">jwellery</label>
        <input type="checkbox"  id='jwellery' checked={showProductCatalouge.jwellery}  onChange={(e)=> handleCategoryChange(e)}/>

        </div>

    </div>

        {/* <button onClick={ ()=> sortByPrice(true) }> sort ascneding</button> */}
    </div>
    </div>
    </>
  )
}

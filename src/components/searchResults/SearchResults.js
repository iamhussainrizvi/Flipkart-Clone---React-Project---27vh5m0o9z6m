import '../searchResults/searchResults.css'
import React,{useState,useEffect} from 'react'
// import Product from '../product/Product'
import SearchResultItem from '../searchResultItem/SearchResultItem';

function SearchResults({searchList, clearSearchList}) {

  // searchList.length =5;

  const [list,setList] = useState([...searchList]);

  console.log(searchList)

  useEffect(() => {
    setList( [...searchList])
      
  }, [searchList])

  

  
  // console.log("in the comp",searchList);
  return (<>
  <div className='search-results-modal' onMouseLeave={()=> clearSearchList()}>

{list?.map( ({image,id, title, price, category, rating}) => <SearchResultItem 
  key={id} 
  uid={id} 
  productPrice={price}
  imgSrc={image}  
  productName={title}
  category={category}
  rating={rating.rate} 
  review={rating.count} 
  clearSearchList={clearSearchList} 
/>)}
{/* <p>this  is search list</p> */}
  </div>
  
  </>)
      
      
    
    // {imgSrc,uid, productName, productPrice,clicked, description }

}

export default SearchResults
import React from 'react'
import "./loading.css"

function  Loading() {
    console.log("loading container");
  return (
    
      <div className="loading_container">

        <div className='lds-ring'> 
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
      </div>
    
        
    
  )
}

export default Loading
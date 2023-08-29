import React from 'react'
import '../unavailableProducts/unavailable.css'
import { Link } from 'react-router-dom';

function UnavailableProducts() {

    const styles={
        "color":"green",
        'margin-top':'20px',
        'font-family':'helvatica',
        'font-weight':'200',
        'font-size':'1.5rem',
        // 'text-decoration':'underline'
    };



  return (
    <div className='Unavailable-Product-Page-wrapper'>
    
    <div className='unavailable_container'>
        <div className='text'><h1 style={styles}>Sorry! We are currently out of Stock. <br /> we regrett the inconvinience caused</h1></div>      
        <div className='link_btn'><Link to='/'><span>Go to Home</span></Link></div>
    </div>
    
    </div>
  )
}

export default UnavailableProducts
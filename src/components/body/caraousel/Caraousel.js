import React, { useEffect, useRef, useState } from 'react'
import "./caraousel.css"
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const imgSrcArr = [
    "https://rukminim1.flixcart.com/fk-p-flap/3376/560/image/9a8a82392d7b8dd9.jpg?q=50",
    "https://rukminim1.flixcart.com/fk-p-flap/3376/560/image/ed9f1334b107b7a1.jpg?q=50",
    "https://rukminim1.flixcart.com/fk-p-flap/3376/560/image/1f5e4b03346c32f7.jpg?q=50",
    "https://rukminim1.flixcart.com/fk-p-flap/3376/560/image/9f40f4bff3e44a23.jpg?q=50",
    "https://rukminim1.flixcart.com/flap/1688/280/image/e0c3c470bc6c68d7.jpg?q=50",
    "https://rukminim1.flixcart.com/fk-p-flap/1688/280/image/6cc23d7687b2f62c.jpeg?q=50",
    "https://rukminim1.flixcart.com/fk-p-flap/1688/280/image/896ed9280bc59601.jpg?q=50"
]

function Caraousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(()=>{
    const timeInterval = setInterval(() => {        
        setCurrentIndex( prev => ( (prev+1)%imgSrcArr.length ));
    },4000);

    return ()=> clearInterval(timeInterval);
  },[]);
  
    function manualScroll(toRight){
        if(toRight){
            setCurrentIndex( prevIndex => ((prevIndex+1)%imgSrcArr.length))

        }else{
            setCurrentIndex( prevIndex => ((prevIndex-1)%imgSrcArr.length)>=0?(prevIndex-1)%imgSrcArr.length:imgSrcArr.length-1)
        }
    }

    const scrollLeft = ()=>{ manualScroll(false)};
    const scrollRight = () => { manualScroll(true)};
  
    return (
    <div className='caraousel' >
        <div className='slider_btn_left slider_btn'  onClick={scrollLeft}  >
        <KeyboardArrowLeftIcon/>
        </div>
        <div className='slider_btn_right slider_btn' onClick={scrollRight}  >
        <KeyboardArrowRightIcon/>
        </div>
        <img src={imgSrcArr[currentIndex]} alt="" className="animate" />
        
    </div>
  )
}

export default Caraousel
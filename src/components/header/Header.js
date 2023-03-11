import React, { useEffect } from 'react'
import Navbar from '../navbar/Navbar'
import ItemCategory from '../itemCategory/ItemCategory'
import { Outlet } from 'react-router-dom'

function Header() {

  useEffect(()=> {
    var link = document.querySelector("link[rel~='icon']");
    if (!link) {
        link = document.createElement('link');
        link.rel = 'icon';
        document.head.appendChild(link);
    }
    link.href = 'https://cdn2.iconfinder.com/data/icons/social-icons-color/512/flipkart-512.png';

    document.title = "Flipkart.com | Buy"

  },[])


  return (
    <>
        <Navbar/>
        <ItemCategory/>
        <Outlet/>
    </>
  )
}

export default Header
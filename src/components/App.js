import React,{useEffect,useState} from 'react'
import ProductPage from './productpage/ProductPage';
import Cart from './cart/Cart';
import CheckoutCart from './checkout/checkoutCart/CheckoutCart';
import CheckoutProduct from './checkout/checkoutProduct/CheckoutProduct';

import '../styles/App.css';
import "../styles/mobile.css"

import MainPage from './mainPage/MainPage';
import Header from './header/Header';
import { createBrowserRouter, createRoutesFromElements, Route , RouterProvider } from 'react-router-dom';
import CategoryPage from './categoryPage/CategoryPage';
import UnavailableProducts from './unavailableProducts/UnavailableProducts';


const router = createBrowserRouter(
  createRoutesFromElements(
  <>
    <Route path="/" element={<Header/>} > 
      <Route index element={<MainPage/>} />
      <Route path=":id" element={<ProductPage/>} />  
      <Route path='cart' element={<Cart/>} />
      <Route path='checkout' element={<CheckoutCart/>} />
      <Route path=':id/checkout' element={<CheckoutProduct/>}/>
      <Route path='category/unavailable' element={<UnavailableProducts/>}/>
      <Route path="category/:category" element={ <CategoryPage/>} />
    
    </Route>
  </>)
)

const App = () => {
  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}


export default App;

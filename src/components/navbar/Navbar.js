import React, {  useState } from 'react'
import "./navbar.css"
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import Login from '../login/Login';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';

function Navbar() {

  const cart = useSelector( (state) => state.mainPageSlice.userCart );
  const isLoggedIn = useSelector( (state) => state.mainPageSlice.isUserLoggedIn );
  const userName = useSelector( state => state.mainPageSlice.userName);
  
  const [showLoginModal,setShowLoginModal] = useState(false);
  const closeModal = () => {setShowLoginModal(false)};
  


  return (
    <>
      {showLoginModal && createPortal(<Login closeModal={closeModal} />,document.body)}
      <div className='navbar__wrapper'>
        <Link to="/">
          <div className="logo_container">
            <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png" alt="" className='logo_image' />
          </div>
        </Link>
        
        <div className='search'>
          <input type="text" placeholder='Search for products, brands and more' />
            <SearchIcon/>
          </div>
          <div className='login__btn' >
            <button disabled={isLoggedIn} onClick={()=> setShowLoginModal( prev => !prev)} >{ isLoggedIn? "Logged In" :"Login"}</button>
          </div>
          <div className='navbar_cta'>Become a Selller</div>
          <div className='login__more'>
            More
            <ArrowDropDownOutlinedIcon/>
          </div>
          <div className='login__cart'>
            <Link to="/cart">
              <ShoppingCartOutlinedIcon/>
              <p className='cart_length_holder'>{cart?.length}</p>
              Cart
            </Link>
          </div>
      </div>
    </>
  )
}

export default Navbar
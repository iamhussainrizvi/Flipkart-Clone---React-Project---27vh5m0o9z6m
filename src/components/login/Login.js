import React, { useState } from 'react'
import "./login.css";
import CloseIcon from '@mui/icons-material/Close';
import SignIn from './SignIn';
import SignUp from './SignUp';



function Login({closeModal}) {

    

    const [showSignIn,setShowSignIn] = useState(true);

    function handleClick(){
        setShowSignIn( prev => !prev);
    }

  return (
    <div className='modal' >
        <div className="main_section">
            <div className="login_image_wrapper"> 
                <img src="https://i.ibb.co/3MSfWjv/login-modal-image.png" alt="login_modal_image" />
            </div>
            <div className='login_component_wrapper'>
                {showSignIn? <SignIn onClick={handleClick} closeModal={closeModal}  />: <SignUp onClick={handleClick}/>}
            </div>
            <div className="close_btn" onClick={closeModal}>
             <CloseIcon color="action"  fontSize='large'/> 
            </div>
        </div>
    </div>
  )
}

export default Login
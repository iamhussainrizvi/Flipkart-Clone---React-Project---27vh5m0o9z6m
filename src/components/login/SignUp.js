import React, { useEffect, useRef } from 'react'
import { auth } from '../../firebase';
import { createUserWithEmailAndPassword } from "firebase/auth";
import {updateUserName} from "../mainPage/mainPageSlice"
import { useDispatch } from 'react-redux';



function SignUp({onClick}) {

    const signUpRef = useRef();
    const dispatch = useDispatch();


    
useEffect(()=>{
    signUpRef.current.focus();
});

function addUser(e){
    e.preventDefault();

    const form = document.forms[0].elements
    const userName = form[0].value;
    const userEmail = form[1].value;
    const userPassword = form[2].value;
    const ConfirmPassword = form[3].value;
    console.log("form Values",userName ,userEmail,userPassword,ConfirmPassword)

    if( userPassword.length>=6 &&  userPassword === ConfirmPassword){

        createUserWithEmailAndPassword(auth,userEmail,userPassword)
        .then((userCred) => {

            const user = userCred.user;
            // console.log(user);
            dispatch(updateUserName(userName));
            onClick();
        })
        .catch( err => {
            console.log(err.code,err.message);
        })

    }else if(userPassword.length<6){
        alert("password should be more than 6 characters");
    }else{
        alert("Password do not match");
    }
}


  return (
    
    <div className='sign_up_wrapper'> 
        <form  onSubmit={addUser}>
        <div className="login_dettail_wrapper">
            <div className="sign_up_email_wrapper">
                    <div className='name_wrapper'>
                        <p>Enter your name</p>
                        <input type="text" ref={signUpRef} required />
                    </div>
                
                <div className="input_container">
                    <p>Enter email</p>
                    <input type="email"   required />
                </div>
            </div>
            <div className="user_password_wrapper">
                <div className="main_password">
                    <div className="password_wrapper">
                        <p>Enter password</p>
                        <input type="password" required />
                    </div>
                    <div className='password_wrapper'>
                        <p>Confirm password</p>
                        <input type="text" required />
                    </div>
                    <div className="sign_in_button" >
                        <button type='submit' className='sign_up_btn' >Sign Up </button>
                    </div>
                </div>
            </div>
            
        </div>
        </form>
        <div className="sign_in_button_wrapper" onClick={onClick} >
            <p>Existing User? <span>Log in.</span></p>
        </div>
    </div>
    
  )
}

export default SignUp
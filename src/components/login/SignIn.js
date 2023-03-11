import React, { useEffect, useRef } from 'react'
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../firebase';
import { useDispatch,useSelector } from 'react-redux';
import { userIsLoggedIn } from '../mainPage/mainPageSlice';

function SignIn({onClick, closeModal }) {

    const signInRef = useRef();
    const dispatch=useDispatch();
    const userName = useSelector( (state) => state.mainPageSlice.userName);

    useEffect(()=>{
        signInRef.current.focus();
        console.log("userName",userName);
    });

    const authenticateUser = (e)=>{
        e.preventDefault();
        const form = document.forms[0].elements;
        console.log(form);
        const email = form[0].value;
        const password = form[1].value;

        signInWithEmailAndPassword(auth,email,password)
        .then( userCred => {
            const user = userCred.user;
            dispatch(userIsLoggedIn());
            closeModal();
            console.log("authenticated");

        })
        .catch(err => {
            console.log(err.type,err.message);
        })

    }

  return (
    <>
        <div className="login_dettail_wrapper">
            <div className="sign_in_wrapper">
                <form onSubmit={authenticateUser} >
                    <div className="login_details_container">
                        <div className="input_container">
                            <p>Enter email</p>
                            <input type="email" ref={signInRef} />
                        </div>
                        <div className="password_wrapper">
                            <p>Enter password</p>
                            <input type="password"  />
                        </div>
                        
                        <div className="sign_in_button">
                            <button type='submit'>Sign in </button>
                        </div>
                    </div>
                </form>
            </div>
            <div className="sign_up_button_wrapper" onClick={onClick}>
                <p>New to Flipkart? <span>Create an Account.</span></p>
            </div>
        </div>
        
        
    </>
  )
}

export default SignIn
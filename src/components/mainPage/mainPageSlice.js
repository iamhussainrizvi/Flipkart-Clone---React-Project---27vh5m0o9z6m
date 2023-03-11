import { createSlice } from "@reduxjs/toolkit";

const mainPageSlice = createSlice({
    name:"mainPageSlice",

    initialState:{
        userCart : [],
        userName:"",
        isUserLoggedIn:false
    },

    reducers:{
        updateCart: (state, action) => {
            const cart = state.userCart;
            
            // console.log("state",state.userCart);
            const productId = action.payload;

            if(cart.includes(productId)){

                state.userCart = cart.filter( val => val!==productId);
                
            }else {

                state.userCart = [...cart,action.payload]
            
            }
        },

        userIsLoggedIn:(state) =>{
            state.isUserLoggedIn =true;
        },

        updateUserName: (state, action)=>{

            state.userName=action.payload;
        }
    }

})

export const {updateCart, userIsLoggedIn,updateUserName} = mainPageSlice.actions;

export default mainPageSlice.reducer;
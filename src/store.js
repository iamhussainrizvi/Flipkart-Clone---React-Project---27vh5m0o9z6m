import { configureStore } from "@reduxjs/toolkit";
import mainPageReducer from "./components/mainPage/mainPageSlice"

export default configureStore({
    reducer: {
        mainPageSlice:mainPageReducer
    }
})
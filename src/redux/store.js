import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";

export const store = configureStore({
    reducer:{
        // Reducers should be key-value pair
         counterReducer


    }
})
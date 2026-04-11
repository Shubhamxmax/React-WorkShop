import { configureStore, createSlice } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'



const Store = configureStore({
      reducer:{
        counter:counterReducer
      }
})

export default Store


//steps:

// Create Store 
// Wrap app componenet under Provider
// Create createSlice
// Register reducer in Store
import { configureStore } from '@reduxjs/toolkit'
import CounterReducer  from './modules/counterSlice'

export const store = configureStore({
    reducer:{
        counter:CounterReducer
    }
})
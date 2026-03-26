import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0
    },
    reducers: {
        increment: (state) => { state.value += 1 },
        decrement: (state) => { state.value -= 1 },
        reset: (state) => { state.value = 0 },
        incrementBy5: (state) => { state.value += 5 },
        decrementBy5: (state) => { state.value -= 5 },
        multiplyBy2: (state) => {state.value *= 2},
        incrementByAmount: (state, actions) => {state.value += actions.payload},
        decrementByAmount: (state, actions) => {state.value -= actions.payload}
    }
})

export const { increment, decrement, reset,incrementBy5 ,decrementBy5,multiplyBy2,incrementByAmount,decrementByAmount } = counterSlice.actions
export default counterSlice.reducer
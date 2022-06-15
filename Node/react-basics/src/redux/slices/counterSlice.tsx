/* 
    a slice is a collection of actions for a single globle state in your app.
        -the name comes from splitting up the root redux state to multiple slices of state

*/

import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: "counter",
    initialState: {value: 0},
    reducers: {
        increment(state){
            state.value++;
        }
    }
});

export const counterActions = counterSlice.actions;
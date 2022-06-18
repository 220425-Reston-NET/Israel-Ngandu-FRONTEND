/* 
    

*/

// import { configureStore } from "@reduxjs/toolkit";
// import { counterSlice } from "../slices/counterSlice";

// const store = configureStore({
//     reducer: {
//         counterSlice: counterSlice.reducer
//     }
// })

// export default store;

import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "../slices/counterSlice";

const store = configureStore({
    reducer: {
        counter: counterSlice.reducer
    }
})

export default store;

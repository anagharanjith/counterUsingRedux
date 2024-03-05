import { createSlice } from "@reduxjs/toolkit";

const counteSlice = createSlice({
    name:'counter',
    initialState :{ count:0},
    reducers:{
        increment :(state)=>{
            state.count++
        },
        decrement :(state)=>{
            state.count--
        },
        reset :(state)=>{
            return{...state,count:0}  
        },
        incrementByAmount :(state,action)=>{
            state.count+= +action.payload
        }

    }
})
export const {increment,decrement,reset,incrementByAmount} =counteSlice.actions
export default counteSlice.reducer
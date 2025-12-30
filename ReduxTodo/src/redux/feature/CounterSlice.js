import { createSlice } from "@reduxjs/toolkit";


export const counterSlice = createSlice({
    name:'counter',
    initialState:{
        value:1,
    },
    reducers:{
        increment:(state)=>{
            state.value += 1
        },
        decrement:(state)=>{
            state.value -= 1
        },
        byten:(state,actions)=>{
            state.value += actions.payload
        }
    }
})

export const {increment,decrement,byten} = counterSlice.actions
export default counterSlice.reducer 
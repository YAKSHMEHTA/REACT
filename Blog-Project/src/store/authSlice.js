import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status:false,
    userData:null,
    reducers:{
        login:(state,action)=>{
            state.status = true
            state.userData = action.payload.userData
        },
        logout:(state,action)=>{
            state.status = false
            state.userData = null
        }
    }
}

const authSlice = createSlice({

}) 


export const {login,logout} = authSlice.actions
export default authSlice.reducer;
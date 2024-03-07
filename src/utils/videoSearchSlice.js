import { createSlice } from "@reduxjs/toolkit";

const videoSearchSlice=createSlice({
    name:"video",
    initialState:{
        data:"",
    },
    reducers:{
        updateData:(state,action)=>{
            state.data=action.payload;
        }
    }
})

export const {updateData}=videoSearchSlice.actions;
export default videoSearchSlice.reducer;
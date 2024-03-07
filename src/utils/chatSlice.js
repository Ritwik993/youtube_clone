import { createSlice } from "@reduxjs/toolkit";
import { OFFSET_LIVE_CHAT } from "./constant";

const chatSlice=createSlice({
    name:"chat",
    initialState:{
        messages:[]
    },
    reducers:{
        addChatMessage:(state,action)=>{
            if (state.messages.length >= OFFSET_LIVE_CHAT) {
                state.messages.splice(0, 1); // Remove the first message
            }
            //state.messages.splice(10,1);//After 10 messages it will pop 1 message
            state.messages.push(action.payload);
            // state.messages.unshift(action.payload);
            //to push in the array from the beginning for the chat
        }
    }
})


export const{addChatMessage}=chatSlice.actions;
export default chatSlice.reducer;
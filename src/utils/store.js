import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchSlice from "./searchSlice";
import chatSlice from "./chatSlice";
import videoSearchSlice from "./videoSearchSlice";

const store=configureStore({
    reducer:{
        app:appSlice,
        search:searchSlice,
        chat:chatSlice,
        video:videoSearchSlice
    }
})
export default store;
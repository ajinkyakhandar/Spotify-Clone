import { configureStore } from "@reduxjs/toolkit";
import playlistSlice from "./slicers/playlistSlice";
import userDataSlice from "./slicers/userDataSlice";

const store =  configureStore({
    reducer:{
        userInfo: userDataSlice,
        recentPlaylistInfo: playlistSlice
    }
})

export default store;
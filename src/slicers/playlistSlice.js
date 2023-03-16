import { createSlice } from "@reduxjs/toolkit";

const userDataSlice = createSlice({
  name: "playlistData",
  initialState: {
    recentPlaylistData: null
  
  },
  reducers: {
    recentPlaylist: (state, actions) => {
      state.recentPlaylistData = actions.payload;
    }
  },
});

export const { recentPlaylist } = userDataSlice.actions;

export default userDataSlice.reducer;

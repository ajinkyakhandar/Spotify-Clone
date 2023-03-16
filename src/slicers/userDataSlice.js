import { createSlice } from "@reduxjs/toolkit";

const userDataSlice = createSlice({
  name: "userData",
  initialState: {
    user: null,
    playlists: null,
    playlistIdDetails: null,
    playing: false,
    item: null,
    token: null,
    playUrl: null,
    playIDMax: null,
  },
  reducers: {
    userData: (state, actions) => {
      state.user = actions.payload;
    },
    userToken: (state, action) => {
      state.token = action.payload;
    },
    userPlaylist: (state, action) => {
      state.playlists = action.payload;
    },
    userPlayUrl: (state, action) => {
      state.playUrl = action.payload;
    },
    userPlaylistIdDetails: (state, action) => {
      state.playlistIdDetails = action.payload;
    },
    userPlayIDMax: (state, action) => {
      state.playIDMax = action.payload;
    }
  },
});

export const { userData, userToken, userPlaylist, userPlayUrl, userPlaylistIdDetails, userPlayIDMax} = userDataSlice.actions;

export default userDataSlice.reducer;

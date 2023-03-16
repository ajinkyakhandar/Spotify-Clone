import React from "react";
import { isMobile } from "../DeviceHelper";
import "./Playlist.css"
import PlaylistDesktop from "./PlaylistDesktop";
import PlaylistTablet from "./PlaylistTablet";

const PlaylistDetails = ({ playlists }) => {
  console.log("iMobile ", isMobile())
  return (
    <div className="playlist-details">
      {isMobile() ? <PlaylistTablet playlists={playlists}/>:<PlaylistDesktop playlists={playlists}/>}
    </div>
  );
};

export default PlaylistDetails;

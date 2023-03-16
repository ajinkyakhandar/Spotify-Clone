import React from "react";
import { isMobile } from "../DeviceHelper";
import "./Playlist.css"

const PlaylistHeader = ({ image, owner, totalTrack, name }) => {
  return (
    <div className="playerlist-header">
      <img src={image} className="playlist-header-image" />
      <div className="playlist-header-details">
      {isMobile && <span className="playlist-header-playlistText">Playlist</span>}

        <span className="playlist-header-playlistName">{name}</span>
        <div>
          <span className="playlist-header-text">{owner} . </span>
          <span className="playlist-header-text">{totalTrack} songs</span>
        </div>
      </div>
    </div>
  );
};

export default PlaylistHeader;

import React from "react";
import "./UserProfile.css"
const UserProfileHeader = ({name, publicPlaylist, image}) => {
  return (
      <div className="userprofile-header">
        <img src={image} className="userprofile-header-image" />
        <div className="userprofile-header-details">
          <span className="userprofile-header-playlistText">Playlist</span>

          <span className="userprofile-header-playlistName">{name}</span>
          <div className="userproofile-details">
            <span className="userprofile-header-text">{publicPlaylist} Public Playlists . </span>
            <span className="userprofile-header-text">7 followers</span>
          </div>
        </div>
      </div>
  );
};

export default UserProfileHeader;

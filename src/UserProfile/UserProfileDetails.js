import React from "react";
import "./UserProfile.css";
import SpotifyLogo from "../images/play-icon.png";
import { Link } from "react-router-dom";

const UserProfileDetails = ({ userPlayList }) => {
  return (
    <div className="userprofile-details">
      <div>
        <span className="userprofile-playlist-name">Public Playlists</span>
        <div className="userprofile-playlist-cardlist">
          {userPlayList.items.map((userPlaylist) => {
            return (
              <Link to={`/playlist/${userPlaylist.id}`} key={userPlaylist.id}>
              <div className="userprofile-playlistcard">
                <div className="userprofile-playlistcard-imageLayout">
                  <img
                    src={userPlaylist.images[0].url}
                    className="userprofile-playlistcard-image"
                  />
                  <img
                    src={SpotifyLogo}
                    className="userprofile-playlistcard-hoverImage"
                  />
                </div>
                <span className="userprofile-playlistcard-name">
                  {userPlaylist.name}
                </span>
              </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default UserProfileDetails;

import React from "react";
import { useDispatch } from "react-redux";
import { userPlayUrl } from "../slicers/userDataSlice";
import "./Playlist.css";

const PlaylistTablet = ({ playlists }) => {
  const playUrlDispatch = useDispatch();

  const setPlayUrl = (preview_url) => {
    playUrlDispatch(userPlayUrl(preview_url));
  };

  console.log(playlists);

  return (
    <div className="playlistTablet">
      {playlists.map((playlist, index) => {
        return (
          <div
            className="playlistTablet-layout"
            key={playlist.track.id}
            onClick={() => setPlayUrl(index)}
          >
            <img
              src={playlist.track.album.images[0].url}
              className="playlistTablet-image"
            />

            <div className="playlistTablet-details">
              <div className="playlistTablet-songname-layout">
                <span className="playlistTablet-songname">
                  {playlist.track.name}
                </span>
              </div>

              <div className="playlistTablet-artists">
                {playlist.track.artists.map((artist) => (
                  <span
                    className="playlist-details-table-textsm"
                    key={artist.id}
                  >
                    {artist.name} ,
                  </span>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PlaylistTablet;

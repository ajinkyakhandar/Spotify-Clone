import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { userPlayUrl } from "../slicers/userDataSlice";

const HomePlaylist = ({ playlists }) => {
  const dispatch = useDispatch();

  let seteEmptyPlayID = async () => {
    dispatch(userPlayUrl(null));
  };
  return (
    <>
      <div className="home-playlists">
        {playlists &&
          playlists.map((playlist) => (
            <div className="home-playlist-card">
              <Link
                to={`/playlist/${playlist.id}`}
                key={playlist.id}
                onClick={() => seteEmptyPlayID()}
              >
                {" "}
                <div className="home-playlist-items">
                  <img
                    src={playlist.images[0].url}
                    className="home-playlist-cardImage"
                  />
                  <span className="home-playlist-name">{playlist.name}</span>
                </div>
              </Link>
            </div>
          ))}
      </div>
    </>
  );
};

export default HomePlaylist;

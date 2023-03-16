import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getplaylistByID } from "../services/UserData";
import PlaylistDetails from "./PlaylistDetails";
import PlaylistHeader from "./PlaylistHeader";
import "./Playlist.css"
import { userPlayIDMax, userPlaylistIdDetails } from "../slicers/userDataSlice";

const Playlist = () => {
  const [playList, setPlayList] = useState("");
  const authToken = useSelector((store) => store.userInfo.token);
  const PlaylistIdDetailsDispatch = useDispatch() 
  const PlayIDMaxDispatch = useDispatch() 
  const { playlistID } = useParams();

  useEffect(() => {
  getplaylist();
  
  },[playlistID]);

  const getplaylist = async () => {
  
   
    const playlistData = await getplaylistByID(authToken, playlistID);
    setPlayList(playlistData);
    PlaylistIdDetailsDispatch(userPlaylistIdDetails(playlistData))
    PlayIDMaxDispatch(userPlayIDMax(playlistData.tracks.items.length - 1))
  };

  return (
    <div className="playlist">
      {playList != "" && (
        <PlaylistHeader
          image={playList.images[0].url}
          name={playList.name}
          totalTrack={playList.tracks.total}
          owner={playList.owner.display_name}
        />
      )}
      {playList != "" && <PlaylistDetails playlists={playList.tracks.items} />}

      
    </div>
  );
};

export default Playlist;

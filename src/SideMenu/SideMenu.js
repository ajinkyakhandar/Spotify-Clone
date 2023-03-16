import React, { useEffect, useState } from "react";
import SpotifyLogo from "../images/spotify-logo-white.png";
import SideMenuOptions from "./SideMenuOptions";

import HouseOutlinedIcon from "@mui/icons-material/HouseOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LibraryMusicOutlinedIcon from "@mui/icons-material/LibraryMusicOutlined";
import {Link} from "react-router-dom"
import "./SideMenu.css"
import { useDispatch, useSelector } from "react-redux";
import { getPlaylist } from "../services/UserData";
import { userPlaylist, userPlayUrl } from "../slicers/userDataSlice";

const SideMenu = () => {
  const authToken = useSelector((store) => store.userInfo.token);
  const [playListData, setPlayListData] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    getUserInfo()
  },[])

  let getUserInfo = async () => {
    let playlist = await getPlaylist(authToken);
    setPlayListData(playlist.items);
    dispatch(userPlaylist(playlist));
  }

  let seteEmptyPlayID = async () => {
    dispatch(userPlayUrl(null));
  }

  return (
    <div className="side-menu">
      <img className="side-menu-logo" src={SpotifyLogo} alt="spotify-logo" />

      <SideMenuOptions Icon={HouseOutlinedIcon} option="Home" />
      <SideMenuOptions Icon={SearchOutlinedIcon} option="Search" />
      <SideMenuOptions Icon={LibraryMusicOutlinedIcon} option="Your Library" />

      <hr className="" />

      <div className="playlists">
        {playListData &&
          playListData.map((playlist) => (
            <Link to={`/playlist/${playlist.id}`} key={playlist.id} onClick={()=> seteEmptyPlayID()} className="playlist">
              {" "}
              <span
                >
                {playlist.name}
              </span>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default SideMenu;

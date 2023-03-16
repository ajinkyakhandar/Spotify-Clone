import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isMobile } from "../DeviceHelper";
import { getPlaylist } from "../services/UserData";
import { userPlaylist } from "../slicers/userDataSlice";
import "./Home.css";
import HomePlaylist from "./HomePlaylist";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [playListData, setPlayListData] = useState("");
  const authToken = useSelector((store) => store.userInfo.token);
  const dispatch = useDispatch();
  let navigate = useNavigate();


  useEffect(() => {
    getUserInfo();
  }, []);

  let getUserInfo = async () => {
    let playlist = await getPlaylist(authToken);
    setPlayListData(playlist.items);
    dispatch(userPlaylist(playlist));
    console.log("mobile ", playListData);
  };


  return (
    <div className="home">
     {isMobile() ? <HomePlaylist playlists={playListData}/> : navigate("/playlist/4dGJyq0zqCQbMy6znnnN81")}
    </div>
  );
};

export default Home;

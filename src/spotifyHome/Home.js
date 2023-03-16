import React, { useState } from 'react'
import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import SideMenu from '../SideMenu/SideMenu';
import Dashboard from './Dashboard/Dashboard';
import { userPlaylist } from "../slicers/userDataSlice";
import {getPlaylist} from "../services/UserData"

const Home = () => {
  const authToken = useSelector((store) => store.userInfo.token)
  const dispatchPlaylist = useDispatch();
  const [playListData, setPlayListData] = useState("")


  useEffect(() => {
    // Get authtoken from spotify and store in redux 
    getPlaylistData()
  }, []);

  const getPlaylistData = async() => {
    let playlist = await getPlaylist(authToken);
    setPlayListData(playlist.items)
    dispatchPlaylist(userPlaylist(playlist))
  }

  return (
    <div className='flex'>
      <SideMenu playList={playListData}/>
      <Dashboard/>
    </div>
  )
}

export default Home
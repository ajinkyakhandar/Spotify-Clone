import DashboardHeader from "./DashboardHeader/DashboardHeader";
import { getPlaylist, getRecentlyPlayed } from "./services/UserData";
import { userPlaylist, userToken } from "./slicers/userDataSlice";
import SideMenu from "./SideMenu/SideMenu";
import AudioPlayer from "./Player/AudioPlayer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Login from "./Login";
import {getAuthToken} from "./services/UserData"
import { recentPlaylist } from "./slicers/playlistSlice";
import "./AppLayout.css"
import { isMobile } from "./DeviceHelper";
import SideMenuMobile from "./SideMenu/SideMenuMobile";

const AppLayout = () => {
  const authToken = useSelector((store) => store.userInfo.token);
  const dispatch = useDispatch();

  useEffect(() => {
    // Get authtoken from spotify and store in redux
    getToken()
  }, []);

  const getToken = () => {
    let _token = getAuthToken();
    dispatch(userToken(_token))    
  }

  // const getRecentlyPlayedData = async () => {
  //   const recentlyPlayedData = await getRecentlyPlayed();
  //   recentlyPlayedDispatch(recentPlaylist(recentlyPlayedData));
  // };
  
  return (
    <div>
      {authToken? (
        <div className="appLayout">
          <div className="appLayout-layout">
            {!isMobile() && <SideMenu/>}
            
            <div className="applayout-content">
            {!isMobile() && <DashboardHeader />}
              <Outlet />
            </div>
          </div>

          <AudioPlayer />
          {isMobile() && <SideMenuMobile />}
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
};

export default AppLayout;

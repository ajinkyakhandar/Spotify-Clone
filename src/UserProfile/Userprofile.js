import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getFollowingList, getPlaylist } from "../services/UserData";
import UserProfileDetails from "./UserProfileDetails";
import UserProfileHeader from "./UserProfileHeader";
import "./UserProfile.css"

const Userprofile = () => {
  const [following, setFollowing] = useState("");
  const [playList, setPlayList] = useState("");
  const userProfile = useSelector((state) => state.userInfo.user);
  const userPlaylist = useSelector((state) => state.userInfo.playlists);

  const { userID } = useParams();

  useEffect(() => {
    getUserData();
  }, [userID]);

  const getUserData = async () => {
    // const getFollowing = await getFollowingList()
    // setFollowing(getFollowing)

    // setPlayList(getPlayList);
  };

  return(<div className="userprofile">
    <UserProfileHeader name={userProfile.display_name}  publicPlaylist={userPlaylist.total} image={userProfile.images[0].url}/>
    <UserProfileDetails userPlayList={userPlaylist}/>
  </div>)
};

export default Userprofile;

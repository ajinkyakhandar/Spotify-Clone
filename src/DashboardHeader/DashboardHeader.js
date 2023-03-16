import React, { useEffect, useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import NavigateNextRoundedIcon from '@mui/icons-material/NavigateNextRounded';
import NavigateBeforeRoundedIcon from '@mui/icons-material/NavigateBeforeRounded';
import "./DashboardHeader.css"
import { Link, useNavigate } from "react-router-dom";
import {getCurrentUser} from "../services/UserData"
import { useDispatch, useSelector } from "react-redux";
import { userData } from "../slicers/userDataSlice";

const DashboardHeader = () => {
  const authToken = useSelector((store) => store.userInfo.token);
  const [userInfo, setUsetInfo] = useState("")
  const navigate = useNavigate();
  const dispatch = useDispatch()
  useEffect(() => {
    getUserInfo()
  },[])

  let getUserInfo = async () => {
    let data  = await getCurrentUser(authToken);
    dispatch(userData(data))
    setUsetInfo(data)
  }


  return (
    <div className="dashboard-header" >
      <div className="flex ">
        <div className="navigation-icon" onClick={() => navigate(-1)}>
          <NavigateBeforeRoundedIcon />
        </div>
        <div className="navigation-icon navigation-icon-right" onClick={() => navigate(1)}>
          <NavigateNextRoundedIcon />
        </div>
      </div>

      <div className="logged-user">
        {/* <img src={userInfo.images[0].url} className="profile-image"/> */}
        <Link to={`/user/${userInfo.id}`}>
        <span className="username">{userInfo.display_name}</span>
        </Link>
      </div>
    </div>
  );
};

export default DashboardHeader;

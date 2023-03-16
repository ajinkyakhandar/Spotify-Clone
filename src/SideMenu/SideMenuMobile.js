import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import "./SideMenu.css"
import { Link } from 'react-router-dom';

const SideMenuMobile = () => {
  return (
    <div className='SideMenuMobile'>
       <Link to="/home">
       <HomeIcon className='SideMenuMobile-icon'/>
        </Link> 
        <VideoLibraryIcon className='SideMenuMobile-icon'/>
        <AccountCircleIcon className='SideMenuMobile-icon'/>
    </div>
  )
}

export default SideMenuMobile
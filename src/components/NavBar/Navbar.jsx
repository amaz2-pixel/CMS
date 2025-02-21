import React from 'react'
import './Navbar.css'
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LanguageIcon from '@mui/icons-material/Language';
export default function Navbar() {
  return (
    <div className='navbar w-full h-12 bg-white fixed top-0 z-50'>
      <div className='navbarwrapper h-full px-6 flex justify-between items-center'>
        <div className="topleft">
          <span className='logo'>Dashboard🧑‍💼</span>
        </div>
        <div className="topright">
          <div className="topbarIconContainer">
            <NotificationsIcon/>
          <span className='topIconBadge'>2</span>      
          </div>
          <div className="topbarIconContainer">
            <LanguageIcon/>
          <span className='topIconBadge'>2</span>      
          </div>
          <div className="topbarIconContainer">
            <SettingsIcon/>  
          </div>
          <img className='navAvatar' src='/images/avatar.png'/>
        </div>
      </div>
      </div>
  )
}

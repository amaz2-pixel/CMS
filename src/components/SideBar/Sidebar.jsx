import React from 'react'
import './Sidebar.css'
import LineStyleIcon from '@mui/icons-material/LineStyle'
import TimeLineIcon from '@mui/icons-material/Timeline'
import TrendingUpIcon from '@mui/icons-material/TrendingUp'
import PermIdentityIcon from '@mui/icons-material/PermIdentity'
import StorefrontIcon from '@mui/icons-material/Storefront'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import BarChartIcon from '@mui/icons-material/BarChart'
import MailOulinedIcon from '@mui/icons-material/MailOutline'
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed'
import ChatBubbleOutlinedIcon from '@mui/icons-material/ChatBubbleOutline'

import {Link} from 'react-router-dom'


export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="sidebarwrapper">
        <div className="sidebarmenu">
            <h3 className='sidemenutitle'>داشبورد</h3>
            <ul className='sidebarlist'>
                <Link to='/' className='link'>
              <li className='sidebarItem active'>
                
              <LineStyleIcon className='sideItemIcon '/>
               صفحه اصلی
              </li>
                </Link>
              <li className='sidebarItem'>
              <TimeLineIcon className='sideItemIcon'/>
              تجزیه و تحلیل
              </li>
              <li className='sidebarItem'>
              <TrendingUpIcon className='sideItemIcon'/>
              فروش
              </li>
            </ul>
        </div>

        <div className="sidebarmenu">
            <h3 className='sidemenutitle'>دسترسی سریع</h3>
            <ul className='sidebarlist'>
             <Link to='/users' className='link'>
              <li className='sidebarItem'>
              <PermIdentityIcon className='sideItemIcon'/>
               کاربران
              </li>
              </Link>
              <Link to='./newUser' className='link'>
              <li className='sidebarItem'>
              <StorefrontIcon className='sideItemIcon'/>
              افزودن کاربر جدید
              </li>
              </Link>
              <Link to='/products' className='link'>
              <li className='sidebarItem'>
              <AttachMoneyIcon className='sideItemIcon'/>
              محصولات
              </li>
              </Link>
              <li className='sidebarItem'>
              <BarChartIcon className='sideItemIcon'/>
              معاملات
              </li>
              <li className='sidebarItem'>
              <MailOulinedIcon className='sideItemIcon'/>
              گزارشات
              </li>
            </ul>
        </div>

        <div className="sidebarmenu">
            <h3 className='sidemenutitle'>نوتیفیکشن ها</h3>
            <ul className='sidebarlist'>
              <li className='sidebarItem'>
              <MailOulinedIcon className='sideItemIcon'/>
               ایمیل ها
              </li>
              <li className='sidebarItem'>
              <DynamicFeedIcon className='sideItemIcon'/>
              نظرات
              </li>
              <li className='sidebarItem'>
              <ChatBubbleOutlinedIcon className='sideItemIcon'/>
              پیام ها
              </li>
              
            </ul>
        </div>
      </div>
    </div>
  )
}

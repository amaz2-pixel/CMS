import React from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';
import './widgetSm.css';
import { newUsers } from '../../NewUsers';

export default function WidgetSm() {
  return (
    <div className='widgetSm'>
      <span className="widgetSmTitle">جدیدترین کاربران</span>
      <ul className="widgetSmList">
        {newUsers.map((user) => (
          <li className='widgetSmListItem' key={user.name}> {/* Add a unique key */}
            <img src='/images/avatar.png' alt='avatar' className='widgetItemAvatar'/>
              <span className="widgetItemName">{user.name}</span>
            <button className='widgetItemButton'>
              <VisibilityIcon className='widgetItemIcon'/>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

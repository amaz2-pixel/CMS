import React from 'react';
import { useState } from 'react';
import { usersList } from '../../datas';
import './UserList.css';
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import NotInterestedIcon from '@mui/icons-material/NotInterested';
import EditIcon from '@mui/icons-material/Edit';

export default function UsersList() {
  const [UsersData, setUsersData] = useState(usersList);

  const DeleteUser = (id) => {
    const confirmDelete = window.confirm("آیا مطمئن هستید که می‌خواهید این کاربر را حذف کنید؟");
    if (confirmDelete) {
      setUsersData(UsersData.filter(user => user.id !== id));
      console.log(`User with id ${id} deleted.`);
    }
  };

  const BanneUser = (id) => {
    const updatedUsers = UsersData.map(user => {
      if (user.id === id) {
        return { ...user, status: user.status === 'Suspended' ? 'Active' : 'Suspended' };
      }
      return user;
    });
    setUsersData(updatedUsers);
    console.log(`User with id ${id} status updated to ${updatedUsers.find(user => user.id === id).status}.`);
  };

  const columns = [
    {
      field: 'id',
      headerName: 'شناسه',
      width: 90,
      editable: false
    },
    {
      field: 'user',
      headerName: 'نام کاربری',
      width: 200,
      renderCell: (params) => {
        return (
          <Link to="#" className='link'>
            <div className="userListUser">
              <img src={params.row.img} alt='avatar' className='userListAvatar' />
              <span className='userListUsername'>{params.row.name}</span>
            </div>
          </Link>
        );
      }
    },
    {
      field: 'status',
      headerName: 'وضعیت',
      width: 150,
      editable: true,
      renderCell: (params) => {
        return (
          <span className={"widgetLgButton " + params.row.status}>{params.row.status}</span>
        );
      }
    },
    {
      field: 'transactions',
      headerName: 'تراکنش ها',
      width: 100,
      editable: false
    },
    {
      field: 'action',
      headerName: 'قابلیت ها',
      width: 200,
      renderCell: (params) => {
        return (
          <div className='userListActions'>
            <Link to={`/user/${params.row.id}`}>
              <button className='userListIconButton'>
                <EditIcon className='userListEditIcon' />
              </button>
            </Link>
            <button className='userListIconButton' onClick={() => DeleteUser(params.row.id)}>
              <DeleteIcon className='userListDeleteIcon' />
            </button>
            <button className='userListIconButton' onClick={() => BanneUser(params.row.id)}>
              <NotInterestedIcon className='userListBannIcon' />
            </button>
          </div>
        );
      }
    },
  ];

  return (
    <div className='userList'>
      <DataGrid
        rows={UsersData}
        columns={columns}
        pageSizeOptions={[5]}
        disableRowSelectionOnClick
        sx={{
          direction: 'rtl', // Ensure DataGrid also respects RTL
          '& .MuiDataGrid-columnHeader': {
            textAlign: 'right', // Align header text to the right
          },
          '& .MuiDataGrid-cell': {
            textAlign: 'right', // Align cell text to the right
          },
        }}
      />
    </div>
  );
}

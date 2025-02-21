import React from 'react';
import { useState } from 'react';
import { productsData } from '../../datas';
import './Products.css';
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import NotInterestedIcon from '@mui/icons-material/NotInterested';
import EditIcon from '@mui/icons-material/Edit';

export default function ProductsList() {
  const [ProductsData, setProductsData] = useState(productsData);

  const DeleteProduct = (id) => {
    const confirmDelete = window.confirm("آیا مطمئن هستید که می‌خواهید این کاربر را حذف کنید؟");
    if (confirmDelete) {
      setProductsData(ProductsData.filter(Product => Product.id !== id));
      console.log(`Product with id ${id} deleted.`);
    }
  };

  const DeactiveProduct = (id) => {
    const updatedProducts = ProductsData.map(Product => {
      if (Product.id === id) {
        return { ...Product, status: Product.status === 'Inactive' ? 'Active' : 'Inactive' };
      }
      return Product;
    });
    setProductsData(updatedProducts);
    console.log(`Product with id ${id} status updated to ${updatedProducts.find(Product => Product.id === id).status}.`);
  };

  const columns = [
    {
      field: 'id',
      headerName: 'شناسه',
      width: 90,
      editable: false
    },
    {
      field: 'product',
      headerName: 'اطلاعات محصول',
      width: 300,
      renderCell: (params) => {
        return (
          <Link to={`/product/${params.row.id}`} className='link'>
            <div className="userListUser">
              <img src={params.row.avatar} alt='avatar' className='userListAvatar' />
              <span className='userListUsername'>{params.row.title}</span>
            </div>
          </Link>
        );
      }
    },
    {
      field: 'price',
      headerName: '(تومان)قیمت',
      width: 150,
      editable: false,
     
    },
    {
      field: 'status',
      headerName: 'وضعیت',
      width: 150,
      editable: false,
      renderCell: (params) => {
        return (
          <span className={"widgetLgButton " + params.row.status}>{params.row.status}</span>
        );
      }
    },
    {
      field: 'action',
      headerName: 'قابلیت ها',
      width: 200,
      renderCell: (params) => {
        return (
          <div className='userListActions'>
            <Link to={`/product/${params.row.id}`}>
              <button className='userListIconButton'>
                <EditIcon className='userListEditIcon' />
              </button>
            </Link>
            <button className='userListIconButton' onClick={() => DeleteProduct(params.row.id)}>
              <DeleteIcon className='userListDeleteIcon' />
            </button>
            <button className='userListIconButton' onClick={() => DeactiveProduct(params.row.id)}>
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
        rows={ProductsData}
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

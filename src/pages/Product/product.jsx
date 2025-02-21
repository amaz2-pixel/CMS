import React from 'react'
import {Link} from 'react-router-dom'
import Chart from '../../components/Chart/Chart'
import { salesData } from '../../datas'
import './product.css'
import PublishIcon from '@mui/icons-material/Publish'
export default function Product() {
  return (
    <div className='product'>
        <div className='productTitleContainer'>
            <h1 className='productTitle'>محصول</h1>
            <Link to="/newProduct">
             <button className='productAddButton'>ساخت محصول جدید</button>
            </Link>
        </div>
        <div className="productTop">
          <div className="productTopLeft">
            <Chart title='فروش ماهانه' data={salesData} dataKey='sales' />
          </div>
          <div className="productTopRight">
            <div className="productInfoTop">
              <img src="/images/avatar.png" alt="productImage" className='productImgInfo'/>
              <span className='productName'>ساعت هوشمند</span>
            </div>
            <div className="productInfoBottom">
              <div className="productInfoItem">
                <div className="productInfoKey">شناسه: </div>
                <div className="productInfoValue">132</div>
              </div>
              <div className="productInfoItem">
                <div className="productInfoKey">نام: </div>
                <div className="productInfoValue">ساعت هوشمند</div>
              </div>
              <div className="productInfoItem">
                <div className="productInfoKey">فروش: </div>
                <div className="productInfoValue">25 میلیون تومان</div>
              </div>
              <div className="productInfoItem">
                <div className="productInfoKey">فعال: </div>
                <div className="productInfoValue">بله</div>
              </div>
              <div className="productInfoItem">
                <div className="productInfoKey">موجودی: </div>
                <div className="productInfoValue">30</div>
              </div>
            </div>
          </div>
        </div>
        <div className="productBottom">
          <form className="productForm">
            <div className="productFormLeft">
              <label>نام محصول</label>
              <input type='text' placeholder='نام محصول را وارد کنید'/>


              <label>قیمت</label>
              <input type='text' placeholder='قیمت محصول'/>

              <label>موجودی</label>
              <select id='inStockSelect'>
                <option value="true">بله</option>
                <option value="false">خیر</option>
              </select>

            </div>
            <div className="productFormRight">
              <div className="productUploader">
                <img src='/images/avatar.png' alt="uploader" className='productUploadImg'/>
                <input type="file" style={{display:'none'}} />
              </div>
              <button className='productUploadButton'>آپلود</button>
            </div>
          </form>
        </div>
    </div>
  )
}

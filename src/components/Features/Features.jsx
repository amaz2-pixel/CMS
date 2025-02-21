import React from 'react'
import './Features.css'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
export default function Features() {
  return (
    <div className='features'>
        <div className="featureItem">
            <span className="featureTitle">
                درآمد
            </span>
            <div className="featureContainer">
                <span className='featureAmount'>22 میلیون تومان</span>
                <span className="featureRate">1.5-</span><ArrowDownwardIcon className='featureIcon negative'/>
            </div>
            <span className="featuredetail">نسبت به ماه قبل</span>
        </div>

        <div className="featureItem">
            <span className="featureTitle">
                فروش
            </span>
            <div className="featureContainer">
                <span className='featureAmount'>50 میلیون تومان</span>
                <span className="featureRate">2+</span><ArrowUpwardIcon className='featureIcon '/>
            </div>
            <span className="featuredetail">نسبت به ماه قبل</span>
        </div>

        <div className="featureItem">
            <span className="featureTitle">
                هزینه ها
            </span>
            <div className="featureContainer">
                <span className='featureAmount'>28 میلیون تومان</span>
                <span className="featureRate">4+</span><ArrowUpwardIcon className='featureIcon '/>
            </div>
            <span className="featuredetail">نسبت به ماه قبل</span>
        </div>
    </div>
  )
}

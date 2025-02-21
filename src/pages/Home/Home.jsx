import React from 'react'
import Features from '../../components/Features/Features'
import './Home.css'
import Chart from '../../components/Chart/Chart'
import { xAxis } from '../../datas'
import WidgetSm from '../../components/widgetSm/WidgetSm'
import WidgetLg from '../../components/widgetLg/widgetLg'
export default function Home() {
  return (
    <div className='home'>
     <Features/>
     <Chart title="فروش سالانه محصولات" data={xAxis} dataKey="sale"  grid  />
     <div className="homewidgets">
      <WidgetSm/>
      <WidgetLg/>
     </div>
    </div>
  )
}

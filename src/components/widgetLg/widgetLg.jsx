import React from 'react';
import './widgetLg.css';
import { Transactions } from '../../datas';

export default function WidgetLg() {
    const Button = ({ type }) => {
        return <button className={'widgetLgButton ' + type}>{type}</button>;
    };

    return (
        <div className='widgetLg'>
            <h3 className="WidgetLgTitle">آخرین تراکنش ها</h3>
            <table className="widgetLgTable">
                <thead>
                    <tr className="widgetLgTr">
                        <th className="widgetLgTh">کاربر</th>
                        <th className="widgetLgTh">تاریخ</th>
                        <th className="widgetLgTh">مبلغ</th>
                        <th className="widgetLgTh">وضعیت</th>
                    </tr>
                </thead>
                <tbody>
                    {Transactions.map((data) => (
                        <tr className="widgetLgTr" key={data.id}>
                            <td className="widgetLgUser">
                                <img src={data.img} alt="avatar" className='widgetLgAvatar' />
                                <span className="widgetLgName">{data.name}</span>
                            </td>
                            <td className="widgetLgDate">{data.date}</td>
                            <td className="widgetLgPrice">{data.price}</td>
                            <td className="widgetLgStatus"><Button type={data.status} /></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

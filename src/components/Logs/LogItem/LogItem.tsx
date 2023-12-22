import React from "react";
import './LogItem.css'
import MyDate from "./MyDate/MyDate";

const LogItem = (props: any) => {
    return (<div>
        <div className='item'>
            <MyDate date={props.date} />

            {/* 日志内容的容器 */}
            <div className="content">
                <h2 className="desc">{props.desc}</h2>
                <div className="time">{props.time}</div>
            </div>
        </div>
    </div>)
}

export default LogItem
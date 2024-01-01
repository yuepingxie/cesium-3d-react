import React from "react";
import './LogItem.css'
import MyDate from "./MyDate/MyDate";
import Card from "@/components/UI/Card/Card";

const LogItem = (props: any) => {
    /** 删除 */
    const deleteItemHandler = () => {
        const isDel = confirm("该操作不可恢复，确认吗？")

        if (isDel) {
            // 删除当前的item，从数据的state中移除指定的数据
            // console.log(props.onDelLog)
            props.onDelLog()

        }
    }
    return (<div>
        <Card className='item'>
            <MyDate date={props.date} />

            {/* 日志内容的容器 */}
            <div className="content">
                <h2 className="desc">{props.desc}</h2>
                <div className="time">{props.time}</div>
            </div>
            <div >
                <div className="delete" onClick={deleteItemHandler}>x</div>
            </div>
        </Card>
    </div>)
}

export default LogItem
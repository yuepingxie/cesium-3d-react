import React, { useState } from "react";
import './LogItem.css'
import MyDate from "./MyDate/MyDate";
import Card from "@/components/UI/Card/Card";
import ConfirmModal from "@/components/UI/ConfirmModal/ConfirmModal";

const LogItem = (props: any) => {
    // 添加一个state，记录是否显示确认窗口
    const [showConfirm, setShowConfirm] = useState(false)

    /** 删除 */
    const deleteItemHandler = () => {
        // 显示确认窗口
        setShowConfirm(true)
        // const isDel = confirm("该操作不可恢复，确认吗？")

        // if (isDel) {
        //     // 删除当前的item，从数据的state中移除指定的数据
        //     // console.log(props.onDelLog)
        //     props.onDelLog()

        // }
    }

    // 取消函数
    const cancleHandler = () => {
        setShowConfirm(false)
    }

    // 确认函数
    const okHandler = () => {
        props.onDelLog()
    }


    return (<div>
        <Card className='item'>

            {showConfirm && <ConfirmModal confirmText="该操作不可恢复，确认吗？" onCancle={cancleHandler} onOk={okHandler} />}

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
import React, { useRef, useState } from 'react'
import Card from '../UI/Card/Card'
import './LogsForm.css'
import { log } from 'console'

const LogsForm = (props: { onSaveLog: any }) => {
    /*当表单项发生变化时，获取用户输入内容
    **/
    // 创建3个变量存储表单中的数据
    // const [inputDate, setInputDate] = useState('')
    // const [inputTime, setInputTime] = useState('')
    // const [inputDesc, setInputDesc] = useState('')

    const [formData, setFormData] = useState({
        inputDate: '',
        inputDesc: '',
        inputTime: ''
    })


    // 创建响应函数，监听表单项的变化
    const dateChangeHandler = (event: any) => {
        // setInputDate(event.target.value)
        setFormData({ ...formData, inputDate: event.target.value })
    }

    const timeChangeHandler = (event: any) => {
        // setInputTime(event.target.value)
        setFormData({ ...formData, inputTime: event.target.value })
    }

    const descChangeHandler = (event: any) => {
        // setInputDesc(event.target.value)
        setFormData({ ...formData, inputDesc: event.target.value })
    }

    // React中，通常表单不需要自行提交，而是要通过React提交
    const formSubmit = (event: { preventDefault: () => void }) => {
        // 阻止跳转
        event.preventDefault()
        // 获取表单项的内容、日期等
        const newLog = {
            date: new Date(formData.inputDate),
            desc: formData.inputDesc,
            time: +formData.inputTime
        }

        props.onSaveLog(newLog)

        console.log(newLog)
        // 提交表单后如何清空表单中的旧数据
        // setInputDate('')
        // setInputDesc('')
        // setInputTime('')
        setFormData({ inputDesc: '', inputDate: '', inputTime: '' })

    }

    return <Card className="logs-form">
        <div>
            <form onSubmit={formSubmit}>
                <div className='form-item'>
                    <label htmlFor="date" >日期: </label>
                    <input type="date" id="date" onChange={dateChangeHandler} value={formData.inputDate} />
                </div>
                <div className='form-item'>
                    <label htmlFor="desc">内容: </label>
                    <input type="text" id='desc' onChange={descChangeHandler} value={formData.inputDesc} />
                </div>
                <div className='form-item'>
                    <label htmlFor="time" >时长: </label>
                    <input type='number' onChange={timeChangeHandler} value={formData.inputTime} />
                </div>
                <div className='form-btn'>
                    <button>添加</button>
                </div>
            </form>
        </div>
    </Card>

}

export default LogsForm

"use client"
import React, { Component, useState } from 'react'
import './index.css'
import Gallery from '../components/LearnState'
import Hello from '../components/Hello'
import Logs from '@/components/Logs/Logs'
import LogsForm from '@/components/LogsForm/LogsForm'

export default function page() {
  // 数据
  const [logsData, setLogsData] = useState([
    {
      id: '01',
      date: new Date(2023, 8, 15, 10, 30),
      desc: "学习前端",
      time: "40分钟"
    },
    {
      id: '02',
      date: new Date(2023, 9, 20, 10, 30),
      desc: "学习英语",
      time: "40分钟"
    },
    {
      id: '03',
      date: new Date(),
      desc: "学习哈哈",
      time: "40分钟"
    },
  ])

  // 定义一个函数
  const saveLogHandler = (newLog: any) => {
    console.log(newLog)

    //向新的日志中添加id
    newLog.id = Date.now() + ''
    setLogsData([newLog, ...logsData])
  }
  // 定义一个函数，从数据中删除一条日志
  const delLogByIndex = (index: number) => {
    setLogsData(prevState => {
      const newLogs = [...prevState]
      newLogs.splice(index, 1);
      return newLogs
    });
  }

  return (
    <div className='app'>
      {/* <Gallery />
        <br />
        <Hello />
        <br /> */}
      <LogsForm onSaveLog={saveLogHandler} />
      <Logs logsData={logsData} onDelLog={delLogByIndex} />
    </div>
  )
}

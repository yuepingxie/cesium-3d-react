"use client"
import React, { Component } from 'react'
import './index.css'
import Gallery from '../components/LearnState'
import Hello from '../components/Hello'
import Logs from '@/components/Logs/Logs'
import LogsForm from '@/components/LogsForm/LogsForm'

export default class page extends Component {
  render() {
    return (
      <div className='app'>
        {/* <Gallery />
        <br />
        <Hello />
        <br /> */}
        <LogsForm />
        <Logs />
        {/* <Card>hahaha</Card> */}
      </div>
    )
  }
}

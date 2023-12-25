import React from 'react'
import './Card.css'

const Card = (props: { children: any, className?: String }) => {
    // 提取公共样式到Card
    return <div className={`card ${props.className}`}> {props.children} </div >
}
export default Card
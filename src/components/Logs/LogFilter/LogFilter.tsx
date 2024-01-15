import React from 'react'

const LogFilter = (props: any) => {
    // 创建select的change时间的响应函数
    const changeHandler = (e: { target: { value: any } }) => {
        props.onYearChange(+e.target.value)
    }

    return (
        <div>
            年份：<select value={props.year} onChange={changeHandler}>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
            </select>
        </div>
    )
}

export default LogFilter;
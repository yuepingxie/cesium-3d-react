import { SetStateAction, useState } from 'react'
import Card from '../UI/Card/Card'
import LogFilter from './LogFilter/LogFilter'
import LogItem from './LogItem/LogItem'
import './Logs.css'

const Logs = (props: any) => {
    // 存储年份的state
    const [year, setYear] = useState(2022)

    // 过滤数据，只显示某一年
    let filterData = props.logsData.filter((item: { date: { getFullYear: () => number } }) => item.date.getFullYear() === year)

    // 创建一个修改年份的函数
    const changeYearHandler = (year: SetStateAction<number>) => {
        setYear(year)
    }

    // 将数据放入jsx中
    let logItemData = filterData.map((item: { id: any; date: any; desc: any; time: any },
        index: any) => <LogItem onDelLog={() => props.onDelLog(item.id)}
            key={item.id}
            date={item.date}
            desc={item.desc}
            time={item.time}
            logIndex={index} />)

    if (logItemData.length === 0) {
        logItemData = <p className='no-logs'>没找到日志！</p>
    }
    return <Card className='logs'>
        <LogFilter year={year} onYearChange={changeYearHandler} />
        {logItemData}
    </Card>
}

export default Logs
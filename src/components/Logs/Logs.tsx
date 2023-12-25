import Card from '../UI/Card/Card'
import LogItem from './LogItem/LogItem'
import './Logs.css'

const logsData = [
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
]

const Logs = () => {
    const logItemDate = logsData.map((item: {
        id: any; date: any; desc: any; time: any
    }) => <LogItem key={item.id} date={item.date} desc={item.desc} time={item.time} />)

    return <Card className='logs'>
        {logItemDate}
    </Card>
}

export default Logs
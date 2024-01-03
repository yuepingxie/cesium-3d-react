import Card from '../UI/Card/Card'
import LogItem from './LogItem/LogItem'
import './Logs.css'

const Logs = (props: any) => {
    let logItemData = props.logsData.map((item: {
        id: any; date: any; desc: any; time: any
    }, index: any) => <LogItem key={item.id} date={item.date} desc={item.desc} time={item.time}
        logIndex={index} onDelLog={() => props.onDelLog(index)} />)

    if (logItemData.length === 0) {
        logItemData = <p className='no-logs'>没找到日志！</p>
    }
    return <Card className='logs'>
        {logItemData}
    </Card>
}

export default Logs
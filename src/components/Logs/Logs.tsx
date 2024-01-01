import Card from '../UI/Card/Card'
import LogItem from './LogItem/LogItem'
import './Logs.css'

const Logs = (props: any) => {
    const logItemDate = props.logsData.map((item: {
        id: any; date: any; desc: any; time: any
    }, index: any) => <LogItem key={item.id} date={item.date} desc={item.desc} time={item.time}
        logIndex={index} onDelLog={() => props.onDelLog(index)} />)

    return <Card className='logs'>
        {logItemDate}
    </Card>
}

export default Logs
"use client"
import { useReducer, useState } from 'react';
import Logs from '../components/Logs/logs'

const App = () => {
  function clickHandler(event: any): import("react").MouseEventHandler<HTMLAnchorElement> | undefined {
    event.preventDeafault();
    event.stopPropagation();
    alert('超链接发生了跳转')
    // throw new Error('Function not implemented.');
    return
  }

  const click = (event: { preventDefault: () => void; stopPropagation: () => void; }) => {
    event.preventDefault(); // 取消默认行为
    event.stopPropagation(); // 取消事件的冒泡

    alert('我是App中的clickHandler！');
  };

  const [counter, setCounter] = useState(1)

  function add(): void {
    setCounter(counter + 1)
    console.log(counter)

  }

  function subsract(): void {
    setCounter(counter - 1)
    console.log(counter)

  }

  return (
    <div >
      <Logs />
      <div onClick={() => { alert('div') }}>
        <button type="button" onClick={() => { alert('123') }}>
          点我一下
        </button>
        <button type="button" onClick={clickHandler}>
          点我一下
        </button>
        <a href="https://www.baidu.com" onClick={click}>超链接</a>
      </div>
      <br />
      <div >
        <h1>{counter}</h1>
        <button type="button" onClick={add}>
          +
        </button>
        <button type="button" onClick={subsract}>
          -
        </button>
      </div>
    </div>
  );
}

export default App
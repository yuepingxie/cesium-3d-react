import React from 'react';
import './Backdrop.css';
import ReactDOM from 'react-dom';

const Backdrop = (props: any) => {
    // 使用 React Portal，模态框组件将被注入 root/根元素 之外，并且与 root/根元素 处于同一层级。
    return ReactDOM.createPortal(
        <div className='backdrop'>
            {props.children}
        </div>, document.body);
}

export default Backdrop
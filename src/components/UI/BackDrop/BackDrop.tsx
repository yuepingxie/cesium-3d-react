import React from 'react';
import './BackDrop.css';

const BackDrop = (props: any) => {
    return (
        <div className='backDrop'>
            {props.children}
        </div>
    )
}

export default BackDrop
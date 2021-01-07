import React from 'react';

const Buttons = ({start, stop, wait, reset}) => {
    return (
        <div>
            <button className='btn' onClick={start} >Start</button>
            <button className='btn' onClick={stop}>Stop</button>
            <button className='btn' onDoubleClick={wait}>Wait</button>
            <button className='btn' onClick={reset}>Reset</button>
        </div> 
    )
}
export default Buttons;
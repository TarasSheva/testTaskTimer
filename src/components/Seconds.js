import React from 'react';

const Seconds = ({time}) => {
    return (
        <div className='disp' >
            <span>{time.hour >= 10 ? time.hour : '0'+time.hour}</span>&nbsp;:&nbsp;
            <span>{time.minute >= 10 ? time.minute : '0'+time.minute}</span>&nbsp;:&nbsp;
            <span>{time.seconds >= 10 ? time.seconds : '0'+time.seconds}</span>
        </div> 
    )
}
export default Seconds;
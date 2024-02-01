import React, { useRef, useState } from 'react'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import { BiSolidUpArrow, BiSolidDownArrow } from "react-icons/bi";
import audio from '../../../assets/audio.wav'

import './style.css'

const Timer = () => {

    const [hour, setHour] = useState(0)
    const [minute, setMinute] = useState(0)
    const [second, setSecond] = useState(0)
    const [time, setTime] = useState(0)
    const [buttoni, setButtoni] = useState(false)

    const audioref = useRef()

    const onComplete = () => {
        audioref.current.play()
        setHour(0)
        setMinute(0)
        setSecond(0)
        setTime(0)
        setButtoni(false)
    }

    const handleClick = (e) => {
        const remainingTime = second + minute * 60 + hour * 60 * 60
        setTime(remainingTime)
        console.log(e.target)
        setButtoni(true)
        setTimeout(() => {

        }, remainingTime * 1000);
    }

    const children = (time) => {
        const hours = Math.floor(time / 3600)
        const minutes = Math.floor((time % 3600) / 60)
        const seconds = time % 60

        return `${hours}:${minutes}:${seconds}`
    }

    return (
        <div className='timer'>
            <CountdownCircleTimer
                isPlaying
                duration={time}
                onComplete={onComplete}
                colors={['#004777', '#F7B801', '#A30000', '#A30000']}
                colorsTime={[7, 5, 2, 0]}
            >
                {({ remainingTime }) => (children(remainingTime))}
            </CountdownCircleTimer>
            <div>


                <div className="time">
                    <div className="time-count">
                        <div className="">Hours</div>
                        <BiSolidUpArrow className='increase' onClick={() => setHour(hour + 1)} />
                        <div className="">{hour}</div>
                        <BiSolidDownArrow className='decrease' onClick={() => setHour(hour > 0 ? hour - 1 : 0)} />
                    </div>

                    <div className='colon'> : </div>

                    <div className="time-count">
                        <div className="">Minutes</div>
                        <BiSolidUpArrow className='increase' onClick={() => setMinute(minute + 1)} />
                        <div className="">{minute}</div>
                        <BiSolidDownArrow className='decrease' onClick={() => setMinute(minute > 0 ? minute - 1 : 0)} />
                    </div>

                    <div className='colon'> : </div>

                    <div className="time-count">
                        <div className="">Seconds</div>
                        <BiSolidUpArrow className='increase' onClick={() => setSecond(second + 1)} />
                        <div className="">{second}</div>
                        <BiSolidDownArrow className='decrease' onClick={() => setSecond(second > 0 ? second - 1 : 0)} />
                    </div>
                </div>
                <button className='timer-btn' disabled={buttoni} onClick={handleClick}>Start</button>
            </div>
            <audio src={audio} ref={audioref}></audio>
        </div>
    )
}

export default Timer




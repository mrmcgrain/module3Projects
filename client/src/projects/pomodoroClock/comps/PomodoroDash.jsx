import React, { useState, useEffect } from "react"
import "../style/pom-style.css"
import crash from "../sound/crash.wav"

export default function PomodoroDash() {


    const [data, setData] = useState({

        session: 1500000, // countdown in milli  -  UN COMMENT WHEN DONE
        sessionLen: 25,  // displayed full value
        break: 300000,   // countdown in milli
        breakLen: 5,     // displayed full value
        isRunning: false,
        countDown: 1500000, // USE FOR ACUTAUL COUNTDOWN .... see line 28
        countDownFlag: false,
        sessionInterval: null  // interval toggle

    })


    useEffect(() => {

        console.log(data.countDownFlag)

        if (data.countDown < 0 && !data.countDownFlag) {

            console.log("IF statement")

            new Audio(crash).play()

            setData(prev => ({
                ...prev,
                countDown: prev.break,
                countDownFlag: true,
                isRunning: true
            }))


        } else if (data.countDown < 0 && data.countDownFlag) {

            console.log("Else statement")

            new Audio(crash).play()

            setData(prev => ({
                ...prev,
                countDown: prev.session,
                countDownFlag: false
            }))
        }

    }, [data.countDown, data.countDownFlag])


    /////  Below is whats rendered within the session countdown

    let minutes = Math.floor((data.countDown % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((data.countDown % (1000 * 60)) / 1000);

    if (seconds < 10) {
        seconds = "0" + seconds
    }
    if (minutes < 10) {
        minutes = "0" + minutes
    }


    ////////////////////////////////////////////////////////////////////////////////

    // PLAY -  PAUSE - ETC   //


    const handleActionClick = (e) => {

        if (e.target.value === "play") {

            let interval = setInterval(function () {
                ;
                setData(prev => ({
                    ...prev,
                    // session: prev.session - 1000,
                    countDown: prev.countDown - 1000,
                    sessionInterval: interval,
                    isRunning: true
                }))

            }, 1000);

        }


        if (e.target.value === "pause") {

            clearInterval(data.sessionInterval)
        }


        if (e.target.value === "restart") {
            clearInterval(data.sessionInterval)

            setData(prev => ({
                ...prev,
                countDown: 1500000,

                sessionLen: 25,  // displayed full value
                break: 300000,   // countdown in milli
                breakLen: 5,     // displayed full value
                isRunning: false,
                countDownFlag: false,
            }))

        }
    }

    ////////////////////////////////////////////////////////////////////////////////

    const handleSessionClick = (e) => {

        if (e.target.value === "up" && data.sessionLen < 60 && !data.isRunning) {


            setData(prev => ({
                ...prev,
                sessionLen: prev.sessionLen + 5,
                session: prev.session + 300000,
                countDown: prev.countDown + 300000,
            }))
        }


        if (e.target.value === "down" && data.sessionLen > 0 && !data.isRunning) {
            setData(prev => ({
                ...prev,
                sessionLen: prev.sessionLen - 5,
                session: prev.session - 300000,
                countDown: prev.countDown - 300000,
            }))
        }
    }
    ////////////////////////////////////////////////////////////////////////////////

    const handleBreakClick = (e) => {

        if (e.target.value === "up" && data.breakLen < 60) {

            setData(prev => ({
                ...prev,
                breakLen: prev.breakLen + 1,
                break: prev.break + 60000
            }))
        }

        if (e.target.value === "down" && data.breakLen > 0) {
            setData(prev => ({
                ...prev,
                breakLen: prev.breakLen - 1,
                break: prev.break - 60000
            }))
        }

    }

    ///////////////////////////////////////////////////////////


    return (

        <div className="p-Body">

            <div className="p-Flex">

                <div id="clockDisplay">

                    <p>

                        {data.sessionLen}
                        +
                    {data.breakLen}
                        :  Clock
                     </p>

                </div>



                <div id="break-session">

                    <div id="break-label">Break Length
                        <div className="p-Flex-row">

                            <button id="break-increment"
                                value="up"
                                onClick={(e) => handleBreakClick(e)}
                            >🔼</button>

                            <p id="break-length">{data.breakLen}</p>

                            <button id="break-decrement"
                                value="down"
                                onClick={(e) => handleBreakClick(e)}
                            >🔽</button>

                        </div>
                    </div>

                    <div id="session-label">Session Length
                    <div className="p-Flex-row">
                            <button
                                id="session-increment"
                                value="up"
                                onClick={(e) => handleSessionClick(e)}>
                                🔼
                                </button>

                            <p id="session-length">{data.sessionLen}</p>

                            <button
                                id="session-decrement"
                                value="down"
                                onClick={(e) => handleSessionClick(e)}>


                                >🔽</button>

                        </div>
                    </div>
                </div>

                <div id="countDown">
                    <div id="timer-label" className="session">

                        {!data.countDownFlag
                            ?
                            <p>Session</p>
                            :
                            <p style={{ color: "red" }}>Break</p>}

                    </div>


                    <div className="countdown" id="time-left">

                        {!data.countDownFlag ?

                            <p>     {`${minutes}:${seconds}`}       </p>

                            :

                            <p style={{ color: "red" }}>  {`${minutes}:${seconds}`}   </p>
                        }

                    </div>
                </div>


                <div id="controls">
                    <div className="p-Flex-row">
                        <button
                         
                            value="play"
                            onClick={(e) => handleActionClick(e)}
                        >▶</button>


                        <button
                               id="start_stop"
                            value="pause"
                            onClick={(e) => handleActionClick(e)}
                        >⏸</button>


                        <button
                            id="reset"
                            value="restart"
                            onClick={(e) => handleActionClick(e)}
                        >🔁</button>
                    </div>
                </div>

                <div>

                </div>

            </div>
        </div>
    )
}
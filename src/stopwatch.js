import { useState, useRef, useEffect } from 'react';

/*
Reach: 
1) implement context in App component
2) add "stopwatch ticker" in fixed position when NOT on Stopwatch component
3) allow stopwatch to continue running, even when not on Stopwatch component
*/

const Stopwatch = () => {

    const [ counter, setCounter ] = useState( 0 );
    const [ isTicking, setIsTicking ] = useState( false );
    const theTicker = useRef( null );


    /*-- Event handlers --*/
    const handleStart = () => {
        theTicker.current = setInterval( () => {
            setCounter(counter => counter + 1);
        }, 100);

        setIsTicking(true);
    }

    const handlePause = () => {
        clearInterval(theTicker.current);
        setIsTicking(false);
    }

    const handleReset = () => {
        clearInterval(theTicker.current);
        setIsTicking(false);
        setCounter(0);
    }

    const renderTime = (timeInDeciSeconds) => {

        if ( timeInDeciSeconds >= 864000 ) {
            return 'A day has passed, maybe switch to a calendar?'
        }

        let deciSeconds = 0;
        let nonMinuteSeconds = 0;
        let nonHourMinutes = 0;
        let hours = 0;

        deciSeconds = timeInDeciSeconds % 10;

        const totalSeconds = Math.floor(timeInDeciSeconds / 10);
        nonMinuteSeconds = totalSeconds % 60;

        const totalMinutes = Math.floor(totalSeconds / 60);
        nonHourMinutes = totalMinutes % 60;

        hours = Math.floor(totalMinutes / 60);

        const finalNonMinuteSeconds = ('00'+nonMinuteSeconds).slice(-2)+'.'+deciSeconds;
        const finalNonHourMinutes = ('00'+nonHourMinutes).slice(-2);
        const finalHours = ('00'+hours).slice(-2);

        return (
            <div className='stopwatch-half'>
                <div className='time-element'>
                    {finalHours}h 
                </div>
                <div className='time-element'>
                    {finalNonHourMinutes}m 
                </div>
                <div className='time-element'>
                    {finalNonMinuteSeconds}s
                </div>
            </div>
        )

    }

    useEffect( () => {

        return function() {
            clearInterval(theTicker.current);
        }

    }, [] );

    return (

        <div className='content-container'>
            <h2>Stopwatch!</h2>
            <div className='stopwatch-half'>
                {!isTicking 
                    ? <button onClick={handleStart}>Start</button>
                    : <button onClick={handlePause}>Pause</button>
                }
                <button onClick={handleReset}>Reset</button>
            </div>
            {renderTime(counter)}
        </div>

    )
}

export default Stopwatch;
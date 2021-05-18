import { useState, useEffect, useRef } from 'react';

const StopwatchTwo = () => {

    const [ visitTime, setVisitTimer ] = useState( 0 );
    const [ isTicking, setIsTicking ] = useState( false );
    const [ stopwatchTimer, setStopwatchTimer ] = useState( 0 );
    const theTicker = useRef(null);

    useEffect( () => {
        const visitTicker = setInterval( () => {
            setVisitTimer( visitTime => visitTime+1 ); // GOOD
            // setVisitTimer(visitTime+1); // BAD
            /*
            Option #2 = bad b/c... closure-ish thing? @ moment interval is set, visitTime is 0;
            so, I'm saying, every second, set the visit timer to be "1".

            IN CONTRAST, for Option #1, I'm saying: every 1 second, *execute this function*, 
            and this function takes is its argument the *current value* of visitTime.
            */
        }, 1000)

        return function() {
            clearInterval(visitTicker);
        }

    }, [] )

    function handleStart() {
        setIsTicking(true);
        theTicker.current = setInterval( () => {
            setStopwatchTimer(stopwatchTimer => stopwatchTimer+1);
        }, 1000)
    }

    function handlePause() {
        setIsTicking(false);
        clearInterval(theTicker.current)
    }

    function handleReset() {
        setIsTicking(false);
        clearInterval(theTicker.current)
        setStopwatchTimer(0);
    }

    return (
        <div className='content-container'>
            <h2>Stopwatch II</h2>
            <div className='stopwatch-half'>
                You have been on this page for {visitTime} seconds.
            </div>
            <div className='stopwatch-half'>
                {isTicking
                    ? <button onClick={handlePause}>Pause</button>
                    : <button onClick={handleStart}>Start</button>
                }
                <button onClick={handleReset}>Reset</button>
                {/* <button onClick={handleStart} className={}>Start</button> */}
            </div>
            <div className='stopwatch-half'>
                Stopwatch: {stopwatchTimer} seconds.
            </div>
        </div>
    )

}

export default StopwatchTwo;
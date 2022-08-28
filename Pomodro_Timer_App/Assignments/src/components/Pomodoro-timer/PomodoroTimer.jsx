import React, {useEffect, useState} from 'react';
import HomePage from '../HomePage';
import './pomodoro.css';

const Pomodoro = () => {
  const [time, setTime] = useState (1500);
  const [breakTime, setBreakTime] = useState (5);
  const [workTime, setWorkTime] = useState (25);
  const [timingType, setTimingtype] = useState ('WORK');
  const [isActive, setIsActive] = useState (false);

  const timeout = setTimeout (() => {
    if (time && isActive) {
      setTime (time - 1);
    }
  }, 1000);

  const handleBreakIncrease = () => {
    if (breakTime < 60) {
      setBreakTime (breakTime + 1);
    }
  };

  const handleBreakDecrease = () => {
    if (breakTime > 1) {
      setBreakTime (breakTime - 1);
    }
  };

  const handleSessionIncrease = () => {
    if (workTime < 60) {
      setWorkTime (workTime + 1);
      setTime (time + 60);
    }
  };

  const handleSessionDecrease = () => {
    if (workTime > 1) {
      setWorkTime (workTime - 1);
      setTime (time - 60);
    }
  };

  const handleReset = () => {
    clearTimeout (timeout);
    setIsActive (false);
    setTime (1500);
    setBreakTime (5);
    setWorkTime (25);
    setTimingtype ('WORK');
  };

  const handleisActive = () => {
    clearTimeout (timeout);
    setIsActive (!isActive);
  };

  const resetTimer = () => {
    if (!time && timingType === 'WORK') {
      setTime (breakTime * 60);
      setTimingtype ('BREAK');
    }
    if (!time && timingType === 'BREAK') {
      setTime (workTime * 60);
      setTimingtype ('WORK');
    }
  };

  const clock = () => {
    if (isActive) {
      resetTimer ();
    } else {
      clearTimeout (timeout);
    }
  };

  useEffect (
    () => {
      clock ();
    },
    [isActive, time]
  );

  const getTime = time => {
    const min = Math.floor (time / 60);
    const sec = time % 60;
    return `${min < 10 ? '0' + min : min} : ${sec < 10 ? '0' + sec : sec}`;
  };

  const title = timingType === 'WORK' ? 'WORK' : 'BREAK';

  return (
    <>
    <HomePage />
    <div className="pomodoro">
      <h1 className="pomo">Pomodoro Timer</h1>
      <div className="pomo-wrapper">
        <div className="left">
          <h2 className="break">Break</h2>
          <div className="left-wrap">
            <button
              disabled={isActive}
              className="left-down"
              onClick={handleBreakDecrease}
            >
              down
            </button>
            <p>{breakTime}</p>
            <button
              disabled={isActive}
              className="left-up"
              onClick={handleBreakIncrease}
            >
              up
            </button>
          </div>
        </div>
        <div className="right">
          <h2 className="break">Work</h2>
          <div className="left-wrap">
            <button
              disabled={isActive}
              className="left-down"
              onClick={handleSessionDecrease}
            >
              down
            </button>
            <p>{workTime}</p>
            <button
              disabled={isActive}
              className="left-up"
              onClick={handleSessionIncrease}
            >
              up
            </button>
          </div>
        </div>
      </div>
      <div className="timer">
        <h1>{title} Timer</h1>
        <p className="work-timer">{getTime (time)}</p>
      </div>
      <div className="btn-wrap">
        <button className="btn" onClick={handleisActive}>
          {!isActive ? 'Start' : 'Pause'}
        </button>
        <button className="btn" onClick={handleReset}>Reset</button>
      </div>
    </div>
    </>
  );
};

export default Pomodoro;

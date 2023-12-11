import React, { createContext, useState, useEffect } from 'react';

const TimerContext = createContext();

const TimerProvider = ({ children }) => {
  const [countdownTime, setCountdownTime] = useState(0);
  const [hours, setHours] = useState('');
  const [minutes, setMinutes] = useState('');
  const [seconds, setSeconds] = useState('');
  const [isCountdownActive, setIsCountdownActive] = useState(false);
  const [stopwatchTime, setStopwatchTime] = useState(0);
  const [isStopwatchActive, setIsStopwatchActive] = useState(false);
  const [xyTime, setXyTime] = useState(0);
  const [xyRounds, setXyRounds] = useState('');
  const [currentXyRound, setCurrentXyRound] = useState(1);
  const [isXyActive, setIsXyActive] = useState(false);

  const updateHours = (newHours) => {
    setHours(newHours);
    updateCountdownTime(newHours, minutes, seconds);
  };

  const updateMinutes = (newMinutes) => {
    setMinutes(newMinutes);
    updateCountdownTime(hours, newMinutes, seconds);
  };

  const updateSeconds = (newSeconds) => {
    setSeconds(newSeconds);
    updateCountdownTime(hours, minutes, newSeconds);
  };

  const updateCountdownTime = (hrs, mins, secs) => {
    const totalSeconds =
    (parseInt(hrs, 10) || 0) * 3600 +
    (parseInt(mins, 10) || 0) * 60 +
    (parseInt(secs, 10) || 0);
    setCountdownTime(totalSeconds);
  };

  const convertToTotalSeconds = (hrs, mins, secs) => {
    const hoursInSeconds = (parseInt(hrs, 10) || 0) * 3600;
    const minutesInSeconds = (parseInt(mins, 10) || 0) * 60;
    const seconds = parseInt(secs, 10) || 0;
    return hoursInSeconds + minutesInSeconds + seconds;
  };

  useEffect(() => {
    let interval = null;
    if (isCountdownActive && countdownTime > 0) {
      interval = setInterval(() => {
        setCountdownTime((prevTime) => Math.max(prevTime - 1, 0));
      }, 1000);
    } else if (!isCountdownActive || countdownTime === 0) {
      clearInterval(interval);
      if (countdownTime === 0) {
        setIsCountdownActive(false);
      }
    }
    return () => clearInterval(interval);
  }, [isCountdownActive, countdownTime]);

  useEffect(() => {
    let interval = null;
    if (isStopwatchActive) {
      interval = setInterval(() => {
        setStopwatchTime((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isStopwatchActive]);

  const handleStartCountdown = () => {
    setIsCountdownActive(true);
  };

  const handleStartStopwatch = () => {
    setIsStopwatchActive(true);
  };

  const handleStartXy = () => {
    setXyTime(convertToTotalSeconds(hours, minutes, seconds));
    setIsXyActive(true);
    setCurrentXyRound(1);
  };

  const handlePauseResumeCountdown = () => {
    setIsCountdownActive(!isCountdownActive);
  };

  const handlePauseResumeXy = () => {
    setIsXyActive(!isXyActive);
  };

  const handlePauseResumeStopwatch = () => {
    setIsStopwatchActive(!isStopwatchActive);
  };

  const handleResetCountdown = () => {
    setIsCountdownActive(false);
    setCountdownTime(0);
    setHours('');
    setMinutes('');
    setSeconds('');
  };

  const handleResetStopwatch = () => {
    setIsStopwatchActive(false);
    setStopwatchTime(0);
  };

  const handleResetXy = () => {
    setIsXyActive(false);
    setXyTime(0);
    setXyRounds(1);
    setCurrentXyRound(1);
  };

  return (
    <TimerContext.Provider value={{ countdownTime, setCountdownTime, isCountdownActive, setIsCountdownActive, stopwatchTime, setStopwatchTime, isStopwatchActive, setIsStopwatchActive, xyTime, setXyTime, xyRounds, setXyRounds, currentXyRound, setCurrentXyRound, isXyActive, setIsXyActive, handleStartXy, handlePauseResumeXy, handleResetXy }}> {children}
    </TimerContext.Provider>
  );
};

export { TimerContext, TimerProvider };
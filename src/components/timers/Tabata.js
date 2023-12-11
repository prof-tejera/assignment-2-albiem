import React, { useState, useEffect } from 'react';
import Button, { ButtonContainer } from "../generic/Button";
import TimeDis from '../generic/TimeDis';
import RoundDis from '../generic/RoundDis';
import Panel from '../generic/Panel';
import { startTimer, pauseTimer, resumeTimer, resetTimer } from '../../utils/helpers'

const Tabata = () => {
  const [hours, setHours] = useState('');
  const [minutes, setMinutes] = useState('');
  const [seconds, setSeconds] = useState('');
  const [isActive, setIsActive] = useState(false);
  const [time, setTime] = useState(0);
  const [rounds, setRounds] = useState('');
  const [currentRound, setCurrentRound] = useState(1);

  useEffect(() => {
    let interval = null;

    if (isActive && time > 0) {
      interval = setInterval(() => {
        setTime(time => time - 1);
      }, 1000);
    } else if (isActive && time === 0 && currentRound < rounds) {
      setCurrentRound(currentRound => currentRound + 1);
      setTime(convertToTotalSeconds(hours, minutes, seconds));
    } else if (!isActive || currentRound >= rounds) {
      clearInterval(interval);
      if (currentRound >= rounds) {
        setIsActive(false);
      }
    }

    return () => clearInterval(interval);
  }, [isActive, time, currentRound, rounds, hours, minutes, seconds]);

  const convertToTotalSeconds = (hrs, mins, secs) => {
    return (parseInt(hrs, 10) || 0) * 3600 + (parseInt(mins, 10) || 0) * 60 + (parseInt(secs, 10) || 0);
  };

  const handleStart = () => {
    setTime(convertToTotalSeconds(hours, minutes, seconds));
    startTimer(setIsActive);
    setCurrentRound(1);
  };

  const handlePauseResume = () => {
    if (isActive) {
      pauseTimer(setIsActive);
    } else {
      resumeTimer(setIsActive);
    }
  };

  const handleReset = () => {
    resetTimer(setIsActive, setTime, () => {
      setHours('');
      setMinutes('');
      setSeconds('');
      setRounds(1);
      setCurrentRound(1);
    });
  };

  const updateTime = (type, value) => {
    const updateFunctions = {
      hours: setHours,
      minutes: setMinutes,
      seconds: setSeconds,
    };

    const updateFunction = updateFunctions[type];
    if (updateFunction) {
      updateFunction(value);
    }
  };

    return (
      <div>
        <Panel
          hours={hours}
          minutes={minutes}
          seconds={seconds}
          updateTime={updateTime}
          setRounds={setRounds}
          rounds={rounds}
          isActive={isActive}
          showRounds={true}
        />
          <TimeDis time={time} />
          <ButtonContainer>
            <Button onClick={handleStart} disabled={isActive}>Start</Button>
            <Button onClick={handlePauseResume} disabled={!isActive}>{isActive ? 'Pause' : 'Resume'}</Button>
            <Button onClick={handleReset}>Reset</Button>
          </ButtonContainer>
            {isActive && <RoundDis rounds={currentRound} totalRounds={rounds} />}
        </div>
    );
};

export default Tabata;
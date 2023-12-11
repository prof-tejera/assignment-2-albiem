import React, { useState, useEffect, useContext } from 'react';
import Button, { ButtonContainer } from "../generic/Button";
import TimeDis from '../generic/TimeDis';
import RoundDis from '../generic/RoundDis';
import Panel from '../generic/Panel';
import { startTimer, pauseTimer, resumeTimer, resetTimer } from '../../utils/helpers'
import { TimerContext } from '../../utils/contexts';

const XY = () => {
  const {
    xyTime, xyRounds, currentXyRound, isXyActive, setXyTime, setXyRounds, setCurrentXyRound, setIsXyActive, handleStartXy, handlePauseResumeXy, handleResetXy, hours, minutes, seconds } = useContext(TimerContext);

    useEffect(() => {
      let interval = null;
  
      if (isXyActive && xyTime > 0) {
        interval = setInterval(() => {
          setXyTime(time => time - 1);
        }, 1000);
      } else if (isXyActive && xyTime === 0 && currentXyRound < xyRounds) {
        setCurrentXyRound(currentXyRound => currentXyRound + 1);
        handleStartXy();
      } else if (!isXyActive || currentXyRound >= xyRounds) {
        clearInterval(interval);
        if (currentXyRound >= xyRounds) {
          setIsXyActive(false);
        }
      }
  
      return () => clearInterval(interval);
    }, [isXyActive, xyTime, currentXyRound, xyRounds, setXyTime, setCurrentXyRound, setIsXyActive, handleStartXy]);

  return (
    <div>
      <Panel
        hours={hours}
        minutes={minutes}
        seconds={seconds}
        setRounds={setXyRounds}
        rounds={xyRounds}
        isActive={isXyActive}
        showRounds={true}
      />
      <TimeDis time={xyTime} />
      <ButtonContainer>
        <Button onClick={handleStartXy} disabled={isXyActive}>Start</Button>
        <Button onClick={handlePauseResumeXy} disabled={!isXyActive}>{isXyActive ? 'Pause' : 'Resume'}</Button>
        <Button onClick={handleResetXy}>Reset</Button>
      </ButtonContainer>
      {isXyActive && <RoundDis rounds={currentXyRound} totalRounds={xyRounds} />}
    </div>
  );
};

export default XY;
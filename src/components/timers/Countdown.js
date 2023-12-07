import React, { useState, useEffect, useContext } from 'react';
import Button, { ButtonContainer } from "../generic/Button";
import TimeDis from '../generic/TimeDis';
import Panel from '../generic/Panel';
import { TimerContext } from '../../utils/contexts';

const Countdown = () => {
  const { countdownTime, hours, minutes, seconds, isCountdownActive, setHours, setMinutes, setSeconds, handleStartCountdown, handlePauseResumeCountdown, handleResetCountdown } = useContext(TimerContext);

  const handleStart = () => {
    handleStartCountdown();
  };

  return (
      <div>
        <Panel
          isActive={isCountdownActive}
          hours={hours}
          minutes={minutes}
          seconds={seconds}
          setHours={setHours}
          setMinutes={setMinutes}
          setSeconds={setSeconds}
        />
        <TimeDis time={countdownTime} />
          <ButtonContainer>
            <Button onClick={() => handleStart()} disabled={isCountdownActive}>Start</Button>
            <Button onClick={handlePauseResumeCountdown}>{isCountdownActive ? 'Pause' : 'Resume'}</Button>
            <Button onClick={handleResetCountdown}>Reset</Button>
          </ButtonContainer>
        </div>
    );
};

export default Countdown;
import React, { useState, useEffect, useContext } from 'react';
import Button, { ButtonContainer } from "../generic/Button";
import TimeDis from '../generic/TimeDis';
import { startTimer, pauseTimer, resumeTimer, resetTimer } from '../../utils/helpers';
import { TimerContext } from '../../utils/contexts';

const Stopwatch = () => {
  const { stopwatchTime, isStopwatchActive, handleStartStopwatch, handlePauseResumeStopwatch, handleResetStopwatch } = useContext(TimerContext);

  return (
    <div>
      <TimeDis time={stopwatchTime} />
      <ButtonContainer>
        <Button onClick={handleStartStopwatch}>Start</Button>
        <Button onClick={handlePauseResumeStopwatch}>{isStopwatchActive ? 'Pause' : 'Resume'}</Button>
        <Button onClick={handleResetStopwatch}>Reset</Button>
      </ButtonContainer>
    </div>
  );
};

export default Stopwatch;
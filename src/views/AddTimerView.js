import React from "react";
import styled from "styled-components";

import Stopwatch from "../components/timers/Stopwatch";
import Countdown from "../components/timers/Countdown";
import XY from "../components/timers/XY";
import Tabata from "../components/timers/Tabata";

const Timers = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #EDD0C2;
`;

const Timer = styled.div`
  border: 3px solid gray;
  padding: 5px;
  margin: 10px;
  font-size: 1.5rem;
  border-radius: 10px;
  background-color: pink;
  width: 20%;
`;

const TimerTitle = styled.div`
color: black;
display: flex;
justify-content: center;
padding: 10px;
`;

const AddTimerView = () => {
  const timers = [
    { title: "Stopwatch", C: <Stopwatch /> },
    { title: "Countdown", C: <Countdown /> },
    { title: "XY", C: <XY /> },
    { title: "Tabata", C: <Tabata /> },
  ];

  return (
    <Timers>
      {timers.map((timer) => (
        <Timer key={`timer-${timer.title}`}>
          <TimerTitle>{timer.title}</TimerTitle>
          {timer.C}
        </Timer>
      ))}
    </Timers>
  );
};

export default AddTimerView;
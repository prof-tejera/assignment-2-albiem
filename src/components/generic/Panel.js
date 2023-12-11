import React, { useContext } from 'react';
import styled from 'styled-components';
import { TimeInput, RoundsInput } from '../generic/Input'
import { TimerContext } from '../../utils/contexts';


const PanelContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #6AC7FC;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid black;
  width: 60%;
  margin: 0 auto;
  min-width: 20%;
`;

const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  gap: 10px;
`;

const TimeInputsRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 5px;
`;

const RoundsInputRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Label = styled.label`
  font-weight: bold;
  margin-bottom: 5px;
  display: block;
  display: flex;
  justify-content: center;
  color: pink;
`;


const Panel = ({ showRounds, rounds }) => {
  const { hours, minutes, seconds, isCountdownActive, setHours, setMinutes, setSeconds, setRounds } = useContext(TimerContext);

  return (
    <PanelContainer>
      <InputsContainer>
        <Label>Duration entry</Label>
        <TimeInputsRow>
          <TimeInput
            unit="hours"
            value={hours}
            onChange={(value) => setHours(value)}
            disabled={isCountdownActive}
            placeholder="HH"
          />
          <TimeInput
            unit="minutes"
            value={minutes}
            onChange={(value) => setMinutes(value)}
            disabled={isCountdownActive}
            placeholder="MM"
          />
          <TimeInput
            unit="seconds"
            value={seconds}
            onChange={(value) => setSeconds(value)}
            disabled={isCountdownActive}
            placeholder="SS"
          />
        </TimeInputsRow>
        <Label>Rounds entry</Label>
        {showRounds && (
          <RoundsInputRow>
            <RoundsInput
              value={rounds}
              onChange={(value) => setRounds(value)}
              placeholder="Rounds"
              disabled={isCountdownActive}
            />
          </RoundsInputRow>
        )}
      </InputsContainer>
    </PanelContainer>
  );
};

export default Panel;
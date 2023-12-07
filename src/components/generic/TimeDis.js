import React from 'react';
import styled from 'styled-components';

const Display = styled.div`
  border-radius: 5px;
  padding: 5px;
  text-align: center;
  font-size: 2em;
  margin: 20px;
  flex-direction: row;
  justify-content: center;
  color: #6ABBFC;
  display: flex;
  justify-content: center;
`;


const TimeDis = ({ label, time }) => {
  const formatTime = () => {
    const hours = Math.floor(time / 3600).toString().padStart(2, '0');
    const minutes = Math.floor((time % 3600) / 60).toString().padStart(2, '0');
    const seconds = (time % 60).toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <div>
      <Display>{formatTime()}</Display>
    </div>
  );
};

export default TimeDis;
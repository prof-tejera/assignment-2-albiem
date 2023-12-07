import React from 'react';
import styled from 'styled-components';

const Display = styled.div`
  display: flex;
  background: #6AC7FC;
  border-radius: 5px;
  padding: 20px;
  text-align: center;
  font-size: 1em;
  margin: 20px 0;
  width: 30%;
  justify-content: center;
  align-items: center;
`;

const RoundDis = ({ rounds, totalRounds }) => {
  return (
    <Display>
      Round {rounds} of {totalRounds}
    </Display>
  );
};

export default RoundDis;

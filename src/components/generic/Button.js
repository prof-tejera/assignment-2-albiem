import React from "react";
import styled from "styled-components";

const StyedButton = styled.button`
  padding: 10px;
  border: 1px solid black;
  border-radius: 5px;
  margin: 5px;
  cursor: pointer;
  background-color:  #6AC7FC;
`;

const Button = ({ onClick, children }) => {
    return (
        <StyedButton onClick={onClick}>
            {children}
        </StyedButton>
    );
};

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 10px;
`;

export default Button;

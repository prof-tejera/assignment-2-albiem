import React from "react";
import styled from "styled-components";
import { TimerContext } from "../../utils/contexts";

const StyledNumberInput = styled.input`
  border: 2px solid #black;
  border-radius: 10px;
  padding: 8px;
  margin: 8px;
  width: 20%;
  background: #EDD0C2;
`;

export const RoundsInput = ({ value, onChange, placeholder, disabled }) => {
    const handleChange = (e) => {
        const newValue = e.target.value.replace(/[^0-9]/g, '');
        onChange(newValue);
      };
  

    return (
      <StyledNumberInput
        type="text"
        inputMode="numeric"
        value={value}
        onChange={handleChange}
        placeholder={placeholder || "Enter rounds"}
        disabled={disabled}
      />
    );
  };

  export const TimeInput = ({ unit, value, onChange, placeholder, disabled }) => {
    const maxValues = {
        hours: 23,
        minutes: 59,
        seconds: 59
    };

    const handleChange = (e) => {
        let newValue = e.target.value.replace(/[^0-9]/g, '');
        if (parseInt(newValue, 10) > maxValues[unit]) {
            newValue = maxValues[unit].toString();
        }
        onChange(newValue);
    };

    return (
        <StyledNumberInput
            type="text"
            inputMode="numeric"
            value={value}
            maxLength={2}
            onChange={handleChange}
            placeholder={placeholder || (unit === 'hours' ? "HH" : unit === 'minutes' ? "MM" : "SS")}
            disabled={disabled}
        />
    );
};

export const RestInput = ({ unit, value, onChange, placeholder, disabled }) => {
    const maxValues = {
        hours: 23,
        minutes: 59,
        seconds: 59
    };

    const handleChange = (e) => {
        let newValue = e.target.value.replace(/[^0-9]/g, '');
        if (parseInt(newValue, 10) > maxValues[unit]) {
            newValue = maxValues[unit].toString();
        }
        onChange(newValue);
    };

    return (
        <StyledNumberInput
            type="text"
            inputMode="numeric"
            value={value}
            maxLength={2}
            onChange={handleChange}
            placeholder={placeholder || (unit === 'hours' ? "HH" : unit === 'minutes' ? "MM" : "SS")}
            disabled={disabled}
        />
    );
};
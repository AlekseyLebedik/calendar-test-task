import { DateSvg } from "assets/icons";
import React, { FC, useRef, useState, forwardRef, ForwardedRef } from "react";
import styled from "styled-components";
import { InputBasic } from "../../shared/ui/input";
import Picker from "react-datepicker";
import moment from "moment";

import "react-datepicker/dist/react-datepicker.css";

const DateInputContainer = styled.div`
  background: inherit;
  display: flex;
  align-items: center;
  gap: 10px;
  input {
    text-align: start;
    font-size: 17px;
    font-weight: 400;
    color: #b9b4c7;
  }
`;

interface IDateProps {
  placeholder?: string;
  time: Date | null;
  onChangeTime: (time: Date | null) => void;
}

type DatePickerInputPropsType = {
  time: Date | null;
  onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
};

const DatePickerInput = forwardRef(
  ({ time, onClick }: DatePickerInputPropsType, forwardRef) => (
    <DateInputContainer onClick={onClick}>
      <InputBasic
        valueOutside={moment(time).format("DD MMM YY h:mm a")}
        onChangeOutside={(value) => {
          forwardRef.current = value;
        }}
        width={200}
        isTouchOutside={true}
      />

      <DateSvg />
    </DateInputContainer>
  )
);

const DatePicker: FC<IDateProps> = ({ time, onChangeTime }) => {
  const inputRef = useRef<HTMLInputElement>();
  return (
    <Picker
      showTimeSelect
      selected={time}
      onChange={(date) => onChangeTime(date)}
      required
      withPortal
      customInput={
        <DatePickerInput
          time={time}
          onClick={onChangeTime}
          forwardRef={inputRef}
        />
      }
    />
  );
};

export { DatePicker, type IDateProps };

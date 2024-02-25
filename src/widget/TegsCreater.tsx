import React, { FC, useState } from "react";
import { ColorPicker } from "shared/ui";
import { InputBasic } from "shared/ui/input";
import { ITegsCreaterProps } from "@interfaces/widget/tegsCreater";
import styled from "styled-components";

const TegsContainer = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  width: 100%;
`;

const AddIcon = styled.div`
  width: 4px;
  height: 20px;
  background-color: #b9b4c7;
  transition: background-color 0.4s ease;
  cursor: pointer;
  &:after {
    content: "";
    display: block;
    width: 4px;
    height: 20px;
    background-color: #b9b4c7;
    transform: rotate(90deg);
    transition: background-color 0.4s ease;
  }
  &:hover {
    background-color: black;
    transition: background-color 0.4s ease;
    &:after {
      background-color: black;
      transition: background-color 0.4s ease;
    }
  }
`;

const TegsCreater: FC<ITegsCreaterProps> = ({ onAddTegs }) => {
  const [tegValue, setTegValue] = useState("");
  const [colorValue, setColorValue] = useState("black");

  return (
    <TegsContainer>
      <InputBasic
        width={200}
        isTouchOutside={true}
        placeholder="Typing your teg ..."
        valueOutside={tegValue}
        onChangeOutside={(value: string) => setTegValue(value)}
      />
      <ColorPicker pickColor={colorValue} onPickColor={setColorValue} />
      <AddIcon
        onClick={() => {
          if (colorValue && tegValue) {
            onAddTegs({ color: colorValue, title: tegValue });
            setTegValue("");
          }
        }}
      />
    </TegsContainer>
  );
};

export { TegsCreater };

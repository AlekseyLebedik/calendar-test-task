import { FC, useState } from "react";
import styled from "styled-components";
import {
  InputContainerPropsType,
  IInputBasic,
} from "@interfaces/shared/ui/input";

const InputContainer = styled.input.attrs<InputContainerPropsType>((props) => ({
  $padding: props.$padding ?? "2px 5px",
}))`
  width: ${(props) => props.$width}px;
  transition: width 0.5s ease-in-out;
  border: none;
  border-bottom: 1px solid black;
  outline: none;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  background-color: inherit;
  padding: ${(props) => props.$padding};
`;

const InputBasic: FC<IInputBasic> = ({
  placeholder = "",
  isTouchOutside = null,
  onChangeOutside,
  width,
  valueOutside,
  ...propsStyled
}) => {
  const [value, setValue] = useState("");
  const [isTouch, setIsTouch] = useState(false);

  const widthTouchExpr =
    isTouchOutside && isTouchOutside !== null ? isTouchOutside : isTouch;

  const valueOutsideExpr = valueOutside || typeof valueOutside === "string";

  return (
    <InputContainer
      {...propsStyled}
      value={valueOutside ?? value}
      onChange={(event) => {
        if (valueOutsideExpr) onChangeOutside(event.target.value);
        else setValue(event.target.value);
      }}
      placeholder={placeholder}
      $width={widthTouchExpr ? width ?? 100 : 50}
      onFocus={() => {
        if (isTouchOutside === null) setIsTouch(true);
      }}
      onBlur={() => {
        if (!valueOutsideExpr) onChangeOutside(value);
        if (isTouchOutside === null) setIsTouch(false);
      }}
    />
  );
};

export { InputBasic, type InputContainerPropsType, type IInputBasic };

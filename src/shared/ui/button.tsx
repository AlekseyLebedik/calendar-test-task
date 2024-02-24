import { FC } from "react";
import styled from "styled-components";
import { IButtonProps } from "@interfaces/shared/ui/button";

const BContainer = styled.button.attrs<IButtonProps>((props) => ({
  $width: props.$width ?? 100,
  $height: props.$height ?? 50,
  $backgroundColor: props.$backgroundColor ?? "transparent",
  $color: props.$color ?? "black",
}))`
  width: ${(props) => props.$width};
  height: ${(props) => props.$height}px;
  background-color: ${(props) => props.$backgroundColor};
  color: ${(props) => props.$color};
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  border-radius: 10px;
  ${(props) => props.$disabled && `pointer-events: none;`}
  transition: background-color 0.2s ease;
  user-select: none;
  cursor: pointer;
  text-transform: uppercase;
  border: none;
  &:hover {
    background-color: ${(props) => props.$backgroundHover};
    color: ${(props) => props.$colorHover};
    transition: background-color 0.4s ease;
  }
`;

const Button: FC<IButtonProps> = (props) => {
  const { title } = props;

  console.log({ props });

  return <BContainer {...props}>{title}</BContainer>;
};

export { type IButtonProps, Button };

import { FC } from "react";
import styled from "styled-components";
import { IButtonProps } from "@interfaces/shared/ui/button";

const BContainer = styled.div.attrs<IButtonProps>((props) => ({
  width: props.styles.width ?? 100,
  height: props.styles.height ?? 50,
  backgroundcolor: props.styles.backgroundColor ?? "transparent",
  color: props.styles.color ?? "black",
}))`
  width: ${(props) => props.styles.width}px;
  height: ${(props) => props.styles.height}px;
  background-color: ${(props) => props.styles.backgroundColor};
  color: ${(props) => props.styles.color};
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
`;

const Button: FC<IButtonProps> = (props) => {
  const { title } = props;

  return <BContainer {...props}>{title}</BContainer>;
};

export { type IButtonProps, Button };

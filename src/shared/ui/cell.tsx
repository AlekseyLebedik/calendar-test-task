import React, { FC } from "react";
import styled from "styled-components";

interface ICellProps extends React.CSSProperties, React.PropsWithChildren {}

const CellContainer = styled.div.attrs<ICellProps>((props) => ({
  ...props,
}))`
  width: 100%;
  height: 100%;
  overflow: hidden;
  overflow-y: auto;
  background-color: ${(props) => props.backgroundColor ?? "currentcolor"};
`;

const Cell: FC<ICellProps> = ({ children, ...props }) => {
  return <CellContainer {...props}>{children}</CellContainer>;
};

export { Cell, type ICellProps };

import { FC } from "react";
import styled from "styled-components";
import { IGridProps } from "@interfaces/shared/ui/grid";

const GContainer = styled.div<IGridProps>`
  font-size: 16px;
  background-color: ${(props) => (props.bgColor ? "#BF4F74" : "transparent")};
`;

const Grid: FC<IGridProps> = (props) => {
  return <GContainer {...props}>GRID TEMPLATE</GContainer>;
};

export { Grid, type IGridProps };

import { SVGProperties } from "@interfaces/assets/svg";
import styled from "styled-components";

export const SVGElement = styled.svg.attrs<SVGProperties>((props) => ({
  ...props,
  scale: props.scale ?? 1,
  width: props.width ?? 24,
  height: props.height ?? 24,
  fill: props.fill ?? "none",
}))`
  transform: scale(${(props) => props.scale});
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  fill: ${(props) => props.fill};
`;

import { SVGProperties } from "@interfaces/assets/svg";
import { SVGElement } from "shared/ui/svg";

export const FileSvg = (propsSVG: SVGProperties) => {
  return (
    <SVGElement {...propsSVG} xmlns="http://www.w3.org/2000/svg">
      <path
        d="M22 10V15C22 20 20 22 15 22H9C4 22 2 20 2 15V9C2 4 4 2 9 2H14"
        stroke="currentcolor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22 10H18C15 10 14 9 14 6V2L22 10Z"
        stroke="currentcolor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SVGElement>
  );
};

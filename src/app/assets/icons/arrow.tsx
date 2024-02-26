import { SVGProperties } from "@interfaces/assets/svg";
import { SVGElement } from "shared/ui/svg";

export const ArrowSvg = (propsSVG: SVGProperties) => {
  return (
    <SVGElement {...propsSVG} xmlns="http://www.w3.org/2000/svg">
      <path
        d="M9.57 5.92993L3.5 11.9999L9.57 18.0699"
        stroke="#292D32"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.5 12H3.67004"
        stroke="#292D32"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SVGElement>
  );
};

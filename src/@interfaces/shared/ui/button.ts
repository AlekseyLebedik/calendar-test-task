import { StyledComponentsProps } from "shared/utils/typescript";

export interface IButtonProps extends StyledComponentsProps {
  title: string;
  $backgroundHover: string;
  $colorHover: string;
  onClick: () => void;
  type: "submit" | "button";
  $disabled?: boolean;
}

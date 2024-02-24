import { StyledComponentsProps } from "shared/utils/typescript";

export interface IInputBasic extends StyledComponentsProps {
  placeholder?: string;
  isTouchOutside?: boolean;
  valueOutside?: string;
  onChangeOutside: (value: string) => void;
  width?: number;
}

export type InputContainerPropsType = Omit<
  IInputBasic,
  "isTouchOutside" | "onChangeOutside" | "placeholder"
>;

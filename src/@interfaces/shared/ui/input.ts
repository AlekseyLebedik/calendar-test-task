import { CSSProperties } from "react";

export interface IInputBasic extends CSSProperties {
  placeholder?: string;
  isTouchOutside?: boolean;
  onChangeOutside: (value: string) => void;
  width?: number;
}

export type InputContainerPropsType = Omit<
  IInputBasic,
  "isTouchOutside" | "onChangeOutside" | "placeholder"
>;

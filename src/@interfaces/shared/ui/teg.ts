import { StyledComponentsProps } from "shared/utils/typescript";

type TegType = {
  color: string;
  title: string;
};

interface ITegProps extends StyledComponentsProps {
  title: string;
  onDelete: (title: string) => void;
}

export { type ITegProps, type TegType };

import { StyledComponentsProps } from "shared/utils/typescript";
interface ICellProps extends StyledComponentsProps, React.PropsWithChildren {
  day: string;
  childLength: number;
  onClick?: (condition: boolean) => void;
  $interaptHover: boolean;
}

type ICellContainerProps = Omit<
  ICellProps,
  "day" | "childLength" | "onClick"
> & { $hoverCell: boolean };

export { type ICellContainerProps, type ICellProps };

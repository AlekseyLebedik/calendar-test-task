import { StyledComponentsProps } from "shared/utils/typescript";
import { TegType } from "./teg";

interface IScheduleProps extends StyledComponentsProps {
  title: string;
  tegs: TegType[];
}

export { type IScheduleProps };

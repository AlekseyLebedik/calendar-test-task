import { StyledComponentsProps } from "shared/utils/typescript";
import { ISchedule } from "context/ScheduleContext";
interface IScheduleBodyProps extends StyledComponentsProps {}

// HOOKS
interface IScheduleElements {
  child: ISchedule[][];
  container: string[];
}

interface IDialogProps {
  isVisible: boolean;
  containerID: string | number | null;
}

type dropAccomulateStateType = {
  deleteContainer: number | null;
  deletedIndex: number | null;
  addedContainer: number | null;
  addedIndex: number | null;
  dropObj: ISchedule | null;
};

interface IChildrensContainerProps {
  childrens: ISchedule[];
}

export {
  type IScheduleBodyProps,
  type dropAccomulateStateType,
  type IDialogProps,
  type IScheduleElements,
  type IChildrensContainerProps,
};

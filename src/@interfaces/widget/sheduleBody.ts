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
  deleteContainer: string | null;
  deletedIndex: number | null;
  addedContainer: string | null;
  addedIndex: number | null;
  dropObj: ISchedule | null;
};

interface IChildrensContainerProps {
  childrens: ISchedule[];
  containerID: string | number | null;
}

export {
  type IScheduleBodyProps,
  type dropAccomulateStateType,
  type IDialogProps,
  type IScheduleElements,
  type IChildrensContainerProps,
};

import { TegType } from "@interfaces/shared/ui/teg";

interface IScheduleDialogProps {
  containerID: number | string | null;
  isVisible: boolean;
  onClose: (condition: boolean) => void;
  initalValue?: IScheduleFormState;
  title: string;
}

interface IScheduleFormState {
  title: string;
  tegs: TegType[];
  startDate: Date | null;
  endDate: Date | null;
}

interface IScheduleFormReducerAction {
  type: SCHEDULE_FORM_TYPE;
  payload: IScheduleFormState;
}

export type SCHEDULE_FORM_TYPE =
  | "CHANGE_START_VALUE"
  | "CHANGE_END_VALUE"
  | "CHANGE_TITLE"
  | "DELETE_TAG"
  | "CLEAR_STATE"
  | "CHANGE_TAG"
  | "CHANGE_BEFORE_INITIAL_VALUE";

export {
  type IScheduleFormReducerAction,
  type IScheduleFormState,
  type IScheduleDialogProps,
};

export type SchedulesType = { [keyTimeDay: number | string]: ISchedule[] };

export interface IScheduleContext {
  schedules: SchedulesType;
  addSchedule: (
    keyTimeDay: string,
    schedule: ISchedule,
    addedIndex: number | null
  ) => void;
  removeSchedule: (keyTimeDay: string, deletedIndex: number | null) => void;

  updateSchedule: (
    keyTimeDay: string,
    updateSchedule: ISchedule,
    newSchedule: ISchedule
  ) => void;
}

export type TegsSchedule = {
  title: string;
  color: string;
};

export interface ISchedule {
  title: string;
  date_end: Date | string;
  date_start: Date | string;
  tegs: Array<TegsSchedule>;
}

export type SCHEDULE_TYPE =
  | "ADD_SCHEDULE"
  | "REMOVE_SCHEDULE"
  | "UPDATE_SHEDULE";

export interface IScheduleReducerAction {
  type: Partial<SCHEDULE_TYPE>;
  payload: {
    newState: SchedulesType;
  };
}

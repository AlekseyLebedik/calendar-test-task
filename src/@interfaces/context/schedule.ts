export type SchedulesType = { [keyTimeDay: number | string]: ISchedule[] };

export interface IScheduleContext {
  schedules: SchedulesType;
  addSchedule: (
    keyTimeDay: number,
    schedule: ISchedule,
    addedIndex: number | null
  ) => void;
  removeSchedule: (keyTimeDay: number, deletedIndex: number | null) => void;
}

export type TegsSchedule = {
  title: string;
  color: string;
};

export interface ISchedule {
  title: string;
  date_start: Date | string;
  date_end: Date | string;
  tegs: Array<TegsSchedule>;
}

export type SCHEDULE_TYPE = "ADD_SCHEDULE" | "REMOVE_SCHEDULE";

export interface IScheduleReducerAction {
  type: Partial<SCHEDULE_TYPE>;
  payload: {
    newState: SchedulesType;
  };
}

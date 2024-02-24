import { PropsWithChildren, createContext, useReducer } from "react";
import {
  SchedulesType,
  ISchedule,
  IScheduleContext,
  IScheduleReducerAction,
  SCHEDULE_TYPE,
} from "@interfaces/context/schedule";
import { scheduleKeys } from "shared/utils/time";
import { keyTimeParser } from "shared/utils/time";

const initialState: SchedulesType = scheduleKeys(new Date()).reduce(
  (acc, time) => ({ ...acc, [time]: [] }),
  {}
);

const reducer = (state: SchedulesType, action: IScheduleReducerAction) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD_SCHEDULE":
      const updatedState = Object.entries(state).reduce((acc, [key, value]) => {
        if (keyTimeParser(key) === payload.key) {
          value.splice(payload.indexItem, 0, payload.schedule!);

          return { ...acc, [key]: Array.from(new Set(value)) };
        }
        return { ...acc, [key]: value };
      }, {});

      return updatedState;
    case "REMOVE_SCHEDULE":
      const deletedResult = [...(state[payload.key] ?? [])];
      deletedResult.splice(payload.indexItem, 1);

      return {
        ...state,
        [payload.key!]: deletedResult,
      };
    default:
      return state;
  }
};

const ScheduleContext = createContext<IScheduleContext>({
  schedules: {},
  addSchedule: () => {
    throw new Error("addSchedule function is not implemented");
  },
  removeSchedule: () => {
    throw new Error("removeSchedule function is not implemented");
  },
});

const ScheduleProvider = ({ children }: PropsWithChildren) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addSchedule = (
    keyTimeDay: number,
    schedule: ISchedule,
    addedIndex: number
  ) => {
    dispatch({
      type: "ADD_SCHEDULE",
      payload: {
        key: keyTimeDay,
        schedule,
        indexItem: addedIndex,
      },
    });
  };

  const removeSchedule = (keyTimeDay: number, deletedIndex: number) => {
    dispatch({
      type: "REMOVE_SCHEDULE",
      payload: { key: keyTimeDay, indexItem: deletedIndex },
    });
  };

  return (
    <ScheduleContext.Provider
      value={{ schedules: state, removeSchedule, addSchedule }}
    >
      {children}
    </ScheduleContext.Provider>
  );
};

export {
  type ISchedule,
  type SchedulesType,
  type IScheduleContext,
  type SCHEDULE_TYPE,
  type IScheduleReducerAction,
  ScheduleContext,
  ScheduleProvider,
};

import { PropsWithChildren, createContext, useReducer } from "react";
import {
  SchedulesType,
  ISchedule,
  IScheduleContext,
  IScheduleReducerAction,
  SCHEDULE_TYPE,
} from "@interfaces/context/schedule";
import { scheduleKeys } from "shared/utils/time";

const initialState: SchedulesType = scheduleKeys(new Date()).reduce(
  (acc, time) => ({ ...acc, [time]: [] }),
  {}
);

const reducer = (state: SchedulesType, action: IScheduleReducerAction) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD_SCHEDULE":
      return payload.newState;
    case "REMOVE_SCHEDULE":
      return payload.newState;
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
    addedIndex: number | null
  ) => {
    if (addedIndex !== null) {
      const updatedState = Object.entries(state).reduce((acc, [key, value]) => {
        if (key.includes(keyTimeDay.toString())) {
          value.splice(addedIndex, 0, schedule);
          return { ...acc, [key]: Array.from(new Set(value)) };
        }

        return { ...acc, [key]: Array.from(new Set(value)) };
      }, {});

      dispatch({
        type: "ADD_SCHEDULE",
        payload: { newState: updatedState },
      });
    }
  };

  const removeSchedule = (keyTimeDay: number, deletedIndex: number | null) => {
    if (deletedIndex !== null) {
      const updatedState = Object.entries(state).reduce((acc, [key, value]) => {
        if (key.includes(keyTimeDay.toString())) {
          value.splice(deletedIndex, 1);
          return { ...acc, [key]: Array.from(new Set(value)) };
        }

        return { ...acc, [key]: Array.from(new Set(value)) };
      }, {});

      dispatch({
        type: "REMOVE_SCHEDULE",
        payload: { newState: updatedState },
      });
    }
  };

  return (
    <ScheduleContext.Provider
      value={{
        schedules: state,
        removeSchedule,
        addSchedule,
      }}
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

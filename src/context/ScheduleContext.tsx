import { PropsWithChildren, createContext, useReducer } from "react";
import {
  SchedulesType,
  ISchedule,
  IScheduleContext,
  IScheduleReducerAction,
  SCHEDULE_TYPE,
} from "@interfaces/context/schedule";
import moment from "moment";

const initialState: SchedulesType = {};

const reducer = (state: SchedulesType, action: IScheduleReducerAction) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD_SCHEDULE":
      return payload.newState;
    case "REMOVE_SCHEDULE":
      return payload.newState;
    case "UPDATE_SHEDULE":
      return { ...state, ...payload.newState };
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
  updateSchedule: () => {
    throw new Error("updateSchedule function is not implemented");
  },
});

const ScheduleProvider = ({ children }: PropsWithChildren) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addSchedule = (
    keyTimeDay: string,
    schedule: ISchedule,
    addedIndex: number | null
  ) => {
    if (addedIndex !== null) {
      console.log(keyTimeDay);
      let updatedState = Object.entries(state).reduce((acc, [key, value]) => {
        if (key.includes(keyTimeDay.toString())) {
          value.splice(addedIndex, 0, schedule);
          return { ...acc, [key]: Array.from(new Set(value)) };
        }

        return { ...acc, [key]: Array.from(new Set(value)) };
      }, {});

      if (!updatedState.hasOwnProperty(keyTimeDay)) {
        updatedState = { ...state, [keyTimeDay]: [schedule] };
      }

      dispatch({
        type: "ADD_SCHEDULE",
        payload: { newState: updatedState },
      });
    }
  };

  const removeSchedule = (keyTimeDay: string, deletedIndex: number | null) => {
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

  const updateSchedule = (
    keyTimeDay: string,
    updateSchedule: ISchedule,
    newSchedule: ISchedule
  ) => {
    let deletedIndex = null;
    let addedIndex = null;
    const deletedKeyTimeDay = moment(updateSchedule.date_start)
      .startOf("day")
      .format("x")
      .concat("/")
      .concat(moment(updateSchedule.date_start).endOf("day").format("x"));

    Object.entries(state).forEach(([key, value]) => {
      if (key.includes(keyTimeDay.toString())) {
        addedIndex = value.findIndex(
          (schedule) => schedule.title === newSchedule.title
        );
        addedIndex = addedIndex == -1 ? 0 : addedIndex;
      }

      if (key.includes(deletedKeyTimeDay)) {
        deletedIndex = value.findIndex(
          (schedule) => schedule.title === updateSchedule.title
        );
      }
    });

    removeSchedule(deletedKeyTimeDay, deletedIndex);
    addSchedule(keyTimeDay, newSchedule, addedIndex);
  };

  return (
    <ScheduleContext.Provider
      value={{
        schedules: state,
        removeSchedule,
        addSchedule,
        updateSchedule,
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

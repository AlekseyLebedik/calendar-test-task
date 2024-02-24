import { useReducer } from "react";

interface IScheduleFormState {
  title: string;
  tegs: TegType[];
  startDate: Date | null;
  endDate: Date | null;
}

type TegType = {
  color: string;
  title: string;
};

interface IScheduleFormReducerAction {
  type: SCHEDULE_FORM_TYPE;
  payload: IScheduleFormState;
}

export type SCHEDULE_FORM_TYPE =
  | "CHANGE_START_VALUE"
  | "CHANGE_END_VALUE"
  | "CHANGE_TITLE"
  | "CHANGE_TAG";

const initialState: IScheduleFormState = {
  title: "",
  startDate: new Date(),
  endDate: new Date(),
  tegs: [],
};

const reducer = (
  state: IScheduleFormState,
  action: IScheduleFormReducerAction
) => {
  const { type, payload } = action;
  switch (type) {
    case "CHANGE_START_VALUE":
      return {
        ...state,
        startDate: payload.startDate,
      };
    case "CHANGE_END_VALUE":
      return {
        ...state,
        endDate: payload.endDate,
      };
    case "CHANGE_TITLE":
      return {
        ...state,
        title: payload.title,
      };
    case "CHANGE_TAG":
      return {
        ...state,
        tegs: payload.tegs,
      };
    default:
      return state;
  }
};

export const useFormSchedule = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const changeStartValue = (startDate: Date | null) => {
    dispatch({
      type: "CHANGE_START_VALUE",
      payload: { ...state, startDate },
    });
  };

  const changeEndValue = (endDate: Date | null) => {
    dispatch({ type: "CHANGE_END_VALUE", payload: { ...state, endDate } });
  };

  const changeTegsValue = (teg: TegType) => {
    dispatch({
      type: "CHANGE_TAG",
      payload: { ...state, tegs: [...state.tegs, teg] },
    });
  };

  const changeTitleValue = (title: string) => {
    dispatch({ type: "CHANGE_TAG", payload: { ...state, title } });
  };

  return {
    state,
    changeStartValue,
    changeEndValue,
    changeTegsValue,
    changeTitleValue,
  };
};

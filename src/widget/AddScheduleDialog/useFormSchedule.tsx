import { useContext, useEffect, useReducer, useState } from "react";
import {
  IScheduleFormReducerAction,
  IScheduleFormState,
} from "@interfaces/widget/addScheduleDialog";
import { TegType } from "@interfaces/shared/ui/teg";
import { ISchedule, ScheduleContext } from "context/ScheduleContext";
import { keyTimeParser } from "shared/utils/time";
import moment from "moment";

const initialState: IScheduleFormState = {
  title: "",
  startDate: null,
  endDate: null,
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
    case "DELETE_TAG":
      return {
        ...state,
        tegs: payload.tegs,
      };
    case "CLEAR_STATE":
      return { ...payload };
    default:
      return state;
  }
};

export const useFormSchedule = ({
  containerID,
}: {
  containerID: string | number | null;
}) => {
  const [date, setDate] = useState<Date | null>(null);
  const [state, dispatch] = useReducer(reducer, initialState);
  const { addSchedule } = useContext(ScheduleContext);

  useEffect(() => {
    if (containerID && typeof containerID === "string") {
      setDate(new Date(keyTimeParser(containerID)));
    }
    if (typeof containerID === "number") setDate(new Date(containerID));
  }, [containerID]);

  useEffect(() => {
    if (date) {
      dispatch({
        type: "CHANGE_START_VALUE",
        payload: { ...state, startDate: date },
      });
      dispatch({
        type: "CHANGE_END_VALUE",
        payload: { ...state, endDate: date },
      });
    }
  }, [date]);

  const changeTitleValue = (title: string) => {
    dispatch({ type: "CHANGE_TITLE", payload: { ...state, title } });
  };

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

  const onDeleteTeg = (title: string) => {
    const updatedTegs = state.tegs.filter((teg) => teg.title !== title);
    dispatch({ type: "DELETE_TAG", payload: { ...state, tegs: updatedTegs } });
  };

  const isDisabled =
    state.title.length < 1 || !state.endDate || !state.startDate;

  const onSubmitSchedule = () => {
    const schedule: ISchedule = {
      tegs: state.tegs,
      title: state.title,
      date_start: state.startDate!,
      date_end: state.endDate!,
    };

    dispatch({
      type: "CLEAR_STATE",
      payload: { tegs: [], endDate: date!, startDate: date!, title: "" },
    });

    const keyTime = Number(moment(state.startDate).format("x"));
    addSchedule(keyTime, schedule, 0);
  };

  return {
    state,
    onDeleteTeg,
    changeStartValue,
    changeEndValue,
    changeTegsValue,
    changeTitleValue,
    onSubmitSchedule,
    isDisabled,
  };
};

import moment, { Moment } from "moment";
import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";
import { ScheduleContext, SchedulesType } from "./ScheduleContext";
import { scheduleKeys } from "shared/utils/time";

type ScheduleSettingsContext = {
  currentDay: Moment;
  changeCurrentDay: (operation: "subs" | "add") => void;
  scheduleSlice: SchedulesType;
};

export const ScheduleSettingsContext = createContext<ScheduleSettingsContext>({
  currentDay: moment(),
  changeCurrentDay: (operation: "subs" | "add") => {
    throw new Error("changeCurrentDay not implimented!");
  },
  scheduleSlice: {} as SchedulesType,
});

export const ScheduleSettingsProvider = ({ children }: PropsWithChildren) => {
  const { schedules } = useContext(ScheduleContext);
  const [currentDay, setCurrentDay] = useState<Moment>(moment());
  const [scheduleSlice, setScheduleSlice] = useState<SchedulesType>(
    {} as SchedulesType
  );

  useEffect(() => {
    const currentDate = scheduleKeys(currentDay).reduce((acc, keyTime) => {
      if (schedules.hasOwnProperty(keyTime))
        return { ...acc, [keyTime]: schedules[keyTime] };
      return { ...acc, [keyTime]: [] };
    }, {} as SchedulesType);

    setScheduleSlice(currentDate);
  }, [currentDay, schedules]);

  const changeCurrentDay = (operation: "subs" | "add") => {
    if (operation === "subs") {
      setCurrentDay(currentDay.clone().subtract(1, "month"));
    }

    if (operation === "add") {
      setCurrentDay(currentDay.clone().add(1, "month"));
    }
  };

  return (
    <ScheduleSettingsContext.Provider
      value={{ currentDay, changeCurrentDay, scheduleSlice }}
    >
      {children}
    </ScheduleSettingsContext.Provider>
  );
};

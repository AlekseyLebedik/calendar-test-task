import { ScheduleSettingsContext } from "context/ScheduleSettings";
import { useContext } from "react";

const useScheduleHeader = () => {
  const { changeCurrentDay, currentDay } = useContext(ScheduleSettingsContext);
  return { changeCurrentDay, currentDay: currentDay.format("MMMM") };
};

export { useScheduleHeader };

import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";
import { GetPublicHolidays } from "services/holidayServices";
import { ScheduleSettingsContext } from "./ScheduleSettings";

type HolidayType = {
  title: string;
  date_start: Date | string | number;
  date_end: Date | string | number;
};

type HolidayContextType = {
  holidays: { [keyTimeDay: string]: HolidayType };
  setCountry: (value: string | null) => void;
};

export const HolidayContext = createContext<HolidayContextType>({
  holidays: {},
  setCountry: () => {
    throw new Error("setCounrty doesnt implements");
  },
});

export const HolidayProvider = ({ children }: PropsWithChildren) => {
  const { currentDay } = useContext(ScheduleSettingsContext);
  const [coutry, setCountry] = useState<string | null>(null);
  const [holidays, setHoliday] = useState<{
    [keyTimeDay: string]: HolidayType;
  }>({});

  useEffect(() => {
    if (coutry) {
      const years = currentDay.format("YYYY");

      GetPublicHolidays(coutry, years).then((holidays) => setHoliday(holidays));
      setCountry(null);
    }
  }, [coutry]);

  return (
    <HolidayContext.Provider value={{ holidays, setCountry }}>
      {children}
    </HolidayContext.Provider>
  );
};

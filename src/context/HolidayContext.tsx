import moment from "moment";
import { createContext, PropsWithChildren, useEffect, useState } from "react";

type HolidayType = {
  title: string;
  date_start: Date | string | number;
};

export const HolidayContext = createContext<HolidayType[]>([]);

export const HolidayProvider = ({ children }: PropsWithChildren) => {
  const [holiday, setHoliday] = useState<HolidayType[]>([]);

  useEffect(() => {
    const countryCode = moment().zoneName();

    console.log({ countryCode }, window.location);
  }, []);

  return (
    <HolidayContext.Provider value={holiday}>
      {children}
    </HolidayContext.Provider>
  );
};

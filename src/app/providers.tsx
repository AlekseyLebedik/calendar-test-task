import React from "react";
import { ScheduleProvider } from "context/ScheduleContext";
import { HolidayProvider } from "context/HolidayContext";

const Providers = (props: React.PropsWithChildren) => {
  return (
    <HolidayProvider>
      <ScheduleProvider>{props.children}</ScheduleProvider>
    </HolidayProvider>
  );
};

export default Providers;

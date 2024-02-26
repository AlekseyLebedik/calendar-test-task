import React from "react";
import { ScheduleProvider } from "context/ScheduleContext";
import { HolidayProvider } from "context/HolidayContext";
import { ScheduleSettingsProvider } from "context/ScheduleSettings";

const Providers = (props: React.PropsWithChildren) => {
  return (
    <HolidayProvider>
      <ScheduleProvider>
        <ScheduleSettingsProvider>{props.children}</ScheduleSettingsProvider>
      </ScheduleProvider>
    </HolidayProvider>
  );
};

export default Providers;

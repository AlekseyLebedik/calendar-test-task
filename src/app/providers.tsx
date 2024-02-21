import React from "react";
import { ScheduleProvider } from "context/ScheduleContext";

const Providers = (props: React.PropsWithChildren) => {
  return <ScheduleProvider>{props.children}</ScheduleProvider>;
};

export default Providers;

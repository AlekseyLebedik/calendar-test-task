import { ISchedule } from "context/ScheduleContext";

interface IScheduleWithDialogProps extends ISchedule {
  containerID: number | string | null;
}

export { type IScheduleWithDialogProps };

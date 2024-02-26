import { useState, FC, memo, useMemo } from "react";
import { Schedule } from "shared/ui";
import { IScheduleWithDialogProps } from "@interfaces/widget/scheduleWithDialog";
import UpdateDialog from "widget/ScheduleDialog/ScheduleDialog";

const ScheduleWithDialog: FC<IScheduleWithDialogProps> = ({
  containerID,
  ...schedule
}) => {
  const [isOpenUpdateDialog, setIsOpenUpdateDialog] = useState(false);

  const initialValue = useMemo(() => {
    return {
      title: schedule.title,
      tegs: schedule.tegs,
      endDate: new Date(schedule.date_end),
      startDate: new Date(schedule.date_start),
    };
  }, [schedule]);

  return (
    <div
      onClick={(event) => {
        event.stopPropagation();
        setIsOpenUpdateDialog(true);
      }}
    >
      <Schedule title={schedule.title} tegs={schedule.tegs} />
      <UpdateDialog
        title="Update schedule"
        isVisible={isOpenUpdateDialog}
        containerID={containerID}
        onClose={setIsOpenUpdateDialog}
        initalValue={isOpenUpdateDialog ? initialValue : undefined}
      />
    </div>
  );
};

export default memo(ScheduleWithDialog);

import { useCallback, useContext, useEffect, useState } from "react";
import { ISchedule, ScheduleContext } from "context/ScheduleContext";
import {
  IScheduleElements,
  dropAccomulateStateType,
  IDialogProps,
} from "@interfaces/widget/sheduleBody";
import { ScheduleSettingsContext } from "context/ScheduleSettings";
import { HolidayContext } from "context/HolidayContext";

const initalDropAccomulateState: dropAccomulateStateType = {
  deleteContainer: null,
  deletedIndex: null,
  addedContainer: null,
  addedIndex: null,
  dropObj: null,
};

const useScheduleBody = () => {
  const [dropAccomulate, setDropAccomulate] = useState<dropAccomulateStateType>(
    initalDropAccomulateState
  );
  const [dialogProps, setDialogProps] = useState<IDialogProps>({
    isVisible: false,
    containerID: null,
  });
  const [containerElements, setContainerElements] = useState<
    Array<string | number>
  >([]);
  const [childElements, setChildElements] = useState<ISchedule[][]>([]);
  const { addSchedule, removeSchedule } = useContext(ScheduleContext);
  const { holidays } = useContext(HolidayContext);

  const { scheduleSlice } = useContext(ScheduleSettingsContext);

  useEffect(() => {
    if (
      dropAccomulate.addedIndex !== null &&
      dropAccomulate.deletedIndex !== null &&
      dropAccomulate.dropObj
    ) {
      const {
        addedIndex,
        deletedIndex,
        deleteContainer,
        addedContainer,
        dropObj,
      } = dropAccomulate;

      removeSchedule(deleteContainer!, deletedIndex);
      addSchedule(addedContainer!, dropObj, addedIndex);

      setDropAccomulate(initalDropAccomulateState);
    }
  }, [dropAccomulate]);

  useEffect(() => {
    const elements: IScheduleElements = Object.keys(scheduleSlice).reduce(
      (acc, container: string) => {
        let child = scheduleSlice[container] ?? [];
        return {
          child: [...acc.child, child],
          container: [...acc.container, container],
        };
      },
      { child: [], container: [] } as IScheduleElements
    );

    setContainerElements(elements.container);
    setChildElements(elements.child);
  }, [scheduleSlice]);

  const onClickHandler = useCallback(
    (containerID: string) => (condition: boolean) => {
      setDialogProps({ isVisible: condition, containerID });
    },
    [setDialogProps]
  );

  const onCloseDialog = useCallback(
    (condition: boolean) => {
      setDialogProps({ isVisible: condition, containerID: null });
    },
    [setDialogProps]
  );

  return {
    childElements,
    containerElements,
    dialogProps,
    onCloseDialog,
    onClickHandler,
    addSchedule,
    removeSchedule,
    setDropAccomulate,
    holidays,
  };
};

export { useScheduleBody };

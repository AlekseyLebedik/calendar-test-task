import { useCallback, useContext, useEffect, useState } from "react";
import { ISchedule, ScheduleContext } from "context/ScheduleContext";
import {
  IScheduleElements,
  dropAccomulateStateType,
  IDialogProps,
} from "@interfaces/widget/sheduleBody";

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
  const { schedules, addSchedule, removeSchedule } =
    useContext(ScheduleContext);

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
    const elements: IScheduleElements = Object.keys(schedules).reduce(
      (acc, container) => {
        const child = schedules[container] ?? [];
        return {
          child: [...acc.child, child],
          container: [...acc.container, container],
        };
      },
      { child: [], container: [] } as IScheduleElements
    );

    setContainerElements(elements.container);
    setChildElements(elements.child);
  }, [schedules]);

  const onClickHandler = useCallback(
    (containerID: number) => (condition: boolean) => {
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
  };
};

export { useScheduleBody };

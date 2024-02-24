import { useCallback, useContext, useEffect, useState } from "react";
import { ISchedule, ScheduleContext } from "context/ScheduleContext";

interface IElements {
  child: ISchedule[][];
  container: string[];
}

interface IDialogProps {
  isVisible: boolean;
  containerID: string | number | null;
}

const useScheduleBody = () => {
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
    const elements: IElements = Object.keys(schedules).reduce(
      (acc, container) => {
        const child = schedules[container] ?? [];
        return {
          child: [...acc.child, child],
          container: [...acc.container, container],
        };
      },
      { child: [], container: [] } as IElements
    );

    setContainerElements(elements.container);
    setChildElements(elements.child);
  }, [schedules]);

  const onClickHandler = useCallback(
    (containerID: number | string) => (condition: boolean) => {
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
  };
};

export { useScheduleBody };

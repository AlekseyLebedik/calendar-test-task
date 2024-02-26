import { FC, useId, useState } from "react";
import styled from "styled-components";
import { useScheduleBody } from "./useScheduleBody";
import { Cell, StickySchedule } from "shared/ui";
import { Container, Draggable, DropResult } from "react-smooth-dnd";
import AddScheduleDialog from "widget/ScheduleDialog/ScheduleDialog";
import ScheduleWithDialog from "widget/ScheduleWithDialog";

import {
  IScheduleBodyProps,
  IChildrensContainerProps,
} from "@interfaces/widget/sheduleBody";

const ScheduleB = styled.div.attrs<IScheduleBodyProps>((props) => ({
  $gridAutoRows: props.$gridAutoRows ?? "150px",
  $gridTemplateColumns:
    props.$gridTemplateColumns ?? "repeat(7, minmax(150px, 1fr))",
}))`
  display: grid;
  height: 100%;
  width: 100%;
  gap: 3px;
  background-color: white;
  grid-template-columns: ${(props) => props.$gridTemplateColumns};
  grid-auto-rows: ${(props) => props.$gridAutoRows};
  border-bottom: 4px solid white;
`;

const ScheduleBody: FC<IScheduleBodyProps> = (props) => {
  const [stopPropagate, setStopPropagate] = useState(false);
  const uniqKey = useId();

  const {
    containerElements,
    childElements,
    onClickHandler,
    dialogProps,
    onCloseDialog,
    setDropAccomulate,
    holidays,
  } = useScheduleBody();

  return (
    <ScheduleB {...props} className="schedule-container">
      {containerElements.map((container, index) => {
        const isHolidayDayExist = holidays[container];
        return (
          <Cell
            key={uniqKey + index}
            $backgroundColor={"#ebebeb"}
            day={container.toString()}
            childLength={Number(childElements[index].length)}
            onClick={
              !stopPropagate ? onClickHandler(container.toString()) : undefined
            }
            $interaptHover={dialogProps.isVisible}
          >
            {isHolidayDayExist && (
              <StickySchedule
                title={holidays[container].title}
                $position="sticky"
                $top={0}
                $backgroundColor={"#ebebeb"}
                $color="black"
                tegs={[]}
              />
            )}
            {/* @ts-ignore */}
            <Container
              style={{ display: "flex", flexDirection: "column", gap: 10 }}
              groupName="schedule_cell"
              orientation="vertical"
              removeOnDropOut={true}
              onDrop={(params: DropResult) => {
                const containerID = container.toString();

                if (params.addedIndex !== null) {
                  setDropAccomulate((acc) => ({
                    ...acc,
                    addedIndex: params.addedIndex,
                    addedContainer: containerID,
                    dropObj: params.payload.dropObj,
                  }));
                }
                if (params.removedIndex !== null) {
                  setDropAccomulate((acc) => ({
                    ...acc,
                    deletedIndex: params.removedIndex,
                    deleteContainer: containerID,
                  }));
                }
              }}
              getChildPayload={(indexChild) => {
                const dropObj = childElements[index][indexChild];
                return { dropObj, removedIndex: indexChild };
              }}
              onDragStart={() => {
                setStopPropagate(true);
              }}
              onDragEnd={() => {
                setStopPropagate(false);
              }}
              dragHandleSelector=".schedule-container"
              dropPlaceholder={{
                animationDuration: 300,
                showOnTop: true,
                className: "drop-preview",
              }}
            >
              <ChidrensContainer
                childrens={childElements[index]}
                containerID={container}
              />
            </Container>
          </Cell>
        );
      })}
      <AddScheduleDialog
        isVisible={dialogProps.isVisible}
        containerID={dialogProps.containerID}
        onClose={onCloseDialog}
        title="Add schedule"
      />
    </ScheduleB>
  );
};

const ChidrensContainer: FC<IChildrensContainerProps> = ({
  childrens,
  containerID,
}) => {
  const uniqChildKey = useId();
  return childrens.map((child, index) => {
    return (
      //@ts-ignore
      <Draggable key={uniqChildKey + index}>
        <ScheduleWithDialog {...child} containerID={containerID} />
      </Draggable>
    );
  });
};

export { ScheduleBody, type IScheduleBodyProps };

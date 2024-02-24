import React, { FC, useId, useMemo } from "react";
import styled from "styled-components";
import { useScheduleBody } from "./useScheduleBody";
import { Cell, Schedule, StickySchedule } from "shared/ui";
import { Container, Draggable, DropResult } from "react-smooth-dnd";
import { StyledComponentsProps } from "shared/utils/typescript";
import AddScheduleDialog from "widget/AddScheduleDialog/AddScheduleDialog";
import { keyTimeParser } from "shared/utils/time";

interface IScheduleBodyProps extends StyledComponentsProps {}

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
`;

const ScheduleBody: FC<IScheduleBodyProps> = (props) => {
  const uniqKey = useId();
  const {
    containerElements,
    childElements,
    onClickHandler,
    dialogProps,
    onCloseDialog,
  } = useScheduleBody();

  return (
    <ScheduleB {...props} className="schedule-container">
      {containerElements.map((container, index) => {
        return (
          <Cell
            key={uniqKey + container}
            $backgroundColor={"#ebebeb"}
            day={container.toString()}
            childLength={Number(childElements[index])}
            onClick={onClickHandler(keyTimeParser(container))}
            $interaptHover={dialogProps.isVisible}
          >
            {/* <StickySchedule
                title="Header"
                position="sticky"
                top={0}
                backgroundColor={"#ebebeb"}
                color="black"
              /> */}
            <Container
              key={uniqKey + container}
              dragClass="dragClass"
              dropClass="dropClass"
              removeOnDropOut={false}
              groupName="schedule_cell"
              orientation="vertical"
              onDrop={(params: DropResult) => {
                console.log({ params });
              }}
              dragHandleSelector=".schedule-container"
              dropPlaceholder={{
                animationDuration: 300,
                showOnTop: true,
                className: "drop-preview",
              }}
            >
              <Draggable>
                {childElements[index].map((child) => {
                  return (
                    <Schedule
                      key={uniqKey + child.title}
                      title={child.title}
                      $backgroundColor={"white"}
                    />
                  );
                })}
              </Draggable>
            </Container>
          </Cell>
        );
      })}
      <AddScheduleDialog
        isVisible={dialogProps.isVisible}
        containerID={dialogProps.containerID}
        onClose={onCloseDialog}
      />
    </ScheduleB>
  );
};

export { ScheduleBody, type IScheduleBodyProps };

import React, { FC } from "react";
import styled from "styled-components";
import { useScheduleBody } from "./useScheduleBody";
import { Cell, Schedule, StickySchedule } from "shared/ui";

interface IScheduleBodyProps extends React.CSSProperties {}

const ScheduleB = styled.div.attrs<IScheduleBodyProps>((props) => ({
  ...props,
  gridAutoRows: props.gridAutoRows ?? "150px",
  gridTemplateColumns:
    props.gridTemplateColumns ?? "repeat(7, minmax(150px, 1fr))",
}))`
  display: grid;
  height: 100%;
  width: 100%;
  gap: 3px;
  background-color: white;
  grid-template-columns: ${(props) => props.gridTemplateColumns};
  grid-auto-rows: ${(props) => props.gridAutoRows};
`;

const ScheduleBody: FC<IScheduleBodyProps> = (props) => {
  const body = useScheduleBody();
  return (
    <ScheduleB>
      <Cell backgroundColor={"#ebebeb"}>
        <StickySchedule
          title="Header"
          position="sticky"
          top={0}
          backgroundColor={"#ebebeb"}
          color="black"
        />
        <Schedule title="Hello" />
      </Cell>
      <Cell backgroundColor={"#ebebeb"}>
        <StickySchedule
          title="Header"
          position="sticky"
          top={0}
          backgroundColor={"#ebebeb"}
          color="black"
        />
        <Schedule title="Hello" />
      </Cell>
      <Cell backgroundColor={"#ebebeb"}>
        <StickySchedule
          title="Header"
          position="sticky"
          top={0}
          backgroundColor={"#ebebeb"}
          color="black"
        />
        <Schedule title="Hello" />
      </Cell>
      <Cell backgroundColor={"#ebebeb"}>
        <StickySchedule
          title="Header"
          position="sticky"
          top={0}
          backgroundColor={"#ebebeb"}
          color="black"
        />
        <Schedule title="Hello" />
      </Cell>
      <Cell backgroundColor={"#ebebeb"}>
        <StickySchedule
          title="Header"
          position="sticky"
          top={0}
          backgroundColor={"#ebebeb"}
          color="black"
        />
        <Schedule title="Hello" />
      </Cell>
      <Cell backgroundColor={"#ebebeb"}>
        <StickySchedule
          title="Header"
          position="sticky"
          top={0}
          backgroundColor={"#ebebeb"}
          color="black"
        />
        <Schedule title="Hello" />
      </Cell>
      <Cell backgroundColor={"#ebebeb"}>
        <StickySchedule
          title="Header"
          position="sticky"
          top={0}
          backgroundColor={"#ebebeb"}
          color="black"
        />
        <Schedule title="Hello" />
      </Cell>
      <Cell backgroundColor={"#ebebeb"}>
        <StickySchedule
          title="Header"
          position="sticky"
          top={0}
          backgroundColor={"#ebebeb"}
          color="black"
        />
        <Schedule title="Hello" />
      </Cell>
      <Cell backgroundColor={"#ebebeb"}>
        <StickySchedule
          title="Header"
          position="sticky"
          top={0}
          backgroundColor={"#ebebeb"}
          color="black"
        />
        <Schedule title="Hello" />
      </Cell>
      <Cell backgroundColor={"#ebebeb"}>
        <StickySchedule
          title="Header"
          position="sticky"
          top={0}
          backgroundColor={"#ebebeb"}
          color="black"
        />
        <Schedule title="Hello" />
      </Cell>
    </ScheduleB>
  );
};

export { ScheduleBody, type IScheduleBodyProps };

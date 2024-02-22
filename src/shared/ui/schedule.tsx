import React, { FC } from "react";
import styled from "styled-components";

interface IScheduleProps extends React.CSSProperties {
  title: string;
}

const ScheduleContainer = styled.div.attrs<Omit<IScheduleProps, "title">>(
  (props) => ({
    ...props,
    height: props.height ?? "50px",
    position: props.position ?? "static",
    top: props.top ?? 0,
    backgroundColor: props.backgroundColor ?? "inherit",
    color: props.color ?? "currentcolor",
  })
)`
  width: 100%;
  white-space: nowrap;
  padding: 5px;
  height: ${(props) => props.height};
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};
`;

const ScheduleTitle = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Schedule: FC<IScheduleProps> = ({ title, ...props }) => {
  return (
    <ScheduleContainer {...props}>
      <ScheduleTitle>{title}</ScheduleTitle>
    </ScheduleContainer>
  );
};

const StickyScheduleStyled = styled(ScheduleContainer)`
  position: sticky;
  top: ${(props) => props.top ?? 0};
  z-index: 10;
`;

const StickySchedule: FC<IScheduleProps> = ({ title, ...props }) => {
  return (
    <StickyScheduleStyled {...props}>
      <ScheduleTitle>{title}</ScheduleTitle>
    </StickyScheduleStyled>
  );
};

export { Schedule, StickySchedule, type IScheduleProps };

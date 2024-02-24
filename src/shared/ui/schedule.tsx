import { FC } from "react";
import { StyledComponentsProps } from "shared/utils/typescript";
import styled from "styled-components";

interface IScheduleProps extends StyledComponentsProps {
  title: string;
}

const ScheduleContainer = styled.div.attrs<Omit<IScheduleProps, "title">>(
  (props) => ({
    ...props,
    $height: props.$height ?? "50px",
    $position: props.$position ?? "static",
    $top: props.$top ?? 0,
    $backgroundColor: props.$backgroundColor ?? "inherit",
    $color: props.$color ?? "currentcolor",
  })
)`
  width: calc(100% - 10px);
  white-space: nowrap;
  padding: 5px;
  height: ${(props) => props.$height};
  background-color: ${(props) => props.$backgroundColor};
  color: ${(props) => props.$color};
  margin: 0px 5px;
  border-radius: 3px;
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
  top: ${(props) => props.$top ?? 0};
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

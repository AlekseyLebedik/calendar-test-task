import styled from "styled-components";
import { ScheduleBody } from "widget/ScheduleBody/ScheduleBody";
import { ScheduleHeader } from "widget/ScheduleHeader/ScheduleHeader";

const ScheduleContainer = styled.main`
  min-height: 100vh;
  background-color: #eeeff1;
  color: #a4afb2;
`;

const Schedule = () => {
  return (
    <ScheduleContainer id="container_schedule">
      <ScheduleHeader />
      <ScheduleBody />
    </ScheduleContainer>
  );
};

export default Schedule;

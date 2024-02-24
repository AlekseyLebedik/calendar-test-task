import styled from "styled-components";
import { ScheduleBody } from "widget/ScheduleBody/ScheduleBody";

const ScheduleContainer = styled.main`
  min-height: 100vh;
  background-color: #eeeff1;
  color: #a4afb2;
`;

const Schedule = () => {
  return (
    <ScheduleContainer>
      <ScheduleBody />
    </ScheduleContainer>
  );
};

export default Schedule;

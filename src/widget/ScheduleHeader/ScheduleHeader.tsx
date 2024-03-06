import styled from "styled-components";
import { ActionPanel } from "widget/ActionPanel";
import { useScheduleHeader } from "./useScheduleHeader";
import { ArrowSvg } from "assets/icons";
import { CountrySelector } from "widget/CountrySelector/CounrtySelector";
import { HEADER } from "./contants";

const ScheduleHeaderContainer = styled.div`
  height: 100px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  & .navigate-panel {
    border-bottom: 2px solid #f39f5a;
    display: flex;
    justify-content: space-between;
    &__controller {
      display: flex;
      align-items: center;
      gap: 15px;
    }
    &__left-controll,
    &__right-controll {
      display: flex;
      align-items: center;
      background-color: inherit;
      user-select: none;
    }
    &__current-month {
      user-select: none;
      font-size: 20px;
      font-weight: 400;
      color: #676768;
      width: 100px;
      display: flex;
      justify-content: center;
      text-transform: uppercase;
    }
  }
  & .header-table {
    display: grid;
    grid-template-columns: repeat(7, minmax(150px, 1fr));
    height: 50px;
    gap: 3px;
    &__item {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 20px;
      font-weight: 400;
      color: #676768;
      text-transform: uppercase;
      border-bottom: 10px solid #e3e4e5;
    }
  }
`;

const ScheduleHeader = () => {
  const { changeCurrentDay, currentDay } = useScheduleHeader();
  return (
    <ScheduleHeaderContainer>
      <div className="navigate-panel">
        <ActionPanel $backgroundColor="#f39f5a" />
        <div className="navigate-panel__controller">
          <div
            className="navigate-panel__left-controll"
            onClick={() => changeCurrentDay("subs")}
          >
            <ArrowSvg />
          </div>
          <div className="navigate-panel__current-month">{currentDay}</div>
          <div
            className="navigate-panel__right-controll"
            onClick={() => changeCurrentDay("add")}
          >
            <ArrowSvg style={{ transform: "rotate(180deg)" }} />
          </div>
        </div>
        <CountrySelector />
      </div>
      <div className="header-table">
        {HEADER.map((day) => {
          return (
            <div className={"header-table__item"} key={day}>
              {day}
            </div>
          );
        })}
      </div>
    </ScheduleHeaderContainer>
  );
};

export { ScheduleHeader };

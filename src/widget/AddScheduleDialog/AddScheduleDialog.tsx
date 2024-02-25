import React, { FC, memo } from "react";
import { DatePicker } from "shared/ui";
import Dialog from "shared/ui/dialog";
import { InputBasic } from "shared/ui/input";
import styled from "styled-components";
import { useFormSchedule } from "./useFormSchedule";
import { TegsCreater } from "widget/TegsCreater";
import TegsDisplay from "widget/TegsDisplayer";
import { IAddScheduleDialogProps } from "@interfaces/widget/addScheduleDialog";

const ScheduleDialogContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  min-height: 300px;
  justify-content: flex-start;
  gap: 20px;
  & .title-container,
  .date-container__item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    label {
      font-size: 20px;
      font-weight: 500;
      color: #b9b4c7;
    }
  }

  & .title-container,
  .tegs-container {
    display: flex;
    gap: 30px;
    input {
      width: 100%;
      text-align: start;
      font-size: 17px;
      font-weight: 400;
      color: #b9b4c7;
      &::placeholder {
        font-size: 17px;
        font-weight: 400;
        color: #b9b4c7;
        opacity: 0.7;
      }
    }
  }
  & .date-container,
  .tegs-container {
    display: flex;
    gap: 30px;
    align-items: center;
  }

  & .title-container,
  .date-container,
  .tegs-container,
  .tegs-container {
    .label {
      color: #f39f5a;
      font-weight: 600;
      text-transform: uppercase;
      border: none;
    }
  }
`;

const AddScheduleDialog: FC<IAddScheduleDialogProps> = ({
  isVisible,
  onClose,
  containerID,
}) => {
  const {
    state,
    changeStartValue,
    changeEndValue,
    changeTegsValue,
    changeTitleValue,
    onDeleteTeg,
    isDisabled,
    onSubmitSchedule,
  } = useFormSchedule({ containerID });

  return (
    <Dialog
      onClose={onClose}
      isVisible={isVisible}
      onSubmit={onSubmitSchedule}
      title="Add schedule"
      isDisabled={isDisabled}
    >
      <ScheduleDialogContainer>
        <div className="title-container">
          <span className="label">Title</span>
          <InputBasic
            valueOutside={state.title}
            onChangeOutside={(value) => {
              changeTitleValue(value);
            }}
            isTouchOutside={true}
            placeholder="Typing your title ..."
          />
        </div>
        <div className="date-container">
          <div className="date-container__item">
            <span className="label">Start</span>
            <DatePicker
              time={state.startDate}
              onChangeTime={changeStartValue}
            />
          </div>
          <div className="date-container__item">
            <span className="label">End</span>
            <DatePicker time={state.endDate} onChangeTime={changeEndValue} />
          </div>
        </div>
        <div className="tegs-container">
          <span className="label">Tegs</span>
          <TegsCreater onAddTegs={changeTegsValue} tegs={state.tegs} />
        </div>
        <TegsDisplay tegs={state.tegs} onDelete={onDeleteTeg} />
      </ScheduleDialogContainer>
    </Dialog>
  );
};

export default memo(AddScheduleDialog);

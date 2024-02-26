import React, { FC, memo, useId } from "react";
import { ITegsProps } from "@interfaces/widget/tegsDisplayer";
import styled from "styled-components";
import { Teg } from "shared/ui";

const TegsDisplayContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  min-height: 50px;
  gap: 10px;
  align-items: flex-start;
  justify-content: flex-end;
  width: 100%;
  max-width: 600px;
`;

const TegsDisplay: FC<ITegsProps> = ({ tegs, onDelete }) => {
  const uniqID = useId();

  return (
    <TegsDisplayContainer>
      {tegs.map((teg) => {
        return (
          <Teg
            onDelete={onDelete}
            key={uniqID + teg.title}
            title={teg.title}
            $backgroundColor={teg.color}
          />
        );
      })}
    </TegsDisplayContainer>
  );
};

export default memo(TegsDisplay);

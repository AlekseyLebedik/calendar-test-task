import React, { FC, memo, useId } from "react";
import { TegType } from "@interfaces/shared/ui/teg";
import styled from "styled-components";
import { Teg } from "shared/ui";

interface ITegsProps {
  tegs: TegType[];
  onDelete: (title: string) => void;
}

const TegsDisplayContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: end;
  min-height: 50px;
  gap: 10px;
  align-items: flex-start;
  justify-content: flex-end;
  width: 100%;
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
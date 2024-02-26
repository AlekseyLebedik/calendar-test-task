import { FC } from "react";
import styled from "styled-components";
import { ITegProps } from "@interfaces/shared/ui/teg";
import { BacketSvg } from "assets/icons";

const TegContainer = styled.div<Omit<ITegProps, "title" | "onDelete">>`
  display: flex;

  & .teg {
    &__title {
      font-size: 13px;
      font-weight: 500;
      text-transform: uppercase;
      color: white;
      padding: 5px 10px;
      border-radius: 5px 0px 0px 5px;
      background-color: ${(props) => props.$backgroundColor};
    }
    &__delete-btn {
      border: 2px solid ${(props) => props.$backgroundColor};
      border-left: none;
      cursor: pointer;
      border-radius: 0px 5px 5px 0px;
    }
    &__title,
    &__delete-btn {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;

const Teg: FC<ITegProps> = ({ title, onDelete, ...propsStyled }) => {
  return (
    <TegContainer {...propsStyled}>
      <div className="teg__title">{title}</div>
      <div className="teg__delete-btn" onClick={() => onDelete(title)}>
        <BacketSvg stroke="white" scale={0.8} />
      </div>
    </TegContainer>
  );
};

export { Teg };

import { FC, useMemo } from "react";
import styled from "styled-components";
import moment from "moment";
import { keyTimeParser } from "shared/utils/time";
import { ICellContainerProps, ICellProps } from "@interfaces/shared/ui/cell";

const CellContainer = styled.div.attrs<ICellContainerProps>((props) => ({
  ...props,
  $backgroundColor: props.$backgroundColor ?? "currentcolor",
}))`
  width: 100%;
  height: 100%;
  overflow: hidden;
  overflow-y: auto;
  user-select: none;
  transition: background-color, transform 0.4s ease-in-out;
  background-color: ${(props) => props.$backgroundColor};
  ${(props) =>
    !props.$interaptHover &&
    `&:hover {
    ${
      props.$hoverCell
        ? `background-color: #f39f5a;
    transform: scale(0.97);
    box-shadow: 3px 3px 3px #b9b4c7;`
        : `
          border: 3px solid #f39f5a;
        `
    }
    z-index: 0;
    transition: background-color, transform 0.4s ease-in-out;
    & > div {
      ${props.$hoverCell ? `color: white;` : `color: #f39f5a;`}
    }
  }`}
`;

const CellHeader = styled.div`
  height: 20px;
  padding: 0px 10px;
  display: flex;
  align-items: center;
  font-weight: 800;
  gap: 20px;
  background-color: inherit;
  color: #676768;
  font-size: 14px;
  position: sticky;
  top: 0;
  z-index: 10;

  top: 0px;
  & span {
    color: #676768;
    opacity: 0.9;
    font-weight: 500;
  }
`;

const Cell: FC<ICellProps> = ({
  children,
  day,
  childLength,
  onClick,
  ...props
}) => {
  const headerDay = moment(keyTimeParser(day));

  const isStratedOrEndMonth = useMemo(() => {
    return (
      headerDay.clone().startOf("month").isSame(headerDay) ||
      headerDay.clone().endOf("month").isSame(headerDay)
    );
  }, [headerDay]);

  return (
    <CellContainer
      $hoverCell={childLength < 1}
      onClick={() => onClick && onClick(true)}
      {...props}
    >
      <CellHeader>
        {headerDay.format("DD")}
        &nbsp;
        {isStratedOrEndMonth && headerDay.format("MMMM")}
        {childLength > 0 && <span>{childLength} card</span>}
      </CellHeader>
      {children}
    </CellContainer>
  );
};

export { Cell, type ICellProps };

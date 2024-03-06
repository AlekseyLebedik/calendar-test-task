import { FC, useId, useMemo } from "react";
import styled from "styled-components";
import { IScheduleProps } from "@interfaces/shared/ui/schedule";
import { HolidaySvg } from "assets/icons";
import { useSearchParams } from "react-router-dom";
import { returnedURLParams } from "shared/utils/params";

const ScheduleContainer = styled.div.attrs<
  Omit<IScheduleProps, "title" | "tegs" | "onClickEvent">
>((props) => ({
  ...props,
  $height: props.$height ?? "50px",
  $position: props.$position ?? "static",
  $top: props.$top ?? 0,
  $backgroundColor: props.$backgroundColor ?? "inherit",
  $color: props.$color ?? "currentcolor",
}))`
  width: calc(100% - 10px);
  white-space: nowrap;
  padding: 5px;
  height: ${(props) => props.$height};
  background-color: white;
  color: ${(props) => props.$color};
  margin: 0px 5px;
  border-radius: 3px;

  & .tegs {
    display: flex;
    justify-content: flex-start;
    gap: 3px;
    &__item {
      width: 30px;
      height: 6px;
      border-radius: 5px;
    }
  }
`;

const ScheduleTitle = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Schedule: FC<IScheduleProps> = ({ title, tegs, ...props }) => {
  const searchParams = useSearchParams();
  const uniqKey = useId();

  const isHideWithSearch = useMemo(() => {
    const search = returnedURLParams(searchParams[0]);
    if (search?.tegs) {
      return Boolean(tegs.find((teg) => teg.title.includes(search.tegs)));
    }
    if (search?.title) {
      return title.includes(search?.title);
    }
    return true;
  }, [title, tegs, searchParams[0]]);

  if (!isHideWithSearch) return null;

  return (
    <ScheduleContainer {...props}>
      <div className="tegs">
        {tegs.map((teg, index) => {
          return (
            <div
              className="tegs__item"
              style={{ backgroundColor: teg.color }}
              key={uniqKey + index}
            />
          );
        })}
      </div>
      <ScheduleTitle>{title}</ScheduleTitle>
    </ScheduleContainer>
  );
};

const StickyScheduleStyled = styled(ScheduleContainer)`
  position: sticky;
  top: ${(props) => props.$top ?? 0};
  height: 40px;
  z-index: 10;
  margin-bottom: 10px;
  color: ${(props) => props.$color ?? "currentcolor"} !important;
`;

const ScheduleStickyTitle = styled.span`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 5px solid #f39f5a;
  & .title {
    max-width: 70%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  & svg {
    color: #f39f5a;
  }
`;

const StickySchedule: FC<IScheduleProps> = ({ title, ...props }) => {
  return (
    <StickyScheduleStyled {...props}>
      <ScheduleStickyTitle>
        <div className="title">{title}</div>
        <HolidaySvg />
      </ScheduleStickyTitle>
    </StickyScheduleStyled>
  );
};

export { Schedule, StickySchedule, type IScheduleProps };

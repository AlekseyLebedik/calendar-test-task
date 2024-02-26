import moment, { type Moment, type unitOfTime } from "moment";
import { START_TIME_INDEX } from "shared/global.contants";

type ReturnedTimeObjType<TTime> = {
  [timeMarker: number]: Array<TTime>;
};

export const getStartFromTime = (
  time: string | Date | number,
  startOfStr: unitOfTime.StartOf,
  isTimestamp: boolean = true
): Moment | number => {
  const startTime = moment(time).startOf(startOfStr);

  return isTimestamp ? Number(startTime.format("x")) : startTime;
};

export const sortedTime = <
  TTime extends { date_start: string | number | Date }
>(
  timeArray: Array<TTime>
): ReturnedTimeObjType<TTime> => {
  const cache: ReturnedTimeObjType<TTime> = {};

  timeArray.forEach((time) => {
    const keyTime = Number(moment(time.date_start).startOf("date"));
    if (!cache[keyTime]) {
      cache[keyTime] = [];
    }

    cache[keyTime].push(time);
  });

  return cache;
};

export const scheduleKeys = (currentDay: string | number | Date | Moment) => {
  const NUMBER_DAY = 35;
  const startMonth = moment(currentDay).clone().startOf("month");
  const endMonth = moment(currentDay).clone().endOf("month");

  const countExtraDay = NUMBER_DAY - endMonth.daysInMonth();
  const substract =
    countExtraDay % 2 == 0 ? countExtraDay / 2 : (countExtraDay - 1) / 2 + 1;

  const arrayDates = [];

  for (
    const date = startMonth.clone().subtract(substract, "day");
    Number(date.format("x")) <
    Number(endMonth.clone().add(countExtraDay - substract, "day"));
    date.add(1, "day")
  ) {
    arrayDates.push(
      date.format("x").concat("/").concat(date.clone().endOf("day").format("x"))
    );
  }

  return arrayDates;
};

export const keyTimeParser = (key: string | number) => {
  if (typeof key === "string") return Number(key.split("/")[START_TIME_INDEX]);
  return key;
};

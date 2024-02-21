import moment, { type Moment, type unitOfTime } from "moment";

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

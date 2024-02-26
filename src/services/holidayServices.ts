import { concatUrl } from "shared/utils/url";
import { axiosInstance } from "./axios";
import { ENTRY_POINTS } from "./enrtyPoint";
import moment from "moment";

interface ResponseData {
  date: Date | string;
  localName: string;
  name: string;
  countryCode: string;
  fixed: boolean;
  global: boolean;
  counties: [string];
  launchYear: number;
  types: [];
}

export const GetPublicHolidays = async (countryCode: string, year: string) => {
  const url = concatUrl(ENTRY_POINTS.PUBLIC_HOLIDAY, year, countryCode);
  const { data }: { data: ResponseData[] } = await axiosInstance().get(url);

  return data.reduce((acc, holiday) => {
    const keyTime = moment(holiday.date)
      .startOf("day")
      .format("x")
      .concat(...["/", moment(holiday.date).endOf("day").format("x")]);
    const obj = {
      [keyTime]: {
        date_start: keyTime,
        date_end: keyTime,
        title: holiday.name,
        isHoliday: true,
        tegs: [],
      },
    };
    return { ...acc, ...obj };
  }, {});
};

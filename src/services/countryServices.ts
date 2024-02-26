import { OptionType } from "@interfaces/shared/ui/selector";
import { axiosInstance } from "./axios";
import { ENTRY_POINTS } from "./enrtyPoint";

type CountryType = {
  countryCode: "string";
  name: "string";
};

export const GetAllCountryServices = async (): Promise<OptionType[]> => {
  const { data }: { data: CountryType[] } = await axiosInstance().get(
    ENTRY_POINTS.AVIABLE_COUNTRY
  );

  return data.map((country) => ({
    value: country.countryCode,
    label: country.name,
  }));
};

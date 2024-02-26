import { OptionType } from "@interfaces/shared/ui/selector";
import { HolidayContext } from "context/HolidayContext";
import { useContext, useEffect, useState } from "react";
import { SingleValue, ActionMeta } from "react-select";
import { GetAllCountryServices } from "services/countryServices";

export const useCountrySelector = () => {
  const [options, setOptions] = useState<OptionType[]>([]);
  const [optionChosen, setOptionChosen] = useState<OptionType | null>(null);
  const { setCountry } = useContext(HolidayContext);

  useEffect(() => {
    GetAllCountryServices().then((options) => {
      setOptions(options);
    });
  }, []);

  const onClickEvent = (
    newValue: SingleValue<OptionType>,
    actionMeta: ActionMeta<OptionType>
  ) => {
    setOptionChosen(newValue);
    setCountry(newValue?.value ?? null);
  };
  return { options, optionChosen, onClickEvent };
};

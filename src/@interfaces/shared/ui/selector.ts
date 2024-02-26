import { ActionMeta, SingleValue } from "react-select";

type OptionType = { value: string; label: string };
interface ISelectorProps {
  options: OptionType[];
  value: OptionType | null;
  onClickEvent: (
    newValue: SingleValue<OptionType>,
    actionMeta: ActionMeta<OptionType>
  ) => void;
}

export { type ISelectorProps, type OptionType };

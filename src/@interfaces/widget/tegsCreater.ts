import { TegType } from "@interfaces/shared/ui/teg";

interface ITegsCreaterProps {
  onAddTegs: (teg: TegType) => void;
  tegs: TegType[];
}

export { type ITegsCreaterProps };

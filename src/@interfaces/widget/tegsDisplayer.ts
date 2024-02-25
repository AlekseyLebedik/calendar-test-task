import { TegType } from "@interfaces/shared/ui/teg";
interface ITegsProps {
  tegs: TegType[];
  onDelete: (title: string) => void;
}

export { type ITegsProps };

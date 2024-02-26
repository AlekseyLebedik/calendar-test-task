import { FC } from "react";
import { SearchInput } from "shared/ui/searchInput";
import { StyledComponentsProps } from "shared/utils/typescript";
import styled from "styled-components";
import { ConvertToFile } from "./ConvertToFile";
import { Screenshot } from "./Screenshot";

const ActionPanelContainer = styled.div.attrs<StyledComponentsProps>(
  (props) => ({
    ...props,
    $backgroundColor: props.$backgroundColor ?? "#b9b4c7",
  })
)`
  min-width: 100px;
  padding: 0px 5px;
  height: 50px;
  display: inline-grid;
  grid-template-columns: repeat(4, auto);
  transition: grid-template-columns 1s ease;
  gap: 10px;
  justify-content: center;
  border-radius: 0px;
  align-items: center;
  background-color: ${(props) => props.$backgroundColor};

  & input {
    color: white;
    border-color: white;
    font-size: 16px;
    font-weight: 300;
    &::placeholder {
      color: white;
    }
  }
  svg {
    color: white;
    cursor: pointer;
  }
`;

const ActionPanel: FC<StyledComponentsProps> = (styledProps) => {
  return (
    <ActionPanelContainer {...styledProps}>
      <SearchInput
        searchTag="title"
        placeholder="Search for title...."
        width={200}
      />
      <SearchInput
        searchTag="tegs"
        placeholder="Search for tegs...."
        width={200}
      />
      <ConvertToFile />
      <Screenshot />
    </ActionPanelContainer>
  );
};

export { ActionPanel };

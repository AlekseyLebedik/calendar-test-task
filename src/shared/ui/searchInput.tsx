import { FC, useState } from "react";
import styled from "styled-components";
import { useSearchURL } from "shared/hooks/useSearchURL";
import { ISearchInput } from "@interfaces/shared/ui/searchInput";

import { SearchSvg } from "assets/icons";
import { InputBasic } from "./input";

const SearchInputContainer = styled.div`
  min-width: 100px;
  height: 50px;
  display: inline-grid;
  grid-template-columns: repeat(2, auto);
  transition: grid-template-columns 1s ease;
  gap: 10px;
  justify-content: center;
  align-items: center;
`;

const SearchInput: FC<ISearchInput> = ({
  placeholder = "Search ...",
  width = 150,
  searchTag,
  onChange,
}) => {
  const { addSearchParams } = useSearchURL();
  const [isTouch, setIsTouch] = useState(false);

  return (
    <SearchInputContainer>
      <InputBasic
        width={width}
        placeholder={placeholder}
        onChangeOutside={(value) => {
          if (onChange) onChange(value);
          if (value.length < 1) setIsTouch(false);

          addSearchParams(searchTag, value);
        }}
        isTouchOutside={isTouch}
      />
      <SearchSvg
        scale={0.5}
        onClick={() => setIsTouch((prev) => !prev)}
        cursor="pointer"
      />
    </SearchInputContainer>
  );
};

export { SearchInput, type ISearchInput };

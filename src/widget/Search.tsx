import { SearchInput } from "shared/ui/searchInput";
import styled from "styled-components";

const SearchContainer = styled.div`
  min-width: 100px;
  max-width: 500px;
  padding: 0px 5px;
  height: 50px;
  display: inline-grid;
  grid-template-columns: repeat(2, auto);
  transition: grid-template-columns 1s ease;
  gap: 10px;
  justify-content: center;
  align-items: center;
`;

const SearchWidget = () => {
  return (
    <SearchContainer>
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
    </SearchContainer>
  );
};

export { SearchWidget };

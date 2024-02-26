import { Selector } from "shared/ui/selector";
import styled from "styled-components";
import { useCountrySelector } from "./useCountrySelector";

const CountrySelectorContainer = styled.div`
  display: flex;
  align-items: center;
`;

const CountrySelector = () => {
  const { options, onClickEvent, optionChosen } = useCountrySelector();
  return (
    <CountrySelectorContainer>
      <Selector
        value={optionChosen}
        options={options}
        onClickEvent={onClickEvent}
      />
    </CountrySelectorContainer>
  );
};

export { CountrySelector };

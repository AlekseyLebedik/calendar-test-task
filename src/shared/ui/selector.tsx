import { FC } from "react";
import styled from "styled-components";
import Select from "react-select";
import { ISelectorProps } from "@interfaces/shared/ui/selector";

const CountrySelectorContainer = styled.div`
  z-index: 30;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Selector: FC<ISelectorProps> = ({ value, options, onClickEvent }) => {
  return (
    <CountrySelectorContainer>
      <Select
        styles={{
          container: (base) => ({
            ...base,
            width: 200,
            color: "black",
          }),
        }}
        defaultValue={value}
        onChange={onClickEvent}
        options={options}
        theme={(theme) => ({
          ...theme,
          borderRadius: 0,
          colors: {
            ...theme.colors,
            primary25: "#f39f5a",
            primary50: "#f39f5a",
            primary: "black",
          },
        })}
      />
    </CountrySelectorContainer>
  );
};

export { Selector, type ISelectorProps };

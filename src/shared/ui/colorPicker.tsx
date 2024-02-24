import { FC, useState, Fragment } from "react";
import { SwatchesPicker, ColorResult } from "react-color";
import Dialog from "./dialog";
import styled from "styled-components";
import { StyledComponentsProps } from "shared/utils/typescript";

interface IColorProps extends StyledComponentsProps {
  pickColor: string;
  onPickColor: (color: string) => void;
}

const ColorPickerContainer = styled.div.attrs<
  Omit<IColorProps, "onPickColor" | "pickColor">
>((props) => ({
  $width: props.$width ?? 30,
  $height: props.$height ?? 30,
}))`
  width: ${(props) => props.$width}px;
  height: ${(props) => props.$height}px;
  background-color: ${(props) => props.$backgroundColor};
  border-radius: 50%;
  cursor: pointer;
  transition: opacity 0.4s ease;
  &:hover {
    opacity: 0.7;
    transition: opacity 0.4s ease;
  }
`;

const ColorPicker: FC<IColorProps> = ({
  onPickColor,
  pickColor,
  ...propsStyled
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Fragment>
      <ColorPickerContainer
        {...propsStyled}
        onClick={() => setIsOpen(true)}
        $backgroundColor={pickColor}
      />

      <Dialog
        isVisible={isOpen}
        onClose={() => setIsOpen(false)}
        title="Color Picker"
        withoutBtn={true}
      >
        <div style={{ gridColumn: "1/3" }}>
          <SwatchesPicker
            onChangeComplete={(color: ColorResult) => {
              onPickColor(color.hex);
              setIsOpen(false);
            }}
            width={400}
            height={400}
          />
        </div>
      </Dialog>
    </Fragment>
  );
};

export { ColorPicker, type IColorProps };

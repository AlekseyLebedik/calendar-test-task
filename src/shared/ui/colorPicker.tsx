import { FC, useState } from "react";
import { SwatchesPicker, ColorResult } from "react-color";
import Dialog from "./dialog";
import styled from "styled-components";
import { StyledComponentsProps } from "shared/utils/typescript";

interface IColorProps extends StyledComponentsProps {}

const ColorPickerContainer = styled.div.attrs<IColorProps>((props) => ({
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

const ColorPicker: FC<IColorProps> = (props) => {
  const [color, setColor] = useState<string>("black");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <ColorPickerContainer
        {...props}
        onClick={() => setIsOpen(true)}
        $backgroundColor={color}
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
              setColor(color.hex);
              setIsOpen(false);
            }}
            width={400}
            height={400}
          />
        </div>
      </Dialog>
    </div>
  );
};

export { ColorPicker, type IColorProps };

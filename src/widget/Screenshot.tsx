import { useEffect, useRef } from "react";
import { ScreenshotSvg } from "assets/icons";
import styled from "styled-components";
//@ts-ignore
import { useScreenshot, createFileName } from "use-react-screenshot";

const ScreenshotContainer = styled.div`
  height: 35px;
  border-radius: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.5s ease;
  padding: 5px;
  position: relative;

  & svg {
    margin-left: 2px;
  }

  &:hover {
    background-color: #676768;
    transition: background-color 0.5s ease;
  }
`;

const Screenshot = () => {
  const ref = useRef<HTMLElement | null>(null);
  useEffect(() => {
    if (!ref.current) {
      ref.current = document.getElementById("container_schedule");
    }
  }, []);

  const [_, takeScreenShot] = useScreenshot({
    type: "image/jpeg",
    quality: 1.0,
  });

  const download = (
    image: string,
    { name = "img", extension = "jpg" } = {}
  ) => {
    const htmlElement = document.createElement("a");
    htmlElement.href = image;
    htmlElement.download = createFileName(extension, name);
    htmlElement.click();
  };

  const downloadScreenshot = () => takeScreenShot(ref.current).then(download);

  return (
    <ScreenshotContainer onClick={downloadScreenshot}>
      <ScreenshotSvg scale={0.9} />;
    </ScreenshotContainer>
  );
};

export { Screenshot };

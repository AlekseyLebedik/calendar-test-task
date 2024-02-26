import { FC, useContext, useState } from "react";
import { FileSvg } from "assets/icons";
import { ScheduleContext } from "context/ScheduleContext";
import moment from "moment";
import styled from "styled-components";
import { ConvertToFileProps } from "@interfaces/widget/convertToFile";

const ConvertToFileContainer = styled.a`
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

export const ConvertToFile: FC<ConvertToFileProps> = ({
  extension = { standart: "json", webStandart: "application/json" },
}) => {
  const { schedules } = useContext(ScheduleContext);
  const [covertUrl, setConverUrl] = useState<string | null>(null);

  const convertToFile = () => {
    const jsonData = Object.values(schedules).reduce((acc, arraySchedules) => {
      const arr = arraySchedules.reduce(
        (acc, schedule) => ({
          ...acc,
          [moment(schedule.date_start as string).format("DD-MMM-YY")]: {
            ...schedule,
          },
        }),
        {}
      );
      return { ...acc, ...arr };
    }, {});

    const data = JSON.stringify(jsonData);
    const blob = new Blob([data], { type: extension.webStandart });
    setConverUrl(URL.createObjectURL(blob));
  };

  return (
    <ConvertToFileContainer
      href={covertUrl ?? ""}
      onClick={convertToFile}
      download={`default.${extension.standart}`}
    >
      <FileSvg scale={0.9} />
    </ConvertToFileContainer>
  );
};

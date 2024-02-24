import {
  createContext,
  PropsWithChildren,
  useEffect,
  useState,
  ReactNode,
} from "react";

type DialogContextType = {
  dialog: ReactNode | JSX.Element | null;
  setDialog: (value: ReactNode | JSX.Element | null) => void;
};

export const HolidayContext = createContext<DialogContextType>({
  dialog: null,
  setDialog: () => {
    throw new Error("setDialog function is not implemented");
  },
});

export const HolidayProvider = ({ children }: PropsWithChildren) => {
  const [dialog, setDialog] = useState<DialogContextType["dialog"]>(null);

  useEffect(() => {}, []);

  return (
    <HolidayContext.Provider value={{ dialog, setDialog }}>
      {children}
    </HolidayContext.Provider>
  );
};

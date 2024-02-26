import React, {
  PropsWithChildren,
  useRef,
  memo,
  Fragment,
  FC,
  useEffect,
} from "react";
import { createPortal } from "react-dom";
import { StyledComponentsProps } from "shared/utils/typescript";
import styled from "styled-components";
import { Button } from "./button";

const DialogWrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  background-color: rgb(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  z-index: 50;
`;

const DialogContainer = styled.div`
  background: white;
  display: grid;
  padding: 13px 16px;
  grid-template-columns: 1fr auto;
  grid-template-rows: auto auto;
  border-radius: 10px;

  & .submit-btn {
    grid-row: 3;
    grid-column: 1/3;
    width: 100%;
  }
  & .title {
    font-size: 20px;
    font-weight: 900;
    color: #f39f5a;
    text-transform: uppercase;
    background-color: #f39f5a;
    color: white;
    width: 200px;
    position: relative;
    left: -16px;
    top: -13px;
    border-radius: 10px 0px 0px 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
  }
  & .close-btn {
    width: 25px;
    height: 25px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
      &:after,
      &:before {
        transition: background 0.5s ease;
        background: black;
      }
    }
    &:before,
    &:after {
      transition: background 0.5s ease;
      content: "";
      width: 3px;
      height: 20px;
      display: inline-block;
      background: #b9b4c7;
    }

    &:after {
      transform: rotate(45deg) translateY(2px);
    }
    &:before {
      transform: rotate(-45deg) translateY(2px);
    }
  }
`;

interface IDialogProps extends PropsWithChildren, StyledComponentsProps {
  onClose: (condition: boolean) => void;
  isVisible: boolean;
  title: string;
  isDisabled?: boolean;
  withoutBtn?: boolean;
  onSubmit?: () => void;
}

const DialogStatless: FC<
  Pick<
    IDialogProps,
    "onClose" | "children" | "title" | "isDisabled" | "withoutBtn" | "onSubmit"
  >
> = ({
  children,
  onClose,
  title,
  isDisabled = false,
  withoutBtn,
  onSubmit,
}) => {
  return (
    <DialogWrapper>
      <DialogContainer>
        <div className="title">{title}</div>
        <div
          className="close-btn"
          onClick={(event) => {
            event.stopPropagation();
            onClose(false);
          }}
        />
        {children}
        {!withoutBtn && (
          <div className="submit-btn">
            <Button
              $backgroundHover="#f39f5a"
              $colorHover="white"
              title="submit"
              $backgroundColor="#b9b4c7"
              $width="100%"
              onClick={() => {
                if (onSubmit) onSubmit();
              }}
              type="submit"
              $disabled={isDisabled}
            />
          </div>
        )}
      </DialogContainer>
    </DialogWrapper>
  );
};

const Dialog: FC<IDialogProps> = ({
  children,
  isVisible,
  onClose,
  title,
  isDisabled,
  withoutBtn = false,
  onSubmit,
}) => {
  const portalRef = useRef<HTMLElement | null>(null);
  useEffect(() => {
    portalRef.current = document.getElementById("portalID");
  }, []);

  if (!isVisible) return null;

  return (
    <Fragment>
      {portalRef.current &&
        createPortal(
          <DialogStatless
            onClose={onClose}
            title={title}
            isDisabled={isDisabled}
            withoutBtn={withoutBtn}
            onSubmit={onSubmit}
          >
            {children}
          </DialogStatless>,
          portalRef.current
        )}
    </Fragment>
  );
};

export default memo(Dialog);
export { type IDialogProps };

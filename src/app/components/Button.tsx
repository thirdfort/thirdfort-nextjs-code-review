import React from "react";
import JoyButton, { ButtonProps as JoyButtonProps } from "@mui/joy/Button";

type ExcludedButtonProps =
  | "color"
  | "component"
  | "startDecorator"
  | "endDecorator"
  | "fullWidth"
  | "loadingIndicator"
  | "loadingPosition"
  | "variant";

type ExcludedButtonSlotProps =
  | "startDecorator"
  | "endDecorator"
  | "loadingIndicatorCenter";

type JoyButtonSlotProps = JoyButtonProps["slotProps"];
type SlotProps = Omit<NonNullable<JoyButtonSlotProps>, ExcludedButtonSlotProps>;

export type ButtonProps = React.PropsWithChildren<
  Omit<JoyButtonProps, ExcludedButtonProps> &
    Partial<{
      primary: boolean;
      error: boolean;
      slotProps: SlotProps;
    }>
>;

const getColor = (
  props: Pick<ButtonProps, "primary">
): JoyButtonProps["color"] => {
  if (props.primary) {
    return "primary";
  }
  return "neutral";
};

export const Button = ({ primary, error, key, ...props }: ButtonProps) => {
  return <JoyButton {...props} color={getColor({ primary })} />;
};

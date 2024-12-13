import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  PropsWithChildren,
} from "react";

export enum ButtonType {
  PRIMARY = "primary",
  DANGER = "danger",
  SUCCESS = "success",
  WARNING = "warning",
}

const classesByButtonType = new Map<ButtonType, string>();

classesByButtonType.set(ButtonType.PRIMARY, "bg-blue-900");
classesByButtonType.set(ButtonType.DANGER, "bg-red-900");
classesByButtonType.set(ButtonType.SUCCESS, "bg-green-900");
classesByButtonType.set(ButtonType.WARNING, "bg-yellow-900");

export const Button = ({
  children,
  buttonType = ButtonType.PRIMARY,
  className,
  ...props
}: PropsWithChildren & { buttonType?: ButtonType } & DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >) => {
  const classes = classesByButtonType.get(buttonType) ?? "";
  return (
    <button className={`py-2 px-4 ${classes} ${className}`} {...props}>
      {children}
    </button>
  );
};

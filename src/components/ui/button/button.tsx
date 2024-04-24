import { FC } from "react";
import classnames from "classnames";

import { Icons } from "@/components/icons";
import classes from "./button.module.scss";

type ButtonVariant = "default" | "icon";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

const Button: FC<ButtonProps> = ({
  variant = "default",
  disabled,
  children,
  ...rest
}) => (
  <button
    className={classnames(classes.button, {
      [classes.iconVariant]: variant === "icon",
      [classes.disabled]: disabled,
    })}
    disabled={disabled}
    {...rest}
  >
    {variant === "icon" && <Icons.Search width={22} height={22} />}
    <span
      className={classnames({
        [classes.text]: variant === "icon",
        [classes.defaultVariant]: variant === "default",
      })}
    >
      {children}
    </span>
  </button>
);

export default Button;

import { FC } from "react";
import classnames from "classnames";

import { Card } from "@/components/ui/card";
import classes from "./firm-card.module.scss";

type FirmCardVariant = "default" | "border";
type FirmCardSize = "normal" | "large";

interface FirmCardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: FirmCardVariant;
  size?: FirmCardSize;
}

const FirmCard: FC<FirmCardProps> = ({
  variant = "default",
  size = "normal",
  ...rest
}) => (
  <Card
    className={classnames({
      [classes.largeSize]: size === "large",
      [classes.normalSize]: size === "normal",
      [classes.borderVariant]: variant === "border",
      [classes.defaultVariant]: variant === "default",
    })}
    {...rest}
  />
);

export default FirmCard;

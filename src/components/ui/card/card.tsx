import { FC } from "react";
import classnames from "classnames";

import classes from "./card.module.scss";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

const Card: FC<CardProps> = ({ className, ...props }) => (
  <div className={classnames(classes.card, className)} {...props} />
);

export default Card;

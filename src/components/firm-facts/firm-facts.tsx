import { FC } from "react";

import { Icons } from "@/components/icons";
import classes from "./firm-facts.module.scss";
import { GridLayout } from "./grid-layout";

interface FirmFactsProps extends React.HTMLAttributes<HTMLDivElement> {}

const FirmFacts: FC<FirmFactsProps> = () => (
  <div className={classes.container}>
    <Icons.Close className={classes.closeIcon} />
    {/* header */}
    <div className={classes.header}>
      <h2 className={classes.title}>Firm Facts</h2>
      <div className={classes.br} />
    </div>
    {/* layout */}
    <GridLayout />
  </div>
);

export default FirmFacts;

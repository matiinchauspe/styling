import { Icons } from "@/components/icons";
import classes from "./firm-facts.module.scss";
import { GridLayout } from "./grid-layout";

const FirmFacts = () => (
  <div className={classes.container}>
    <Icons.Close className={classes.closeIcon} />
    {/* title */}
    <h2 className={classes.title}>Firm Facts</h2>
    <div className={classes.br} />
    {/* layout */}
    <GridLayout />
  </div>
);

export default FirmFacts;

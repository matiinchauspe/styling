import { FC } from "react";
import classnames from "classnames";

import { FirmCard } from "@/components/firm-card";
import { Button } from "@/components/ui/button";
import classes from "./grid.module.scss";

interface GridProps extends React.HTMLAttributes<HTMLDivElement> {}

const Grid: FC<GridProps> = () => (
  <div className={classes.grid}>
    {/* large */}
    <div className={classnames(classes.item, classes.itemLarge)}>
      <FirmCard size="large">
        <Button variant="icon">
          This is a two line button that terminates with ellipsis
        </Button>
      </FirmCard>
    </div>
    {/* top row */}
    <div className={classnames(classes.item, classes.itemDefault)}>
      <FirmCard>
        <Button variant="icon">
          This is a two line button that terminates with ellipsis
        </Button>
      </FirmCard>
    </div>
    <div className={classnames(classes.item, classes.itemDefault)}>
      <FirmCard>
        <Button>This a one line button</Button>
      </FirmCard>
    </div>
    <div className={classnames(classes.item, classes.itemDefault)}>
      <FirmCard>
        <Button variant="icon">
          This is a two line button that terminates with ellipsis
        </Button>
      </FirmCard>
    </div>
    {/* bottom row */}
    <div className={classnames(classes.item, classes.itemDefault)}>
      <FirmCard variant="border">
        <Button
          variant="icon"
          style={{
            marginTop: "-120px",
          }}
        >
          This is a two line button that terminates with ellipsis
        </Button>
      </FirmCard>
    </div>
    <div className={classnames(classes.item, classes.itemDefault)}>
      <FirmCard variant="border">
        <Button
          variant="icon"
          disabled
          style={{
            marginTop: "-120px",
          }}
        >
          This is a two line button that terminates with ellipsis
        </Button>
      </FirmCard>
    </div>
    <div className={classnames(classes.item, classes.itemDefault)}>
      <FirmCard variant="border">
        <Button
          variant="icon"
          style={{
            marginTop: "-120px",
          }}
        >
          This is a two line button that terminates with ellipsis
        </Button>
      </FirmCard>
    </div>
  </div>
);

export default Grid;

import { ReactElement } from "react";

import Tooltip from "@mui/material/Tooltip";

type TooltipProps = {
  title: string;
  children: ReactElement<any, any>;
  sxObj?: object;
  arrow?: boolean;
};

const NavToolTip = ({ title, sxObj, arrow = true, children }: TooltipProps) => {
  return (
    <Tooltip
      title={title}
      arrow={arrow}
      sx={sxObj}
      slotProps={{
        popper: {
          modifiers: [
            {
              name: "offset",
              options: {
                offset: [0, -10],
              },
            },
          ],
        },
      }}
    >
      {children}
    </Tooltip>
  );
};

export default NavToolTip;

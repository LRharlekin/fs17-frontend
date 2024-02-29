import React from "react";

import { styled, lighten } from "@mui/material/styles";
import ButtonGroup from "@mui/material/ButtonGroup";

const QuantityButtonGroup = styled(ButtonGroup)(({ theme }) => ({
  border: `1px solid ${lighten(theme.palette.secondary.light, 0.5)}`,
  "& > *:not(:last-child)": {
    marginRight: theme.spacing(1),
  },
}));

export default QuantityButtonGroup;

// const QuantityButtonGroup = () => {
//   return (
//     <div>QuantityButtonGroup</div>
//   )
// }

// export default QuantityButtonGroup

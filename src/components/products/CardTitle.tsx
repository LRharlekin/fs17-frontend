import { Box, Typography } from "@mui/material";

import formatCurrency from "../../utils/formatCurrency";

type CardTitleProps = {
  title: string;
  price: number;
};

const CardTitle = ({ title, price }: CardTitleProps) => {
  return (
    <Box
      sx={{
        display: "flex",

        alignItems: "flex-start",
        justifyContent: "space-between",
      }}
    >
      <Typography
        gutterBottom
        fontSize="1rem"
        // variant="body1"
        component="h6"
      >
        {title}
      </Typography>
      <Typography
        ml={2}
        gutterBottom
        color="grey.700"
        fontSize="1rem"
        // variant="body1"
        component="h6"
      >
        {formatCurrency(price)}
      </Typography>
    </Box>
  );
};

export default CardTitle;

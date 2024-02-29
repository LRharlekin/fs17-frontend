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
        height: "3.7rem", // 2 * (1.5 (line-height) + 0.35rem (margin-bottom)) = 3.7rem
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "space-between",
        overflow: "hidden",
      }}
    >
      <Typography
        gutterBottom
        fontSize="1rem"
        // variant="body1"
        component="h6"
        sx={{
          display: "-webkit-box",
          WebkitLineClamp: 2,
          WebkitBoxOrient: "vertical",
        }}
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

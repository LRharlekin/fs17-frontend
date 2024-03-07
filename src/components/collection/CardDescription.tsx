import { Box, Typography } from "@mui/material";

const CardDescription = ({ description }: { description: string }) => {
  return (
    <Box
      sx={{
        height: "3.8rem", // 3 * 0.875rem (font-size) * 1.43 (line-height) = 3.75375rem
        overflow: "hidden",
      }}
    >
      <Typography
        sx={{
          display: "-webkit-box",
          WebkitLineClamp: 3,
          WebkitBoxOrient: "vertical",
        }}
        variant="body2"
        color="text.secondary"
      >
        {description}
      </Typography>
    </Box>
  );
};

export default CardDescription;

import { Typography } from "@mui/material";

const CardDescription = ({ description }: { description: string }) => {
  return (
    <Typography variant="body2" color="text.secondary">
      {description}
    </Typography>
  );
};

export default CardDescription;

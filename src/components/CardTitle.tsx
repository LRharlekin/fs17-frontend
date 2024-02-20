import { Typography } from "@mui/material";

const CardTitle = ({ title }: { title: string }) => {
  return (
    <Typography gutterBottom variant="h5" component="div">
      {title}
    </Typography>
  );
};

export default CardTitle;

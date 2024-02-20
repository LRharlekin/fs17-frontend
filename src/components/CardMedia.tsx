import { CardMedia } from "@mui/material";
import { ElementType } from "react";

type Props = {
  component?: ElementType;
  height?: string;
  image?: string;
  alt?: string;
};

const CardMediaComponent = ({
  component = "img",
  height,
  image,
  alt,
}: Props) => {
  return (
    <CardMedia component={component} height={height} image={image} alt={alt} />
  );
};

export default CardMediaComponent;

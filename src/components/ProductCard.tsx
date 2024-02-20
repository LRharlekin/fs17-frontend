import { ReactNode } from "react";

import type { ProductType } from "../misc/types";

import { Card, CardContent } from "@mui/material";
import { Typography } from "@mui/material";
import { Button, CardActionArea, CardActions } from "@mui/material";

import CardMedia from "./CardMedia";

// type Props = Partial<ProductType>;
type Props = {
  media?: ReactNode;
  title?: ReactNode;
  description?: ReactNode;
  actions?: Array<ReactNode>;
};

const ProductCard = ({ media, title, description, actions }: Props) => {
  return (
    <Card>
      <CardActionArea>
        {media}
        <CardContent>
          {title}
          {description}
        </CardContent>
      </CardActionArea>
      {actions && actions.length > 1 ? (
        <CardActions>
          {actions[0]}
          {actions[1]}
        </CardActions>
      ) : null}
    </Card>
  );
};

export default ProductCard;

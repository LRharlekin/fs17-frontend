import { ReactNode } from "react";

import type { ProductType } from "../../misc/types";

import {
  Card,
  CardActions,
  CardActionArea,
  CardContent,
  Grid,
} from "@mui/material";

import CardMedia from "./CardMedia";

// type Props = Partial<ProductType>;
type ProductCardProps = {
  media?: ReactNode;
  title?: ReactNode;
  category?: ReactNode;
  description?: ReactNode;
  actions?: Array<ReactNode>;
};

const ProductCard = ({
  media,
  title,
  category,
  description,
  actions,
}: ProductCardProps) => {
  return (
    <Grid item xs={1}>
      <Card>
        <CardActionArea>
          {media}
          <CardContent>
            {category}
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
    </Grid>
  );
};

export default ProductCard;

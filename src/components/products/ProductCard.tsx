import { ReactNode } from "react";

import {
  Card,
  CardActions,
  CardActionArea,
  CardContent,
  Grid,
} from "@mui/material";

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
          <CardActions
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            {actions[0]}
            {actions[1]}
          </CardActions>
        ) : null}
      </Card>
    </Grid>
  );
};

export default ProductCard;

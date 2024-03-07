import { ReactNode } from "react";

import { useNavigate } from "react-router-dom";

import {
  Card,
  CardActions,
  CardActionArea,
  CardContent,
  Grid,
} from "@mui/material";

type ProductCardProps = {
  itemId: number;
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
  itemId,
}: ProductCardProps) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/product/${itemId}`);
  };

  return (
    <Grid item xs={1}>
      <Card>
        <CardActionArea onClick={handleCardClick}>
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

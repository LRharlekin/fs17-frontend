import React from "react";

import { Card, CardMedia, Grid } from "@mui/material";

type ProductImageProps = {
  title?: string;
  imageUrl?: string;
};

const ProductImage = ({ title, imageUrl }: ProductImageProps) => {
  return (
    <Grid item xs={1} sm={5} md={4}>
      <Card>
        <CardMedia
          sx={{ aspectRatio: 1 }}
          component="img"
          image={imageUrl}
          alt={title}
        />
      </Card>
    </Grid>
  );
};

export default ProductImage;

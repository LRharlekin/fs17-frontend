import React from "react";

import { Card, CardMedia, Grid } from "@mui/material";

type ProductImageProps = {
  title?: string;
  imageUrl?: string;
  colSpan?: number;
};

const ProductImage = ({ title, imageUrl, colSpan = 1 }: ProductImageProps) => {
  return (
    <Grid item xs={colSpan}>
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

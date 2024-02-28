import { useAppSelector } from "../../hooks";
import type { ProductType } from "../../misc/types";
import { useNavigate } from "react-router-dom";

// import { selectAllProducts } from "../redux/slices/productsSlice";

import { Button, Chip, Grid, Typography } from "@mui/material";

import AddToCartButton from "./AddToCartButton";
import CardMedia from "./CardMedia";
import CardTitle from "./CardTitle";
import CardDescription from "./CardDescription";
import CategoryChip from "./CategoryChip";
import ProductCard from "./ProductCard";

type ProductFeedProps = {
  feedData: Array<ProductType>;
};

const ActionsComponent = [
  <Button variant="contained" size="small" color="primary">
    More Details
  </Button>,
  <AddToCartButton />,
];

const ProductFeed = ({ feedData }: ProductFeedProps) => {
  const navigate = useNavigate();
  // const products = useAppSelector((state) => state.products);

  const renderedProducts = feedData.slice(0, 8).map((product: ProductType) => {
    return (
      <ProductCard
        key={product.id}
        media={
          <CardMedia
            height="140"
            image={product.images[0]}
            alt={product.title}
          />
        }
        title={<CardTitle price={product.price} title={product.title} />}
        category={<CategoryChip category={product.category.name} />}
        description={<CardDescription description={product.description} />}
        actions={ActionsComponent}
      />
    );
  });

  return (
    <>
      <Typography variant="h4" component="h2" gutterBottom>
        Category Heading
      </Typography>
      <Grid
        container
        spacing={2}
        columns={{
          xs: 1,
          sm: 2,
          md: 3,
          lg: 4,
        }}
      >
        {renderedProducts}
      </Grid>
    </>
  );
};

export default ProductFeed;

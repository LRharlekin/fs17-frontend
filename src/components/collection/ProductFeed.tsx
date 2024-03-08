import type { ProductType } from "../../misc/types";

import { Grid } from "@mui/material";

import AddToCartButton from "./AddToCartButton";
import CardMedia from "./CardMedia";
import CardTitle from "./CardTitle";
import CardDescription from "./CardDescription";
import CategoryChip from "./CategoryChip";
import MoreDetailsButton from "./MoreDetailsButton";
import ProductCard from "./ProductCard";

type ProductFeedProps = {
  feedData: Array<ProductType>;
};

const getActionsComponents = (itemId: number) => {
  const actionsArray = [];
  actionsArray.push(
    <MoreDetailsButton key={`more-details-${itemId}`} itemId={itemId} />
  );
  actionsArray.push(
    <AddToCartButton key={`add-to-cart-${itemId}`} itemId={itemId} />
  );
  return actionsArray;
};

const ProductFeed = ({ feedData }: ProductFeedProps) => {
  const renderedProducts = feedData.slice(0, 40).map((product: ProductType) => {
    return (
      <ProductCard
        key={`product-card-${product.id}`}
        itemId={product.id}
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
        actions={getActionsComponents(product.id)}
      />
    );
  });

  return (
    <>
      <Grid
        container
        my={6}
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

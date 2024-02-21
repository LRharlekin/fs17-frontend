import { Button } from "@mui/material";

import { useAppSelector } from "../hooks";
import type { ProductType } from "../misc/types";

// import { selectAllProducts } from "../redux/slices/productsSlice";

import ProductCard from "./ProductCard";
import CardMedia from "./CardMedia";
import CardTitle from "./CardTitle";
import CardDescription from "./CardDescription";
import AddToCartButton from "./AddToCartButton";

type Props = {
  feedData: Array<ProductType>;
};

const ActionsComponent = [
  <Button variant="contained" size="small" color="primary">
    More Details
  </Button>,
  <AddToCartButton />,
];

const ProductFeed = ({ feedData }: Props) => {
  // const products = useAppSelector((state) => state.products);

  const renderedProducts = feedData.map((product: ProductType) => {
    return (
      <ProductCard
        media={
          <CardMedia
            height="140"
            image={product.images[0]}
            alt={product.title}
          />
        }
        title={<CardTitle title={product.title} />}
        description={<CardDescription description={product.description} />}
        actions={ActionsComponent}
      />
    );
  });

  return (
    <div>
      <div>Product Feed</div>
      {renderedProducts}
    </div>
  );
};

export default ProductFeed;

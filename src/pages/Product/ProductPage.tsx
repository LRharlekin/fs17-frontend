import React, { useEffect } from "react";
import { AppState } from "../../app/store";
import { useNavigate, useParams, redirect } from "react-router-dom";
import {
  useAppSelector,
  useIncrementCartQuantity,
  useDecrementCartQuantity,
} from "../../hooks";

import { selectCartQuantityById } from "../../components/cart/cartSelectors";

import { useGetProductByIdQuery } from "../../services/productsApi";

import { Button, Grid, Divider, Typography } from "@mui/material";
import {
  Add as IncrementIcon,
  Remove as DecrementIcon,
  DeleteForever as RemoveIcon,
} from "@mui/icons-material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

// import ProductCard from "../../components/collection/ProductCard";
// import CardMedia from "../../components/collection/CardMedia";
import ProductImage from "../../components/product/ProductImage";
import Container from "../../components/common/Container";
import QuantityButtonGroup from "../../components/cart/QuantityButtonGroup";

import formatCurrency from "../../utils/formatCurrency";

const ProductPage = () => {
  const { id: idString } = useParams();
  const id = Number(idString);
  const { data: product, isSuccess } = useGetProductByIdQuery(id);
  const quantity = useAppSelector((state: AppState) =>
    selectCartQuantityById(state, id)
  );
  // const navigate = useNavigate();

  // <CardTitle price={product.price} title={product.title} />

  const incrementCartQuantity = useIncrementCartQuantity(id);
  const decrementCartQuantity = useDecrementCartQuantity(id);

  return (
    <Container component="main">
      <Grid
        container
        spacing={4}
        my={8}
        columns={{
          xs: 1,
          sm: 10,
        }}
      >
        <ProductImage title={product?.title} imageUrl={product?.images[0]} />
        <Grid
          item
          xs={1}
          sm={5}
          md={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <Typography
            variant="h3"
            component="h2"
            sx={{
              fontWeight: "bold",
              color: "secondary.dark",
              mb: 2,
            }}
          >
            {product?.title}
          </Typography>
          <Divider />
          <Typography variant="body1" color="text.primary" sx={{ my: 4 }}>
            {product?.description}
          </Typography>
          <Typography
            variant="h4"
            align="left"
            component="p"
            sx={{
              mb: 2,
            }}
          >
            {formatCurrency(product?.price)}
          </Typography>

          {/* ============== */}
          <QuantityButtonGroup size="medium">
            <Button
              variant="text"
              size="medium"
              onClick={decrementCartQuantity}
              color="secondary"
            >
              {quantity === 1 ? (
                <RemoveIcon fontSize="medium" color="error" />
              ) : (
                <DecrementIcon fontSize="medium" />
              )}
            </Button>
            <Typography
              color="secondary.dark"
              variant="body2"
              align="center"
              sx={{
                lineHeight: "1",
                margin: "auto",
                width: "2ch",
              }}
            >
              {quantity}
            </Typography>
            <Button
              variant="text"
              size="medium"
              onClick={incrementCartQuantity}
              color="secondary"
            >
              <IncrementIcon fontSize="medium" />
            </Button>
          </QuantityButtonGroup>
          {/* ============== */}

          <Button
            sx={{
              mx: "0",
              mt: 2,
            }}
            size="large"
            variant="contained"
            endIcon={<AddShoppingCartIcon />}
          >
            Add to cart
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProductPage;

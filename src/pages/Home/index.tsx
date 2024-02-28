import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { useGetAllProductsQuery } from "../../redux/services/productsApi";
import { setProducts } from "../../redux/slices/productsSlice";

import Container from "../../components/Container";
import ProductFeed from "../../components/products/ProductFeed";

import type { AppDispatch } from "../../redux/store";

const HomePage = () => {
  const dispatch: AppDispatch = useAppDispatch();
  const items = useAppSelector((state) => state.products);

  const {
    data: fetchedProducts,
    isLoading,
    isFetching,
    isSuccess,
    isError,
    error,
    refetch,
  } = useGetAllProductsQuery();

  useEffect(() => {
    if (isSuccess) {
      dispatch(setProducts(fetchedProducts));
    }
  }, [isSuccess, fetchedProducts, dispatch]);

  let content = null;
  if (isLoading) {
    console.log("isLoading");
    content = <div>Loading...</div>;
  } else if (isError) {
    console.log("isError");
    console.log("====================================");
    console.log(error);
    content = <div>Error</div>;
  } else if (isSuccess) {
    console.log("isSuccess !!!");
    console.log("fetchedProducts from useGetAllProductsQuery");
    console.log("====================================");
    console.log(fetchedProducts);
    content = <ProductFeed feedData={fetchedProducts} />;
  }

  return (
    <Container component="main">
      <h1>Home</h1>
      {content}
    </Container>
  );
};

export default HomePage;

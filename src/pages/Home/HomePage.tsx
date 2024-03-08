import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { useGetAllProductsQuery } from "../../services/productsApi";
import { setProducts } from "../../components/collection/productsSlice";

import Container from "../../components/common/Container";
import ProductFeed from "../../components/collection/ProductFeed";

import type { AppDispatch } from "../../app/store";

const HomePage = () => {
  const dispatch: AppDispatch = useAppDispatch();

  const {
    data: fetchedProducts,
    isLoading,
    // isFetching,
    isSuccess,
    isError,
    error,
    // refetch,
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

    console.log(error);
    content = <div>Error</div>;
  } else if (isSuccess) {
    console.log("fetchedProducts from useGetAllProductsQuery");
    console.log(fetchedProducts);
    content = <ProductFeed feedData={fetchedProducts} />;
  }

  return (
    <Container component="main">
      {/* <h1>Home</h1> */}
      {content}
    </Container>
  );
};

export default HomePage;

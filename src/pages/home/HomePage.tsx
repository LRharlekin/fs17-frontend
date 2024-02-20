import { useAppDispatch, useAppSelector } from "../../hooks";
// import { getAllProducts } from "../../redux/slices/productsSlice";

import ProductFeed from "../../components/ProductFeed";

const HomePage = () => {
  // on load, fetch products from the server

  return (
    <div>
      <h1>Home</h1>
      <ProductFeed />
    </div>
  );
};

export default HomePage;

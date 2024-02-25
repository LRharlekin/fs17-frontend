import { Link } from "react-router-dom";

import { useAppSelector } from "../../hooks";
import {
  selectCurrentUserName,
  selectCurrentUserEmail,
  selectCurrentToken,
} from "../../redux/slices/authSlice";

import Container from "../../components/Container";

const UserPage = () => {
  const user = {
    name: useAppSelector(selectCurrentUserName),
    email: useAppSelector(selectCurrentUserEmail),
    token: useAppSelector(selectCurrentToken),
  };

  const welcomeMessage = user.name ? `Welcome, ${user.name}!` : "Welcome!";

  return (
    <Container component="main">
      <h1>User</h1>
      <p>{welcomeMessage}</p>
      <p>
        <Link to="/manage-products">Manage Products</Link>
      </p>
      <p>
        <Link to="/manage-products">My Settings</Link>
      </p>
    </Container>
  );
};

export default UserPage;

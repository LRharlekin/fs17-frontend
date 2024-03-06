import { useLocation, Navigate } from "react-router-dom";

import { useAppSelector } from "../../hooks";

import { selectCurrentUserEmail } from "../../components/auth/authSelectors";

import Container from "../../components/common/Container";
import LoginForm from "../../components/auth/LoginForm";

const LoginPage = () => {
  const isLoggedIn = Boolean(useAppSelector(selectCurrentUserEmail));
  const location = useLocation();

  return isLoggedIn ? (
    <Navigate to="/profile" state={{ from: location }} replace />
  ) : (
    <Container component="main">
      <LoginForm />
    </Container>
  );
};

export default LoginPage;

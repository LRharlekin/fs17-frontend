import React, { useEffect } from "react";

import { Link } from "react-router-dom";

import { useAppSelector, useAppDispatch } from "../../hooks";
import { useGetUserWithSessionQuery } from "../../redux/slices/authApiSlice";

import {
  selectCurrentUserName,
  selectCurrentUserEmail,
  selectCurrentToken,
} from "../../redux/slices/authSlice";

import Container from "../../components/Container";
import { AppDispatch } from "../../redux/store";

const UserPage = () => {
  const dispatch: AppDispatch = useAppDispatch();

  const {
    data: fetchedSession,
    isLoading,
    isFetching,
    isSuccess,
    isError,
    error: fetchUserSessionError,
    refetch,
  } = useGetUserWithSessionQuery();

  useEffect(() => {
    if (isSuccess) {
      console.log("fetchedSession", fetchedSession);
      // dispatch(setUserSession(fetchedSession));
    }
  }, [isSuccess, fetchedSession, dispatch]);

  const user = {
    name: useAppSelector(selectCurrentUserName),
    email: useAppSelector(selectCurrentUserEmail),
    token: useAppSelector(selectCurrentToken),
  };

  console.log("UserPage name", user.name);
  console.log("UserPage email", user.email);
  console.log("UserPage token", user.token);

  const welcomeMessage = fetchedSession.name
    ? `Welcome, ${fetchedSession.name}!`
    : "Welcome!";

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

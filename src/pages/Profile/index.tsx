import React, { useEffect } from "react";

import { Link } from "react-router-dom";

import { useAppSelector, useAppDispatch } from "../../hooks";
import { useGetUserWithSessionQuery } from "../../redux/slices/authApiSlice";

import {
  selectCurrentUserName,
  selectCurrentUserEmail,
  selectCurrentToken,
} from "../../redux/slices/authSlice";

import { AppDispatch } from "../../redux/store";

import Container from "../../components/Container";
import AccountDataTable from "../../components/tables/AccountTable";

const ProfilePage = () => {
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

  console.log("ProfilePage name", user.name);
  console.log("ProfilePage email", user.email);
  console.log("ProfilePage token", user.token);

  let welcomeMessage = null;

  if (isLoading) {
    welcomeMessage = "loading";
  } else if (isError) {
    welcomeMessage = <p>error</p>;
  } else if (isSuccess) {
    welcomeMessage = fetchedSession.name
      ? `Welcome, ${fetchedSession.name}!`
      : "Welcome!";
  }

  return (
    <Container component="main">
      <h1>User</h1>
      <p>{welcomeMessage}</p>
      <AccountDataTable
        isLoading={isLoading}
        name={fetchedSession?.name}
        email={fetchedSession?.email}
        password={fetchedSession?.password}
        pictureSrc={fetchedSession?.avatar}
      />
    </Container>
  );
};

export default ProfilePage;

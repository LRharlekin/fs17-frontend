import React, { useEffect } from "react";

import { Link } from "react-router-dom";

import { useAppSelector, useAppDispatch } from "../../hooks";
import { useGetUserWithSessionQuery } from "../../redux/slices/authApiSlice";

import {
  selectCurrentUserName,
  // selectCurrentUserEmail,
  // selectCurrentToken,
  setUserSession,
} from "../../redux/slices/authSlice";

import { AppDispatch } from "../../redux/store";

import Container from "../../components/Container";
import AccountDataTable from "../../components/tables/AccountTable";
import type { AuthUserSessionResponse } from "../../misc/types";

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
      dispatch(setUserSession(fetchedSession as AuthUserSessionResponse));
    }
  }, [isSuccess, fetchedSession, dispatch]);

  // const user = {
  //   name: useAppSelector(selectCurrentUserName),
  //   email: useAppSelector(selectCurrentUserEmail),
  //   token: useAppSelector(selectCurrentToken),
  // };

  // const currentUserName = useAppSelector(selectCurrentUserName);

  // useEffect(() => {
  //   console.log("ProfilePage useEffect");
  //   console.log("current user name:", currentUserName);
  // }, [
  //   fetchedSession,
  //   isLoading,
  //   isSuccess,
  //   isError,
  //   fetchUserSessionError,
  //   currentUserName,
  // ]);

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
      <Link to="/manage-products">Manage Products </Link>
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

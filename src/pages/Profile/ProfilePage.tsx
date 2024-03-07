import React, { useEffect } from "react";

import { Link } from "react-router-dom";

import { useAppDispatch } from "../../hooks";
import { useGetUserWithSessionQuery } from "../../components/auth/authApiSlice";

import { selectCurrentUserName } from "../../components/auth/authSelectors";

import { setUserSession } from "../../components/auth/authSlice";

import { AppDispatch } from "../../app/store";

import Container from "../../components/common/Container";
import AccountDataTable from "../../components/profile/AccountTable";
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
      console.log("Profile page setUserSession");
      dispatch(setUserSession(fetchedSession as AuthUserSessionResponse));
    }
  }, [isSuccess, fetchedSession, dispatch]);

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

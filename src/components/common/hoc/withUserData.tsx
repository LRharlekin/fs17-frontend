import React, { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../../../hooks";
import { useGetUserWithSessionQuery } from "../../../components/auth/authApiSlice";
import { selectCurrentUserName } from "../../../components/auth/authSelectors";
import { setUserSession } from "../../../components/auth/authSlice";
import type { AuthUserSessionResponse } from "../../../misc/types";

const withUserData = (WrappedComponent: React.ComponentType) => {
  return (props: any) => {
    const dispatch = useAppDispatch();
    const userName = useAppSelector(selectCurrentUserName);
    console.log("username is: ", Boolean(userName));

    const {
      data: fetchedSession,
      isSuccess,
      refetch,
    } = useGetUserWithSessionQuery(undefined, { skip: Boolean(userName) });

    useEffect(() => {
      if (!userName && isSuccess) {
        dispatch(setUserSession(fetchedSession as AuthUserSessionResponse));
      }
    }, [userName, isSuccess, fetchedSession, dispatch]);

    return <WrappedComponent {...props} />;
  };
};

export default withUserData;

import React, { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../../../hooks";
import { useGetUserWithSessionQuery } from "../../../components/auth/authApiSlice";
import { selectCurrentUserName } from "../../../components/auth/authSelectors";
import { setUserSession } from "../../../components/auth/authSlice";
import type { AuthUserSessionResponse } from "../../../misc/types";

// Define a higher-order component (HOC) called withUserData
const withUserData = (WrappedComponent: React.ComponentType) => {
  // Return a new functional component that takes props as input
  return (props: any) => {
    // Access the Redux dispatch function using the useAppDispatch hook
    const dispatch = useAppDispatch();
    // Access the current user name from the Redux store using the selectCurrentUserName selector
    const userName = useAppSelector(selectCurrentUserName);

    // Use the useGetUserWithSessionQuery hook to fetch user data and session information
    const {
      data: fetchedSession, // Store the fetched session data
      isSuccess, // Boolean indicating if the query was successful
      refetch, // Function to manually refetch the data
    } = useGetUserWithSessionQuery(undefined, { skip: Boolean(userName) });

    // Use the useEffect hook to perform side effects
    useEffect(() => {
      // If the user name is present and the query was successful
      if (userName && isSuccess) {
        // Dispatch an action to set the user session in the Redux store
        dispatch(setUserSession(fetchedSession as AuthUserSessionResponse));
      }
    }, [userName, isSuccess, fetchedSession, dispatch]);

    // Render the wrapped component with the original props
    return <WrappedComponent {...props} />;
  };
};

export default withUserData;
